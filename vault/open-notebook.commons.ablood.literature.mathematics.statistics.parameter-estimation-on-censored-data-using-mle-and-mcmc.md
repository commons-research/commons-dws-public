---
id: yps8i7fj5ltbayn6ccyi3js
title: Parameter Estimation On Censored Data Using Mle And Mcmc
desc: ''
updated: 1782801895261
created: 1782801893609
traitIds:
  - open-notebook-commons-ablood-literature
---
# [Parameter Estimation on censored data using MLE and MCMC via Python libraries](https://medium.com/@snp.kriss/parameter-estimation-on-censored-data-using-mle-and-mcmc-via-python-libraries-802fb485113b)
## Terms
- **Censored data:** Data where the exact values are not known, however the upper/lower limits are known.
- **Scale of measurement:** classification describing the information from the observation within the values assigned. 
- **[MLE](https://www.geeksforgeeks.org/machine-learning/probability-density-estimation-maximum-likelihood-estimation/)**: (Maximum Likelihood Estimation): method for determining parameters, such as mean and standard deviation, of a normally distributed random dataset.  
- **[Markov Chain Monte Carlo](https://medium.com/@thekzgroupllc/unlocking-mcmc-markov-chain-monte-carlo-e8c8a9540d57)**: (MCMC) Algorithm that generates a sequence of correlated samples from a target distribution.  
## Censored data
There are three examples of censored data:
1) survival analysis: only possible to do study of medical treatment after all subjects have died to collect relevant data.
2) Calibration interval of instrument: Calibration records allow for assigning a calibration interval to a group of instruments. 
3) Sensor with limited range: Data from sensor only exists within a narrow range that limits the sensor ability.
## Types of censored data
Three types:
- Left-censored: observation is below a certain value, but unknown by how much
- Right-censored: observation is above a certain value, but unknown by how much
- Interval-censored: observation is only known to be between an upper and lower limit.
## Censored data in terms of scale of measurement
In the medical example, the scale of observed quantity values was expressed with the $\gt$ and $\lt$ operators when the exact time of death was not recorded. The temperature (sensor) example is denoted by the same, where the temperature is less than the minimum or greater than the maximum. 
### A toy problem for the application of MLE and MCMC
Imagine problem where acceptable weights must be between 50 and 75kg $50\leq{x}\leq75$ , so censored data would be $x < 50 \;\lor\; x > 75$  . Then a dataset is generated that has a mean of 70 and a standard deviation of 10kg. Then the problem: How to predict the original parameters with the partial data? 

So applying MLE and MCMC to the data can help with the prediction. 