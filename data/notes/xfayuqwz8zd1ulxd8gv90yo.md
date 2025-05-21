# This is Marco's daily open-notebook.

Today is 2023.02.10

## Todo today

## Theory and ideas of the project
We seek to infer the presence or absence of $M$ metabolites in $S$ species. We denote by $x_{sm}$ whether metabolite $m=1,\ldots,M$ is present ($x_{sm}=1$) or absent ($x_{sm}=0$) in species $s=1,\ldots,S$. To infer the full vector $\bm{x}=(x_{11}, \ldots, x_{1M},\ldots,x_{SM})$, we assume that related species share a similar set of metabolites and that metabolites related in their synthesis share a similar distribution across species. 
Let ${\mathbb P}(x_{sm}=1|y_{sm})=y_{sm}$ be the probability with which metabolite $m$ is present in species $s$. We then assume that

$$
logit \space y_{sm} = log \frac{y_{sm}}{1-y_{sm}} = \mu_m + \epsilon_{sm}
$$

where $\mu$ is a metabolite-specific intercept and $\epsilon_{sm}$ is normally distributed with mean 0 and co-variance $cov(\epsilon_{sm},\epsilon_{s'm'})=\alpha \sigma_{ss'} + \beta \sigma_{mm'}$ between each combination of species and metabolite. Here, $\sigma_{ss'}$ and $\sigma_{mm'}$ are known measures of covariance between species $s$ and $s'$ and between metabolites $m$ and $m'$, respectively, and $\alpha$ and $\beta$ are positive scalars.

We consider two sets of data informative about $\bm{x}$: i) Presence-absence data obtained with mass-spectrometry and ii) presence-only reports of specific metabolites in specific specie. Let $\bm{d_{sj}}=(d_{sj1}, \ldots, d_{sjM})$ be the presence-absence vector of each metabolite $m$ obtained with mass-spectrometry run $j=1,\ldots,J_s$ performed on species $s$. Assuming a false-positive and false-negative error rates $\epsilon_{01}$ and $\epsilon_{10}$, respectively, we have

$$
{\mathbb P}(\bm{d_{sj}}|\bm{x}, \epsilon_{01}, \epsilon_{10}) = \prod_m \left[ x_{sm}\left(\epsilon_{10}^{1-d_{sjm}}(1-\epsilon_{10})^{d_{sjm}}\right) + (1-x_{sm})\left( \epsilon_{01}^{d_{sjm}}(1-\epsilon_{01})^{1-d_{sjm}}\right)\right].
$$

To model the presence only data, it must be put in relation to the expected research effort. Let $p_{sm}$ denote the known number of presence-only reports for metabolite $m$ in species $s$ and $n_{sm}$ the unknown number of research projects that aimed at discovering metabolite $m$ in species $s$. Assuming a false-positive and false-negative error rates $\pi_{01}$ and $\pi_{10}$, respectively, we have

$$
{\mathbb P}(p_{sm}|n_{sm}, \pi_{01}, \pi_{10}) = ...
$$


Product of cov ?! and not the sum ? 
### Images
Here are the first ideas of the discussion we had with Daniel and Pierre-Marie:

![image](assets/images/2023-01-30-14-53-54.jpg)

![image](assets/images/2023-01-30-14-53-55.jpg)
### Ideas 
See forum discussion [here](https://github.com/anticipated-lotus/forum/discussions/3)
* The probability of occurence of a given chemical class (i.e of a pseudo absence being indeed pseudo an not a real absence) could be formulated as the sum of probability of this occurence given the : chemical research effort context, phylogenetic context, covariance of other chemical classes. 
* This last term was discussed: study of the covariance of chemical classes within a given taxa could be informative. 
###

## Doing

## Paused

## Done
Change `prepare_pseudoabsence_tables.R` in order to have a csv table and not a space separated data. 

## Notes
"ref/noref, children/nochildren" mean if you take into account multiple reference (and children) or not.

So, for example: 2 articles report amarogentin in *Gentiana lutea*, 3 (of which 1 is the same) in *Gentiana acaulis*.

Then, for the pair amarogentin in *Gentiana*:
* `ref_child` : 5 &rarr; Gives the number of occurences were we find amarogentin related with a *Gentiana* species.
* `ref_nochild`: 4 &rarr; Gives how many **different** papers there are that talk about amarogentin in the species *Gentiana*
* `noref_child` : 2 &rarr; Gives how many children of that species were found with at least one reference (in that case : *Gentiana    
  lutea* and *Gentiana acaulis*)
* `noref_nochild`: 1 &rarr; Will only be either 0 or 1. Gives if it there is at least one reference that talks about that molecule 
  in the species *Gentiana*

**ATTENTION** tables are grouped also chemically. So child also refers to the "chemical children", so exactly same principle as for *Gentiana* and *G. lutea* but this for Terpenoids > Monoterpenoids > Secoiridoids (> Amarogentin)... 
## Todo tomorrow

###
###
###


## Today I learned that

- 