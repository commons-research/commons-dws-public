---
id: 5o0tvzf4l6t6moau7en1v48
title: Bachelor-project-jade
desc: ''
updated: 1750247760497
created: 1741185232433
---
<p align="left">
  <img src="https://upload.wikimedia.org/wikipedia/commons/9/9c/Universit%C3%A4t_Freiburg_%28Schweiz%29_logo.svg" width="100">
</p>

<p align="center"><strong>UNIVERSITY OF FRIBOURG</strong></p>
<p align="center"><strong>COMMONS LAB</strong></p>
<p align="center"><strong>DEPARTMENT OF BIOLOGY</strong></p>

<br><br>

<h1 align="center">
Geophytes collection, comparison of extraction solvents  
and modeling of data loss in mass spectrometry
</h1>

<br><br>

<em>Author :</em> <strong style="color:#800000">Jade Dandois</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<em>Supervisor :</em> <strong style="color:#800000">Dr. Pierre–Marie Allard</strong>

<br><br>

<p align="center"><strong>Submitted in fulfillment of the requirements for the Bachelor's degree.</strong></p>
<p align="center"><strong>June 27th, 2025</strong></p>

# Acknowledgements 

I would like to extend my heartfelt thanks to Pierre-Marie Allard, my professor and supervisor during these three months of academic work. I am deeply grateful for his unwavering dedication, his genuine interest in this remarkable project, and the invaluable guidance he has provided throughout. I hold great admiration for both his work and the inspiring project he initiated and continues to nurture with such commitment.

Thank you to the entire COMMONS LAB team. My warm thanks go to Héloïse Coen, who greatly supported me during the collection of geophytes and extraction processes—your help and our shared moments of collaboration were truly appreciated. Edouard Brülhart, thank you for patiently introducing me to the sampling techniques and the functioning of the laboratory. Colin Volet, for your guidance with the technical aspects of mass spectrometry, your expertise was essential. And finally, Marco Visani, for your remarkable patience and guidance in bioinformatics—thanks to you, I was able to significantly deepen my understanding of coding, an invaluable tool for the work I was entrusted with.

# Abstract 

# Introduction 

