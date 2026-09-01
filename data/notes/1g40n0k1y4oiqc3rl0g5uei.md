# [Metric Space](https://en.wikipedia.org/wiki/Metric_space)
A set of data with information about the distance between each data point. The distances are measured by the metric/distance function. 

Graphs are an example of a metric space. 
## Definition
A metric space is an [ordered pair](https://en.wikipedia.org/wiki/Ordered_pair), like $(M,d)$ where $M$ is a set, and each element in the set is a point. $d$ is a metric on the set (a function). $d:M\times{}M\rightarrow{}R$  , where all points satisfy these axioms $x,y,z\in{M}$ :
1) point to self is 0: $d(x,x) = 0$ 
2) distance between two points is always positive $if x\neq{y}, \text{then }  d(x,y) \gt 0$ 
3) x to y and y to x is symmetric $d(x,y)=d(y,x)$ 
4) Triangle inequality is true $d(x,z)\leq{d(x,y)+d(y,z)}$ 
$M$ is often written in place of $(M,d)$ 