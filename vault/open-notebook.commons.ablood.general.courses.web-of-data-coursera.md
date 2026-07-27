---
id: 5vmdjiknn20d2p2i1clvlw8
title: Web Of Data Coursera
desc: ''
updated: 1785133031855
created: 1785133008504
traitIds:
  - open-notebook-commons-ablood-literature
---
# Week 1: 
## A brief story of the Web
Ted Nelson coined the term [HyperText](http://signallake.com/innovation/FileStructure65.pdf)
Vannevar Bush described the memex in 1945
### Web Architecture:
1) URL 
2) HTTP 
3) HTML
## Separation of Content and Presentation
XML created to help structure content
```xml
<card>
	<name>Alex</name>
</card>
```
**URI**: Uniform Resource Identifier. A string of characters used to identify a resource on a computer network, of which the best known type is the web address or URL.
**Namespace**: an abstract space gathering names in the same set
- A collection of names identified by a URI
- Names belonging to the same namespace start with the same URI
**Prefixes**
- Local shortcuts to declare a namespace in a file, document, etc
- Use prefixes locally instead of repeating the namespace
- Representation languages provide prefix declaration means
**And Qualified Names:** 
- Prefix + ":" + local name
- e.g. dc:title 
```xml
<e: card xmlns:e="http://website">
	<e:name>Alex</e:name>
</e:card>
```
	adding the prefix links all of of these xml items to the website
### From Pages to Resources
URL is different from a URI
**IRI**: International Resource Identifier
- identify on the web in any language that exists
URL -> URI -> IRI
**Resource**: A resource is anything that can be identified by a URI
- page
- person
- idea
- etc
### Linked Data Principles
1) use http uri (URL) to allow dereferencing the address
2) When a URI is accessed, provide data about the resource it represents (HTTP)
3) Include in these data links to other data (Web)

***5 star data***: 
1) on the web
2) machien-readable data
3) non-proprietary format
4) rdf standards
5) linked rdf

### Stack of Standards Languages
W3C Standards:
1) **RDF**: Resource Description Framework
2) **SPARQL**: A query language
**Standards:**
RDFS & OWL

### Demos - A Web of Linked Data
#### The BBC Website
They are using linked data to sites such as wikipedia

#### DBPedia 
DBPedia is based on structured data extracted from Wikipedia. 

#### Searching the Web of Data
#### Open Calais: From natural language to linked data
Calais takes text/html/xml and goes to URI in the text.  Able to construct a linked data set from a text resource.
#### When software agents access the Web of data
Can use curl to access resources as well from the web of data. Can specify the format for the data that will be received. 
#### Linked Data for Exploratory Search
Discovery Hub search engine is based on linked data, can search topics and associated new topics. System is able to show the connections (graph) linking terms/data. Can also summarize using natural language on the go. 
# Week 2: The RDF Data Model
## Describing Resources
**Schema** as a knowledge graph
**example:**
rdf:about
rdf:type
rdfs:label
ex:ingredient
## Triple Model and Graph Model
**RDF**:
- **Resource**: pages, chairs, persons, etc all can have a URI
- **Description**: attributes, characteristics, and relations between resources
- **Framework**: model, language and syntaxes for these descriptions
Decomposes descriptions into a triple: (subject, predicate, object)
**Rules**: 
1) The *subject* is always a resource (and not a literal)
2) the type of the *binary property* is identified by a URI
3) The *value* is a resource or a literal
This model also works a graph model. 

The RDF model is an oriented labeled multi-graph model:
- RDF triples form a graph when getting connected on common subjects or objects. The vertices of an RDF graph are the resources which are the subjects or objects of RDF triples, and its edges are labeled by the properties of the RDF triples.
- Two resources can be linked by several properties; an RDF graph is therefore a multi-graph.
- Vertices are labeled by URIs or literal values, and edges are labeled by URIs identifying properties.
- Edges are oriented: the tail of an edge is the subject of a triple, and the head of an edge is the object of a triple.

**Composition rules for RDF triples:**
1. The subject is always a resource (and not a literal)
2. The type of the binary property is identified by a URI
3. The value is a resource or a literal
**The RDF model is an oriented labeled multigraph model:*
4. multigraph: several edges can connect the same two nodes
5. oriented: the head of an edge is the object of the corresponding triple, its tail is the subject of the triple
6. labeled: edges and nodes are labeled by resources and literals

**A resource is either a URI or an anonymous resource (blank node)**
## Serialization Syntaxes
Existing Syntaxes:
- XML (historical)
- Turtle
- TriG
- JSON-LD
- N-Triples
- N-Quads
### N-Triples
Easy parsing of triple lists
- URIs between less-than and greater-than signs
- Literal Values between double quotes
- Triples separated by full stops
### Turtle
one (.) or several properties (;)  or values (,)
### /XML
<rdf:RDF> </rdf:RDF> is the root node necessary for rdf content
### An Example RDF Graph Serialized in Various RDF Syntaxes

