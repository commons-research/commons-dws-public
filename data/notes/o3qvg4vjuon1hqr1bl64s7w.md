
# PAMREIN's daily Open Notebook (COMMONS Lab)

## Todo - [Check Github](https://github.com/orgs/commons-research/projects/2/views/1)
-[] API with Pick-Axe


## Meetings
- short feedback for my first line of codes  
I should make a readme for other people to know how to use it.
[good practice](https://cthoyt.com/2020/06/03/how-to-code-with-me-organization.html)
[good readme](https://www.freecodecamp.org/news/how-to-write-a-good-readme-file/)

## Daily report (What did I learn?)

### About Pick-axe
- [Metacyc](https://metacyc.org/) has information about metabolic pathways database. It provides the "JN1224min ruleset" (1224 reaction rulset) for pick axe. For each reaction exist an UniProt entry for the specific Enzyms.
- It has two *compound property filters*. One for molecularweight (MV) and one for atomic composition of an individual compound to determine if it should be removed
from the network.
- Pickaxe generates cemical fingerprints (bit vectores with the RDKit) for see similarities. It has a cutoff filter and sampling filter (weighted Tanimoto distribution)
- With the Metabolomics filter needs as input a list of experimental mass-to-charge (m/z) values and a list of possible adducts.
- Thermodynamics-based filter uses the Gibbs free energy. 
- Feasibility filter: Deep learning-based Reaction Feasibility Checker (Deep_RFC). It is incorporated into Pickaxe.
- Outputs: generated networks in three different formats. Each format has information about the compounds: reactions, reactionrules and target molecules.
Results can be stored in a MongoDB as a JSON format. It also supports Systems Biology Markup Language (SBML).


## Future perspective



## Keywords
[[expanded-np-chemspace.keywords]]
