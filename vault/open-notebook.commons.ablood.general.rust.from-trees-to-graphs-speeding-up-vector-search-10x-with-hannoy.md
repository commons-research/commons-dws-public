---
id: 1kqtwm3vdvz261qtixsyyj4
title: From Trees To Graphs Speeding Up Vector Search 10x With Hannoy
desc: ''
updated: 1784643508449
created: 1784643507716
traitIds:
  - open-notebook-commons-ablood-literature
---
# [From trees to graphs - speeding up vector search 10x with Hannoy](https://blog.kerollmops.com/from-trees-to-graphs-speeding-up-vector-search-10x-with-hannoy)
## Motivation
Arroy’s design exposes fundamental limits:
* Tree-based ANN degrades badly for **high-dimensional embeddings (>20D)**
* Large leaf nodes reduce build time but:
  * Require many distance computations at query time
  * Cause high latency even for small k
* Making trees deeper:
  * Explodes build time
  * Increases index size
## Why Graph ANNs
Modern ANN systems favor **graph-based approaches** (HNSW, DiskANN):
* Build a navigable graph over all vectors
* Search via best-first traversal
* Logarithmic convergence to nearest neighbors
Key property: **Sparse Neighborhood Graph (SNG)**
* Neighbors of x are closer to x than to each other
* Ensures fast convergence during traversal
* Core invariant behind HNSW, DiskANN, hannoy
## Advantages of Graph ANNs
* Disk-friendly:
  * ~200 bytes per vector for edges (before compression)
* Query-time efficiency:
  * Explore neighbors incrementally
  * Fewer distance computations
* Simpler updates:
  * Insertions/deletions only affect local edges
* Avoids global rebalancing required by trees

## Hannoy Overview
* **Graph-based successor to arroy**
* KV-backed via **LMDB**
* Inspired by:
  * HNSW (Faiss, hnsw crate)
  * DiskANN / FreshDiskANN
* Uses Meilisearch crates:
  * heed
  * roaring-rs
  * steppe
Design goals:
* Retain disk-backed scalability
* Improve:
  * Indexing speed
  * Search latency
  * Disk usage
* Support:
  * Zero-copy
  * Persistence
  * SIMD
  * Online updates
  * Multi-phase indexing
## Incremental Updates: Core Challenge
Problem:
* Graph ANNs traditionally require full rebuilds
* Rebuilding large indexes is operationally expensive
DiskANN insight:
* Batch updates
* Merge lazily instead of eagerly
* Avoid constant full rebuilds
## Hannoy’s Update Strategy
* Track modified items via a bitmap:
  * New
  * Updated
  * Deleted
* Dring rebuild:
  * Deleted nodes trigger **DiskANN-style patching**
  * Neighbors of deleted nodes are reconnected
  * Prevents graph “holes”
  * Preserves SNG property
## Hybrid In-Memory + On-Disk Graph
* New inserts build a fresh **in-memory HNSW**
* Old on-disk graph remains authoritative
* Entry points from old graph are re-indexed
* Neighbor lookups:
  * Check LMDB first
  * Fall back to in-memory layers
  * Lazily link missing nodes
Result:
* Seamless merging of graphs
* <1% of old vectors re-indexed
* No disjoint subgraphs
* Recall preserved
## Benchmarking: Hannoy vs Arroy
Benchmarks on 1M vectors, cosine distance.
### High-Level Results
Across 768D, 1536D, 3072D embeddings:
* Index build time:
  * Up to ~10× faster
* Disk usage:
  * 2–5× smaller
* Search latency:
  * 6×–30× faster