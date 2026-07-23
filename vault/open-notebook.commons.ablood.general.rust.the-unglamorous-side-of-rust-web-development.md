---
id: 0mrecygxp062c60uuv57zyy
title: The Unglamorous Side Of Rust Web Development
desc: ''
updated: 1784785034280
created: 1784785024126
traitIds:
  - open-notebook-commons-ablood-literature
---
# [The Unglamorous Side of Rust Web Development](https://blog.jetbrains.com/rust/2026/06/25/rust-web-development-2026/)
Authors chose to use cot.rs because of recurring issues with tool selection in rust ecosystem for each new project. 
## TL;DR
- async rust is hard to debug
- Rust based ORMs require schema in more than one place
- Error handling inconsistencies in frameworks
- macros are frequent in web dev but make problems
- compile times cost real time
- fragmented ecosystem
- cot.rs and others are helping make it better, still not fully there. 
## Async rust problems: debuggin, backtraces, and what nobody tells you
Async is great but complex to work with. Requiring a lot of knowledge about futures and async. This is especially true for debugging. The backtraces for async are large and hard to trace back. (note - maybe they should not be panicking at all to begin with and should do fuzzing ot help identify coverage issues?)
## Rust ORM and database access: Diesel, SeaORM, and the schema problem
Diesel essentially has 3 representations of the same data. SeaORM helps but migrations are still challenging to write with Rust + SQL. So they propose simplifying the ORM code more (this is an issue with the tools they use, not the language used to build them). 

## Error handling: Returning an error is easy; returning the right one is harder
They assert that error handling should be easy to write, and carry as much context as possible (why not just the context for the erorr?). Using axum there are two ways to do errors. Existing middleware and web frameworks have different ways to handle errors. 
## Metaprogramming: Useful magic is still magic
Macros work well but are black boxes and can have issues. error handling and tracing can be a headache. IDE support for macros is not always uniform. 
Generics are also powerful tools for reusable software, but for web application, it can increase overhead by a lot. (something to consider for the portal). 
## Iteration speed: "I changed a string, see you in a minute"
Compilation takes time, monomorphization for generics takes time in compilation. this is all real time that developers need to wait before testing the software built. macros are close to 70% of compile time. Speedups work minimally and have nominal impact. 
## Ecosystem fragmentation: choosing everything yourself
Due to how crates.io and crates work with eachother, things become fragmented very quickly in projects. Moreover a crate can and does easily lose support as the maintainer stops paying attention to it. 
## So, is it worth it? 
Rust is still a good choice they argue. 