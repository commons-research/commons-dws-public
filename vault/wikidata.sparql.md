---
id: qcUnyE9eaS2PVPPngKeB1
title: Sparql
desc: ''
updated: 1770987499973
created: 1611593110381
---

# SPARQL queries



# all compounds produced by a given taxon or group of taxa (including children taxa) : 

https://w.wiki/4CMd

with ref

https://w.wiki/4CMg



# all compounds produced by a given taxon or group of taxa (including children taxa) which have a described bioactivity : 

https://w.wiki/3YMo

resumed as treemap https://w.wiki/3YMt

for archive on zenodo https://w.wiki/4N8G
results https://w.wiki/4N8J



## All organisms containing compound for which a given MeSh id has been reported.

Change MeSH Id according to https://meshb.nlm.nih.gov/search

https://w.wiki/vo9

### displayed as a treemap

https://w.wiki/zkK


## compounds in organisms who have a parent taxon with a given taxon name

https://w.wiki/vo$

## compounds in organisms who have a parent taxon with a given taxon name - grouped and counted 

https://w.wiki/368M

## compounds in organisms who have a parent taxon with a given taxon name - with mf and accurate mass


https://w.wiki/36Ki



## compounds displaying a found in a taxon property

https://w.wiki/q$H

## idsm powered !!!


https://w.wiki/xMJ

[[mail_jakub|scratch.2021.02.02.150258.mail_jakub]] 

## genus counting indole substrutcures

This SPAQRL query is based on a proposition of Jakub Galgonek <jakub.galgonek@uochb.cas.cz> (https://idsm.elixir-czech.cz/) and adapted by Pierre-Marie Allard (pierre-marie.allard@unige.ch)
It returns an order list of organisms known to produce chemical compounds having an indolic moiety.
The organisms are aggregated at the parent taxon level
and the list is ordered by number of compound occurence in the parent t

https://w.wiki/xMN


## all molecules isolated by author X

https://w.wiki/32D6
https://w.wiki/32$m


## count of the authors having isolated a given scaffold

https://w.wiki/32DF

## compare authors by count of compound

https://w.wiki/32Vb
https://w.wiki/32Vk (bar-chart)


## compare authors by count of compound (substructure-refinable)

https://w.wiki/32Vd

## compare authors by count of compound (structuresimilarity-refinable)

https://w.wiki/32Vg (indolic)
https://w.wiki/32Vj (bubblechart - indolic)
https://w.wiki/32Vi (bubblechart - tropanic)

## count of authors isolating substances with a given role

https://w.wiki/32Vr

## all distinct article/substances/org for a given biological role

https://w.wiki/32Vu

## all disticnt antibiotics

https://w.wiki/32Vv


## drug-prot interaction 

```SPARQL
SELECT DISTINCT ?parent_taxon ?parent_taxon_name ?compound ?interaction ?compoundLabel ?geneLabel ?biological_processLabel ?diseaseLabel WHERE {
  #?compound wdt:P2868 ?mesh.
  #?mesh wdt:P486 "D000962".
  ?compound wdt:P235 ?inchikey.
  {
    ?compound p:P703 ?statement.
    ?statement ps:P703 ?taxon.
    ?taxon wdt:P171 ?parent_taxon.
    OPTIONAL { ?taxon wdt:P171 ?parent_taxon. }
    OPTIONAL { ?parent_taxon wdt:P225 ?parent_taxon_name. }
    {
      ?statement prov:wasDerivedFrom ?ref.
      ?ref pr:P248 ?reference.
      ?reference wdt:P356 ?reference_doi;
        wdt:P1476 ?reference_title.
    }
   #?compound p:P129 ?interaction.
   #?interaction wdt: wd:Q21119831.
    
    ?compound wdt:P129 ?gene_product .   # drug interacts with a gene_product
    ?gene wdt:P688 ?gene_product .  # gene_product (usually a protein) is a product of a gene (a region of DNA)
    ?disease  wdt:P2293 ?gene .    # genetic association between disease and gene
    ?disease wdt:P279*  wd:Q12078 .  # limit to cancers wd:Q12078 (the * operator runs up a transitive relation..)
    ?gene_product wdt:P682 ?biological_process . #add information about the GO biological processes that the gene is related to 

    ?biological_process (wdt:P361|wdt:P279)* wd:Q14599311.
  }
  SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en". }
}
  
GROUP BY ?parent_taxon ?parent_taxon_name ?compound ?interaction ?compoundLabel ?geneLabel ?biological_processLabel ?diseaseLabel
#ORDER BY DESC (?count)
```


## Generic LOTUS queries

https://w.wiki/$Q$
https://w.wiki/$R3
https://w.wiki/$RD apparently working !
https://w.wiki/$RR with wd: for structure and org
https://w.wiki/$RU wd: for everyone ...still ok
https://w.wiki/$SF full monty

## Sachem non-permanent endpoint

https://idsm.elixir-czech.cz:2443/sachem/#/search


## Sachem grand parents
https://w.wiki/32Wz

## Retrun compound present in invasive species

https://w.wiki/32fa
https://w.wiki/32fc

## check taxon for a givin INChikey (regex)

https://w.wiki/32j3

## chemotax graph queries

https://w.wiki/32q9
https://w.wiki/32qC


https://w.wiki/32qN


# to tweet 

All the compounds found in the Streptomyces avermitilis taxon and the references documenting this link. 
https://w.wiki/33V$

We can remove the references to get all unique compounds found in the Streptomyces coelicolor

https://w.wiki/33WG



All the biological taxa where the chemical compound erysodine is found in.
https://w.wiki/33WA



# molecules found within vegetables

https://w.wiki/4EAh

# molecules found within toxic plants


https://w.wiki/4EAw

#  mlecules in IUCN threatned species

https://w.wiki/4EGg

https://w.wiki/4EHQ



# looking for molecules present in old species according to life span

https://w.wiki/4EH8
https://w.wiki/4EHB

with preclass

https://w.wiki/4EHD

and prepreclass 

at all levels
https://w.wiki/4EHH

at a single level

https://w.wiki/4EHJ


classed by chem classes
https://w.wiki/4EHP




# Messing around with pathways

https://w.wiki/4EK7

original query 

https://w.wiki/4EK9


# highest mountains in Switzerland 

https://w.wiki/4EKE


# all biologist with a twitter account


https://w.wiki/4EKW

strictly biologists
https://w.wiki/4EKM

educated in Switzerland 

https://w.wiki/4EKk

# example for prsenattion UniFr

https://w.wiki/4EMf 
All compounds + ref for S. coelicolor

https://w.wiki/4EMo (bioact listed)

#  Compounds from species wuth given IUCN status and lifespan
https://w.wiki/4EMw

# compounds in taxa and children filtered by SMILES pattern regex

https://w.wiki/4JWv

# Melochia genus query

https://w.wiki/4VYy


# IDSM queries 

PREFIX sachem: <http://bioinfo.uochb.cas.cz/rdf/v1.0/sachem#>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX bd: <http://www.bigdata.com/rdf#>
PREFIX wd: <http://www.wikidata.org/entity/>
PREFIX wdt: <http://www.wikidata.org/prop/direct/>
PREFIX wdtn: <http://www.wikidata.org/prop/direct-normalized/>
PREFIX p: <http://www.wikidata.org/prop/>
PREFIX prov: <http://www.w3.org/ns/prov#>
PREFIX ps: <http://www.wikidata.org/prop/statement/>
PREFIX pr: <http://www.wikidata.org/prop/reference/>
PREFIX endpoint: <https://idsm.elixir-czech.cz/sparql/endpoint/>



#title: Which are the available referenced structure-organism pairs on Wikidata? (example limited to 1000 results)
SELECT DISTINCT ?structure ?structure_inchikey ?taxon ?taxon_name ?reference ?reference_doi WHERE {
  ?structure wdt:P235 ?structure_inchikey;       # get the inchikey
    p:P703[                                      # statement found in taxon
     ps:P703 ?taxon;                             # get the taxon
     (prov:wasDerivedFrom/pr:P248) ?reference ]. # get the reference
  ?taxon wdt:P225 ?taxon_name.                   # get the taxon scientific name
  ?reference wdt:P356 ?reference_doi.            # get the reference DOI
}
LIMIT 10




PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX sachem: <http://bioinfo.uochb.cas.cz/rdf/v1.0/sachem#>
PREFIX endpoint: <https://idsm.elixir-czech.cz/sparql/endpoint/>

SELECT * WHERE {
  SERVICE endpoint:chebi {
    ?COMPOUND sachem:substructureSearch
        [ sachem:query "CC(=O)Oc1ccccc1C(O)=O" ]
  }
  ?COMPOUND rdfs:label ?o
}




# title: Compounds of the Melochia genus bearing the quinoline substructure

https://w.wiki/4wbY


# all articles documenting found in taxonn Prop by authors of a given country 

https://w.wiki/4z7M



-----


PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX jlw: <https://www.sinergiawolfender.org/jlw/>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX wd: <http://www.wikidata.org/entity/>
PREFIX wdt: <http://www.wikidata.org/prop/direct/>
PREFIX p: <http://www.wikidata.org/prop/>
PREFIX ps: <http://www.wikidata.org/prop/statement/>
PREFIX prov: <http://www.w3.org/ns/prov#>
PREFIX pr: <http://www.wikidata.org/prop/reference/>
PREFIX wikibase: <http://wikiba.se/ontology#>
PREFIX bd: <http://www.bigdata.com/rdf#>
PREFIX wdraw: <http://www.wikidata.org/>
PREFIX vit: <https://www.sinergiawolfender.org/vit/>

SELECT ?chemical_compound ?compoundLabel ?queried_taxa  ?queried_taxaLabel ?queried_taxall ?queried_taxallLabel ?pfcode WHERE {
       
SERVICE <https://query.wikidata.org/sparql> {
  VALUES ?queried_taxa {
    wd:Q310915
  }
  {
    ?chemical_compound p:P703 ?stmt.# We selecte chemical classes having the found in taxon statement
    ?queried_taxall wdt:P171* ?queried_taxa.
    ?stmt ps:P703 ?queried_taxall. # and the restrict the found in taxon statement to match our queried taxa
  }
 ?chemical_compound rdfs:label ?compoundLabel.
 ?queried_taxa rdfs:label ?queried_taxaLabel.
 ?queried_taxall rdfs:label ?queried_taxallLabel.
        
 FILTER (LANG(?compoundLabel) = "en") . # filter for English
 FILTER (LANG(?queried_taxaLabel) = "en") .
 FILTER (LANG(?queried_taxallLabel) = "en") .
}
    
?pfcode       jlw:is_from_plant_part               ?plant_part;
              vit:has_taxon ?taxon.
    
?taxon jlw:has_wd_QID ?queried_taxall. 
    
}







PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX jlw: <https://www.sinergiawolfender.org/jlw/>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX wd: <http://www.wikidata.org/entity/>
PREFIX wdt: <http://www.wikidata.org/prop/direct/>
PREFIX p: <http://www.wikidata.org/prop/>
PREFIX ps: <http://www.wikidata.org/prop/statement/>
PREFIX prov: <http://www.w3.org/ns/prov#>
PREFIX pr: <http://www.wikidata.org/prop/reference/>
PREFIX wikibase: <http://wikiba.se/ontology#>
PREFIX bd: <http://www.bigdata.com/rdf#>
PREFIX wdraw: <http://www.wikidata.org/>
PREFIX vit: <https://www.sinergiawolfender.org/vit/>

