# [Self-supervised learning of molecular representations from millions of tandem mass spectra using DreaMS](https://www.nature.com/articles/s41587-025-02663-3)

## Definitions:
- **DreaMS**: Deep Representations Empowering the Annotation of Mass Spectra (their model)
- **[m/z ratios](https://en.wikipedia.org/wiki/Mass-to-charge_ratio)**: the mass-to-charge ratio of an ion, treated in mass spectrometry as mass divided by charge state. Represented as Da/z.  
- **LC-MS/MS**: Liquid chromatography with tandem mass spectrometry. Used to investigate molecular composition of environmental samples. 
- **Mass-to-Charge ratio**: also called $m/z$, used for molecule identification
- **de-novo**: Newly generated (made from scratch)
- **[unsupervised deep learning](https://en.wikipedia.org/wiki/Unsupervised_learning):** Framework learns patterns exclusively from unlabeled data.
- **[self supervised deep learning](https://en.wikipedia.org/wiki/Self-supervised_learning):** the model uses the data itself to generate supervision, instead of labels provided externally. 
- **[cosine similarity](https://www.ibm.com/think/topics/cosine-similarity)**: Similarity metric to determine how similar two data points are based on *direction* (of the data points as vectors) rather than size. Scores are between -1 and 1. For spectra this is narrowed to 0 and 1.
- **[BERT](https://arxiv.org/abs/1810.04805)**: A language representation (Bidirectional Encoder Representations from Transformers). Used for pre-train deep bidirectional representations based on unlabeled text. 
- **[Transformer](https://en.wikipedia.org/wiki/Transformer_(deep_learning))**: Neural network architecture that processes a set of token representations using self-attention. So tokenization happens before the transformer is applied.  
- **[Feed forward network](https://en.wikipedia.org/wiki/Feedforward_neural_network)**: neural network where information only goes in one direction, i.e input to output.
## Main
Three categories of interpreting mass spectra:
1) **spectral similarity**: aims to define similarity measures for the underlying structures. Dependent on on the richness of the annotated spectral libraries.
2) **forward annotation**: Simulates CID fragmentation of molecules, such as from a neural network.
3) **inverse annotation**: Direct annotation of the spectra with molecular structures, to make an approximate molecular *fingerprint*, molecular formula, chemical properties, or *de novo* molecular structures
## Results
They *mined* the MassIVE GNPS repo for the dataset. Naming the data GeMS. For mining they have 5 main steps:
1) Collect LC-MS/MS experiment
2) Extract experiments' ~700 million MS/MS spectra
3) Use a pipeline of algorithms to filter spectra into three subsets, each subset is consecutively larger but lower in quality:
	1) GeMS-A: highest quality
	2) GeMS-B
	3) GeMS-C
	- **Quality**: such as instrument *m/z* accuracy estimates, high-intensity signals within each spectrum
4) Redundancy addressed using locality-sensitive hashing (LSH), which approximates cosine similarity
5) Store GeMS spectra in their HDF5 format for deep learning
### Self-supervised pre-training on MS/MS spectra
They used self supervised learning on their highest quality data, GeMS-A10, using *BERT*-style spec to spec masked modeling.

Each spectrum is a 2D set of tokens that match pairs of peak *m/z* and intensity values. 30% of the *m/z* ratios are masked from each set, and then train the model to reconstruct each masked peak. 

There is an additional token used: *precursor* token, contains a precursor ion *m/z* ratio with precursor artificial intensity values. 

Their DreaMS neural network is based on a 7 layer *transformer encoder*. and uses Fourier features on the processing intensities in a *feed forward* neural network to then become the input to the transformer. 

## Discussion
DreaMS is used for interpreting tandem mass spectra, using self-supervised learning based on GeMS data (unannotated). **DreaMS Atlas** is their molecular network based on DreaMS annotations of 201 million mass pec from GeMS. 

Scaling the self-supervised learning to larger datasets could see more improvements and they suggest two directions for metabolomic research:
1) Using the transformer model for mass spec interpretation tasks
2) DreaMS Atlas allows for interpreting mass spectra 
---
### DreaMS neural network architecture
Architecture is composed of 3 main modules. 
1) **PEAKENCODER** encoding mass spectrum into high-dimensional representations
2) **SPECTRUMENCODER**: Process encoded peaks with transformer encoder blocks
3) **PEAKDECODER**: Adjusts final transformer according to the task specified objective
#### PeakEncoder
Mass spectrum is represented as a matrix: $\bf{S}\in\mathbb{R}^{2,n+1}$ . Each column of the matrix corrosponds to spectral peaks as *m/z* and intensity: $[m_j,i_j]$. Also have the precursor *m/z* with artificial intensity of 1.1. 

Each _m/z_ value is encoded using Fourier features (sine and cosine frequencies) to capture both integer and decimal mass differences. Fourier features and raw peak values are processed through shallow _feed forward neural networks_ and concatenated into a 1024-dimensional peak representation.
#### SpectrumEncoder
Takes encoded peaks and processes them through a 7-layer _transformer encoder_ with 8 attention heads per layer. Learns relationships between peaks through self-attention.

Attention mechanism is modified using pairwise _m/z_ differences (including neutral losses), allowing the model to directly learn fragmentation patterns and relationships between spectral peaks.
#### PeakDecoder
Task-specific output layer applied to final transformer representations.

For self-supervised training, used for masked _m/z_ reconstruction and retention order prediction. For downstream tasks, replaced with task-specific heads for spectral similarity, molecular fingerprints, chemical properties and other annotation objectives.

---
#### Fluorine detection
Used spectra from MoNA and NIST and used Murcko histograms to split the training/validation. Compared against SIRIUS  5.6.3. DreaMS reported a value of 0.91 accuracy vs SIRIUS' value of 0.51. 

[MSnLib library](https://massive.ucsd.edu/ProteoSAFe/dataset.jsp?task=676a38e2dd574a15905e807d78cf1e57)
