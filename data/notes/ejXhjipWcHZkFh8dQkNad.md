Batch creation of short url for WD SPARQL queries.

Thanks to Jo I can  start with this curl command 

```bash
curl 'https://meta.wikimedia.org/w/api.php' -X POST -H 'User-Agent: PMAs Query shortener' -H 'Accept: application/json, text/javascript, /; q=0.01' -H 'Accept-Language: en-US,en;q=0.5' --compressed -H 'Referer: https://meta.wikimedia.org/wiki/Special:UrlShortener' -H 'Content-Type: application/x-www-form-urlencoded; charset=UTF-8' -H 'X-Requested-With: XMLHttpRequest' -H 'Origin: https://meta.wikimedia.org' -H 'DNT: 1' -H 'Connection: keep-alive' -H 'Sec-Fetch-Dest: empty' -H 'Sec-Fetch-Mode: cors' -H 'Sec-Fetch-Site: same-origin' -H 'TE: trailers' --data-raw 'action=shortenurl&format=json&url=https%3A%2F%2Fquery.wikidata.org%2F%23FOU%250A'
```


I now need to automatise the creation of the commands starting from a list of plants
As a supplemental option add a qr code for this

Le's try an example with the query for Abrus precatorius

https://w.wiki/45ZX

https://query.wikidata.org/#SELECT%20%3Fchemical_compound%20%3Fchemical_compoundLabel%20%3Fqueried_taxa%20%3Fqueried_taxaLabel%20%3Freference%20%3FreferenceLabel%20WHERE%20%7B%0A%20%20VALUES%20%3Fchemical_classes%20%7B%0A%20%20%20%20wd%3AQ11173%20%23%20chemical%20compound%0A%20%20%20%20wd%3AQ59199015%20%23%20group%20of%20stereoisomers%0A%20%20%7D%0A%20%20%3Fchemical_compound%20wdt%3AP31%20%3Fchemical_classes.%20%23%20We%20select%20instance%20of%20the%20chemical%20classes%20%28chemical%20compound%20or%20group%20of%20stereoisomers%29%0A%20%20VALUES%20%3Fqueried_taxa%20%7B%0A%20%20%20%20wd%3AQ190887%20%23Enter%20the%20Wikidata%20identifier%20of%20your%20taxa%20of%20interest%0A%20%20%20%20%23%20You%20can%20remove%20the%20Qxxxxxxx%20id%20and%20hit%20Ctrl%2Bspace%2C%20thype%20in%20the%20first%20letters%20and%20it%20should%20autocomplete%0A%20%20%7D%0A%20%20%7B%0A%20%20%20%20%3Fchemical_compound%20p%3AP703%20%3Fstmt.%20%23%20We%20select%20chemical%20classes%20having%20the%20found%20in%20taxon%20statement%0A%20%20%20%20%3Fstmt%20ps%3AP703%20%3Fqueried_taxa.%20%23%20and%20the%20restrict%20the%20found%20in%20taxon%20statement%20to%20match%20our%20queried%20taxa%0A%20%20%20%20OPTIONAL%20%7B%0A%20%20%20%20%20%20%3Fstmt%20prov%3AwasDerivedFrom%20%3Fref.%0A%20%20%20%20%20%20%3Fref%20pr%3AP248%20%3Freference.%20%23%20We%20optionally%20return%20the%20reference%20if%20present%20stated%20in%0A%20%20%20%20%7D%0A%20%20%7D%0A%20%20SERVICE%20wikibase%3Alabel%20%7B%20bd%3AserviceParam%20wikibase%3Alanguage%20%22%5BAUTO_LANGUAGE%5D%2Cen%22.%20%7D%0A%7D


curl 'https://meta.wikimedia.org/w/api.php' -X POST -H 'User-Agent: PMAs Query shortener' -H 'Accept: application/json, text/javascript, /; q=0.01' -H 'Accept-Language: en-US,en;q=0.5' --compressed -H 'Referer: https://meta.wikimedia.org/wiki/Special:UrlShortener' -H 'Content-Type: application/x-www-form-urlencoded; charset=UTF-8' -H 'X-Requested-With: XMLHttpRequest' -H 'Origin: https://meta.wikimedia.org' -H 'DNT: 1' -H 'Connection: keep-alive' -H 'Sec-Fetch-Dest: empty' -H 'Sec-Fetch-Mode: cors' -H 'Sec-Fetch-Site: same-origin' -H 'TE: trailers' --data-raw 'action=shortenurl&format=json&url=https://query.wikidata.org/#SELECT%20%3Fchemical_compound%20%3Fchemical_compoundLabel%20%3Fqueried_taxa%20%3Fqueried_taxaLabel%20%3Freference%20%3FreferenceLabel%20WHERE%20%7B%0A%20%20VALUES%20%3Fchemical_classes%20%7B%0A%20%20%20%20wd%3AQ11173%20%23%20chemical%20compound%0A%20%20%20%20wd%3AQ59199015%20%23%20group%20of%20stereoisomers%0A%20%20%7D%0A%20%20%3Fchemical_compound%20wdt%3AP31%20%3Fchemical_classes.%20%23%20We%20select%20instance%20of%20the%20chemical%20classes%20%28chemical%20compound%20or%20group%20of%20stereoisomers%29%0A%20%20VALUES%20%3Fqueried_taxa%20%7B%0A%20%20%20%20wd%3AQ190887%20%23Enter%20the%20Wikidata%20identifier%20of%20your%20taxa%20of%20interest%0A%20%20%20%20%23%20You%20can%20remove%20the%20Qxxxxxxx%20id%20and%20hit%20Ctrl%2Bspace%2C%20thype%20in%20the%20first%20letters%20and%20it%20should%20autocomplete%0A%20%20%7D%0A%20%20%7B%0A%20%20%20%20%3Fchemical_compound%20p%3AP703%20%3Fstmt.%20%23%20We%20select%20chemical%20classes%20having%20the%20found%20in%20taxon%20statement%0A%20%20%20%20%3Fstmt%20ps%3AP703%20%3Fqueried_taxa.%20%23%20and%20the%20restrict%20the%20found%20in%20taxon%20statement%20to%20match%20our%20queried%20taxa%0A%20%20%20%20OPTIONAL%20%7B%0A%20%20%20%20%20%20%3Fstmt%20prov%3AwasDerivedFrom%20%3Fref.%0A%20%20%20%20%20%20%3Fref%20pr%3AP248%20%3Freference.%20%23%20We%20optionally%20return%20the%20reference%20if%20present%20stated%20in%0A%20%20%20%20%7D%0A%20%20%7D%0A%20%20SERVICE%20wikibase%3Alabel%20%7B%20bd%3AserviceParam%20wikibase%3Alanguage%20%22%5BAUTO_LANGUAGE%5D%2Cen%22.%20%7D%0A%7D'

This doesnt work.

As Jo said


Bjonnh: ça marche ça

Bjonnh: faut juste urlencoder l'url de ta query (donc double encodage!)

Bjonnh: python fait ça facile

Bjonnh: et tu mets ça dans le paramètre url

Bjonnh: tout ça tu peux le faire en python avec requests et urlencode. Left as an exercise for you ;)

