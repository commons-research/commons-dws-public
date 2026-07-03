---
id: 5a1jievz0itk3so7avc9cft
title: >-
  Fluoromatch Im An Interactive Software For Pfas Analysis By Ion Mobility
  Spectrometry
desc: ''
updated: 1782978940927
created: 1782978939889
traitIds:
  - open-notebook-commons-ablood-literature
---

[[FluoroMatch IM - An Interactive Software for PFAS Analysis by Ion Mobility Spectrometry.pdf]]
# [FluoroMatch IM - An Interactive Software for PFAS Analysis by Ion Mobility Spectrometry](https://pubs.acs.org/doi/10.1021/acs.est.4c13846)
## Terms
- **HRMS**: High-resolution mass spectrometry.
- **IMS (Ion Mobility Spectrometry)**: Separates ions based on charge, size, and shape before mass analysis.
- **LC-IM-HRMS**: Liquid chromatography coupled with ion mobility and high-resolution mass spectrometry.
- **CCS (Collision Cross Section)**: A reproducible physical measurement describing an ion's effective size and shape in the gas phase.
- **DTIMS**: Drift Tube Ion Mobility Spectrometry.
- **TWIMS**: Traveling Wave Ion Mobility Spectrometry.
- **cIMS**: Cyclic Ion Mobility Spectrometry.
- **Mobilogram**: Plot of ion intensity versus drift time.
- **Drift time**: Time required for an ion to traverse the ion mobility cell.
- **Orthogonal evidence**: Independent evidence supporting an identification (e.g. CCS in addition to m/z).
- **Feature**: A detected ion characterized by m/z, retention time, drift time, CCS and intensity.
- **4D peak picking**: Feature detection using m/z, retention time, drift time and intensity.
- **CCS library**: Database of experimentally measured collision cross sections.
- **Vendor-neutral**: Compatible with data from multiple instrument vendors.
- **Mass defect filtering**: Filtering compounds by characteristic mass defect ranges.
- **Homologous series detection**: Finding compounds differing by repeating units.
- **Extracted Ion Chromatogram (EIC)**: Chromatogram for one selected m/z.
- **Negative electrospray ionization (ESI−)**: Negative ion acquisition mode.
- **QTOF**: Quadrupole Time-of-Flight mass spectrometer.
- **DDA (Data-Dependent Acquisition)**: MS/MS acquired for selected precursor ions.
- **All Ions acquisition**: DIA-style acquisition fragmenting everything simultaneously.
- **PNNL Preprocessor**: Software that converts Agilent All Ions data into pseudo-DDA spectra.
- **Confidence scoring**: FluoroMatch's A–E scoring system for PFAS annotation confidence.
## About
Rather than relying solely on MS/MS fragmentation, the software combines multiple independent pieces of evidence including:
- Accurate mass
- Collision Cross Section (CCS)
- Homologous series
- Mass defect
- Formula prediction
- Drift time
- Retention time

**Software**:
https://github.com/Innovative-Omics/FluoroMatch

**Interactive visualization**:
https://innovativeomics.com/datasets
## Dataset

MassIVE - ftp://massive.ucsd.edu/v07/MSV000096605/
## Relevant for fluorine detection
### Fluorinated molecules occupy a unique CCS region
- lower CCS than non-fluorinated molecules
- for the same m/z
### Multiple weak signals outperform one strong signal
Instead of relying only on MS/MS:
- exact mass
- CCS
- homologous series
- mass defect
- retention time
- drift time