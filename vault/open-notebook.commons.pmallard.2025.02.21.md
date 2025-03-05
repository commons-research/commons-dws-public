---
id: lf5376f88z4lpo99jrs0cwn
title: '2025-02-21'
desc: ''
updated: 1740150319424
created: 1740133961654
traitIds:
  - open-notebook-commons-pmallard
---

# This is PMAS's COMMONS Lab daily Open Notebook.

Today is 2025.02.21

## Todo today

### Have a look at the COMMONS research discussion forum
    - https://github.com/orgs/commons-research/discussions

### Daily work on the Open Science for natural products research Viewpoint

See [[viewpoint]]


###
###

## Doing

Chat wioth Javier on Scholia
Possibility to establisha DB of NP isolated in Chili with their geographical occurences.


We start with the example of https://scholia.toolforge.org/chemical/Q82866929

https://scholia.toolforge.org/taxon/Q15513067#metabolome

This one is connected to the GBIF id https://www.gbif.org/species/5343387


We manually created the taxon ranmge properties for this one

https://www.wikidata.org/wiki/Q15513067


So now we can check for molecules found in the Astragalus genera for which the taxon range includes Chile.
https://w.wiki/D9aT

We can observe that few taxa have in fact Chile as a taxonrang https://w.wiki/D9an


We started with Tiago's http://tiago.bio.br/gbif_range_to_wikidata/

Lets see how we can use / adapt this for our use case

https://api.gbif.org/v1/occurrence/search?taxonKey=212&continent=africa&limit=0&facet=speciesKey&facetMincount=10&facetLimit=5000

For countries, the url should be encoded

https://api.gbif.org/v1/occurrence/search?taxonKey=212&country=CL&limit=0&facet=speciesKey&facetMincount=10&facetLimit=5000


We started to investigate the possibility to map traditional uses from taxon to indegeneous peoples

https://www.wikidata.org/wiki/Q158780


Discussing about ethopharmocological KG 

https://ieeexplore.ieee.org/abstract/document/10443268
https://www.nature.com/articles/s41597-023-02757-0
https://gitub.u-bordeaux.fr/erias/oregano


### Directus/Qfield
We try to set up a EMI project for Javier (temporary while we have the EMI data portal up and running)


We could create both a qfieldcloud and directus username
However we are stuck at the stage of Project creation (https://emi-collection.unifr.ch/qfieldcloud/admin/core/project/add/) as we cannot setup the owner.
To be checked with Edouard.

This , https://emi-collection.unifr.ch/qfieldcloud/admin/auditlog/logentry/ , for example returns a 500 
![](/assets/images/2025-02-21-15-03-35.png)






## Paused

## Done

## Notes

## Todo tomorrow, one day ... or never 


###
###


## Today I learned that

- o