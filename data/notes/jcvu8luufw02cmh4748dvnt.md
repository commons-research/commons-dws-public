# [A Little Rust Trait Limitation](https://www.thecodedmessage.com/posts/rust-trait-limitation/)
Rust compiler has a limitation with traits.
### The Issue:
```rust
use std::marker::PhantomData;

pub trait Simple {
    type State;
    fn do_stuff();
}

struct Parameterized<T> {
    _phantom: PhantomData<T>,
}

impl<T> Simple for Parameterized<T> {
    type State = u32;

    fn do_stuff()
    // where Self: Simple
    {
        let state: Self::State = 3;
        println!("{state}");
    }
}
```

If you include the commented out section the compiler will throw an error. 

### Trait bounds are promises callers make to callees
a function signature constitutes a contract between caller and callee -> specifying types of values the caller needs to provide -> and which value types the calle can expect to receive. 

### Trait bounds are capabilities callees rely on 
trai bounds are promises for the caller, they must be held. 

From the above example it *seems* like the compiler should have enough context to figure out we are using `State` and that it is `u32`, but when compiling `do_stuff()` the compiler will prefer the version found in the `where` clause. and this tells us nothing about the `Self::state` and `u32`. You can use correct syntax for this but the author's suggestion is: you shouldn't need that syntax. 

### Why's it matter? 
It is an unnecessary limitation of the current Rust version.