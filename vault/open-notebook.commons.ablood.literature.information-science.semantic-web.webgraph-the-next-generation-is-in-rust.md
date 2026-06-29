---
id: 7plugvla5xsgjql4j95u81s
title: Webgraph The Next Generation Is In Rust
desc: ''
updated: 1782742037374
created: 1782742019093
traitIds:
  - open-notebook-commons-ablood-literature
---
[repo](https://github.com/vigna/webgraph-rs)
[source](https://dl.acm.org/doi/pdf/10.1145/3589335.3651581)
# Terms
- **Merkle graph**: graph representation used in Software Heritage for tracking software provenance
- **graph compression**: storing graph structure in compact form while preserving traversal/query capability
- **memory mapping (mmap)**: OS feature that maps file contents into virtual memory for on-demand access
- **zero-copy serialization**: accessing serialized data without fully deserializing it into new memory
- **JVM garbage collection (GC)**: automatic memory management in Java that introduces runtime unpredictability
- **JNI (Java Native Interface)**: mechanism for calling native code from Java, slow/complex
- **monomorphization (Rust)**: compile-time specialization of generic code → enables inlining, zero-cost abstractions
- **dynamic dispatch**: runtime method resolution via vtables (avoided in Rust implementation)
- **succinct data structure**: compressed representation supporting efficient rank/select queries
- **Elias-Fano encoding**: compressed representation of monotone sequences used for graph adjacency lists
- **bitstream encoding**: compact binary representation used for storing compressed graph edges
- **labeling system (graph labels)**: metadata attached to edges/nodes, redesigned as composable structures in Rust version
# Content
WebGraph is a **graph compression + traversal framework** used for huge real-world graphs.
## Experimental results

Graphs tested:
- Wikipedia graph
- .eu web graph
- Software Heritage graph (tens of billions of nodes)
Operations:
- random successor access
- BFS traversal
Results:
- 1.4x to 3.2x speedup vs Java

Speedups come from:
- fewer abstraction leaks
- better cache locality
- better inlining
- mmap-first design
  