---
id: ox544qyn2v8f1rk2x0fxzti
title: Processing Sparql Queries Over Distributed Rdf Graphs
desc: ''
updated: 1786776437662
created: 1786455706442
traitIds:
  - open-notebook-commons-ablood-literature
---
# [Processing SPARQL Queries Over Distributed RDF Graphs](https://arxiv.org/abs/1411.6763?utm_source=chatgpt.com)
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
They mention using partial evaluation and XML but that  SPARQL queries RDF as a graph and therefore topology is not the same intuitive idea as a hierarchical structure like an XML tree. 

## 3 Background and Framework
Again, an RDF can be a graph if the subjects and objects are treated as the vertices and the triples as labeled edges. 
### Definition 1 (RDF Graph)
graph is $G=\{V,E,\Sigma\}$ , where:
- $V$ is a set of vertices of all subjects and objects in the RDF Data: $E\subseteq V \times V$ a multiset of directed edges for all triples in the RDF dataset.  $\Sigma$ is the set of labels, and for each edge $e \in E$ the edge label is its property. 
SPARQL queries can be represented as a graph $Q$. 
### Definition 2 (SPARQL BGP Query)
they denote a SPARQL  BGP Query wtih $Q = \{V^Q,E^Q,\Sigma^Q\}$ where $V^Q\subseteq V \cup V_{Var}$  as a set of vertices, $V$ is all vertices in the RDF graph $G$ and $V_{Var}$ is a set of variables. $E^Q \subseteq V^Q \times V^Q$ is multiset of edges in $Q$. edge $e$ in $E^Q$ has either an edge lable in $\Sigma$ or is a variable (what?). 
### Definition 3 (SPARQL Match)
A subgraph $M$ with $m$ vertices $\{u_1,...,u_m\}$ that are in $G$ is a match of $Q$ graph if and only if a funciton $f$ with conditions below exists:
1) if $v_i$ is non variable $f(v_i)$ and $v_i$ have the same value/ URI
2) i4 $v_i$ is a variable there is no constraint on the function
3) if edger $v_iv_j$ exists in $Q$ there is a edge of the function that also exists. 
### Definition 4 (Distributed RDF Graph)
$G$ is a set of fragments $\mathcal{F}$, in each fragment $F_i$,, where the $F$ are specified as:
1) $\{V_1, \ldots, V_k\}$ partitions $V$:
   $$
   V_i \cap V_j = \emptyset \quad (i \neq j), \qquad
   \bigcup_{i=1}^{k} V_i = V
   $$

2) $$
   E_i \subseteq V_i \times V_i, \qquad i=1,\ldots,k
   $$

3)  $E_i^c$ contains edges between $F_i$ and other fragments:
   $$
   E_i^c =
   \left(
   \bigcup_{\substack{1\le j\le k\\j\neq i}}
   \{\overrightarrow{uu'} \mid u\in F_i,\ u'\in F_j,\ \overrightarrow{uu'}\in E\}
   \right)
   \cup
   \left(
   \bigcup_{\substack{1\le j\le k\\j\neq i}}
   \{\overrightarrow{u'u} \mid u\in F_i,\ u'\in F_j,\ \overrightarrow{u'u}\in E\}
   \right)
   $$

4) $V_i^e$ contains vertices in other fragments that are endpoints of crossing edges with $F_i$:
   $$
   V_i^e =
   \left(
   \bigcup_{\substack{1\le j\le k\\j\neq i}}
   \{u' \mid \overrightarrow{uu'}\in E_i^c,\ u\in F_i\}
   \right)
   \cup
   \left(
   \bigcup_{\substack{1\le j\le k\\j\neq i}}
   \{u' \mid \overrightarrow{u'u}\in E_i^c,\ u\in F_i\}
   \right)
   $$

5) **Vertex terminology:**
   - $V_i^e$ = extended vertices of $F_i$
   - $V_i$ = internal vertices of $F_i$

6) $\Sigma_i$ = set of edge labels in $F_i$. 

### Definition 5 (Problem Statement)
$G$ is a distributed RDF graph, with fragments $\mathcal{F}$. and $S$ is the computing nodes. Th $i$ for both corrsponds to the fragmetn being on that node. 
## 4 Partial Evaluation
Each site receives the complete query graph and independently computes local partial matches using only the graph fragment it stores. A local partial match represents the portion of a potential cross-fragment match visible within that fragment, even though the complete match cannot yet be confirmed from the locally available data.
### Definition 6 (Local Partial Match)
given a partial match, it qualifies if:
1) the vertex is not a variable, the function and vertex have the same value/URI or the function is NULL.
2) if the vertex is a variable, the function of it is a set of values or is NULL.
3) if there is an edge in $Q$, then one of these conditions:
	1) there is a matching edge in the partial match with the same property.
	2) there is a matching edge in the partial match and the query edge's property is a variable.
	3) there is no matching edge, but both mapped vertices are extended vertices.
	4) the source vertex maps to NULL.
	5) the target vertex maps to NULL.
4) the partial match contains at least one crossing edge.
5) if a query vertex maps to an internal vertex, all of its neighbours in $Q$ must also be mapped (not NULL) and connected by the corresponding edges with matching properties.
6) if two query vertices map to internal vertices, there must be a weakly connected path between them in $Q$, with every vertex on that path mapping to an internal vertex.

The vector of mapped query vertices is the serialization of the local partial match.

**Condition 4:** ensures the partial match is part of a crossing match rather than an entirely local match.

**Condition 5:** an internal vertex's neighbourhood is fully known within the fragment. Therefore, if a query vertex maps to an internal vertex, its query neighbours must also have corresponding matches in the fragment. A partial match violating this cannot contribute to a valid crossing match.