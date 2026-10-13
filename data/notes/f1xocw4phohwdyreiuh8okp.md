
Pasted from [[project.commons-private.laure-weisskopf.np_determination]] for sharing purposes.
Time stamp screenshot 

![](/assets/images/2024-03-18-09-24-02.png)

----


Eliane indicated that they are working n the structural determnination of a potentially novel NP form Streptomyces coelicolor.

> Salut Pierre-Marie
> 
> Les analyses Masses sont sur le serveur : V:\Biol\_Vegetale\Eliane
> 
> Le nom de la bactérie la plus proche est
> 
> Streptomyces coelicolor
> 
> J’espère que ce n’est pas des sphyngolipids
> 
> Merci pour ton aide
> Eliane
> 

> MW 812
> C42H68O15
> MW 826
> C43H70O15
> 
> Ce que je peux voir tres claire par la RMN c’est
> 
> • Proton : 70
> • Carbon : 43 ou 42 (1 CO, 1COO, 3 quaternary, 20 CH, 5 CH2, 11 CH3)
> • Oxygen : 10 (including 1 CO, 2 for ester COO)

ekg
We try to launch a SPARQL query https://w.wiki/3$J7

However it returns a timeout error.

This ones looks better https://w.wiki/3$Jy

http://www.wikidata.org/entity/Q105280358
http://www.wikidata.org/entity/Q105168596
http://www.wikidata.org/entity/Q105168602

 wd:Q105280358	avermectin	C₄₄H₆₆O₁₄		 wd:Q2355919	Streptomyces coelicolor


 C43H64O14

Could be a derivative of avermectin
Lets try a proton NMR prediction

O=C1OC2CC(OC3(OCC(C)CC3)C2)CC=C(C)C(OC4OC(C)C(OC5OC(C)C(O)C(OC)C5)C(OC)C4)C(C=CC=C6COC7C(O)C(=CC1C67O)C)C

```smiles
O=C1OC2CC(OC3(OCC(C)CC3)C2)CC=C(C)C(OC4OC(C)C(OC5OC(C)C(O)C(OC)C5)C(OC)C4)C(C=CC=C6COC7C(O)C(=CC1C67O)C)C
```

![](/assets/images/2021-09-03-11-44-58.png)


![](/assets/images/2021-09-03-12-11-06.png)


![](/assets/images/2021-09-03-12-17-48.png)

According to the MS I would head more for a molecular ion at 805

C45H72O12
Olygomycin simulation 

41-demethylhomooligomycin B

```smiles
CC[C@@H](CC[C@H]([C@H](C)[C@@H]([C@H]1C)OC(/C=C/[C@@H](C)[C@@H]([C@@H](C)C([C@@H](C)[C@@H]([C@@H](C)C([C@@]2(C)O)=O)O)=O)O)=O)O[C@]11O[C@H](C[C@H](C)O)[C@H](C)CC1=O)/C=C/C=C/C[C@H](C)[C@H]2O
```


![](/assets/images/2021-09-03-12-20-30.png)