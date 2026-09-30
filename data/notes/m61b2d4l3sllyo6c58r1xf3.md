
# [COCONUT 2.0: a comprehensive overhaul and curation of the collection of open natural products database](https://academic.oup.com/nar/article/53/D1/D634/7908792)


## Terms
- **[Natural product](https://en.wikipedia.org/wiki/Natural_product)**: A chemical compound produced by a living organism rather than synthesized artificially.
- **COCONUT**: Collection of open natural products. 
- **[FAIR data](https://en.wikipedia.org/wiki/FAIR_data)**: Principles stating that scientific data should be Findable, Accessible, Interoperable, and Reusable.
- **[Cheminformatics](https://en.wikipedia.org/wiki/Cheminformatics)**: The application of computer science and information technology to chemical problems, including molecular representation, searching, and analysis.
- **[Molecular descriptor](https://en.wikipedia.org/wiki/Molecular_descriptor)**: A numerical value computed from a molecule that describes one of its chemical or physical properties.
- **[Chemical fingerprint](https://en.wikipedia.org/wiki/Chemical_fingerprint)**: A vector representation of a molecule used for similarity searching and machine learning.
- **[Chemical similarity](https://en.wikipedia.org/wiki/Chemical_similarity)**: A measure of how structurally or chemically alike two molecules are.
- **[Functional group](https://en.wikipedia.org/wiki/Functional_group)**: A specific group of atoms that determines many of a molecule's chemical properties and reactions.
- **[Molecular scaffold](https://en.wikipedia.org/wiki/Molecular_scaffold)**: The core structural framework of a molecule after side chains are removed.
- **[Lipinski's rule of five](https://en.wikipedia.org/wiki/Lipinski%27s_rule_of_five)**: A set of empirical rules used to estimate whether a compound is likely to be orally active as a drug.
- **[Stereochemistry](https://en.wikipedia.org/wiki/Stereochemistry)**: The study of the three-dimensional arrangement of atoms within molecules.
- **[Stereoisomerism](https://en.wikipedia.org/wiki/Stereoisomerism)**: The phenomenon where molecules have the same formula and connectivity but differ in their three-dimensional arrangement.
- **[Chirality](https://en.wikipedia.org/wiki/Chirality_(chemistry))**: The property of a molecule that makes it non-superimposable on its mirror image.
- **[Cahn–Ingold–Prelog priority rules](https://en.wikipedia.org/wiki/Cahn%E2%80%93Ingold%E2%80%93Prelog_priority_rules)**: Rules used to assign R/S stereochemical configurations to chiral centers.
- **[Monoisotopic mass](https://en.wikipedia.org/wiki/Monoisotopic_mass)**: The exact mass of a molecule calculated using the most abundant isotope of each element.
- **[Data provenance](https://en.wikipedia.org/wiki/Data_lineage)**: Information describing where data originated and how it has been processed.
- **[Data curation](https://en.wikipedia.org/wiki/Data_curation)**: The process of cleaning, organizing, validating, and maintaining datasets.
- **[Audit trail](https://en.wikipedia.org/wiki/Audit_trail)**: A record of all changes made to data, including who made them and when.
- **[Europe PubMed Central](https://en.wikipedia.org/wiki/Europe_PubMed_Central)**: A free archive of biomedical literature and related research information.
## Intro
Natural products are good for active compounds. There are many. data organization is an issue. COCONUT is an organized database of natural products. COCONUT was recently re-engineered. 
## Database features and functionality
2024 version adheres to the FAIR standards. 
## Data additions and curation
63 source databases. Structures are standardized, deduplicated, and linked to their original sources. Molecular descriptors and classifications are computed. Community curation, provenance, and audit trails help identify bad or synthetic entries.
## Architecture
Microservices architecture using Docker. PostgreSQL + RDKit for storage and chemical search. Redis for caching and job queues. Deployable with Kubernetes.
## COCONUT 2.0 vs 1.0
More source databases. Community curation.
Ontology-mapped metadata. Audit trails. Stereochemistry-aware records.
## Conclusion
Transitioning from an aggregated database to a community-curated platform. Future work includes automated literature mining and LLM-assisted extraction.