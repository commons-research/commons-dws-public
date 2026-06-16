---
id: v2vccrt1f3cynwm60cv8g3v
title: To Curate
desc: ''
updated: 1773784628606
created: 1773784628606
---

# SPARQL queries and material to curate

This note lists the remaining query bundles and scratch materials that still need curation before they can be added to the cleaned query index.

## Curation instructions

For each item below:

1. Decide the endpoint first: `Wikidata Query Service`, `Qlever Wikidata`, `Qlever Metrin KG`, `IDSM/Sachem`, or `other`.
2. Give the query a stable title in sentence case.
3. Write a one-line description that states the input, the filter, and the main output.
4. Keep the short query link if one exists. Remove raw embedded `?query=` URLs from the curated note unless the full text must be preserved.
5. Record whether the item is a `query`, `query family`, `endpoint note`, `draft SPARQL block`, or `presentation/scratch material`.
6. Deduplicate variants. If multiple links differ only by output format or a small filter, keep one parent title and list the variants under it.
7. If the item is still exploratory or broken, keep it in this note and add a short reason.

## Moved to cleaned for manual review

- `IDSM-assisted compound occurrence lookup`
- `Referenced structure-organism pairs on Wikidata`
- `ChEBI substructure search through Sachem`

## Queries and material requiring curation

### IDSM and Sachem material

- `Sachem non-permanent endpoint note`
  Source material: https://idsm.elixir-czech.cz:2443/sachem/#/search.
  Curation instruction: keep only if the endpoint is still relevant as a manual search tool; otherwise move it to a tools/endpoints note instead of the query index.

- `Sachem grand parents`
  Source material: https://w.wiki/32Wz.
  Curation instruction: determine whether this is a structure-search query, a taxonomic summarisation query, or both; rename accordingly and note required inputs.

### Generic LOTUS query bundle

- `Unnamed LOTUS query family`
  Source material: https://w.wiki/$Q$, https://w.wiki/$R3, https://w.wiki/$RD, https://w.wiki/$RR, https://w.wiki/$RU, and https://w.wiki/$SF.
  Curation instruction: open each link, identify what changes between the variants, group them under one parent title if they are the same query family, and keep only the variants that add a distinct result view or filter.

### Taxon and occurrence curation prototypes

- `Quest / Daniel Mietchen prototype family`
  Source material: https://w.wiki/5a7K, https://w.wiki/5a8b, https://w.wiki/5a8g, https://w.wiki/5a8t, https://w.wiki/5a9B, https://w.wiki/5a9T, and https://w.wiki/5a9g, plus the raw SPARQL blocks in `wikidata.sparql.md`.
  Curation instruction: split this family into clearly named subgroups such as `main-subject curation`, `QuickStatements generation`, and `taxon-compound literature matching`; mark which variants are working, experimental, or superseded.

- `Not working / no results prototypes`
  Source material: the `quest query mod from Mietchen to compounds (not working)` and `No error but no results neither` blocks in `wikidata.sparql.md`.
  Curation instruction: do not add these to the cleaned query list yet; instead summarise why they fail, what was tried, and which working variant replaced them.

- `Curating query`
  Source material: the raw SPARQL block under `Curating query` and links https://w.wiki/5a9T and https://w.wiki/5a9g.
  Curation instruction: title it based on outcome rather than process, for example by the property being curated (`P703` / `main subject`), and keep the QuickStatements output behaviour explicit in the description.

### Scholarly-article graph split notes

- `Wikidata scholarly article split reminders`
  Source material: https://w.wiki/Eexo, https://w.wiki/Eexs, https://w.wiki/Eext, and https://w.wiki/Eexz, plus the discussion excerpt in `wikidata.sparql.md`.
  Curation instruction: rewrite this as a short reference note explaining the graph split, when to use Qlever instead of WDQS, and which example query demonstrates the fix.

### Embedded full query URLs

- `Embedded query.wikidata.org URLs`
  Source material: long `query.wikidata.org/index.html#...` and `query.wikidata.org/embed.html#...` URLs in `wikidata.sparql.md`.
  Curation instruction: replace each embedded URL with a short title and, if possible, a `w.wiki` short link; keep the embedded form only in a dedicated archive note if the exact serialized query text matters.

- `Embedded qlever ?query= URLs`
  Source material: long `https://qlever.../?query=...` URLs in the Qlever section of `wikidata.sparql.md`.
  Curation instruction: keep the stable short Qlever permalink as the curated link; archive the expanded URL only when it contains annotations or a version not represented by the short permalink.

### Raw inline SPARQL blocks

- `Drug-protein interaction draft`
  Source material: inline SPARQL block under `## drug-prot interaction`.
  Curation instruction: convert this into a titled query entry only after confirming scope, expected output columns, and whether the cancer restriction is intentional or example-only.

- `VIT / JLW federated query blocks`
  Source material: the two raw SPARQL blocks joining Wikidata with `sinergiawolfender.org` namespaces in `wikidata.sparql.md`.
  Curation instruction: decide whether these belong in a separate federated-query note; if kept, document the external dataset dependency, required taxon input, and matching logic on molecular formula.

- `InChIKey occurrence lookup drafts`
  Source material: the `containing taxa + ref for a given IK` section with two raw SPARQL blocks and embedded URLs.
  Curation instruction: merge duplicate variants, name them by purpose (`all taxa for an InChIKey prefix`, `taxon-restricted InChIKey lookup`), and keep only one canonical version per use case.

### Endpoint and reference material

- `Endpoint inventory`
  Source material: https://www.wikidata.org/wiki/Wikidata:Lists/SPARQL_endpoints.
  Curation instruction: move this out of the query index unless it is needed as a reference note; it is endpoint documentation rather than a query.

### Presentation and scratch material

- `To tweet`
  Source material: the `# to tweet` section in `wikidata.sparql.md`.
  Curation instruction: harvest any actual useful query links from the section and merge them into stable query families; discard the presentation framing.

- `Presentation example: UniFr`
  Source material: `# example for prsenattion UniFr` with links https://w.wiki/4EMf and https://w.wiki/4EMo.
  Curation instruction: keep the underlying queries only if they are not already covered by an existing curated family; otherwise remove the presentation-specific label.

- `Manager`
  Source material: the standalone `Manager` marker in `wikidata.sparql.md`.
  Curation instruction: remove unless it refers to a recoverable query context elsewhere in the source note.

- `mail_jakub`
  Source material: `[[mail_jakub|scratch.2021.02.02.150258.mail_jakub]]`.
  Curation instruction: treat this as provenance for the indole-substructure idea, not as a query entry; move citation context to a note if useful.

## Suggested output format after curation

Use this template when promoting an item into the cleaned note:

- `Title`: one-sentence description. Query: `<short link>`. Variant: `<second link if genuinely distinct>`.

If a full SPARQL block must be preserved:

1. Create a dedicated note for the block.
2. Give it the same stable title.
3. In the cleaned index, link only the short query URL and mention that the full SPARQL is archived separately.
