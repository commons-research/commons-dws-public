---
id: vatidcid2coma5lxrgceigw
title: >-
  Knowledge Graph Construction Based Semantic Web Application For Ontology
  Development
desc: ''
updated: 1783947019322
created: 1783947018442
traitIds:
  - open-notebook-commons-ablood-literature
---
# [Knowledge Graph Construction-Based Semantic Web Application for Ontology Development](https://ieeexplore.ieee.org/document/11136719)

## Terms

* **OBDA**: Ontology-Based Data Access. Provides a formal semantic layer over structured relational data.
* **KGC**: Knowledge Graph Construction. Creation of a graph of linked entities and relationships.
* **[GeoSPARQL](https://www.ogc.org/standard/geosparql/)**: RDF vocabulary and SPARQL extension for representing and querying geospatial data.
* **[OWL-Time](https://www.w3.org/TR/owl-time/)**: OWL ontology for representing temporal entities and relationships.
* **[R2RML](https://www.w3.org/TR/r2rml/)**: W3C language for mapping relational databases to RDF.
* **[BootOX](https://github.com/ontop/ontop)**: Tool for generating ontologies and mappings from relational database schemas.
* **[Strabon](https://github.com/AI-team-UoA/Strabon)**: RDF store supporting spatial and temporal queries using stSPARQL.
* **[PostGIS](https://postgis.net/)**: PostgreSQL extension for storing and querying geospatial data.
* **[stSPARQL](https://www.strabon.di.uoa.gr/)**: Extension of SPARQL for spatial and temporal RDF queries.
* **Attribute richness (AR)**: Average number of attributes defined per ontology class.
* **Inheritance richness (IR)**: Average number of subclass relationships per ontology class.
* **Relationship richness (RR)**: Proportion of non-inheritance relationships compared with all ontology relationships.
## Intro

Their main research includes:
* knowledge graph construction
* semantic query execution
* visualization
  The goal is to reduce the manual effort and scalability problems of ontology development. Heterogeneous relational, spatial and temporal data are exposed through an ontology and knowledge graph, allowing users to query concepts and relationships rather than database-specific tables and columns.
## Literature Review
- [Ontology-Based Data Access](https://doi.org/10.1007/978-3-319-46547-0_5) provides a semantic layer over relational databases but is mainly designed for structured data and can be difficult to scale to dynamic or semi-structured sources.
- [Navigating Ontology Development with Large Language Models](https://link.springer.com/chapter/10.1007/978-3-031-60626-7_8) investigates generating OWL models from competency questions and ontology requirements. LLMs can accelerate ontology modeling, but outputs still require human validation for consistency and completeness.
- [NeOn-GPT](https://link.springer.com/chapter/10.1007/978-3-031-78952-6_4) combines the NeOn ontology methodology with LLM prompts to generate ontologies in Turtle. It reduces the expertise required for initial modeling but does not replace formal reasoning or domain validation.
- [LLMs4Life](https://arxiv.org/abs/2412.02035) extends NeOn-GPT for life-science ontologies through ontology reuse, domain-specific prompting and iterative refinement. This is more relevant to my work because it evaluates ontology learning in a complex biological domain.
## Methodology
The framework has five stages:
1. dataset acquisition
2. ontology development and semantic modeling
3. mapping and knowledge graph integration
4. semantic query execution
5. visualization
## Dataset
Each environmental record is represented as:
$$
D={id,name,geom,t_{start},t_{end},obs}
$$
The data includes spatial entities such as lakes, rivers, agricultural areas and infrastructure, together with observations such as rainfall, temperature and water levels. PostGIS provides spatial operations including `ST_Intersects`, `ST_Within` and `ST_Envelope`.
## Ontology development
The ontology is represented as:
$$
O=(C,P,A)
$$
Where:
- $C$ is the set of classes
* $P$ is the set of properties
* $A$ is the set of logical axioms
GeoSPARQL provides spatial relationships such as `sfWithin`, `intersects` and `touches`. OWL-Time provides temporal relationships such as `before`, `after` and `during`.

## Knowledge graph construction
R2RML mappings connect relational tables and columns to ontology classes and properties. Each database row is exposed as an RDF subject, while columns become predicate-object values.
An R2RML mapping contains:
* a source SQL query
* a rule for generating the subject IRI
* predicate-object mappings for the remaining values
  BootOX generates these mappings from database metadata. The framework uses virtual RDF, meaning that RDF triples are generated during query execution rather than permanently duplicating the relational data.
## Semantic query execution
Strabon executes SPARQL and stSPARQL queries over the virtual knowledge graph. Queries use ontology concepts such as `Lake`, `Observation` or `WaterLevel`, while Strabon translates them into SQL and PostGIS operations.
This abstraction separates the user query from the physical database schema. Similar mappings could allow one semantic query to operate across multiple mass-spec or molecular datasets that use different column names and structures.
## Visualization
The interface uses Leaflet.js to display SPARQL query results on an interactive map. Results may be returned as JSON or GeoJSON and rendered as markers, polygons, lines or time-dependent layers.
The visualization is represented as:
$$
V(Q)=G_{map}\left({g_i},extPopup(R(Q))\right)
$$
Where 
- $Q$ is the SPARQL query, 
- $R(Q)$ is its result set 
- ${g_i}$ contains the returned geometries.
