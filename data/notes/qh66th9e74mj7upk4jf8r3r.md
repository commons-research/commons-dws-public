# [Normalized (Pointwise) Mutual Information in Collocation Extraction](https://svn.spraakbanken.gu.se/repos/gerlof/pub/www/Docs/npmi-pfd.pdf)
## 1 Intro
*association measure* is a measure of how well two features can be said to be associated. There are many existing measures. To be effective relevant relationships shoulda rise over irrelevant ones. These different measures can show different relationship qualities. 
## 2 Mutual Information
### 2.1 Definitions
Mutual Informatoin (MI) is the measure of information that overlaps between two random variables. For variables X,Y, its deined as: $$I(X;Y) = \sum_{x,y}p(x,y)\ln\frac{p(x,y)}{p(x)p(y)}$$
Thus the overlap is 0 when the variables do not overlap and X determines Y $I(X,Y) = H(Y)$ when: $H(Y) = -\sum_{y} p(y)\ln p(y)$ 
And the expected value of pointwise mutual infromation: $$i(x,y) = \ln\frac{p(x,y)}{p(x)p(y)}$$
Which is the measure of how much thea ctual probability of a particular cooccurrence differs from expected probabilities if independent. 
### 2.2 Mutual Information in Collocation extraction
Pointwise MI is an assocation measure in collocation extraction. PMI was originally introduced in lexicography. PMI will give low frequency events higher scores vs MI. 
## 3 Normalizing MI and PMI
A fixed upper bound of 1 is used in this paper to normalize the values. and with PMI they aim to lower the low frequency event scors that can be too prevalent. 
### 3.1 Normalized PMI
The chance of seeing a pair of events together is equal to the chance of seeing the other, equalling the chance of seeing them together, as PMI its: $$i(x,y)= -\ln p(x)= -\ln p(y) = -\ln p(x,y)$$
The authors choose to normalize like: $$i_n(x,y)=\left(\ln\frac{p(x,y)}{p(x)p(y)}\right)/-\ln p(x,y)$$
so if two events always occur together it is: $i_n(x,y)=1$, if they never occur together it is $i_n(x,y)=-1$ and if there is no relationship then $i_n(x,y)= 0$. Which is a much smaller rane than before normalization. Called **NPMI**
### 3.2 An aside: $PMI^2$ 
Can normalize also as $PMI^2$ as: $$\ln\left(\frac{p(x,y)}{p(x)(y)}/\frac{1}{p(x,y)}\right)=\ln\frac{p(x,y)^2}{p(x)(y)}$$
Not as neat as NPMI, and gives $-\infty \leq p(x,y) \leq 0$ 