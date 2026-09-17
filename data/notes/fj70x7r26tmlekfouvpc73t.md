
# This is PMAS's COMMONS Lab daily Open Notebook.

Today is 2023.05.30

## Todo today

### Have a look at the COMMONS research discussion forum
    - https://github.com/orgs/commons-research/discussions
###
###

## Doing

Activity report and was browsing Marco's note.
Went for some papers on image reconstructiuon from partial inputs 


Image reconstruction from partial subband images and its application in packet video transmission
https://doi.org/10.1016/0923-5965(91)90010-Y

https://bmcgenomics.biomedcentral.com/articles/10.1186/s12864-020-06892-5

Phylogenetic imputation of plant functional trait databases
https://onlinelibrary.wiley.com/doi/abs/10.1111/j.1600-0587.2013.00528.x
Check citing articles https://onlinelibrary.wiley.com/doi/abs/10.1111/j.1600-0587.2013.00528.x


https://digitalcommons.aaru.edu.jo/cgi/viewcontent.cgi?article=1019&context=fej

https://arxiv.org/pdf/2303.11396.pdf

A real data-driven simulation strategy to select an imputation method for mixed-type trait data
https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1010154

Using phylogenetic information to impute missing functional trait values in ecological databases
https://www.sciencedirect.com/science/article/pii/S1574954121001060


Machine learning based imputation techniques for estimating phylogenetic trees from incomplete distance matrices
https://bmcgenomics.biomedcentral.com/articles/10.1186/s12864-020-06892-5

A General Method for Simultaneously Accounting for Phylogenetic and Species Sampling Uncertainty via Rubin’s Rules in Comparative Analysis 
 https://doi.org/10.1093/sysbio/syy089

Handling missing values in trait data
 https://onlinelibrary.wiley.com/doi/pdf/10.1111/geb.13185

mbImpute: an accurate and robust imputation method for microbiome data
https://genomebiology.biomedcentral.com/articles/10.1186/s13059-021-02400-4
https://github.com/ruochenj/mbImpute


## ChatGPT exchanges leading to the previous selected papers


What are the methods to construct (infer or expand) a full image from partial inputs (bits of the big picture). These methods should not involve automated learning.
ChatGPT
Constructing or inferring a full image from partial inputs without involving automated learning can be challenging, as it typically requires complex computational algorithms or manual interventions. However, there are a few methods that can be used to reconstruct or expand a full image from partial inputs without relying on automated learning. Here are a few approaches:

Patch-based methods: In this approach, the partial inputs or patches are analyzed individually, and then these patches are combined or stitched together to form the full image. This method requires a prior understanding of the spatial relationships between patches. Various algorithms, such as graph cuts or seam carving, can be used to combine the patches effectively.

Image inpainting techniques: Image inpainting aims to fill in missing or occluded regions in an image. By applying inpainting algorithms, you can reconstruct the missing parts of the image based on the surrounding information or by propagating the existing image content. Techniques like texture synthesis, diffusion-based methods, or exemplar-based approaches can be used for image inpainting.

Structure-from-Motion (SfM): SfM is a technique used to reconstruct 3D scenes from 2D image sequences. If you have partial inputs from different viewpoints or angles, you can use SfM algorithms to estimate the camera poses and 3D structure of the scene. By combining the reconstructed 3D information, you can generate a full image or a more complete representation of the scene.

Image completion with manual interventions: If automated learning is not allowed, manual interventions can be used to complete or expand an image from partial inputs. This approach involves human interaction or expertise to fill in missing details or to infer the complete image based on the available information. Tools like image editing software can be employed to manually paint or draw missing parts of the image.

It's important to note that these methods may require some level of computational algorithms or techniques, but they do not rely on automated learning specifically. Instead, they involve manual interventions or computational procedures that do not involve training on large datasets.



