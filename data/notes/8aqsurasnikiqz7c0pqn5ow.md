# [mzTab-M: A Data Standard for Sharing Quantitative Results in Mass Spectrometry Metabolomics](https://pubs.acs.org/ancham/article/91/5/3302/820830/mzTab-M-A-Data-Standard-for-Sharing-Quantitative)
Lack of agreed standards creates issues with data sharing and data interoperability in metabolomics. For MS measurements, software is used to quantify and measure m/z values. 

**Standard reporting requirements for biological samples in metabolomics experiments: microbial and in vitro biology experiments**

Their work describes a data standard for MS-based metabolomics analytical pipelines. **mzTab-M**. Capturing downstream analysis (?). This represents a standard that can be followed, as part of the MSI (metabolomics standards initiative). ProteoWizard is included which allows for conversion o fraw files into mzML. 

## Methods
They reference their repo: https://github.com/HUPO-PSI/mzTab
## Results and Discussion
mzTab-M is a single data format for metabolomics and lipidomics. Allows for intermediary data representations. It is presented as tab-separated text, and can therefore be imported to spreadsheets, dbs, etc. 

They have 4 data tables that comprise the format: 1) metadata (MTD), 2) small molecule (SML), 3) small molecule feature (SMF), 4) small molecule evidence (SME). MTD and SML are mandatory fields that must be present. 

https://pubs.acs.org/view-large/figure/255919124/ac-2018-04310d_0001.tif (illustration of tables)
### Metadata (MTD) table
The mtd only has 3 columns :
1) MTD 
2) parameter name
3) parameter value

The MTD table specifies concepts that can be reused elsewhere in the file
- assay
- ms_run
- sample
- study_variable

### Small Molecule (SML) table
represents the quantifiable results. has fields:
- sml_id
- smf_id_refs
- smiles
- inchi
- combined/composite values from elsewhere
### Small Molecule Feature (SMF) table
Includes experimental m/z, retention time, adduct and charge info, and values across assays. 
### Small Molecule Evidence (SME) table
Used for the evidence for identifying molecules
- identifiers (smiles, inchi, etc)
- scores and confidence levels


*thoughts:*  The MTD table appears to have considerable amounts of metadata, and the experimental data is mostly in the SML table. this appears to be a relational database representation. So the model is now more of a proposed structure for related data. What is the purpose of separating the SML and SMF? And the grouping? The levels are organized by level of interpretation. 
