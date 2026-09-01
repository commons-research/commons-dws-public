
# PAMREIN's daily Open Notebook (COMMONS Lab)

## Todo - [Check Github](https://github.com/orgs/commons-research/projects/2/views/1)
-[]


## Meetings



## Daily report (What did I learn?)
scontrol show partition - Check the hardware and possible cpus / memory...

sacct -j 12820165 --format=JobID,JobName%30,MaxRSS,Elapsed    - will check the memory and cpu use of a running job
seff 12820165                                                 - more comprehensive description of memory and cpu use of this job-id 


The size of all the predicted files (n45) is arround 771.22Gb. Because of storage problems after taking out the important columns (all columns) I have to reduce storage.
The main idea was to make a gzip command. 

But for comparison reason, I will do ones a *.gzip and ones a *.paquet (polats binary) file.

Filename: compounds_1_generalized_230106_frozen_metadata_for_MINES_split_14.csv_85718.53_
shape: (24_035_930, 6)
*.tsv:      4.7G
*.gzip:     1.4G
*.parquet:  1.3G

Filename: reactions_1_generalized_230106_frozen_metadata_for_MINES_split_14.csv_85718.53_
*.tsv:      13G
*.gzip:     3.1G
*.parquet:  2.9G


## Future perspective



## Keywords
[[expanded_np_chemspace.abbreviations.md]]
