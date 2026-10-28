# [Data Binning (wikipedia)](https://en.wikipedia.org/wiki/Data_binning)
alternative names: *data discrete binning*, *data bucketing*.

Goal of binning is to reduce observation errors. Data falls into a given small interval, called a bin, and then a value replaces that interval, such as mean or median.

In statistics, **Statistical Data Binning** is a method for grouping continuous values into smaller numbers, *bins*. Such as age being broken down into smaller groups (bins).
## Example Usage
A histogram uses data binning to observe frequency distributions.

Binning is common in MS research, where smalls shifts could be incorrectly interpeted as different components/features. Thus binning ensures the peaks remain in their *bin* even with slight fluctuations to the bin. (I wonder if these fluctuations hold any data that is lost in binning?)

Also common in machine learning, for supervised classification and regression.

# [Numerical Data: Binning (google ML)](https://developers.google.com/machine-learning/crash-course/numerical-data/binning)
Binning groups subranges into bins or *buckets*, and often are used to turn numeric data into categorical data. Example: feature `X` has lowest value 15 and highest 425 $15\leq X \leq 425$. Thus binning X could look like:
1) 15-34
2) 35-117
3) 118-279
4) 280-392
5) 393-425
In machin learning, a model trained on these bins will react no differently to `X` values of 17 and 29, as both are Bin 1.
If you represent these bins as a feature vectore it would look something like this:

| Bin | Range   | Feature Vec               |
| --- | ------- | ------------------------- |
| 1   | 15-34   | [1.0, 0.0, 0.0, 0.0, 0.0] |
| 2   | 35-117  | [0.0, 1.0, 0.0, 0.0, 0.0] |
| 3   | 118-279 | [0.0, 0.0, 1.0, 0.0, 0.0] |
| 4   | 280-392 | [0.0, 0.0, 0.0, 1.0, 0.0] |
| 5   | 393-425 | [0.0, 0.0, 0.0, 0.0, 1.0] |
Thus `X` becomes 5 separate features.

Useful when:
- linear relationship between the feature and lable is weak/none
- feature values are clustered.
# [Binning in Data Mining (geeksforgeeks)](https://www.geeksforgeeks.org/machine-learning/binning-in-data-mining/)
## Why binning is important?
1) data smoothing: reduces impact of minor obvservation variations (noise)
2) outlier mitigation: outliers are reduced as values are grouped into bins
3) improved analysis: making continuous data discrete makes data analysis easier, and improves **visualization**
4) feature engineering: in ML can help with predictive modeling
## Types of Binning Techniques
### 1. Equal-width binning
Bins are equal width/interval, data is broken into $n$ intervals
$$\text{Bin Width}= \frac{\text{Max-Value}-\text{Min Value}}{n}$$
Easy to implement but does not account for data distribution in bins
### 2. Equal-frequency binning
Each bin has about same number of data points. Is balanced, but bin width can be highly variable.
### Steps in Binning
1. sort data
2. define boundaries for each bin (intervals)
3. Assign data points to bins: put data into bins
### Applications of Binning
1. data preprocessing
2. anomaly detection
3. data visualization
4. feature engineering
### Challenges of binning
- information loss: since coming from continuous data to discrete, granular detail is lost at points of binning
- subjective: definition of bins is highly subjective
- overfitting: may overfit data, and make a ML model less generalizabile
## [Data Binning Explained (medium)](https://medium.com/@mose.kabungo/binning-explained-557aa3cce591)
**Data Binning**: organizing data into finite range of intervals. Also called data bucketing. 