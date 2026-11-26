
# PAMREIN's daily Open Notebook (COMMONS Lab)

## Todo - [Check Github](https://github.com/orgs/commons-research/projects/2/views/1)
-[]


## Meetings



## Daily report (What did I learn?)
Pierre Marie tried to register for an account on BNICE.


We started againg mongodb and I had some problems.
I had to change authorisation for some files. <https://askubuntu.com/questions/823288/mongodb-loads-but-breaks-returning-status-14>



how to recover git commited files:
1. clone the repo (so nothing bad can happen)
2. get the hash - commit file
```bash
git log -S cfm_id
git log --all --full-history -- <path_to_script>
git show <commit_hash>
```
3. recover it
```bash
git revert <commit_hash>
```

cfm is a module to transfer SMILES into a spectra file.


## Future perspective
- different fraction 0.1, 0.2, 0.5
- save files as datawarior file
- script to calculate overlap between different datavases or different fractions with 
- upset plot (optional)


## Keywords
[[expanded_np_chemspace.abbreviations.md]]
