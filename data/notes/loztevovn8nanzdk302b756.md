
## Paper's
### [LOTUS](https://doi.org/10.7554/eLife.70780)
[LOTUS (LOpen Knowledge Management in Natural Products Research)](https://lotus.naturalproducts.net) is a database of over 750'000+ referenced structure-organism pairs. A structure-organims pairs shows the relationship between organisms and molecules.
With the increasing technology, the data for chemical compounds (exp. mass specrometry) and organisms (exp. sequencing machines) also increases exponentialy. To link the data will be more and more beneficial.  
The idea of LOTUS is to interconnect the three central objects of the living (metabolites, proteins and genes).  

Step 1 - Data harmonization:  
The information comes from different sources, which has to be harmonized/standardized for building the new DB. 
The scripts involves a comparison with the gathered data to ensure no duplication (SSOT).  

Step 2 - Precessing and Validation:    
The tree central objects where taken togheter. Mostly the references was particularly challenging (poor quality). 
An unit test checked the code after each changes for the same results.


Step 3 - Dissemination:  
The researchdata should be accessible following the FAIR principles. SPARQL are generic queries to return specific "tables". 
To be find, they have to be in a specific format.


For the biologically interpretation of chemicals is used TMAP. The biological specificity score is calculated as a Jensen-Shannon divergence.
1 means very specific chemical compound and 0 that they are ubquitous.
The same is done in the opposit way (chemically interpretation of biology).
Aim to make more and better data available.

#### Link's
[KNAPSAck]() 50'000+ structures and 100'000+ structure-organism pairs  
[NAPRA-LERT dataset]() well documented database but not available for free  
[NPAtlas]() specificly for microbial NPs.  
[COCONUT]() COlleCtion of Open NatUral products (similar to LOTUS)  
[natural products online](https://naturalproducts.net/) - Host for Lotus, Coconut ...  


### [MINEs: open access databases of computationally predicted enzyme promiscuity products for untargeted metabolomics](https://doi.org/10.1186/s13321-015-0087-1)

MINEs are an extension for metabolites database, which have been not observed, but very likely can occure. Based on the Biochemical Network Integrated Computational Explorer and enzyme reaction rules it will be calculated. The website is userfriendly and also available as an API: [https://minedatabase.mcs.anl.gov/#/home](https://minedatabase.mcs.anl.gov/#/home)

This database includes structures for use in untargeted metabolomics. This resulting compounds are rarely found in PubChem but are structurally similar to natural products.

As an input you can give an MS/MS file, structure, name.... As an output you will get information about the reaction, validated compounds...


### [Molecular structure discovery for untargeted metabolomics using biotransformation rules and global molecular networking](https://doi.org/10.1101/2024.02.04.578795)

A big part of the MS/MS spectras are unidentified (exp. GNPS/MassIVE). 
For this problem they developed BAM (Biotransformation-based Annotation Method).
It has the potential to identified new molecules based on previously unknown MS/MS spectra.
The predictionrate for the right assignment is 24.x %.  

BAM concist of three steps:

1. determine an annotated anchor spectrum based on high spectral similarity.  

2. Apply biotranformation rules that match the observed mass difference and generate candidate structures  
The rules are sourced from RetroRules, KEGG or Metacyc. Out of that, PROXIMALE 2 was employed.

3. Rank the derivatives based on the likelihods of the applied biotransformation.
GNN-SOM predicts the likelyhood of each atom in a molecule.


#### Coding
[Github - HassounLab](https://github.com/HassounLab/BAM)
PROXIMAL2  
GNN-SOM tool (graph neural network-based tool)


[[expanded_np_chemspace.abbreviations.md]]
