---
id: w6f0bf2dltdxw9ljv4it195
title: The In Browser Vector Store That Remembers
desc: ''
updated: 1784899520190
created: 1784899397813
traitIds:
  - open-notebook-commons-ablood-literature
---
# [The in-browser vector store that remembers](https://singhpratech.github.io/ferrovec/)

An in-browser vector store called **ferrovec** that persists its index to disk (using [OPFS](https://web.dev/articles/origin-private-file-system)), allowing it to survive page refreshes and browser restarts.
Unlike most browser vector stores, it supports incremental insertion, remains synchronized across browser tabs, and requires no server.

Internally uses a Rust → WASM implementation of the **HNSW** approximate nearest-neighbor algorithm.
Provides a simple JavaScript API while hiding the Rust implementation behind WebAssembly.

**Features**:
- persistent storage using OPFS
- cross-tab synchronization via leader election
- offline and local-first
- incremental vector insertion (no index rebuilds)
- supports cosine, dot product, and L2 distance
- exports as a small (~33 KB gzipped) WASM module

[github](https://github.com/singhpratech/ferrovec)