[source](https://depth-first.com/articles/2020/12/14/an-abstract-syntatx-tree-for-smiles/)

# Blazingly fast SMILES Processing
String manipulation is non trivial and resource taxing. 
# Abstract Syntax Trees
Use of an AST could be helpful for SMILES. An AST has three types of nodes:
- Root Node: no parent and zero or more children nodes
- Interior Node: One parent and one or more children
- Leaf Node: One parent and zero children 
AST structs are recursive. Interior nodes can be attached become root nodes of their own trees. So assembly of an AST from fragments is possible. 
# Rust as an Abstract Syntax Tree Design Language
Rust does ASTs good. Static typing is good for validation. The type system is good. Enums good. 
# The Chemical Elements
Enums are great for representing atoms
# Bond kinds
can do enums for bonds too of course lol
# BracketSymbol
Same for brackets
# AtomKind
The same can be done for AtomKind 