The example RDF graph serialized below has been discussed in the previous video. You can copy it and keep it to reuse it.

RDF 1.1 comes with 7 syntaxes:
- N-Triples
- Turtle
- RDF/XML
- RDFa
- JSON-LD
- TriG
- N-Quads
#### An example RDF graph in the N-Triples syntax
```
[http://inria.fr/rr/doc.html](http://inria.fr/rr/doc.html) [http://inria.fr/schema#author](http://inria.fr/schema#author) [http://ns.inria.fr/catherine.faron#me](http://ns.inria.fr/catherine.faron#me) . [http://inria.fr/rr/doc.html](http://inria.fr/rr/doc.html) [http://inria.fr/schema#topic](http://inria.fr/schema#topic) "Web of Data" . [http://inria.fr/rr/doc.html](http://inria.fr/rr/doc.html) [http://inria.fr/schema#topic](http://inria.fr/schema#topic) "Semantic Web" .
```

#### An example RDF graph in the Turtle syntax
```

@prefix rdf: [http://www.w3.org/1999/02/22-rdf-syntax-ns#](http://www.w3.org/1999/02/22-rdf-syntax-ns#). @prefix inria: [http://inria.fr/schema#](http://inria.fr/schema#) . [http://inria.fr/rr/doc.html](http://inria.fr/rr/doc.html) inria:author [http://ns.inria.fr/catherine.faron#me](http://ns.inria.fr/catherine.faron#me) ; inria:topic "Web of Data" , "Semantic Web" .

````
#### An example RDF graph in the RDF/XML syntax

```xml
<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:inria="http://inria.fr/schema#" >
    <rdf:Description rdf:about="http://inria.fr/rr/doc.html">
        <inria:author rdf:resource="http://ns.inria.fr/catherine.faron#me"/>
        <inria:topic>Web of Data</inria:topic>
        <inria:topic>Semantic Web</inria:topic>
    </rdf:Description>
</rdf:RDF>
````

## Values, Types, and Languages
Literal types are considered to default to the `xsd:string`
- data is organized hierarchically 
- e.g. rdf:type
![[Pasted image 20250415151322.png]]

## Groups
rdf:{int} are used to list items that are grouped.
In xml can use rdf:parseType="Collection" too
these refer to a collection: `rdf:List` which will list the items in order
### Turtle and RDF/XML Codes to Represent RDF Bags and Lists
#### **Describing a Bag of Literals in Turtle**
```
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix inria: <http://inria.fr/schema#> . 
<http://inria.fr/rr/doc.html> inria:author [ a rdf:Bag ;
   rdf:li "Fabien", "Catherine", "Olivier" . ] . 
```
#### **Describing a Bag of Literals in RDF/XML****
```xml
<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:inria="http://inria.fr/schema#">
    <rdf:Description rdf:about="http://inria.fr/rr/doc.html">
      
        <inria:author>
          
            <rdf:Bag>
              
                 <rdf:li>Fabien</rdf:li>
                <rdf:li>Catherine</rdf:li>
                
                <rdf:li>Olivier</rdf:li>
                
            </rdf:Bag>
            
        </inria:author>
        
    </rdf:Description>

</rdf:RDF>

```
#### **Describing a List of Resources in Turtle**
```turtle
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix inria: <http://inria.fr/schema#> . 
<http://inria.fr/rr/doc.html> inria:author 
    ( <http://ns.inria.fr/fabien.gandon#me> <http://ns.inria.fr/catherine.faron#me>
<http://ns.inria.fr/olivier.corby#me> ) . 
```
#### **Describing a List of Resources in RDF/XML** 
```xml
<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:inria="http://inria.fr/schema#">
    <rdf:Description rdf:about="http://inria.fr/rr/doc.html">
      
        <inria:author rdf:parseType="Collection">
            <rdf:Description rdf:about="http://ns.inria.fr/fabien.gandon#me"/>
            
            <rdf:Description rdf:about="http://ns.inria.fr/catherine.faron#me"/>
            
            <rdf:Description rdf:about="http://ns.inria.fr/olivier.corby#me"/>
        </inria:author>
        
    </rdf:Description>

</rdf:RDF>
```


## Naming Graphs
Subgraphs of URI triples are connected by their linked concepts. 

