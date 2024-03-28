
# Sirius outputs formatting

These commands require to have [awk](https://en.wikipedia.org/wiki/AWK#:~:text=AWK%20(awk)%20is%20a%20domain,data%20extraction%20and%20reporting%20tool.) and [csvcut](https://csvkit.readthedocs.io/en/latest/scripts/csvcut.html) installed on your system.


The code processes a file named canopus_compound_summary.tsv. It searches for a field called "id" in the file's header. If found, it splits the values in that field by underscores and adds a new column called "feature_id". It then modifies the header by appending "_canopus" to each field name and prints the modified header. After that, it extracts specific columns and saves the extracted data. Finally, the extracted data is formatted as tab-delimited and saved in a file called canopus_compound_summary_id.tsv.


`awk 'BEGIN{FS="\t"; OFS="\t"} NR==1{for(i=1;i<=NF;i++){if($i=="id"){split_field_index=i;break}} if(split_field_index==0){print"Field not found: field_name_to_split">"/dev/stderr";exit 1}print $0,"feature_id";next}{split($split_field_index,arr,"_");print $0,arr[length(arr)]}' canopus_compound_summary.tsv | awk 'BEGIN {FS=OFS="\t"} NR==1 {for (i=1; i<=NF; i++) $i = $i "_canopus"} {print}' | csvcut -t -c "feature_id_canopus,id_canopus,molecularFormula_canopus,adduct_canopus,NPC#pathway_canopus,NPC#superclass_canopus,NPC#class_canopus" | csvformat -T > canopus_compound_summary_id.tsv`


The code processes a file named compound_identifications.tsv. It searches for a field called "id" in the file's header. If found, it splits the values in that field by underscores and adds a new column called "feature_id". It then modifies the header by appending "_sirius" to each field name and prints the modified header. After that, it extracts specific columns and saves the extracted data. Finally, the extracted data is formatted as tab-delimited and saved in a file called compound_identifications_id.tsv.


`awk 'BEGIN{FS="\t"; OFS="\t"} NR==1{for(i=1;i<=NF;i++){if($i=="id"){split_field_index=i;break}} if(split_field_index==0){print"Field not found: field_name_to_split">"/dev/stderr";exit 1}print $0,"feature_id";next}{split($split_field_index,arr,"_");print $0,arr[length(arr)]}' compound_identifications.tsv | awk 'BEGIN {FS=OFS="\t"} NR==1 {for (i=1; i<=NF; i++) $i = $i "_sirius"} {print}' | csvcut -t -c "feature_id_sirius,id_sirius,molecularFormula_sirius,adduct_sirius,InChIkey2D_sirius,InChI_sirius,name_sirius,smiles_sirius,xlogp_sirius,ionMass_sirius" | csvformat -T > compound_identifications_id.tsv`

Same with score

`awk 'BEGIN{FS="\t"; OFS="\t"} NR==1{for(i=1;i<=NF;i++){if($i=="id"){split_field_index=i;break}} if(split_field_index==0){print"Field not found: field_name_to_split">"/dev/stderr";exit 1}print $0,"feature_id";next}{split($split_field_index,arr,"_");print $0,arr[length(arr)]}' compound_identifications.tsv | awk 'BEGIN {FS=OFS="\t"} NR==1 {for (i=1; i<=NF; i++) $i = $i "_sirius"} {print}' | csvcut -t -c "feature_id_sirius,id_sirius,ConfidenceScore_sirius,CSI:FingerIDScore_sirius,ZodiacScore_sirius,SiriusScore_sirius,molecularFormula_sirius,adduct_sirius,InChIkey2D_sirius,InChI_sirius,name_sirius,smiles_sirius,xlogp_sirius,ionMass_sirius" | csvformat -T > compound_identifications_id.tsv`


To add suffix/prefix

This will suffix
`awk -F'\t' 'BEGIN {OFS="\t"} NR==1 {for (i=1; i<=NF; i++) $i = $i "_suffix"} {print}' input.tsv > output.tsv`

This will prefix
`awk -F'\t' 'BEGIN {OFS="\t"} NR==1 {for (i=1; i<=NF; i++) $i = "prefix_" $i} {print}' input.tsv > output.tsv`


CSV to TSV conversion 

awk -v OFS='\t' '{ $1=$1; print }' input.csv > output.tsv


