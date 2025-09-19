
# PAMREIN's daily Open Notebook (COMMONS Lab)

## Todo - [Check Github](https://github.com/orgs/commons-research/projects/2/views/1)
-[]


## Meetings



## Daily report (What did I learn?)



## Future perspective
Today I checked the script for cleaning. It was not worth to do it. 
Maybe I also did a mistake in the script. 

original reaction rows: 1_209_846_743
original compound rows: 1_066_531_079
cleaned reaction rows: 1_209_846_743 (not one removed line)
cleaned compound rows: 1_014_766_986 (95% of original compounds)


original files
---reactions---
amount of files:        45
total size (byte):      134_415_376_995
average size (byte):    2_987_008_378
------
---compounds---
amount of files:        45
total size (byte):      57_967_518_441
average size (byte):    1_288_167_076
------

cleaned files
---reactions---
amount of files:        45
total size (byte):      135_488_568_545
average size (byte):    3_010_857_079
------
---compounds---
amount of files:        45
total size (byte):      55_868_259_143
average size (byte):    1_241_516_870
------



Also I looked at the reactions to see, if some rules appears more often than others. Witout separating multiple rules, I got this results:
┌───────────────────────────────────────────────────────┬───────────┬────────────┐
│ Reaction rules                                        ┆ count     ┆ frequency  │
│ ---                                                   ┆ ---       ┆ ---        │
│ str                                                   ┆ u32       ┆ f64        │
╞═══════════════════════════════════════════════════════╪═══════════╪════════════╡
│ rule0822                                              ┆ 187090387 ┆ 0.15464    │
│ rule0028                                              ┆ 125538598 ┆ 0.103764   │
│ rule0126                                              ┆ 68651569  ┆ 0.056744   │
│ rule0918                                              ┆ 34774787  ┆ 0.028743   │
│ rule0264                                              ┆ 28080779  ┆ 0.02321    │
│ …                                                     ┆ …         ┆ …          │
│ rule0124;rule0006;rule0604;rule0029;rule0001;rule1088 ┆ 1         ┆ 8.2655e-10 │


https://smarts.plus/ we can analyse the reaction, which appears most often:
rule0822	Any;WATER	([#6:1]-[#6:2].[#6:3]-[#6:4]).[#8:5]>>([#6:1].[#6:2]-[#6:3].[#6:4]-[#8:5])	Any	


from: 2938937046
to:   2955526557

## Keywords
[[expanded_np_chemspace.abbreviations.md]]
