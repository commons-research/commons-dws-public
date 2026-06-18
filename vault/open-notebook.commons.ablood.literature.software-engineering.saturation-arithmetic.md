---
id: zgae5rw5jkknybl1l9beyoy
title: Saturation Arithmetic
desc: ''
updated: 1781753034474
created: 1781753029235
traitIds:
  - open-notebook-commons-ablood-literature
---
# [Part 1: Wikipedia](https://en.wikipedia.org/wiki/Saturation_arithmetic)
**Saturation Arithmetic**: all arithmetic operations are limited to a fixed range *min* and *max* value.

If result is > or < these values then it is **clamped** to that value.
e.g.:
- $60+30 \rightarrow 90$
- $60+43 \rightarrow 100$ (not 103)
- $(60+43) - (75+25) \rightarrow 0$ , rather than 3 
## Modern Use
In computing it is useful for getting as close numerically to the true answer as possible, rather than the wrap around that occurs with modular arithmetic. 
- also enhances algorithms in many problems. 
# [Part 2: Rust Forum Post](https://users.rust-lang.org/t/saturating-what-does-it-really-do-and-when-is-it-useful/52720)
Integers have finite ranges (0 to $2^n-1$) depending on the bits n they use:
- u8: 0 - $2^8$ - 1 (255)
There are three options to handle an arithmetic operation that results in a value that does not fit this finite range:
1) wrap around
2) saturate at the $2^n-1$ for addition and 0 for subtraction
3) check the value and result in a panic (rust specific)
# [Part 3: Rust std::num Documentation](https://doc.rust-lang.org/beta/std/num/struct.Saturating.html)
Although values for `u32` should never overflow, sometimes in certain debug situations a panic may result. Thus saturation can be used.
Example: 
```rust
use std::num::Saturating;
let max = Saturating(u32::MAX);
let one = Saturating(1u32);
assert_eq!(u32::MAX, (max_one).0);
```

#concepts #computerscience #arithmetic #algorithms  #notes #research #explanation #reference #saturation #saturation_arithmetic #mathematics #rust #rustlang 