---
id: qpr8i7gd8f0wooklv64j9lu
title: Dataset Discovery And Exploration   A Survey
desc: ''
updated: 1795681263469
created: 1795681260757
traitIds:
  - open-notebook-commons-ablood-literature
---
# [Dataset Discovery and Exploration: A Survey](file:///home/alex/Downloads/3626521.pdf)
Key issue, there are more and more datasets available online, such as through data lakes, as data preparation and exploration becomes a prohibitively difficult task. 

Metadata models have been introduced to help with dataset identification and usability, but datasets are not easily labeled with these models, as well as the situation and growth of datasets changes rapidly. 

The primary steps to exploring and working with these large amounts of datasets are broken down into these activities and issues:
- dataset search: finding candidate datasets that meet the search criteria
- data navigation: finding and returning relevant attributes from candidate datasets
- data annotation: data annotation can be a hindrance as it is not necessarily uniform and results in inconsistencies between datasets. 
- schema inference: a representation of a group of datasets, allowing for an abstract representation of the datasets content. 

These all taken together represent data discovery and exploration. 
## Dataset Search
Dataset search can be performed against:
- Intentional data: column headers, dataset names and structural information.
- Extensional data: the actual values contained within datasets.
- Annotations: existing metadata and semantic labels.

Metadata-based search is dependent on datasets being adequately annotated. Content-based search can overcome some of these limitations.

Interestingly, the survey explicitly excludes repository discovery from its scope.

## Data Navigation
Relationships between datasets can be inferred through:

- Shared values and identifiers.
- Similarity of attributes and semantic types.
- Shared domains.
- Provenance relationships.

Provenance provides additional evidence of relationships between datasets by identifying how data was derived from other data.
see https://dl.acm.org/doi/10.1145/3318464.3389726
## Data Annotation

Annotations can occur at multiple levels:

- Cell: datatype or entity.
- Column: datatype or semantic type.
- Table: semantic class.
- Between columns: semantic relationships.
Datatype identification is frequently performed as a preprocessing step before semantic annotation.

MTab and TableMiner+ perform datatype detection based on individual cell values. MTab uses majority voting to determine column types.

## Schema Inference
Schema inference attempts to identify recurring structural patterns across independently produced datasets.

There are three primary purposes:
- Querying: accurately representing the underlying data.
- Documentation: representing common structures and relationships.
- Summarization: identifying the most prominent structural patterns.

There is a tradeoff between schema precision and conciseness. Most existing approaches are specific to individual data models.
## Evaluation

Common evaluation metrics across the surveyed approaches include precision, recall, F1 score, runtime and scalability.

Manual annotation is frequently used to establish ground truth. Scalability is comparatively under explored in data annotation research.

# Notes on findings 
- Evaluate metadata-based discovery against content-based discovery using datasets-rs.
- Perform scientific datatype identification independently of column headers.
- Identify recurring scientific data structures through large-scale crawling.
- Distinguish published metadata from computationally inferred metadata.
- Record the provenance of inferred annotations themselves.
- Investigate whether provenance relationships can improve scientific dataset discovery and integration.
- Investigate schema inference across heterogeneous scientific file formats.
