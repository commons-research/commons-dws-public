---
id: ca6wu9ml0x3p1i8hi2maazk
title: >-
  Metabokg An Analysis Centric Knowledge Graph Framework For Untargeted
  Metabolomics
desc: ''
updated: 1787921668069
created: 1787921664946
traitIds:
  - open-notebook-commons-ablood-literature
---
# [MetaboKG: An Analysis-centric Knowledge Graph Framework for Untargeted Metabolomics](https://arxiv.org/pdf/2605.24706)

## Terms
- **[Untargeted Metabolomics](https://www.evotec.com/sciencepool/understanding-untargeted-metabolomics-and-its-significance):** Does not target a specific metabolite(s) but instead attempts to capture as many as possible. 
- **MetaboKG**: Analysis-centric knowledge graph *framework* that considers the metadata and maintains provenance of the data. 
- **[PROV-O](https://www.w3.org/TR/prov-o/)**: PROV Ontology - encoding of the OWL2 for PROV Data Model
- **[PROV Data Model](https://www.w3.org/TR/2013/REC-prov-dm-20130430/)** generic datamodel for maintaining provenance, allowing for representations of provenance to be translated between systems. 
## 1 Introduction
Untargeted metabolomics is increasingly reusing data and cross-study research. But doing so means combining heterogenous data sources and maintaining the experimental context, provenance, and interpretation. 

Data for metabolics exists in many different repositories and each one has its own standards for storage, and metadata structure. Aligning different datasets can therefore be difficult and constrains potential analysis that could exist from harmonizing said datasets. 

Question raised: 
> Do current semantic web languages and ontologies cover the need to integrate semi-structured MS/MS data from heterogenous repositories as knowledge graphs? 

with sub questions:
> 1 - How can semi-structured MS/MS data, repository eaxports, and heterogenous metadata be transformed into a coherent graph structure? 
> 2 - How can Semantic Web technologies and selected ontologies be used to harmonize metadata, preserve provenance, and improve FAIR compliance? 
> 3 - How can such a grpah supprot inference and cross-dataset exploration to reveal biochemical relationships that remain hidden when resources are analyzed in isolation? 

The solution presented is the ***MetaboKG***. 
## 2 Related Work
Design based on 3 current trends:
1) metabolomics data standardization
2) large-scale reuse of public metabolomics repos
3) knowledge graph based intergration in life sciences
Existing workflows for MS data differ enough that the metadata that greater analysis is impacted. Current harmonization attempts still leave issues with analysis due to the data heterogenity. 

As annotations have grown more complex, metadata becomes one of multiple concerns, as the the representation of the joint data analysis grows in complexity. So graph structure is proposed that connects data while preserving annotations. 

METRIN-KG and other knowledge graph technologies connect metabolomic info with train and interaction data. Thus there is a trend towards adding ecological and biological context to metabolomic knowlege graphs. 

## 3 Modeling a Knowledge Graph for Untargeted Metabolomics 
MetaboKG limits the ontologies used and their overlap, helping to cut down on issues with aligning/harmonizing the data being integrated. Based on PROV-O ontology. Uses SIO ontology to reduce overhead. Graph size is limited through 2 strategies: 
1) Intermediate resources are made into an OWL named individual and reused
2) for numerical values, intermediate resources are merged if they share same value and class - `rdf:type`. 
So data can be deduplicated but are not applied to the PROV-O nodesensuring each workflow is distinct and provenance maintained. Organizing based on PROV-O ontology separates responsibilities by grouping entities based on PROV-O classes and types. And therefore offers a more accurate representation of the real world processes that happend in the lab. The MS ontology is the primary domain ontology. 
## 4 Extracting Heterogenous Metabolomics Resources into the MetaboKG Knowledge Graph
### 4.1 Standardizing and Semantically Aligning Sample and Study Metadata
Use of the Pan-ReDU to harmonize metadata into controlled vocabularies was implemented. [Comprehensive cross-platform overview](https://redu.gnps2.org/). Work was then done to map terms taht were not standardized by Pan-ReDU into standard ontologies. 
### 4.2 Collecting and Structuring GNPS Analytical Outputs
GNPS projects mostly consist of unannotated raw datasets. Using an LLM workflow 680 GNPS jobs that are able to produce almost identical column structures. 
## 5 Improving Provenance Traceability and FAIR
use of the USI (Universal Spectrum Identifier) is used to preserve provenance and is exntended with software specific outputs. 
### 5.1 URI Construction Strategy
URIs in the MetaboKG are deterministically generated, with the pattern: GlobalPrefix human readable concept/{hash}. This approach preserves provenance and is in line with FAIR. 
## 6 Evaluation: Supporting Biochemical Exploration and Inference 
MetaboKG can work across datasets for biochemical relationships that are made easier to analyze due to the datasets being interconnected in the KG. 