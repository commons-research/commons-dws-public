---
id: 1wvrhrykopbquqx56mf9o83
title: Decentralized Provenance Aware Publishing With Nanopublications
desc: ''
updated: 1786969950603
created: 1786969949590
traitIds:
  - open-notebook-commons-ablood-literature
---
# [Decentralized provenance-aware publishing with nanopublications](https://backoffice.biblio.ugent.be/download/8521008/8521009)
## Terms
- **[Nanopublication](https://nanopub.net/)**: small knowledge graph with metadata and can be treated as an independent scientific publication.
- **DOI:** Digital Object Identification system for referring to objects online.
- **[RDF Data](https://en.wikipedia.org/wiki/Resource_Description_Framework)**: (resource description framework) used to describe and exchange graph data. RDFs are directed graphs
- **[SPARQL](https://en.wikipedia.org/wiki/SPARQL)**: SPARQL Protocol and RDF Query Language, used for semantic queries of databases with data stored as RDFs. 
- **Trusty URIs:** En example [here](http://example.org/r1.RA5AbXdpz5DcaYXCh9l3eI9ruBosiL5XDU3rxBbBaUO70)
- **Follow your nose principle**: Looking up URIs should return the relevant data as well as links to other relevant URIs, allowing for exploration/discovery.
## Intro
datasets are increasingly divorced from the publications referring back to them. There are inherent trust, centralization, and sharability concerns with many of the current methods associated with data sharing. Their approach uses RDFs and *nanopublications* and presents decentralized RESTful APIs that support FAIR principles. Goal is a system that is trustworthy and publishes, retrieves, and archives linked data as nanopublications. 
## Background
Nanopublications take provenance into account for publishing. And can be used for fine grain citation of data. Based on RDF with named graphs. So its:
- atomic assertions -> 
- represented in RDF -> 
	- contains provenance info
- Each entity is its own publication
With regards to SPARQL and SPARQL endpoints (servers), SPARQL is quite resource intensive and often endpoints will go down (relative to like amazon's 9 9's - SPARQL is only up 95% of the time on average). If things were decentralized, then the risk of failure would be largely mitigated as data access would be done across many endpoints. 
## Approach
Their approach assumes the data is already structured as an RDF representation. And use of the *follow your nose principle*. 
### Architecture
Three semantic web architectures are proposed:
1) http get requests
2) SPARQL query endpoints
3) Triple Pattern fragments: limited query features, query execution done client side. 
### Nanopublication servers
They propose a restful api style server network, allowing for distributed querying (essentially the cloud). A nanopub server has these components:
- key-value store of nanopubs
- list of stored nanopubs
- cache of gzipped packages
- pattern definitions
- list of known peers (other nanopub servers)
- information about each known peer
Servers respond with the following to a GET request:
- server info
- artifact code of the nanopub in question - using formats like TriG, TriX, N-Quads, JSON-LD
- journal page by page number upon request
- each journal page returns a gzipped package
- list of known peers
With optional support for POST requests:
- add a nanopub
- add a url of a new nanopub server
(the optional post request stuff seems a bit in the weeds. The implementation details don't need this specific. maybe just outline the bare bones requirements and leave optional functionality to another section?)
### Trusty Publishing
The trusty URI fallow for accessing the specific resource, even if the URL is down on one server, as the trusty URI will ensure that unique entry is identifiable on the other servers. 
### Multi-layer architecture
They argue data storage and data querying should be separated.
Lowest layer:
- publication
- storage
- replication
- archival
Higher layers:
- querying
- search
- aggregation
- analytics
This keeps the underlying data infrastructure simple and reliable while allowing more complex services to be built above it.
### Nanopublication indexes
A single nanopublication is intentionally tiny, so collections are represented using nanopublication indexes.
Indexes:
- reference nanopublications rather than containing them
- are themselves nanopublications
- support hierarchical organization through sub-indexes
- allow large datasets to be referred to using a single identifier
## Discussion and Conclusion
Current scientific publishing has several shortcomings:
- publications become disconnected from datasets
- centralized repositories are single points of failure
- datasets cannot easily be referenced at a fine-grained level (individual assertions or subsets)
- difficult to verify that retrieved data has not been modified
Nanopublications take provenance into account for publishing and enable fine-grained citation of scientific claims.
Built on RDF named graphs:
- assertion (the claim)
- provenance (where/how the claim came from)
- publication info (metadata about the nanopublication)
Each nanopublication is treated as an independent publication.
## Research Objects
Interesting comparison:
- Research Objects bundle an entire experiment (data, workflows, software, logs, etc.)
- Nanopublications instead focus on small, atomic scientific assertions.

These approaches are complementary rather than competing.