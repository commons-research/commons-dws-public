---
id: gfzi42tadewgaxswcy6qya2
title: Part 1
desc: ''
updated: 1786947698061
created: 1786947696042
traitIds:
  - open-notebook-commons-ablood-literature
---
Repo: https://github.com/brndnmtthws/idiomatic-rust-book
Forum: https://livebook.manning.com/book/idiomatic-rust/discussion
[[Part 2 Core Patterns]]
# Part 1: Building Blocks
## Rust-y  Patterns
**Design Patterns**: high-level (abstraction) patterns that aid in design and architect software. 
### 1.2 What design patterns are
Design patterns common throughout programming
**Design patterns are** 
- reusable
- Can be applied widely and broadly
- solve problems while being easy to reason with/about
- understood by other devs
- and *antipatterns* would be code that does not follow an established design pattern
#### What are antipatterns?
The opposite of a good pattern for solving a problem, can be seen as the *wrong* way. Rust is good at avoiding antipatterns to begin with. 


**Hierarchy**:
Architecture -> Design Patterns -> idioms
![[Pasted image 20251113212053.png]] The three pillars of good software design

### 1.3 Why this book is different
### 1.4 Tools You'll Need
- git
- rustup
- gcc or clang
### Summary
- good design patterns are reusable with broad application and solve common problems in programming
- Good design patterns get widely adopted
- Antipatterns is a poorly understandable design pattern, poorly specified, or considered detrimental
- Need Rust, Git, Gcc/LLVM Clang for Rust
- Use the repo
## 2 Rust's Basic Building Blocks
### 2.1 Generics
Generics are:
1) compile time abstractions
2) type-safe
3) enhance meta programming
Can use placeholders instead of concrete types, making code more broadly applicable. **Generics do increase compile time**. However Rust generics are still type safe!
#### 2.1.1 A Turing-complete type system
**Turing-Complete**: the rust type system can express any turing machine capable computation. So it can do anything a computer can do. 
Check out **[Minsky Machine](https://github.com/paholg/minsky)**, register-based counter machine, equivalent to a turing machine and equivalent to representinga  CPU. 
#### 2.1.2 Why generics?
Generics allow us to follow DRY - Don't repeat yourself, with Rust, because the compiler needs to know the types of everything at compile time, and without generics there is potential for a lot of repetitive code to meet the compiler's requirements. 

However generics can also introduce more overhead and make the code harder to read and writer. Therefore they may be used sparingly but likely will be worth the extra effort when they are needed and used. 
#### 2.1.3 Basics of Generics
basic generic struct:
```rust
struct Container<T> {
	value: T,
}
```
`T` represents the value that is being held (generic). A generic can be used in a struct, enum, function, `impl` block, etc. The use of the `<..>` usually indicates a generic. 

Usually the compiler can infer the generic type. When using a generic you cannot initialize with `None` as the compiler would not be able to infer the type. So annotation is needed: 
```rust
let container: Container<Option<String>> = Container {value: None};
```
With the type annotation on the left side of the assignment the compiler is able to understand the type. 

Another method is the `fn new()` constructor pattern. 
```rust
impl<T> Container<T> {
	fn new(value: T) -> Self {
		Self {value}
	}
}
```
The `impl` block uses `<T>` and passes the `value:T` into the `Container` as a new instance of `Container`. So doing it this way we can write:
```rust
let short_alt_container = Container::<Option<String>>::new(None);
```

Generics allow us to do things like recursion and are useful for things like linked lists:
```rust
#[derive(Clone)]
struct ListItem<T>
where
	T: Clone,
{
	data: Box<T>,
	next: Option<Box<ListItem<T>>>,
}
```

If you wanted to do the above without Option it could be done with an Enum:
```rust
enum NextNode<T> {
	Nex(Box<ListNode<T>>),
	End,
}
struct ListNode<T> {
	data: Box<T>,
	next: NextNode<T>,
}
```

#### 2.1.4 Exploring Rust's Option
```rust
pub enum Option<T> {
	None,
	Some(T),
}
```
This a super clear example of the use of a generic. That's what this is. `None` is just an enum variant, and if there's a value, its just another enum variant called `Some` which takes your generic `T`. 
#### 2.1.5 Marker Structs and Phantom types
**phantom types:** types that are used for generic parameters when they are not needed in a struct.
```rust
struct Dog<Breed> {
	name: String,
}
```
In the above example the `Breed` needs to be kept track for compilation reasons only and not after. Therefore the `Breed` is never defined beyond this generic use. To use the `Breed` we create some breeds:
```rust
struct Labrador {}
struct Retriever {}
struct Poodle {}
struct Dachshund {}
```
However the above phantom generic will throw an error as the parameter is never used. This can be gotten around by including:
```rust
use std::marker::PhantomData;
struct Dog<Breed> {
	name: String,
	breed: PhantomData<Breed>,
}
```
Thus anytime you want to use this struct you will need to provide the phantom data:
```rust
use std::marker::PhantomData;
let my_poodle: Dog<Poodle> = Dog {
	name: "Jeffery".into(),
	breed: PhantomData,
};
```
`PhantomData` is a marker struct, a **marker struct** is useful for specialized distinct types at compile time:
```rust
impl Dog<Labrador> {
	fn breed_name(&self) -> &str {
		"labrador"
	}
}
impl Dog<Retriever> {
	fn breed_name(&self) -> &str {
		"retriever"
	}
}
```
The above `impl` blocks are concrete specializations for `Dog` and therefore do not require the generic `Breed` parameter. The breed name is returned here directly, without it being stored in a field, and will be part of the program's data segment. 

Because the above `breed_name()` takes the parameter `&self` we do not need to specify the lifetime - `'static` . 

**Lifetimes and 'static**: Lifetimes are valid for as long as they are used. A lifetime has a similar syntax to a generic parameter but are not the same - `<'a>` would be a lifetime. 
```rust 
struct Dog<'a> {
	name: &'a str,
}
```
The above `str` has a lifetime of `'a` and must therefore be valid for as long as `Dog` is. `'static` is a special lifetime that lasts for the duration of the whole program. String literals are `'static` and do not necessarily need a lifetime assigned to them. Therefore returning a string you may return as `&'static str` to specify explicit lifetime. The `'static` lifetime is option but including it for a string literal ensures it is valid for the program duration. 

