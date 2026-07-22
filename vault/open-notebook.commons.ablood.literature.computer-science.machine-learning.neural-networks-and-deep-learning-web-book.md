---
id: 3ku2zfznne5ytcgrdpt7thd
title: Neural Networks And Deep Learning Web Book
desc: ''
updated: 1784643087730
created: 1784643081497
traitIds:
  - open-notebook-commons-ablood-literature
---
# [Chapter 1](http://neuralnetworksanddeeplearning.com/chap1.html)

**Sigmoid neuron**: a type of neuron where the weights and bias changes have a capped/limited impact on the neuron's output. This allows for more effective learning. 
**Feedforward**: a neural network type where the information is only fed forward towards output. not back towards input. 
**recurrent neural networks**: networks that do allow for loops of feedback. 

**Cost Function:** (or loss/objective function) $$C(w,b)\equiv\frac{1}{2n}\sum_{x}||y(x)-a||^2$$
- $w$ denotes collection of all weights in network
- $b$ all biases
- $n$ the total number of training inputs
- $a$ the vector of outputs
- $x$ training input
- $y(x)$ the output, a 10-D vector 
- $\sum$ is all training inputs summed
- $||v||$ denotes the usual length for a vector $v$ 
- $C$ the quadratic cost function
If $C(w,b)$ is large the training is doing poorly, but if its $\approx0$ then it is doing great. 
$\eta$ is the learning rate for the model.

# [Chapter 2](http://neuralnetworksanddeeplearning.com/chap2.html)
**Back propagation**: an algorithm for calculating the gradient of the cost function.
- $w_{jk}^l$ denotes the weight for the connection from the $k^{th}$ neuron in the $(l-1)^{th}$ layer to the $j^{th}$ neuron in the $l^{th}$ layer. 
- For Bias: $b_j^l$ is the bias of the $j^{th}$ neuron in the $l^{th}$ layer. 
- The activation of a layer from the last, $l^{th}$ from $j^{th}$ as follows: $a_j^l = \sigma(\sum_k{w_{jk}^{l}a_k^{l-1}+b_j^l})$ 
	- Here the sum is over all neurons $k$ in the $(l-1)^{th}$ layer. 
**Vectorization**: apply a function, such as $\sigma$ to every element in a vector $v$, so $\sigma(v)$ to denote this element-wise application of the function, or to say: $\sigma(v)_j = \sigma(v_j)$ 
- So $a_j^l = \sigma(\sum_k{w_{jk}^{l}a_k^{l-1}+b_j^l})$  is rewritten in the smaller vectorized form: $a^l = \sigma(w^la^{l-1}+b^l)$ 
**Weighted input**: While computing $\sigma(v)$ the weighted input is computed: $z^l \equiv w^la^{l-1}+b^l$ , and thus $a^l$ can also be written as $a^l = \sigma(z^l)$ 
**elementwise product**: Where each element is multiplied by the corresponding element in another matrix
**Hadamard product:** Elementwise multiplication of two vectors: $s\odot t$ , so $(s\odot{t})_j = s_jt_j$ 
**Error in output layer:** $\delta^L$ contains these components: $\delta_j^L = \frac{\partial C}{\partial a_j^L}\sigma'(z_j^L)$ . Where $\frac{\partial C}{\partial a_j^L}$ measures the rate the cost is changing as a function of the $j^{th}$ output activation. And $\sigma'(z_j^L)$ measures rate of activation function $\sigma$ is changing at $z_j^L$. Rewritten in the matrix basic form: $\delta^L = \nabla_a C \odot \sigma'(z^L)$, where $\nabla_a C$ expresses the rate of change of $C$. 

http://neuralnetworksanddeeplearning.com/chap2.html#the_two_assumptions_we_need_about_the_unexaminedcost_function (in the an equation for the error... part)