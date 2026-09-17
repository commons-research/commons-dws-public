
# PAMREIN's daily Open Notebook (COMMONS Lab)

## Todo - [Check Github](https://github.com/orgs/commons-research/projects/2/views/1)
-[]


## Meetings



## Daily report (What did I learn?)
bash commands:

delet all files in the current folder which are older then the given date (if problems with the date, run `date`)
`find . -type f ! -newermt 'Thu May 23 15:00:14 CEST 2024' -exec rm -f {} \;`

count files in a folder with specification:
`ls -1q log* | wc -l`

today I finished the script to join the ID with the reaction and predicted compounds.
But because I am running stuff parallel, I should also join this things at one point.
For this I will do tomorrow another script.


## Future perspective
Next I want to handle the compounds with specific rules.  
So the final dataframe should have added columns with the rules and the produced compounds of this rule.



## Keywords
[[expanded_np_chemspace.abbreviations.md]]