Testing the above code:
```rust
let my_poodle: Dog<Poodle> = Dog {
	name: "Jeffrey".into(),
	breed: PHantomData,
};
println!(
	"My dog is a {}, name {}",
	my_poodle.breed_name(),
	my_poodle.name,
);
```
which should output:
```bash
My dog is a poodle, named Jeffrey
```
#### 2.1.6 Generic Parameter trait bounds
**trait bounds**: a generics feature for controlling which types can be used with a specific structure. There can be multiple trait bounds for any parameter. 
The linked list example uses the `Clone` trait by deriving it, and given `Clone` to `T` by writing `where T: Clone`. 
```rust
#[derive(CLone)]
struct ListItem<T>
where T: Clone + Debug, {
	data: Box<T>,
	next: Option<Box<ListItem<T>>>,
}
```
### 2.2 Traits
Traits are very powerful abstractions. But need to be careful of:
1) Trait Pollution
2) Trait Duplication
#### 2.2.1 Why traits are not object-oriented programming
In Rust there are *objects* and objects are instances of a type, like an enum or struct, and represent state. However Rust does not have *inheritance*. Instead Rust uses traits. Traits can be added on top of any structure or data type and add features. traits define *functionality* rather than *is-a* relationship. 
#### 2.2.2 What's in a trait? 
Traits are a definition and optional implementations. The definition usually includes:
- A trait name
- Optional set of methods (and even optional default implementations)
- Optional placeholder generic types
- Optional set of required traits
The bare minimum of a trait:
```rust
trait MinimalTrait {}
```
*Implementations* apply the definition of the trait to a specific type. Do not need to implement a trait for all possible types. Traits can use generic data types. Basic example:
```rust
trait DoesItBark {  // trait definition block
	fn it_barks(&self) -> bool; // trait method signature
}

struct Dog;

impl DoesItBark for Dog {  //implementation block for the trait
	fn it_barks(&self) -> bool {
		true
	}
}
```
As trait definitions can be empty, and can therefore be used for metaprogramming. 
>In OOP, relationships are defined in terms of the objects themselves. In trait programming, relationships are defined in terms of which traits an object implements
rather than which object the behavior is implemented for a subtle but crucial distinction.

**Note:** Traits are NOT Object Oriented Concepts. Forget about OOP Here. 
#### 2.2.3 Understanding traits by examining object-oriented code
```rust
struct Rectangle {
	width: i32,
	height: i32,
}

impl Rectangle {
	pub fn new(width: i32, height: i32) -> Self {
		Self { width, height }
	}
}
struct Square {
	length: i32,
}
impl Square {
	pub fn new(length: i32) -> Self {
		Self { length }
	}
	pub fn get_length(&self) -> i32 {
		self.length
	}
}
pub trait Rectangular {
	fn get_width(&self) -> i32;
	fn get_height(&self) -> i32;
	fn get_area(&self) -> i32;
}

impl Rectangular for Rectangle {
	fn get_width(&self) -> i32 {
		self.width
	}
	fn get_height(&self) -> i32 {
		self.height
	}
	fn get_area(&self) -> i32 {
		self.width * self.height
	}
}

impl Rectangular for Square {
	fn get_width(&self) -> i32 {
		self.length
	}
	fn get_height(&self) -> i32 {
		self.length
	}
	fn get_area(&self) -> i32 {
		self.length * self.length
	}
}
```
#### 2.2.4 Combining generics and traits
Trait bounds tell the compiler when a given type must provide a particular trait implementation. Trait bounds can be done inline or with an explicit `wherre` clause. 
```rust
pub trait SelfDescribing {
	fn describe(&self) -> String;
}


// inline example
fn describe_type<T: SelfDescribing>(t: &T) -> String {
	t.describe()
}

// explicit where clause style
fn describe_type<T>(t: &T) -> String where T: SelfDescribing, {
	t.describe()
}
```

