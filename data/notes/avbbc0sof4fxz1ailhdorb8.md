# [Cleanup your lifetime annotations in Rust with Rc and Arc](https://kerkour.com/rust-lifetimes-rc-arc)
Lifetime annotations are verbose and contribute to cognitive load. 
example:
```rust
// Haha is a struct to wrap a monad generator to provide a facade for any kind of generic iterator. Because.
struct Haha<'y, 'o, L, O>
  where for<'oO> L: FnOnce(&'oO O) -> &'o O,
  O: Trait<L, 'o, L>,
  O::Item : Clone + Debug + 'static {
    x: L,
}
```
# Why are lifetime annotations needed in the first place? 
Tells the compiler something will live longer and avoid messing up. 
## Lifetime Elision
Can simply omit lifetime annotation and it will elide it. But there rules:
1) each elided lifetime in fun argument becomes a distinct lifetime parameter
2) if there is 1 input lifetime it is assigned to all elided lifetimes in the return value of function
3) if there are multiple input lifetimes, and one is `&self` or `&mut` `self` is assigned to all elided output lifetimes. 
```rust
fn do_something(x: &u64)-> &u64 {
    println!("{}", x);
    x
}

// is equivalent to
fn do_something_else<'a>(x: &'a u64)-> &'a u64 {
    println!("{}", x);
    x
}
```
## Smart Pointers
### Rc
```rust 
use std::rc::Rc;

fn main() {
    let pointer = Rc::new(1);

    {
        let second_pointer = pointer.clone(); // or Rc::clone(&pointer)
        println!("{}", *second_pointer);
    }

    println!("{}", *pointer);
}
```
### Arc
```rust
use std::sync::{Arc, Mutex};
use std::{thread, time};

fn main() {
    let pointer = Arc::new(5);

    let second_pointer = pointer.clone(); // or Arc::clone(&pointer)
    thread::spawn(move || {
        println!("{}", *second_pointer); // 5
    });

    thread::sleep(time::Duration::from_secs(1));

    println!("{}", *pointer); // 5
}
```
Can't use `Rc` for `async` or across thread. So gotta use `Arc`. 