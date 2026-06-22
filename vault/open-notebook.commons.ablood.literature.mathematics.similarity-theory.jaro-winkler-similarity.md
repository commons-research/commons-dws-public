---
id: 1sr4yv0tcmn8iznphj6jn94
title: Jaro Winkler Similarity
desc: ''
updated: 1781752949470
created: 1781750980927
traitIds:
  - open-notebook-commons-ablood-literature
---
# [Jaro Winkler Distance (wikipedia)](https://en.wikipedia.org/wiki/Jaro%E2%80%93Winkler_distance)
- A string metric that measures an edit distance. 

**Algorithm**:
$$
sim_j = \begin{cases} \text{0} & \text{m=0} \\ \frac{1}{3} (\frac{m}{|s_1|}+\frac{m}{|s_2|}+\frac{m-t}{m}) & \text{otherwise} \end{cases}
$$
- Where $|s_i|$ is the length of string $s_i$. 
- $m$ is the number of matching characters
- $t$ is the number of transpositions

# [Jaro and Jaro-Winkler similarity (geeksforgeeks)](https://www.geeksforgeeks.org/dsa/jaro-and-jaro-winkler-similarity/)
## Jaro Similarity
measure of similarity between two strings. Value is between 0 and 1. Where 1 means they are equal and 0 means there is no similarity. 

**Examples:**
s1 = "CRATE", s2 = "TRACE"
- Jaro similarity is 0.733333
$$
sim_j = \begin{cases} \text{0} & \text{if m = 0} \\ \frac{1}{3} (\frac{m}{|s_1|}+\frac{m}{|s_2|}+\frac{m-t}{m}) & \text{if m} \neq 0 \end{cases}
$$
where:
- $m$ is the number of matching characters
- $t$ is half the number of transpositions
- where ****|s1|**** and ****|s2|**** are the lengths of strings s1 and s2 respectively.

Time Complexity: $O(N*M)$
Space: $O(N+M)$

## Jaro-Winkler Similarity
Defined as following:
$S_w = S_j + P * L (1 - S_j)$
Where:
- $S_j$ is the jaro similarity
- $S_w$ is the jaro-winkler similarity
- $P$ is the scaling factor (0.1 by default)
- $L$ is the length of hte matching prefix up to a max of 4 characters