**TriG:** consists of an RDF triple which declares that document doc.html is about arithmetic sequences (identified by http://data.bnf.fr/ark:/12148/cb121105993 in the BNF) but also in the encapsulation of this RDF triple within a named graph (identified by http://inria.fr/topics/algebra) which presumably groups Inria's documents about Algebra.

#### TriG and N-Quads Codes to Represent Named Graphs
This code has been discussed in the previous video, you can copy it and keep it to reuse it.

**Named Graphs in TriG**
```html
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix inria: <http://inria.fr/schema#> .
GRAPH <http://inria.fr/people>
{ 
  <http://inria.fr/rr/doc.html> inria:author. <http://ns.inria.fr/catherine.faron#me> .
}

GRAPH <http://inria.fr/topics>
{ 
  <http://inria.fr/rr/doc.html> inria:topic "Web of Data" .
}

```
**Named Graphs in N-Quads**
```html
<http://inria.fr/rr/doc.html> <http://inria.fr/schema#author>

<http://ns.inria.fr/catherine.faron#me> <http://inria.fr/people> . <http://inria.fr/rr/doc.html> <http://inria.fr/schema#topic>

"Web of Data" <http://inria.fr/topics> .
```

## RDF Schema
RDF-S is above the RDF layer for the semantic web standards. 
- RDFS provides a standard vocabulary to declare vocabularies to be used in RDF descriptions
- RDFS reuses the vocabulary of RDF and introduces additional constructs
- An RDF vocabulary is a set of property declarations and class declarations
Declaring an object vocabulary requires connecting it to schema. 
Classes can be declared hierarchically, e.g. Woman -> Person.
```
<hasMother> a rdf:Property;
	rdfs:subPropertyyOf <hasParent> .
```
Labels and names are also able to be added. 

### Turtle and RDF/XML Codes to Declare RDF Classes and Properties
This code has been discussed in the previous video, you can copy it and keep it to reuse it.
**Declaring Classes of Resources in Turtle**
```
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>
@base <http://inria.fr/2005/humans.rdfs>
<Woman> a rdfs:Class ; rdfs:subClassOf <Person>, <Female> . 
```
**Declaring Classes of Resources in RDF/XML**
```
<rdf:RDF xml:base="http://inria.fr/2005/humans.rdfs" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:rdfs="http://www.w3.org/2000/01/rdf-schema#">

<rdfs:Class rdf:ID="Woman">

<rdfs:subClassOf rdf:resource="#Person"/>

<rdfs:subClassOf rdf:resource="#Female"/>

</rdfs:Class>

</rdf:RDF>
```
**Declaring Types of Properties in Turtle**
```
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>
@base <http://inria.fr/2005/humans.rdfs>
<hasMother> a rdf:Property ;  rdfs:subPropertyOf <hasParent> . 

```
**Declaring Types of Properties in RDF/XML**
```
<rdf:RDF xml:base="http://inria.fr/2005/humans.rdfs" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:rdfs="http://www.w3.org/2000/01/rdf-schema#">

<rdf:Property rdf:ID="hasMother">

<rdfs:subPropertyOf rdf:resource="#hasParent"/>

<rdfs:domain rdf:resource="#Person"/>

<rdfs:range rdf:resource="#Woman"/>

</rdf:Property>

</rdf:RDF>
```


# Week 3: SPARQL
## RDF Graph Pattern Matching
Accessing Data Sources on the Web
1) RDF Pattern Matching
2) Statements
3) Filter, Constraint, Function
4) Pre and post processing
5) Several query forms
6) Results and update
Syntax looks like SQL syntax
statements are triple patterns in turtle syntax
e.g. `?x rdf:type ex:Person`
`SELECT ?subject ?property ?value WHERE {?subject ?property ?value}`

