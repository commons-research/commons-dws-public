---
id: sivgem2usi8rutt8jzlydem
title: Cyclic Trait Implementations
desc: ''
updated: 1787579166252
created: 1787579165026
traitIds:
  - open-notebook-commons-ablood-literature
---
# [Cyclic Trait Implementations](https://smallcultfollowing.com/babysteps/blog/2026/08/10/cyclic-trait-solving/)
## What are cyclic trait implementations?
normally traits must be non-cyclic, aka inductive:
```rust
trait Dump {
	fn dump(&self)
}
```
then implement for `i32`:
```rust
impl Dump for i32 {
	fn dump(&self) {
		println!("{self}");
	}
}
```
Then `Rc<T>` and `Option`:
```rust
// impl RC
impl<T> Dump for Rc<T> wher T: Dump, {
	fn dump(&self) {
		T::dump(self)
	}
}
// impl Opt
impl<T> Dump for Option<T> where T: Dump, {
	fn dump(&self) {
		if let Some(v) = self {
			T::dump(v)
		}
	}
}
```
and the last impl for a recursive list:
```rust
struct List<T> {
	value: Rc<T>,
	next: Option<Rc<List<T>>>,
}

// Impl L 
impl<T> Dump for List<T> where T: Dump, {
	fn dump(&self) {
		Dump::dump(&self.value);
		if let Some(n) = &self.next {
			Dump::dump(n);
		}
	}
}
```
then doing `List<i32>:Dump` requires applying `impl L` to show `List<i32>: Dump` if `i32: Dump`. then need to apply `impl l` to show the `i32: Dump`. And did not have a cycle, where impl L proves impl L is valid.
## Cyclic logic sounds bad, but it can be exactly what you want
There are times it might be useful to validate tautologically (as it were). 
A motivating example is `#[derive(Clone)]`. The generated implementation normally adds a `T: Clone` bound:
```rust
impl<T> Clone for List<T>
where
    T: Clone,
{
    // …
}
````

But this can be unnecessarily restrictive. If `T` only occurs inside an `Rc<T>`, then `T` itself does not actually need to implement `Clone`, since cloning an `Rc<T>` does not clone the underlying `T`.
Instead, the compiler could reason about the actual fields:
```rust
impl<T> Clone for List<T>
where
    Rc<T>: Clone,
    Option<Rc<List<T>>>: Clone,
{
    // …
}
```

This allows the required bounds to follow from the structure of the type rather than simply requiring every generic parameter to implement the trait.
## Perfect derive
This approach is called **perfect derive**: generated trait bounds should reflect what the implementation actually requires rather than conservatively adding the trait to every generic parameter.
For `Clone`, the recursive structure works without requiring `T: Clone`:
1. `List<T>: Clone` requires `Rc<T>: Clone`
2. It also requires `Option<Rc<List<T>>>: Clone`
3. `Rc<T>: Clone` does not require `T: Clone`
4. `Rc<List<T>>: Clone` similarly does not require `List<T>: Clone`
So despite `List` being recursive, proving `Clone` does not actually produce a cyclic trait proof.
## But `Dump` actually creates a cycle
Applying the same perfect-derive pattern to `Dump` is different:
```rust
impl<T> Dump for List<T>
where
    Rc<T>: Dump,
    Option<Rc<List<T>>>: Dump,
{
    // …
}
```
To prove `List<i32>: Dump`:
1. `Rc<i32>: Dump` requires `i32: Dump` -> this is satisfied.
2. `Option<Rc<List<i32>>>: Dump` requires `Rc<List<i32>>: Dump`.
3. `Rc<List<i32>>: Dump` requires `List<i32>: Dump`.
4. But `List<i32>: Dump` is the original thing we were trying to prove.
So the proof becomes cyclic:
`List<i32>: Dump` -> `Option<Rc<List<i32>>>: Dump` -> `Rc<List<i32>>: Dump` -> `List<i32>: Dump`
The question is whether Rust can safely recognize some cycles like this as valid.
## We can't accept every cycle
Simply accepting cyclic proofs would make the trait system unsound. Consider:
```rust
trait Magic: Copy {}

impl<T> Magic for T
where
    T: Magic,
{}
```
If cycles were automatically accepted, then `String: Magic` could be "proven" using itself:
`String: Magic` -> `String: Magic`

But because `Magic: Copy`, proving `String: Magic` would imply `String: Copy`, even though `String` does **not** implement `Copy`. The cyclic implementation has provided no actual evidence; it is just a tautology. So the problem is not simply whether Rust should allow cyclic trait solving. It needs a way to distinguish **productive/useful cycles** from cycles that manufacture trait implementations from nothing.
## Soundness for traits
A rough definition of trait-system soundness:
- If Rust accepts a program where some code assumes `T: Trait`, there must actually be an applicable implementation of `Trait` for `T`.
The `Magic` example violates this because Rust could reach code assuming `String: Copy` without any valid `Copy for String` implementation.

This is the fundamental problem cyclic trait solving has to solve: **permit useful recursive reasoning without allowing cyclic reasoning to invent evidence that does not exist.**
