---
id: 55rca7d15x55qo3zc5s7cwg
title: What I Learned Building A Self Corrupting File Format In Rust
desc: ''
updated: 1784540136825
created: 1784540135794
traitIds:
  - open-notebook-commons-ablood-literature
---
# [What I learned building a self-corrupting file format in Rust](https://www.aravpanwar.com/writing/building-decayfmt-in-rust/)
Created a tool that corrupts the data a small amount every time the file is opened (viewed). 
## Errors are values, and there is no unwrap
The crate returns an enum, rather than a string, to avoid panics. 
```rust
pub enum DecayError {
	Wrong_magic { found: [u8; 4]},
	...
}
```
## Parsing untrusted bytes without panicking
To survive the corruption and still open, a method called `read` is implemented that checks the length and returns either the `DecayErrror` or the `header` depending on if the length is correct. 
## The randomness is never seeded
Uses a probability derived from an *instability* value:
```rust
fn corrupt_text<R: Rng>(payload: &mut [u8], probability: f64, rng: &mut R) {
	for byte in payload.iter_mut() {
		if rng.gen::<f64>() < probability {
			*byte = rng.gen_range(0x20..=0x7E);
		}
	}
}
```
using the `thread_rng` is cryptographically secure as it is from the OS' entropy. No fixed value to reverse engineer. 
## Writing decay to disk without bricking the file (the one I got wrong first)
Using `fs::write` can fail, and if it fails mid write, the written file can be messed up or be missing the header. if the file is fully corrupted this way it fails to just be *decaying*. 

So to solve this he opens the file, reads past the header, and then overwrites the region changed in place. 
## Testing something that is different every run
Testing is harder as it different everytime due to the randomness of the decay. So testing things like *alpha bytes* that should not be changed is necessary. 
## Closing
Good exercise to learn about writing around failure, and handling failures without panicing. 