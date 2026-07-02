---
id: pfo0vcyjw8n0efo8i1xvl58
title: >-
  A New Measure For Functional Similarity Of Gene Products Based On Gene
  Ontology
desc: ''
updated: 1782963027093
created: 1782963016751
traitIds:
  - open-notebook-commons-ablood-literature
---
# [A new measure for functional similarity of gene products based on Gene Ontology](https://pubmed.ncbi.nlm.nih.gov/16776819/)

## Terms
- **Gene Ontology (GO)**: Standard vocabulary describing gene products through **molecular function**, **biological process**, and **cellular component**.
- **Semantic similarity**: Measure of how closely two concepts are related within an ontology.
- **Information content (IC)**: Measure of how specific a GO term is. Rare terms have higher information content than common terms.
- **Lowest common ancestor (LCA)**: The most specific GO term shared by two GO terms.
- **simRel**: Semantic similarity measure proposed by the paper. Combines the strengths of Resnik and Lin similarity.
- **funSim**: Functional similarity score between gene products based on their GO annotations.
- **Homology**: Similarity due to shared evolutionary ancestry.
- **Orthologs**: Genes in different species that evolved from a common ancestral gene and often retain similar functions.
- **Multidimensional scaling (MDS)**: Dimensionality reduction method that projects pairwise distances into a low-dimensional space for visualization.
## Motivation
Traditional function prediction relies heavily on sequence similarity. However, proteins with similar sequences do not always perform the same function, and proteins with similar functions may have evolved independently. Instead they compare proteins using their **Gene Ontology annotations**, allowing similarity to be measured directly from biological function rather than sequence alone.
## Gene Ontology
GO is represented as a **directed acyclic graph (DAG)** rather than a tree. Each term can have multiple parents through relationships such as:
- **is-a**
- **part-of**
The paper notes that GO depth alone is not a good measure of specificity. Two terms at the same depth can represent very different levels of biological detail.
## simRel
The proposed **simRel** measure combines ideas from both Resnik and Lin. It considers:
- how specific the shared ancestor is
- how close both GO terms are to that ancestor
Unlike previous measures, generic shared ancestors receive less weight, making the similarity more biologically meaningful.
## funSim
**funSim** extends semantic similarity from individual GO terms to complete gene products. Rather than comparing only one pair of GO terms, it compares the complete annotation sets for two proteins and allows **partial matches**. This makes it more robust for:
- incomplete GO annotations
- multifunctional proteins
## Results
The proposed similarity scores correlate well with sequence similarity, but also identify proteins with similar functions despite having little or no sequence similarity. The approach can therefore discover functional relationships that homology-based methods miss. They also found that:
- molecular function similarity tends to correlate more strongly with sequence similarity than biological process similarity
- orthologous proteins are not necessarily functionally identical
## Functional maps
They compare every yeast protein against every other yeast protein using **funSim**, then apply **multidimensional scaling (MDS)**. This produces a map where proteins naturally cluster according to molecular function. Similar functional groups appear close together, while multifunctional proteins tend to lie between clusters.
## Applications
The proposed measures can be used to:
- compare functions between different species
- identify functionally related proteins without relying on sequence similarity
- discover potential pathogen-specific drug targets
- visualize functional space of proteins or protein families
## Limitations
The approach depends heavily on GO annotation quality. Missing, incomplete, or incorrect GO annotations reduce the usefulness of the similarity measures. The authors also note that future work should distinguish between **is-a** and **part-of** relationships and include the **cellular component** ontology.