Let's say that this patchy dataset is a table of occurence of molecules within living organisms. We thus have phylogenetic relationshsips across the organisms and chemical class taxonomy across the molecules. What approch would you propose to reconstruct a full dataset from a patchy dataset ?
ChatGPT
In the case of a patchy dataset representing the occurrence of molecules within living organisms, where phylogenetic relationships across organisms and chemical class taxonomy across molecules are known, you can leverage these relationships to reconstruct a more complete dataset. Here's an approach you can consider:

Phylogenetic imputation: Given the phylogenetic relationships among organisms, you can utilize this information to infer missing values in the dataset. This approach assumes that closely related organisms have similar characteristics, including the occurrence of molecules. You can estimate missing values by propagating the observed data from closely related organisms to fill in the gaps in less studied or missing organisms.

Chemical class-based imputation: If you have a taxonomy of chemical classes for the molecules, you can use this information to infer missing values. Explore the chemical classes present in the dataset and their relationships to impute missing occurrences based on the patterns observed within each class. This could involve considering the distribution of occurrences within a chemical class or using statistical measures within specific chemical class groups.

Cross-validation: To enhance the reliability of the reconstructed dataset, you can perform cross-validation techniques. Split the available data into training and testing sets and use the known data to impute the missing values in the testing set. Then compare the imputed values with the actual values to evaluate the accuracy and adjust the imputation method if necessary.

Expert validation: Given the complexity and domain-specific nature of the dataset, it is valuable to involve experts in the field. Experts can provide insights, validate the reconstructed dataset, and refine the imputation process based on their knowledge of the organisms, molecules, and their interactions.

It's important to note that imputation methods rely on assumptions and might introduce some level of uncertainty. The quality and accuracy of the reconstructed dataset will depend on the availability and quality of the existing data, the accuracy of the phylogenetic relationships and chemical class taxonomy, and the effectiveness of the imputation methods employed.

Overall, combining phylogenetic relationships, chemical class taxonomy, statistical imputation, and expert input can help you reconstruct a more complete dataset of molecule occurrences within living organisms.



Great. Would their be an approach that could combine both the Phylogenetic imputation and the Chemical class-based imputation ? That is a method which would exploit the structure on both dimension of the datset for the inputation 
ChatGPT
Yes, it is indeed possible to combine both phylogenetic imputation and chemical class-based imputation to exploit the structure on both dimensions of the dataset for imputation. Here's an approach that combines these two methods:

Phylogenetic imputation: Use the phylogenetic relationships among organisms to propagate information and impute missing values. Start by identifying closely related organisms with available data. For each missing value, find the closest related organisms with observed data and use their values as a basis for imputation. This imputation process takes into account the assumption that closely related organisms share similar characteristics, including the occurrence of molecules.

Chemical class-based imputation: Leverage the chemical class taxonomy to further refine the imputation process. Within each chemical class, observe the distribution of occurrences and utilize statistical measures such as mean, median, or mode to estimate missing values. Consider the patterns and tendencies within each chemical class while imputing missing values.

Combination and refinement: Combine the imputed values from the phylogenetic imputation and chemical class-based imputation approaches. This can be achieved by assigning weights or merging the imputed values based on the confidence or reliability of each approach. You can also consider using statistical techniques such as ensemble methods or weighted averaging to combine the imputations effectively.

Expert validation: As mentioned before, involving domain experts in the validation process is crucial. Experts can provide insights on the reliability and biological plausibility of the imputed values. They can also suggest adjustments or refinements to the imputation process based on their knowledge of the organisms, molecules, and their relationships.

By combining phylogenetic imputation with chemical class-based imputation, you leverage both the phylogenetic relationships among organisms and the chemical class taxonomy of molecules to impute missing values. This approach takes advantage of the structural information present in both dimensions of the dataset, resulting in a more comprehensive and accurate imputation process.








## Paused

## Done

## Notes

## Todo tomorrow, one day ... or never 


###
###


## Today I learned that

- 