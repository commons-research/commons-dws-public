---
id: cm0488ywvgcvfk002ynufaw
title: Massspecgym In The Wild
desc: ''
updated: 1782363324448
created: 1782363318157
traitIds:
  - open-notebook-commons-ablood-literature
---
[source](https://arxiv.org/pdf/2606.19624)

[MassSpecGym v1.5](https://github.com/pluskal-lab/MassSpecGym)
# Terms
- **in silico**: experimentation done on the computer
- **[shortcut learning](https://www.nature.com/articles/s42256-020-00257-z)**: Decision rules that perform well with benchmarks but do not transfer to real world or more stringent testing of the model. 
- **[Overfitting](https://www.ibm.com/think/topics/overfitting)**: Model fits training data too closely, and cannot make accurate predictions about non training data. 
- **data leakage**: test data are accidentally available during training/evaluation. Which makes the model performance look better than it should be
- **MCES**: Maximum Common Edge Subgraph, similarity measure (distance) used for splitting into train/test without being too similar. 
- **[Tanimoto Similarity](https://goldbook.iupac.org/terms/view/11523)**: Ranges from `0.0` to `1.0`, measures similarity between two molecular fingerprints
- **[InChIKey-14](https://en.wikipedia.org/wiki/International_Chemical_Identifier)**: First 14 characters of an InChIKey. 
- **Chemical formula leak**: Occurs when model gains information about formula which should be unknown to the model. 
- **Candidate set**: list of possible molecules retrieval model ranks the spectrum against. 
# Introduction
Misusing benchmarks can result in *shortcut learning*, data leakage, and overfitting.

MassSpecGym breaks the molecule identification prcoess down into 3 tasks:
1) spectrum simulation challenge
2) retrieval challenge
3) *de novo* generation challenge - where the model makes structures from the MS

There are three commonly found types of failures for training models:
1) Data leakage: Data splitting on exact structures can yield test splits that have tests that are strongly represented in the training data. 
2) Shortcut learning: inconsistencies, such as in SMILES canonicalization, can allow for shortcutting, which causes high fit for the model without working on the spectrum-molecule relationship
3) Metrics and implementation divergence: Unchecked use of divergent metrics and implementations and drift from *fair* evaluation standards that MassSpecGym should be enforcing. 
# Data Leakage
MassSpecGym tries to avoid leakage with MCES training / validation splits, rather than exact molecule matching. Because exact exclusion is insufficient and the model can still identify close analogs during the pretraining and falsely appear to generalize better than the model actually can. 

This is important for *de novo* models, such as 
1) spectrum-to-fingerprint encoder
2) fingerprint-to-molecule decoder

The issue is that the model could be learning - memorizing rather, the molecule space and not learning the MS/MS structure elucidation needed.

## Recommendations for training against data leaks
- exclude exact test matches from pretraining data
- exclude close analogs
- report performance stratified by test-set similarity to pretraining molecules
# Synthetic spectra leakage
If a spectral simulator is trained on test molecules, then used to generate synthetic spectra for training another model, the leakage transfers through the simulator.

This is “transitive leakage”:  
test molecule -> simulator -> synthetic spectra -> downstream model

# Formula leakage
Formula prediction is not solved, especially for halogenated molecules or higher mass molecules.

MassSpecGym has:
1. formula-based track: formula is known
2. mass-based track: formula is not known
If a model uses ground-truth formula but reports results on the mass-based track, that leaks information. Random retrieval improves massively if ground-truth formula is used to filter candidates, showing formula information is very powerful.

# Shortcut learning in retrieval
MassSpecGym had candidate artifacts where true molecules and decoys had different SMILES formatting/canonicalization.

A model could learn:  
- which SMILES looks different?  
instead of:  
- which molecule matches this spectrum?

Which produces very inflated retrieval scores.

MassSpecGym v1.5 fixes this by enforcing uniform RDKit canonicalization across query and candidate SMILES.

# PubChem ranking bias
Another shortcut: PubChem candidate order itself can leak useful information.
- A spectrum-blind baseline using PubChem default ranking reached high hit rate, meaning the candidate set has bias independent of spectra.
- This is worse than just a bug. It means the benchmark design itself can let models exploit candidate distributions.
# Implementation bugs
Benchmark reuse can spread hidden bugs. They found a MIST batching/padding mask bug. Padding tokens were not properly excluded in attention, causing inflated/inconsistent behavior in batched inference. Later methods reused MIST checkpoints/components, so one bug propagated into multiple papers.
# Metric divergence
Same predictions can look different if metrics are implemented differently. Important metric choices:
- InChIKey hit rate should use InChIKey-14, not full InChIKey
- Tanimoto should use pinned fingerprint settings
- MCES depends on solver/settings/timeouts
- confidence intervals should be reported
Recommended pinned settings:
- InChIKey-14 for molecular hit rate
- ECFP4 / Morgan radius 2 / 2048-bit fingerprints for Tanimoto
- MCES threshold = 15 and always_stronger_bound = true
- report mean test metrics with confidence intervals

# MassSpecGym v1.5 
Main fixes in the updated version:
- uniform RDKit canonicalization
- safer pretraining sets excluding close test analogs
- data-safe versions of MIST-CF, ICEBERG, and DreaMS
- standardized baselines
- pinned metric implementations
- structured leaderboard submission/model card workflow
