# This is Marco's daily open-notebook.

Today is 2023.05.17


## Notes
### Markov random fields
If we have a tree structure we can do either do "loopy belief propagation" which is updating all node one at a time. This is garanteed to converge to correct marginals but it is wasteful. There is an other way : "collect and distribute schedule". The idea is to pick one node as the "root" fo the tree, find all the leaves of the graph and compute messages to their parents. Continue until you reach the root. **If the graph is a tree, any node can be a root.** We then backpropagate back to the leaves. Advantage : we only do one update per message.  See explanation [here](https://www.youtube.com/watch?v=meBWAboEWQk) at 11min34sec. This is very similar to an HMM and its forward-backward algorithm. 

Now the problem for our model is that we have to combine two trees. The one from species and the one from molecules. We could think of each node as a combination of each molecule with each species. 
## Todo today
* look definition of loopy back propagation. 
* Check out [this blog](https://medium.com/@philipyunsoocho/image-denoising-by-gibbs-sampling-67d1ad3d7344). For more explanations. I think this new approach could really work for our case. 
* [Here](https://towardsdatascience.com/image-denoising-with-gibbs-sampling-mcmc-concepts-and-code-implementation-11d42a90e153) is an implementation on an image. Could this be applied to our model ?
* 
## Doing


## Done
* 


## Todo tomorrow
 