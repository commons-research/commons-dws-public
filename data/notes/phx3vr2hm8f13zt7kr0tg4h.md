# [ro-crate-rs: Development of a Lightweight RO-Crate Rust Library for Automated Synthetic Biology](https://www.biorxiv.org/content/10.64898/2026.01.22.701040v1)
## Terms
- **RO-Crate:** framework that packages research data with machine readable metadata.
- **[ro-crate-rs](https://github.com/intbio-ncl/ro-crate-rs)**: The author's rust based implementation
- **[biofoundaries](https://bioconvs.org/biofoundries-a-revolution-for-research-and-global-economy/)**: high throughput automated facilities for bio systems. 
- **DBTL**: (design-build-test-learn) the cycle used in labs for research and development.
- **[JSON-LD](https://json-ld.org/)**: A json based linked data format for linked open data (LOD)
## Intro
Biofoundaries are expensive. They are not used as frequently as a result and ad hoc solutions are creating compatibility issues. There are already workflows and tools that exist to help remedy this data drift. They propose a tool that structures data produced in silos and presents them for downstream consumption.
## Background
RO-crate allows for packaging data with structured, machine readable metadata. Uses JSON-LD. They present their own version of the RO-Crate suite of tools, built in rust. Comes with a python API, for ease of crate generation (RO-Crate, not crates.io crate). 
## Results
### Core ro-crate-rs Library
Implements the RO-Crate JSON-LD model using strongly typed Rust data structures with minimal abstraction over the specification. Supports the four core entity types (MetadataDescriptor, RootDataEntity, DataEntity, and ContextualEntity) while allowing arbitrary JSON-LD properties through dynamic fields.
### Reading and Writing
Uses **Serde** for serialization and deserialization between RO-Crate JSON-LD and Rust types. Supports reading from JSON files, JSON strings, and zipped RO-Crates without full extraction.
### Validation
Strong typing enforces required RO-Crate fields and valid JSON-LD types at compile time. Runtime validation provides permissive, warning, and strict modes for checking structural and vocabulary conformance.
### Packaging
RO-Crates can be packaged as portable, self-contained archives while preserving identifiers and rewriting file paths as needed. Packaging automatically assigns stable UUID URNs and can import external files into the archive.
### File Conversion
Supports exporting RO-Crates to CSV and Apache Parquet. Tabular output follows a graph-subject-predicate-object layout inspired by N-Quads.
### Python API
Provides a lightweight Python interface built on the Rust core using dictionaries instead of schema-specific classes. Structural validation and RO-Crate compliance are still enforced by the underlying Rust implementation.
### CLI Tool
Provides command-line access for creating, inspecting, validating, modifying, and saving RO-Crates. Intended for scripting, pipelines, and lightweight interaction rather than large-scale crate construction.
## Conclusion
they present a tool with many features for developing ro-crate tools and their repo enforces the specs presented by RO-Crate. 