# [Semantic micro-contributions with decentralized nanopublication services](https://peerj.com/articles/cs-387/)
Large entities are the lion's breadth of Linked Open Data, and there is room for smaller publication dichotomies. But it is hard for users to publish smaller pieces of linked data on their own. 

**Semantic micro-contributions**: independently publishable small snippets of Linked Data. 


Their work:
1. signed nanpublication scheme for reliability 
2. complementary nanpublication services, one based on QPF (Triple Pattern Fragments based Quad Pattern Fragments)
3. UI  that connects to 1 and 2
4. evaluation results
## Background
LInked Data should:
- come directly from the authors
- have both metadata and content of the scientific findings themselves
- Become main publication object rather than papers with narrative text (such as this one)

**Nanopublications:** small independent pieces of Linked Data, that carry atomic statements using RDF triples, with provenance info, and metadata. 

They have a decentralized server network that allows for publishing nanopublications with *trusty* URIs. 

LDF (Linked Data Fragments) and TPF (Triple Pattern Fragments) are tools for reducing SPARQL query issues, such as availability, and break down queries into smaller pieces and run in parallel. 

They also argue that nanopublications should be immutable, but also mechanisms for linking versions. Then a mechanism such as the `npx:retracts` can be used to mark a nanopub as obsolete. 

## Nanopublication services
Easily and reliably able to share nanopublications to their server network, which will also include redudancy. 