SELECT ?chemical_compound ?mf ?mf_formatted ?compoundLabel ?queried_taxa  ?queried_taxaLabel ?queried_taxall ?queried_taxallLabel ?pfcode ?labprocess ?feature ?sirius_formula ?sirius_formula_string WHERE {
       
SERVICE <https://query.wikidata.org/sparql> {
  VALUES ?queried_taxa {
    wd:Q310915
  }
  {
    ?chemical_compound p:P703 ?stmt.# We selecte chemical classes having the found in taxon statement
  OPTIONAL { ?chemical_compound wdt:P231 ?cas. }
  OPTIONAL { ?chemical_compound wdt:P233 ?smiles_canonical. }
  OPTIONAL { ?chemical_compound wdt:P234 ?inchi. }
  OPTIONAL { ?chemical_compound wdt:P592 ?chembl. }
  OPTIONAL { ?chemical_compound wdt:P662 ?pubchem. }
  OPTIONAL { ?chemical_compound wdt:P683 ?chebi. }
  OPTIONAL { ?chemical_compound wdt:P2017 ?smiles_isomeric. }
  OPTIONAL { ?chemical_compound wdt:P274 ?mf. }
  OPTIONAL { ?chemical_compound wdt:P2067 ?mass. }
            #BIND(LCASE(STR(?mf)) as ?lowmf)
            #BIND(REPLACE(STR(?mf),"₀₁₂₃₄₅₆₇₈₉","B") AS ?mf_b) .
            BIND(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(STR(?mf),"₀","0"),"₁","1"),"₂","2"),"₃","3"),"₄","4"),"₅","5"),"₆","6"),"₇","7"),"₈","8"),"₉","9") AS ?mf_formatted) .


            
    ?queried_taxall wdt:P171* ?queried_taxa.
    ?stmt ps:P703 ?queried_taxall. # and the restrict the found in taxon statement to match our queried taxa
  }
 ?chemical_compound rdfs:label ?compoundLabel.
 ?queried_taxa rdfs:label ?queried_taxaLabel.
 ?queried_taxall rdfs:label ?queried_taxallLabel.
        
 FILTER (LANG(?compoundLabel) = "en") . # filter for English
 FILTER (LANG(?queried_taxaLabel) = "en") .
 FILTER (LANG(?queried_taxallLabel) = "en") .
}
    
?pfcode       jlw:is_from_plant_part               ?plant_part;
              jlw:has_lab_process ?labprocess;
              vit:has_taxon ?taxon.
?labprocess jlw:has_MZmine_chromatogram ?mzmine_chromatogram .
    
?mzmine_chromatogram jlw:has_MZmine_feature ?feature .

?feature jlw:has_SIRIUS_formula ?sirius_formula.
    
?sirius_formula jlw:has_SIRIUS_formula_string ?sirius_formula_string.
    
?taxon jlw:has_wd_QID ?queried_taxall. 
    
FILTER(?mf_formatted = ?sirius_formula_string)
}

# Compounds produced by plants endemic to New caledonia

https://w.wiki/57ap

cleaner with mass and mf

https://w.wiki/57hN


# listing compounds in meals

https://w.wiki/5Bs7


https://w.wiki/5Bs9

# Compounds of the Arachnida class

https://w.wiki/5Doy


# Compounds from taxa and children clean

https://w.wiki/5LJf


# References and occurences of Alstonine 

https://w.wiki/5WXP

# compare occurences in WD of entries with a given taxon id  (OTL versus WFO)

https://w.wiki/5WYx



## endpoints

https://www.wikidata.org/wiki/Wikidata:Lists/SPARQL_endpoints



#### quest query mod from Mietchen to compounds (not working)

# Pay attention to edge cases
SELECT DISTINCT ?n_formatted
(CONCAT(
REPLACE(STR(?i)
".*Q"
"Q")
"|P921|"
REPLACE(STR(?ta)
".*Q"
"Q")
"|P1932|"
(CONCAT("\""
?a
"\""))
"|S887|Q69652283") AS ?QuickStatements)
WITH {
SELECT DISTINCT ?ta WHERE {
SERVICE bd:sample { ?ta wdt:P31 wd:Q11173 . bd:serviceParam bd:sample.limit 5 }
}
LIMIT 2
}
AS %t
WITH
{ SELECT ?i ?n ?ta ?ti WHERE {
INCLUDE %t
        
?ta rdfs:label ?n.
FILTER (LANG(?n) = "en") .
BIND(REPLACE(STR(?n),"@en","") AS ?n_formatted) .
                                         

SERVICE wikibase:mwapi
{
bd:serviceParam wikibase:endpoint "www.wikidata.org";
wikibase:api "Generator";
mwapi:generator "search";
mwapi:gsrsearch ?n_formatted ;
mwapi:gsrlimit "max".
?i wikibase:apiOutputItem mwapi:title.
}
?i wdt:P1476 ?ti .
#MINUS {?i wdt:P921 ?ta }
#MINUS {?i wdt:P921 [wdt:P171* ?ta ] } 
FILTER (REGEX(LCASE(?ti)
LCASE(CONCAT( "\\"
"b"
?n_formatted ,"\\"
"b"))))
FILTER (!REGEX(LCASE(?ti)
LCASE(CONCAT( ?n_formatted ,"-"))))
FILTER (!REGEX(LCASE(?ti)
LCASE(CONCAT( ?n_formatted ,"(.)virus"))))
FILTER (!REGEX(LCASE(?ti)
LCASE(CONCAT( "pseudo(.?)"
?n_formatted))))
}
}
AS %i
WHERE {
INCLUDE %i
INCLUDE %t
BIND (SUBSTR(?ti
STRLEN(STRBEFORE(REPLACE(?ti
?n
"=HELP="
"i")
"=HELP=")) +1
STRLEN(?n_formatted)) AS ?a)
}       


-----
No error but no results neither 

SELECT DISTINCT ?n_formatted
(CONCAT(
REPLACE(STR(?i)
".*Q"
"Q")
"|P921|"
REPLACE(STR(?ta)
".*Q"
"Q")
"|P1932|"
(CONCAT("\""
?a
"\""))
"|S887|Q69652283") AS ?QuickStatements)
WITH {
SELECT DISTINCT ?ta ?n_formatted WHERE {
SERVICE bd:sample { ?ta wdt:P31 wd:Q11173 . bd:serviceParam bd:sample.limit 5000 }

?ta rdfs:label ?n.
FILTER (LANG(?n) = "en") .
BIND(REPLACE(STR(?n),"@en","") AS ?n_formatted) .
     

}
LIMIT 100
}
AS %t
WITH
{ SELECT ?i ?n_formatted ?ta ?ti WHERE {
INCLUDE %t
        
                                    

SERVICE wikibase:mwapi
{
bd:serviceParam wikibase:endpoint "www.wikidata.org";
wikibase:api "Generator";
mwapi:generator "search";
mwapi:gsrsearch ?n_formatted ;
mwapi:gsrlimit "max".
?i wikibase:apiOutputItem mwapi:title.
}
?i wdt:P1476 ?ti .
#MINUS {?i wdt:P921 ?ta }
#MINUS {?i wdt:P921 [wdt:P171* ?ta ] } 
FILTER (REGEX(LCASE(?ti)
LCASE(CONCAT( "\\"
"b"
?n_formatted ,"\\"
"b"))))
FILTER (!REGEX(LCASE(?ti)
LCASE(CONCAT( ?n_formatted ,"-"))))
FILTER (!REGEX(LCASE(?ti)
LCASE(CONCAT( ?n_formatted ,"(.)virus"))))
FILTER (!REGEX(LCASE(?ti)
LCASE(CONCAT( "pseudo(.?)"
?n))))
}
}
AS %i
WHERE {
INCLUDE %i
INCLUDE %t
BIND (SUBSTR(?ti
STRLEN(STRBEFORE(REPLACE(?ti
?n_formatted
"=HELP="
"i")
"=HELP=")) +1
STRLEN(?n_formatted)) AS ?a)
}



-----

Works !!!

# adapted from Daniel Mietchen https://w.wiki/5a7K
SELECT DISTINCT ?n_formatted
(CONCAT(
REPLACE(STR(?i)
".*Q"
"Q")
"|P921|"
REPLACE(STR(?ta)
".*Q"
"Q")
"|P1932|"
(CONCAT("\""
?a
"\""))
"|S887|Q69652283") AS ?QuickStatements)
WITH {
SELECT DISTINCT ?ta ?n_formatted WHERE {
SERVICE bd:sample { ?ta wdt:P31 wd:Q11173 . bd:serviceParam bd:sample.limit 5000 }
?ta p:P703 ?stmt.
?stmt ps:P703 ?taxa.
?ta rdfs:label ?n.
FILTER (LANG(?n) = "en") .
BIND(REPLACE(STR(?n),"@en","") AS ?n_formatted) .
}
LIMIT 25
}
AS %t
WITH
{ SELECT ?i ?n_formatted ?ta ?ti WHERE {
INCLUDE %t
SERVICE wikibase:mwapi
{
bd:serviceParam wikibase:endpoint "www.wikidata.org";
wikibase:api "Generator";
mwapi:generator "search";
mwapi:gsrsearch ?n_formatted ;
mwapi:gsrlimit "max".
?i wikibase:apiOutputItem mwapi:title.
}
?i wdt:P1476 ?ti .
MINUS {?i wdt:P921 ?ta }
#MINUS {?i wdt:P921 [wdt:P171* ?ta ] } 
#FILTER (REGEX(LCASE(?ti)
LCASE(CONCAT( "\\"
"b"
?n_formatted ,"\\"
"b"))))
#FILTER (!REGEX(LCASE(?ti)
LCASE(CONCAT( ?n_formatted ,"-"))))
#FILTER (!REGEX(LCASE(?ti)
LCASE(CONCAT( ?n_formatted ,"(.)virus"))))
#FILTER (!REGEX(LCASE(?ti)
LCASE(CONCAT( "pseudo(.?)"
?n))))
}
}
AS %i
WHERE {
INCLUDE %i
INCLUDE %t
BIND (SUBSTR(?ti
STRLEN(STRBEFORE(REPLACE(?ti
?n_formatted
"=HELP="
"i")
"=HELP=")) +1
STRLEN(?n_formatted)) AS ?a)
}


https://w.wiki/5a8b

escaping dangling meta chracters https://w.wiki/5a8g

----- 

with taxa and compound

# Adapted from Daniel Mietchen https://w.wiki/5a7K
SELECT DISTINCT
(CONCAT(
REPLACE(STR(?i)
".*Q"
"Q")
"|P921|"
REPLACE(STR(?ta)
".*Q"
"Q")
"|P1932|"
(CONCAT("\""
?a
"\""))
"|S887|Q69652283") AS ?QuickStatements)
WITH {
SELECT DISTINCT ?ta ?n_formatted WHERE {
SERVICE bd:sample { ?ta wdt:P31 wd:Q11173 . bd:serviceParam bd:sample.limit 5000 }
?ta p:P703 ?stmt.
?stmt ps:P703 ?taxa.
?ta rdfs:label ?n.
FILTER (LANG(?n) = "en") .
BIND(REPLACE(REPLACE(REPLACE(STR(?n),"@en",""),"\\+",""),"\\-","") AS ?n_formatted) .
}
LIMIT 25
}
AS %t
WITH
{ SELECT ?i ?n_formatted ?ta ?ti WHERE {
INCLUDE %t
SERVICE wikibase:mwapi
{
bd:serviceParam wikibase:endpoint "www.wikidata.org";
wikibase:api "Generator";
mwapi:generator "search";
mwapi:gsrsearch ?n_formatted;
mwapi:gsrlimit "max".
?i wikibase:apiOutputItem mwapi:title.
}
?i wdt:P1476 ?ti .
MINUS {?i wdt:P921 ?ta }
}
}
AS %i
WITH
{ SELECT ?j ?taxa ?ta ?ti WHERE {
INCLUDE %t
SERVICE wikibase:mwapi
{
bd:serviceParam wikibase:endpoint "www.wikidata.org";
wikibase:api "Generator";
mwapi:generator "search";
mwapi:gsrsearch ?taxa;
mwapi:gsrlimit "max".
?j wikibase:apiOutputItem mwapi:title.
}
?j wdt:P1476 ?ti .
MINUS {?j wdt:P921 ?taxa }
}
}
AS %j
WHERE {
INCLUDE %i
INCLUDE %j
INCLUDE %t
BIND (SUBSTR(?ti
STRLEN(STRBEFORE(REPLACE(?ti
?n_formatted
"=HELP="
"i")
"=HELP=")) +1
STRLEN(?n_formatted)) AS ?a)
}


