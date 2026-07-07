---
id: yk3gfhz1mm2pgy2lfm72t5f
title: >-
  Implementation_of_a_functional_semantic_similarity_measure_between_gene
  Products
desc: ''
updated: 1783425954750
created: 1783425861199
traitIds:
  - open-notebook-commons-ablood-literature
---
# [Implementation of a Functional Semantic Similarity Measure between Gene-Products](https://repositorio.ulisboa.pt/bitstreams/b360195f-961b-4929-97a9-f5c480a1ac73/download)
## Terms
- **[Functional similarity](https://en.wikipedia.org/wiki/Functional_similarity)**: Similarity between gene products based on biological function rather than sequence.
- **[Semantic similarity](https://en.wikipedia.org/wiki/Semantic_similarity)**: Similarity between concepts based on their meaning within an ontology.
- **[Gene Ontology (GO)](https://geneontology.org/)**: Controlled vocabulary describing gene products by molecular function, biological process and cellular component.
- **[Gene Ontology Annotation (GOA)](https://www.ebi.ac.uk/GOA/)**: Database linking gene products to GO terms.
- **[Information Content (IC)](https://en.wikipedia.org/wiki/Information_content)**: Measure of how specific a GO term is based on its frequency.
- **[Jiang-Conrath similarity](https://aclanthology.org/O97-1002/)**: Hybrid semantic similarity measure combining information content and ontology structure.
- **Node depth**: Distance of a GO term from the ontology root.
- **Node density**: Number of child relationships from a GO term.
- **Directed Acyclic Graph (DAG)**: Graph structure used by GO where terms may have multiple parents but no cycles.
- **FuSSiMeG**: Functional Semantic Similarity Measure between Gene-Products proposed in this paper.
- **Swiss-Prot**: Manually curated section of UniProt.
- **TrEMBL**: Automatically annotated section of UniProt.
- **[WordNet](https://wordnet.princeton.edu/)**: Lexical ontology commonly used to evaluate semantic similarity methods.
## About
*FuSSiMeG* is a semantic similarity measure for comparing gene products using Gene Ontology annotations rather than sequence similarity. It extends the Jiang-Conrath semantic similarity measure and is intended for applications where biological function is more important than structural similarity.
## Semantic similarity
The paper distinguishes two major approaches for measuring semantic similarity:
1. **Information content (node-based):** similarity depends on how much information two terms share.
2. **Conceptual distance (edge-based):** similarity depends on distance through the ontology graph.
FuSSiMeG combines both approaches into a hybrid similarity measure based on Jiang-Conrath. 
## Gene Ontology
The measure operates on the Gene Ontology rather than sequence databases. GO is represented as a *directed acyclic graph (DAG)* instead of a tree, allowing terms to have multiple parents and providing a more realistic representation of biological knowledge. 
## Information content
Information content is computed from GO annotation frequencies. Frequently occurring GO terms contain less information, while rare, specific terms contain more. Occurrences are propagated upward through the ontology so parent terms become progressively more common and therefore have lower information content. 
## FuSSiMeG
Functional similarity between two gene products is computed by comparing all GO terms assigned to each product and selecting the highest semantic similarity. The final score is further weighted by the information content of the matched GO terms so that highly specific matches contribute more than generic annotations.
## Applications
- protein function prediction
- protein family organization
- identifying interacting proteins
- validating text-mining systems
- evaluating biological information extraction
- analysis of microarray clusters 
