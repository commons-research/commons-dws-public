---
id: tgx61ypwq0lff75tmqympl4
title: Prov O The Prov Ontology
desc: ''
updated: 1785221826312
created: 1785221825259
traitIds:
  - open-notebook-commons-ablood-literature
---
# [PROV-O: The PROV Ontology](https://www.w3.org/TR/prov-o/)
## Terms
- **[PROV Data Model (PROV-DM)](https://www.w3.org/TR/prov-dm/)**: provenance data model defining concepts for describing the origin and history of data.
- **PROV-O**: OWL ontology implementing PROV-DM for RDF/Linked Data.
- **Provenance**: information describing where data came from, how it was produced, and by whom.
- **Entity**: a physical, digital, conceptual, or other thing.
- **Activity**: an action or process that uses or generates entities.
- **Agent**: a person, organization, or software responsible for an activity or entity.
- **Bundle**: a named collection of provenance assertions which can itself have provenance.
- **Qualified relation**: a provenance relationship with additional metadata (time, role, plan, etc.).
## Intro
PROV-O provides an OWL ontology implementing the PROV Data Model. It standardizes how provenance information is represented, exchanged, and integrated across different systems. The ontology is lightweight, extensible, and designed to support interoperability. 
## Core Model
Everything is built around three concepts:
- **Entity**: data, documents, files, datasets, models, etc.
- **Activity**: processes that consume or produce entities.
- **Agent**: people, organizations, or software responsible for activities.
Together they form provenance graphs describing how information flows through a system. 
## Core Relationships
Common provenance relationships include:
- Entity **wasGeneratedBy** Activity
- Activity **used** Entity
- Entity **wasDerivedFrom** Entity
- Entity **wasAttributedTo** Agent
- Activity **wasAssociatedWith** Agent
- Agent **actedOnBehalfOf** Agent
- Activity **wasInformedBy** another Activity

These relationships can be chained together to reconstruct complete provenance histories.
## Design Philosophy
The ontology is introduced in increasing levels of detail:
1. Starting Point terms (core concepts)
2. Expanded terms (additional classes and relationships)
3. Qualified terms (add metadata to relationships)

Most applications only need the Starting Point vocabulary. 
## Expanded Terms
Adds richer concepts including:
- Person
- Organization
- SoftwareAgent
- Collection
- Bundle
- Plan
- Location

Also introduces more specific provenance relationships such as:
- revision
- quotation
- primary source
- specialization
- alternate versions
## Qualified Relationships
Binary relationships can be "qualified" with additional context.

Instead of simply saying:
- Activity used Entity

you can also describe:
- when it happened
- the role involved
- the plan followed
- additional metadata

This allows provenance to become much more expressive without changing the underlying graph. 
## Relevance
- Standard ontology for provenance in RDF.
- Complements FAIR and Linked Data principles.
- Enables reproducibility and traceability.
- Can model data transformations across biological workflows.
- Useful for recording dataset lineage, preprocessing, algorithm execution, and software versions.
- Natural complement to nanopublications and Research Objects.