Using filter EXISTS 

https://w.wiki/5a8t

https://w.wiki/5a9B


------
Curating query 

# Adapted from Daniel Mietchen https://w.wiki/5a7K
SELECT DISTINCT ?taxa ?taxaLabel ?taxa_chem ?taxa_chemLabel ?ta ?taLabel ?ti 
(CONCAT(
REPLACE(STR(?ta)
".*Q"
"Q")
"|P703|"
REPLACE(STR(?taxa)
".*Q"
"Q")
"|S248|"
REPLACE(STR(?i)
".*Q"
"Q")) AS ?QuickStatements)
WITH {
SELECT DISTINCT ?ta ?n_formatted ?taxa_chem WHERE {
SERVICE bd:sample { ?ta wdt:P31 wd:Q11173 . bd:serviceParam bd:sample.limit 25000 }
OPTIONAL { ?ta p:P703 ?stmt. }
OPTIONAL { ?stmt ps:P703 ?taxa_chem. }
?ta rdfs:label ?n.
FILTER (LANG(?n) = "en") .
BIND(REPLACE(REPLACE(REPLACE(STR(?n),"@en",""),"\\+",""),"\\-","") AS ?n_formatted) .
}
LIMIT 30
}
AS %t
WITH
{ SELECT ?i ?n_formatted ?ta ?ti ?taxa WHERE {
INCLUDE %t
SERVICE wikibase:mwapi
{
bd:serviceParam wikibase:endpoint "www.wikidata.org";
wikibase:api "Generator";
mwapi:generator "search";
mwapi:gsrsearch ?n_formatted ;
mwapi:gsrlimit "max".
?i wikibase:apiOutputItem mwapi:title.
}
?i wdt:P1476 ?ti .
?i wdt:P921 ?taxa.
?taxa wdt:P105 wd:Q7432.
FILTER (?taxa != ?taxa_chem)
}
}
AS %i
WHERE {
INCLUDE %i
INCLUDE %t
BIND (SUBSTR(?ti
STRLEN(STRBEFORE(REPLACE(?ti
?n_formatted
"=HELP="
"i")
"=HELP=")) +1
STRLEN(?n_formatted)) AS ?a)
SERVICE wikibase:label { bd:serviceParam wikibase:language "en". }
}


https://w.wiki/5a9T

https://w.wiki/5a9g


# Solanum genus compounds

https://w.wiki/5h8g

# Solanum and erythroxylum genus compounds

https://w.wiki/5h9f

# Solanum and erythroxylum and Apocynaceae genus compounds

https://w.wiki/5h9p

Manager


# Limit by journal 

https://w.wiki/5imt
Scorfi shiny version https://w.wiki/5imj


# filter papers which do not have found in taxon

https://w.wiki/5ipT





# 10 papers (random) from journal of natural products

https://w.wiki/5ity


# 10 papers (random) from phytochemistry

https://w.wiki/5it$


### Restricting quest queries to journals and taxa

# Adapted from Daniel Mietchen https://w.wiki/5a7K
SELECT DISTINCT *
#(CONCAT(
#REPLACE(STR(?ta)
".*Q"
"Q")
"|P703|"
REPLACE(STR(?taxa)
".*Q"
"Q")
"|S248|"
REPLACE(STR(?i)
".*Q"
"Q")) AS ?QuickStatements)
WITH {
SELECT DISTINCT ?ta ?n_formatted ?taxa_chem WHERE {
#SERVICE bd:sample { ?ta wdt:P31 wd:Q11173 . bd:serviceParam bd:sample.limit 1000 }
?ta wdt:P31 wd:Q11173 .
SERVICE bd:sample { ?taxa_int wdt:P171 wd:Q173756 . bd:serviceParam bd:sample.limit 2000 }
?taxa_chem wdt:P171 ?taxa_int .
#?taxa_chem (wdt:P171*) wd:Q173756 .
?ta p:P703 ?stmt.
?stmt ps:P703 ?taxa_chem.
?ta rdfs:label ?n.
FILTER (LANG(?n) = "en") .
BIND(REPLACE(REPLACE(REPLACE(STR(?n),"@en",""),"\\+",""),"\\-","") AS ?n_formatted) .
}
LIMIT 40
}
AS %t
WITH
{ SELECT ?i ?n_formatted ?ta ?ti ?taxa ?taxa_chem  WHERE {
INCLUDE %t
SERVICE wikibase:mwapi
{
bd:serviceParam wikibase:endpoint "www.wikidata.org";
wikibase:api "Generator";
mwapi:generator "search";
mwapi:gsrsearch ?n_formatted ;
mwapi:gsrlimit "max".
?i wikibase:apiOutputItem mwapi:title.
}
VALUES ?ref_journal {
    wd:Q1884753
    wd:Q165584
}
?i wdt:P1433 ?ref_journal.
?i wdt:P1476 ?ti .
?i wdt:P921 ?taxa.
?taxa wdt:P105 wd:Q7432.
#?taxa (wdt:P171*) wd:Q173756 .
FILTER (?taxa != ?taxa_chem) .
}
}
AS %i
WHERE {
INCLUDE %i
INCLUDE %t
BIND (SUBSTR(?ti
STRLEN(STRBEFORE(REPLACE(?ti
?n_formatted
"=HELP="
"i")
"=HELP=")) +1
STRLEN(?n_formatted)) AS ?a)
SERVICE wikibase:label { bd:serviceParam wikibase:language "en". }
}

# Compounds and ref from the Actinobacteria phylum 
https://w.wiki/5kCC
with Chembl ids

https://w.wiki/5kDz

# NP with drug interactions  
https://w.wiki/5o9R



# Query for simon 
https://w.wiki/5rxD


# Researcher in the field of X working in an organisation located in country Z filter by sex Y

https://w.wiki/65F4



# Organisms containing 7-methyl-2,3,5,7a-tetrahydro-1H-pyrrolizin-1-ol

SMILES CC1=CCN2CCC(O)C12

## Aggregate producing organisms at the superior taxa level
count and order descending
https://w.wiki/6w6J
## Return all referenced pairs metadata
https://w.wiki/6w7R
## Count individual compounds
https://w.wiki/6w7S = 369

# Organisms containing 7-methyl-2,3,5,7a-tetrahydro-1H-pyrrolizine-1,1-diol

SMILES CC1=CCN2CCC(O)(O)C12

## Aggregate producing organisms at the superior taxa level
count and order descending
https://w.wiki/6w6R
## Return all referenced pairs metadata
https://w.wiki/6w7L
## Count individual compounds
https://w.wiki/6w7N = 0

# Organisms containing 7-methyl-2,3,5,7a-tetrahydro-1H-pyrrolizine-1,3-diol

SMILES CC1=CCN2C(O)CC(O)C12

## Aggregate producing organisms at the superior taxa level
count and order descending
https://w.wiki/6w6T
## Return all referenced pairs metadata
https://w.wiki/6w7G
## Count individual compounds
https://w.wiki/6w7H = 0

# Organisms containing 1-hydroxy-7-methyl-1,2,3,4,5,7a-hexahydropyrrolizin-4-ium-4-olate

SMILES CC1=CC[N+]2([O-])CCC(O)C12

## Aggregate producing organisms at the superior taxa level
count and order descending
https://w.wiki/6w6a
## Return all referenced pairs metadata
https://w.wiki/6w73
## Count individual compounds
https://w.wiki/6w77 = 45




### containing taxa + ref for a given IK

SELECT  ?compound ?InChIKey ?taxon ?taxonLabel ?reference ?referenceLabel WITH {
  SELECT ?queryKey ?srsearch ?filter WHERE {
    VALUES ?queryKey {
      "KWIUHFFTVRNATP"
    }
    BIND (CONCAT(substr($queryKey,1,14)
" haswbstatement:P235") AS ?srsearch)
    BIND (CONCAT("^"
substr($queryKey,1,14)) AS ?filter)
  }
} AS %comps WITH {
  SELECT ?compound ?InChIKey WHERE {
    INCLUDE %comps
            SERVICE wikibase:mwapi {
              bd:serviceParam wikibase:endpoint "www.wikidata.org";
                              wikibase:api "Search";
                              mwapi:srsearch ?srsearch;
                              mwapi:srlimit "max".
              ?compound wikibase:apiOutputItem mwapi:title.
            }
    ?compound wdt:P235 ?InChIKey .
    FILTER (REGEX(STR(?InChIKey)
?filter))
  }
} AS %compounds
WHERE {
  INCLUDE %compounds
            {
    ?compound p:P703 ?stmt.
    ?stmt ps:P703 ?taxon.
  }
  OPTIONAL {
    ?stmt prov:wasDerivedFrom ?ref.
    ?ref pr:P248 ?reference.
  }         
  SERVICE wikibase:label { bd:serviceParam wikibase:language "en". }
}
LIMIT 10000



SELECT  ?compound ?InChIKey ?taxon ?taxonLabel ?reference ?referenceLabel WITH {
  SELECT ?queryKey ?srsearch ?filter WHERE {
    VALUES ?queryKey {
      "KWIUHFFTVRNATP"
    }
    BIND (CONCAT(substr($queryKey,1,14)
" haswbstatement:P235") AS ?srsearch)
    BIND (CONCAT("^"
substr($queryKey,1,14)) AS ?filter)
  }
} AS %comps WITH {
  SELECT ?compound ?InChIKey WHERE {
    INCLUDE %comps
            SERVICE wikibase:mwapi {
              bd:serviceParam wikibase:endpoint "www.wikidata.org";
                              wikibase:api "Search";
                              mwapi:srsearch ?srsearch;
                              mwapi:srlimit "max".
              ?compound wikibase:apiOutputItem mwapi:title.
            }
    ?compound wdt:P235 ?InChIKey .
    FILTER (REGEX(STR(?InChIKey)
?filter))
  }
} AS %compounds
WHERE {
  INCLUDE %compounds
   VALUES ?taxon {
      wd:Q1303946
    }
  {
    ?compound p:P703 ?stmt.
    ?stmt ps:P703 ?taxon.
  }
  OPTIONAL {
    ?stmt prov:wasDerivedFrom ?ref.
    ?ref pr:P248 ?reference.
    #?reference wdt:P921 ?main_subject.
    #?main_subject ps:P921 ?taxon_ref.
  } 
  #FILTER ( ?taxon = ?match)
  SERVICE wikibase:label { bd:serviceParam wikibase:language "en". }
}
LIMIT 10000

https://query.wikidata.org/#SELECT%20%3Ftaxon_name%20%3Fcompound%20%3FInChIKey%20WITH%20%7B%0A%20%20SELECT%20%3FqueryKey%20%3Fsrsearch%20%3Ffilter%20WHERE%20%7B%0A%20%20%20%20VALUES%20%3FqueryKey%20%7B%0A%20%20%20%20%20%20%22KZJWDPNRJALLNS-VJSFXXLFSA-N%22%20%23%20beta-sitosterol%0A%20%20%20%20%7D%0A%20%20%20%20BIND%20%28CONCAT%28substr%28%24queryKey%2C1%2C14%29%2C%20%22%20haswbstatement%3AP235%22%29%20AS%20%3Fsrsearch%29%0A%20%20%20%20BIND%20%28CONCAT%28%22%5E%22%2C%20substr%28%24queryKey%2C1%2C14%29%29%20AS%20%3Ffilter%29%0A%20%20%7D%0A%7D%20AS%20%25comps%20WITH%20%7B%0A%20%20SELECT%20%3Fcompound%20%3FInChIKey%20WHERE%20%7B%0A%20%20%20%20INCLUDE%20%25comps%0A%20%20%20%20%20%20%20%20%20%20%20%20SERVICE%20wikibase%3Amwapi%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20bd%3AserviceParam%20wikibase%3Aendpoint%20%22www.wikidata.org%22%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20wikibase%3Aapi%20%22Search%22%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20mwapi%3Asrsearch%20%3Fsrsearch%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20mwapi%3Asrlimit%20%22max%22.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Fcompound%20wikibase%3AapiOutputItem%20mwapi%3Atitle.%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%3Fcompound%20wdt%3AP235%20%3FInChIKey%20.%0A%20%20%20%20FILTER%20%28REGEX%28STR%28%3FInChIKey%29%2C%20%3Ffilter%29%29%0A%20%20%20%20FILTER%20%28%3FInChIKey%20%21%3D%20%3FqueryKey%29%0A%20%20%7D%0A%7D%20AS%20%25compounds%0AWHERE%20%7B%0A%20%20INCLUDE%20%25compounds%0A%20%20%20%20%20%20%20%20%20%20%3Fcompound%20%28wdt%3AP703%2Fwdt%3AP225%29%20%3Ftaxon_name.%0A%20%20SERVICE%20wikibase%3Alabel%20%7B%20bd%3AserviceParam%20wikibase%3Alanguage%20%22en%22.%20%7D%0A%7D%0ALIMIT%2010000



