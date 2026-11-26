
# PAMREIN's daily Open Notebook (COMMONS Lab)

## Todo - [Check Github](https://github.com/orgs/commons-research/projects/2/views/1)
-[]


## Meetings
None


## Daily report (What did I learn?)
- finished version one of the script for the toydataset.


Ctrl. + D : exit environment in Terminal

### Autoformating for code
Visual studio provides a package "Black formatter" for python, which will automatically reformat when you press `Ctrl. + Shift + I` (for Linux) or `Ctrl. + Shift + F` (for Windows).
If you change the file "Open Users Settings (JSON)" and you add the line `"editor.formatOnSave": true` into the barely brackets, it will format if you save the file. 

### Sparkl's
Wikidata questions
[qlever](https://qlever.cs.uni-freiburg.de/wikidata) website for searching wikidata (much faster than [wikidata](https://query.wikidata.org/))


### MINEs
The [Website](https://minedatabase.mcs.anl.gov/#/home) provides an [API](https://github.com/tyo-nu/MINE-Server/blob/master/docs/API%20Examples.ipynb) for searching the Metabolic In Silico Network Expansion Database. 

### LOTUS dataset

The columns will have following content:  
**chemical information**
structure_wikidata,structure_inchikey,structure_inchi,structure_smiles,structure_molecular_formula,structure_exact_mass,
structure_xlogp,structure_smiles_2D,structure_cid,structure_nameIupac,structure_nameTraditional,structure_stereocenters_total,
structure_stereocenters_unspecified,  

**npclassifier**
structure_taxonomy_npclassifier_01pathway,structure_taxonomy_npclassifier_02superclass,structure_taxonomy_npclassifier_03class,

**classyfire - chemical taxonomy**
structure_taxonomy_classyfire_chemontid,structure_taxonomy_classyfire_01kingdom,structure_taxonomy_classyfire_02superclass,structure_taxonomy_classyfire_03class,structure_taxonomy_classyfire_04directparent,

**organism information**
organism_wikidata,organism_name,organism_taxonomy_gbifid,organism_taxonomy_ncbiid,

**organism taxonomy**
organism_taxonomy_ottid,organism_taxonomy_01domain,organism_taxonomy_02kingdom,organism_taxonomy_03phylum,organism_taxonomy_04class,organism_taxonomy_05order,organism_taxonomy_06family,organism_taxonomy_07tribe,organism_taxonomy_08genus,organism_taxonomy_09species,organism_taxonomy_10varietas,

reference_wikidata,reference_doi,manual_validation




## Future perspective



## Keywords
[[expanded_np_chemspace.abbreviations.md]]
