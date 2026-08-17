---
id: l1t4idtu4wto0u88aglpf8v
title: High Performance Rust Understanding And Eliminating Memory Fragmentation
desc: ''
updated: 1786971275984
created: 1786971275152
traitIds:
  - open-notebook-commons-ablood-literature
---
# [High-Performance Rust - Understanding and eliminating memory fragmentation](https://kerkour.com/rust-high-performance-memory-fragmentation-allocations)
Trying to allocate heap memory for embedded is difficult as the tolerances are much lower and allocations can fragment the allocation. This can cause the system to fail to allocate more heap memory. 
The stack however is much lower in for memory usage. 
## Heap Fragmentation: an underestimated enemy
Allocating many smaller objects on the heap causes gaps between them in memory, which is the fragmentation mentioned. 
## Jemalloc and mimalloc to the rescue
the two mentioned services are high througput allocators and are designed for just such situations. Simply using jemallocator halfed the memory use in the author's situation. But for embedded platforms you still need to go further. 
## Reducing heap allocations
There are three ways to reduce heap allocations:
1) heapless - use datastructs that have fixed capacity and stack or static allocated
2) byes - use ref counted byte buffers for clones and slices
3) smallvec - a vec-like type which is stack allocated as long as it is less than `N`. 
going heapless is the largest improvement as it is allocation-less:
```rust
pub const MAX_HASH_SIZE: usize = 48;

struct Handshake {
	some_hash: heapless::Vec<u8, MAX_HASH_SIZE>
}
```
this will do heapless storing of up to 48 byte hashes. But if you work with larger hash sizes, like for post-quantum hashes (that is a cool point), they can have a max size of `1216` and be too much for an embedded environment. 

Then you can use `bytes` as an alternative.
