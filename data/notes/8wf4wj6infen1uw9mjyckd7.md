# [What is logistic regression? (IBM)](https://www.ibm.com/think/topics/logistic-regression)
- **Logistic Regression**: supervised machine learning classification algorithm used to predict discrete or categorical outcomes. 
- **[Supervised Machine Learning](https://www.ibm.com/think/topics/supervised-learning)**: Technique using labeled data sets for training ML model to identify underlying patterns/relationships. 
- **Generalized linear Models (GLM)**: Family of models that do linear predictions, including logistic and linear regressions. 
## Logistic regression vs linear regression
Both are linear models used to examine relationships between predictor variables/independent variables and an output/dependent variable. However linear regression is useful when the output is a continuous value, such as predicting a credit score or sales revenue. Whereas logistic regression gives categorical outcomes, essentially yes/no type responses. 

Logistic regression predicts if a specific outcome will occur. 
## Logistic regression under the hood
Logistic regression is a member of the *GLM* family. The logistic regression equation:
$$
Y = P(x) = \frac{e^{\beta_0+\beta_1x}}{1 + e^{\beta_0+\beta_1x}}
$$
The *sigmoid* transformation allows making a binary prediction. The value of $x$ will take on $(-\infty, \infty)$   and y will become either of $[0,1]$. 
## Odds, log odds, and odds ratio
### Odds
The log of the ratio of probabilities is called the logit function. Because we are limited to values between $[0,1]$ need to uses probability/odds. So the odds are the comparison of the probability of an event occurring to it not occurring. 
### Log Odds
odds of x in $p(x)$, as the probability of an outcome are:
$$
odds(x) = \frac{p(x)}{1-p(x)}
$$
So with this equation the odds of an event are rightwardly infinite. But the values are not symmetric. To address this the log of the odds is used, which transforms the unbounded scale to the real number line, $(-\infty,\infty)$, and this is called log-odds:
$$
log(\frac{p(x)}{1-p(x)})
$$
### Odds ratio
To interpret the model coefficients we use the odds ratio. The odds ratio tells us how the odds change if the value $x_1$ is increased by 1 unit. 
So:
$$
odds(x_1) = e^{\beta_0+\beta_1\cdot{x_1}}
$$
becomes:
$$
odds(x_1+1) = e^{\beta_0+\beta_1\cdot{(x_1+1)}}=e^{\beta_0+\beta_1x_1}\cdot{e^{\beta_1}}
$$

# [Logistic Regression (Wikipedia)](https://en.wikipedia.org/wiki/Logistic_regression)
- **Logistic model**: statistical model that models the *log-odds* of an event as a linear combination of one or more independent variables. 
- **[log-odds (logit)](https://en.wikipedia.org/wiki/Logit)**: The *quantile function* associated with a logistic distribution. Defined as $logit p = \sigma^{-1}(p) = ln\frac{p}{1-p} for p \in (0,1)$ , so taking the log of the probability. Where odds start at 0 and go to $\infty$, the log-odds are $(-\infty,+\infty)$ . Making it symmetric. 
- **[Cumulative Distribution Function](https://en.wikipedia.org/wiki/Cumulative_distribution_function)**: $F(x) = P(X \leq x)$ which is the probability that $X$ will take a value less than or equal to $x$. 
- **[quantile function](https://en.wikipedia.org/wiki/Quantile_function)**: The inverse of the *cumulative distribution function*, also known as the percentile function. $F^{-1}(p)$. 
Logistic regression estimates the parameters of a logistical model. Useful for binary classification in machine learning (supervised learning). Using the *sigmoid* function (also called the logistic function) to transform a linear combination of inputs into a value ranging from 0 to 1. Useful for things like identifying an email as spam or not. The probability this model provides supports decision making (i.e is this spam?). 

# [Logistic Regression in Machine Learning (geeksforgeeks)](https://www.geeksforgeeks.org/machine-learning/understanding-logistic-regression/)
- Used for binary classification, where outputs can be true/false
- Uses a sigmoid function to convert inputs into probability outputs between 0 and 1
## Types
- **Binomial logistic regression:** Used for dependent variable has two possible categories, true/false e.g.
- **Multinomial**: Used when dependent variable has 3 or more unordered categories. E.g. cats, dogs, sheep, etc. 
- **Ordinal**: Used when 3 or more categories with a natural order, such as low, medium, high. 
