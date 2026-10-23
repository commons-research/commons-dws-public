# [LinkML: an open data modeling framework](https://academic.oup.com/gigascience/article/doi/10.1093/gigascience/giaf152/8378082)
## Terms
- **LinkML**: Linked Data Modeling Language - open framework that simplifies the process of authoring, validating, and sharing data. 
- **LinkML-Map**: tool for mapping schema with LinkML

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

Slots are like spreadsheet/db columns. Slots have a range (String, Integer, etc). They are able to have metadata. Slots are organized into checklists. **Checklists** define a group of attributes (slots) to describe relevant metadata. LinkML-Map allows for easily extending and mapping schema. 

Use of LinkML *could* help define data and schema metadata for publishing that follows FAIR principles. 

## LinkML data life cycle
5 Stages of the life cycle: 
1) schema creation and reuse
	1) define classes, slots (and types), enumerations, links between classes
	2) reuse existing models
2) apply best practices
	1) esnure all classes have descriptions
	2) ensure all slots have types
	3) customize best practices (optioanal)
3) reuse ontologies
	1) ad slot, URIs (classes) and mappings
	2) define enumerations with ontology defined values
4) validate data 
	1) specify input data serialization (linkml-validate)
	2) customize validation rules (optional)
5) manage schema evolution (LinkML Map)

LinkLM has a whole ecosystem of tools:

| Tool name                   | Description                                                                                                                   | Life Cycle stage        |
| --------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| linkml-project-copier       | copier-based starter project for scaffolding new schemas with structure                                                       | Create Schema           |
| schemasheets                | define schemas in spreadsheet format and convert them into LinkML YAML                                                        | Create schema           |
| schema-automator            | auto-gen LinkML schemas from artifacts e.g. spreadsheets                                                                      | create schema           |
| gen-python, gen-pydantic    | serializes python classes to reflect the schema struct, for validation, serialization, type enforcement                       | create schema           |
| gen-rdf, gen-owl            | serializes linkml model as RDF triples using RDFs and SKOS to represent schema struct and semantics                           | create schema           |
| gen-json-schema, gen-jsonid | converst schema into json schema to validate json data files and outputs json-ld filesthat support semantic annotation and LD | create schema           |
| linkml-lint                 | validates schema conformance to community best practices using customizable linting rules                                     | apply best practices    |
| ontogpt                     | tool to suggest ontology mappings and values sets using llms                                                                  | reuse ontologies        |
| linkml-validate             | validates input data against a linkml schema                                                                                  | validate data           |
| linkml-map                  | supports schema alignment, transformation, evolution                                                                          | manage schema evolution |
| linkml-store                | adds a layer of abstraction between data models and underlying tech, to allow migration and avoid changing model              | manage schema evolution |
## Apply best practices
LinkML does this through linting schema. 

## Conclusion
LinkML reduces complexity, heterogeneity between datasets, and reduces single use data models. It is also compliant with FAIR standards. 