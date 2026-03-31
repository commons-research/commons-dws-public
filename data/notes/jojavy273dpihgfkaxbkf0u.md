
# SPARQL query index

This note separates curated query links by endpoint. Wikidata Query Service and Qlever queries are listed first. Raw snippets, embedded URLs, endpoint experiments, and incomplete material are grouped at the end.

## Wikidata Query Service

### Natural products and taxa

- `Compounds from a taxon or clade`: Retrieve compounds reported for a taxon and its descendant taxa. Query: https://w.wiki/4CMd. With references: https://w.wiki/4CMg.
- `Compounds from a taxon or clade with bioactivity`: Same scope, limited to compounds with described bioactivity. Query: https://w.wiki/3YMo. Treemap: https://w.wiki/3YMt. Zenodo archive: https://w.wiki/4N8G. Results: https://w.wiki/4N8J.
- `Organisms containing compounds for a MeSH term`: Find organisms reported to contain compounds linked to a chosen MeSH identifier. Query: https://w.wiki/vo9. Treemap: https://w.wiki/zkK.
- `Compounds by parent taxon name`: Match compounds in organisms whose parent taxon has a given name. Query: https://w.wiki/vo$. Grouped and counted: https://w.wiki/368M. With molecular formula and accurate mass: https://w.wiki/36Ki.
- `Compounds with explicit "found in taxon"`: Return compounds that already carry a `found in taxon` statement. Query: https://w.wiki/q$H.
- `Compounds present in invasive species`: Check compounds reported in invasive taxa. Queries: https://w.wiki/32fa and https://w.wiki/32fc.
- `Compounds in vegetables`: List compounds found in vegetable taxa. Query: https://w.wiki/4EAh.
- `Compounds in toxic plants`: List compounds found in toxic plants. Query: https://w.wiki/4EAw.
- `Compounds in IUCN threatened species`: Explore compounds reported from threatened taxa. Queries: https://w.wiki/4EGg and https://w.wiki/4EHQ.
- `Compounds from long-lived taxa`: Explore compounds in taxa filtered by lifespan, with pre-classified and classed variants. Queries: https://w.wiki/4EH8, https://w.wiki/4EHB, https://w.wiki/4EHD, https://w.wiki/4EHH, https://w.wiki/4EHJ, and https://w.wiki/4EHP.
- `Compounds from species with IUCN status and lifespan`: Combine conservation status and lifespan filters in one occurrence query. Query: https://w.wiki/4EMw.
- `Compounds from taxa filtered by SMILES regex`: Apply a SMILES regex to descendant-taxon compound retrieval. Query: https://w.wiki/4JWv.
- `Melochia genus queries`: Retrieve compounds for Melochia, including a quinoline-focused version. Queries: https://w.wiki/4VYy and https://w.wiki/4wbY.
- `Compounds produced by plants endemic to New Caledonia`: Retrieve endemic-plant compounds, including a cleaner mass and molecular-formula variant. Queries: https://w.wiki/57ap and https://w.wiki/57hN.
- `Compounds found in meals`: Explore compounds associated with meals and ingredients. Queries: https://w.wiki/5Bs7 and https://w.wiki/5Bs9.
- `Compounds of the Arachnida class`: Retrieve compounds reported from Arachnida taxa. Query: https://w.wiki/5Doy.
- `Compounds from taxa and descendants, cleaned`: Cleaner descendant-taxon occurrence query. Query: https://w.wiki/5LJf.
- `References and occurrences of alstonine`: List occurrence records and supporting references. Query: https://w.wiki/5WXP.
- `OTL vs WFO taxon occurrence comparison`: Compare occurrence coverage for a given taxon identifier across taxonomic mappings. Query: https://w.wiki/5WYx.
- `Actinobacteria compounds and references`: Retrieve compounds and references for the Actinobacteria phylum, with a ChEMBL variant. Queries: https://w.wiki/5kCC and https://w.wiki/5kDz.
- `Compounds and references for example taxa`: Compact presentation examples around *Streptomyces* and related species. Queries: https://w.wiki/33V$, https://w.wiki/33WG, https://w.wiki/33WA, https://w.wiki/4EMf, and https://w.wiki/4EMo.
- `Images of taxa for which no chemical has been reported`: https://w.wiki/JyNC and https://tinyurl.com/22qgukqr (Qlever based endpoint - 1 pic per taxon)
- `Count taxon for which no chemistry is reported` : https://qlever.dev/wikidata/vBJNhg 

