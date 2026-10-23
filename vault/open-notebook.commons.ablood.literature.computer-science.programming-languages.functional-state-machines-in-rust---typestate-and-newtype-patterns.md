---
id: dnu7yqc92b2y8o1nzplzzwp
title: Functional State Machines In Rust Typestate And Newtype Patterns
desc: ''
updated: 1792764481248
created: 1792764462759
traitIds:
  - open-notebook-commons-ablood-literature
---
# [Functional State Machines in Rust: Typestate and Newtype Patterns (Experience Report)](https://dl.acm.org/doi/10.1145/3830438.3830958)
## 1 Intro
Rust allows for concepts such as Algebraic Data Types (ADTs). However design patterns are still necessary for maintainable code. Gang of Four (GoF) patterns do not apply well to rust and prove antiquated. Design patterns have emerged in the Rust ecosystem. However their usefulness depends on the context of use. 

### 2.3 Qualitative Analysis
There isn't strong support for analysis of code comprehension (its a pretty subjective concept so that makes sense). However boiler plate can cut down on this readability. 
## 3 Case Studies
**Typestate Pattern** forces invariants at compile time. **Newtype Pattern** can be used to wrap another type and only expose functions as needed through the wrapper. **Functional Core, Imperative Shell** treats domain logic as the core, functionally, invoked by an imperative shell, handling external IO etc calls. 
## 4 Results
## 5 Conclusion
typestate and newtype did not incur further runtime costs, however typestate improved testability and decreased faults, as error detection is shifted to compile time. It does however impact readability. 