But if you try to use this code, e.g.:
```rust
let dog = Dog;
println!("I am a {}", describe_type(&dog));
```
It will produce an error as the trait bound is not satisfied. As you need to implement that trait binding for the `Dog`
```rust
impl SelfDescribing for Dog {
	fn describe(&self) -> String {
		"happy little dog".into()
	}
}
```

Doing so will let you print `I am a happy little dog`. 
The `&self` parameter can be dropped too, to make the trait bound more versatile. 
```rust 
pub trait SelfDescribing {
	fn describe() -> String;
}
```

Then you will need to subsequently drop the `&self` requirement in the `describe_type`:
```rust
fn describe_type<T: SelfDescribing>() -> String {
	T::describe()
}
```
If you include the `&self` you need an object to describe it. Without it can describe a type without an object. 

Traits are most commonly used to apply *generic functionality*, where behavior is shared across types. 
Problems with traits to be cautious about: 
1) *trait pollution*: Too many traits 
2) *trait duplication*:  when multiple traits are providing the same or similar functionality. 
#### 2.2.5 Deriving traits automatically
Rust has many traits built in, including `Clone`, `Debug`, and so on. There is a full list [here](https://doc.rust-lang.org/reference/special-types-and-traits.html). 
The `derive` attribute `#[derive]` automatically provides implementations. Example of using `#[derive]`
```rust
use std::fmt::Debug;

#[derive(Clone,Debug,Default)]
struct Pumpkin {
	mass: f64,
	diameter: f64,
}
```
The `Debug` trait allows for the `Pumkin` to be formatted as a string.  The `Clone` trait allows the struct to be freely cloned, and the `Default` allows for default values (0's). 

How these traits are defined in the standard library:
```rust
#[derive(Copy, PartialEq, PartialOrd, Eq, Ord, Debug, Hash)]
pub enum Option<T> {
	None,
	Some(T),
}
```
However you can also just write your own implementations for these traits as well, such as for `Default`:
```rust
impl Default for Pumkin {
	fn default() -> Self {
		mass: 2.0,
		diameter: 5.0,
	}
}
```
#### 2.2.6 Trait Objects
Rust has *trait objects* which allow treating an object as a trait rather than as a type. 
Trait objects *may* be considered dynamic dispatch, which would count as an antipattern, as opposed to using static dispatch. 
```rust
trait MyTrait {
	fn trait_hello(&self);
}

struct MyStruct1;

impl MyStruct1 {
	fn struct_hello(&self) {
		println!("Hello, world! from MyStruct1");
	}
}

struct MyStruct2;

impl MyStruct2 {
	fn struct_hello(&self) {
		println!("Hello, world! from MyStruct2");
	}
}

impl MyTrait for MyStruct1 {
	fn trait_hello(&self) {
		self.struct_hello();
	}
}

impl MyTrait for MyStruct2 {
	fn trait_hello(&self) {
		self.struct_hello();
	}
}

let mut v = Vec::<Box<dyn MyTrait>>::new();
v.push(Box::new(MyStruct1 {})); 
v.push(Box::new(MyStruct2 {}));
v.iter().for_each(|i| i.trait_hello());
```
Running the above should result in:
```bash
Hello, world! from MyStruct1
Hello, world! form MyStruct2
```
Traits cannot be stored as objects directly because they do not have a size `unsized` at compile time. `Box` can store objects that do not implement `Sized` so we put our trait in a box. Then we can put the box into the `Vec`, as a `Vec` cannot hold unsized itself either. Generally, the `sized` trait is necessary for any generics in Rust. `Box` is getting around the problem by decoupling the allocation and the container. 
##### Downcasting trait objects
trait objects can only call methods on the trait and not the concrete type. To do so you would need to *downcast*, `Box`,`Rc`,`Arc` can perform downcasting, along with the `Any` trait. To use a reference need to use `Any`, `downcast_ref()` that will return the reference. `'static` bound types can automatically derive `Any`. So works for `dyn Any + 'static`. Need to add an `as_any()` method to trait to get inner object. Updated Example: 
```rust
trait MyTrait {
	fn trait_hello(&self);
	// new
	fn as_any(&self) -> &dyn Any;
}

struct MyStruct1;

impl MyStruct1 {
	fn struct_hello(&self) {
		println!("Hello, world! from MyStruct1");
	}
}

struct MyStruct2;

impl MyStruct2 {
	fn struct_hello(&self) {
		println!("Hello, world! from MyStruct2");
	}
}

impl MyTrait for MyStruct1 {
	fn trait_hello(&self) {
		self.struct_hello();
	}
	fn as_any(&self) -> &dyn Any {
		self
	}
}

impl MyTrait for MyStruct2 {
	fn trait_hello(&self) {
		self.struct_hello();
	}
	fn as_any(&self) -> &dyn Any {
		self
	}
}
// now can:
println!("With a downcast:");
v.iter().for_each(|i| {
	if let Some(obj) = i.as_any().downcast_ref::<MyStruct1>() {
		obj.struct_hello();
	}
	if let Some(obj) = i.as_any().downcast_ref::<MyStruct2>() {
		obj.struct_hello();
	}
});
```
- This pattern should be carefully used as it could become an antipattern. 
- Cannot implement traits for types outside of your crate 
#### Summary 
- generics are a key abstraction in Rust that allow for type-safe code reuse
- generics can include type parameters to extend structs, enums, functions to create objects and functions to handle many types of values
- Generics are commonly used to create container types
- Traits allow sharing functionality on top of different types
# 3 Code Flow
Chapter will cover
- Discussing pattern matching
- Handling errors with pattern matching
- Review Rust's functional programming patterns
*Patter Matching* - allows for control of code flow and deconstructing of values, as well as optional case handling
*Functional Programming* - Build software around the unit of function
## 3.1 A tour of pattern matching
*Pattern matching* is a runtime feature, rather than a compile time feature. In rust all possible patterns must be accounted for. match statements start with the `match` keyword. 
### 3.1.1 Basics of pattern matching
Simplest way to illustrate patter matching is with an `Option`
```rust
fn some_or_none<T>(option: &Option<T>) {
	match option {
		Some(_v) => println!("is some!"),
		None => println!("is none!")
	}
}
```
To actually use the `_v` that we have above we need to implement the trait bound for `std::fmt::Display`:
```rust
fn some_or_none<T: std::fmt::Display>(option: &Option<T>) {
	match option {
		Some(v) => println!("is some {v}!"),
		None => println!("is none!")
	}
}
```
So if a value includes the `fmt::Display` bound then we can use this! 
#### Sourcing Security Vulnerabilities
70% of security vulnerabilities are memory based problems. Examples:
- Read/Write out of bounds
- dereferencing invalid pointers 
- memory use after freed
- freeing already free memory
- not handling error cases properly
Pattern matching is a key aspect to avoiding these issues. 

Can pattern match against ranges as well:
```rust
fn what_type_of_integer_is_this(value: i32) {
match value {
	1 => println!("The number one number"),
	2 | 3 => println!("This is a two or a three"),
	4..=10 => println!("this is 4 to 10"),
	_ => println!("number > 10 or less than 1")
}}
```
You can use pattern matching for destructuring things like tuples:
```rust
fn destructure_tuple(tuple: &(i32,i32,i32)) {
	match tuple {
		(first,..) => {
			println!("{first}")
		}
	},
	match tuple {
		(_,middle,_) => {
		println!("middle")
		}
	},
	match tuple {
		(.., last) => {
			println!("last")
		}
	},
	match tuple {
		(first, middle, last) => {
			println!("first: {first}, middle: {middle}, last: {last}")
		}
	}
}
```
Will always return the block with the first matching pattern. If you do not exhaust all situations basic clippy will still warn against this. 
You can implement a `guard` to help verify matches:
```rust
fn match_with_guard(value: i32, choose_first: bool) {
	match value {
		v if v == 1 && choose_first => {
			println!("First match: This value is equal to 1")
		}
		v if v == 1 && !choose_first => {
			println!("Second match: This value is equal to 1")
		}
		v if choose_first => {
			println!("First match: This value is equal to {v}")
		}
		v if !choose_first => {
			println!("Second match: This value is equal to {v}")
		}
		_ => println!("Fell through to the default case"),
	}
}
```
All matches must be on the same types. Bad example:
```rust
fn invalid_matching<T>(value: &T) {
	match value {
		"is a string" => println!("This is a string"),
		1 => println!("This is an integral value"),
	}
}
```
However we can use an `Enum` to match with distinct inner types:
```rust
enum DistinctTypes {
	Name(String),
	Count(i32),
}
fn match_enum_types(enum_types: &DistinctTypes) {
	match enum_types {
		DistinctTypes::Name(name) => println!("name={name}"),
		DistinctTypes::Count(count) => println!("count={count}"),
	}
}
```
### 3.1.2 Clean matches with the `?` operator
The `?` operator can be used to handle `Option` and `Result` operations cleanly. 
```rust
fn write_to_file() -> std::io::Result<()>{
	use std::fs::File;
	use std::io::prelude::*;
	
	let mut file = File::create("filename")?;
	file.write_all(b"File content")?;
	Ok(())
}
```
The `?` simply tells rust that if the line in question returns an `Error` than this function should stop running and also return an error. 
When there is no return type we can use the 'unit' or `()`. The function must match the return type of the line that is using the `?`. And this also means for error types, which is why you need to implement error types for others. 
## 3.2 Functional Rust
Rust's core functional programming features are *closures* and *iterators*. 
**Functional Programming** discourages changing/mutating state and guides programs to be composed of declarative functions. Functional programming also discourages side-effects, e.g. non-deterministic results such as with I/O or local state mutation. 
While Rust is not a purely functional language, it does have functional programming choices like opt in mutability with the `mut` keyword, along with closures and iterators. 
### 3.2.1 Basics of Functional Programming in Rust
A simple closure example:
```rust
let bark = || println!("Bark!"); // This isn't a pure functional program because it uses I/O
```
This is in fact a function that prints bark. It does not have braces because they are not necessary and there are no arguments to the function. A closure begins with a list of arguments between the `|` - pipes; then the code block. Another example:
```rust
let increment = |value| value + 1;
increment(1)
```
And then we can modify this to illustrate:
```rust
let print_and_increment = |value| {
	println!("{value} will be incremented and returned");
	value + 1
};
print_and_increment(5);
```
Closures become interesting when referencing *higher-order functions*, that take other functions as parameters. Iterators have higher order functions, including `map()`, `for_each()`, `find()`, `fold()`, and so on. Closures make the syntax more convenient. Simple example of higher-order function:
```rust
let left_value = || 1;
let right_value = || 2;
let adder = |left: fn() -> i32, right: fn() -> i32| {
	left() + right()
};
println!(
	"{} + {} = {}",
	left_value(),
	right_value(),
	adder(left_value,right_value)
);
```
### 3.2.2 Closure variable capture
Rust has 3 traits that help with functional programming: `Fn`, `FnMut`, `Fnonce`
- `Fn` is if for regular functions that can be called again and again. All arguments are going to be immutable.
- `FnMut` This uses mutable references and can still be called again and again as they do not consume the mutable value. 
- `FnOnce` This is for the functions that will consume themselves. They will consume the values that they capture. 
For closures, `FnOnce` is always implemented if the closure will consume any of the values captured. Such as:
```rust
let consumable = String::from("cookie");
let consumer = move || consumable;
consumer();
```
After calling `consumer` if you tried again it would throw an error because the value has already been consumed - `use of moved value`. `move |..|` is useful for transferring/assigning ownership of an object inside the closure without cloning/copying it. Using the `move` keyword is optional. But should be used to avoid ambiguity. With the closure traits and closures and generics there are many functional patterns that can be explored. 
### 3.2.3 Examining Iterators
Iterators are provided by the `Iterator` trait. Iterators come with: 
- `map`
- `for_each`
- `take`
- `fold`
- `filter`
- `find`
- `zip`
and many more methods. Handy stuff. 
Core of Rust iterators is: 
```rust
trait Iterator {
	type Item;
	fn next(&mut self) -> Option<Self::Item>;
}
```
To implement `Iterator` for your type you need to provide a `next()` and `Item`. 
Example for linked lists:
```rust
use std::cell::RefCell;
use std::rc::Rc;
type ItemData<T> = Rc<RefCell<T>>;
type LIstItemPtr<T> = Rc<RefCell<ListItem<T>>>;
struct ListItem<T> {
	data: ItemData<T>,
	next: Option<ListItemPtr<T>>,
}
impl<T> ListItem<T> {
	fn new(t:T) -> Self {
		Self {
			data: Rc::new(RefCell::new(t)),
			next: None,
		}
	}
}
struct LinkedList<T> {
	head: ListItemPtr<T>,
}

impl<T> LinkedLIst<T> {
	fn fnew(t: T) -> Self {
		Self {
			head; Rc::new(RefCell::new(ListItem::new(t))),
		}
	}
}
```
#### Rc and RefCell
They are small `pointers` that give some helpful functionality. 
- `Rc` provides reference counted pointer, so there can be *interior mutability*. Allows multiple references to the same location in memory. 
- `RefCell` allows for borrow checking at runtime rather than at compile time. This is helpful when you want to have multiple references to the same object and still have mutability. 

Iterators are *stateful* so they know where they are in the sequence of items, and go to the next item using `next()`. 

In the example, can store state in the linked list itself. 
```rust
struct LinkedList<T> {
	head: ListItemPtr<T>,
	cur_iter: Option<ListItemPtr<T>>,
}

impl<T> LinkedList<T> {
	fn new(t: T) -> Self {
		Self {
			head: Rc::new(RefCell::new(ListItem::new(t))),
			cur_iter: None,
		}
	}
}

impl<T> Iterator for LinkedList<T> {
	type Item = ListItemPtr<T>;
	fn next(&mut self) -> Option<Self::Item> {
		match &self.cur_iter.clone() {
			None => {
				self.cur_iter = Some(self.head.clone());
			}
			Some(ptr) => {
				self.cur_iter = ptr.borrow().next.clone();
			}
		}
		self.cur_iter.clone()
	}
}
```
and using this example:
```rust
let dinosaurs = LinkedList::new("Tyrannosaurus Rex");
let last_item = dinosaurs.last().expect("couldn't get the last item");
println!("last item = {}", last_item.borrow().data.borrow());
```
Now we can add `append()`:
```rust
impl<T> LinkedList<T> {
	fn new(t: T) -> Self {
		Self {
			head: Rc::new(RefCell::new(ListItem::new(t))),
			cur_iter: None,
		}
	}
	fn append(&mut seolf, t:T) {
		self.last()
			.expect("list was empty, but it should never be")
			.as_ref()
			.borrow_mut()
			.next = Some(Rc::new(ListItem::new(t)));
	}
}
```
Now can use `for_each` and `iter` over the list and append:
```rust
let mut dinosaurs = LinkedList::new("Tyrannosaurus Rex");
dinosaurs.append("Triceratops");
dinosaurs.append("Velociraptor");
dinosaurs.append("Stegosaurus");
dinosaurs.append("Spinosaurus");
dinosaurs
	.iter()
	.for_each(|ptr| {
		println!("data={}", ptr.borrow().data.borrow())}
);
```
### 3.2.4 Obtaining an iterator with iter(), into_iter(), and iter_mut()
The linked list should be iterable 3 ways: 
- `iter()` - iterates over immutable reference to the items in the list
- `iter_mut()` - iterates mutably over references to items
- `into_iter()` - consumes the list and iterates over the list 
There are usually 3 iterators made available for collections: 
1) Iterator over `T` that consumes `self` and provided by `into_iter(self)` 
2) Iterator over `&T` provided by `iter(&self)` 
3) Iterator over `&mut T` which is of course provided by `iter_mut(&mut self)`
Can add this functionality by implementing the `IntoIterator` trait. 
First create stateful iterator structs: 
```rust
struct Iter<T> {
	next: Option<ListItemPtr<T>>,	
}
struct IterMut<T> {
	next: Option<ListItemPtr<T>>,
}
struct IntoIter<T> {
	next: Option<ListItemPtr<T>>,
}
```
Each struct contains the pointer to the next item in the list. 
Now we update our `LinkedList<T>` implementation: 
```rust
impl<T> LinkedList<T> {
	fn new(t: T) -> Self {
		Self {
			head: Rc::new(RefCell::new(ListItem::new(t))),
		}
	}
	fn append(&mut self, t: T) {
		let mut next = self.head.clone();
		while next.as_ref().borrow().next.is_some() {
			let n = next
				.as_ref()
				.borrow()
				.next
				.as_ref()
				.unwrap()
				.clone();
			next = n;
		}
		next.as_ref().borrow_mut().next = Some(Rc::new(RefCell::new(ListItem::new(t))));
	}
	fn iter(&self) -> Iter<T> {
		Iter {
			next: Some(self.head.clone()),
		}
	}
	fn iter_mut(&mut self) -> IterMut<T> {
		IterMut {
			next: Some(self.head.clone()),
		}
	}
	fn into_iter(self) -> IntoIter<T> {
		IntoIter {
			next: Some(self.head.clone()),
		}
	}
}
```
Now to implement the `Iterator` trait for `Iter`, `IterMut`, `IntoIter`: 
```rust
impl<T> Iterator for Iter<T> {
	type Item = ItemData<T>;
	fn next(&mut self) -> Option<Self::Item> {
		match self.next.clone() {
			Some(ptr) => {
				self.next.clone_from(&ptr.as_ref().borrow().next);
				Some(ptr.as_ref().borrow().data.clone())	
			}
			None => None,
		}
	}
}
impl<T> Iterator for IterMut<T> {
	type Item = ItemData<T>;
	fn next(&mut self) -> Option<Self::Item> {
		match self.next.clone() {
			Some(ptr) => {
				self.next.clone_from(&ptr.as_ref().borrow().next());
				Some(ptr.as_ref().borrow().data.clone())
			}
			None => None,
		}
	}
}
impl<T> Iterator for IntoIter<T> {
	type Item = ItemData<T>; 
	fn next(&mut self) -> Option<Self::Item> {
		match self.next.clone() {
			Some(ptr) => {
				self.next.clone_from(&ptr.as_ref().borrow().next);
				Some(ptr.as_ref().borrow().data.clone())
			}
			None => None,
		}
	}
}
```
This is still not ideal and all three implementations are using identical logic and returning `Rc<RefCell<T>>`, whereas we want just `T` or `&T`. 
Vec's `into_iter()` method looks like this:
```rust
fn into_iter(self) -> slice::IterMut<'a, T>;
```
So `into_iter()` consumes the vec as it is passing `self` directly by value (not borrowed: `&self`). So changing our `IntoIter`: 
```rust
impl<T>a Iterator for IntoIter<T> {
	type Item = T;
	fn next(&mut self) -> Option<Self::Item> {
		match self.next.clone() {
			Some(ptr) => {
				self.next = ptr.as_ref().borrow().next.clone();
				let listitem = Rc::try_unwrap(ptr).map(|refcell| refcell.into_inner());j
				match listitem {
					Ok(listitem) => Rc::try_unwrap(listitem.data)
						.map(|refcell| refcell.into_inner())
						.ok(),
					Err(_) => None,
				}
			}
			None => None,
		}
	}
}
```
The above implementation allows us to extract first the `Refcell<T>` from the `Rc(Refcell<T>)`, then we extract `T` from the `RefCell<T>`.  And we are able to now return `T`, as an `Option`. Test case:
```rust
let mut dinosaurs = LinkedList::new("Tyrannosaurus Rex");
dinosaurs.append("Triceratops");
dinosaurs.append("Velociraptor");
dinosaurs.append("Stegosaurus");
dinosaurs.append("Spinosaurus");
dinosaurs
.into_iter()
.for_each(|data| println!("data={}", data));
```
and output:
```bash
data=Tyrannosaurus Rex
data=Triceratops
data=Velociraptor
data=Stegosaurus
data=Spinosaurus
```
The other two methods, `Iter` and `IterMut` will need to be modified in a different manner as they do not consume the values. `RefCell` does not allow for regular references to values. In order to work with the values via borrowing, we will need to use unsafe rust, bypassing the compiler checks. We will need to add a lifetime. `'a`, And there will be a pointer added as a copy called `PhantomData`, for capturing the lifetime. 
```rust
struct Iter<'a, T> {
next: Option<ListItemPtr<T>>,
data: Option<ItemData<T>>,
phantom: PhantomData<&'a T>,
}
struct IterMut<'a, T> {
next: Option<ListItemPtr<T>>,
data: Option<ItemData<T>>,
phantom: PhantomData<&'a T>,
}
```
**Lifetimes:**
Necessary to prevent dangling references. Key concepts for lifetimes:
- lifetime is the period a variable is valid. start at creation and ends in destruction
- a reference is valid for the lifetime, such as `'a`, naming for lifetimes can be arbitrary. 
- Reference is valid for lifetime of object it references OR lifetime of scope it was created in, whichever is shorter.
- Sometimes lifetimes must be explicitly stated, other times the compiler can infer them (elide)
- If lifetime cannot be inferred, compiler will throw error. 
- Lifetimes always exist in context of a reference and associated with a reference. no reference means no need for lifetime, and generally compiler will infer lifetime, and tell you when it cannot. 
If lifetime is added to a struct, then the duration would be the life of the struct object. 

