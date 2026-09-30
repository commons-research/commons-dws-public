[[The FAIR Guiding principles for scientific data management and stewardship.pdf]]
# [The FAIR Guiding Principles for scientific data management and stewardship](https://www.nature.com/articles/sdata201618)
## Terms
- **FAIR Principle:** Findable, Accessible, Interoperable, Reusable 
## Comment
They make a good point that good data management isn't a goal but a hygiene like requirement for improving knowledge management and discovery. They present four principles for *good data management*:
1) Findability
2) Accessibility
3) Interoperability
4) Reusability
They also point out (rightly so) the stakeholders effected:
- researchers
- data publishers
- software/tool builders
- funding agencies
- data science community
The data ecosystem however is wide and varied and standards of sharing data are not well established. 
## The FAIR Guiding Principles in detail
(note that the url they share for the data principles is dead)
Definitions are intentionally minimal, to reduce the barrier to entry for using them. There are can be degrees of *FAIRness*. 
Definitions expanded:
### FAIR Guiding Principles
#### To be findable:
- f1: (meta)data are assigned a globally unique and persistent identifier
- f2: data are described with rich metadata
- f3: metadata clearly and explicitly include the identifier of the data it describes
- f4: (meta)data are registered or indexed in a searchable resource
#### To be accessible:
- a1: (meta)data are retrievable by their identifier using a standardized communications protocol
	- a1.1: protocol is free, open, and universally implementable
	- a1.2: protocol allows for an authentication and authorization procedure, as needed
- a2: metadata are accessible, even when the dta are no longer available
#### To be interoperable
- i1: (meta)data use a formal, accessible, shared, and broadly applicable language for knowledge representation
- i2: (meta)data use vocabularies that follow FAIR principles
- i3: (meta)data include qualified references to other (meta)data
#### To be reusable
- r1: meta(data) are richly described with a plurality of accurate and relevant attributes
	- r1.1: (meta)data are released with a clear and accessible data usage license
	- r1.2: (meta)data are associated with detailed provenance
	- r1.3: (meta)data meet domain-relevant community standards
## The principles precede implementation
- FAIR is intentionally technology-neutral.
- FAIR is **not** a standard or specification.
- FAIR defines desired properties rather than prescribing implementation choices.
- Different communities can implement FAIR using different technologies.
- FAIRness exists on a continuum; resources can become progressively more FAIR over time.
## General notes
- FAIR applies not only to datasets, but also to:
    - software
    - workflows
    - algorithms
    - analytical pipelines
    - metadata
    - other research objects
- FAIR strongly emphasizes machine-actionability rather than simply human readability.
- Rich metadata is often more important than the data itself. Metadata should remain available even if the underlying data are removed.
- Semantic Web technologies (RDF, ontologies, shared vocabularies, linked data) are presented as important mechanisms for achieving interoperability.
- Provenance is considered essential for reproducibility and reuse.
- Community vocabularies and standards should be reused whenever possible rather than inventing new ones.
- FAIR is complementary to reproducible science rather than replacing it.