```sparql
ELECT ?subject ?property ?value
WHERE { 
?subject ?property ?value 
}

prefix ex: <http://example.org/ns/>
SELECT ?x 
WHERE { 
?x rdf:type ex:Person .
  ?x ex:name ?name . 
}
  
prefix ex: <http://example.org/ns/>
SELECT ?name ?fname
WHERE {
?x a ex:Person;
    ex:name ?name ;
    ex:firstname ?fname ;
    ex:author ?y .
} 

PREFIX mit: <http://www.mit.edu#>
SELECT ?student
WHERE {
 ?student mit:registeredAt ?x .
}

PREFIX mit: <http://www.mit.edu#>
SELECT ?student
WHERE {
 ?student <http://www.mit.edu#registeredAt> ?x .
}

PREFIX mit:  <http://www.mit.edu#>
PREFIX foaf: <http://xmlns.com/foaf/0.1/>
SELECT ?student
WHERE {
 ?student mit:registeredAt ?x .
 ?x foaf:homepage <http://www.mit.edu> .
}

PREFIX foaf: <http://xmlns.com/foaf/0.1/>
SELECT ?x ?f WHERE {
 ?x foaf:name "Fabien"@fr ; foaf:knows ?f .
}

PREFIX foaf: <http://xmlns.com/foaf/0.1/>
SELECT ?x WHERE {
 ?x foaf:name "Fabien"@fr ; 
    foaf:age "21"^^xsd:integer .
}
```
## Statements
```sparql
PREFIX foaf: <http://xmlns.com/foaf/0.1/>
SELECT ?person ?name
WHERE {
 ?person foaf:homepage <http://fabien.info> .
 OPTIONAL { ?person foaf:name ?name . }
}

PREFIX foaf: <http://xmlns.com/foaf/0.1/>
SELECT ?person ?name
WHERE {
 ?person foaf:name ?name .
  {
   ?person foaf:homepage <http://fabien.info> .
  }
  UNION
  {
   ?person foaf:homepage <http://bafien.org> .
  }
}

PREFIX ex: <http://www.example.abc#>
SELECT ?x
WHERE {
   ?x a ex:Person  
   MINUS { ?x a ex:Man }
}

PREFIX foaf: <http://xmlns.com/foaf/0.1/>
SELECT ?person ?name
WHERE {
 ?person foaf:name ?name .
}
VALUES ?name  { "Peter" "Pedro" "Pierre" }

PREFIX foaf: <http://xmlns.com/foaf/0.1/>
PREFIX ex: <http://www.example.abc#>
SELECT ?person ?name
WHERE {
 ?person ex:fname ?fname ;
   ex:lname ?lname .
 BIND (concat(?fname, ?lname) AS ?name)
}

PREFIX foaf: <http://xmlns.com/foaf/0.1/>
SELECT ?friend WHERE {
 ?x foaf:name "Fabien Gandon" ;
    foaf:knows+ ?friend .
}

PREFIX foaf: <http://xmlns.com/foaf/0.1/>
SELECT DISTINCT ?name
WHERE { ?person foaf:name ?name . }
```
## Filter, Constraint, and Function
Declaration Constraints:
- select
- where
- filter
Strings and Literals
- contains
- strstarts
- strends
- strdt
- stranlang
- etc
May also get year, date, abs, etc. Many ways to evaluate 
```sparql
PREFIX ex: <http://inria.fr/schema#>
SELECT ?person ?name
WHERE {
 ?person rdf:type ex:Person ;
    ex:name  ?name ;
    ex:age   ?age .
 FILTER (xsd:integer(?age) >= 18)
} 

PREFIX foaf: <http://xmlns.com/foaf/0.1/>
SELECT * where {
 ?x foaf:name ?name ; foaf:age ?age .
 FILTER ( if (langMatches(lang(?name), "FR"),
            ?age >= 18, ?age >= 21) )
}

PREFIX foaf: <http://xmlns.com/foaf/0.1/>
SELECT ?name
WHERE {
 ?x foaf:name ?name .
 FILTER NOT EXISTS { ?x foaf:age -1 }
}
```
## Pre and Post Processing
```sparql
PREFIX mit: <http://www.mit.edu#>
SELECT ?student 
FROM <http://www.mit.edu/data1.rdf>
FROM <http://www.mit.edu/data2.rdf>
WHERE { ?student mit:registeredAt ?x . }

PREFIX mit: <http://www.mit.edu#>
SELECT ?g ?student 
FROM NAMED <http://www.mit.edu/data1.rdf>
FROM NAMED <http://www.mit.edu/data2.rdf>
WHERE { 
 GRAPH ?g {
  ?student mit:registeredAt ?x . 
 }
}

SELECT ?x 
WHERE { 
 SERVICE <http://dbpedia.org/sparql> {
   ?x rdfs:label "Auguste"@fr . 
 }
}

PREFIX foaf: <http://xmlns.com/foaf/0.1/>
SELECT ?name
WHERE { ?x foaf:name ?name . } 
ORDER BY ?name
LIMIT 20
OFFSET 20

PREFIX mit: <http://www.mit.edu#>
SELECT ?student
WHERE { ?student mit:score ?score . }
GROUP BY ?student
HAVING(AVG(?score) >= 10)

PREFIX foaf: <http://xmlns.com/foaf/0.1/>
SELECT ?name WHERE {
 { SELECT (max(?age) as ?max)
   WHERE { ?person foaf:age ?age } }
 ?senior foaf:age ?max .
 ?senior foaf:name ?name
}

PREFIX foaf: <http://xmlns.com/foaf/0.1/> 
SELECT ?x (month(?date) as ?month)
WHERE { ?x foaf:birthday ?date . }

```
## Several Query Forms
Able to construct a result graph
```sparql
PREFIX foaf: <http://xmlns.com/foaf/0.1/>
ASK { ?person foaf:age 111 . }

PREFIX mit:  <http://www.mit.edu#>
PREFIX corp: <http://mycorp.com/schema#>
CONSTRUCT { ?student a corp:FuturExecutive . }
WHERE     { ?student a mit:Student . }

DESCRIBE <http://fabien.info>

PREFIX foaf: <http://xmlns.com/foaf/0.1/> 
DESCRIBE ?x WHERE { ?x foaf:name "Fabien" }

```
## SPARQL Query Result
- select, ask: XML Results format
- construct, describe: RDF/XML
- JSON
SPARQL Update manage triples:
- Load
- Delete
- Insert
- Copy
- Move
- Add
- etc
## Demos of SPARQL
**Flint** SPARQL Editor - used for editing and trying queries
**Corese** Query Tool. Similar to Flint, but can run queries from files and output as Graph or XML and also can be validated
**Gephi** is used to visualize the graphs from queries
**QAKIS.org** translates langauge queries into sparql, so natural language to sparql querie. 

