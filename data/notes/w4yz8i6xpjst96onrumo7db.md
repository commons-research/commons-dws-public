# [A generalization of t-SNE and UMAP to single-cell multimodal omics](https://link.springer.com/article/10.1186/s13059-021-02356-5)
## Terms
- **[Single-cell sequencing](https://en.wikipedia.org/wiki/Single-cell_sequencing)**: Sequencing technologies that measure genomic or molecular information from individual cells.
- **[Dimensionality reduction](https://en.wikipedia.org/wiki/Dimensionality_reduction)**: The process of representing high-dimensional data in fewer dimensions while preserving important structure.
- **[t-SNE](https://en.wikipedia.org/wiki/T-distributed_stochastic_neighbor_embedding)**: A nonlinear dimensionality reduction algorithm commonly used to visualize high-dimensional datasets.
- **[UMAP](https://en.wikipedia.org/wiki/UMAP)**: A dimensionality reduction algorithm that preserves both local and global structure in data.
- **[Multimodal omics](https://en.wikipedia.org/wiki/Multiomics)**: The simultaneous measurement and analysis of multiple molecular data types from the same biological sample.
- **Modality**: A distinct type of biological measurement from a sample.
- **[KL divergence](https://en.wikipedia.org/wiki/Kullback%E2%80%93Leibler_divergence)**: (Kullback–Leibler) A measure of how one probability distribution differs from another.
- **[Splatter](https://github.com/Oshlack/splatter)**: An R package for simulating realistic single-cell RNA sequencing datasets for benchmarking and evaluating analysis methods.
## Background
Better techniques are leading to better resolutions for cells and RNA dynamics. But this results in higher dimensionality and then this data needs to be translated to 2-d for visualization. This is usually done with *t-SNE* representations. *UMAP* is also commonly used for this. the paper presents *j-SNE* and *j-UMAP* which preserves similarity across modalities. 
## Results and Discussion
$\mathcal{E}$ - embedding of cells with multiple measured modalities. 
$$
C(\mathcal E) = \sum\limits_{k} \alpha_{k} KL\left(P^{(k)}||Q\right) + \lambda \sum\limits_{k} \alpha_{k} \log \alpha_{k}
$$
- $\alpha$ coefficient of the convex combination
- $\lambda$ regularization pattern
## Conclusion
Higher levels of noise can be counteracted with regularization coefficients $\lambda$. Their j-SNE and j-UMAP can create an embedding that shows relationships overlooked by the t-SNE and UMAP alone. 