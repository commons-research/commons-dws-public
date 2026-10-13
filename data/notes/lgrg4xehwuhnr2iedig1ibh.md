
# Pickaxe: a Python library for the prediction of novel metabolic reactions 
current Pickaxe: <https://doi.org/10.1186/s12859-023-05149-8>
olk Pickaxe: <https://github.com/JamesJeffryes/kb_pickaxe/tree/master>


## Reaction rules


## Filters
Pickaxe provide some filters by default. After the expanding the filters can be used to reduce the large output of possible reactions.
Mostly this filters will need a target list (which has the same structure as the input list). 

### Target
If the targets are the same as the inputdata, you will not see them in the outputfile ("compounds.tsv").
If the targets are different from the inputdata, the target compounds will be written to the outputfile and labeled.
If the inputdata are a subclass of the targets, the targets will not be written to the outputfile and labeled. But new molecules will be predicted.
If the targets are a subclass of the inputdata, the targets will not be written to the outputfile and labeled. But new molecules will be predicted.

.react_targets = False   # This would expand the molecules, because targets are found. (exp. similarity.py, line 856 - 864)



## Keywords
[[expanded_np_chemspace.abbreviations.md]]
