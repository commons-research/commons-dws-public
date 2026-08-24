---
id: fwpvegqhoicmytj25jodq49
title: Fair Principles Interpretations And Implementation
desc: ''
updated: 1787577784606
created: 1787577783341
traitIds:
  - open-notebook-commons-ablood-literature
---
# [FAIR Principles: Interpretations and Implementation Considerations](https://direct.mit.edu/dint/article/2/1-2/10/10017/FAIR-Principles-Interpretations-and-Implementation)
## 1 Intro
FAIR principles are inteded to guide for sharing digital resources that are FAIR (findable, accessible, interoperable, reusable). But there is a risk of solutions becoming incompatible as a result. This paper proposes some implementation considerations to help avoid these concerns. 
## 2 From Interpretation to Implementation
Clarification on key aspects of making something FAIR:
1) **Machine Actionable:** Making resources FAIR should make them knowable/findable to a machine. Which has 4 implications for FAIR:
	- Findability: findable for humans and machines
	- accessibility: resources should be made explicit, with clear mechanisms for obtaining authorization
	- interoperability: should be able to merge similar resources into a singular "view" of the topic/entity. 
	- reusability: should be reusable for machines - that a machine can decide if the resource should be reused.
2) **(Meta)data**: Metadata should be any description of the sour ce for the purposes of findability, reusability, interpretation, assessment of the resource. So metadat should also be fair 
### 3 Interpretations and Implementation Considerations per Fair Guiding Principle
The FAIR principles are intended to make scientific resources **machine-actionable**, not merely available to humans. The major point is that FAIRness depends on persistent identification, rich machine-readable metadata, standardized access, explicit semantics, meaningful links between resources, and enough contextual information to support reliable reuse. And this section is an extension of the last section. 
* **Findable:** Data and metadata need **globally unique, persistent identifiers** (e.g., DOIs), rich searchable metadata, explicit links between metadata and the objects they describe, and registration in searchable resources. 
* **Accessible:** Resources should be retrievable through **standardized, open protocols** such as HTTP. 
	* **FAIR does not mean open**: authentication and authorization are compatible with FAIR, and metadata should remain accessible even if the underlying data disappear.  
* **Interoperable:** Data should use formal, machine-interpretable knowledge representations, like RDF. Shared vocabularies and ontologies should themselves be FAIR, and resources should use qualified links that explicitly describe relationships to other resources rather than merely linking to them.  
* **Reusable:** Metadata should provide enough context to determine whether data are appropriate for a particular purpose. This includes an explicit license, detailed provenance, and adherence to domain/community standards; provenance should describe how, why, by whom, and from what sources a resource was produced and subsequently processed.  