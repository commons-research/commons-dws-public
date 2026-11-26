# [Spells of protection from arithmetic overflow](https://bitfieldconsulting.com/posts/operators-of-death)
Dev will panic on an overflow but in production it will wrap and go to smallest number. 
However release behavior can be modified to check and panic:
```toml
[profile.release]
overflow-checks = true
```
Moreover multiplication is able to overflow too. 

The solution when worried about overflows/underflows is to use `checked_` methods. 

Checked methods simply return the value if successful and a `None` if not. wrapping the value in a `Some` when successful. 

can also do `overflowing_add` which returns a tuple of the number and the `bool` value of if it overflowed. Can be useful to handle overflows (know about them).

And wrapping can be enforced with `wrapping_add` which will wrap the value everytime the number goes over. 

The number can be constrained at the `MAX` with the `saturated_add` method, so it will not surpass the maximum value. 

Panicing can also be forced when an overflow occurs, with the `strict_add` method. 

