# [Why We Built Our Own SQL Parser From Scratch A Rust Implementation Story](https://www.databend.com/blog/why-we-built-our-own-sql-parser-from-scratch)
**Demo Repo:** [github.com/zhihanz/sql-parser-demo](https://github.com/zhihanz/sql-parser-demo)
## 1. Introduction
- Databend faced performance bottlenecks in **SQL parsing**  13.29s of a 20s query were spent just parsing text into an AST.
- Existing solution: [`sqlparser-rs`](https://github.com/sqlparser-rs/sqlparser-rs).
- Problem: parsing overhead, memory usage, poor error messages, limited dialect flexibility.
- Core decision: **rewrite the parser from scratch** in Rust.
- Outcome: faster parsing (~3.3×), clearer errors, and a more maintainable architecture.
## 2. Why `sqlparser-rs` Wasn’t Enough
### 2.1 Limited Dialect Support
- Supporting **multiple SQL dialects** (MySQL, PostgreSQL, Hive) became untenable.
- Adding dialect features required modifying the parser core → risk of regressions, upstream delays.
- Needed **dynamic dialect composition** → explored `nom` parser combinators for modular grammar rules.
### 2.2 Poor Error Messages
- Default errors like `"syntax error at or near SELECT"` offered little context.
- Users struggled to locate syntax issues in large queries (200+ lines, multiple CTEs).
- Desired behavior: preserve parsing context, highlight **where** the parser got confused.    
- Example improvement:
```text
Expected ',' or 'FROM' after column name
Found: 'user_age'
Hint: Did you forget a comma after 'email'?
```
### 2.3 Memory Usage Issues
- Multiple string copies through tokenization → **5× input size in memory**.
- Needed **zero-copy parsing**, referencing input slices (`&str`) directly.
- Rust’s lifetime system made safe zero-copy designs possible.
## 3. Better Errors via Furthest-Error Tracking
### Problem
- Traditional parsers report the **first** error, often the least informative one.
- A smarter strategy: track the **furthest progress** before failure.
### Solution
- Maintain a structure recording how far parsing got and what was expected:
```rust
struct ErrorTracker {
	furthest_pos: usize,
	expected: Vec<String>,
	found: Option<String>,
}
```
- Report the **furthest error**  the point of maximum successful parsing.
- Improves user trust (“everything before here is OK”).
### Implementation Detail
- Used `RefCell` for interior mutability in demo; production parser passes context explicitly.
- Added **suggestion logic** using _Jaro-Winkler similarity_ to detect typos [^1]:
    - `"SELCT"` → `"SELECT"` (0.94)
    - `"FORM"` → `"FROM"` (0.91)
    - `"WHEER"` → `"WHERE"` (0.93)
- Suggestions triggered above 80% similarity threshold.
## 4. Zero-Copy Architecture
### Problem
- Conventional tokenizers duplicate text into owned `String`s.
### Zero-Copy Solution
- Represent tokens as **borrows into the original input**:
```rust
pub struct Token<'a> {
	pub text: &'a str,
	pub kind: TokenKind,
	pub span: Range<usize>,
}
```
- The caller retains ownership of the source string, ensuring lifetime safety.
- Result: drastically reduced allocations and memory footprint.
### Cascade Effect
- Once tokens were zero-copy, the **entire AST** could borrow from the source:
```rust
pub struct SelectStmt<'a> {
	pub columns: Vec<&'a str>,
	pub from: Vec<&'a str>,
}
```
- Final architecture achieved ~1.2× input size memory usage (down from 5×).
## 5. The CTE Recursion Trap
### Problem
- Deep recursive CTEs (e.g., `WITH RECURSIVE`) caused **stack overflow**.
- Developers mistakenly conflated **syntax analysis** with **semantic analysis**.
### Lesson
- **Parser’s job:** verify grammar (keywords, structure, balance).
- **Analyzer’s job:** interpret meaning (valid references, recursion, execution logic).
- Fix: mark `recursive: bool` and move recursion handling to the query planner.

```rust
pub struct With {
    pub recursive: bool,
    pub ctes: Vec<CTE>,
}
```
### Outcome
- 2,000+ lines of unnecessary code deleted.
- Principle: _“Parse syntax; analyze semantics later.”_
## 6. Advanced Implementation Patterns
### 6.1 Precedence as Data
- Traditional parsers encode operator precedence in nested functions.
- Databend switched to **data-driven precedence climbing (Pratt parser)**.
```rust
BinaryOperator::Or        => Precedence(5)
BinaryOperator::Multiply  => Precedence(60)
```
- Benefits:
    - Adding new operators = one line in a table.
    - Reduced function call depth → faster and simpler.
### 6.2 Property Testing
- Random input testing ensures parser never panics.
- Properties:
    - Parsing any valid SQL twice yields identical ASTs.
    - Detects deep nesting or Unicode edge cases.
### 6.3 Logic Fuzzing (`sqllancer`)
- Fuzz tests **entire pipeline**, not just parser:
    - Generate valid random SQL.
    - Compare Databend’s results vs PostgreSQL/MySQL.
    - Detect mismatches in execution semantics.
- Exposed subtle optimizer bugs (e.g., `JOIN + GROUP BY + window functions`).
## 7. Real-World Impact

|Metric|Before|After|Gain|
|---|---|---|---|
|Parse time|13.29s|~4s|**3.3× faster**|
|Memory use|~5× input|~1.2× input|**much lower**|
|Error quality|Generic|Contextual + suggestions|**improved UX**|
### Maintenance Benefits
- Adding dialects = configuration, not code fork.
- Precedence changes = single table entry.
- Error tracking aids internal debugging.
- Property tests prevent regressions.
### Architectural Takeaways
- **Performance problems = architecture problems.**
- Improvements emerged from:
    - Zero-copy design (memory model)
    - Furthest-error tracking (user feedback)
    - Syntax-only parsing (abstraction boundary)