https://query.wikidata.org/index.html#%23Goats%0ASELECT%20%3Fitem%20%3FitemLabel%20%0AWHERE%20%0A%7B%0A%20%20%3Fitem%20wdt%3AP31%20wd%3AQ2934.%0A%20%20SERVICE%20wikibase%3Alabel%20%7B%20bd%3AserviceParam%20wikibase%3Alanguage%20%22%5BAUTO_LANGUAGE%5D%2Cen%22.%20%7D%0A%7D

https://query.wikidata.org/embed.html#%23Goats%0ASELECT%20%3Fitem%20%3FitemLabel%20%0AWHERE%20%0A%7B%0A%20%20%3Fitem%20wdt%3AP31%20wd%3AQ2934.%0A%20%20SERVICE%20wikibase%3Alabel%20%7B%20bd%3AserviceParam%20wikibase%3Alanguage%20%22%5BAUTO_LANGUAGE%5D%2Cen%22.%20%7D%0A%7D



https://query.wikidata.org/embed.html#SELECT%20%20%3Fcompound%20%3FInChIKey%20%3Ftaxon%20%3FtaxonLabel%20%3Freference%20%3FreferenceLabel%20WITH%20%7B%0A%20%20SELECT%20%3FqueryKey%20%3Fsrsearch%20%3Ffilter%20WHERE%20%7B%0A%20%20%20%20VALUES%20%3FqueryKey%20%7B%0A%20%20%20%20%20%20%22SVFKZPQPMMZHLZ%22%0A%20%20%20%20%7D%0A%20%20%20%20BIND%20%28CONCAT%28substr%28%24queryKey%2C1%2C14%29%2C%20%22%20haswbstatement%3AP235%22%29%20AS%20%3Fsrsearch%29%0A%20%20%20%20BIND%20%28CONCAT%28%22%5E%22%2C%20substr%28%24queryKey%2C1%2C14%29%29%20AS%20%3Ffilter%29%0A%20%20%7D%0A%7D%20AS%20%25comps%20WITH%20%7B%0A%20%20SELECT%20%3Fcompound%20%3FInChIKey%20WHERE%20%7B%0A%20%20%20%20INCLUDE%20%25comps%0A%20%20%20%20%20%20%20%20%20%20%20%20SERVICE%20wikibase%3Amwapi%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20bd%3AserviceParam%20wikibase%3Aendpoint%20%22www.wikidata.org%22%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20wikibase%3Aapi%20%22Search%22%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20mwapi%3Asrsearch%20%3Fsrsearch%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20mwapi%3Asrlimit%20%22max%22.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Fcompound%20wikibase%3AapiOutputItem%20mwapi%3Atitle.%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%3Fcompound%20wdt%3AP235%20%3FInChIKey%20.%0A%20%20%20%20FILTER%20%28REGEX%28STR%28%3FInChIKey%29%2C%20%3Ffilter%29%29%0A%20%20%7D%0A%7D%20AS%20%25compounds%0AWHERE%20%7B%0A%20%20INCLUDE%20%25compounds%0A%20%20%20VALUES%20%3Ftaxon%20%7B%0A%20%20%20%20%20%20wd%3AQ136894%0A%20%20%20%20%7D%0A%20%20%7B%0A%20%20%20%20%3Fcompound%20p%3AP703%20%3Fstmt.%0A%20%20%20%20%3Fstmt%20ps%3AP703%20%3Ftaxon.%0A%20%20%7D%0A%20%20OPTIONAL%20%7B%0A%20%20%20%20%3Fstmt%20prov%3AwasDerivedFrom%20%3Fref.%0A%20%20%20%20%3Fref%20pr%3AP248%20%3Freference.%0A%20%20%20%20%23%3Freference%20wdt%3AP921%20%3Fmain_subject.%0A%20%20%20%20%23%3Fmain_subject%20ps%3AP921%20%3Ftaxon_ref.%0A%20%20%7D%20%0A%20%20%23FILTER%20%28%20%3Ftaxon%20%3D%20%3Fmatch%29%0A%20%20SERVICE%20wikibase%3Alabel%20%7B%20bd%3AserviceParam%20wikibase%3Alanguage%20%22en%22.%20%7D%0A%7D%0ALIMIT%2010000


### Cleaned queryies cpds per taxa

https://w.wiki/7WL3


## Filter by atoms in MF

https://w.wiki/7WL9

With a regex substring in the mf 

https://w.wiki/7WLb

## Wd all

https://w.wiki/7Woz

## Most described taxon
Excluding humans + only at the species level

https://w.wiki/7YDr


## sr WD by MF

https://w.wiki/9AAN

same with refs

https://w.wiki/9AAe


## Genome
proteome
metabolome

https://w.wiki/9qZT


### CRetrieve list of OTT id from inat taxon id,

https://w.wiki/rL

https://w.wiki/9tCe

### Qlever WD OTT id for LOTUS taxa

https://qlever.cs.uni-freiburg.de/wikidata/TqdMNf

###  WD taxa lacking OTT ids

https://qlever.cs.uni-freiburg.de/wikidata/ThyZSf

2024.07.12 2024-07-12 09:47 > 1'755'037

### Qlever LOTUS chemical count

https://qlever.cs.uni-freiburg.de/wikidata/0Slm8l

227,090
"227090"^^<http://www.w3.org/2001/XMLSchema#int>

### Qlever LOTUS chemical count with Isomeric SMILES

https://qlever.cs.uni-freiburg.de/wikidata/wnFz75

172,598
"172598"^^<http://www.w3.org/2001/XMLSchema#int>

### Qlever LOTUS organisms count 

https://qlever.cs.uni-freiburg.de/wikidata/1e5Rdg

37,471

### Qlever LOTUS organisms count with taxon name

https://qlever.cs.uni-freiburg.de/wikidata/f0F9Y4

37,461
"37461"^^<http://www.w3.org/2001/XMLSchema#int>


## Mind the famous WD graph split regarding scholarly articles  

Why is that not working https://w.wiki/Eexo
5 min

eyes

Antiviral chlorinated daphnane diterpenoid orthoesters from the bark and wood of Trigonostemon cherrieri
scientific article published on 29 August 2012
www.wikidata.org

For https://www.wikidata.org/wiki/Q40275796
5 min

E

Egon
because all the scholarly articles moved to a different SPARQL endpoint #wikidataSplit
4 min

While that https://w.wiki/Eexs works
4 min

for https://www.wikidata.org/wiki/Q103883147
4 min

E

Egon
e.g. use https://w.wiki/Eext
4 min

heart

ahhh the famous Split
4 min

Egon
or...

E

https://w.wiki/Eexz
2 min

+1

Thanks, i'll  note these down once for all. Not the first time that I forget this split


### Count molecule-taxon-ref tuples in LOTUS

https://qlever.dev/wikidata/q3SRt7

### List molecule-taxon-ref tuples in LOTUS

https://qlever.dev/wikidata/HqZC6p

### MetrinKG

Tripartie interaction with Betula + wd lookup

https://qlever.earthmetabolome.org/metrin-kg/swBuop

Same with Taxonomy lookup

https://qlever.earthmetabolome.org/metrin-kg/WayY7B


Same no wd taxon retrioeval

https://qlever.earthmetabolome.org/metrin-kg/BBQxuv


2) All direct interactions involving Betula (everything, no tripartite constraint)
This answers: “Do I have all interaction records that touch Betula at all?”
(Useful to compare against what subset ends up in tripartite chains.)


https://qlever.earthmetabolome.org/metrin-kg/5PGcG8


### Directional Interaction Type Summary for a Fixed Taxon (Local Aggregation Only)
Short Description
This query summarizes all direct interactions involving a fixed taxon in the EMI knowledge graph. It counts interaction statements grouped by interaction type and explicitly separates cases where the fixed taxon acts as source versus target. The query runs entirely locally (no federated Wikidata calls), ensuring fast execution while providing a directional interaction profile of the selected taxon.

https://qlever.earthmetabolome.org/metrin-kg/ORAG5S

https://qlever.earthmetabolome.org/metrin-kg/?query=PREFIX+wd%3A++%3Chttp%3A%2F%2Fwww.wikidata.org%2Fentity%2F%3E%0APREFIX+rdfs%3A%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0APREFIX+emi%3A+%3Chttps%3A%2F%2Fw3id.org%2Femi%23%3E%0A%0ASELECT%0A++%3Fdirection%0A++%3FintxnType%0A++%28SAMPLE%28%3Flbl%29+AS+%3FintxnTypeLabel%29%0A++%28COUNT%28%2A%29+AS+%3FnInteractions%29%0AWHERE+%7B%0A++VALUES+%3Ffixed_WD+%7B+wd%3AQ156895+%7D%0A++%3FfixedNode+emi%3AinTaxon+%3Ffixed_WD+.%0A%0A++%7B+%3Fintxn+emi%3AhasSource+%3FfixedNode+%3B%0A++++++++++emi%3AisClassifiedWith+%3FintxnType+.%0A++++BIND%28%22fixed_is_source%22+AS+%3Fdirection%29%0A+%7D+UNION+%7B+%3Fintxn+emi%3AhasTarget+%3FfixedNode+%3B%0A++++++++++emi%3AisClassifiedWith+%3FintxnType+.%0A++++BIND%28%22fixed_is_target%22+AS+%3Fdirection%29%0A+%7D%0A%0A++OPTIONAL+%7B+%3FintxnType+rdfs%3Alabel+%3Flbl+.+%7D%0A%7D%0AGROUP+BY+%3Fdirection+%3FintxnType%0AORDER+BY+DESC%28%3FnInteractions%29%0A


### MetrinkG

https://qlever.earthmetabolome.org/metrin-kg/0tB2id

Which plants eat plants ?

### Directional Interaction Network of a Fixed Taxon with Taxonomic Enrichment
Short Description
This query retrieves all direct interactions involving a fixed taxon, explicitly indicating for each row whether the fixed taxon acts as source or target in the interaction. It returns the interaction type label, the interacting partner taxon, and the taxon-level source/target assignments. Both the fixed and partner taxa are enriched via federated Wikidata queries with taxonomic metadata (scientific name P225, family, and domain), enabling directional ecological network analysis with hierarchical taxonomic context.
https://qlever.earthmetabolome.org/metrin-kg/YRhcG1


