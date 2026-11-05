---
id: o6k6ak2erjls8o07shdtt2l
title: Tidy Data
desc: ''
updated: 1793877672771
created: 1793877671408
traitIds:
  - open-notebook-commons-ablood-literature
---
# [Tidy Data](https://www.jstatsoft.org/article/view/v059i10)
## 1. Introduction
**tidying:** structuring datasets to facilitate analysis

A major time sync is data structuring and importation into other tools for analysis. Tidying stands to help with this, implying ease of *interoperability*. The concept is built off of normalization in databasing and is focused on advising the structure of datasets for analytical purposes. 

## 2. Defining tidy data
Datasets comprise the physical layout of the data and the semantics of the dataset are the meaning contained in the dataset. 
### 2.1 Data structure
Tables are commonly broken down into rows and columns however data can still be represented differently using these concepts while presenting the same informaiton.
### 2.2 Data semantics
Datasets are collections of values. These values can be organized two ways, as either variables or observations. 

It should be easier to describe functional relationships between variables than between rows. 
### 2.3 Tidy data
Tidy data structure
1) each variable is a column
2) each observation is a row
3) each type of observational unit forms a table
*messy data* is any other arrangement of the data. 

## 3 Tidying messy datasets
5 most common violations to a tidy dataset
1. column headers are values, not variable names.
2. multiple variables are stored in one column.
3. variables are stored in both rows and columns.
4. multiple types of observational units are stored in the same table.
5. a single observational unit is stored in multiple tables.
[author's R based tidy tool](https://github.com/hadley/tidy-data "https://github.com/hadley/tidy-data")
### 3.1 Column headers are values, not variable names
Tabular data for presentations is a common example of this. 
### 3.2 Multiple variables stored in one column
### 3.3 Variables are stored in both rows and columns
most complicated form of messy data. 

### 3.4 Multiple types in one table
### 3.5 One type in multiple tables
data values duplicated across different tables. Same issues as with non normalized relational db data.
