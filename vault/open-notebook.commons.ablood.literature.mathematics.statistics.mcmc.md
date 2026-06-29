---
id: yx5su492lu17phhj7rwtm21
title: Mcmc
desc: ''
updated: 1782737802201
created: 1782737800938
traitIds:
  - open-notebook-commons-ablood-literature
---
# Terms
-**MCMC:** class of algorithms that draw samples form a probability distribution. 
- **[Markov Chain](https://en.wikipedia.org/wiki/Markov_chain)**: stochastic process that describes a series of events where each event is dependent entirely on the event preceding it. 
- **[Moment](https://en.wikipedia.org/wiki/Moment_(mathematics))**: (of a function) quantitative measures related to a function's graph (like x,y graph). So in probability it could have the first moment as the expected value, then the second  moment as the variance, and the third moment as the *skewness*. 
- **[Credible interval](https://en.wikipedia.org/wiki/Credible_interval)**: Interval that characterizes probability distribution. Example: $\gamma = 0.95$ where $\gamma$ is the probability that a value falls within a range. So if $\mu$ is a value with $\gamma = 0.95$ probability to be between (35,45): the credible interval would be $35\leq \mu \leq 45$ .
- **[Posterior probability](https://en.wikipedia.org/wiki/Posterior_probability)**: By applying *Baye's rule* to update the prior probability. So the posterior probability would everything that can be known about an uncertain proposition (like a scientific hypothesis). 
# [Markov Chain Monte Carlo (wikipedia)](https://en.wikipedia.org/wiki/Markov_chain_Monte_Carlo)
MCMC create samples from a random variable, that have a probability density proportional to the known function. 
## Mathematical setting
$$
S_n(h) = \frac{1}{n}\sum_{i=1}^n h(X_i)
$$
## Applications
#### Bayesian statistics
MCMC is used in bayesian stats to calculate *moments* and *credible intervals* of *posterior probability* distributions. 