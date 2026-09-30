# [t-Distributed Stochastic Neighbor Embedding (wikipedia)](https://en.wikipedia.org/wiki/T-distributed_stochastic_neighbor_embedding)
## Terms
- **TSNE:** (t-distributed stochastic neighbor embedding) a statistical method for visualizing high-dimensional data, where each datapoint has a location in a 2d or 3d map. 
- **[Nonlinear dimensionality reduction](https://en.wikipedia.org/wiki/Nonlinear_dimensionality_reduction)**: (NLDR) technique that projects higher dimensional data into lower dimensional space. 
- **[KL Divergence](https://en.wikipedia.org/wiki/Kullback%E2%80%93Leibler_divergence)**: (Kullback-Leibler Divergence), also called the relative entropy, is denoted by $D_{KL}(P\vert{\vert}Q)$, represents a measure of Q's, an approximation of probability distribution - P,  differs from P. Full definition: $$D_{KL}(P\vert{\vert}Q)=\sum_{x\in{X}}P(x)\log\frac{P(x)}{Q(x)}$$
## TSNE
A *non-linear dimensionality* reduction technique. Similar objects in the dataset are grouped together for the visualization. There are two main stages:
1) construct a probability distribution of pairs of the high dimensional objects, where similar objects have a higher probability and the opposite for dissimilar objects
2) Define the probability distribution over the points in the lower dimensional map, to minimize *KL divergence*. 
t-SNE has $O(n^2)$ time complexity and $O(n^2)$ space complexity. 
### Details
With set $N$, of high-d objects ($x_1,...,x_N$), t-SNE computes the probability, $p_{ij}$ that are proportional to the similarity of objects $x_i$ and $x_j$:
for $i\ne{j}$ :
$$P_{j\vert{i}}= \frac{exp(-\vert{\vert{x_i-x_j\vert{\vert}}}^2/2\sigma_i^2)}{\sum_{k\ne{i}}exp(-\vert{\vert{x_i-x_k\vert{\vert}}}^2/2\sigma_i^2)}$$
