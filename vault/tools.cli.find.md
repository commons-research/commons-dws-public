---
id: dhqqlr5eevc7jennaygo5cd
title: Find
desc: ''
updated: 1769372671607
created: 1715236288747
---

### Count number of directories in current directory

```bash
find . -maxdepth 1 -type d | wc -l
```

Details at https://stackoverflow.com/a/17648137



### Find directories containing a specific pattern

```bash
find ./ -type d -name "qlever-ui"
```

