
# This is PMAS's COMMONS Lab daily Open Notebook.

Today is 2023.04.27

## Todo today

### Have a look at the COMMONS research discussion forum
    - https://github.com/orgs/commons-research/discussions
###
###

## Doing

### ENPKG work in Lausanne

# For the extract specified in the BIND() clause below,
# retrive the chromatogram info (RT,M/Z, peak area) and 
# formula. Only features with very high confidence 
# formula are shown. To be completed
#
PREFIX enpkg: <https://enpkg.commons-lab.org/kg/> .
PREFIX foaf: <http://xmlns.com/foaf/0.1/> .
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
PREFIX wd: <http://www.wikidata.org/entity/> .

SELECT ?feature ?MZ ?RT ?string ?score ?area
WHERE{
    BIND( enpkg:VGF142_F07 AS ?sample ) .
    ?formula enpkg:has_SIRIUS_formula_string ?string ;
             enpkg:has_SIRIUS_formula_score  ?score  .
    ?feature enpkg:has_SIRIUS_formula ?formula ;
             enpkg:has_MZmine_MZ ?MZ           ;
             enpkg:has_MZmine_RT ?RT           .
    ?chromatogram enpkg:has_MZmine_feature               ?feature .
	?sample       enpkg:has_MZmine_chromatogram		   ?chromatogram .
    << ?chromatogram enpkg:has_MZmine_feature ?feature >> enpkg:has_MZMine_peak_area ?area
    FILTER( ?score >= 0.98 )
}
ORDER BY ?RT




## Paused

## Done

## Notes

## Todo tomorrow, one day ... or never 


###
###


## Today I learned that

- 