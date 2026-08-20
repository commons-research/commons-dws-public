---
id: 3lltpxcc1sd8wlnalsle647
title: >-
  Metrin Kg A Knowledge Graph Integrating Plant Metabolites Traits And Biotic
  Interactions
desc: ''
updated: 1787232688517
created: 1787232687181
traitIds:
  - open-notebook-commons-ablood-literature
---
# [METRIN-KG: A knowledge graph integrating plant metabolites, traits, and biotic interactions](https://academic.oup.com/gigascience/article/doi/10.1093/gigascience/giag051/8664851)

## Terms

* **[Metabolome](https://en.wikipedia.org/wiki/Metabolome)**: all metabolites present within an organism or biological system.
* **[ENPKG](https://enpkg.commons-lab.org/)**: Experimental Natural Products Knowledge Graph - metabolomes from tropical plant extracts.
* **[GloBI](https://www.globalbioticinteractions.org/)**: Global Biotic Interactions, an open resource describing interactions between organisms.
* **[TRY](https://www.try-db.org/)**: global database containing plant trait data.
* **[Ontop](https://ontop-vkg.org/)**: virtual knowledge graph system that maps relational databases to RDF and translates SPARQL queries into SQL.
* **[QLever](https://github.com/ad-freiburg/qlever)**: SPARQL engine designed for efficient querying of large knowledge graphs.
* **[QUDT](https://www.qudt.org/)**: ontology and vocabulary for representing quantities, units, dimensions, and data types.
* **[Semantic interoperability](https://en.wikipedia.org/wiki/Semantic_interoperability)**: ability of different systems to exchange data while preserving a shared interpretation of its meaning.
* **[Ontology alignment](https://en.wikipedia.org/wiki/Ontology_alignment)**: process of identifying relationships between concepts represented in different ontologies.
* **[Sentence embedding](https://en.wikipedia.org/wiki/Sentence_embedding)**: vector representation of text intended to capture its semantic meaning.
* **[Materialization](https://en.wikipedia.org/wiki/Materialization_%28computer_science%29)**: precomputing and storing derived information rather than generating it only when queried.

## Introduction
There are 7 shortfalls of biodiversity knowledge, and lack of connected knowledge on species' traits and interactions, and ecological functions is a major one. Metabolomes can aid in identifying plant functions, and help establish cause/effect in plants and their environments. Combining large datasets of metabolomic data is an obvious choice given how much data is actually needed to do analysis based on the metabolites.

The EMI and DBGI were started to document the metabolic content of species while following FAIR principles. ENPKG was an earlier step towards this, organizing metabolomics data from tropical plant extracts. ENPKG lacks ecological metadata. METRIN-KG expands this idea by combining:
1. metabolomes - ENPKG
2. plant traits - [TRY](https://www.try-db.org/)
3. biotic interactions - [GloBI](https://www.globalbioticinteractions.org/)
4. natural product information - [LOTUS](https://lotus.naturalproducts.net/) / Wikidata
The key problem is not simply that these datasets exist separately. They have different structures, identifiers, terminology, metadata, and levels of standardization. METRIN-KG attempts to create a common semantic representation so they can be queried together.
## Data integration
Taxonomic identifiers are one of the primary mechanisms for connecting the datasets. Species names and identifiers from different taxonomy databases are mapped to [Wikidata](https://www.wikidata.org/) identifiers.
### Semantic metadata mapping
They developed a semi-automated method for mapping this messy metadata to existing ontology terms.
Process:
1. parse and normalize raw metadata
2. extract labels and synonyms from relevant ontologies
3. generate sentence embeddings for ontology terms and source terms
4. calculate cosine similarity
5. select candidate ontology matches
6. manually review/correct mappings
## EMI Ontology
The EMI ontology provides the schema used to represent the integrated data. Reuses existing vocabularies and ontologies where possible:
* [SOSA](https://www.w3.org/TR/vocab-ssn/) - samples/observations
* [Relation Ontology](https://obofoundry.org/ontology/ro.html) - biological relationships
* [SKOS](https://www.w3.org/TR/skos-reference/) - knowledge organization
* [QUDT](https://www.qudt.org/) - quantities and units
* [WGS84 Geo](https://www.w3.org/2003/01/geo/) - geographic information
* ENPKG ontology - natural product concepts
## Knowledge graph construction
METRIN-KG uses the EMI ontology as the data schema and integrates three main data sources into subgraphs.
### ENPKG
ENPKG data are first loaded into a relational MySQL database. [Ontop](https://ontop-vkg.org/) mappings define relationships between the relational schema and EMI ontology.
## Linked data / federation
An important feature is that everything does not need to be copied into METRIN-KG. External identifiers allow information to remain linked to other resources and retrieved when needed.
