# [The anatomy of a nanopublication](https://journals.sagepub.com/doi/abs/10.3233/ISU-2010-0613)
Nanopublications should be:
- easily aggregrated 
- identifiable 
- extensible
Thus they present these key definitions for nanopublications
- Concept: smallest umambiguous unit of thought
- Triple: tuple of three concepts (subject, predicate, object)
- Statement: triple that is uniquely identifiable
- Annotation: triple such that the subject is a statement
- Nanopublication: set of annotations that refer to the same statement and contains a minimum set of agreed on annotaitons
- S-Evidence: all nanopubs that refer to the same statement
Any format that wishes to use this model should meet these requirements:
1) ability to uniquely identify concept
2) ability to uniquely identify statement
3) ability to refer to all unique entities


They suggest the use of a named graph. A named graph is designed to track provenance. The mapping of a nanopub to the name graph goes:
1) triples are rdf-triples
2) each statement is itself a unique named graph
3) each annotation has a subject that is the URI of a named graph
4) all annotations of a nanopub are part of the same named graph

The annotations present a clear mechanism for attributing credit, aka for citation and attribution. 