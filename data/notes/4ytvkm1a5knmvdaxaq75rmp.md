# [Data Lineage (Wikipedia)](https://en.wikipedia.org/wiki/Data_lineage)
**Data Lineage**: tracking of data generation, transformation, and transmission - over time. 

## Representations of data lineage
Representations are dependent on the metadata management. 
## Data Provenance 
- information about entities, activities, and agents involved in producing a piece of data. Records how data was derived, and useful or assessing reliability and trustworthiness. 
In scientific workflows provenance is used to document how values are derived, for reproducibility and reuse. 

## PROV Data Model
PROV is a W3C recommendation, where:
- information is about entities, activities, and people involved in producing data
- Used to form assessments about data quality, reliability, trustworthiness. 
- Provenance gives credit to the people and institutions that created, influenced, delivered the data. 
- The provenance can and should be used to evaluate the trustworthiness of the data. 
### Lineage Capture
Lineage can be stored as a triplet: $\{i,T,o\}$  where:
- $i$ is the set of inputs
- $T$ is the producer/operator
- $o$ the outputs
### Eager vs Lazy Lineage
Eager: capture lineage at run time, all of it. 
Lazy: Only captures less refined lineage at runtime. Overhead is less.

# [Data Provenance (Wikipedia)](https://en.wikipedia.org/wiki/Data_lineage)
 Good provenance holds when documented enough for reproducibility.
# [Data Lineage vs Data Provenance: Whats the difference?](https://datahub.com/blog/data-lineage-vs-data-provenance/)
**Data Lineage:** tracks how data flows through systems, source -> destination. 
**Data Provenance:** Historical record of data:
	- who created it
	- where
	- when
	- what conditions
	- Trustworthiness/authority
## How data lineage and data provenance differ in practice
| **Dimension**           | **Data lineage**                                                                                  | **Data provenance**                                                                                                            |
| ----------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| **Question it answers** | How did this data get here, and what transformed it?                                              | Where did this come from, who created it, and what authority does it carry?                                                    |
| **Primary user**        | Data engineers, analysts, ML practitioners                                                        | Auditors, compliance teams, AI governance leads, researchers                                                                   |
| **What it depends on**  | Pipeline metadata, transformation logic, dependency graph                                         | Ownership records, source identifiers, audit logs, ingestion metadata                                                          |
| **Where it shows up**   | Debugging, impact analysis, deprecation, migration                                                | Audits, regulatory submissions, AI training data review, forensic investigation                                                |
| **Example**             | Tracing a broken revenue dashboard back through dbt models to a schema change in the source table | Confirming that a training dataset was collected from approved sources, by authorized owners, with logged ingestion timestamps |
# [What is data provenance?](https://www.ibm.com/think/topics/data-provenance)
**Data Provenance**: historical record of data detailing origin using metadata. Focused on authenticity. 
## Why is data provenance important? 
Tracks origins of data, helps evaluate data trustworthiness, and allows attribution to data originating bodies. 


websites: https://www.dataprovenance.org/ 