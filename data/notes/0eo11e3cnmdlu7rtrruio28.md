# [Ontology-guided harmonization enables unified discovery of public metabolomics studies within and across repositories](https://www.biorxiv.org/content/10.64898/2026.07.23.740366v2)
## Terms
- **HARMONY:** (Harmonized Annotation and Resolution of Metabolomics Ontologies across Node-mapped repository data) ontology-based framework and web platform that harmonizes study-level metadata and metabolite information
- **MSI**: Metabolomics Standards Initiative - defines standards for metabolomic data formatting 
- **IRI**: Individual Reference Interval
- **Assay**: investigative procedure in the lab for assessing/measuring presence, amount, activity of a target entity
## Intro
Data islands emerge due to the messy nature of data documentation and storage. This is getting in the way of interoperable metabolomics data sharing. 

The public landscape is largely focused on two repositories:
1) MW - Metabolomics Workbench
2) ML - MetaboLights
The possibility of accessing the 6,830 studies these repos contain for interoperable data analysis is limited because of lack of interoperability. FAIR (find-able, accessible, interoperable, reusable) has helped shape the MW and ML. 

Findability and interoperability are the two areas that are still largely limited by semantic inconsistencies. 

Because of the challenges of inputting data and ensuring shared ontologies are used, a harmonization layer is needed. Here is where Harmony comes in. Available here: https://omicsinharmony.in/, harmony maps raw repo annotations to shared ontology-lnked concepts across biological and analytical nodes. 
## Results
### Species mapping shows broad coverage and distinct taxonomic structure across repositories
Here already, harmonizing adds insights, as they found the taxa included were not that diverse in MW. And there were many taxa that appeared only in one study. (this is a great argument for why this is necessary)
### Sample-source mapping captures diverse specimen types across both repositories 
Here they found taht they needed multiple ontologies to account for the data mappings. (why cant there be a super-set ontology that is applicable across these?)

Here again, the mapping unlocked new insights immediately, each repo had high-frequency IRIs. 
### Conservative disease harmonization recovers shared disease concepts while preventing over-assignment in non-disease studies
Here they were able to immediately see insights into the ontologies and terms used for each study data. It revealed that the two repos also varied in granularity of the terms used. 
### Analytical technique harmonization reveals a compact shared platform vocabulary across repositories 
the mappings here worked for all but one study for assay-level vocabulary. 
### Mapping the ionization source and ion polarity captures high-coverage MS acquisition metadata
MW had an explicit `ms_type` while the ML assay files had `LC-MS` or `GC-MS`, but did not have the ion source field. Here it reveals an absence of some data needed. 
### Separation-method harmonization resolves analytical acquisition diversity across repositories 
separation method mapping went well and preserved the other mappings well. 
### PSI-MS harmonization reveals a shared high-resolution mass-analyzer landscape across repositories 
Here there were insights and they found that the majority of records in ML was "Parameter Value[Mass analyzer]". 
### Metabolite identity resolution and differential abundance across repositories 
#### RefMet mapping differs between repositories in metabolite-name resolution
#### Structural and metadata gaps jointly limit differential-expression eligibility across repositories 
### Ontology harmonization converts heterogeneous repository metadata into shared cross-repository query terms
They were able to recover 15.5% of analyses that plane text search would not be able to do. 