# Week 4: RDFa
## RDFa: An RDF Syntax inside HTML
**RDF LIght**: contains:
- Vocab
- Prefix
- Resource
- Typeof
- Property
**RDFa Core** contains:
- Content
- Datatype
- About
- Rel
Schema.org 
### Data from the video "an RDF syntax inside HTML"
```html
(...)
<body vocab="http://purl.org/dc/terms/">
 <div resource="/books/web_semantique">
  <h2 property="title" lang="en">A Web of linked data</h2>
  <p>Date: <span property="created">2012-05-01</span>
  <span property="creator" resource="#fg">by</span></p>
 </div>
 <div vocab="http://xmlns.com/foaf/0.1/" resource="#fg" typeof="Person">
   <p> <span property="name">Fabien Gandon</span>,
     phone: <a property="phone" href="tel:+33492965170">+33492965170</a>
     mail: <a property="mbox"
              href="mailto:fabien.gandon@inria.fr">fabien.gandon@inria.fr</a></p>
 </div>
(...)
```

```turtle
@prefix ns1: <http://purl.org/dc/terms/> .
@prefix ns2: <http://xmlns.com/foaf/0.1/> .
</books/web_semantique>
    ns1:title "A Web of linked data"@en ;
    ns1:created "2012-05-01" ; 
    ns1:creator <#fg> .
<#fg> a ns2:Person;
    ns2:mbox <mailto:fabien.gandon@inria.fr>;
    ns2:name "Fabien Gandon" ;
    ns2:phone <tel:+33492965170> .
```

```html
<div vocab="http://schema.org/" typeof="Product">
  <img rel="image" src="dell-30in-lcd.jpg" />
  <span property="name">Dell UltraSharp 30" LCD Monitor</span>

  <div rel="hasAggregateRating" >
    <div typeof="http://schema.org/AggregateRating">
      <span property="ratingValue">87</span>
      out of <span property="bestRating">100</span>
      based on <span property="ratingCount">24</span> user ratings
    </div>
 </div>

  <div rel="offers" >
    <div typeof="http://schema.org/AggregateOffer">
      <span property="lowPrice">$1250</span>
       to <span property="highPrice">$1495</span>
        from <span property="offerCount">8</span> sellers
   </div>
 </div> (...)
```

```html
<html xmlns="http://www.w3.org/1999/xhtml" dir="ltr" lang="en-US"
     xmlns:fb="https://www.facebook.com/2008/fbml"> 
   <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns# YOUR_NAMESPACE: 
            http://ogp.me/ns/apps/YOUR_NAMESPACE#"> 
    <meta property="fb:app_id" content="YOUR_APP_ID" /> 
    <meta property="og:type" content="YOUR_NAMESPACE:recipe" /> 
    <meta property="og:title" content="Stuffed Cookies" /> 
    <meta property="og:image" content="http://example.com/cookie.jpg" /> 
    <meta property="og:description" content="The Turducken of Cookies" /> 
    <meta property="og:url" content="http://example.com/cookie.html"> 
    <script type="text/javascript">
    function postCook()
    {   FB.api('/me/YOUR_NAMESPACE:cook' + '?recipe=http://example.com/cookie.html','post',  (...)       });    }
    </script>
  </head> 
 <body> 
(...)
   <form>
     <input type="button" value="Cook" onclick="postCook()" />
   </form>
 </body> 
</html>
```

## GRDDL: Extract RDF from X(HT)ML
Mechanism to extract RD from html and xml
GRDDL is extractive 
- Can be more resilient

**GRDDL in HTML**
```html
<head profile="http://www.w3.org/2003/g/data-view">
 <title>The man who mistook his wife for a hat</title>
 <link rel="transformation" 
       href="http://www.w3.org/2000/06/dc-extract/dc-extract.xsl" />
 <meta name="DC.Subject" content="clinical tales" /> 
 (...)

```

