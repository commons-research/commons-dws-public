---
id: 0h57aw0be2jnc3dxcpn3ajn
title: Rust
desc: ''
updated: 1745169550689
created: 1737625384436
---

## Functions

Rust is an expression based language.

- **Statements** are instructions that perform some action but do not return a value.

e.g. `let x = 6;`

- **Expressions** evaluate to a resulting value.

e.g. `x + 1`

## Crates

They are collection of rust code files. They are binary crates and library crates. Library crates contains code to be used in other programs an not on its own.

## Doc

If you don't remeber which traits and functions are available in your codebase you can run 

```bash
cargo doc --open
```

## Shadowing    

This is convenient when you want to reuse a variable without having to come up with a new name. 

```rust
let x = 5;
let x = x + 1;
let x = x * 2;
```



## Questions

What exactly is a variant. How is that different from a trait ?

Define 

- type
- trait
- struct
- enum
- variant
- module
- crate
- arms: an arm consist of a pattern to be matched agaisnt and the code to be run if the pattern is matched.

For example

```rust
let guess: u32 = match guess.trim().parse() {
    Ok(num) => num,
    Err(_) => continue,
};
```
This is also the case in an if statement. Each blocks of code associated to the if and else are called arms.

```rust
fn main() {
    let number = 3;

    if number < 5 {
        println!("condition was true");
    } else {
        println!("condition was false");
    }
}
```

## Iif Expressions

In rust, if should be associated to a boolean. 

When you have more than one `else if` expression you might want to refactor your code. Rust has a powerful branching construct called `match` for these cases.

## Data types

Two types of data types in Rust:
- scalar
- compound

### Scalar

Represents a single value. Rust has four primary scalar types: integers, floating-point numbers, Booleans, and characters.

#### integers

Signed or unsigned. Signed can be negative or positive. Unsigned can only be positive.

Char

specified with single quote 

e.g `let c = 'z';`
unlike strings which are specified with double quotes.

### Compound

- tuples
cannot grow or shrink. fixed lenght. 
e.g. `let tup: (i32, f64, u8) = (500, 6.4, 1);`


To access values of the tuple we destructure it

```rust
let tup = (500, 6.4, 1);
let (x, y, z) = tup;

println!("The value of y is: {}", y);
```

Another way to acess elements of the tupple is by using the index

```rust
let x: (i32, f64, u8) = (500, 6.4, 1);

let five_hundred = x.0;
let six_point_four = x.1;
let one = x.2;
```

- arrays

Unlike tupples, every element must be of the same type. They are fixed lenght. 

```rust
let a = [1, 2, 3, 4, 5];
```

To acess elements of an array we use the index

```rust
let a = [1, 2, 3, 4, 5];

let first = a[0];
let second = a[1];
```

## The Slice type



## Vectors

These are similar to arrays but can grow or shrink in size. 
They are stored in the heap rather than the stack which is the case for arrays.

Vectors can only store data of the same type.

The vec! macro is used to create a vector.

```rust
let v = vec![1, 2, 3];
```

## Ownership

Ownership is a set of rule governing how Rust manages memory.

Three possibilities for programming languanges:

- their is garbage collection periodically 
- the programmer must explicitily allocate and free memory
- memory is managed through a system of **ownership** with a set of rules checked by the compiler (rust)


### Stck versus heap

Think of stack as a pile of plates. _last in, first out._ You dont remove stuff from in between.
Yopu _push onto the stack_ or _pop off the stack_. All data on the stack must have known, fixed size.

On the hep, its different and less organized. The memory allocator check for a big enough spacem marks it as beeing in use and returns a _pointer._ This is called _allocating._ Because the pointer is know, fixed sized, you can in turn store it on the stack. 

Pushing on the stack is much quicker because you just have to add stuff on top. No time wasted in finding free space.
Similarly acccessing data on the stack is quicker.

#### Ownership rules

- each values in Rust as an owner.
- There can be only one owner at a time.
- When the owner goes out of scope, the value will be dropped.

#### Variable scope


