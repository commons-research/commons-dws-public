---
id: ox544qyn2v8f1rk2x0fxzti
title: Processing Sparql Queries Over Distributed Rdf Graphs
desc: ''
updated: 1786630064632
created: 1786455706442
traitIds:
  - open-notebook-commons-ablood-literature
---
# [Processing SPARQL Queries Over Distributed RDF Graphs](https://arxiv.org/abs/1411.6763)
## Terms
- **local partial match**: the query partial answers in each fragment of the RDF graph
- **SPARQL**: SPARQL Protocol and RDF Query Language.
- **RDF**: Research Description Framework, represents data as a collection of triples
- **Triples**: Data represented as <subject,property, object>. 
- **[graph homomorphism](https://en.wikipedia.org/wiki/Graph_homomorphism)**: mapping between two graphs that respects their structure, mapping adjacent vertices to adjacent vertices. 
- **Fragment**: A piece of the partitioned graph (a subgraph)
- **Inner matches**: SPARQL matches within a fragment
- **Crossign matches**: Matches on edges that cross between fragments.
## Abstract
about techniques for doing SPARQL queries over large RDF graphs in distributed environments. 
## 1 Introduction
RDFs can be represented as graphs where the subjects and objects are the vertices and the triple itself is an edge with the edge labels being the properties. Distributed querying is needed given how large RDF graphs have become. There are three existing categories of query solutions:
1) cloud based - Using existing cloud solutions for the querying. Probably most expensive
2) partition based - divides graph into subgraphs and then does sub queries. Works similar to relational databases that are distributed.
3) federated approach - Uses multiple SPARQL endpoints 
In this paper they propose an alternative strategy for querying where the graph is partitioned but the queries are not decomposed. Where each partition receives the full query, $Q$. SPARQL is based on graph *homomorphism*. Graph homomorphism is a function over a graph not a relationship between vertices. 

Within a *fragment* an *inner match* can be found using centralized techniques. But treating each fragment as independent will ignore crossing links between each fragment. So the issue is finding the remaining matches that are *crossing matches*. The two issues addressed with their framework:
1) compute parital evaluation results at each site
2) assemble the local partial matches to compute cross matches

For the 2nd issue, they have two strategies:
1) centralized assembly - all local partial matches sent to a single site for assembly
2) distributed assembly - local partial matches are assembled at $n$ number of sites in parallel.

Their solution benefits are:
- no dependence on particular partition strategies (i.e. can be arbitrary partitioning). 
- uses fewer intermediate vertices and edges.
## 2 Related Work
### Distributed SPARQL Query Processing
#### Cloud based approaches
- [survey of cloud based approaches](https://arxiv.org/pdf/1411.6763#cite.VLDBJ14%3ARDFCloudSurvey)
Most approaches use the *MapReduce* paradigm. They put the triples into flat files and then scan the files with the query for matches. Then this is joined together using MapReduce join implementations that already exist. There are other approaches as well, such as using NoSQL. 

All these approaches are going to be cloud expected outcomes, highly scalable, fault-tolerant, but are going to lower performance (meaning \$\$\$). 
#### Partition-based approaches
For these the graph is partitioned into fragments and then run in parallel, potentially remotely (arbitrary really). Each fragment site has a central RDF store, and when running a SPARQL query is decomposed into subqueries, that are answered on site (assuming they mean in that fragment's runtime), then all results are combined. 

Each method mentioned follows a set of rules for partitioning the data. But this may at times be an issue, if the partitioning strategy cannot be controlled, like with admin locks. 
#### Federated SPARQL Query Systems
Here queries are run across multiple SPARQL endpoints, like with linked data with RDF repos linked together and collectively queriable. Commonly the metadata for each end point is precomputed, and that metadata is used to decompose the query into subqueries, across relevant endpoints. 
#### Partial Evaluation
