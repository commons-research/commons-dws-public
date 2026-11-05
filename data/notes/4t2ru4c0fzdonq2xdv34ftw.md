[[A Parallel and Distributed Rust Library for Core Decomposition on Large Graphs.pdf]]
## Notes:
No link to the actual tool found. The tool the paper is about doesn't have a link to it.
[source](https://arxiv.org/abs/2512.00233)
# Terms
- **K-core decomposition**: Provides hierarchical peeling of a network, finding denser and denser subgraphs that reveal features of the data.
- **k-core**: Maximal subgraph where every node has at least *k* neighbors inside the subgraph.
- **coreness**: Highest *k- where a node belongs to the *k*th core.
- **shared-memory system**: Parallel computation where threads operate on the same memory space.
- **message passing**: Nodes communicate updates to neighbors instead of using full global graph knowledge.
- **synchronization overhead**: Extra runtime cost from coordinating threads safely.
- **contention**: Multiple threads trying to access/update the same data at the same time.
- **cache-friendly data structure**: Data layout that improves CPU cache use, often faster than theoretically better structures.
- **Rayon**: Rust crate for high-level parallelism.
- **Mutex**: Lock used to protect shared data from unsafe concurrent access.
- **raw pointer**: Lower-level Rust pointer that avoids some safety checks, but requires `unsafe`.
# Intro
Graph structured data allows for reasoning about interactions, dependencies, and optimizations in heterogeneous systems. Graph abstraction is used in social networks, web graphs, cybersecurity, biological networks, distributed systems, cloud infrastructure, and federated learning.

*K-core decomposition* is useful because it gives an interpretable way to find dense/resilient parts of a graph.

For semantic web / knowledge graph work, this is relevant because RDF/KG data can also be treated as large graph structured data. K-core could help identify dense regions, central entities, structurally important concepts, or anomalous parts of the graph.

Problem:

- sequential k-core algorithms exist
- but modern graphs are too large for single-core computation
- graph algorithms are hard to parallelize because of irregular memory access, dependencies, and load imbalance
# Main contribution
The paper implements a Rust-based parallel library for k-core decomposition.
They adapt the distributed algorithm from Montresor et al. into a shared-memory Rust implementation.
They build 3 versions:
1. **SequentialK**: baseline implementation
2. **ParallelK**: parallel message-passing implementation
3. **FastK**: optimized version with less synchronization and better data layout
# SequentialK
SequentialK is the correctness baseline.
Each node stores:
- node id
- current coreness estimate
- neighbor list
- estimates for neighbor coreness values
- message queue for received updates
Nodes only communicate through messages, mimicking a distributed system.
# ParallelK
ParallelK adds multithreading on top of SequentialK.
They test:
1. parallel iterators
2. thread pools
3. native Rust threads
Rayon made parallelism easier, but native Rust threads gave better performance in their experiments.
Message queues use `Mutex` so threads can safely access/update them.
Problem:

- locks and barriers add overhead
- too much synchronization can reduce the gain from parallelism
# FastK
FastK is the optimized implementation.
Main changes:
- uses global shared vectors for estimates and active nodes
- reduces per-node duplicated state
- uses selective message propagation
- uses activation scheduling
- switches toward sequential-like processing when few nodes remain activ
Reported result:
- up to 11x speedup on 16 threads
- up to two orders of magnitude faster than NetworkX
# Semantic web relevance
Possible uses for semantic web / knowledge graph work:
- identify dense concept/entity regions
- find central entities beyond degree
- detect graph anomalies
- profile structural bias in a KG
- compare subgraphs/classes by coreness distribution
- scalable graph preprocessing before downstream ML