### Authors, articles, and roles

- `Molecules isolated by an author`: List molecules isolated by a chosen author. Queries: https://w.wiki/32D6 and https://w.wiki/32$m.
- `Authors by scaffold count`: Count authors associated with a given scaffold. Query: https://w.wiki/32DF.
- `Authors by compound count`: Compare authors by compound counts, including a bar-chart view. Queries: https://w.wiki/32Vb and https://w.wiki/32Vk.
- `Authors by substructure or similarity`: Compare authors using substructure- and similarity-refinable variants. Queries: https://w.wiki/32Vd, https://w.wiki/32Vg, https://w.wiki/32Vj, and https://w.wiki/32Vi.
- `Authors isolating compounds with a role`: Count authors associated with substances having a given biological role. Query: https://w.wiki/32Vr.
- `Articles, substances, and organisms for a role`: Return article, substance, and organism tuples for a selected biological role. Query: https://w.wiki/32Vu.
- `Distinct antibiotics`: Retrieve antibiotic-focused records. Query: https://w.wiki/32Vv.
- `Articles documenting "found in taxon" by author country`: Literature-focused view filtered by author country. Query: https://w.wiki/4z7M.
- `Journal-focused literature sampling`: Limit or sample papers by journal, including missing `found in taxon` checks. Queries: https://w.wiki/5imt, https://w.wiki/5imj, https://w.wiki/5ipT, https://w.wiki/5ity, and https://w.wiki/5it$.
- `Researcher lookup by field, country, and sex`: Explore people by research topic, organisation country, and sex. Query: https://w.wiki/65F4.

### Structural and special-purpose queries

- `Genus counts for indole substructures`: Aggregate organisms producing compounds with an indolic moiety at a higher taxon level. Query: https://w.wiki/xMN.
- `Drug-protein interaction`: Explore natural products linked to gene products, diseases, and biological processes. The draft SPARQL is kept in the source note.
- `Chemotax graph queries`: Early chemotax graph exploration. Queries: https://w.wiki/32q9, https://w.wiki/32qC, and https://w.wiki/32qN.
- `Pathway experiments`: Early pathway-oriented exploration. Queries: https://w.wiki/4EK7 and https://w.wiki/4EK9.
- `Biologists with Twitter and Swiss examples`: Lightweight demonstration queries for people and geography. Queries: https://w.wiki/4EKW, https://w.wiki/4EKM, https://w.wiki/4EKk, and https://w.wiki/4EKE.
- `Most described taxa and molecular-formula helpers`: Cleaned per-taxon compounds, formula filters, whole-graph views, and reference-aware molecular-formula searches. Queries: https://w.wiki/7WL3, https://w.wiki/7WL9, https://w.wiki/7WLb, https://w.wiki/7Woz, https://w.wiki/7YDr, https://w.wiki/9AAN, and https://w.wiki/9AAe.
- `Genome, proteome, metabolome helper`: Simple query scaffold for omics-linked exploration. Query: https://w.wiki/9qZT.
- `OTT identifiers from iNaturalist-linked taxa`: Retrieve OTT identifiers from iNat-linked taxon records. Queries: https://w.wiki/rL and https://w.wiki/9tCe.

### Specific structure-driven query sets

