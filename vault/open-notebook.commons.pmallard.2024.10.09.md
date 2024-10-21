---
id: cwjjccgomzoynapnrf052z6
title: '2024-10-09'
desc: ''
updated: 1728493837250
created: 1728473940255
traitIds:
  - open-notebook-commons-pmallard
---

# This is PMAS's COMMONS Lab daily Open Notebook.

Today is 2024.10.09

## Todo today

### Have a look at the COMMONS research discussion forum
    - https://github.com/orgs/commons-research/discussions

### Daily work on the Open Science for natural products research Viewpoint

See [[viewpoint]]


###
###

## Doing

Preparation of meeting with Chris Steinbeck.

Adriano, Jo.

Main aim of this meeting is to discuss th integration of LOTUS in COCONUT and or the establishment of LOTUS under the revamped .naturalproducts.net domain.

https://chemrxiv.org/engage/api-gateway/chemrxiv/assets/orp/resource/item/66dee5e212ff75c3a1dbfd54/original/coconut-2-0-a-comprehensive-overhaul-and-curation-of-the-collection-of-open-natural-products-database.pdf

NO mention of the LOTUS project in the paper. Were do the occurence data come from ?

Bioschemas ?
https://coconut.naturalproducts.net/api/schemas/bioschemas/CNP0606256.0

The report compounds / request changes is unclear

![](/assets/images/2024-10-09-14-02-20.png)

https://coconut.naturalproducts.net/compounds/CNP0342695.0

Created one reported for this misspelled species name 
https://coconut.naturalproducts.net/dashboard/reports/12




### Previous meeting with Jo 

LOTUS data 

We keep a RAW LOTUS composed of 

- Wikidata QID for chemical structures
- Wikidata QID for biological entities
- Wikidata QID for references

We extract one item per WD QID.

- Isomeric SMILES for chemical structures
- Taxon name for biological entities
- DOI for references

We rely on COCONUT enrichers to do the rest of the job for chemical structures.

We bring our workflow for biological entities and references.

We need all entities to be linked to Wikidata.


Two solutions :

- Or we have a https://coconut.naturalproducts.net and a https://lotus.naturalproducts.net but if they are no taxonomical info in the COCONUT part.

- Or we have a single https://coconut.naturalproducts.net with all the info, including the taxonomical info. But in this case no https://lotus.naturalproducts.net

- In both cases we benefit from the edit/update mechanisms of COCONUT and use these to further edit WD.





## Paused

## Done

Pushed small script to fetch LOTUS info https://github.com/lotusnprod/wd-lotus-scripts


## Notes

## Todo tomorrow, one day ... or never 


###
###


## Today I learned that

- o