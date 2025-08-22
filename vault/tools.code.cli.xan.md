---
id: 5tprd81va2u8pdzwarhr98t
title: Xan
desc: ''
updated: 1755520226701
created: 1755515713497
---

### Filter rows with empty or "NA" values in the ScientificName column


`xan filter '(ScientificName eq "NA") or (len(trim(ScientificName)) eq 0)' taxon_name_gnverified_col.tsv`

### Filter rows with empty TaxonomicName in kew-species-list.csv and save to a new file

`xan filter !'(len(trim(TaxonomicName)) eq 0)' kew-species-list.csv > kew-species-list-nona.csv`

### Select specific columns from a file

`xan select TaxonomicName kew-species-list-nona.csv > taxon_names.csv`

### (not a xan command) Use gnverifier

`gnverifier -f csv -s 1 taxon_names.csv > taxon_name_gnverified_col.csv`

### View some stats 

xan stats taxon_name_gnverified_col.csv | xan v

#### Deduplicate rows based on ScientificName

xan dedup -s ScientificName taxon_name_gnverified_col.csv > taxon_name_gnverified_col_deduped.csv

### Left join two files on ScientificName

xan join --left TaxonomicName kew-species-list-nona.csv ScientificName taxon_name_gnverified_col_deduped.csv > kew-species-list-nona-gnverified-col.csv

### Standardize a date field

xan map 'strftime(datetime(col("Last Seen On"), "%d-%m-%Y"), "%Y-%m-%d")' LastSeenISO joined.csv > joined_standardized.csv

xan map 'strftime(datetime(col("Last Seen On"), "%d-%m-%Y"), "%Y-%m-%d")' \
  LastSeenISO kew-species-list-nona-gnverified-col.csv > joined.tmp && mv joined.tmp kew-species-list-nona-gnverified-col.csv


### Script



`xan filter !'(len(trim(TaxonomicName)) eq 0)' kew-species-list.csv > kew-species-list-nona.csv`

`xan select TaxonomicName kew-species-list-nona.csv > taxon_names.csv`

`gnverifier -f csv -s 1 taxon_names.csv > taxon_name_gnverified_col.csv`

xan dedup -s ScientificName taxon_name_gnverified_col.csv > taxon_name_gnverified_col_deduped.csv

xan join --left TaxonomicName kew-species-list-nona.csv ScientificName taxon_name_gnverified_col_deduped.csv > kew-species-list-nona-gnverified-col.csv

xan map 'strftime(datetime(col("Last Seen On"), "%d-%m-%Y"), "%Y-%m-%d")' \
  LastSeenISO kew-species-list-nona-gnverified-col.csv > joined.tmp && mv joined.tmp kew-species-list-nona-gnverified-col.csv

