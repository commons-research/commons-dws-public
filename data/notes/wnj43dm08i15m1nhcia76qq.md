# [Improving std::simd::swizzle_dyn](https://shnatsel.github.io/improving-std-simd-swizzle-dyn/)
## What is a swizzle? 
A swizzle rearranges elemnts in an array. 
## Understanding the implementation
simplisticly uses native hardware ops when possible or moves bytes one at a time if needed. 
## The balck sheep of `std::simd`
The LLVM prefers generics to platform specific operations. `swizzle_dyn` does not emit generics:
```rust
#[cfg(target_feature = "neon"))]
unsafe fn armv7_neon_swizzle_u8x16(bytes: Simd<u8, 16>, idxs: Simd<u8, 16>) -> Simd<u8, 16> {
    use core::arch::arm::{uint8x8x2_t, vcombine_u8, vget_high_u8, vget_low_u8, vtbl2_u8};
    unsafe {
        let bytes = uint8x8x2_t(vget_low_u8(bytes.into()), vget_high_u8(bytes.into()));
        let lo = vtbl2_u8(bytes, vget_low_u8(idxs.into()));
        let hi = vtbl2_u8(bytes, vget_high_u8(idxs.into()));
        vcombine_u8(lo, hi).into()
    }
}
```
the feature flag `neon` is what is slowing down performance for swizzle. To bypass it you have to use `-Z build-std` and pass `RUSTFLAGS=-C target-cpu=`, to improve performance. 
## No NEON?
`std::simd` has its own repo and is then synced to the std. 
## Was it worth it? 
improving singl SIMD operations doesn't necessarily improve algorithms that might be using it. 