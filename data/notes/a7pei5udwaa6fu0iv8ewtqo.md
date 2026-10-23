# [Generalizing over mutability in Rust](https://alexsaveau.dev/blog/tips/generalizing-over-mutability-in-rust)
need to differentiate between `&buf[i]` and `&mut buf[i]`
```rust 
trait Buf<T> {
    type F;

    fn do_(&mut self, f: &mut Self::F, i: usize) -> bool;
}

impl<T, F: FnMut(&T)> Buf<T> for (&[T], PhantomData<F>) {
    type F = F;

    fn do_(&mut self, f: &mut F, i: usize) -> bool {
        let (buf, _) = self;
        if i < buf.len() {
            f(&buf[i]);
            true
        } else {
            false
        }
    }
}

impl<T, F: FnMut(&mut T)> Buf<T> for (&mut [T], PhantomData<F>) {
    type F = F;

    fn do_(&mut self, f: &mut F, i: usize) -> bool {
        let (buf, _) = self;
        if i < buf.len() {
            f(&mut buf[i]);
            true
        } else {
            false
        }
    }
}

fn process_items<T, B: Buf<T>>(mut buf: B, mut f: B::F) {
    let mut i = 0;
    loop {
        if !buf.do_(&mut f, i) {
            break;
        }
        i += 1;
    }
}

fn main() {
    let foo = ["a", "b", "c"];
    process_items((foo.as_slice(), PhantomData), |item| println!("{item}"));
    println!();

    let mut bar = ["a".to_string(), "b".to_string(), "c".to_string()];
    process_items((bar.as_mut_slice(), PhantomData), |item| {
        *item = format!("{item}{item}")
    });
    println!("{bar:?}");
}
```

