---
id: o9msq17sc8hjyqxhle2z8an
title: Splatter Simulation Of Single Cell Rna Sequencing
desc: ''
updated: 1787146704423
created: 1787146701569
traitIds:
  - open-notebook-commons-ablood-literature
---
# [Splatter: simulation of single-cell RNA sequencing data](https://link.springer.com/article/10.1186/s13059-017-1305-0)
Splatter creates an interface for simulating RNA data. Their simulation has 2 steps: estimate parameters for sim from real dataset and then use those estimates to generate the synthetic dataset. 

## Simulation models
Their model is called Splat, but they also include other models to use as well.
## Simple
This is a basic sim using negative binomial distribution. 
## Lun
This is build on Simple and adds scaling factors for each cell. 
## Lun 2
Exntension of the Lun model, and replace cell factors iwth library size factors, and batch effects that are applied to groups of cells in same batch.
## scDD
checks differential expression between two groups of cells. 
## BASiCS
separates variation in scRNA-seq data into bio and technical components. 
## Splat
Their model. Captures features from real scRNA-Seq data. Usies parametric distirbutions with hyper-parameters based on real data estimates. 
## Conclusion
Splatter allows for simulations and their model Splat performs well, amongst the other models available on Splatter. 