https://qlever.earthmetabolome.org/metrin-kg/?query=PREFIX+wd%3A++%3Chttp%3A%2F%2Fwww.wikidata.org%2Fentity%2F%3E%0APREFIX+rdfs%3A%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0APREFIX+wdt%3A+%3Chttp%3A%2F%2Fwww.wikidata.org%2Fprop%2Fdirect%2F%3E%0APREFIX+emi%3A+%3Chttps%3A%2F%2Fw3id.org%2Femi%23%3E%0A%0ASELECT+DISTINCT%0A++%23+fixed+taxon%0A++%3Ffixed_WD+%3FfixedName+%3FfixedFamilyName+%3FfixedDomainName%0A%0A++%23+direction+%2B+interaction+type%0A++%3Fdir%0A++%3FintxnTypeLabel%0A%0A++%23+explicit+source%2Ftarget+%28taxon-level%29+per+row%0A++%23+%3Fsource_WD+%3Ftarget_WD%0A%0A++%23+partner+taxon+%28the+%22other%22+one+in+the+interaction%29%0A++%3Fpartner_WD+%3FpartnerName+%3FpartnerFamilyName+%3FpartnerDomainName%0AWHERE+%7B%0A++VALUES+%3Ffixed_WD+%7B+wd%3AQ2715913+%7D%0A%0A++%3FfixedNode+emi%3AinTaxon+%3Ffixed_WD+.%0A%0A++%7B+%23+fixed+is+source%0A++++%3Fintxn+emi%3AhasSource+%3FfixedNode+%3B%0A++++++++++emi%3AhasTarget+%3FpartnerNode+%3B%0A++++++++++emi%3AisClassifiedWith+%3FintxnType+.%0A++++BIND%28%22fixed_is_source%22+AS+%3Fdir%29%0A%0A++++%3FfixedNode+++emi%3AinTaxon+%3Fsource_WD+.%0A++++%3FpartnerNode+emi%3AinTaxon+%3Ftarget_WD+.%0A+%7D+UNION+%7B+%23+fixed+is+target%0A++++%3Fintxn+emi%3AhasSource+%3FpartnerNode+%3B%0A++++++++++emi%3AhasTarget+%3FfixedNode+%3B%0A++++++++++emi%3AisClassifiedWith+%3FintxnType+.%0A++++BIND%28%22fixed_is_target%22+AS+%3Fdir%29%0A%0A++++%3FpartnerNode+emi%3AinTaxon+%3Fsource_WD+.%0A++++%3FfixedNode+++emi%3AinTaxon+%3Ftarget_WD+.%0A+%7D%0A%0A++%23+partner+is+always+the+non-fixed+node%0A++%3FpartnerNode+emi%3AinTaxon+%3Fpartner_WD+.%0A++FILTER%28%3Fpartner_WD+%21%3D+%3Ffixed_WD%29%0A%0A++OPTIONAL+%7B+%3FintxnType+rdfs%3Alabel+%3FintxnTypeLabel+.+%7D%0A%0A++%23+%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0A++%23+Wikidata+taxonomy+for+FIXED+taxon+%28role-split%29%0A++%23+%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0A++OPTIONAL+%7B%0A++++SERVICE+%3Chttps%3A%2F%2Fqlever.dev%2Fapi%2Fwikidata%3E+%7B%0A++++++VALUES+%3Ffixed_WD+%7B+wd%3AQ2715913+%7D%0A%0A++++++OPTIONAL+%7B+%3Ffixed_WD+wdt%3AP225+%3FfixedName+.+%7D%0A%0A++++++OPTIONAL+%7B+%3Ffixed_WD+wdt%3AP171%2A+%3FfixedFamily+.%0A++++++++%3FfixedFamily+wdt%3AP105+wd%3AQ35409+.%0A++++++++%3FfixedFamily+wdt%3AP225+%3FfixedFamilyName+.%0A+%7D%0A%0A++++++OPTIONAL+%7B+%3Ffixed_WD+wdt%3AP171%2A+%3FfixedDomain+.%0A++++++++%3FfixedDomain+wdt%3AP105+wd%3AQ36732+.%0A++++++++%3FfixedDomain+wdt%3AP225+%3FfixedDomainName+.%0A+%7D%0A++++%7D%0A++%7D%0A%0A++%23+%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0A++%23+Wikidata+taxonomy+for+PARTNER+taxon+%28role-split%29%0A++%23+%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0A++OPTIONAL+%7B%0A++++SERVICE+%3Chttps%3A%2F%2Fqlever.dev%2Fapi%2Fwikidata%3E+%7B%0A++++++VALUES+%3Fpartner_WD+%7B+UNDEF+%7D%0A%0A++++++OPTIONAL+%7B+%3Fpartner_WD+wdt%3AP225+%3FpartnerName+.+%7D%0A%0A++++++OPTIONAL+%7B+%3Fpartner_WD+wdt%3AP171%2A+%3FpartnerFamily+.%0A++++++++%3FpartnerFamily+wdt%3AP105+wd%3AQ35409+.%0A++++++++%3FpartnerFamily+wdt%3AP225+%3FpartnerFamilyName+.%0A+%7D%0A%0A++++++OPTIONAL+%7B+%3Fpartner_WD+wdt%3AP171%2A+%3FpartnerDomain+.%0A++++++++%3FpartnerDomain+wdt%3AP105+wd%3AQ36732+.%0A++++++++%3FpartnerDomain+wdt%3AP225+%3FpartnerDomainName+.%0A+%7D%0A++++%7D%0A++%7D%0A%7D%0A



### Fix taxon - all interactions - all targets -eats - plants

This query allows to fix a taxon (using WDQID) retrieve all interacting organisms and all plants connected to the interacting organisms by a eat relationship.
https://qlever.earthmetabolome.org/metrin-kg/7kz9Uf


### Tripartite Ecological Interaction and Plant Metabolite Retrieval for a Fixed Taxon
Short Description

This query retrieves a multi-level ecological network centered on a fixed taxon. It:
- Identifies all taxa interacting with the fixed taxon (any interaction type).
- Retrieves taxa eaten by those interacting taxa (RO_0002470).
- Filters the eaten taxa to a specified clade (currently Archaeplastida / plants).
- Enriches all taxa (fixed, interacting, eaten) with taxonomic metadata from Wikidata (taxon name, family, domain).
- Retrieves all chemical compounds (wdt:P703) reported to be produced by the eaten taxa, including their Wikidata QID, English label, canonical SMILES (P233), and mass (P2067).
The query combines local ecological interaction data (EMI graph) with federated Wikidata queries using role-separated SERVICE blocks to optimize performance and avoid timeouts.

https://qlever.earthmetabolome.org/metrin-kg/sDLjL0

### Frequency Ranking of Sub-400 Da Plant Metabolites in the Trophic Network of a Fixed Taxon
Short Description
This query constructs a two-step ecological network centered on a fixed taxon:
(1) it retrieves all taxa interacting with the fixed taxon (any interaction type), and
(2) identifies taxa they eat via RO_0002470 (eats).
The eaten taxa are restricted to a specified clade (currently Archaeplastida / plants). For each such plant taxon, the query retrieves chemical compounds reported as produced by that taxon (wdt:P703), filters compounds with molecular mass (P2067) below 400 Da, and aggregates results by compound QID.
The output ranks compounds by the number of distinct producing plant taxa, thereby identifying the most taxonomically widespread low-molecular-weight metabolites within the trophic neighborhood of the fixed taxon_ref.


https://qlever.earthmetabolome.org/metrin-kg/5pioIC

### Directional Interaction–Herbivory Chain with Plant Metabolite Enrichment for a Fixed Taxon
Short Description
This query constructs a two-step ecological interaction chain centered on a fixed taxon:
any taxon → (any interaction where fixed taxon is target) → fixed taxon → (eats) → plant taxon
The left-hand taxa are not restricted to parasitoids; they include all taxa that interact with the fixed taxon as a target, regardless of interaction type.
The query:
Retrieves all taxa interacting with the fixed taxon as target (any relation type)
Identifies plant taxa eaten by the fixed taxon (RO_0002470)
Restricts eaten taxa to plants (Archaeplastida lineage)
Enriches all taxa (left, fixed, plant) with Wikidata taxonomy (scientific name P225, family, domain)
Retrieves chemical compounds (P703) produced by the eaten plant taxa, including canonical SMILES (P233) and molecular mass (P2067)
This enables analysis of interaction context and downstream herbivory–metabolite networks centered on a chosen intermediary taxon.

https://qlever.earthmetabolome.org/metrin-kg/hwyrI9