**GRDDL XML**
```xml
<?xml version="1.0"?>
<?mso-application progid="Excel.Sheet"?>
<Workbook xmlns="urn:schemas-microsoft-com:office:spreadsheet"
  xmlns:grddl="http://www.w3.org/2003/g/data-view#"
  grddl:transformation="excel2rdf.xsl">
(...)
```

**GRDDL** is a mechanism for **G**leaning **R**esource **D**escriptions from **D**ialects of **L**anguages.
## JSON-LD: JSON Syntax for RDF
Specific Reserved Names Prefixed by @
**Compact**: adding a context and shortening rdf
**Expand**: When you remove a context and expand rdf

### Specific Reserved Names
```json-ld
@context: define short names used in the document
@id: identify resources with IRIs or blank nodes
@value: specify the data value of a property
@language: specify the language for a string or the document
@type: set the type of a value or a resource
@vocab: prefix IRI to expand properties and values in @type
@base: used to set the base IRI
@container: used to set the default container type for a term
@index: specify a container is used to index information
@list: an ordered list of data
@set: an unordered set of data
@reverse: express reverse properties
@graph: indicate a graph
```

### Example Data in Turtle
```json-ld
@prefix foaf: <http://xmlns.com/foaf/0.1/> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .
<http://ns.inria.fr/fabien.gandon#me> a foaf:Person ;
 foaf:familyName "Gandon"@fr ;
 foaf:givenName "Fabien"@fr ;
 foaf:age 40 ;
 foaf:birthday "--07-31"^^xsd:gMonthDay ;
 foaf:homepage <http://fabien.info> ;
 foaf:knows [ a foaf:Person ; foaf:name "Olivier Corby" ],
   [ a foaf:Person ; foaf:name "Catherine Faron-Zucker" ].
```

### Sample Exampel in Simpel JSON-LD
```json-ld
{
 "@id": "http://ns.inria.fr/fabien.gandon#me",
 "@type": "http://xmlns.com/foaf/0.1/Person",
 "http://xmlns.com/foaf/0.1/age": 40,
 "http://xmlns.com/foaf/0.1/birthday": {
    "@type": "http://www.w3.org/2001/XMLSchema#gMonthDay", "@value": "--07-31" },
 "http://xmlns.com/foaf/0.1/familyName": { "@value": "Gandon" ,"@language": "fr" },
 "http://xmlns.com/foaf/0.1/givenName": { "@value": "Fabien" , "@language": "fr" },
 "http://xmlns.com/foaf/0.1/homepage": {"@id": "http://fabien.info" },
 "http://xmlns.com/foaf/0.1/knows": [
   { "@type": "http://xmlns.com/foaf/0.1/Person",
     "http://xmlns.com/foaf/0.1/name": "Catherine Faron-Zucker" },
   { "@type": "http://xmlns.com/foaf/0.1/Person",
     "http://xmlns.com/foaf/0.1/name": "Olivier Corby" }
  ]
}
```

### Sample Example in JSON-LD with Context
```json-ld
{ "@context": {
    "foaf": "http://xmlns.com/foaf/0.1/" ,
    "xsd": "http://www.w3.org/2001/XMLSchema#"
  },
  "@graph": [
    { "@id": "http://ns.inria.fr/fabien.gandon#me",  "@type": "foaf:Person",
      "foaf:age": 40,
      "foaf:birthday": { "@type": "xsd:gMonthDay", "@value": "--07-31" },
      "foaf:familyName": { "@value": "Gandon" , "@language": "fr" },
      "foaf:givenName": { "@value": "Fabien" , "@language": "fr" },
      "foaf:homepage": { "@id": "http://fabien.info" },
      "foaf:knows": [ { "@type": "foaf:Person", "foaf:name": "Olivier Corby" } , 
    { "@type": "foaf:Person", "foaf:name": "Catherine Faron-Zucker"}
          ]
    }
  ]
}
```

### Linked from JSON_LD to Turtle
```json-ld
@prefix : <http://schema.org/> .
<http://data.org/Fg-fjekzI> :familyName "Gandon" ;
    :givenName "Fabien" ;
    :jobTitle "Research Director at Inria"@en .}
```

