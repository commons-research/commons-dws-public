# Terms
- **[Vector](https://en.wikipedia.org/wiki/Vector_(mathematics_and_physics))**: A quantity with both magnitude and direction. ${\vec{A} = x\hat{i} + y\hat{j} + z\hat{k}}$  could be a Vector $\vec{A}$ with magnitudes for the $x$, $y$, and $z$ values. But a vector can have $n$ dimensions. 
- **[Feature Vector](https://en.wikipedia.org/wiki/Feature_(machine_learning)#Feature_vectors)**: An n-dimensional vector of numerical features to represent an object. ML requires using numeric representations of the object.
# [What is Cosine Similarity? (IBM)](https://www.ibm.com/think/topics/cosine-similarity)
Metric for comparing similarity between two data points based on direction (as vectors) rather than the lenght or size. Values range between -1 and 1, corresponding to:
- **-1**: Vectors are pointing in exactly the opposite directions
- **0**: Vectors are orthogonal and have no similarity
- **1**: Pointing int he same direction (most similar)
So closer to 1 means they are more similar as they are pointing in the same direction. 

Cosine similarity is useful for areas like machine learning and natural language processing, as they rely on vector based representations, where data is converted into numerical form to summarize meaning an then similarity to other data. 

## Why is cosine similarity important? 
Analyzing the relationships between data points. Cosine similarity plays a central role in:
- **Relevance Ranking**: how search engines rank matches to user queries
- **semantic comparison**: Neural Networks compare vector embeddings to evaluate semantic closeness
- **Personalized recommendations**: Recommendation systems apply cosine similarity to suggest similar items, such as products
- **Topic Modeling**: Can group documents with similar topics/themes. 
## How does cosine similarity work? 
It works by calculating the cosine angle between the two vectors. In application this could be multi-dimensional spaces, where each dimension represents a specific object, such as a word, and the value for that dimension represents how important that item is in that dimension. 

Cosine similarity is: $cos(\theta) = \frac{A \cdot B}{\lVert A \rVert \times \lVert B \rVert}$ 

The steps are as:
1) Find the dot product (multiply corresponding values in each vector, then add the results together)
2) Determine magnitude - square root of the sum of squared components
3) calculate cosine similarity: divide step 1 by step 2
## Benefits of cosine similarity
- robust in high-dimensional space: reliable in high d spaces like those in neural networks
- insensitive to magnitude: so its useful where data points vary in their magnitude (scale or length)
- efficient implementation: easy to compute
- applicable across domains: works in quite a few fields
## Challenges with using cosine similarity
- zero vectors: doesn't work if either vector has 0 magnitude
- false similarity: semantically unrelated values could throw high similarity, even when that is false. 
- Depends on normalization: inputs gotta be normalized or it will skew results
- ambiguity in orthogonality: 0 score doesn't necessarily mean total dissimilarity

---
# [Cosine Similarity (wikipedia)](https://en.wikipedia.org/wiki/Cosine_similarity)
Clearer cosine similarity representation:
$$
S_c(A,B) := cos(\theta) = \frac{A \cdot{B}}{\lVert{A}\rVert\lVert{B}\rVert}=\frac{\sum_{i=1}^n A_iB_i}{\sqrt{\sum_{i=1}^n A_i^2}\cdot\sqrt{\sum_{i=1}^n B_i^2}}
$$
### Cosine distance
The distance between unit-length vectors: $dist(A,B) = \sqrt{2(1-S_C(A,B))}$ 
### Angular distance and similarity
The normalized angle is called the angular distance (between two vectors). It is a formal distance metric and is derivable from the cosine similarity. It is bounded between 0 and 1. 
## Properties
Cosine similarity presents a relative value, not an *absolute* one. So it works better when data does not require absolute values. 