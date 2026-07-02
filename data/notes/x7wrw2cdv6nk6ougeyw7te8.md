
# PAMREIN's daily Open Notebook (COMMONS Lab)

## Todo - [Check Github](https://github.com/orgs/commons-research/projects/2/views/1)
-[]


## Meetings



## Daily report (What did I learn?)
          || visible in terminal ||   visible in file   || existing
  Syntax  ||  StdOut  |  StdErr  ||  StdOut  |  StdErr  ||   file   
==========++==========+==========++==========+==========++===========
    >     ||    no    |   yes    ||   yes    |    no    || overwrite
    >>    ||    no    |   yes    ||   yes    |    no    ||  append
          ||          |          ||          |          ||
   2>     ||   yes    |    no    ||    no    |   yes    || overwrite
   2>>    ||   yes    |    no    ||    no    |   yes    ||  append
          ||          |          ||          |          ||
   &>     ||    no    |    no    ||   yes    |   yes    || overwrite
   &>>    ||    no    |    no    ||   yes    |   yes    ||  append
          ||          |          ||          |          ||
 | tee    ||   yes    |   yes    ||   yes    |    no    || overwrite
 | tee -a ||   yes    |   yes    ||   yes    |    no    ||  append
          ||          |          ||          |          ||
 n.e. (*) ||   yes    |   yes    ||    no    |   yes    || overwrite
 n.e. (*) ||   yes    |   yes    ||    no    |   yes    ||  append
          ||          |          ||          |          ||
|& tee    ||   yes    |   yes    ||   yes    |   yes    || overwrite
|& tee -a ||   yes    |   yes    ||   yes    |   yes    ||  append



test:
--RAY--
(read-MINEs) [pamrein@login8 read-MINE-results]$ srun --partition=pibu_el8 --cpus-per-task=5 --mem=800G --time=10:00:00 --pty /bin/bash
2024-06-21 09:42:33,117	INFO worker.py:1770 -- Started a local Ray instance.
shape: (0, 8)
┌─────┬─────────────┬─────────────┬─────────────┬─────────────┬─────────────┬─────────────┬─────────────┐
│ ID  ┆ predicted_r ┆ predicted_r ┆ predicted_r ┆ predicted_r ┆ predicted_c ┆ predicted_c ┆ predicted_c │
│ --- ┆ eaction_ID  ┆ eaction_SMI ┆ eaction_Rxn ┆ eaction_Rea ┆ ompounds_Fo ┆ ompounds_In ┆ ompounds_SM │
│ str ┆ equation    ┆ LES equa…   ┆ hash        ┆ ction ru…   ┆ rmula       ┆ ChIKey      ┆ ILES        │
│     ┆ ---         ┆ ---         ┆ ---         ┆ ---         ┆ ---         ┆ ---         ┆ ---         │
│     ┆ str         ┆ str         ┆ str         ┆ str         ┆ str         ┆ str         ┆ str         │
╞═════╪═════════════╪═════════════╪═════════════╪═════════════╪═════════════╪═════════════╪═════════════╡
└─────┴─────────────┴─────────────┴─────────────┴─────────────┴─────────────┴─────────────┴─────────────┘
time used: 
read_in_and_processed_time: 1218.27sec 	show_time: 1.72sec

second try:
generated tabel: shape: (1_827, 8)
read_in_and_processed_time: 1503.29sec (25min) 	show_time: 1.72sec


--DASK--
1. srun --partition=pibu_el8 --cpus-per-task=5 --mem=200G --time=5:00:00 --pty /bin/bash
read_in_time: 0.14sec   filtered_time: 0.01sec  show_time: 1992.17sec (33min)

2. srun --partition=pibu_el8 --cpus-per-task=5 --mem=400G --time=5:00:00 --pty /bin/bash
read_in_time: 0.07sec   filtered_time: 0.00sec  show_time: 1976.15sec

3. srun --partition=pibu_el8 --cpus-per-task=5 --mem=800G --time=5:00:00 --pty /bin/bash
read_in_time: 0.11sec   filtered_time: 0.01sec  show_time: 1923.53sec

all the results where empty tables. So something with the ID went wrong...


second try:
1. srun --partition=pibu_el8 --cpus-per-task=5 --mem=200G --time=5:00:00 --pty /bin/bash
rread_in_time: 0.02sec   filtered_time: 0.00sec  show_time: 3381.82sec (56min)

2. srun --partition=pibu_el8 --cpus-per-task=5 --mem=400G --time=5:00:00 --pty /bin/bash
read_in_time: 0.02sec   filtered_time: 0.00sec  show_time: 3622.37sec (60min)

3. srun --partition=pibu_el8 --cpus-per-task=5 --mem=800G --time=5:00:00 --pty /bin/bash
read_in_time: 0.01sec   filtered_time: 0.00sec  show_time: 3524.00sec (42min)



we can see, that It can takes at least 25 min for searching for a specific ID. This is very long, specially when you like to use it as a service. The way to go is using a DB (database), which can generate indexes and use them. This has the advantage to be faster in finding a specific word, but will increase the memorysize. In this case it is also important, to be able to work parallel. Because the big ammount of data can end up in a oom (out of memory) error.


## Future perspective



## Keywords
[[expanded_np_chemspace.abbreviations.md]]
