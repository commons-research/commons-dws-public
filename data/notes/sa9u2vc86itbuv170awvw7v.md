[source](https://pubs.rsc.org/en/content/articlelanding/2026/np/d5np00034c)
# Scalability of mass spectrometry-based metabolomics for natural extracts libraries exploration - current status, challenges, and opportunities

# Terms

- **Natural products (NPs)**: Bioactive or structurally diverse compounds produced by living organisms (plants, microbes, marine organisms) that are often mined for drugs.
- **Natural extracts libraries (NELs)**: Collections of solvent-derived extracts from many organisms, usually stored in well plates for high-throughput screening and chemical profiling.
- **Metabolomics**: Large-scale measurement of small molecules (metabolites) in samples; here focused on mass spectrometry for complex natural extracts.
- **Mass spectrometry (MS)**: Technique measuring ions by **mass-to-charge ratio (m/z)** to detect and quantify molecules.
- **LC-ESI-MS**: Liquid chromatography + electrospray ionization + mass spectrometry; a common workflow to separate and detect metabolites.
- **Dereplication**: Identifying known compounds early to avoid rediscovering them.
- **Feature**: A detected signal interpreted as a putative compound-related ion (defined by m/z, retention time, intensity; may include MS/MS info).
- **Feature detection**: Converting raw MS data into a list/table of features (peaks) per sample.
- **Feature alignment**: Matching the “same” feature across many runs/samples (accounting for retention time drift, noise, missingness).
- **Gap filling**: Recovering missing intensities for aligned features by revisiting raw data in expected m/z/RT windows.
- **Ion mobility spectrometry (IMS)**: Extra separation step distinguishing ions by shape/size/charge; adds another data dimension (and complexity).
- **DDA (data-dependent acquisition)**: MS/MS collected for selected (often most intense) precursor ions; can miss low-abundance compounds.
- **DIA (data-independent acquisition)**: MS/MS collected broadly across all ions; increases coverage but yields **chimeric spectra**.
- **Chimeric spectra**: MS/MS spectra containing fragments from multiple precursors due to co-isolation/co-elution.
- **Spectral library**: Reference MS/MS spectra for known compounds used for matching/annotation.
- **Structural library**: Database of candidate molecular structures (e.g., PubChem) used for in silico annotation.
- **Cosine similarity**: Standard score for comparing MS/MS spectra by overlap of fragment peaks/intensities.
- **Modified cosine**: Cosine variant that also matches peaks shifted by precursor mass difference (useful for analogues).
- **Analogue search**: Searching for “related” compounds (shared scaffold/family) rather than exact matches.
- **Molecular networking (MN)**: Graph where spectra/features are linked by spectral similarity to reveal families of related molecules.
- **Tanimoto similarity**: Fingerprint-based structural similarity (Jaccard index) used for comparing molecules efficiently.
- **Fingerprint (e.g., ECFP, MAP4)**: Bit-vector representation of a molecule’s substructures for fast similarity computations.
- **Maximum common subgraph (MCS/MCES)**: Graph-based structural similarity measures; more interpretable but computationally expensive.
- **Knowledge graph**: Graph database linking samples, metadata, spectra, annotations, bioactivity, taxonomy for scalable querying/reuse.
- **MassQL**: Query language designed for mass spectrometry patterns in raw/processed data (m/z, RT, intensity logic).
- **SPARQL**: Query language for RDF/knowledge graphs; enables rich metadata + relationship queries.
- **Non-structural annotation**: Assigning useful properties (bioactivity likelihood, biosource, class) without full structure ID.
- **Substructure annotation**: Inferring recurring fragments/motifs corresponding to parts of molecules (even when full ID is unknown).
- **MS2LDA / Mass2Motifs**: Topic-modeling approach that discovers recurring fragment/loss patterns interpreted as substructures.
- **De novo annotation**: Predicting structures for unknowns without database matches (often via generative/ML models).
## 1) Core thesis: scalability is the bottleneck (and opportunity)
- NELs are powerful because they can contain huge biochemical diversity, but current NP workflows still behave “molecule-first”: they often end up deeply investigating only a small number of molecules/features.
- The review argues for shifting from molecule-first exploration to **computationally enabled, scalable** exploration of entire extract libraries—so we can prioritize better, reduce rediscovery, and make decisions earlier from MS data.
- “Scalability” for NELs isn’t just speed/throughput; it includes:
    - **Time**: fast enouh processing to avoid analysis bottlenecks.
    - **Quality**: broad, reliable metabolome coverage and usable annotation.
    - **Data retrieval**: being able to query, visualize, and act on results (decision support), not just generate tables.
## 2) Why NELs are different from biomedical/environmental metabolomics
- Biomedical metabolomics often scales by **number of samples** (large cohorts) but within a relatively narrower chemical space.
- Environmental/NP metabolomics scales by both **chemical diversity** and matrix complexity; NELs intensify this because they combine:
    - many extracts,
    - high structural novelty,
    - sparse distribution of individual compounds across the library,
    - and a high cost of “manual interpretation per molecule.”
- Therefore, NEL scalability must emphasize: _coverage + prioritization + novelty assessment_ from complex, diverse mixtures.
## 3) Scalability across the pipeline (MS acquisition → processing → annotation → decisions)
### 3.1 Data acquisition: start clean or suffer forever
- No downstream method can fully rescue low-quality acquisition; scalable workflows require **futureproofed** acquisition choices.
- Key acquisition constraints:
    - **Throughput vs resolution/coverage trade-offs** are unavoidable and must be managed intentionally.
- Example approach: **MultiplexMS** (pool + computational deconvolution) to accelerate acquisition by exploiting the fact that many natural products are sparsely distributed across extracts.
#### Resolution & separation
- **Chromatography (LC)** remains essential for complex natural extracts: reduces co-elution, ion suppression, helps detect isomers, improves sensitivity for low-abundance metabolites.
- Skipping chromatography increases throughput but causes “data congestion” and worsens interpretability.
- Alternatives (CE, SFC, nano/microflow LC) are promising but adoption is constrained by infrastructure and throughput.
- Future direction: faster, automated, mixed-mode separations that better cover neglected chemical space (e.g., polar metabolites).
#### Ion mobility (IMS)
- Adds a valuable third dimension for distinguishing similar metabolites.
- But it increases data complexity and lacks standard, seamless integration in many workflows.
- Needs faster IMS platforms and better standardized software pipelines to be truly scalable for NELs.
#### Ionization (ESI; polarity)
- Positive mode is common but can add noise and in-source fragmentation.
- Negative mode provides complementary coverage.
- Polarity switching can improve coverage but may reduce scan rate and complicate alignment.
- Big need: smarter/adaptive strategies to optimize polarity per sample (or computational integration across modes).
#### Fragmentation strategies (CID, EAD, UVPD; DDA vs DIA)
- Lack of standardized collision energies hurts cross-lab/library matching.
- CID often yields incomplete structural info → lots of unannotated features.
- Multimodal fragmentation (EAD/UVPD) could enrich structural signal.
- **DDA** biases toward abundant ions; **DIA** improves breadth but produces chimeric spectra and increases computational burden.
- Notably: DIA hasn’t yet been widely used in published NEL exploration workflows (as described here), likely due to complexity.
#### Detection hardware: ToF vs Orbitrap
- ToF: fast acquisition, strong dynamic range, good for throughput-heavy contexts.
- Orbitrap: ultra-high resolution and mass accuracy but slower at top resolution (scan speed trade-off).
- Instrument choice shapes downstream computational needs and what questions are feasible.
### 3.2 Data processing: turning thousands of files into usable feature tables
#### Data formats & interoperability
- Scalable metabolomics depends on **open, lossless, interoperable formats** (e.g., mzML and related standards) and tooling ecosystems (pyOpenMS, matchms, spectrum_utils, MSnbase, etc.).
- A forward-looking requirement: formats and metadata conventions that remain compatible with AI/ML workflows.
#### Feature detection
- Feature detection extracts signals across RT (and possibly IMS) into features (m/z, RT, intensity).
- Scalability constraints are driven by sample count _and_ data density (high scan rate, high resolution, IMS).
- Modern tools mitigate RAM constraints via **memory mapping** (offloading to disk while keeping random-ish access).
- Example: mzmine’s memory mapping and internal data model improvements dramatically reduced memory usage and enabled parallel processing at larger scales.
#### Feature alignment: project-centric vs sample-centric paradigms
- **Project-centric alignment**
    - Align all samples into one consensus feature table, then gap fill.
    - Benefits: consistent reference frame, easier batch-effect handling, simplifies missingness management, includes poorly fragmented features for stats/prioritization.
    - Requires careful algorithm design for concurrency; alignment/gap fill can be bottlenecks if poorly implemented.
- **Sample-centric + knowledge graphs**
    - Treat each sample as a core entity; integrate across studies via **knowledge graphs**.
    - Benefits: avoids “siloed projects,” supports reuse, aggregation, and continuous growth of a shared knowledge base.
    - Especially suited to long-term, multi-project NEL efforts and ML/AI-driven pattern discovery.
#### Feature grouping
- Groups adducts, in-source fragments, multimers (reducing redundancy).
- More sophisticated correlation/shape-based grouping improves accuracy but can become computationally expensive at large scale.
- Filtering low-abundance features improves dashboard usability—but risks removing rare/novel chemistry (a key tension for NEL discovery).
### 3.3 Annotation: scaling from “few IDs” to “useful knowledge at library scale”
#### Two similarity pillars: structural vs spectral
- **Structural similarity**
    - Fingerprints + **Tanimoto**: fast and scalable but can be counterintuitive due to lossy representations.
    - Graph approaches (MCS/MCES): more interpretable but computationally hard; heuristics (e.g., myopic-MCES) and hybrid methods try to bridge speed and richness.
- **Spectral similarity**
    - Many tasks rely on scoring large numbers of MS/MS comparisons:
        - exact library matching,
        - analogue search,
        - molecular networking,
        - repository-scale linking.
    - **Cosine similarity** remains the baseline; correct peak matching matters (avoid bin-edge artifacts; avoid double-counting matches).
    - Greedy peak matching is typically “good enough” and far cheaper than optimal assignment (e.g., Hungarian algorithm).
    - GPU implementations can massively accelerate similarity computation.
#### Exact search vs analogue search
- **Exact search**: match within small precursor tolerance → smaller search space.
- **Analogue search**: by nature tends toward many-vs-many comparisons → quadratic explosion if naive.
- Practical GNPS scaling trick: cap allowable mass shift (e.g., ~200 Da) to cover common biotransformations, trading recall for runtime.
#### Indexing + repository-scale tricks
- **Fragment ion indexing**: pre-index fragments to filter candidate comparisons quickly; used to accelerate cosine and entropy-based scores (e.g., “flash entropy”).
- **Nearest neighbor suspect libraries**
    - Use molecular networking connections from annotated spectra to propose hypotheses for unannotated “suspect” spectra at massive scale.
    - Key idea: propagate knowledge via spectral neighborhoods + plausible mass differences/modifications.
    - Outcome: expanding “annotation reach” beyond what classical reference libraries can do.
#### ML/deep-learning similarities and retrieval
- Learned embeddings (Spec2Vec, MS2DeepScore) aim to be more tolerant of multiple modifications and low direct peak overlap.
- Once embeddings are computed once per spectrum, similarity computation becomes cheap (cosine in embedding space).
- Model quality depends on curated training data → community datasets and ML-ready benchmarks matter (e.g., initiatives like MassSpecGym).
#### Tool spotlight: MS2Query
- Combines multiple scores/features with an ML model to rank candidates efficiently.
- Promises faster analogue search without needing strict mass-shift caps, enabling broader library consideration.
#### Spectral + structural annotation tools
- Spectral libraries (MassBank, GNPS sublibraries, specialized NP libraries) remain essential but coverage is still limited vs NP chemical space.
- Hybrid/in silico approaches (MetFrag, CFM-ID, FIORA; large in silico DBs like ISDB-LOTUS) help bridge gaps.
#### Substructure annotation (when full ID fails)
- **MS2LDA** discovers Mass2Motifs; useful but interpretation can become a human bottleneck at scale.
- **MotifDB**: curated motifs enable more efficient screening (fewer “free” motifs).
- **MESSAR**: supervised substructure recommendation via association-rule mining.
- Scaling limits: memory use and human validation time → pushes toward more modular, community-driven, scalable ecosystems (e.g., MS2LDA 2.0 + improved visualization/annotation guidance).
#### De novo annotation for unknowns
- Since unknowns dominate, generative approaches (e.g., MSNovelist) are positioned as important for expanding beyond known databases, though they bring heavier computational/validation demands.
#### Non-structural annotation: making progress without full structures
- Predict bioactivity/toxicity or biosource associations from spectral/metadata patterns.
- Taxonomy-informed annotation (e.g., TIMA) improves confidence by using biological plausibility.
- MASST-style repository searches (foodMASST/microbeMASST/plantMASST) contextualize unknowns by linking spectra to known biosources across public datasets.
## 4) Querying + decision-making: the “action” layer
### Query languages as a scalability lever
- **MassQL**: MS-native querying over m/z/RT/intensity patterns; designed to be accessible to non-programmers.
- **SPARQL**: knowledge-graph querying enabling rich, relational questions that combine spectral + biological + metadata context (example: IDSM with similarity extensions).
- The review frames a future where MassQL (signal-level) and SPARQL (semantic/metadata-level) are combined into hybrid query workflows.
### Prioritization tools and strategies
- **Inventa**: scores extracts for structural novelty using multiple components (feature specificity/annotation, literature signals, class detection, ML-based dissimilarity).
- **Rational library minimization**: reduce redundancy across organisms by iteratively selecting extracts that maximize new scaffold coverage; huge cost savings without losing hit rate (in the cited example).
- **FERMO**: integrates heterogeneous data types to filter/prioritize features using novelty/uniqueness/specificity/phenotype association; separates scalable computation from optional dashboard visualization. Annotation time can balloon with huge libraries → targeted libraries recommended until faster search methods are integrated.
- **MS2DECIDE**: “white-box” decision-theoretic ranking that combines GNPS + SIRIUS + ISDB-LOTUS outputs and agreement between suggested structures to estimate “knownness”/novelty.
- **msFeaST**: integrates stats + feature grouping + interactive chemical map; warns about human/UI scalability limits beyond ~5–10k features → encourages thresholding and careful selection before dashboard-driven exploration.
## 5) Outlook: what “scalable NEL metabolomics” should become
- Future progress requires coordinated advances in:
    - **acquisition quality and throughput** (better separations, smarter fragmentation, scalable modes like multiplexing),
    - **computational efficiency** (indexing, embeddings, GPU acceleration),
    - **annotation breadth** (repository-scale propagation, hybrid spectral+structural, substructure and non-structural annotation),
    - **data infrastructure** (open formats, interoperability, reusable pipelines),
    - **governance/community** (open science, shared resources like LOTUS/ENPKG-like infrastructures).
- The end-goal is an iterative “virtuous cycle”:
    - use prior knowledge (spectra/taxonomy/literature) → prioritize extracts → generate new data → refine priorities → rank features → elevate to semantic knowledge → enable complex queries → repeat.
- A recurring theme: _scalability is not just compute_—it’s also **human interpretability**, reproducibility, modular software design, and community-maintained ecosystems.