The scope is the range within the programm for which an item is valid.

```rust
    {                      // s is not valid here, it’s not yet declared
        let s = "hello";   // s is valid from this point forward

        // do stuff with s
    }                      // this scope is now over, and s is no longer valid
```

What happens behind the scenes is that rust's `drop` function is automatically runned at the closing opf the curly brackets.


## References and borrowing


A reference is like a pointer in the sense that it is an adress to be followed to acess the data stored at this adress (data owned by another variable). But unlike a pointer, a reference is guaranteed to point to a valid value of a particular type for the life of that reference.


The ampersands represent a reference e.g `&s1`. Here you refer to some value, without taking ownership.

`*`is the _dereferencing_ operator.

Because we nevere had ownership when using a reference, we do not need to return the values from a function to give back ownership.
The creation of a reference is called _borrowing_.
Like in real life, if a person owns something, you can, sometimes, borrow it. When you are done you give it back, because you dont own it.


You cannot modify stuff you borrow if it is not mutable. However you can make mutable references.
One big restriction: if you have a mutable reference to a value, you cannot meke another reference to that value.


This allows rust to prevent data race condition.

This happens in the three sceanrii:

- two or more pointers access the same data at the same time.
- at least one of the pointers is beeing used to write to the data
- no mechanism used to synchronize acess to the data.

Rules of references.

- at any given time you can have either one mutable reference or any number of immutable references.
- references must always be valid.

## Structs

Structs are similar to Tuples.
Like tuples pieces of a struct can be different.
Unlioke tuples, in a Struct youll name each piece of data (these are called fields)

Once created, structs can be instantiated.

### Tuple structs

e.g. 
```rust 
struct Color(i32, i32, i32);
```

### Unit-like structs

Even simpler: they are things such as Unit-like structs.

```rust
struct AlwaysEqual;

fn main() {
    let subject = AlwaysEqual;
}
```

## Method syntax

Methods are like functions but unlike functions they are defined within the context of a _struct_ (or an **enum** or a **trait** object). 
There first parameter is always self, which respresnets the instance of the struct the method is beeing called on.

```rust
impl Rectangle {
    fn area(&self) -> u32 {
        self.width * self.height
    }
    fn width(&self) -> bool {
        self.width > 0
    }
    fn can_hold(&self, other: &Rectangle) -> bool {
       self.width > other.width && self.height > other.height
    }
}
```

