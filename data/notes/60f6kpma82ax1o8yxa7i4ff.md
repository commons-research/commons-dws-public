# [Generic Numeric Computations in Rust](https://michaelmauderer.com/blog/generic-numeric-computations)
# The Problem
Implement moderately complex operations with traits (generics) 
```rust
fn double<T: Number>(value: T) -> T{
value+value}
```

`Number` is a trait that needs to be defined. It needs to support addition with another `Number` and produce a new `Number`:
```rust
trait Number: Add<Self, Output=Self> {}
```
Because `fn double` uses `value` twice, it needs to implement `Copy`. For `f32` and `f64` have copy so its ok for now. 

Type also needs to be `Sized` - meaning the size of values is known at compile time. This is because we need to store result of function, and that result must be sized. 

Trait becomes:
```rust
trait Number: Sized + Copy + Add<Self, Output=Self> {}
```
This should be complete for working with `f32` and `f64` data types. 

# A Basic Implementation
```rust
use core::ops::Add;
trait Number: Sized + Copy + Add<Self, Output=Self> {}

impl Number for f64{}
impl Number for f32{}

fn double<T: Number>(value: T) -> T {
	value+value
}

pub fn main() {
	double(4.09_f32);
	double(5.01_f64);
}
```
## Adding more arithmetic
To add support for the other operations need to add the traits for multiplication, etc. 
New trait:
```rust
trait Number: Sized + Copy + ADD<Self, Output=Self> + Mul<Self, Output=Self>
```
Now this can do basic arithmetic operations (+,-,\*,/)
**BUT if we try:**
```rust
fn circle_circumference<T: Number>(r: T) -> {
	2.0 * r * PI
}
```
This will not work because we cannot use float constants in our `T` as it is a `Number` not an `f64/32`
## Working with Constants
Cannot directly define literals for the `Number` and need to convert from existing numeric types, by implementing `From<T>` for a type we can create literals for.
So will need to define `PI` for our `Number`:
```rust
use std::f64;
trait Number: From<f64> + /* Other required traits */ {
	const PI: Self,
}

impl Number for f64 {
	const PI: Self = std::f64::consts::PI;
}

impl Number for f32 {
	const PI: Self = std::f32::consts::PI;
}
```

Can go further and macro for implementing constants for `Number`: 
```rust
macro_rules! impl_number_consts {
	($ty:ty, $($const_name:ident), *) => {
		$(const $const_name: Self = std::$ty::consts::$const_name;)*
	};
}

impl Number for f64 {
	impl_number_consts!(f64, PI, E, SQRT_2);
}
```

**complete working example:**
```rust
use std::ops::*;

trait Number:
    Sized +
    Copy +
    Add<Self, Output=Self> +
    Sub<Self, Output=Self> +
    Mul<Self, Output=Self> +
    Div<Self, Output=Self> +
    From<f64> {

    const PI: Self;

}

impl Number for f64 {
    const PI: Self = std::f64::consts::PI;
}

impl Number for f32 {
    const PI: Self = std::f32::consts::PI;
}

fn circle_circumference<T: Number>(r: T) -> T {
    T::from(2.0) * r * T::PI
}


```

## Adding Comparisons
We still can't compare our generic types, and can be used by adding hte `std` traits needed:
```rust 
	trait Number: Sized + Copy + Add<Self, Output=Self> + Mul<Self, Output=Self> + Sub<Self, Output=Self> + Div<Self, Output=Self> + PartialEq + PartialOrd {}

```

## Mathematical Functions
Still need to add support for stuff like `sin` and `exp` for the `Number` generic. 
Can use macros to help some but there will be a lot of boilerplate to make this generic work:
```rust
trait Number ...
    fn sin(self) -> Self;
    fn exp(self) -> Self;
    fn powf(self, other: Self) -> Self;
    // ... many more methods
}

```

and now should be able to write:
```rust
   fn fancy_maths<T: Number>(a: T, b: T) -> T {
       ( a.powf(T::from(3.0)) + b.powf(T::from(4.0)))
   }

```

# Using the `num_traits` Crate
Could use the crate for this instead of writing our own generic completely by hand. 

`num_trats` example:
```rust
use num_traits::Float;

fn double<T: Float>(value: T) -> T {
    value + value
}

fn circle_circumference<T: Float>(r: T) -> T {
    T::from(2.0).unwrap() * r * T::PI()
}

fn fancy_maths<T: Float>(a: T, b: T) -> T {
    a.powf(T::from(3.0).unwrap()) + b.powf(T::from(4.0).unwrap())
}

pub fn main() {
    println!("{}", double(4.09_f32));
    println!("{}", circle_circumference(2.0_f64));
    println!("{}", fancy_maths(2.0_f32, 3.0_f32));
}

```

# Conclusion and Next Steps
After this can extend generic to work on arrays of numbers, `ndarray` `nalgebra` and more. 
