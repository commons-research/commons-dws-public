---
id: mnn8ngq9z0lpvsp9x2l9e4n
title: Probability Density Estimation And Maximum Likelihood Estimation
desc: ''
updated: 1783948255798
created: 1783948252550
traitIds:
  - open-notebook-commons-ablood-literature
---
# [Probability Density Estimation & Maximum Likelihood Estimation (geeksforgeeks)](https://www.geeksforgeeks.org/machine-learning/probability-density-estimation-maximum-likelihood-estimation/)
## Terms
- **Probability Density Function**: (PDF) how likely different outcomes are for a continuous variable
- **Maximum Likelihood Estimation**: Finds the best-fit model for the data observed
- **Probability Density**: describes the likelihood of a continuous random variable
- **Density Estimation**: Estimate of the whole population density, estimated from random sample of data from pop. 
- **Parametric Density Estimation**: Technique to estimate probability distribution of dataset by assuming data follows a specified distribution. 
- **Non-parametric Density Estimation**: Estimates probability distribution without assuming data follows a specified parametric distribution.
- **Kernel Density Estimation**: Used to calculate the known density $f_h(x)$. 
## What is probability density
Probability density is represented by the *PDF*. 
## Probability Density Function (PDF)
probability of a continuous random variable from a sub-sample space falling within a specified range of values. So if $X$ is a continuous random variable the function $f(x)$ is a PDF if:
$P(a\leq{X}\leq{b}) =\int_a^b f(x)dx$ 
where:
- $a$ is the lower limit
- $b$ is the upper limit
- $X$ continuous random variable
- $f(x)$ the PDF
### Steps involved
- Create histogram for random set of observations, to find density of random sample
- Create probability density and fit to random sample and compare to histogram plot fit
- Iterate steps 1 and 2 as:
	- Calculate distribution parameters
	- Calculate PDF against data
	- Transform data until it fits distribution (best)
## Parametric Density Estimation
Normal distribution has two parameters:
1) mean
2) standard deviation
Calculating the sample mean and standard deviation of the random sample to estimate density. *parametric* because relation between observations and probability can be different based on the parameters. 
## Non-parametric Density Estimation
Useful if the data sample doesn't follow a normal distribution. *Kernel Density Estimation* is one such type of non-parametric estimate. Calculates the density of $f_h(x)$ using the equation:
$$\hat{f}_h(x)=\frac{1}{nh}\sum_{i=1}^nK(\frac{x-x_i}{h})$$
where:
- $K$ kernel (non negative function)
- $h$ is bandwidth (smoothing parameter, h > 0)
- $K_h$ scaled kernel
- $f_h(x)$ density
- $n$ number of samples in the random sample
