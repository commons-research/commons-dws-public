
# PAMREIN's daily Open Notebook (COMMONS Lab)

## Todo - [Check Github](https://github.com/orgs/commons-research/projects/2/views/1)
-[]


## Meetings



## Daily report (What did I learn?)
- Installed Zotero (<https://github.com/retorquere/zotero-deb>)
  ```bash
wget -qO- https://raw.githubusercontent.com/retorquere/zotero-deb/master/install.sh | sudo bash
sudo apt update
sudo apt install zotero
```

It is recommended to do an account on Zotero, so you are able to store the links. 
By the syncing settings, you shouldn't download the PDFs, because you only have 300 MB.  


partial: command in python. <https://docs.python.org/3/library/functools.html>

## pickaxe journal
1. similarity and sampler filter  
a) set generation similarity to [0.0, 0.2]


b) 10 targets; 10 Input; 0.2 reactions (fraction_coverage)
10 compounds loaded...
(9 after removing stereochemistry)
10 target compounds loaded

Overall run took 0.55 seconds. 
    0 new compounds & 0 new reactions

c) 0 targets; 10 Input; 0.2 reactions (fraction_coverage)
10 compounds loaded...
(9 after removing stereochemistry)
0 target compounds loaded

Generation 1 finished in 2.840805768966675 s and contains:
		946 new compounds
		916 new reactions

- Because of the similarity filter couldn't work, it seems it didn't applied the filter.


d) 0 targets; 10 Input; 0.5 reactions (fraction_coverage)
10 compounds loaded...
(9 after removing stereochemistry)
0 target compounds loaded

Generation 1 finished in 9.916597843170166 s and contains:
		1429 new compounds
		1442 new reactions

d) 10 targets; 10 Input; 0.5 reactions (fraction_coverage)
10 compounds loaded...
(9 after removing stereochemistry)
10 target compounds loaded



## Goal's
- [ ] run MINEs on the cluster with poetry


## Future perspective



## Keywords
[[expanded_np_chemspace.abbreviations.md]]
