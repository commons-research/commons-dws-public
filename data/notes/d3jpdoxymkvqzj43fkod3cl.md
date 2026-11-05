
# PAMREIN's daily Open Notebook (COMMONS Lab)

## Todo - [Check Github](https://github.com/orgs/commons-research/projects/2/views/1)
-[] 


## Meetings



## Daily report (What did I learn?)
Today I will try to do a little package to calculate predicted next molecules.


Multiprocessing package (from pyhton):

Today helped me Marco Visani a lot. We tried out the minedataset module, what should be my masterthesis.
We did some different filters and run in problems, which was a little bit unexpected.
For example: 
- I was working in the fork folder with my script, which isn't the smartest idea.
- I was working in the forkfolder and had additionaly installed **minedatabase** as a package in poetry. This doesn't make any sense, because I want to work in the forkfolder (copy of minedatabase)...
- with the command `poetry add git+<website>` it is possible to add packages, which are not from pip. This what we have to do with our fork. 
- Somehow, it didn't worked. The solution was to rename the mainfolder minedatabase -> mine_database. Additionaly we had to run `poetry build` in the folder, to make kind of a package out of it. With poetry show, we could see it added the package which was not from pipy. 
- I realised, when I installing packages, they will be also available for pyenv. Better said, poetry uses pyenv for this. The problem is, that I have multiple packages working on that pyenv... I have to find a solution.


## Future perspective



## Keywords
[[expanded_np_chemspace.abbreviations.md]]