A large number of databases are currently available to the public for biological elements such as proteins (UniProt, https://www.uniprot.org), RNA (Rfam, https://rfam.org/), DNA (NCBI GenBank, https://www.ncbi.nlm.nih.gov/genbank/) or genomes (Ensembl, https://www.ensembl.org/). 
However, the databases currently available for metabolomics are very limited, focusing mainly on specific types of organism, such as humans (HMDB, https://www.hmdb.ca), for medical purposes or simply on raw analytical data (MassBank, https://massbank.eu/MassBank/).

The Earth Metabolome Initiative (EMI) consortium, conceived in 2022 and formally launched in 2024 by Pierre-Marie Allard, is a collective open science endeavor aimed at addressing the critical lack of comprehensive metabolomic data. With remarkable foresight, the initiative set out to build a database designed to profile the full spectrum of metabolites across all known living species—approximately 2.3 million—thus encompassing the entirety of life, from microbes to mammals, within an integrated and ecosystem-level perspective. Unlike existing databases, EMI distinguishes itself through its explicit commitment to cross-kingdom coverage and global scale.

## Earth Metabolome Initiative 

As mentioned above, the EMI consortium is an open science initiative with a global scope, whose aim is to draw up metabolomic profiles of all known species on this planet, with 3 main objectives, which are the protection of biodiversity, the benefit to human society and a deeper understanding of the chemical foundations of the biosphere. <sup><a href="#ref1" id="note1">1</a></sup>

Biodiversity is currently facing an unprecedented crisis, primarily driven by the intensification of human activities over the past century. This decline has accelerated dramatically in recent decades. Alarmingly, the current rate of species extinction is estimated to be at least 100 times higher than the natural background rate, underscoring the severity of human impact on the planet's ecosystems. <sup><a href="#ref2" id="note2">2</a></sup> 
In this context, acquiring comprehensive metabolic data becomes critically important. Such data can provide molecular-level insights into ecosystem functioning and the roles of natural products within them. By deepening our understanding of molecular diversity and its ecological relevance, we can develop informed strategies for conserving biodiversity and sustaining the natural resources upon which human well-being depends.

Establishing a comprehensive, publicly accessible database of species-specific metabolomic profiles is of paramount importance for advancing research across generations. Such a resource will provide open access to molecular-level data, facilitating a wide spectrum of scientific inquiry—from fundamental biological and biomedical research to the discovery of novel bioactive compounds and innovations in agri-food systems. By enabling a deeper understanding of natural metabolites that underpin ecosystem dynamics, nutritional quality, and agricultural resilience, this database will serve as a critical foundation for interdisciplinary efforts aimed at sustaining both human health and environmental integrity.

The establishment of a global metabolomic map by the Earth Metabolome Initiative (EMI) will also enable the integration of existing biological datasets with newly generated molecular data. This will facilitate the development of novel insights, such as evolutionary models of the metabolome, and may even allow for the prediction of the chemistry of yet-undiscovered organisms by identifying specific natural product patterns linked to molecular and ecological contexts.

This project is highly ambitious, and although a significant amount of data has already been collected, the establishment of a global metabolomic database is likely to take many years to fully materialize. For this reason, several pilot projects have been initiated to test data acquisition methodologies and to focus on specific components of the broader initiative, avoiding unnecessary dispersion.

Three of these EMI pilot projects formed the core of my bachelor's thesis and were specifically designed to address key objectives of the Earth Metabolome Initiative.

The first project falls within the scope of the Digital Botanical Gardens Initiative, a botanical-scale precursor to EMI, in which I participated by collecting samples from the geophyte section of the Fribourg Botanical Garden. The second project aimed to refine our extraction methods by comparing the currently used methanol-based solvent with dimethyl sulfoxide (DMSO), thereby improving the biocompatibility of our extracts for subsequent bioassays. The third project is part of the PhD research of Marco Visani and focuses on modeling molecular data loss in mass spectrometry, with the goal of predicting the chemistry of living organisms based on unknown natural extracts.


## Digital Botanical Gardens Initiative 

The Earth Metabolome Initiative (EMI) is a globally oriented project, and as such, required the development of a pilot version—a scaled-down implementation designed to be applied to nearby, easily accessible, and manipulable living organisms. The Digital Botanical Gardens Initiative was conceived precisely with this objective in mind. 

The initiative aims to digitize the chemical diversity of Swiss botanical gardens by creating extract libraries, analyzing them via mass spectrometry, and organizing the data into accessible, interoperable knowledge systems. It also seeks to develop scalable workflows and provide molecular insights to support biodiversity conservation and open science. 
These aspects of DGBI are fundamental for ensuring reproducibility of laboratory processes and facilitating automatisation, both of which are critical for the large-scale EMI project, which will handle millions of samples.

One of the key advantages offered by Swiss botanical gardens—particularly the Fribourg Botanical Garden, on which I focused my work—is the remarkable diversity they host; approximately 5,000 plant are cultivated and conserved there. Proximity is another crucial factor, as the garden is located within the University of Fribourg campus, providing immediate access to laboratories where analytical work is conducted. The plants are also highly convenient for experimental work: they are stationary, easy to sample in sufficient quantity, and accessible for repeated collections from the same individuals or locations when needed.

While the plants are cultivated rather than growing in their natural habitats—an aspect that may slightly influence their metabolic profiles—the primary objective here is not ecological fidelity, but rather the establishment of a solid reference framework. The garden setting provides an ideal platform for testing physical and bioinformatic tools involved in building a curated chemical library, and for evaluating the feasibility of a large-scale digitization project.

# Collection of Geophytes - Digital Botanical Gardens Initiative 

The current data from the Botanical Garden of the University of Fribourg record 1,679 collected plant species (42.7%), 1,250 species extracted beyond the core collection (31.8%), and 691 species for which metabolomic profiles have been generated (17.6%) https://emi-collection.unifr.ch/. While the garden conserves approximately 5,000 individual plants, these represent around 4,000 distinct species, as some are present in multiple specimens.

The harvest from the geophyte section proved particularly relevant, as this sector had not yet been covered by DGBI. Moreover, collecting additional data from this group contributed meaningfully to the advancement of the project.

Geophytes are perennial plants that are resilient both during periods of severe drought and extreme cold, thanks in particular to the nutrient reserves they store in their underground organs (tubers, bulbs, rhizomes). These reserves allow them to enter a state of dormancy while waiting for more favorable conditions to emerge from the soil and grow.

Several plant families were collected, including Amaryllidaceae, Liliaceae, Iridaceae and many others, enabling metabolomic patterns to be drawn up for these families, and for all geophyte-type plants.

With the help of Héloïse Coen, we collected xxx species, focusing primarily on sampling flowers and leaves. xxx species remain to be collected (%), meaning that a substantial portion of the target species has already been covered for this part of the project. (Mettre le lien des csv). 

To cover this sector, a dedicated protocol for sample collection, extraction, and analysis was required.

## Materials and methods 

### Collect 

![Texte alternatif](/Users/jadedandois/Desktop/image_test.jpeg)



### Extraction

* billes en métal (4 mm) 

### Analysis 

## Conclusion 

## Perspectives 

Comme dit précédemment... regarder si les jardins botaniques des autres uni ont aussi été impliqués dans DBGI ou pas encore, et les mettre dans perspectives si c'est pas encore le cas. 

# DMSO Project 

## Actual DBGI extraction and issues 

The extraction mixture currently used as a solvent for molecule extraction in the DBGI project consists of 80% methanol 20% distilled water and 0,1% formic acid, for a 200mL mixture. Cette méthode est très efficace pour extraire les molécules de nos échantillons. 

Un solvant actuellement majoritairement utilisé dans les laboratoires est le dimethyl sulfoxide, un composé très stable, soluble, peu toxique et compatible avec les système biologiques <sup><a href="#ref3" id="note3">3</a></sup> , ce qui en fait un excellent solvant biologique. 

Le criblage biologie à haut débit permet, de façon automatisé, de  tester des bibliothèques de composés biochimiques et d'évaluer leur activité sur différentes cibles biologiques. Aujourd'hui, le HTS est largement utilisé notamment pour la découverte de médicaments, le diagnotic médical, la recherche sur les cellules souches en médecine ainsi que les recherches en génétique (Rodríguez-Dévora et al., 2011). Les bibliothèques de molécules générées grâce aux extractions d'échantillons DBGI pourraient être réutilisées et envoyées à d'autres laboratoires dans le cadre d'un criblage biologique à haut débit. Le solvant que nous utilisons dans le cadre du projet dbgi n'est cependant pas compatible avec une analyse ultérieure des extractions en laboratoires biologiques ou biochimiques, le méthanol endommageant les cellules et l'acide formique inhibant les réactions enzymatiques. 

Ce projet a donc pour objectif de déterminer si le DMSO pourrait remplacer le mélange actuel pour les extractions, car si les résultats sont prometteurs et que le DMSO réussit à extraire les molécules aussi bien que le méthanol avec l'eau et l'acide formique, il pourrait être utilisé à l'avenir, ce qui permettrait des réutiliser nos samples à des fins de recherches phramacologiques. 

### Material and methods 

Pour cette expérience, 6 échantillons bien documentés (*Erythroxylum coca*, *Salvia officinalis*, *Nicotiana tabacum*, *Lavandula angustifolia*, *Echinaceae purpurea* et *Cannabis sativa* ) ont étés testés, et pour chacun des échantillons, 3 méthodes de choix ont été utilisées. Nous avons d'abord testé la première série d'échantillons avec le protocol dbgi actuellement utilisé en laboratoir (liquide d'extraction : 80% méthanol, 20% H2O, 0,1% acide formique), puis la deuxième avec simplement du DMSO (99,8%), et finalement la troisième, avec d'abord du DMSO, puis une sonication (pulsation d'ondes sonores à haute fréquence dans les échantillons, ce qui créeer des bulles qui permettent la lyse cellulaire). 

Trois tubes eppendorf correpondants aux trois méthodes testées ont été préparées pour chaque échantillons. Le protocole dgbi (citer celui décrit en haut) a été suivi pour le premier test. Pour les deuxième et troisième méthodes testées, le protocole dbgi a été repris, en remplaçant le DMSO comme liquide d'extraction. Avant le transfert des échantillons liquides dans les viales, les échantillons testés pour la 3ème méthode ont égalements subit une sonication (x temps x réglage ..?).
Deux blancs ont également été ajoutés aux tests, et ont suivi le même protocole, avec le mélange au méthanol pour le premier blanc, puis du DMSO pour le second.  

Plusieurs différences notables ont été observées entre les échantillons extraits au DMSO et ceux extraits au méthanol. Tout d'abord, le DMSO gèle à -80°C, tandis que le méthanol reste à l'état liquide. De plus, les extraits obtenus avec le DMSO moussent après agitation au shaker, et leur couleur est nettement plus foncée. 
--> important de le mentionner ? 

--> est-ce que je peux directement citer la méthode qu'on a déjà décrite en haut pour ne pas faire de répétition ? 

Les 20 échantillons ont été ainsi transférés dans les viales pour le passage en spectrométrie de masse. 

--> + format 96 puits ? 
 

* *Erythroxylum coca*
* *Salvia officinalis*
* *Nicotiana tabacum*
* *Lavandula angustifolia*
* *Echinaceae purpurea*
* *Cannabis sativa*

### Results 

![dd](dd)

### Discussion and perspectives

L'hypothèse de base émise est que le DMSO combiné à la sonication donne des sorties en spectrométrie de masse d'aussi haute qualité qu'avec le solvant à base de méthanol, puisque la sonication permet d'endommager les cellules et ainsi en récupérer un maximum de composants pour l'analyse. Le DMSO uniquement pourrait cependant être de moins bonne qualité (????). 


# Fake extract project 

# Bibliography 

<p id="ref1">1. : Allard, P.-M. (2023). The Digital Botanical Gardens Initiative repository. https://doi.org/10.5281/zenodo.7662428 </p>

<p id="ref2">2. : Shivanna, K. R. (2020). The Sixth Mass Extinction Crisis and its Impact on Biodiversity and Human Welfare. Resonance, 25(1), 93–109. https://doi.org/10.1007/s12045-019-0924-z </p>

<p id="ref3">3 : Balakin, K. v., Ivanenkov, Y. A., Skorenko, A. v., Nikolsky, Y. v., Savchuk, N. P., & Ivashchenko, A. A. (2004). In silico estimation of DMSO solubility of organic compounds for bioscreening. Journal of Biomolecular Screening, 9(1), 22–31. https://doi.org/10.1177/1087057103260006

Rodríguez-Dévora, J. I., Shi, Z. D., & Xu, T. (2011). Direct assembling methodologies for high-throughput bioscreening. In Biotechnology Journal (Vol. 6, Issue 12, pp. 1454–1465). https://doi.org/10.1002/biot.201100100 

