---
id: hq0kj62hxelqnfkpuwgt7rl
title: Lindleys Paradox
desc: ''
updated: 1781596575652
created: 1781596574805
traitIds:
  - open-notebook-commons-ablood-literature
---
# [Lindley's paradox](https://en.wikipedia.org/wiki/Lindley%27s_paradox)
- **Lindley's paradox**: Situation where *bayesian* and *frequentists* to testing a hypothesis give different results for specific *prior distribution*s.
- **[Bayesian inference](https://en.wikipedia.org/wiki/Bayesian_inference)**: Statistical inference method that uses *Baye's theorem* to find a probability for the hypothesis, based on prior observations/evidence. Thus using *prior distribution* to estimate *posterior probabilities*. 
- **[Bayes' Theorem](https://en.wikipedia.org/wiki/Bayes%27_theorem)**: Mathematical rule that inverts *conditional probabilities*, that allows finding a cause from the effect, or more updates the probability of a hypothesis after observing the evidence found. $P(A|B) = \frac{P(B|A)P(A)}{P(B)}$
- **[Conditional Probability](https://en.wikipedia.org/wiki/Conditional_probability)**: The probability that an event will occur, based on another event (correlation) having already occurred. $P(A|B)=\frac{P(A\cap B))}{P(B)}$ , or the probability of A given B. 
- **[Prior Probability](https://en.wikipedia.org/wiki/Prior_probability)**: or prior probability distribution, is the assumed probability distribution before evidence is considered. 
- **[Posterior Probabilities](https://en.wikipedia.org/wiki/Bayesian_inference)**: A conditional probability that arises from updating the *prior probability*. 
- [Frequentist Inference](https://en.wikipedia.org/wiki/Frequentist_inference): A type of statistical inference that is based on *frequentist probability* and treats probability as frequency to draw conclusions form sample-data.
- **[Frequentist Probability](https://en.wikipedia.org/wiki/Frequentist_inference)**: or frequentism, represents an interpretation of probability that defines an event's probability as the limit of the event's *relative frequency* in an infinite number of trials.
- **[relative frequency](https://en.wikipedia.org/wiki/Empirical_probability)** or empirical probability, is the estimate of probability that an event will occur.
- **[binomial distribution](https://en.wikipedia.org/wiki/Binomial_distribution)**: A series of $n$ experiments all asking boolean outcomes (yes/no) with a  probability $p$. 
- **[p-value](https://en.wikipedia.org/wiki/P-value)**: the probability based on the assumption the null hypothesis is correct, of getting results at least as extreme as the observed result. 
## Description of the paradox
The results of an experiment, $x$, has two possible explanations, and it is uncertain which hypothesis is more accurate given the prior distribution. 
## Numerical example
Given an example of boys vs girls born over a period of time in a city, the frequentist and the bayesian approaches deliver different predictions for $x$ the observed births that are boys, with a null hypothesis of $H_0:\theta = 0.5$ and a hypothesis that $H_1:\theta \ne 0.5$. With a very large sample, even a tiny difference from `0.5` can produce a statistically significant p-value. The frequentist test may reject `H₀`; while the bayesian test still favors $H_0$. So paradoxically a null hypothesis is rejected by one test and accepted by another. 