
# This is PMAS's COMMONS Lab daily Open Notebook.


Today is 2023.02.13

## Todo today

### SWAT4HCLS

Tutorials can be found here https://www.swat4ls.org/workshops/basel2023/tutorials/

Those which are organized as interactive you can find the zoom links here. 
Track A https://zoom.us/j/98544172437
Track B https://us02web.zoom.us/j/85986933013
Track C https://zoom.us/j/99286755590



The other sessions will be streamed on the website. 
For Q&A please use Discord channel https://discord.gg/WC6qanWj


The final programme of the conference days  can be found here https://www.swat4ls.org/workshops/basel2023/scientific-programme-2023/
All sessions will be streamed at the conference website. 
For Q&A please use Discord channel  https://discord.gg/BRwbWWjDaE


Information about BioHackathon can be found here https://www.swat4ls.org/workshops/basel2023/scientific-programme-2023/


We work at https://cocalc.com/projects/

Ontology at the Topo
Data on the bottom (**instances** of the ontology)

Prefix is simply a declaration of an IRI abbreviation


# Remember that in the turtle data above we can see:
#
# 'ttr:John a dbo:Person'
#
# 'a' can also be used instead of 'rdf:type'
# 'a' is a synonym of 'rdf:type'


If you dont know what is your data. Dont fill it in 


https://sparql.rhea-db.org/


# Put your code here



chebi = '18059'

```SQL
#endpoint:https://sparql.rhea-db.org/sparql
#query Q9: Select Rhea reactions using CHEBI:31488 (N-acylsphinganine) or one of its descendant as reaction participant

PREFIX rh:<http://rdf.rhea-db.org/>
PREFIX CHEBI:<http://purl.obolibrary.org/obo/CHEBI_>
PREFIX up:<http://purl.uniprot.org/core/>

SELECT distinct ?chebi ?chebiUniprotName ?rhea ?equation 
WHERE {
  ?rhea rdfs:subClassOf rh:Reaction .
  ?rhea rh:equation ?equation .
  ?rhea rh:side/rh:contains/rh:compound/rh:chebi ?chebi .
  ?chebi rdfs:subClassOf/rdfs:subClassOf/rdfs:subClassOf CHEBI:""" + chebi + """ .
  ?chebi up:name ?chebiUniprotName .
}
ORDER BY ?chebi
```

Note : 

To fetch exactly one level:
`?chebi rdfs:subClassOf CHEBI:""" + chebi + """ .`

To fetch exactly all level:
`?chebi rdfs:subClassOf* CHEBI:""" + chebi + """ .`

To fetch exactly one to three levels:
`?chebi rdfs:subClassOf/rdfs:subClassOf/rdfs:subClassOf CHEBI:""" + chebi + """ .`



print(sparql_QEx4)


SPARQL is 1 based

When one queries the Uniprot KB (or other massive source) one can work 2step wise.

1 get a subset of the graph

```SQL

P05067ttl = """base <http://purl.uniprot.org/uniprot/>  
prefix up: <http://purl.uniprot.org/core/>
prefix taxon: <http://purl.uniprot.org/taxonomy/>

<P05067> a up:Protein ;
         up:organism taxon:9606 .
"""

P05067=Graph().parse(format='ttl', data=P05067ttl)

for subj, pred, obj in P05067:
   print(subj, pred, obj)

```

And then query this subgraph

```SQL
qres=P05067.query("""
PREFIX up: <http://purl.uniprot.org/core/> 
PREFIX uniprotkb: <http://purl.uniprot.org/uniprot/>
PREFIX skos: <http://www.w3.org/2004/02/skos/core#>

SELECT ?protein ?taxon
WHERE {
  ?protein a up:Protein ;
           up:organism ?taxon .
}""")

for row in qres:
    print("The taxon (organism id) of %s is %s" % row)
```

2023-02-13 13:34

Eric Neumann



2023-02-13 14:05

Hi, this is the link to the slides: https://docs.google.com/presentation/d/10bVN0e5wFSKxbi8l6KCvfGxRSkWLi1eXmeIaY4Szo7w/edit?usp=sharing


This is a link to the github repo: https://github.com/kg-subsetting/tutorial-swat4hcl23


Property graphs.
Similar to RDF + some flavor
e.g. Neo4j
Nodes and relations can be qualified

Wikibase supporting WD
Can go further than traditional Property graphs.

Why would you create KG subset ?

- Reproducibility !


Most advances in WD subsetting were done through Hackatons (Andra, Jose etc.)


SparkWDSub
Graph traversal (Pregel)
Jose Emilio Labra Gayo

KGTK 
Kypher language
JSON dump > SQLite 
(Dump processed on a laptop)


Zenodo 
Wikibase
HDT triple store

ShEX Shape Expression
Concise and Human readable

sheXer can extract ShEx schemas from RDF data

![](/assets/images/2023-02-13-15-53-41.png)


Eric Neumann

Property Graph are syntactic sugar https://en.wikipedia.org/wiki/Syntactic_sugar
Hyperedges Hypergraphs

Mathematical tools 

Functors 

Spivak Category Theory for the Sciences.
A database is a Functor

SHACL and SHEx are Functors

Notion of Simplices



![](/assets/images/2023-02-13-16-30-52.png)

They are nested subsets. A simplex contains all lower simplices 


![](/assets/images/2023-02-13-16-33-32.png)

Dedekind Numbers

![](/assets/images/2023-02-13-16-56-35.png)


## Doing

## Paused

## Done
### Send DBGI 22nd program

Working on [[communication.meetings.2023.02.22.program]] and 
### Send MAPP Activity report

## Notes

## Todo tomorrow, another day ... or never !
###
###
###

## Today I learned that

- 

📖 Comment what should be commented and pass this daily Notebook to it's Open Notebook counterpart