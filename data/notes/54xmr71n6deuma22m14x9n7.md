# [MADGEN - MASS-SPEC ATTENDS TO DE NOVOMOLECULAR GENERATION](https://arxiv.org/pdf/2501.01950)
## 1 Introduction
Their contributions:
- two stage framework. Generates target molecule structure. 
- Utilizes fragmentation patterns in the MS/MS spectra to help with prediction. 
- The scaffold based approach improves interpretability, which allows better analysis of biological functions and chem properties. 
- Broadly applies in metabolomics, drug discovery, and environmental analysis. 
## 2 Related Work
## 3 Methods
### 3.1 Scaffold Retrieval
Similarity score: 
$$h(z^n_{spec},z^m_{mol})$$
$$h(z^n_{spec}, z^m_{mol}) = exp\pmatrix{\frac{z^n_{spec}\cdot z^m_{mol}}{\vert{\vert{z^n_{spec}}}\vert\vert \vert\vert{z^m_{mol}}\vert\vert τ}}$$
Where $z^n_{spec}$ and $z^m_{mol}$ are the embeddings of the spectrum scaffold. 
**SPA**: Scaffold prediction accuracy
**Oracle Retrieval**: uses a lookup table that gets the correct scaffold based on the MS/MS spectrum and chemical formula. 
### 3.2 Scaffold-Conditioned De Novo Molecule Generation with Spectra Guidance
#### 3.2.1 Notations and Problems Formulation
A molecule is represented as $G$ a graph where $G = (V, E)$ . The scaffold is then $S = (V^S, E^S)$ which is a subgraph of $G$. 
#### 3.2.2 Scaffold-Conditioned Generation via Markov Bridge
$$p(E\vert E^S, V^G) = \sum_{E_0:E_{T-1}} \prod_{t-0}^{T-1} p(E_{t+1} \vert E_t, E^S, V^G)$$
where $E_0 = ∅$ is the case where no bonds are formed from isolated atoms to others, and $E_T = E$ is the sequence of random variables $E_{0:T}$ is the progressively connecting atoms to form the final molecules. 
#### 3.2.3 Classifier-Free Guidance From Mass Spectrum
**CFG**: Classifier Free Guidance
## 4 Experiments
### 4.1 Datasets
**MCES**: Maximum Common Edge Substructure
### 4.2 Experimental Setup and Evaluation Metrics
### 4.3 Results
