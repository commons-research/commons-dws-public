[source](https://link.springer.com/article/10.1186/s13321-015-0068-4#Fig9)
## Terms
- **InChi**: International Chemical Identifier
- **InChiKey**: hashes of *InChi*
- **Core Parent Structure**: based on a core parent ^core-parent-structure
- **Layers**: layer of core parent structure - represents empirical formula ^layers
- **Valence Schema**: Metal and Non-metal atoms are treated differently. ^valence-schema
	- **Non-Metals:** H, He, B, C, N, O, F, Ne, Si, P, S, Cl, Ar, Ge, As, Se, Br, Kr, Te, I, Xe, At, Rn
	- **Metals**: All other elements
- **Hill Convention**: Starts with Carbon atoms, then hydrogens, then all other elements in **alphabetical order**. 
- **Tautomerism**: [a phenomenon where a single chemical compound tends to exist in two or more interconvertible structures that are different in terms of the relative position of one atomic nucleus which is generally the hydrogen](https://tgc.ac.in/pdf/study-material/chemistry/Sem_II_Chemistry_Hons.__Tautomerism.pdf). ^tautomerism
- **Mesomerism**: structure cannot be represented unambiguously by single classical structural formula, requiring two or more structure forumulas. ^mesomerism
# Background
Chemical identifiers are used to denote chemical substances with text labels. Labels must be unambiguous. 
# Design and Layout
## Inchi design goals
Inchi is open source and non proprietary. Core features:
- Structure based approach
- Strict uniqueness of identifier
- Non-proprietary/open source free free free
- applies to entire domain of 'classic organic chemistry' and mostly inorganic 
- ability to generate the same InChI for structures drawn under (reasonably) different styles/conventions 
- Hierarchical approach - allows for different levels of granularity when encoding molecule 
- can create an identifier with 'default' swtiches tied to granularity 
Non required but important features:
- restore chemical structure from InChi string
- compact form
- ability to deal with coordination & organometallic compounds
example: InChi to Structure to InChi 
Current software restores with 99.95% accuracy 
**InChiKeys** allow for a more compact identifier. 

Human readability was considered  low importance. For some reason. 
### InChi Model of Chemical Structure
Molecules are made of atoms - skeletons or terminal hydrogen atoms (hydrogens). 

Skeletal atoms are connected by bonds pair-wise and characterized by the atom's chemical element. Hydrogens may be connected to skeletal atoms or shared by a group of skeletal atoms (1 to many relationship). 

Bonds are simple linked and formed pair-wise so there can be no bond between three or more atoms - except for Hydrogens shared by a group of skeletal atoms. 

### Core Parent Structure
The InChi structure is layer. It uses a [[#^core-parent-structure]]. The source structure is derived from its parent core with explicitly added features. This allows for the mentioned granularity. Each layer starts with a `/` then the letter denoting the identity of the layer. [[#^layers]]

First layer such as: "InChi=1/", then the layer: "C10H16N5O13P3", and use of `/c` for skeletal connections and `/h` for hydrogens. 
### Standard and non-standard InChi
The same molecule can have different `InChi` strings based on the choices made and options applied. It is a major drawback to interoperability. Therefore a *standard* InChi was introduced in 2009. 

### InChi Valence Schema
Inchi also take into consideration the [[#^valence-schema]]. 

These metals all implicitly have hydrogens: Li, Be, Na, Mg, Al, K, Ca, Ga, Rb, Sr, In, Sn, Sb, Cs, Ba, Tl, Pb, Bi, Po, Fr, Ra

## Layout of InChi Layers
### Main Layer: representing core parent structure
### Empirical formula sublayer: representing composition
Follows something called the [[#^Hill-convention]]. This is only layer prefixed with a single `/` without a following character. 
e.g.: "InChI=1S/ClH/h1H/p-1" -> formula layer: *ClH* 
### Skeletal connections layer
layer prefixed with `/c` connections between skeletal atoms, with branches in parentheses. 
> For example, “/C10H16N5O13P3” (the beginning of InChI for adenosine triphosphate) implies that atoms numbered 1–10 are carbons, 11–15 are nitrogens, 16–28 are oxygens, and 29–31 are phosporus. Hydrogen atoms are not explicitly numbered.

### Hydrogen layers
Prefixed with '/h' lists bonds between atoms in the structure, partitioned into three sublayers:
1) represents all bonds other htan those to non-bridging H-atoms
2) represents all bonds of immobile H-atoms
3) location of any mobile H-atoms -> H-atoms that can be found at more than one location in a compound due to various types of tautomerism. [[#^tautomerism]]
## Charge Layer
layer provides information about net charge and is composed of two sublayers
### Charge Sublayer
`/q` net charge of core parent structure
### Protonation/deprotonation sublayer
`/p` net number of protons removed from or added to the source structure to derive its core parent. 
## [[#^Mesomerism]] 
InChis eliminate mesomers. The placement of hydrogens in a mesomeric system is the same no matter what.
### FixedH Layer
prefixed with `/f` represents specification of tautomers. 
## Stereochemistry layer
### Overview of stereochemistry layer with its sublayers
Contains sublayers for double bonded stereochemistry and tetrahedral stereochemistry. This layer is dependent on the previous layers. This layer can be present in several locations in the identifier?!

### Double bonded $sp^2$ Z/E stereo layer '\b'
### Tetrahedral stereo layer '\t'
this will typically be denoted with `(+)` or `(-)`. but can also be `undefined`.  The default now is the `?` for both undefined and unknown. 
#### Isotopic layer
prefixed with `/i` identifies isotopically labeled atoms. 
#### Reconnected layer: coordination compounds and oragnometallics
prefixed with `/r` followed by the formula 
## InChiKey
A hashcode, formatted like:
`AAAAAAAAAAAAAA-BBBBBBBBFV-P`
Fixed at 27 characters in length and "base-26" English encoding. So like ONLY ASCII uppercase I guess? 
Sections:
1) AAAAAAAAAAAAAA - 14 char core molecule 
2) BBBBBBBBF - 8 char encoding for structural features (stereochemistry, isotopic sub, mobile hydrogens, metal ligation)
3) F - flag (S for standard and N for non standard)
4) V - version character, which is an A for 1 for some reason
5) P - protonation/deprotonation flag
An N means no proton related ionization
![](/assets/images/char_protons_table.png)
# Overview of Implementation
## General Workflow
Workflow steps:
1) normalization of input structure
2) canonicalization of atomic numbering
3) serialization - generating inchi key
4) Optionally - hasing InChi to make InChiKey
![](/assets/images/inchi_flowchart.png)
## Input Data
## Normalization of input structure
