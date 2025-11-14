
# PAMREIN's daily Open Notebook (COMMONS Lab)

## Todo - [Check Github](https://github.com/orgs/commons-research/projects/2/views/1)
-[]


## Meetings



## Daily report (What did I learn?)

Change from website to ssh (for this you need a ssh key and also saved it on github):
1. git remote -w      # check if remote is set to https
2. git remote set-url origin <repository>



Further analysisi of ./MINE-Database/mine_database/data/metacyc_rules/
metacyc_intermediate_rules.tsv - 7359 lines 
metacyc_generalized_rules.tsv - 1225 lines 

```bash
comm -12 metacyc_generalized_rules_sorted.tsv metacyc_intermediate_rules_sorted.tsv | wc
    426     852    8896
comm -31 metacyc_generalized_rules_sorted.tsv metacyc_intermediate_rules_sorted.tsv | wc
   6933   13866  171744
comm -23 metacyc_generalized_rules_sorted.tsv metacyc_intermediate_rules_sorted.tsv | wc
    799    1598   16695
comm -3 metacyc_generalized_rules_sorted.tsv metacyc_intermediate_rules_sorted.tsv | wc
   7732   15464  195372
``` 
-1     suppress column 1 (lines unique to FILE1)
-2     suppress column 2 (lines unique to FILE2)
-3     suppress column 3 (lines that appear in both files)

unique in **generalized** rules: 799 
unique in **intermediate** rules: 6933
unique entries total: 7732 
found in both files:  426


To check further, I asked for the rulename and the "reactioncomment":
- Because it had some rulenames with underscore, I was wondering what this could be
```bash
cut -f1,5 metacyc_intermediate_rules.tsv | grep -v -E "[a-z]*_[a-zA-Z0-9]*" | wc
```
He found **91 lines** with this rulename and following structure (example):
rule0945	metacyc:RXN-17975;metacyc:RXN-17988  
rule0906	kegg:R07039;kegg:R07043;metacyc:RXN-14948;metacyc:RXN-14952 
rule0323	RXN-17679;RXN-527;RXN-7686;RXN-7687;RXN-8379;RXN-8450;RXN1F-93  
rule1260	N-ACETYLHEXOSAMINE-1-DEHYDROGENASE-RXN  

It looks like, that almost all the time "RXN" is involved. To check that:
```bash
cut -f1,5 metacyc_intermediate_rules.tsv | grep ":RXN-" | wc*" | wc
# 3598 lines
```

```bash
cut -f1,5 metacyc_intermediate_rules.tsv | grep "metacyc:RXN-" | wc
# 3598 lines
```

```bash
cut -f1,5 metacyc_intermediate_rules.tsv | grep "RXN" | wc
# 5291 lines
```

Other Databases are followed distributed:
(exp.: `cut -f1,5 metacyc_intermediate_rules.tsv | grep "kegg" | grep "metacyc" -c`)

Kegg: 4198
Brenda: 5656
metacyc: 5258
Kegg & Brenda: 3250
Kegg & metacyc: 3783
Brenda & metacyc: 3756
Brenda & metacyc & Kegg: 3002

## Future perspective



## Keywords
[[expanded_np_chemspace.abbreviations.md]]
