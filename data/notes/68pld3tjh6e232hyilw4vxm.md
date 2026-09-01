
# This is PMA's daily notebook.

Today is 2022.08.14

## Todo today

- [ ] 
- [ ] 
- [ ] 

## Doing 

- 
- 
- 

## Done

-
-
-

## Notes

- This morning I am wanting to use a docker image which is supposed to run on localhost:8080
Howver this one is allready used 
see
![](/assets/images/2022-08-14-08-02-02.png)

I need to find which process is using this and stop it 


Solution one. Use findanyfile and search for "It works!" string 
Not working 

Found https://www.maketecheasier.com/setup-local-web-server-all-platforms/

cd /Library/WebServer/Documents/

So sudo apachectl stop  should be OK now

Trying to run Rhizomer https://rhizomer.rhizomik.net/about


https://graph.metabomaps.com/repositories/ENPKG?query=PREFIX%20enpkg%3A%20%3Chttps%3A%2F%2Fwww.sinergiawolfender.org%2Fjlw%2F%3E%20PREFIX%20rdf%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%20%20SELECT%20%3Factive_extract%20WHERE%20%7B%20%3Factive_extract%20rdf%3Atype%20enpkg%3ALabExtract%20.%20%3Factive_extract%20enpkg%3Ahas_bioassay_results%20%3Fbiores%20.%20%3Factive_extract%20enpkg%3Ahas_bioassay_results%20%3Ftoxres%20.%20%3Fbiores%20rdf%3Atype%20enpkg%3ATcruzi_10ugml%20.%20%3Ftoxres%20rdf%3Atype%20enpkg%3AL6_10ugml%20.%20%3Fbiores%20enpkg%3Ainhibition_percentage%20%3Ftc_inhib%20.%20%3Ftoxres%20enpkg%3Ainhibition_percentage%20%3Fl6_inhib%20.%20FILTER((%3Ftc_inhib%20%3E%2080)%20%26%26%20(%3Fl6_inhib%20%3C%2050))%20%7D&queryLn=sparql


https://dbgikg.commons-lab.org/repositories/DBGI-KG?query=PREFIX%20enpkg%3A%20%3Chttps%3A%2F%2Fenpkg.commons-lab.org%2Fkg%2F%3E%0Aselect%20%3Fdbgi_sample%20%3Fsubmitted_taxon%20where%20%7B%20%0A%09%3Fextract%20enpkg%3Ahas_lab_process%20%3Fdbgi_sample%20%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20enpkg%3Asubmitted_taxon%20%3Fsubmitted_taxon%20.%0A%7D%0A=sparql

https://dbgikg.commons-lab.org/sparql?name=dbgi_plants&infer=true&sameAs=true&query=PREFIX%20enpkg%3A%20%3Chttps%3A%2F%2Fenpkg.commons-lab.org%2Fkg%2F%3E%0Aselect%20%3Fdbgi_sample%20%3Fsubmitted_taxon%20where%20%7B%20%0A%09%3Fextract%20enpkg%3Ahas_lab_process%20%3Fdbgi_sample%20%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20enpkg%3Asubmitted_taxon%20%3Fsubmitted_taxon%20.%0A%7D%0A

https://dbgikg.commons-lab.org/repositories/DBGI-KG?query=PREFIX%20enpkg%3A%20%3Chttps%3A%2F%2Fenpkg.commons-lab.org%2Fkg%2F%3E%20select%20%3Fdbgi_sample%20%3Fsubmitted_taxon%20where%20%7B%20%20%09%3Fextract%20enpkg%3Ahas_lab_process%20%3Fdbgi_sample%20%3B%20%20%20%20%20%20%20%20%20%20%20%20%20%20enpkg%3Asubmitted_taxon%20%3Fsubmitted_taxon%20.%20%7D&queryLn=sparql



https://graph.metabomaps.com/repositories

https://graph.metabomaps.com/sparql


Made a wikidata dump https://wdumps.toolforge.org/dumps?last=2569



- 
- 

## Todo tomorrow

- [ ] 
- [ ] 
- [ ] 


## Today I learned that 

- 