For our example will need to initialize the `data` and `phantom` fields in both `iter()` and `iter_mut()`:
```rust
impl<T> LinkedList<T> {
fn iter(&self) -> Iter<T> {
	Iter {
		next: Some(self.head.clone()),
		data: None,
		phantom: PhantomData,
	}
}
fn iter_mut(&mut self) -> IterMut<T> {
		IterMut {
			next: Some(self.head.clone()),
			data: None,
			phantom: PhantomData,
		}
	}
}
impl<'a, T> Iterator for Iter<'a, T> {
	type Item = &'a T;
		fn next(&mut self) -> Option<Self::Item> {
			match self.next.clone() {
				Some(ptr) => {
					self.next = ptr.as_ref().borrow().next.clone();
					self.data = Some(ptr.as_ref().borrow().data.clone());
					unsafe { Some(&*self.data.as_ref().unwrap().as_ptr()) }
					}
				None => None,
			}
		}
}
impl<'a, T> Iterator for IterMut<'a, T> {
	type Item = &'a mut T;
	fn next(&mut self) -> Option<Self::Item> {
		match self.next.clone() {
			Some(ptr) => {
				self.next = ptr.as_ref().borrow().next.clone();
				self.data = Some(ptr.as_ref().borrow().data.clone());
				unsafe { Some(&mut *self.data.as_ref().unwrap().as_ptr()) }
			}
			None => None,
		}
	}
}
```
This method works by doing pointer **coercion**, however it is a bit messy doing it this way. It can be tested via:
```rust
let mut dinosaurs = LinkedList::new("Tyrannosaurus Rex");
dinosaurs.append("Triceratops");
dinosaurs.append("Velociraptor");
dinosaurs.append("Stegosaurus");
dinosaurs.append("Spinosaurus");
dinosaurs
	.iter()
	.for_each(|data| println!("data={}", data));
dinosaurs
	.iter_mut()
	.for_each(|data| println!("data={}", data));
```
Now to update the `IntoIterator` trait and remove the `impl<T> Iterator for LinkedList<T>` block:
```rust
impl<'a, T> IntoIterator for &'a LinkedList<T> {
	type IntoIter = Iter<'a,T>;
	type Item = &'a T;
	fn into_iter(self) -> Self::IntoIter {
		self.iter()
	}
}
impl<'a T> IntoIterator for &'a mut LinkedList<T> {
	type IntoIter = IterMut<'a, T>;
	type Item =  &'a mut T;
	fn into_iter(self) -> Self::IntoIter {
		self.iter_mut()
	}
}
impl<T> IntoIterator for LinkedList<T> {
	type IntoIter = IntoIter<T>;
	type Item = T;
	fn into_iter(self) -> Self::IntoIter {
		self.into_iter()
	}
}
```
Now the `LinkedList` can be used in a `for` loop. The `impl` block to use is based on the type passed to the `for` loop. Now a lot of built in rust functionality is unlocked, including `for_each()`, `map()`, `reduce()`, `filter()`, `zip()`, `fold()`. 
	**NOTE:** `for_each()` method is preferred over `for` loop. the method accepts a function as its argument, so can pass a closure or a function directly. 
