
# This is PMAS's COMMONS Lab daily Open Notebook.

Today is 2024.02.15

## Todo today

### Have a look at the COMMONS research discussion forum
    - https://github.com/orgs/commons-research/discussions

### Daily work on the Open Science for natural products research Viewpoint

See [[viewpoint]]


###
###

## Doing


Adpating tutorial at[[ressources.datasette]] to an inat exported data set

sqlite-utils insert inat.db locations \
  2024_02_14_inat_output.csv --csv -d


sqlite-utils schema inat.db

sqlite-utils tables inat.db --counts

sqlite-utils tables inat.db --counts -t


sqlite-utils inat.db "select * from locations limit 4"

sqlite-utils inat.db "select * from observations limit 1"

sqlite-utils inat.db -t \
  "select id, captive, uri, location from observations limit 10"

sqlite-utils convert inat.db observations location \
'bits = value.split(",")
return {
  "latitude": float(bits[0]),
  "longitude": float(bits[1]),
}' --multi


## Paused

## Done

## Notes

https://simonwillison.net/2023/Jun/18/symbex/


Created [[resources.datasette]]


Assisting https://www.spettrometriadimassa.it/Congressi/4MSNatMed/index.html

Presented https://doi.org/10.5281/zenodo.10663625

Notes : 


- Valorisation of tomato leaves phytochemicals
They use a "Natural products workflow" from Compound Discoverer, this apparently comes with FoodDB included 


## Todo tomorrow, one day ... or never 


###
###


## Today I learned that

- https://llm.datasette.io/en/stable/index.html allows you to run LLM locally 

See ex :

```
cat inat_fetcher.py | llm summarize
```

- https://kagi.com/ is a mind-blowing search engine

- https://book.mwmbl.org/page/progress/ they are building the best search engine in the world .... and they are 1.2134 % task completed ! Thk Adriano  @adafede (checking what happens if I mention a github user from a Dendron note .... most likely nothing) for the pointer

- https://tapas.knowledgepixels.com/tapas.html?api=knowledgepixels/nanopub-query-api&op=/get-subj-refs&autosubmit=on&param_subj=https://doi.org/10.1038/sdata.2016.18

https://tapas.knowledgepixels.com/tapas.html?api=knowledgepixels/nanopub-query-api