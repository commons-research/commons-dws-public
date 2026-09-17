# [Get in Line - superfast SPSC Queue](https://abhikja.in/blog/2025-12-07-get-in-line/)
Author built a bounded **SPSC (single-producer / single-consumer)** queue in Rust
# Starting Simple
Baseline: `VecDeque<T>` behind `Arc<Mutex<...>>` with spin loops.
Key observations:
* Correctness is easy, performance is awful.
* Spin loops inflate benchmarks but are terrible in real apps (burn CPU).
Results (rough):
* Latency: ~1–4 µs
* Throughput: ~133–206 MiB/s
# Conditional Variables
Replace spin-locking with `Condvar` to sleep/wake.
Tradeoffs:
* Latency regresses (wakeups / syscalls / scheduling)
* Throughput improves a lot vs naive mutex-spin
* Much more “real application friendly” (doesn’t burn CPU)
Results (rough):
* Latency: ~2.2 µs
* Throughput: ~430–445 MiB/s
# Separating / Sharding the Shared State
Idea: lock only `head` and `tail` separately, since producer mostly cares about tail and consumer about head.
Reality:
* Easy to introduce **deadlock** if locks are taken in different orders.
* Even after fixing order, performance becomes *worse* due to taking multiple locks and more sync overhead.

“Shard state” is on the right track, but locks are the wrong primitive here.
# Waiting to Sync (Shadow Variables)
Idea: keep local cached copies (“shadow head/tail”) so you don’t lock/sync every time.
Only sync when you hit full/empty.
Result:
* Doesn’t help much when locks are still involved.
* Flamegraphs still show lock waiting dominates.

Shadowing is good, but you need cheaper synchronization than Mutex.
# Atomics
Replace `Mutex<usize>` with `AtomicUsize` for `head` and `tail`.
Why it works well for SPSC:
* Only one thread writes each index (producer writes tail, consumer writes head)
* So you can avoid CAS loops and just load/store with appropriate ordering
Result: massive jump.
* Latency drops to ~130–155 ns
* Throughput rises to ~721–754 MiB/s
