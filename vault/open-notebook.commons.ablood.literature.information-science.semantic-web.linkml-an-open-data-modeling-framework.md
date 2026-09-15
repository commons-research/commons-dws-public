---
id: jjc0ub68v629v43te87z6el
title: Linkml An Open Data Modeling Framework
desc: ''
updated: 1789457488504
created: 1789457476649
traitIds:
  - open-notebook-commons-ablood-literature
---
# [LinkML: an open data modeling framework](https://academic.oup.com/gigascience/article/doi/10.1093/gigascience/giaf152/8378082)
## Terms
- **LinkML**: Linked Data Modeling Language - open framework that simplifies the process of authoring, validating, and sharing data. 

## Introduction
Data publishing is not consistent in structure or format. Additionally, missing/misaligned metadata exascerbate these issues (no units etc). 

Support for shared vocabularies/ontologies with external data are lacking from existing tools. Domain meaning is left out of the data structures. 
- Simple
- hierarchical
- reusable
- computable
## The LinkML framework
allows for converting data to widely used formats like JSON Schema, SQL, RDF, OWL, SHACL, Python (this is a language?). Also generates machine readable documentation, and is FAIR. 

## Example notes
- identifiers are not consistent
- headers were an issue
- units not standardized within dataset
- again datatypes not standardized
- values not following a predictable value range (lake, sand, human gut)
- missing fields
## The LinkML standard
Organizes data in a machin readable manner. 

The LinkML schema consist of 4 main elements: 
1) classes
2) slots
3) types
4) enumerations
**Definitions**:

| Elements     | Description                                                                     | Example                    |
| ------------ | ------------------------------------------------------------------------------- | -------------------------- |
| Schema       | Defines structure of data model, includes metadata, *prefixes*, imports         | NMDC                       |
| Classes      | Represents the entities in the model, linked together via *slots*               | sample, study              |
| Slots        | attributes/properties of classes, describing characteristics an relationships   | Lat/Long                   |
| Types        | Data types that are held in slots, e.g. string, int                             | String, Integer, etc       |
| Enumerations | Controlled vocabs that constrain slot values and/or link to external ontologies | Environment Ontology terms |
| Mappings     | Link Schema elements to external standards or ontologies (URIs)                 | class_uri:biosample        |

Their model has robust built in mechanisms to link knowledge:
1) connecting model calsses within the schema using typed relationships
2) establish class hierarchies to support specialization of concepts(?)
3) mapping to data standards/ontologies for ==interoperability==. 

Their example: Sample class linked to related classes, e.g. Sample Site, using slots like "collected from" (this does seem triple like?). 

==mapping==: alignment of schema elements (classes, slots, enumerations) with terms from an ontology. Usually uses the URI (Uniform Resource Identifier). 

## Conclusion
LinkML reduces complexity, heterogeneity between datasets, and reduces single use data models. It is also compliant with FAIR standards. 