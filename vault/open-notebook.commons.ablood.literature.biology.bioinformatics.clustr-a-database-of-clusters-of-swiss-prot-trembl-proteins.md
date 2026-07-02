---
id: 7mofl008uvcr9uycopgw8f0
title: Clustr A Database Of Clusters Of Swiss Prot Trembl Proteins
desc: ''
updated: 1782963628906
created: 1782963589018
traitIds:
  - open-notebook-commons-ablood-literature
---
# [CluSTr: a database of clusters of SWISS-PROT+TrEMBL proteins](https://academic.oup.com/nar/article/29/1/33/1116052)

## Terms

- **CluSTr**: Database that automatically clusters proteins based on sequence similarity.
- **Homology**: Similarity between proteins due to shared evolutionary ancestry.
- **Smith-Waterman algorithm**: Local sequence alignment algorithm used to compare protein sequences.
- **Z-score**: Statistical measure of sequence similarity significance, independent of database size.
- **Single-linkage clustering**: Hierarchical clustering method where clusters merge if any pair of members are sufficiently similar.
- **InterPro**: Integrated database of protein families, domains and functional sites.
- **Pfam**: Database of protein families represented by profile Hidden Markov Models (HMMs).
## CluSTr
CluSTr automatically groups SWISS-PROT and TrEMBL proteins into clusters of homologous proteins using pairwise sequence similarity. Instead of relying on manual classification, the database performs an all-against-all comparison and builds clusters at multiple similarity thresholds, producing a hierarchical organization of protein families. They propose CluSTr as a resource for function prediction, automatic annotation, redundancy reduction, comparative genomics and phylogenetic analysis.
## Clustering approach
The clustering pipeline has two main steps. First, every protein sequence is compared against every other sequence using the Smith-Waterman algorithm. Sequence similarity is converted into a statistically meaningful Z-score using Monte Carlo simulations with shuffled sequences. The resulting similarity matrix is then clustered using single-linkage clustering. Clusters are generated at different similarity thresholds, allowing users to examine protein relationships at multiple levels of granularity.
## Hierarchical clustering
Different protein families evolve at different rates, making a single similarity cutoff insufficient. CluSTr therefore generates clusters at many similarity levels rather than producing one fixed clustering.  They also notes that multidomain proteins can incorrectly merge otherwise unrelated families, making hierarchical clustering more robust than a single global threshold.
## Database design
CluSTr stores proteins, pairwise similarities and cluster relationships in a relational database. The database was designed for incremental updates, allowing only new or modified proteins to be compared rather than recomputing every similarity score. This significantly reduces the computational cost as SWISS-PROT and TrEMBL continue to grow.
## InterPro integration
Each cluster is linked to InterPro, allowing users to examine shared domains, protein families and functional sites across all proteins in the cluster.Additional links to HSSP and PDB connect sequence clusters to structural information.
## Applications
They proposes several applications including:
- automatic protein function prediction
- automatic annotation of newly sequenced proteins
- protein family discovery
- redundancy reduction
- comparative proteomics
- phylogenetic analysis
## Relevance 
Although CluSTr is sequence-based rather than graph-based, it demonstrates how biological knowledge can be represented as relationships between proteins, domains, structures and annotations. The InterPro links are relevant for knowledge graphs because they connect proteins to domains, functional sites and protein families. This is an example of integrating multiple biological databases into a richer semantic representation. 