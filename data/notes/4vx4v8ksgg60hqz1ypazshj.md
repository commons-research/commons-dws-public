
# This is PMAS's COMMONS Lab daily Open Notebook.

Today is 2024.03.04

## Todo today

### Have a look at the COMMONS research discussion forum
    - https://github.com/orgs/commons-research/discussions

### Daily work on the Open Science for natural products research Viewpoint

See [[viewpoint]]


###
###

## Doing

### Launching Sirius on Ola's dataset

- Not sure what the duplicated feature id problem was again or where it came from.
Relaunching the biostat tool box to double check.

Typical command would be 

```bash
sirius -i tests/data/input_sirius.mgf --output tests/data/output_sirius --maxmz 800 config --IsotopeSettings.filter=true --FormulaSearchDB=BIO --Timeout.secondsPerTree=0 --FormulaSettings.enforced=HCNOP --Timeout.secondsPerInstance=0 --AdductSettings.detectable='[[M+H]+,[M-H4O2+H]+,[M+Na]+,[M+K]+,[M+H3N+H]+,[M-H2O+H]+]' --UseHeuristic.mzToUseHeuristicOnly=650 --AlgorithmProfile=orbitrap --IsotopeMs2Settings=IGNORE --MS2MassDeviation.allowedMassDeviation=5.0ppm --NumberOfCandidatesPerIon=1 --UseHeuristic.mzToUseHeuristic=300 --FormulaSettings.detectable=B,Cl,Br,Se,S --NumberOfCandidates=10 --ZodiacNumberOfConsideredCandidatesAt300Mz=10 --ZodiacRunInTwoSteps=true --ZodiacEdgeFilterThresholds.minLocalConnections=10 --ZodiacEdgeFilterThresholds.thresholdFilter=0.95 --ZodiacEpochs.burnInPeriod=2000 --ZodiacEpochs.numberOfMarkovChains=10 --ZodiacNumberOfConsideredCandidatesAt800Mz=50 --ZodiacEpochs.iterations=20000 --AdductSettings.enforced=, --AdductSettings.fallback='[[M+H]+,[M+Na]+,[M+K]+]' --FormulaResultThreshold=true --InjectElGordoCompounds=true --StructureSearchDB=BIO --RecomputeResults=false formula zodiac fingerprint structure canopus write-summaries
```


First we make sure to log via 

sirius login --user-env SIRIUS_USERNAME --password-env SIRIUS_PASSWORD


sirius -i /home/allardpm/git_repos/mapp-metabolomics/laure-weisskopf-group/docs/mapp_project_00016/mapp_batch_00060/results/mzmine/mapp_batch_00060_sirius.mgf --output /home/allardpm/git_repos/mapp-metabolomics/laure-weisskopf-group/docs/mapp_project_00016/mapp_batch_00060/results/sirius/mapp_batch_00060 --maxmz 800  config --IsotopeSettings.filter=true --FormulaSearchDB=BIO --Timeout.secondsPerTree=0 --FormulaSettings.enforced=HCNOP --Timeout.secondsPerInstance=0 --AdductSettings.detectable=[[M+H3N+H]+,[M+Na]+,[M-H4O2+H]+,[M+K]+,[M-H2O+H]+,[M+H]+] --UseHeuristic.mzToUseHeuristicOnly=650 --AlgorithmProfile=orbitrap --IsotopeMs2Settings=IGNORE --MS2MassDeviation.allowedMassDeviation=5.0ppm --NumberOfCandidatesPerIon=1 --UseHeuristic.mzToUseHeuristic=300 --FormulaSettings.detectable=Cl,Br,S --NumberOfCandidates=10 --ZodiacNumberOfConsideredCandidatesAt300Mz=10 --ZodiacRunInTwoSteps=true --ZodiacEdgeFilterThresholds.minLocalConnections=10 --ZodiacEdgeFilterThresholds.thresholdFilter=0.95 --ZodiacEpochs.burnInPeriod=2000 --ZodiacEpochs.numberOfMarkovChains=10 --ZodiacNumberOfConsideredCandidatesAt800Mz=50 --ZodiacEpochs.iterations=20000 --AdductSettings.enforced=, --AdductSettings.fallback=[[M+Na]+,[M+K]+,[M-H2O+H]+,[M+H]+] --FormulaResultThreshold=true --InjectElGordoCompounds=true --StructureSearchDB=BIO --RecomputeResults=false formula zodiac fingerprint structure canopus write-summaries

Writing the command I realize that initially I might have `sirius -i /home/allardpm/git_repos/mapp-metabolomics/laure-weisskopf-group/docs/mapp_project_00016/mapp_batch_00060/results/mzmine`, thereby specifying a whole directory instead of a file. This might be the source of the problem. I will relaunch the command with the correct input file. `sirius -i /home/allardpm/git_repos/mapp-metabolomics/laure-weisskopf-group/docs/mapp_project_00016/mapp_batch_00060/results/mzmine/mapp_batch_00060_sirius.mgf`


I also realized another thing. The --RecomputeResults=false will only be effective if the input is changed to the previously computed directory. It seams obvious now that I think about it but since the commond doesnt throws an exception I didn't realize it. See https://github.com/boecker-lab/sirius/issues/69#issuecomment-1098053079

We had some awk commands which we cant find again.

Mooved to [[awk]]

canopus_compound_summary.tsv > prefixed_canopus_compound_summary.tsv


awk -F'\t' 'BEGIN {OFS="\t"} NR==1 {for (i=1; i<=NF; i++) $i = "canopus_" $i} {print}' canopus_compound_summary.tsv > prefixed_canopus_compound_summary.tsv

awk -F'\t' 'BEGIN {OFS="\t"} NR==1 {for (i=1; i<=NF; i++) $i = "sirius_" $i} {print}' compound_identifications.tsv > prefixed_compound_identifications.tsv

awk -F'\t' 'BEGIN {OFS="\t"} NR==1 {for (i=1; i<=NF; i++) $i = "dbresults_gnps_" $i} {print}' e18c64bf354f457bb534c513821f7426.tsv > e18c64bf354f457bb534c513821f7426_prefixed.tsv


awk -F'\t' 'BEGIN {OFS="\t"} NR==1 {for (i=1; i<=NF; i++) $i = "gnps_" $i} {print}' 0735059ee1034ad58a3861c2630e593f.tsv > 0735059ee1034ad58a3861c2630e593f_prefixed.tsv

awk -F'\t' 'BEGIN {OFS="\t"} NR==1 {for (i=1; i<=NF; i++) $i = "met_annot_enhancer_" $i} {print}' mapp_batch_00060_spectral_match_results_repond.tsv > mapp_batch_00060_spectral_match_results_repond_prefixed.tsv


### Meeting Eliane Garo

Malik and Eliane

Info Orbitrap

- QE HF-X

2576 extracts

MeOH 

Splitter UHPLC with UV

Waters 50 mm 






## Paused

## Done

## Notes

## Todo tomorrow, one day ... or never 


###
###


## Today I learned that

- o