### 3.2.5 Iterator Features
Iterators unlock things like `map()`, map works like this:
```rust
fn map<B, F>(self, f: F) -> Map<Self, F>
where
	F: FnMut(Self::Item) -> B,
{ ... }
```
Remember that `map()` and other methods used with iterators are lazy and will not compile a value until forced to, such as when using `collect()`.  When working with iterators and functions on the values that return results, you can use `flat_map()` to return the `Result` rather than using `unwrap()` on each value. `flat_map()` calls `Result::into_iter()` which returns an iterator over `OK` values. `Err` values are simply ignored when flattening! Another approach that we could use is to collect the errors using `partition()`:
```rust
let arr = ["duck", "1", "2", "goose", "3", "4"];
let (successes, failures): (Vec<_>, Vec<_>) = arr
	.iter()
	.map(|v| v.parse::<i32>())
	.partition(Result::is_ok);
println!("successses={:?}", successes);
println!("failures={:?}", failures);
```

**tip**: avoid using `for` and `while` constructs with iterators. Instead use `for_each()`, and `map_while()`. 

Hers a good example of chaining with iterators in Rust, along with `Enumerate`: 
```rust
let popular_dog_breeds = vec![
	"Labrador",
	"French Bulldog",
	"Golden Retriever",
	"German Shepherd",
	"Poodle",
	"Bulldog",
	"Beagle",
	"Rottweiler",
	"Pointer",
	"Dachshund",
];
let ranked_breeds: Vec<_> = popular_dog_breeds.into_iter().enumerate().collect();
println!("{:?}", ranked_breeds);
```
Which yields:
```rust
[(0, "Labrador"), (1, "French Bulldog"), (2, "Golden Retriever"),
(3, "German Shepherd"), (4, "Poodle"), (5, "Bulldog"), (6, "Beagle"),
(7, "Rottweiler"), (8, "Pointer"), (9, "Dachshund")]
```
This can be further enhanced if you want to count from one by: 
```rust
let ranked_breeds: Vec<_> = popular_dog_breeds
	.into_iter()
	.enumerate()
	.map(|(idx, breed)| (idx + 1, breed))
	.collect();
```
And you can go further by reversing and counting down!
```rust
let ranked_breeds: Vec<_> = popular_dog_breeds
	.into_iter()
	.enumerate()
	.map(|(idx, breed)| (idx+1, breed))
	.rev() // reverse the list
	.collect();
```
## Summary
- Pattern matching allows us to unpack data structures and handle a variety of scenarios in a much cleaner way than using combinations of `if/else` statements.
- We can use pattern matching with the `?` operator to handle errors gracefully
and unwrap or destructure values.
- We can destructure nested structs and enums when pattern matching, and we
can also match on values.
- Rust encourages functional programming patterns, particularly with closures
and iterators. Learning these patterns will help you use Rust effectively.
- Iterators use a fluent interface, and along with closures, we can easily express
operations and mutations on data structures.
- Iterators typically hold a reference to the data (such as borrowed data) or use a
move to move the items out of the underlying sequence.
- Usually, the `iter()` method returns an iterator with references, and `into_iter()`
gives us an iterator that takes ownership with a move.