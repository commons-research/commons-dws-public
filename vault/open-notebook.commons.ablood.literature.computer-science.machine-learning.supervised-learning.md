---
id: kicxxszi4nu8oublxck6dsz
title: Supervised Learning
desc: ''
updated: 1782135714389
created: 1782135713136
traitIds:
  - open-notebook-commons-ablood-literature
---
# [What is supervised learning? (IBM)](https://www.ibm.com/think/topics/supervised-learning)
- **[Supervised Machine Learning](https://www.ibm.com/think/topics/supervised-learning)**: Technique using labeled data sets for training ML model to identify underlying patterns/relationships. 
Datasets consist of labeled sample data points & the correct outputs. The model uses input data to train and adjust the model parameters until it fits the task. The labeled training data gives the *ground truth*, teaching the model to identify features and data labels relationships. 
## What is ground truth data?
- **Ground truth data**: data that is verified against the actual outcomes expected, created usually through annotation/measurement by hand; used for training, validating, and testing models. By definition, this data is confirmed to be true and accurate data, it is the basis the model will use, a gold standard. 
## How supervised learning works
Through labeled training data the relationships between the inputs and the outputs of the data are understood. Then the model can be trained and applied to real world situations to find correct outputs to unseen data. 
- Requires a large dataset to train the model and find correlations. 
- Test data is used after training to evaluate model efficacy.
- **Cross-validation**: process of testing the model using another portion of the dataset. 
- **[gradient descent](https://www.ibm.com/think/topics/gradient-descent)**: family of algorithms, including *stochastic gradient descent* (SGD), which are used to optimize the model's algorithms. This is done by assessing accuracy with a *loss function*. 
- **[Loss function](https://www.ibm.com/think/topics/loss-function)**: An equation used to measure discrepancies between a model's predictions and the actual values the model is trying to predict. 
- **[Dimensionality reduction](https://www.ibm.com/think/topics/dimensionality-reduction)**: Reduce the number of *features* in the data to the most crucial ones for predicting data labels, increasing efficiency and maintaining accuracy.
- **[Features](https://www.ibm.com/think/topics/feature-selection)**: individual measurable properties/characteristics of a data point; the specific attributes of the data used to describe the phenomenon being observed. Chosen through *feature selection*
The loss function produces a gradient that indicates the direction the model should be adjusted towards, to reduce errors. The optimization is applied throughout training in order to optimize the model.  
## An example of supervised learning in action
- Captcha is a crowd sourced example of supervised learning, where the model data was annotated by the users of captcha, based on labels prepared by the data scientists, then annotated for each image based on the crowd's classifications. 
## Types of supervised learning
- **[Classification](https://www.ibm.com/think/topics/classification-machine-learning)**: Uses an algorithm to sort data into categories, recognizing entities within a dataset and tries to determine labels/definitions for those entities. This type includes [logistic regression](https://www.ibm.com/think/topics/logistic-regression). This model is commonly used for neural networks. 
- **Regression**: Used for understanding the relationship between dependent and independent variables. Outputs are continuous values, and the model attempts to predict the target output. E.g. projections for sales revenue, financial planning, etc. Includes [linear regression](https://www.ibm.com/think/topics/linear-regression), and other regression methods. 
- **[Ensemble Learning](https://www.ibm.com/think/topics/ensemble-learning)**: meta-approach which entails using multiple modles on the same classification/regression task. Then all results are pooled together to find the best overall approach. Each model used is called a *weak learner*/*base model*. This approach could be good for mitigating ==[bias-variance tradeoff](https://www.ibm.com/think/topics/bias-variance-tradeoff)==
## Supervised learning algorithms
Gradient descent and other optimization algorithms can be used to train a large number of ML algorithms suitable for supervised learning:
- [Naive Bayes](https://www.ibm.com/think/topics/naive-bayes): classification algorithm using Bayes' theorem that doesn't use the presence of one feature to predict another feature probability, assuming all predictors have equal impact on the result.
- Linear Regression: Identifies relationship between continuous dependent variables and one or more independent variables. Useful for predicting future outcomes. Represents the relationship as a straight line. 
- Nonlinear Regression: Used when outputs cannot be produced from linear inputs (linear regression), and thus represents the values using a nonlinear, curved, line. Useful for complex relationships with large number of parameters.
- Logistic Regression: Used for categorical dependent variables, where there are binary outputs (true, false, or positive/negative, etc). Useful for binary identification problems (such as presence of an atom in spectrum). 
- Polynomial Regression:  Similar to linear regression, representing relationship modelling on a graph; though the functions express the relationship using *polynomial* degrees (raising the input features to powers) and thus a linear model can fit a non linear pattern. 
- [Support vector machine (SVM)](https://www.ibm.com/think/topics/support-vector-machine): Useful for data classification and regression, separating the classes of data points with a decision boundary or *hyperplane*; The SVM plots the hyperplane that can maximize the distance between the data point groupings. 
- [K-nearest neighbor](https://www.ibm.com/think/topics/knn): *nonparametric* algorithm to classify data points based on proximity to other available data. Assumes similar data points can be found near each other when plotted mathematically. 
- [Random forest](https://www.ibm.com/think/topics/knn): Forest references a collection of uncorrelated [decision trees](https://www.ibm.com/think/topics/decision-trees) that are merged to increase accuracy and cut back on variance/deviation. 