### Google Knowledge Graph Search API in JSON-LD
```json-ld
{ "@context": {
    "@vocab": "http://schema.org/",
    "goog": "http://schema.googleapis.com/",
    "resultScore": "goog:resultScore",
    "detailedDescription": "goog:detailedDescription",
    "EntitySearchResult": "goog:EntitySearchResult",
    "kg": "http://g.co/kg"
  },
  "@type": "ItemList",
  "itemListElement": [
    {
      "@type": "EntitySearchResult",
      "result": { "@id": "kg:/m/0dl567", "name": "Taylor Swift",
        "@type": [ "Thing", "Person" ],
        "description": "Singer-songwriter",
        "image": {
          "contentUrl": "https://t1.gstatic.com/images?q=tbn:ANd9GcQmVDAhjhWnN2OWys2ZMO3PGAhupp5tN2LwF_BJmiHgi19hf8Ku",
          "url": "https://en.wikipedia.org/wiki/Taylor_Swift",
          "license": "http://creativecommons.org/licenses/by-sa/2.0"
        },
        "detailedDescription": {
          "articleBody": "Taylor Alison Swift is an American singer-songwriter and actress. Raised in Wyomissing,
              Pennsylvania, she moved to Nashville, Tennessee, at the age of 14 to pursue a career in country music. ",
          "url": "http://en.wikipedia.org/wiki/Taylor_Swift",
          "license":
         "https://en.wikipedia.org/wiki/Wikipedia:Text_of_Creative_Commons_Attribution-ShareAlike_3.0_Unported_License"
        },
        "url": "http://taylorswift.com/"
      },
      "resultScore": 896.576599
    }
  ]
}
```

## Tabular Data and Metadata (CSV)
Same mechanism as JSON (attach a context)
### Metadata to Document the CSV
```json
{
  "@context": "http://www.w3.org/ns/csvw",
  "dc:title": "Unemployment in Europe (monthly)"
  "dc:description": "Harmonized unemployment data for European countries."
  "dc:creator": "Eurostat",
  "tables": [{
    "url": "countries.csv",
    "dc:title": "Countries"
  }, {"url": "country-groups.csv",
      "dc:title": "Country groups"
  }, {"url": "unemployment.csv",
    "dc:title": "Unemployment (monthly)",
    "dc:description": "The total number of people unemployed"
  }]
} (...)
```
### Mapping of the CSV Structure: Create Resources
```json-ld
{
  "@context": "http://www.w3.org/ns/csvw",
  "url": "countries.csv",
  "tableSchema": {
    "aboutUrl": "http://example.org/country/{code}",
    "columns": [{
      "titles": "country",
      "name": "code",
      "suppressOutput": true
    }
(...)
```

### Mapping of the CSV Structure: Map Columns
```json-ld
(...){
      "titles": "name (en)",
      "lang": "en",
      "propertyUrl": "schema:name"
    },{
      "titles": "name (fr)",
      "lang": "fr",
      "propertyUrl": "schema:name"
    },{
      "titles": "name (de)",
      "lang": "de",
      "propertyUrl": "schema:name"
    }, (...)
```

### Mapping of the CSV Structure: Nested Objects
```json-ld
(...) {
      "titles": "latitude",
      "datatype": "number",
      "aboutUrl": "http://example.org/country/{code}#geo",
      "propertyUrl": "schema:latitude"
    },{
      "titles": "longitude",
      "datatype": "number",
      "aboutUrl": "http://example.org/country/{code}#geo",
      "propertyUrl": "schema:longitude"
    },{
      "virtual": true,
      "propertyUrl": "rdf:type",
      "valueUrl": "schema:Country"
    },{
      "virtual": true,
      "propertyUrl": "schema:geo",
      "valueUrl": "http://example.org/country/{code}#geo"
    },{
      "virtual": true,
      "aboutUrl": "http://example.org/country/{code}#geo",
      "propertyUrl": "rdf:type",
      "valueUrl": "schema:GeoCoordinates"
    }]
```

### Turtle Result
```turtle
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix schema: <http://schema.org/> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .

<http://example.org/country/at> a schema:Country;
   schema:geo <http://example.org/country/at#geo>;
   schema:name "Austria"@en, "Autriche"@fr, "Österreich"@de .
<http://example.org/country/at#geo> a schema:GeoCoordinates;
   schema:latitude 4.76965545e1; schema:longitude 1.334598005e1 .

<http://example.org/country/be> a schema:Country;
   schema:geo <http://example.org/country/be#geo>;
   schema:name "Belgium"@en, "Belgique"@fr, "Belgien"@de .
<http://example.org/country/be#geo> a schema:GeoCoordinates;
   schema:latitude 5.0501045e1; schema:longitude 4.47667405e0 .

<http://example.org/country/bg> a schema:Country;
   schema:geo <http://example.org/country/bg#geo>;
   schema:name "Bulgaria"@en, "Bulgarie"@fr, "Bulgarien"@de .
<http://example.org/country/bg#geo> a schema:GeoCoordinates;
   schema:latitude 4.272567375e1; schema:longitude 2.54823218e1 .
```
### JSON Results
```json-ld
[{
  "@id": "http://example.org/country/at",
  "@type": "schema:Country",
  "schema:name": ["Austria", "Autriche", "Österreich"],
  "schema:geo": {
    "@id": "http://example.org/country/at#geo",
    "@type": "schema:GeoCoordinates",
    "schema:latitude": 47.6965545,
    "schema:longitude": 13.34598005
  }
}, {
  "@id": "http://example.org/country/be",
  "@type": "schema:Country",
  "schema:name": ["Belgium", "Belgique", "Belgien"],
  "schema:geo": {
    "@id":"http://example.org/country/be#geo",
    "@type": "schema:GeoCoordinates",
    "schema:latitude": 50.501045,
    "schema:longitude": 4.47667405
  }
},

 {
  "@id": "http://example.org/country/bg",
  "@type": "schema:Country",
  "schema:name": ["Bulgaria", "Bulgarie", "Bulgarien"],
  "schema:geo": {
    "@id": "http://example.org/country/bg#geo",
    "@type": "schema:GeoCoordinates",
    "schema:latitude": 42.72567375,
    "schema:longitude": 25.4823218
  }
}]
```