These methods are called **associated functions**, they are indeed associated to the struct Rectangle. 
We can define associated function that DO NOT have self as their first parameters (they are thus not methods.9 because they do not need an instance of the type to work with.

These associated functions which are not methods are often used for constructors that will return a new instance of the structs.






## Enums

_Enums_ allow to define a type by enumerating its possible _variants._
Option is a particularly usefull enum. Encodes that a value can be either something or nothing.
Pattern matching using match makes it easy to run different code for different values of an enum.

One very common enum in rust is Option

```rust
enum Option<T> {
    None,
    Some(T),
}
```

You can even directly 

```rust
let some_number = Some(5);
let absent_number: Option<i32> = None;
```

Option has a large number of associated methods that can be checked at https://doc.rust-lang.org/std/option/enum.Option.html

### match control flow construct

You can thing of match as a coin sorting machine. The coins slide down a ramp with holes of incresaing size. The first hole fitting size sorts the condition.
think of it as conditional expression with if. But the big difference is that it doesnt need to be a boolean.


Remeber that the match arms are made by two parts :

- a pattern 
- some code

separtaed by => 

```rust
enum Coin {
    Penny,
    Nickel,
    Dime,
    Quarter,
}

fn value_in_cents(coin: Coin) -> u8 {
    match coin {
        Coin::Penny => 1,
        Coin::Nickel => 5,
        Coin::Dime => 10,
        Coin::Quarter => 25,
    }
}
```

Combining mathc and enums is extremely frequent pattern in rust programming.

fn plus_one(x: Option<i32>) -> Option<i32> {
    match x {
        None => None,
        Some(i) => Some(i + 1),
    }
}

fn main() {
    let five = Some(5);
    let six = plus_one(five);
    let none = plus_one(None);

    println!("six is {:#?} and none is {:#?}", six, none);
}

Matches in Rust are _exhaustive_: all the cases must be covered.


### catch all patterns and the _ placeholder


This is usefull when you which to aplly and action to some patterns but then apply the same action for the rest of the cases (i.e. a default action)

```rust
let config_max = Some(3u8);
match config_max {
    Some(max) => println!("The maximum is configured to be {max}"),
    _ => (),
}
```

The last arms catches all other possible cases. We are exhaustive and covered. The empty tuples means no action is taken.



### if let (when match get's a bit wordy ...)

```rust
let config_max = Some(3u8);
if let Some(max) = config_max {
    println!("The maximum is configured to be {max}");
}
```

### Pattern syntax

Patterns can be used to destructure struct, enums and tuples and use differents parts of these values.

```rust
fn main() {
    let p = Point { x: 0, y: 7 };

    match p {
        Point { x, y: 0 } => println!("On the x axis at {x}"),
        Point { x: 0, y } => println!("On the y axis at {y}"),
        Point { x, y } => {
            println!("On neither axis: ({x}, {y})");
        }
    }
}
```


Destructuring can work on nested object (here enums)

```rust
enum Color {
    Rgb(i32, i32, i32),
    Hsv(i32, i32, i32),
}

enum Message {
    Quit,
    Move { x: i32, y: i32 },
    Write(String),
    ChangeColor(Color),
}

fn main() {
    let msg = Message::ChangeColor(Color::Hsv(0, 160, 255));

    match msg {
        Message::ChangeColor(Color::Rgb(r, g, b)) => {
            println!("Change color to red {r}, green {g}, and blue {b}");
        }
        Message::ChangeColor(Color::Hsv(h, s, v)) => {
            println!("Change color to hue {h}, saturation {s}, value {v}")
        }
        _ => (),
    }
}
```

If you are not going to use a variable yet but want to ignore it. you prefix by _

fn main() {
    let _x = 5;
    let y = 10;
}

### Extra conditionals with Match guards.

A match guards is and additional if condition specified after the pattern in a match arms.Usefull to express complex logic when patterns are not enough.

## Strings

`String` is actually implemented as a wrapper around a vector of bytes with some extra guarantees, restrictions and capabilities.


## Traits


Shared functionalities across data types.
Similar to "interfaces" in other languages

### The orphan rule

Other crates that depend on the aggregator crate can also bring the Summary trait into scope to implement Summary on their own types. One restriction to note is that we can implement a trait on a type only if either the trait or the type, or both, are local to our crate. For example, we can implement standard library traits like Display on a custom type like Tweet as part of our aggregator crate functionality because the type Tweet is local to our aggregator crate. We can also implement Summary on Vec<T> in our aggregator crate because the trait Summary is local to our aggregator crate.
**But we can’t implement external traits on external types**. For example, we can’t implement the Display trait on Vec<T> within our aggregator crate because Display and Vec<T> are both defined in the standard library and aren’t local to our aggregator crate. This restriction is part of a property called coherence, and more specifically the orphan rule, so named because the parent type is not present. This rule ensures that other people’s code can’t break your code and vice versa. Without the rule, two crates could implement the same trait for the same type, and Rust wouldn’t know which implementation to use.

## Modules

## Hash Maps

these are equivalent to Python's dictionnaries, also called associative arrays in other languages.

HashMap<K, V> 
Stored on the heap.

Like Vectors, HashMaps are homegeneous, all of the keys miust have the same 

The HashMaps takes owner ship of the values insert inside.
You put them there by hashmap.insert(k, v)


#### Overwritting a value

if we 
hashmap.insert(k, v1)
hashmap.insert(k, v2)

v1 is overwritten

#### Adding value only if absent

hashmap.insert(k, v1)

hashmap.entry(k1).or_insert(v2)
hashmap.entry(k).or_insert(v2)

v1 is not overwritten because its already present



