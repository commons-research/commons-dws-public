# [Count your bits: fingerprint benchmarking to assess broad chemical space representation](https://www.biorxiv.org/content/10.1101/2025.06.16.659994v3.full)
## Terms
* **Molecular fingerprint**: A numerical representation of molecular structure, usually encoding structural features as a binary or count vector.
* **Tanimoto coefficient**: The de facto standard similarity metric for molecular fingerprints. similar to the Jaccard index.
* **[Jaccard index](https://en.wikipedia.org/wiki/Jaccard_index)**: Gauges similarity and diversity between sample sets.
* **Dictionary based fingerprints**: Encode molecules following predefined substructures (e.g. Pubchem fingerprints).
* **Binary fingerprint**: Records only whether a structural feature is present or absent.
* **Count fingerprint**: Records how many times each structural feature occurs in a molecule.
* **Folded fingerprint**: Maps fingerprint features into a fixed-size vector. Multiple distinct features can map to the same position, causing **bit collisions**.
* **Unfolded fingerprint**: Retains the original hashed structural features rather than folding them into a fixed-size vector, largely avoiding bit collisions.
* **Frequency-folded fingerprint**: Creates a fixed-size representation by retaining the most frequently occurring features from an unfolded fingerprint rather than using conventional hash-based folding.
* **Bit collision**: When multiple distinct molecular features are mapped to the same position in a folded fingerprint.
* **Bit occupancy**: How frequently a fingerprint position is occupied across a dataset.
* **MCS**: Maximum Common Subgraph - a graph-based method for measuring the largest shared structural component between two molecules.
* **MCES**: Maximum Common Edge Subgraph - a related graph-based similarity measure based on shared graph edges.
* **RascalMCES**: An approximate MCES-based structural similarity method used in this study as a graph-based reference.
* **TF-IDF**: Term Frequency-Inverse Document Frequency - a weighting method borrowed from natural language processing and applied here to fingerprint features based on their frequency within molecules and across the dataset.
* **[chemap](https://github.com/florian-huber/molecular_fingerprint_comparisons)**: The Python library introduced in this paper for computing and benchmarking folded, unfolded, frequency-folded, binary, and count molecular fingerprints.
## Intro
Molecular similarity is used for virtual screening, nearest-neighbor search, chemical space visualization, and increasingly as a training target or evaluation metric for machine-learning models predicting molecular structures from MS or NMR data. There is no universal definition of molecular similarity: two molecules may be similar according to structure, biological activity, physicochemical properties, biosynthetic origin, or some other task-specific criterion. The fingerprint and similarity metric therefore determine what kind of molecular similarity is actually being measured.
Common similarity metrics include:
1. Tanimoto coefficient: de facto standard
2. Dice
3. Cosine similarity
   The common workflow is:
   $$\text{Molecule} \rightarrow \text{Fingerprint} \rightarrow \text{Similarity metric} \rightarrow \text{Similarity score}$$

**They evaluates fingerprints using multiple criteria**:
1. Fingerprint specificity and collisions
2. Similarity score behavior and dependence on molecular size
3. Agreement between nearest-neighbor rankings
4. Agreement with graph-based structural similarity
5. Bioactivity and chemical subclass prediction
6. Neighborhood structure and chemical space visualization
## Different Molecular Fingerprint Classes
They focus on **2D molecular fingerprints**, where structural features are encoded as high-dimensional binary or count vectors:
- **Dictionary-based fingerprints** use a predefined vocabulary of molecular substructures. Examples include MACCS, PubChem, Klekota-Roth, and Biosynfoni. Their vector size is naturally fixed and individual dimensions are generally more interpretable.
- **Circular fingerprints** encode local neighborhoods around atoms up to a specified radius. They evaluates Morgan and FCFP fingerprints. Increasing the radius allows the fingerprint to encode increasingly larger local environments.
- **Path-based fingerprints** encode fragments defined by paths through the molecular graph. The main example is the RDKit fingerprint.
- **Topological torsion fingerprints** encode fixed-length sequences of atoms, typically four atoms, based on their atom-type patterns.
- **LINGO fingerprints** represent molecules using overlapping substrings extracted from their SMILES representations.
- **Atom Pair fingerprints** encode pairs of atoms together with the topological distance between them.
- **MAP4** combines local molecular substructures with topological distance information, effectively creating a hybrid between local-substructure and distance-based fingerprints.
- **Avalon fingerprints** combine multiple substructure and path-like features into a fixed-length hashed vector.

## Methods
The study:
1. Constructs several datasets representing different chemical contexts and evaluation tasks.
2. Computes a wide range of fingerprint types and variants.
3. Develops **[chemap](https://github.com/florian-huber/molecular_fingerprint_comparisons)** to standardize fingerprint generation and similarity calculations.
4. Evaluates binary, count, folded, unfolded, frequency-folded, log-count, and TF-IDF-weighted representations.
5. Tests the representations using similarity distributions, duplicates, ranking agreement, graph-based similarity, prediction tasks, nearest-neighbor structure, and chemical space visualization.
## Datasets
- The **ms2structures dataset** contains 37,811 unique compounds assembled from MS2DeepScore and MassSpecGym datasets. It is used extensively for molecular similarity comparisons.
- The **biostructures dataset** contains 718,067 compounds and represents a large, biologically relevant and chemically heterogeneous chemical space. It is deliberately used as a stress test rather than focusing only on conventional drug-like chemical space.
- The **25-subclasses dataset** contains 75,000 compounds balanced across 25 chemical subclasses, with 3,000 compounds per subclass. It is used to evaluate neighborhood consistency.
- The **120-subclasses dataset** contains 120,000 compounds balanced across 120 chemical subclasses, with 1,000 compounds per subclass. It is used for chemical subclass prediction.
- The **RascalMCES dataset** contains 5,413,677 molecular pairs from the ms2structures dataset. Pairs were restricted to precursor mass differences of at most 100 Da and compared using the graph-based RascalMCES method.
- The **bioactivity dataset** contains 2,680 compounds, half of which have one or more of 12 possible bioactivity labels. The task is multilabel and highly class-imbalanced.
## Molecular Fingerprints
Most fingerprints are computed using the **chemap** library. The study evaluates fingerprints including:
* MACCS
* PubChem
* Klekota-Roth
* Biosynfoni
* Morgan
* FCFP
* RDKit
* Topological torsion
* LINGO
* Atom Pair
* MAP4
* Avalon
## Folded, Unfolded, Frequency-Folded, and Sparse Fingerprints
Most non-dictionary fingerprints are conventionally folded into fixed-size vectors. The study generally uses 4096 dimensions, which is already larger than the commonly used 1024- or 2048-bit fingerprints.
Folding maps potentially very large numbers of structural features into a smaller fixed vector:
$$h(\text{feature}) \rightarrow i,\qquad i \in {0,\ldots,d-1}$$
Different features can map to the same index:
$$h(f_1)=h(f_2),\qquad f_1 \neq f_2$$
This is a **bit collision** and causes information loss.

Unfolded fingerprints instead represent detected substructures using 32-bit hashes. Binary unfolded fingerprints store the hashes of present features, while count variants store pairs of feature hashes and their corresponding counts. This almost entirely avoids collisions.

**Sparse** and **unfolded** are not the same thing. An unfolded fingerprint describes how features are represented, while a sparse data structure is simply an efficient way of storing vectors without explicitly storing zero values.
## Scaling and Bit Weighting
To calculate IDF (inverse document frequency), used for calculating overall relevance of fingerprint bits in the fingerprint:
$$IDF_i=\log_{10}(\frac{N}{n_i})/\log_{10}(\frac{N}{1})$$

This reduces the influence of very large feature counts. The difference between one and two occurrences may be more meaningful than the difference between twenty and twenty-one occurrences.
## Fingerprint Similarity Metrics
For binary fingerprints $X$ and $Y$, Tanimoto similarity is:
$$S_T(X,Y)=\frac{|X\cap Y|}{|X\cup Y|}$$
For non-negative count or scaled vectors, the generalized Tanimoto/Ruzicka similarity is:
$$S_{gT}(X,Y)=\frac{\sum_i \min(x_i,y_i)}{\sum_i \max(x_i,y_i)}$$
For binary vectors, the generalized form produces the same result as the ordinary binary Tanimoto coefficient.
An important point throughout is:
$$\text{Similarity} \neq \text{Tanimoto alone}$$
Rather:
$$\text{Similarity behavior}=f(\text{fingerprint},\text{representation},\text{parameters},\text{metric})$$

## Comparison to Graph-Based Similarity
RascalMCES is used as a graph-based structural reference and measure agreement using Spearman correlation:
$$\rho=\operatorname{corr}\left(\operatorname{rank}(S_{\text{fingerprint}}),\operatorname{rank}(S_{\text{MCES}})\right)$$
Unfolded fingerprints consistently correlate better with RascalMCES than their folded equivalents. The improvement is particularly large for Atom Pair, RDKit, and MAP4.
Folded MAP4 shows almost no overall correlation with RascalMCES, while unfolded MAP4 reaches approximately:
$$\rho\approx0.59$$
The highest correlations reach approximately:
$$\rho\approx0.69$$
for unfolded log-count FCFP9.

Count variants generally correlate better with RascalMCES than binary variants. Even a simple element-count baseline reaches approximately $\rho=0.23$, outperforming or competing with several conventional fingerprint variants.
## Main Findings
There isn't one best fingerpint. Instead fingerprint choice, representation, and parameter settings can fundamentally alter the resulting concept of molecular similarity.
Findings include:
* **Count fingerprints generally outperform binary fingerprints.** 
* **Bit collisions can be a serious practical problem rather than a minor theoretical concern.** 
* **Unfolded fingerprints often outperform folded fingerprints**
* **Different fingerprints produce substantially different nearest-neighbor rankings**
* **The best representation depends on the task.** 
* **Log-count fingerprints appear particularly useful for neighborhood-based tasks**
* **TF-IDF weighting generally did not improve results**
