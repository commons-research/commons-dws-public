# [ChemReporter: A Framework for Curating and Exporting Large-Scale Chemical Datasets for MLIP Training](https://arxiv.org/html/2608.16418)
**ChemReporter**: modular framework for converting molecular datasets into representation and can export for MLIP ready training data. 

## Intro
**Machine learning interatomic potentials (MLIPs)** are a tool for molecular modeling in Chemistry. Their tool goes a long way towards improving MLIPs, by helping to filter and allowing for selection methods, and does checks against invalid atomic representations. The software also utilizes *parquet* for very efficient querying and filtering at scale. 
## Related Work
Much work has been done to extend coverage of the table of elements, and atomic interactions. Along with materials-focused datasets improvements. However existing datasets and work were done under differing *quantum-chemical* settings, and their compatibility is limited. 

2d topo work has also grown. wiht fingerprinting being done through graphs and EFCPs. Such as InChiKeys? 

3d  gemotries have also been improved. 

Results are promising and it appears to have an emphasis on resource use, selecting for smaller chunk sizes when processing. 

## Conclusion and outlook
ChemReporter stands to help address the challenges of MLIP performance for machine learning. 