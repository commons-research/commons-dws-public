# [Croissant: A Metadata Format for ML-Ready Datasets](https://arxiv.org/abs/2403.19546)
## 1 Intro
**Croissant**: a format for improving ML dataset discoverability, portability, reproducibility, and interoperability. 

## 2 Related Work
**Vocabularies for Dataset Documentation**: documentation is important for data management. Metadata descriptions aid with discovery. **Ontologies** and vocabularies are semantic web tools that standardize dataset documentation. 
**Standards for Catalogs and Metadata**: Need for better documentation lead to DCAT (Data Catalog Vocabulary), and the Dataset vocabulary schema in schema.org. There are also metadata efforts to describe tabular data implemented. 
**Operationalizing Responsible ML thorugh Data Work**: There is a growing effort to grow the trustworthiness of datasets for ML use. Hugging Face provides [Dataset Cards](https://huggingface.co/docs/hub/en/datasets-cards) - which has summaries, fields, splits, potential social impacts, and bias inherent in a dataset. 
## 3 The Croissant Format
Built off of the schema.org. Has four layers:
1. dataset metadata layer
2. resource layer
3. structure layer
4. semantic layer
### 3.1 the dataset metadata layer
Contains basic info like name, description, verion
### 3.2 resource layer
source data used description. Uses primitive classes to address limitations with schema.org (dataset content description): FIleObject and FileSet. 
### 3.3 structure layer
Here a class called `RecordSet` defines the structure of the data, such as from CSV, JSON, and other types. 
### 3.4 semantic layer
Describes things like dataset splits (for ML: train, test, validation), and dataset labels. 

Look into the implementation of Croissant, as it is used for hugging face and many other data sources. 