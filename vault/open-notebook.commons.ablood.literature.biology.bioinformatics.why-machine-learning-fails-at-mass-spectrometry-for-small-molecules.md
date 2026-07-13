---
id: 6vzp1mq8xa7fg6dz7j5d7ra
title: Why Machine Learning Fails At Mass Spectrometry For Small Molecules
desc: ''
updated: 1783913316141
created: 1783913315153
traitIds:
  - open-notebook-commons-ablood-literature
---
# [Why machine learning fails at mass spectrometry for small molecules](https://www.nature.com/articles/s42255-026-01544-6)
## Current situation
Most models are currently predicting a molecular fingerprint, then querying a molecular db, like pubchem, to find candidates. Useful for identifying compounds that have never been identified in MS, as the model can map any spectra to a fingerprint. Training occurs with commonly used datasets like NPLIB1 or MassSpecGym. 
The neural network workflow goes:
1) MS collected (m/z) 
2) encoded
3) then embedded
4) run through neural network
5) predicted fingerprint obtained
6) fingerprint lookup in database
7) evaluation of database candidates
Models evaluated, includig DreaMS and MIST performed poorly. For scaffolding splits, nearest neighbor outperforms MISt, and is near the performance of DreaMS. 
## Inability to generalize across experimental conditions
Current models fail to model changes in conditions impact spectra.
## Inability to capture peak intensity 
Models struggle with distinguishing similar m/s distributions (could this be overfit?). And intensity information is largely ignored. 
## Inability to generalize to new chemical formulas
Examples where the models fell short were also largely due to molecular fragments being present that were not present in the training data. 