https://qlever.earthmetabolome.org/metrin-kg/?query=PREFIX+wd%3A+++%3Chttp%3A%2F%2Fwww.wikidata.org%2Fentity%2F%3E%0APREFIX+rdfs%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0APREFIX+wdt%3A++%3Chttp%3A%2F%2Fwww.wikidata.org%2Fprop%2Fdirect%2F%3E%0APREFIX+emi%3A++%3Chttps%3A%2F%2Fw3id.org%2Femi%23%3E%0A%0ASELECT+DISTINCT%0A++%23+any+taxon+%28source+of+left+interaction%29%0A++%3Fany_WD+%3FanyName+%3FanyFamilyName+%3FanyDomainName%0A%0A++%23+left+interaction+%28any+type%2C+fixed+taxon+is+TARGET%29%0A++%3FleftIntxnLabel%0A%0A++%23+fixed+intermediary+taxon%0A++%3Ffixed_WD+%3FfixedName+%3FfixedFamilyName+%3FfixedDomainName%0A%0A++%23+right+interaction%3A+eats%0A++%3FeatsLabel%0A%0A++%23+eaten+plant+taxon+%28target+of+eats%29%0A++%3Fplant_WD+%3FplantName+%3FplantFamilyName+%3FplantDomainName%0A%0A++%23+compounds+produced+by+eaten+plant%0A++%3Fchem_WD+%3FchemLabel+%3Fchem_WD_canonical_SMILES+%3Fchem_WD_mass%0AWHERE+%7B%0A%0A++%23+%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0A++%23+%28A%29+Local+chain+at+TAXON+level%3A%0A++%23+++++any+--%28any+interaction%2C+fixed+is+target%29--%3E+fixed%0A++%23+++++fixed+--eats--%3E+plant%0A++%23+++++%28allow+different+sample+nodes+for+fixed%29%0A++%23+%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0A++%7B%0A++++SELECT+DISTINCT%0A++++++%3Ffixed_WD+%3Fany_WD+%3Fplant_WD+%3FleftIntxnLabel%0A++++WHERE+%7B%0A++++++VALUES+%3Ffixed_WD+%7B+wd%3AQ2715913+%7D+++%23+%3C--+FIX+TAXON+HERE%0A%0A++++++%23+LEFT%3A+fixed+taxon+is+target+%28use+a+fixed-node+instance+for+this+leg%29%0A++++++%3FfixedNode_left+emi%3AinTaxon+%3Ffixed_WD+.%0A++++++%3Fi_left+emi%3AhasSource+%3FanyNode+%3B%0A++++++++++++++emi%3AhasTarget+%3FfixedNode_left+%3B%0A++++++++++++++emi%3AisClassifiedWith+%3FleftIntxnType+.%0A++++++OPTIONAL+%7B+%3FleftIntxnType+rdfs%3Alabel+%3FleftIntxnLabel+.+%7D%0A%0A++++++%3FanyNode+emi%3AinTaxon+%3Fany_WD+.%0A++++++FILTER%28%3Fany_WD+%21%3D+%3Ffixed_WD%29%0A%0A++++++%23+RIGHT%3A+fixed+taxon+eats+plant+%28use+potentially+different+fixed-node+instance%29%0A++++++%3FfixedNode_right+emi%3AinTaxon+%3Ffixed_WD+.%0A++++++%3Fi_right+emi%3AhasSource+%3FfixedNode_right+%3B%0A+++++++++++++++emi%3AhasTarget+%3FplantNode+%3B%0A+++++++++++++++emi%3AisClassifiedWith+%3Chttp%3A%2F%2Fpurl.obolibrary.org%2Fobo%2FRO_0002470%3E+.%0A%0A++++++%3FplantNode+emi%3AinTaxon+%3Fplant_WD+.%0A++++++FILTER%28%3Fplant_WD+%21%3D+%3Ffixed_WD%29%0A++++%7D%0A++++%23+paginate+if+needed%3A%0A++++%23+LIMIT+5000%0A++++%23+OFFSET+0%0A++%7D%0A%0A++%23+%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0A++%23+%28B0%29+Keep+only+plants+for+the+eaten+taxon+%28Archaeplastida%29%0A++%23+%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0A++SERVICE+%3Chttps%3A%2F%2Fqlever.dev%2Fapi%2Fwikidata%3E+%7B%0A++++VALUES+%3Fplant_WD+%7B+UNDEF+%7D%0A++++%3Fplant_WD+wdt%3AP171%2A+wd%3AQ879246+.%0A++%7D%0A%0A++%23+label+for+eats%0A++%3Chttp%3A%2F%2Fpurl.obolibrary.org%2Fobo%2FRO_0002470%3E+rdfs%3Alabel+%3FeatsLabel+.%0A%0A++%23+%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0A++%23+%28C1%29+any+taxon+taxonomy+%28role-split%29%0A++%23+%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0A++OPTIONAL+%7B%0A++++SERVICE+%3Chttps%3A%2F%2Fqlever.dev%2Fapi%2Fwikidata%3E+%7B%0A++++++VALUES+%3Fany_WD+%7B+UNDEF+%7D%0A++++++OPTIONAL+%7B+%3Fany_WD+wdt%3AP225+%3FanyName+.+%7D%0A%0A++++++OPTIONAL+%7B+%3Fany_WD+wdt%3AP171%2A+%3FanyFamily+.%0A++++++++%3FanyFamily+wdt%3AP105+wd%3AQ35409+.%0A++++++++%3FanyFamily+wdt%3AP225+%3FanyFamilyName+.%0A+%7D%0A%0A++++++OPTIONAL+%7B+%3Fany_WD+wdt%3AP171%2A+%3FanyDomain+.%0A++++++++%3FanyDomain+wdt%3AP105+wd%3AQ36732+.%0A++++++++%3FanyDomain+wdt%3AP225+%3FanyDomainName+.%0A+%7D%0A++++%7D%0A++%7D%0A%0A++%23+%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0A++%23+%28C2%29+fixed+taxon+taxonomy+%28role-split%29%0A++%23+%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0A++OPTIONAL+%7B%0A++++SERVICE+%3Chttps%3A%2F%2Fqlever.dev%2Fapi%2Fwikidata%3E+%7B%0A++++++VALUES+%3Ffixed_WD+%7B+wd%3AQ2715913+%7D%0A++++++OPTIONAL+%7B+%3Ffixed_WD+wdt%3AP225+%3FfixedName+.+%7D%0A%0A++++++OPTIONAL+%7B+%3Ffixed_WD+wdt%3AP171%2A+%3FfixedFamily+.%0A++++++++%3FfixedFamily+wdt%3AP105+wd%3AQ35409+.%0A++++++++%3FfixedFamily+wdt%3AP225+%3FfixedFamilyName+.%0A+%7D%0A%0A++++++OPTIONAL+%7B+%3Ffixed_WD+wdt%3AP171%2A+%3FfixedDomain+.%0A++++++++%3FfixedDomain+wdt%3AP105+wd%3AQ36732+.%0A++++++++%3FfixedDomain+wdt%3AP225+%3FfixedDomainName+.%0A+%7D%0A++++%7D%0A++%7D%0A%0A++%23+%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0A++%23+%28C3%29+plant+taxonomy+%28role-split%29%0A++%23+%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0A++OPTIONAL+%7B%0A++++SERVICE+%3Chttps%3A%2F%2Fqlever.dev%2Fapi%2Fwikidata%3E+%7B%0A++++++VALUES+%3Fplant_WD+%7B+UNDEF+%7D%0A++++++OPTIONAL+%7B+%3Fplant_WD+wdt%3AP225+%3FplantName+.+%7D%0A%0A++++++OPTIONAL+%7B+%3Fplant_WD+wdt%3AP171%2A+%3FplantFamily+.%0A++++++++%3FplantFamily+wdt%3AP105+wd%3AQ35409+.%0A++++++++%3FplantFamily+wdt%3AP225+%3FplantFamilyName+.%0A+%7D%0A%0A++++++OPTIONAL+%7B+%3Fplant_WD+wdt%3AP171%2A+%3FplantDomain+.%0A++++++++%3FplantDomain+wdt%3AP105+wd%3AQ36732+.%0A++++++++%3FplantDomain+wdt%3AP225+%3FplantDomainName+.%0A+%7D%0A++++%7D%0A++%7D%0A%0A++%23+%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0A++%23+%28C4%29+Compounds+produced+by+eaten+plant+%28P703%29%0A++%23+%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0A++OPTIONAL+%7B%0A++++SERVICE+%3Chttps%3A%2F%2Fqlever.dev%2Fapi%2Fwikidata%3E+%7B%0A++++++VALUES+%3Fplant_WD+%7B+UNDEF+%7D%0A%0A++++++%3Fchem_WD+wdt%3AP703+%3Fplant_WD+%3B%0A++++++++++++++wdt%3AP233+%3Fchem_WD_canonical_SMILES+%3B%0A++++++++++++++wdt%3AP2067+%3Fchem_WD_mass+.%0A%0A++++++OPTIONAL+%7B+%3Fchem_WD+rdfs%3Alabel+%3FchemLabel+.%0A++++++++FILTER%28LANG%28%3FchemLabel%29+%3D+%22en%22%29%0A+%7D%0A++++%7D%0A++%7D%0A%7D%0A

### Configurable Interaction–Herbivory Chain with Plant Metabolite Enrichment
Short Description
This query constructs a directional ecological chain centered on a fixed intermediary taxon:
any taxon → (selected interaction types, fixed taxon as target) → fixed taxon → (eats) → plant taxon
The left interaction is configurable via a VALUES block, allowing restriction to specific RO relations (e.g., pathogenOf, allelopathOf, parasiteOf, preysOn).
The query:
Retrieves taxa interacting with the fixed taxon under selected relation types
Identifies plant taxa eaten by the fixed taxon (RO_0002470)
Filters eaten taxa to Archaeplastida (plants)
Enriches all taxa (left, fixed, plant) with Wikidata taxonomy (scientific name P225, family, domain)
Retrieves chemical compounds (P703) produced by the eaten plant taxa, including canonical SMILES and molecular mass
This enables targeted analysis of specific ecological interaction classes and their downstream herbivory–metabolite networks.

https://qlever.earthmetabolome.org/metrin-kg/dcnZT3

https://qlever.earthmetabolome.org/metrin-kg/?query=PREFIX+wd%3A+++%3Chttp%3A%2F%2Fwww.wikidata.org%2Fentity%2F%3E%0APREFIX+rdfs%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0APREFIX+wdt%3A++%3Chttp%3A%2F%2Fwww.wikidata.org%2Fprop%2Fdirect%2F%3E%0APREFIX+emi%3A++%3Chttps%3A%2F%2Fw3id.org%2Femi%23%3E%0A%0ASELECT+DISTINCT%0A++%23+left+taxon+%28source+of+left+interaction%29%0A++%3Fany_WD+%3FanyName+%3FanyFamilyName+%3FanyDomainName%0A%0A++%23+left+interaction+label+%28restricted+via+VALUES%29%0A++%3FleftIntxnLabel%0A%0A++%23+fixed+intermediary+taxon%0A++%3Ffixed_WD+%3FfixedName+%3FfixedFamilyName+%3FfixedDomainName%0A%0A++%23+right+interaction%3A+eats%0A++%3FeatsLabel%0A%0A++%23+eaten+plant+taxon+%28target+of+eats%29%0A++%3Fplant_WD+%3FplantName+%3FplantFamilyName+%3FplantDomainName%0A%0A++%23+compounds+produced+by+eaten+plant%0A++%3Fchem_WD+%3FchemLabel+%3Fchem_WD_canonical_SMILES+%3Fchem_WD_mass%0AWHERE+%7B%0A%0A++%23+%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0A++%23+%28A%29+Local+chain+at+TAXON+level%3A%0A++%23+++++any+--%28filtered+interaction%2C+fixed+is+target%29--%3E+fixed%0A++%23+++++fixed+--eats--%3E+plant%0A++%23+%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0A++%7B%0A++++SELECT+DISTINCT%0A++++++%3Ffixed_WD+%3Fany_WD+%3Fplant_WD+%3FleftIntxnLabel%0A++++WHERE+%7B%0A++++++VALUES+%3Ffixed_WD+%7B+wd%3AQ2715913+%7D+++%23+%3C--+FIX+TAXON+HERE%0A%0A++++++%23+----+choose+which+left+interactions+you+want+here+----%0A++++++VALUES+%3FleftIntxnType+%7B%0A++++++++%3Chttp%3A%2F%2Fpurl.obolibrary.org%2Fobo%2FRO_0002555%3E++%23+allelopathOf%0A++++++++%3Chttp%3A%2F%2Fpurl.obolibrary.org%2Fobo%2FRO_0002556%3E++%23+pathogenOf%0A++++++%7D%0A%0A++++++%23+LEFT%3A+fixed+taxon+is+target%2C+left+interaction+restricted%0A++++++%3FfixedNode_left+emi%3AinTaxon+%3Ffixed_WD+.%0A++++++%3Fi_left+emi%3AhasSource+%3FanyNode+%3B%0A++++++++++++++emi%3AhasTarget+%3FfixedNode_left+%3B%0A++++++++++++++emi%3AisClassifiedWith+%3FleftIntxnType+.%0A%0A++++++OPTIONAL+%7B+%3FleftIntxnType+rdfs%3Alabel+%3FleftIntxnLabel+.+%7D%0A%0A++++++%3FanyNode+emi%3AinTaxon+%3Fany_WD+.%0A++++++FILTER%28%3Fany_WD+%21%3D+%3Ffixed_WD%29%0A%0A++++++%23+RIGHT%3A+fixed+taxon+eats+plant+%28allow+different+fixed-node+instance%29%0A++++++%3FfixedNode_right+emi%3AinTaxon+%3Ffixed_WD+.%0A++++++%3Fi_right+emi%3AhasSource+%3FfixedNode_right+%3B%0A+++++++++++++++emi%3AhasTarget+%3FplantNode+%3B%0A+++++++++++++++emi%3AisClassifiedWith+%3Chttp%3A%2F%2Fpurl.obolibrary.org%2Fobo%2FRO_0002470%3E+.%0A%0A++++++%3FplantNode+emi%3AinTaxon+%3Fplant_WD+.%0A++++++FILTER%28%3Fplant_WD+%21%3D+%3Ffixed_WD%29%0A++++%7D%0A++++%23+paginate+if+needed%3A%0A++++%23+LIMIT+5000%0A++++%23+OFFSET+0%0A++%7D%0A%0A++%23+%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0A++%23+%28B0%29+Keep+only+plants+for+the+eaten+taxon+%28Archaeplastida%29%0A++%23+%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0A++SERVICE+%3Chttps%3A%2F%2Fqlever.dev%2Fapi%2Fwikidata%3E+%7B%0A++++VALUES+%3Fplant_WD+%7B+UNDEF+%7D%0A++++%3Fplant_WD+wdt%3AP171%2A+wd%3AQ879246+.%0A++%7D%0A%0A++%23+label+for+eats%0A++%3Chttp%3A%2F%2Fpurl.obolibrary.org%2Fobo%2FRO_0002470%3E+rdfs%3Alabel+%3FeatsLabel+.%0A%0A++%23+%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0A++%23+%28C1%29+left+taxon+taxonomy+%28role-split%29%0A++%23+%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0A++OPTIONAL+%7B%0A++++SERVICE+%3Chttps%3A%2F%2Fqlever.dev%2Fapi%2Fwikidata%3E+%7B%0A++++++VALUES+%3Fany_WD+%7B+UNDEF+%7D%0A++++++OPTIONAL+%7B+%3Fany_WD+wdt%3AP225+%3FanyName+.+%7D%0A%0A++++++OPTIONAL+%7B+%3Fany_WD+wdt%3AP171%2A+%3FanyFamily+.%0A++++++++%3FanyFamily+wdt%3AP105+wd%3AQ35409+.%0A++++++++%3FanyFamily+wdt%3AP225+%3FanyFamilyName+.%0A+%7D%0A%0A++++++OPTIONAL+%7B+%3Fany_WD+wdt%3AP171%2A+%3FanyDomain+.%0A++++++++%3FanyDomain+wdt%3AP105+wd%3AQ36732+.%0A++++++++%3FanyDomain+wdt%3AP225+%3FanyDomainName+.%0A+%7D%0A++++%7D%0A++%7D%0A%0A++%23+%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0A++%23+%28C2%29+fixed+taxon+taxonomy+%28role-split%29%0A++%23+%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0A++OPTIONAL+%7B%0A++++SERVICE+%3Chttps%3A%2F%2Fqlever.dev%2Fapi%2Fwikidata%3E+%7B%0A++++++VALUES+%3Ffixed_WD+%7B+wd%3AQ2715913+%7D%0A++++++OPTIONAL+%7B+%3Ffixed_WD+wdt%3AP225+%3FfixedName+.+%7D%0A%0A++++++OPTIONAL+%7B+%3Ffixed_WD+wdt%3AP171%2A+%3FfixedFamily+.%0A++++++++%3FfixedFamily+wdt%3AP105+wd%3AQ35409+.%0A++++++++%3FfixedFamily+wdt%3AP225+%3FfixedFamilyName+.%0A+%7D%0A%0A++++++OPTIONAL+%7B+%3Ffixed_WD+wdt%3AP171%2A+%3FfixedDomain+.%0A++++++++%3FfixedDomain+wdt%3AP105+wd%3AQ36732+.%0A++++++++%3FfixedDomain+wdt%3AP225+%3FfixedDomainName+.%0A+%7D%0A++++%7D%0A++%7D%0A%0A++%23+%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0A++%23+%28C3%29+plant+taxonomy+%28role-split%29%0A++%23+%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0A++OPTIONAL+%7B%0A++++SERVICE+%3Chttps%3A%2F%2Fqlever.dev%2Fapi%2Fwikidata%3E+%7B%0A++++++VALUES+%3Fplant_WD+%7B+UNDEF+%7D%0A++++++OPTIONAL+%7B+%3Fplant_WD+wdt%3AP225+%3FplantName+.+%7D%0A%0A++++++OPTIONAL+%7B+%3Fplant_WD+wdt%3AP171%2A+%3FplantFamily+.%0A++++++++%3FplantFamily+wdt%3AP105+wd%3AQ35409+.%0A++++++++%3FplantFamily+wdt%3AP225+%3FplantFamilyName+.%0A+%7D%0A%0A++++++OPTIONAL+%7B+%3Fplant_WD+wdt%3AP171%2A+%3FplantDomain+.%0A++++++++%3FplantDomain+wdt%3AP105+wd%3AQ36732+.%0A++++++++%3FplantDomain+wdt%3AP225+%3FplantDomainName+.%0A+%7D%0A++++%7D%0A++%7D%0A%0A++%23+%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0A++%23+%28C4%29+Compounds+produced+by+eaten+plant+%28P703%29%0A++%23+%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0A++OPTIONAL+%7B%0A++++SERVICE+%3Chttps%3A%2F%2Fqlever.dev%2Fapi%2Fwikidata%3E+%7B%0A++++++VALUES+%3Fplant_WD+%7B+UNDEF+%7D%0A%0A++++++%3Fchem_WD+wdt%3AP703+%3Fplant_WD+%3B%0A++++++++++++++wdt%3AP233+%3Fchem_WD_canonical_SMILES+%3B%0A++++++++++++++wdt%3AP2067+%3Fchem_WD_mass+.%0A%0A++++++OPTIONAL+%7B+%3Fchem_WD+rdfs%3Alabel+%3FchemLabel+.%0A++++++++FILTER%28LANG%28%3FchemLabel%29+%3D+%22en%22%29%0A+%7D%0A++++%7D%0A++%7D%0A%7D%0A



