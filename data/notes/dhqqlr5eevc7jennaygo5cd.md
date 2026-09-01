
### Count number of directories in current directory

```bash
find . -maxdepth 1 -type d | wc -l
```

Details at https://stackoverflow.com/a/17648137



### Find directories containing a specific pattern

```bash
find ./ -type d -name "qlever-ui"
```

