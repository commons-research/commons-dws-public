
# This is PMAS's COMMONS Lab daily Open Notebook.

Today is 2024.03.29

## Todo today

### Have a look at the COMMONS research discussion forum
    - https://github.com/orgs/commons-research/discussions

### Daily work on the Open Science for natural products research Viewpoint

See [[viewpoint]]


###
###

## Doing

Struglling to serialize a .yaml, hash the contents, and save the hash + serialized contents to  a tsv file.

Lets work with minimal examples

```yaml
mapp_project : mapp_project_00017

options:
  gnps_column_for_boxplots : 
    factor_name : 'process'

filter_sample_type :
  mode : 'include'
  factor_name : 'sample_type'
  levels :
   - 'BK' 
   - 'BLANK'
```


```yaml
mapp_project : mapp_project_00017

options:
  gnps_column_for_boxplots : 
    factor_name : 'process'

filter_sample_type :
  mode : 'include'
  factor_name : 'sample_type'
  levels :
   - 'BK' 
   - 'QC'
```

Should yield as tsv

mapp_project	options.gnps_column_for_boxplots.factor_name	filter_sample_type.mode	filter_sample_type.factor_name	filter_sample_type.levels	hash
mapp_project_00017	process	include	sample_type	BK, BLANK	<hash>
mapp_project_00017	process	include	sample_type	BK, QC	<hash>

Please propose me a mechansim in R to do this.

```r

library(yaml)
library(digest)

# Read the yaml files

yaml1 <- yaml::read_yaml('file1.yaml')
yaml2 <- yaml::read_yaml('file2.yaml')

# Serialize the yaml files

yaml1_serialized <- yaml::as.yaml(yaml1)
yaml2_serialized <- yaml::as.yaml(yaml2)

# Hash the serialized yaml files

hash1 <- digest::digest(yaml1_serialized)
hash2 <- digest::digest(yaml2_serialized)

# Save the hash and the serialized yaml files to a tsv


 




## Paused

## Done

## Notes

## Todo tomorrow, one day ... or never 


###
###


## Today I learned that

- o