### Plants Eaten by a Fixed Taxon with Plant Taxonomy and Produced Compounds
Short description
This simplified query fixes one consumer taxon, retrieves all plant taxa it eats (RO_0002470), filters eaten taxa to Archaeplastida, enriches the consumer + plant taxa with Wikidata upper taxonomy (taxon name P225, family, domain), and returns all compounds produced by each eaten plant (P703) including label, canonical SMILES (P233), and mass (P2067).


[Q2715913](https://qlever.earthmetabolome.org/metrin-kg/kcW6tc)

https://qlever.earthmetabolome.org/metrin-kg/?query=PREFIX+wd%3A+++%3Chttp%3A%2F%2Fwww.wikidata.org%2Fentity%2F%3E%0APREFIX+rdfs%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0APREFIX+wdt%3A++%3Chttp%3A%2F%2Fwww.wikidata.org%2Fprop%2Fdirect%2F%3E%0APREFIX+emi%3A++%3Chttps%3A%2F%2Fw3id.org%2Femi%23%3E%0A%0ASELECT+DISTINCT%0A++%23+fixed+%28consumer%29+taxon%0A++%3Fconsumer_WD+%3FconsumerName+%3FconsumerFamilyName+%3FconsumerDomainName%0A%0A++%23+interaction+label%0A++%3FeatsLabel%0A%0A++%23+eaten+plant+taxon%0A++%3Fplant_WD+%3FplantName+%3FplantFamilyName+%3FplantDomainName%0A%0A++%23+compounds+produced+by+eaten+plant%0A++%3Fchem_WD+%3FchemLabel+%3Fchem_WD_canonical_SMILES+%3Fchem_WD_mass%0AWHERE+%7B%0A%0A++%23+%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0A++%23+%28A%29+Local%3A+consumer+eats+plant+%28taxon-level+join%29%0A++%23+%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0A++%7B%0A++++SELECT+DISTINCT+%3Fconsumer_WD+%3Fplant_WD%0A++++WHERE+%7B%0A++++++VALUES+%3Fconsumer_WD+%7B+wd%3AQ2715913+%7D+++%23+%3C--+SET+CONSUMER+TAXON+HERE%0A%0A++++++%23+allow+multiple+sample+nodes+per+taxon%0A++++++%3FconsumerNode+emi%3AinTaxon+%3Fconsumer_WD+.%0A%0A++++++%3FeatIntxn+emi%3AhasSource+%3FconsumerNode+%3B%0A+++++++++++++++emi%3AhasTarget+%3FplantNode+%3B%0A+++++++++++++++emi%3AisClassifiedWith+%3Chttp%3A%2F%2Fpurl.obolibrary.org%2Fobo%2FRO_0002470%3E+.%0A%0A++++++%3FplantNode+emi%3AinTaxon+%3Fplant_WD+.%0A++++++FILTER%28%3Fplant_WD+%21%3D+%3Fconsumer_WD%29%0A++++%7D%0A++++%23+paginate+if+needed%3A%0A++++%23+LIMIT+5000%0A++++%23+OFFSET+0%0A++%7D%0A%0A++%23+label+for+eats%0A++%3Chttp%3A%2F%2Fpurl.obolibrary.org%2Fobo%2FRO_0002470%3E+rdfs%3Alabel+%3FeatsLabel+.%0A%0A++%23+%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0A++%23+%28B0%29+Keep+only+plants+for+the+eaten+taxon+%28Archaeplastida%29%0A++%23+%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0A++SERVICE+%3Chttps%3A%2F%2Fqlever.dev%2Fapi%2Fwikidata%3E+%7B%0A++++VALUES+%3Fplant_WD+%7B+UNDEF+%7D%0A++++%3Fplant_WD+wdt%3AP171%2A+wd%3AQ879246+.%0A++%7D%0A%0A++%23+%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0A++%23+%28B1%29+Consumer+taxonomy+%28role-split%3B+single+fixed+value%29%0A++%23+%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0A++OPTIONAL+%7B%0A++++SERVICE+%3Chttps%3A%2F%2Fqlever.dev%2Fapi%2Fwikidata%3E+%7B%0A++++++VALUES+%3Fconsumer_WD+%7B+wd%3AQ2715913+%7D%0A%0A++++++OPTIONAL+%7B+%3Fconsumer_WD+wdt%3AP225+%3FconsumerName+.+%7D%0A%0A++++++OPTIONAL+%7B+%3Fconsumer_WD+wdt%3AP171%2A+%3FconsumerFamily+.%0A++++++++%3FconsumerFamily+wdt%3AP105+wd%3AQ35409+.%0A++++++++%3FconsumerFamily+wdt%3AP225+%3FconsumerFamilyName+.%0A+%7D%0A%0A++++++OPTIONAL+%7B+%3Fconsumer_WD+wdt%3AP171%2A+%3FconsumerDomain+.%0A++++++++%3FconsumerDomain+wdt%3AP105+wd%3AQ36732+.%0A++++++++%3FconsumerDomain+wdt%3AP225+%3FconsumerDomainName+.%0A+%7D%0A++++%7D%0A++%7D%0A%0A++%23+%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0A++%23+%28B2%29+Plant+taxonomy+%28role-split%29%0A++%23+%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0A++OPTIONAL+%7B%0A++++SERVICE+%3Chttps%3A%2F%2Fqlever.dev%2Fapi%2Fwikidata%3E+%7B%0A++++++VALUES+%3Fplant_WD+%7B+UNDEF+%7D%0A%0A++++++OPTIONAL+%7B+%3Fplant_WD+wdt%3AP225+%3FplantName+.+%7D%0A%0A++++++OPTIONAL+%7B+%3Fplant_WD+wdt%3AP171%2A+%3FplantFamily+.%0A++++++++%3FplantFamily+wdt%3AP105+wd%3AQ35409+.%0A++++++++%3FplantFamily+wdt%3AP225+%3FplantFamilyName+.%0A+%7D%0A%0A++++++OPTIONAL+%7B+%3Fplant_WD+wdt%3AP171%2A+%3FplantDomain+.%0A++++++++%3FplantDomain+wdt%3AP105+wd%3AQ36732+.%0A++++++++%3FplantDomain+wdt%3AP225+%3FplantDomainName+.%0A+%7D%0A++++%7D%0A++%7D%0A%0A++%23+%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0A++%23+%28B3%29+Compounds+produced+by+eaten+plant+%28P703%29%0A++%23+%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0A++OPTIONAL+%7B%0A++++SERVICE+%3Chttps%3A%2F%2Fqlever.dev%2Fapi%2Fwikidata%3E+%7B%0A++++++VALUES+%3Fplant_WD+%7B+UNDEF+%7D%0A%0A++++++%3Fchem_WD+wdt%3AP703+%3Fplant_WD+%3B%0A++++++++++++++wdt%3AP233+%3Fchem_WD_canonical_SMILES+%3B%0A++++++++++++++wdt%3AP2067+%3Fchem_WD_mass+.%0A%0A++++++OPTIONAL+%7B+%3Fchem_WD+rdfs%3Alabel+%3FchemLabel+.%0A++++++++FILTER%28LANG%28%3FchemLabel%29+%3D+%22en%22%29%0A+%7D%0A++++%7D%0A++%7D%0A%7D%0A


### Sub-400 Da Metabolites from Plants Eaten by a Fixed Taxon (Ranked by Producing Plant Count)
Short description
This query fixes a consumer taxon, retrieves all plant taxa it eats (RO_0002470), restricts eaten taxa to Archaeplastida, and fetches chemical compounds produced by those plants (P703). It filters compounds with molecular mass (P2067) below 400 Da, aggregates by compound QID, and counts the number of distinct producing plant taxa to rank the most widespread low-molecular-weight metabolites in the trophic neighborhood of the fixed taxon.

https://qlever.earthmetabolome.org/metrin-kg/mixIFs

https://qlever.earthmetabolome.org/metrin-kg/?query=PREFIX+wd%3A+++%3Chttp%3A%2F%2Fwww.wikidata.org%2Fentity%2F%3E%0APREFIX+rdfs%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0APREFIX+wdt%3A++%3Chttp%3A%2F%2Fwww.wikidata.org%2Fprop%2Fdirect%2F%3E%0APREFIX+emi%3A++%3Chttps%3A%2F%2Fw3id.org%2Femi%23%3E%0A%0ASELECT%0A++%3Fchem_WD%0A++%28SAMPLE%28%3FchemLabel_raw%29+AS+%3FchemLabel%29%0A++%28SAMPLE%28%3Fchem_WD_canonical_SMILES%29+AS+%3FSMILES%29%0A++%28SAMPLE%28%3Fchem_WD_mass%29+AS+%3Fmass%29%0A++%28COUNT%28DISTINCT+%3Fplant_WD%29+AS+%3FnProducingPlants%29%0AWHERE+%7B%0A%0A++%23+%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0A++%23+%28A%29+Local%3A+fixed+consumer+eats+plant+%28taxon-level+join%29%0A++%23+%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0A++%7B%0A++++SELECT+DISTINCT+%3Fplant_WD%0A++++WHERE+%7B%0A++++++VALUES+%3Fconsumer_WD+%7B+wd%3AQ2715913+%7D+++%23+%3C--+SET+CONSUMER+TAXON+HERE%0A%0A++++++%3FconsumerNode+emi%3AinTaxon+%3Fconsumer_WD+.%0A%0A++++++%3FeatIntxn+emi%3AhasSource+%3FconsumerNode+%3B%0A+++++++++++++++emi%3AhasTarget+%3FplantNode+%3B%0A+++++++++++++++emi%3AisClassifiedWith+%3Chttp%3A%2F%2Fpurl.obolibrary.org%2Fobo%2FRO_0002470%3E+.%0A%0A++++++%3FplantNode+emi%3AinTaxon+%3Fplant_WD+.%0A++++++FILTER%28%3Fplant_WD+%21%3D+%3Fconsumer_WD%29%0A++++%7D%0A++%7D%0A%0A++%23+%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0A++%23+%28B0%29+Restrict+eaten+taxa+to+plants+%28Archaeplastida%29%0A++%23+%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0A++SERVICE+%3Chttps%3A%2F%2Fqlever.dev%2Fapi%2Fwikidata%3E+%7B%0A++++VALUES+%3Fplant_WD+%7B+UNDEF+%7D%0A++++%3Fplant_WD+wdt%3AP171%2A+wd%3AQ879246+.%0A++%7D%0A%0A++%23+%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0A++%23+%28B1%29+Retrieve+compounds+%2B+filter+mass+%3C+400%0A++%23+%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0A++SERVICE+%3Chttps%3A%2F%2Fqlever.dev%2Fapi%2Fwikidata%3E+%7B%0A++++VALUES+%3Fplant_WD+%7B+UNDEF+%7D%0A%0A++++%3Fchem_WD+wdt%3AP703+%3Fplant_WD+%3B%0A+++++++++++++wdt%3AP233+%3Fchem_WD_canonical_SMILES+%3B%0A+++++++++++++wdt%3AP2067+%3Fchem_WD_mass+.%0A%0A++++FILTER%28%3Fchem_WD_mass+%3C+400%29%0A%0A++++OPTIONAL+%7B+%3Fchem_WD+rdfs%3Alabel+%3FchemLabel_raw+.%0A++++++FILTER%28LANG%28%3FchemLabel_raw%29+%3D+%22en%22%29%0A+%7D%0A++%7D%0A%7D%0AGROUP+BY+%3Fchem_WD%0AORDER+BY+DESC%28%3FnProducingPlants%29%0ALIMIT+50%0A


### Tripartite Parasitoid–Herbivory–Plant Chains with Wikidata Taxonomy (Taxon-Level Join)
Short description
This query extracts tripartite ecological chains where a taxon A is parasitoidOf taxon B (RO_0002208), and B eats a taxon C (RO_0002470), with C restricted to plants (Archaeplastida lineage via wdt:P171* wd:Q879246). The interaction graph is queried locally (EMI KG) and joined at the taxon level via emi:inTaxon to handle multiple sample nodes per taxon. The result table is enriched using role-split federated Wikidata lookups to return scientific name (P225), family, and domain for A, B, and the plant taxon.

https://qlever.earthmetabolome.org/metrin-kg/uXLCRi

https://qlever.earthmetabolome.org/metrin-kg/?query=PREFIX+wd%3A+++%3Chttp%3A%2F%2Fwww.wikidata.org%2Fentity%2F%3E%0APREFIX+rdfs%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0APREFIX+wdt%3A++%3Chttp%3A%2F%2Fwww.wikidata.org%2Fprop%2Fdirect%2F%3E%0APREFIX+emi%3A++%3Chttps%3A%2F%2Fw3id.org%2Femi%23%3E%0A%0ASELECT+DISTINCT%0A++%23+A+%28parasitoid+taxon%29%0A++%3FA_WD+%3FA_Name+%3FA_FamilyName+%3FA_DomainName%0A%0A++%23+interaction+1+label%0A++%3FparasitoidOfLabel%0A%0A++%23+B+%28host+taxon%29%0A++%3FB_WD+%3FB_Name+%3FB_FamilyName+%3FB_DomainName%0A%0A++%23+interaction+2+label%0A++%3FeatsLabel%0A%0A++%23+eaten+plant+taxon%0A++%3Fplant_WD+%3FplantName+%3FplantFamilyName+%3FplantDomainName%0AWHERE+%7B%0A%0A++%23+%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0A++%23+%28A%29+Local+taxon-level+chain%3A+A+--parasitoidOf--%3E+B+--eats--%3E+plant%0A++%23+++++%28allow+different+sample+nodes+for+B+across+legs%29%0A++%23+%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0A++%7B%0A++++SELECT+DISTINCT+%3FA_WD+%3FB_WD+%3Fplant_WD%0A++++WHERE+%7B%0A++++++%23+parasitoidOf%3A+A+-%3E+B%0A++++++%3Fintxn1+emi%3AhasSource+%3FA_node+%3B%0A+++++++++++++emi%3AhasTarget+%3FB_node_left+%3B%0A+++++++++++++emi%3AisClassifiedWith+%3Chttp%3A%2F%2Fpurl.obolibrary.org%2Fobo%2FRO_0002208%3E+.%0A%0A++++++%3FA_node++++++emi%3AinTaxon+%3FA_WD+.%0A++++++%3FB_node_left+emi%3AinTaxon+%3FB_WD+.%0A%0A++++++%23+eats%3A+B+-%3E+plant+%28use+a+%28possibly+different%29+B+node+instance%29%0A++++++%3FB_node_right+emi%3AinTaxon+%3FB_WD+.%0A++++++%3Fintxn2+emi%3AhasSource+%3FB_node_right+%3B%0A+++++++++++++emi%3AhasTarget+%3Fplant_node+%3B%0A+++++++++++++emi%3AisClassifiedWith+%3Chttp%3A%2F%2Fpurl.obolibrary.org%2Fobo%2FRO_0002470%3E+.%0A%0A++++++%3Fplant_node+emi%3AinTaxon+%3Fplant_WD+.%0A%0A++++++FILTER%28%3FA_WD+%21%3D+%3FB_WD%29%0A++++++FILTER%28%3Fplant_WD+%21%3D+%3FB_WD%29%0A++++++FILTER%28%3Fplant_WD+%21%3D+%3FA_WD%29%0A++++%7D%0A++++%23+paginate+if+needed%3A%0A++++%23+LIMIT+5000%0A++++%23+OFFSET+0%0A++%7D%0A%0A++%23+%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0A++%23+%28B0%29+Keep+only+plants+for+the+eaten+taxon+%28Archaeplastida%29%0A++%23+%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0A++SERVICE+%3Chttps%3A%2F%2Fqlever.dev%2Fapi%2Fwikidata%3E+%7B%0A%09VALUES+%3Fplant_WD+%7B+UNDEF+%7D%0A++++%3Fplant_WD+wdt%3AP171%2A+wd%3AQ879246+.%0A++%7D%0A%0A++%23+%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0A++%23+%28B-intxn+labels%29%0A++%23+%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0A++%3Chttp%3A%2F%2Fpurl.obolibrary.org%2Fobo%2FRO_0002208%3E+rdfs%3Alabel+%3FparasitoidOfLabel+.%0A++%3Chttp%3A%2F%2Fpurl.obolibrary.org%2Fobo%2FRO_0002470%3E+rdfs%3Alabel+%3FeatsLabel+.%0A%0A++%23+%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0A++%23+%28C1%29+Wikidata+taxonomy+for+A+%28role-split%29%0A++%23+%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0A++OPTIONAL+%7B%0A++++SERVICE+%3Chttps%3A%2F%2Fqlever.dev%2Fapi%2Fwikidata%3E+%7B%0A++++++VALUES+%3FA_WD+%7B+UNDEF+%7D%0A%0A++++++OPTIONAL+%7B+%3FA_WD+wdt%3AP225+%3FA_Name+.+%7D%0A%0A++++++OPTIONAL+%7B+%3FA_WD+wdt%3AP171%2A+%3FA_Family+.%0A++++++++%3FA_Family+wdt%3AP105+wd%3AQ35409+.%0A++++++++%3FA_Family+wdt%3AP225+%3FA_FamilyName+.%0A+%7D%0A%0A++++++OPTIONAL+%7B+%3FA_WD+wdt%3AP171%2A+%3FA_Domain+.%0A++++++++%3FA_Domain+wdt%3AP105+wd%3AQ36732+.%0A++++++++%3FA_Domain+wdt%3AP225+%3FA_DomainName+.%0A+%7D%0A++++%7D%0A++%7D%0A%0A++%23+%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0A++%23+%28C2%29+Wikidata+taxonomy+for+B+%28role-split%29%0A++%23+%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0A++OPTIONAL+%7B%0A++++SERVICE+%3Chttps%3A%2F%2Fqlever.dev%2Fapi%2Fwikidata%3E+%7B%0A++++++VALUES+%3FB_WD+%7B+UNDEF+%7D%0A%0A++++++OPTIONAL+%7B+%3FB_WD+wdt%3AP225+%3FB_Name+.+%7D%0A%0A++++++OPTIONAL+%7B+%3FB_WD+wdt%3AP171%2A+%3FB_Family+.%0A++++++++%3FB_Family+wdt%3AP105+wd%3AQ35409+.%0A++++++++%3FB_Family+wdt%3AP225+%3FB_FamilyName+.%0A+%7D%0A%0A++++++OPTIONAL+%7B+%3FB_WD+wdt%3AP171%2A+%3FB_Domain+.%0A++++++++%3FB_Domain+wdt%3AP105+wd%3AQ36732+.%0A++++++++%3FB_Domain+wdt%3AP225+%3FB_DomainName+.%0A+%7D%0A++++%7D%0A++%7D%0A%0A++%23+%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0A++%23+%28C3%29+Wikidata+taxonomy+for+plant+%28role-split%29%0A++%23+%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0A++OPTIONAL+%7B%0A++++SERVICE+%3Chttps%3A%2F%2Fqlever.dev%2Fapi%2Fwikidata%3E+%7B%0A++++++VALUES+%3Fplant_WD+%7B+UNDEF+%7D%0A%0A++++++OPTIONAL+%7B+%3Fplant_WD+wdt%3AP225+%3FplantName+.+%7D%0A%0A++++++OPTIONAL+%7B+%3Fplant_WD+wdt%3AP171%2A+%3FplantFamily+.%0A++++++++%3FplantFamily+wdt%3AP105+wd%3AQ35409+.%0A++++++++%3FplantFamily+wdt%3AP225+%3FplantFamilyName+.%0A+%7D%0A%0A++++++OPTIONAL+%7B+%3Fplant_WD+wdt%3AP171%2A+%3FplantDomain+.%0A++++++++%3FplantDomain+wdt%3AP105+wd%3AQ36732+.%0A++++++++%3FplantDomain+wdt%3AP225+%3FplantDomainName+.%0A+%7D%0A++++%7D%0A++%7D%0A%7D%0A