## R2RML: Integration with Databases
2 ways to integrate
1) mapping
2) default transformation/ direct mapping
	1) Uses a set of rules to ensure data integrity
### Mapping Example
```json
@prefix rr: <http://www.w3.org/ns/r2rml#>.
@prefix foaf: <http://xmlns.com/foaf/0.1/>.
@prefix foaf: <http://purl.org/dc/elements/1.1/>.

:Author_Table rdf:type rr:TriplesMap ;
  rr:subjectMap [
    rr:termtype "BlankNode" ; 
    rr:column "ID" ; 
  ] ;
  rr:predicateObjectMap [
    rr:predicateMap [ rr:predicate foaf:name ];
    rr:objectMap    [  rr:column "FullName"  ] 
  ] ;
  rr:predicateObjectMap [
    rr:predicateMap [ rr:predicate foaf:homepage ];
    rr:objectMap [    rr:column "url" ;    rr:termtype "IRI" ] 
  ] .

  :Book_Table rdf:type rr:TriplesMap ;
  rr:subjectMap [  rr:template "http://isbnplus.org/{ISBN}"; ];
  rr:predicateObjectMap [
    rr:predicateMap [  rr:predicate dc:title  ];
    rr:objectMap [     rr:column "Title"     ] 
  ] ;
  rr:predicateObjectMap [
    rr:predicateMap [  rr:predicate dc:date   ];
    rr:objectMap [     rr:column "Release" ;  ] 
  ] ;
  rr:refPredicateObjectMap [
  rr:refPredicateMap [  rr:predicate dc:creator ];
  rr:refObjectMap
    [  rr:parentTriplesMap :Author_Table ;
       rr:joinCondition  "{child}.Author= {parent}.ID"
    ] 
  ].
```

## LDP: a REST API to linked data
- two types of resources
	- With RDF representation
	- Other formats
4 types of containers for data
1) Containers: collection fo resources
2) Basic Container: simple containment vocabulary
3) direct container: Domain specific membership assertions
4) indirect container: control the URI of the new domain-specific member resource


### LDP Vocabulary
```json
@prefix : <http://www.w3.org/ns/ldp#> 
:Resource : A HTTP-addressable resource whose lifecycle is managed by a LDP server.
:RDFSource : LDP Resource whose state is represented as RDF.
:NonRDFSource : LDP Resource whose state is NOT represented as RDF.
:Container : RDF Source that conforms to patterns and conventions for managing membership.
:member : Default membership predicate.
:contains : Links a container with resources created through the container.
:BasicContainer : Container that uses an LDP simple predicate to link to contained resources.
:DirectContainer : Container that allows a custom properties to link contained resources.
:IndirectContainer : Container that allows maximum flexibility to form the membership triples.
:hasMemberRelation : Indicates the predicate linking a specified resource to a new member URI.
:isMemberOfRelation : Indicates the predicate linking a new member URI to a specified resource.
:membershipResource :  Indicates the URI of the fixed resource of a membership triple.
:insertedContentRelation : Indicates the property in a creation request with a member-URI value.
```


## Further Reading:
1) [Data on the web best practices](https://www.w3.org/TR/dwbp/)
2) [Linked Data Patterns](https://patterns.dataincubator.org/)
3) [The Linked Open Data Cloud](https://lod-cloud.net/)
4) [Scalable Vector Graphics](https://www.w3.org/TR/SVG/)
5) [W3C Data Activity](https://www.w3.org/2013/data/)
6) [Semantic Web Development Tools](https://www.w3.org/2001/sw/wiki/Tools)
7) [Semantic Web Science Association](https://swsa.semanticweb.org/content/international-semantic-web-conference-iswc)
8) [IJCAI Conferences](https://www.ijcai.org/)
9) [Web Intelligence Consortium](https://wi-consortium.org/)
10) [Science Direct](https://www.sciencedirect.com/browse/journals-and-books)
11) [Semantic Web Journal](https://www.semantic-web-journal.net/)
12) [ECCAI](https://eccai.org/)