- `7-methyl-2,3,5,7a-tetrahydro-1H-pyrrolizin-1-ol`: Aggregate producing taxa, return referenced metadata, and count distinct compounds. Queries: https://w.wiki/6w6J, https://w.wiki/6w7R, and https://w.wiki/6w7S.
- `7-methyl-2,3,5,7a-tetrahydro-1H-pyrrolizine-1,1-diol`: Aggregate producing taxa, return referenced metadata, and count distinct compounds. Queries: https://w.wiki/6w6R, https://w.wiki/6w7L, and https://w.wiki/6w7N.
- `7-methyl-2,3,5,7a-tetrahydro-1H-pyrrolizine-1,3-diol`: Aggregate producing taxa, return referenced metadata, and count distinct compounds. Queries: https://w.wiki/6w6T, https://w.wiki/6w7G, and https://w.wiki/6w7H.
- `1-hydroxy-7-methyl-1,2,3,4,5,7a-hexahydropyrrolizin-4-ium-4-olate`: Aggregate producing taxa, return referenced metadata, and count distinct compounds. Queries: https://w.wiki/6w6a, https://w.wiki/6w73, and https://w.wiki/6w77.

## Qlever

### Wikidata-backed Qlever summaries

- `WD OTT ids for LOTUS taxa`: Retrieve OTT identifiers for LOTUS taxa from the Qlever Wikidata service. Query: https://qlever.cs.uni-freiburg.de/wikidata/TqdMNf.
- `WD taxa lacking OTT ids`: Identify Wikidata taxa missing OTT identifiers. Query: https://qlever.cs.uni-freiburg.de/wikidata/ThyZSf.
- `LOTUS chemical count`: Count distinct LOTUS chemicals. Query: https://qlever.cs.uni-freiburg.de/wikidata/0Slm8l.
- `LOTUS chemical count with isomeric SMILES`: Count LOTUS chemicals carrying isomeric SMILES. Query: https://qlever.cs.uni-freiburg.de/wikidata/wnFz75.
- `LOTUS organism count`: Count distinct LOTUS organisms. Query: https://qlever.cs.uni-freiburg.de/wikidata/1e5Rdg.
- `LOTUS organism count with taxon name`: Same count with taxon-name context. Query: https://qlever.cs.uni-freiburg.de/wikidata/f0F9Y4.
- `LOTUS molecule-taxon-reference tuple count`: Count molecule-taxon-reference tuples in LOTUS. Query: https://qlever.dev/wikidata/q3SRt7.
- `LOTUS molecule-taxon-reference tuple list`: Inspect molecule-taxon-reference tuples in LOTUS. Query: https://qlever.dev/wikidata/HqZC6p.
- `Gather chemicals from ingredients of a dish`: Retrieve chemicals linked to dish ingredients through the Qlever Wikidata service. Query: https://qlever.dev/wikidata/9NZJ4w.

### Metrin KG ecological interaction queries

