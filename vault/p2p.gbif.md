---
id: uga2j30542tob93htmdsogp
title: Gbif
desc: ''
updated: 1746972341882
created: 1746821022096
---

Starting the process of making a torrent for GBIF occurence snapshot

https://sciop.net/datasets/gbif-20250501-occurrence-data

Currently dling the 214 Gb.

Started to do so after 

![](/assets/images/2025-05-09-22-07-47.png)

and 

![](/assets/images/2025-05-09-22-07-04.png)

sciop-cli torrent create -p ./gbif-20250501/ --comment "That's what we know of the occurrences of our planet's species as of May 2025" --default-trackers -o ./gbif-20250501-occurrence-data.torrent
