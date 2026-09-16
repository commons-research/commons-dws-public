---
id: p2iy2x7kvtud41wkv6w4mda
title: A Simple Standard For Sharing Ontological Mappings Sssom
desc: ''
updated: 1789561744465
created: 1789560065344
traitIds:
  - open-notebook-commons-ablood-literature
---
# [A Simple Standard for Sharing Ontological Mappings (SSSOM)](https://academic.oup.com/database/article/doi/10.1093/database/baac035/6591806)
Identifiers are not uniform across datasources/databases. Mappings are resource intensive to create to map these identifiers and unify them. 

**Mapping:** a correspondence between two terms. Their example is with a *subject* and an *object*. They are connected through their relationship, the *predicate*. 

Mappings do not need to be exact. E.g. a red delicious is an apple. 

There is no strongly agreed upon standard for exchanging mappings. Information is often omitted. Existing mappings are usually single use conversions and and are only between two different data sources. Usually not accurate or complete. Metadata is lacking. 

They establish SSSOM (Simple Standard for Sharing Ontological Mappings) with these features: 

| Feature                              | Why                                                                                                                   |
| ------------------------------------ | --------------------------------------------------------------------------------------------------------------------- |
| Explicit relationship types          | applications that demand highly accurate results require mapping relations with explicit precision and semantics      |
| explicit confidence                  | different use cases require different levels of confidence and accuracy                                               |
| **provenance**                       | understanding how mapping was created (e.g. automatically or by a human expert curator) is crucial to interpreting it |
| explicit declaration of completeness | must be able to distinguish between absence due to lack of information vs deliberate omission                         |
| FAIR principles                      | mapping should be findable, accessible, interoperable and reusable                                                    |
| unambiguous identifiers              | mappings should make use of standard, globally unambiguous identifiers such as CURIEs or IRIs                         |
| Allows composabiliity                | mappings from different sources should be combinable and should be possible to chain mappings together                |
| follows linked data principles       | allows interoperation with semantic data tooling, facilitates data merginy                                            |
| well-described data model            | allows interoperation and standard tooling                                                                            |
| tabular representation               | ease of curation and rapid analysis                                                                                   |
## Desired features of a standard for mappings
LD amkes data interoperable with RDF and URIs for naming and individual things. **Moreover a tabular form that is simplified should be available that does not require specialized tools to explore, manage, view, and process both by human and machine.** 
The goals for SSSOM is:
1) provide rich and easily extensible vocab for describing mapping metadata to address the issues mentioned. This is done through mappings that are transparently imprecise, transparently inaccurate (what?), and transparently incomplete (does this mean the researchers will need to annotate data with completeness info?), and FAIR
2) offer simple tabular format for distribution of mappings that integrate in typical data science toolchains
3) support community driven standard with well-defined governance and sustainable collaborative workflows
4) representing different kinds of mappings, such as mappings between data models and their values, including literal values, controlled vocabs and database entities
## Data model
Describes pairwise mappings. mappings can be described by up to 38 (why 38?) metadata slots, or elements. Four are required:
1) subject_id
2) object_id
3) predicate_id
4) match_type
there is also additional metadata elements, including
5) author_id
6) mapping_id

All identifiers used should be [**CURIE**](https://www.w3.org/TR/curie/). 

## Predicates
any vocab can be used to describe the relationship (predicate) between subject and object. They recommend `predicate_id` is drawn from SKOS or OWL vocabs. 

## Provenance
The majority of the metadata elements they recommend pertain to provenance. Such as `author_id`, and `reviewer_id`. 

## LinkML Spec
SSSOM is managed as a LINKML model. LinkML allows for managing schema by:
1) automatically convert scheam into common schema representations such as JSON Schema, ShEx, SHACL, OWL
2) Use LinkML utility classes to automatically convert instnace data into common representations such as JSON / RDF
3) use LinkML meta models to automatically generate python dataclasses and implement data validators etc. 
4) SSSOM schema in YAML makes it readable for experts 

## SSSOM software ecosystem
they have tools such as SSSOM-py for working with SSSOM. 

## Why we need it
- harmonizing ontologies
- browsing and cross walking mappings
- Data collaboration
- finding and using mappings
## Limitations
1) mappings have no context (always true)
2) complex mapping rules are hard to capture due to simple, flat data model
3) mappings are not idempotent (metadta elements can modify other ones)
4) lack support for complex mappings
## Future work
help train people to build better mpapings and mapping repos. evolve sssom. 