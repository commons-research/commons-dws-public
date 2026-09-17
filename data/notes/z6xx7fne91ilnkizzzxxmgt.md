[source](https://link.springer.com/article/10.1186/1471-2105-8-105)

# The seven heuristic rules:
1) Restrictions for the number of elements: Saves time and space. Limit the dataset to elements necessary for the research goal. E.g. if natural compounds, exclude things like high element count compounds. 
2) LEWIS and SENIOR chemical rules: These rules are used to check whether a chemical graph can be built from a formula, accounting for valences. 
3) Isotopic patterns: for compounds synthesized by natural precursors, they would have the natural average abundancies for the isotopes, and therefore you can rule out samples that do not follow the natural averages. 
4) Hydrogen/carbon ratios: Basically real molecules should follow a ratio that does not go above H/C > 3. and the H/C ratio is usually less than two. So can apply this rule to eliminate as well.
5) heteroatom ratio check: Most of the time heteroatoms are not expected to be found, so this can be used to also help refine data.  
6) Element ratio probabilities: Basically, the combination of the element counts can also be checked, and if it isn't realistic then also can rule out samples. 
7) Presence of trimethylsilylated compounds: (TMS) if the sample molecule was modified before the MS test then subtract the TMS groups that were added.
## Combination of all rules
Seven rules for molecular formula filtering for non-charged molecules:
1. apply heuristic restrictions for number of elements during formula generation
2. perform LEWIS and SENIOR check
3. perform isotopic pattern filter
4. perform H/C ratio check (hydrogen/carbon ratio)
5. perform NOPS ratio check (N, O, P, S/C ratios)
6. perform heuristic HNOPS probability check (H, N, O, P, S/C high probability ratios)
7. perform -TMS check (for GC-MS if a silylation step is involved)

# Conclusion
Use of 7 rules allows for automatic exclusion of molecular formulas that are wrong or inaccurate. Can assign correct formula with 98% accuracy if the compound exists in a database used.  