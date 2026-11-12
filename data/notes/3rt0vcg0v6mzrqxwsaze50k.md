# [Accounting for Variance in Machine Learning Benchmarks](https://arxiv.org/abs/2103.03098)
## Intro
ML requires empiricism as you need to compare results with prior work. Hyper parameters need to be carefully chosen. Brute forcing these problems with more layers and hyper layers is prohibitive. In deep learning costs are even higher and test/validation/train splits are necessary. 
## 2 variance in ml benches
Evaluations of an ML pipeline should account for distributions. 
### 2.1 benchmarking with hyperparameter tuning
$$
\operatorname{Opt}(S_t,\lambda)\approx
\underset{h\in\mathcal{H}}{\arg\min}
\left[
\widehat{R}_{e'}(h,S_t)+\Omega(h,\lambda)
\right]
$$
Where: 
* **$\operatorname{Opt}(S_t,\lambda)$**: The model or hypothesis selected by the optimization procedure using training set $S_t$ and hyperparameters $\lambda$.
* **$S_t$**: Training dataset.
* **$\lambda$**: Hyperparameters controlling the model or regularization.
* **$\arg\min$**: Returns the value of $h$ that minimizes the expression.
* **$h$**: A candidate model or hypothesis.
* **$\mathcal{H}$**: Hypothesis space containing all candidate models considered.
* **$h\in\mathcal{H}$**: The selected model must belong to the hypothesis space.
* **$\widehat{R}_{e'}(h,S_t)$**: Estimated empirical risk or prediction error of model $h$ on training set $S_t$, measured using evaluation criterion $e'$.
* **$\widehat{\phantom{R}}$**: risk is estimated from observed sample data not full population.
* **$e'$**: Loss function.
* **$\Omega(h,\lambda)$**: Regularization or complexity penalty applied to model $h$, controlled by $\lambda$.
* **$+$**: The optimization balances training error against model complexity.
**Hyperparameter Optimization**
$$
r(\lambda)
=
\mathbb{E}_{(S_t,S_v)\sim \operatorname{sp}(S_{tv})}
\left[
\widehat{R}_{e}\!\left(\operatorname{Opt}(S_t,\lambda),\,S_v\right)
\right]
$$

used to build the predictor on the dataset $S^t$. Complete pipeline will include hyper-parameter optimization procedure(s). After tuning the pipeline $P$ will return a single predictor:
$$
\widehat{h^*}(S^{tv})=P(S^{tv})=Opt(S^{tv},HOpt(S^{tv}))
$$
So that $\widehat{h^*}(S^{tv})$ is the result of $Opt$ and is not deterministic. 

**The performance measure**: 
Need to evaluate the performance of the model. use evaluation metric $e$ same as hyperparameter optimization. Risk of applying $P$ to $S^{tv}\sim{D^n}$  of size $n$:
$$
R_p(D,n) = E_{S^{tv}\sim{D^n}} \left[R_e(\widehat{h^*}(S^{tv},D)\right]
$$
### 2.2 Empirical evaluation of variance 
Looked at case studies. 

**variance in the learning procedure:** 
1) data sampling
2) data augmentation procedures
3) model initialization
4) dropout
5) data visit order in stochastic gradient descent
## 5 Our Recommendations: Good Benchmarks with a budget
- randomize as many sources of variation as possible
- use multiple data splits
- account for variance to detect meaningful improvements
## 6 Additional considerations
- compare models instead of procedures
- benchmarks and competitions with many contestants
- comparisons across multiple datasets
- non-normal metrics
## 7 Conclusion
In deep learning emphasis is placed on random weight initialization. Improvements should be made based on bench marks:
1) randomize as many sources of variations as possible in the performance estimation
2) prefer multiple random splits to fixed test sets
3) account for resulting variance when concluding on the benefit of an algorithm over another. 
