
## Check for duplicate according to a column

```bash
cut -f1 '/home/allardpm/git_repos/COMMONS/dataset-extractor-lotus/data/230106_frozen_metadata_for_mines.csv' | sort | uniq -d
```
This will return the duplicates in the first column of the file.

