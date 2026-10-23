---
id: we734fxl55hxi41ijp2qcbd
title: >-
  The Lotus Initiative For Open Knowledge Management In Natural Products
  Research
desc: ''
updated: 1789562832182
created: 1789562832182
traitIds:
  - open-notebook-commons-ablood-literature
---
# [The LOTUS initiative for open knowledge management in natural products research](https://elifesciences.org/articles/70780)

## Introduction
Natural-products knowledge is fragmented across many specialized databases with inconsistent standards, access models, and levels of curation, making integration and reuse difficult.

LOTUS treats the **referenced structure–organism pair** as the fundamental unit of natural-products knowledge: a chemical structure linked to the organism in which it was observed and to the scientific evidence supporting that relationship.

LOTUS was developed to move natural-products knowledge away from isolated databases toward an open, interoperable, and computer-interpretable knowledge resource.

The project builds partly on experience from **COCONUT**, extending chemical-structure aggregation to include biological organisms and literature references.
## FAIR and Open Knowledge
LOTUS explicitly follows **FAIR** principles as well as **TRUST** principles for sustainable and transparent scientific data management.

Data are released under **CC0**, allowing unrestricted reuse, editing, redistribution, and community contribution.

A major goal is not simply making the data downloadable, but making the knowledge **machine-interpretable, interoperable, traceable, and reusable**.
### Wikidata

**Wikidata was chosen as the primary dissemination platform** because it already provides an open, globally maintained, cross-disciplinary knowledge graph with machine-readable statements, identifiers, references, and community curation.

Hosting LOTUS within Wikidata connects natural-products knowledge to existing information about chemicals, organisms, taxonomy, publications, and other domains rather than creating another isolated database.

Wikidata also permits natural-products relationships to be queried using **SPARQL**, enabling questions spanning chemical structures, taxa, and references.

Because Wikidata is not ideal for every natural-products-specific search task, LOTUS is also mirrored through a dedicated natural-products interface; the two approaches provide general linked-data interoperability and domain-specific usability respectively. (deprecated - use zenodo or wikidata).
## Data Model and Curation
LOTUS reduces natural-products occurrence knowledge to three core objects: **chemical structure, biological organism, and supporting reference**.

Chemical structures are normalized using identifiers such as **SMILES, InChI, and InChIKey**, while organisms are linked to standardized taxonomic identifiers and references to persistent publication identifiers.

Heterogeneous source databases require substantial **harmonization, processing, and validation** before their information can become interoperable.

The overall workflow is essentially **harmonization → processing → validation → dissemination**, with later community contributions feeding back into the resource.

LOTUS uses a **Single Source of Truth (SSOT)** internally so that curated information is maintained consistently before dissemination through Wikidata and the LOTUS interface.
