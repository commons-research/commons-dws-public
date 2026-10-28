# [Curie (w3)](https://www.w3.org/TR/curie/)
Curie is a datatype that allows for definition and scoped names that map to URIs. CURIE: Compact URI. CURIEs are a superset of **QNames**. 
- designed to be used in attribute values
- expand to any IRI. QNames are value pairs
- usable in non-XML grammars (SPARQL), and used in XML languages that do not support XML namespaces. 

## Usage
Used in same places as QNames. 

SPARQL Example: 
```sparql
PREFIX foaf:   <http://xmlns.com/foaf/0.1/> 
SELECT ?x ?name 
WHERE  { ?x foaf:name ?name }
```
`PREFIX` keyword defines the prefix used in CURIE identifiers. 