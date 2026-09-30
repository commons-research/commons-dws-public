# [Pointwise Mutual Information (Wikipedia)](https://en.wikipedia.org/wiki/Pointwise_mutual_information)
Pointwise Mutual Information (PMI), also called point mutual information, measures assocation (relationships). Used to compare probability of two events occurring together vs probability of happening indepedently. Useful in NLP. 
## Definition
given a pair of outcomes, $x,y$ , then pmi is: $$pmi(x;y)\equiv \log_2\frac{p(x,y)}{p(x)p(y)}=\log_2\frac{p(x|y)}{p(x)}=\log_2\frac{p(y|X)}{p(y)}$$
The measure is symmetric: $pmi(x;y) = pmi(y;x)$ If X and Y are independent then the value is 0. Higher value is higher assocation. Highest (perfect) assocation is 1. so bounds are: $$-\infty\leq pmi(x;y)\leq min[-\log p(x), -\log p(y)]$$
## Variants
**Positive PMI:** sets all negative values to 0, so $$ppmi(x;y)\equiv max \left(\log_2\frac{p(x,y)}{p(x),p(y)},0 \right)$$
Useful as negative assocation is not reliable. and avoids $-\infty$ 

**Normalized pointwise mutaul information (npmi)**: normalized to $[-1,+1]$. so $-1$ never occurs and $+1$ is occurs together completely: $$npmi(x;y) = \frac{pmi(x;y)}{h(x,y)}$$
where $h(x,y)$ is the self-information for both as $-\log_2 p(x,y)$. 

**$PMI^k$ family**: measure for k=2,3, etc. defined as: $$pmi^k(x;y) \equiv \log_2\frac{p(x,y)^k}{p(x)p(y)}= pmi(x;y)-(-(k-1)\log_2p(x,y))$$
This is designed to boost frequent pair values and reduce bias towards low frequency cooccurrence events. 

**Specific correlation**: part of [total correlation](https://en.wikipedia.org/wiki/Total_correlation) as an extension of mutual information that applies to multi-variable occurrences. This is called Specific Correlation. SI for results of random variables $\mathcal{x}=(x_1,x_2,\ldots,x_n)$ is:
$$SI(x_1,x_2,...,x_n)\equiv \log \frac{p(x_1,x_2,\ldots,x_n)}{\prod_{i=1}^n p(x_1)} = \log p(\boldsymbol{x}) - \log \prod_{i=1}^n p(x_i)$$ 
Where $\prod$ multiplies all $p(x)$ in $x_n$ together. 