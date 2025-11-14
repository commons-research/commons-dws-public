# This is Marco's daily open-notebook.

Today is 2023.04.25


## Changes to implement in the model
We made a mistake in the variance covariance matrix. In fact, we should have a product between the values of the covariances matrices and not a sum. For example, if I take two species that have 0 correlation and one molecule. Does having that molecule in one of the species give me any additional information about the presence of that molecule in the other species ? Other than the average presence $\mu$ NO we can't have any other information ! 

We thus have $$cov(\epsilon_c, \epsilon_{c'}) = \prod_t \prod_{f=1}^{F_t} \sigma_{tf}(\tau_t(c), \tau_t(c')^{\alpha_{tf}})$$

Furthermore, in order to reduce the variance covariance matrix, we first assume that a lot of molecules and a lot of species share no correlation. This, in theory, would allow us to split the data **before** creating the cov matrix of molecules and the cov matrix of species. This would imply to assume that some molecules and some species share 0 covariance.

![image](assets/images/2023-04-24-17-14-46.jpg)

## Todo today
* 

## Doing


## Done
* 


## Todo tomorrow
 