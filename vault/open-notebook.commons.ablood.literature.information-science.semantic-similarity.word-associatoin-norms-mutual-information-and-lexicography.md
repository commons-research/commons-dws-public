---
id: e2i4lgz5lkwm0vks15dsy2m
title: Word Associatoin Norms Mutual Information And Lexicography
desc: ''
updated: 1787318038876
created: 1787318035913
traitIds:
  - open-notebook-commons-ablood-literature
---
# [Word Association Norms, Mutual Information, and Lexicography](https://aclanthology.org/J90-1003/?utm_source=chatgpt.com)
## 4 AN information Theoretic Measure
**Mutual Information:**
Two points $x$,$y$ have probabilities $P(x)$ and $P(y)$ then their mutual information is $I(x,y)$ and is defined as:
$$I(x,y)\equiv \log_2\frac{P(x,y)}{P(x)P(y)} $$
The joint probability is $P(x,y)$ and then make $I(x,y)>0$ , if there is not strong relationship then $P(x,y)\approx P(x)P(y)$  and therefore $I(x,y) \approx 0$. If the two values are complementary (no relationship at all), then we wind upw ith $I(x,y)<0$ 

They normalize their estimates by the size of the corpus $N$. 

They point out that anything where $f(x,y)\leq 5$ gives unstable (poor) results. Good to know for implementation. 

Joint probabilies should be symmetric, so $P(x,y)=P(y,x)$. and therefore $I(x,y)=I(y,x)$. The association ratio however is not symmetrical. 

**Window Size:** relationships are counted iwthin a window (since its from texts) of window $w$ items. Smaller window worked for fixexd expressions and larger ones were good at broader semantic realtionships. 

A relationship that is $I(x,y)>3$ should be used to indicate an interesting assocation.

They also note that high mutual information does not automatically mean a meaningful semantic relationship. The measure only sees distributional evidence, so preprocessing and domain interpretation are still needed. 