- `Betula tripartite interaction lookup`: Explore tripartite interaction chains around *Betula*, with taxonomy and reduced-lookup variants. Queries: https://qlever.earthmetabolome.org/metrin-kg/swBuop, https://qlever.earthmetabolome.org/metrin-kg/WayY7B, and https://qlever.earthmetabolome.org/metrin-kg/BBQxuv.
- `Direct interactions involving Betula`: Return all direct interaction records touching *Betula* without the tripartite constraint. Query: https://qlever.earthmetabolome.org/metrin-kg/5PGcG8.
- `Directional interaction type summary for a fixed taxon`: Summarise direct interactions by type and source/target direction without federated Wikidata lookup. Query: https://qlever.earthmetabolome.org/metrin-kg/ORAG5S.
- `Directional interaction network with taxonomic enrichment`: Return direct interactions for a fixed taxon together with taxonomic enrichment from Wikidata. Query: https://qlever.earthmetabolome.org/metrin-kg/YRhcG1.
- `Fixed taxon -> interactors -> plants`: Retrieve all interacting organisms and all plants connected to those organisms by an `eats` relation. Query: https://qlever.earthmetabolome.org/metrin-kg/7kz9Uf.
- `Tripartite ecological interaction and plant metabolite retrieval`: Build a multi-level ecological network centered on a fixed taxon and return compounds produced by eaten plants. Query: https://qlever.earthmetabolome.org/metrin-kg/sDLjL0.
- `Sub-400 Da metabolite ranking in a trophic network`: Rank low-mass plant metabolites by number of producing plants within a trophic neighbourhood. Query: https://qlever.earthmetabolome.org/metrin-kg/5pioIC.
- `Directional interaction-herbivory chain`: Model `any taxon -> fixed taxon -> eaten plant -> produced compounds` with Wikidata taxonomic enrichment. Query: https://qlever.earthmetabolome.org/metrin-kg/hwyrI9.
- `Configurable interaction-herbivory chain`: Same pattern as above, but restrictable to selected ecological relation types. Query: https://qlever.earthmetabolome.org/metrin-kg/dcnZT3.
- `Plants eaten by a fixed taxon and their produced compounds`: Simpler consumer -> plant -> compound retrieval with plant taxonomy enrichment. Query: https://qlever.earthmetabolome.org/metrin-kg/kcW6tc.
- `Sub-400 Da metabolites from plants eaten by a fixed taxon`: Rank low-mass metabolites from plants eaten by a chosen consumer taxon. Query: https://qlever.earthmetabolome.org/metrin-kg/mixIFs.
- `Parasitoid-herbivory-plant chains`: Extract `A parasitoidOf B`, `B eats plant` tripartite chains with Wikidata taxonomy. Query: https://qlever.earthmetabolome.org/metrin-kg/uXLCRi.

## Curated from to-curate

### IDSM and Sachem review batch

- `IDSM-assisted compound occurrence lookup`: Use an IDSM-powered structural search to retrieve Wikidata compounds and their reported taxon occurrences from a substructure-based query. Query: https://w.wiki/xMJ.
- `Referenced structure-organism pairs on Wikidata`: Draft IDSM/Wikidata SPARQL returning structure, InChIKey, producing taxon, and reference DOI for referenced `P703` statements. Source: raw SPARQL block in `wikidata.sparql.md`.
- `ChEBI substructure search through Sachem`: Draft Sachem SPARQL using `SERVICE endpoint:chebi` to run a substructure search and list matching compounds with labels. Source: raw SPARQL block in `wikidata.sparql.md`.

## Remaining material and queries to curate

- `Remaining IDSM and Sachem material`: The endpoint note and `Sachem grand parents` still need a final label and placement. Links: https://idsm.elixir-czech.cz:2443/sachem/#/search and https://w.wiki/32Wz.
- `Generic LOTUS query bundle`: Unnamed LOTUS variants still need descriptive titles and endpoint validation. Links: https://w.wiki/$Q$, https://w.wiki/$R3, https://w.wiki/$RD, https://w.wiki/$RR, https://w.wiki/$RU, and https://w.wiki/$SF.
- `Taxon and occurrence curation prototypes`: The Quest / Daniel Mietchen MWAPI and QuickStatements prototypes are useful, but still too raw to keep in the curated section. Key links: https://w.wiki/5a7K, https://w.wiki/5a8b, https://w.wiki/5a8g, https://w.wiki/5a8t, https://w.wiki/5a9B, https://w.wiki/5a9T, and https://w.wiki/5a9g.
- `Scholarly-article graph split notes`: Working notes about the Wikidata scholarly article split should stay grouped here until rewritten as a stable guide. Links: https://w.wiki/Eexo, https://w.wiki/Eexs, https://w.wiki/Eext, and https://w.wiki/Eexz.
- `Embedded full query URLs`: Long `query.wikidata.org/...#...` and `qlever.../?query=...` URLs were intentionally removed from the curated sections. Keep the source note if the exact inline query text is still needed.
- `Raw inline SPARQL blocks`: The source note still contains draft SPARQL for drug-protein interactions, InChIKey-based occurrence lookup, IDSM examples, and curation workflows that should be extracted and titled separately.
- `Presentation and scratch material`: Items such as `to tweet`, `example for presentation UniFr`, `Manager`, `mail_jakub`, and the endpoint list are intentionally not mixed into the curated query index.
