# [An Information-Theoretic Definition of Similarity]((https://www.cs.swarthmore.edu/~richardw/classes/cs65/f08/litreview/phyo.pdf))
### Definitions
- **Universality**: Algorithm applies as long as a probabilistic model exists. 
- **Theoretical Justification**: Measure is derived from a set of assumptions about similarity. 
### Definition of Similarity:
#### Based on "intuitions":
1) Similarity between 2 terms is based on commonality. More commonality more similarity
2) Inversely, the more different they are the less similar they are
3) Max similarity is reached when both values are identical, regardless of commonality
#### Assumptions
1) Commonality is measured by: $I(common(A,B))$
	1) In information theory, information contained in a statement is measured by the negative logarithm of the probability statement:
		- $I(common(A,B)) = -\log P(fruit(A) and fruit(B)$
			- (Example based on fruits)
2) Difference is measured by:
	- $I(description(A,B)) - I(common(A,B))$ 
		- Where description() is a proposition that describes a and b.
3) similarity and differences between a and b, $sim(A,B)$ is the function of commonalities and differences:
	- $sim(A,B)=f(I(common(A,B)),I(description(A,B)))$
		- domain of $f$ is ${(x,y)|x\geq 0, y \gt 0, y \geq x}$
4) Similarity between identical objects is $1$ 
	- When no commonality the assumed score is 0. 
5) $\forall y \gt 0, f(0,y) = 0$ 
	- Each perspective that A and B can be compared is computed separately. 
6) $\forall x_1 \leq y_1, x_2 \leq y_2 : f(x_1 + x_2, y_1+y_2) = \frac{y_1}{y_1+y_2} f(x_1,y_1) + \frac{y_2}{y_1+y_2}f(x_2,y_2)$
	- **Similarity Theorem**: similarity is the ratio between a and b's amount of information:
		- $sim(A,B) = \frac{\log P(common(A,B))}{\log P(description(A,B))}$
#### Similarity between Ordinal Values
Commonality between ordinal values is the average. E.g. Good+Average would put the commonality between good and average.
$$
sim(excellent,good) = \frac{2*\log P(excellent \lor good)}{\log P(excellent+\log P(good))}
=
\frac{2*\log(0.05+0.10)}{\log 0.05 + \log 0.10} = 0.72
$$
#### String Similarity 
Three similarity measures were tried:
1) $sim_{edit}(x,y) = \frac {1}{1+editDist(x,y)}$
	1) where editdist is the min num of character insertions/deletions (replacements?) needed to transform one string to another
2) $sim{tri}(x,y)  = \frac {1}{1+|tri(x)|+|tri(y)-2*|tri(x) \cap tri(y)|}$
	1) tri(x) is the set of trigrams in x
	2) tri(elequent) = {elo, log, oque, que, ent}
3) $sim(x,y) = \frac {2 * \sum_{t \in tri(x) \cap tri(y)}\log P(t)} {\sum_{t \in tri(x)} \log P(t) + \sum_{t \subset tri(y)} \log P(t)}$
	1) trigrams assumed to be independent of other trigrams in the word
#### Similarity between words
$$
sim(w_1,w_2)  = \frac {2 * I(F(w_1))\cap F(w2))}{I(F(w_1))+I(F(w_2)))}
$$
$I(S)$ is the amount of information contained in a set of features S.
#### Semantic Similarity in a Taxonomy
Information Content of two concepts in a taxonomy:
$$-\log P(C) - \log P(C^I)$$
- Where $P(C)$ and $P(C^I)$ are probabilities that a randomly selected object belongs to C and $C^I$. 
- Assume it is a tree: 
$$
sim(x_1,x_2) = \frac {2 * \log P(C_0)} {\log P(C_1)+ \log P(C_2)}
$$
This will give the commonality (similarity) between two terms as value between 0 and 1.
**Wu Palmer's Algorithm**:
$$
sim_{Wu\&Palmer}(A,B) = \frac {2*N_3}{N_1+N_2+2*N_3}
$$

# Side Notes
- the symbol: $\forall$ is the universal quantifier, meaning "for all".
- **Ordinal Values**: values that are given in order, e.g.: quality: Excellent, Good, Average, Bad, Awful 
- **trigrams (AKA Trigraph)**: three letters united that make a single sound. 
- **Corpus**: a collection of written texts
- **$\cap$**: The overlap between two sets
- **Semantic Similarity**: similarity between two concepts in a taxonomy. (this is resnik)
#math_notation
