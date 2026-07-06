---
id: newfyt6rc5h9oo0lefvc781
title: Feature Engineering
desc: ''
updated: 1783348274199
created: 1783348266542
traitIds:
  - open-notebook-commons-ablood-literature
---
# [What is feature engineering (IBM)](https://www.ibm.com/think/topics/feature-engineering)
- **Feature Engineering (feature extraction):** process of transforming raw data into relevant information for use by ML models. 
- **[Multicollinearity](https://www.ibm.com/think/topics/feature-engineering)**: The situation where independent variables in a linear regression equation are correlated, multi as there are more than 2. 
Feature engineering creates predictive model features. As ML training rests on the quality of the data being used during training, feature engineering is an important part of the training process. Feature engineering is the process of selecting subset of variables to create a new model, with the goal of reducing *multicollinearity*
## The benefits of feature selection
Identifies the most important and impactful features that are not redundant, boosting performance:
- Better model performance
- reduced overfitting
- shorter training times
- lower compute costs
- greater interpretability
- smoother implementation
- [dimensionality reduction](https://www.ibm.com/think/topics/dimensionality-reduction) - If there are more variables being used the dimensionality grows, as does the space between data points, which makes it more difficult to train the algorithm to identify patterns and predict.
## What are features?
- **Feature:** a definable quality of the items in the dataset
They are also called variables. Features may be independent, dependent - based on independent variables and/or combined attributes of the dataset. 

Feature selection identifies the most important input variables to use to predict dependent variables. The *target variable* is the variable that the model is trying to predict. 

Features are categorized into two broad categories:
- **Numerical variables**: quantifiable, like length, size, age, duration
- **Categorical variables**: non numeric values, such as a name, job title, location
**[Feature extraction:](https://www.ibm.com/think/topics/feature-extraction)** transforms raw data into numerical features the model can use to make predictions. Thus simplifying the data and reducing compute needs. 
## Supervised feature selection methods
**[Supervised learning](https://www.ibm.com/think/topics/feature-selection):** Uses a target variable to find the most important features. The task becomes identifying the input variables that have the largest affect on the target variable. Methods include:
- Filter methods
- wrapper methods
- embedded methods
### Filter methods
Filtering focuses on the data itself and does not take into account model performance optimizations. Each input variable is assessed independently against a target variable and the highest correlations are determined. When testing 1 by 1 this is called univariate feature selection. 

These filter methods are usually used as data preprocessing tools, and are fast and efficient for feature selection. Common filter methods:
1) Information gain: Simply measures impact of presence/absence of feature in determining a given target variable
2) Mutual information: Measures dependence between two variables by measuring information obtained about one through the other
3) **Chi-square test**: Compares observed vs expected values to measure relationship
4) **Fisher's score**: Derivatives are used to calculate the relative importance of each feature for classifying data. Higher scores indicate greater influence. 
5) **Pearson's correlation coefficient**: Quantifies relationship of two continuous variables using a score ranged -1 to 1
6) **Variance Threshold**: Removes all features under a minimally defined degree of variance under the assumption that greater variance contains more information. Related to using MAD (mean absolute difference). 
7) **Missing value ratio:** Calculates percentages of each instance in the dataset where a certain feature is missing or has a null value. If a feature has a low percentage its likely a bad candidate. 
8) **Dispersion ratio**: Variance ratio for the mean value of a feature. Higher ratio value means more information
9) **ANOVA (Analysis of variance)**: Determines if different feature values affect the value of a target variable. 