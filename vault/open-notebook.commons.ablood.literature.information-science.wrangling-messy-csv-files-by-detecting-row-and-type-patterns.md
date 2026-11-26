---
id: 0nd0idp810girrsbusoofnf
title: Wrangling Messy Csv Files By Detecting Row And Type Patterns
desc: ''
updated: 1795679482254
created: 1795679479043
traitIds:
  - open-notebook-commons-ablood-literature
---
# [Wrangling Messy CSV Files by Detecting Row and Type Patterns](https://arxiv.org/html/1811.11242v1)
Their parsing method is able to get 97% accuracy with dialect detection. 

#  Intro
There are 39 different possible dialects, just within CSV files alone. And data can be separated by commas, semicolons, spaces, tabs, or other characters. 

Parsing CSVs is an open CS problem and the bets tools out there still have issues parsing dialects accurately regularly. 

# Problem State
Let: 
- $\Sigma$ (sigma) = finite alphabet of characters in an encoding
- $E$  (epsilon) = the encoding
- $\Sigma{^*}$ = all possible strings in the alphabet $\Sigma$ 
- A csv file is therefore an element $x$ such that $x \in \Sigma^*$ 
- A csv file contains $N$ tuples $t_i$ that are elements of a product set
- $t_i \in V_1 \times V_2 \times \cdots \times V_{L_i}$ , where $V_j$ is the domains of values of tuples. 
	- tuple: fininite sequence (ordered list)
- All tuples in a file is contained in $T$ where $T = [t_1, \cdots, t_N ]$ 
- $\theta$ is the dialect of the CSV file
- The formatter first:
	- converts the data $T$ to a string representation $C$ where the domains in the tuples are string domain ($\Sigma^*$) 
- Then stage two:
	- the string representation is converted to CSV file $x$ 
Unfortunately retrieving the information from the CSV file loses the dialect and formatter information. 

For the dialect, given a csv file $x$:
- $x \in \Sigma^*$
- $\theta$ is the dialect, which is the parameters needed to map the tuples $C = [c_1, \cdots, c_N]$ to the file $x$ 
- $f_\theta(C) = x$ 
- $f_\theta$ represents stage 2 of the formatter, converting the file back would therefore be $f_\theta^{-1}(x) = C$ 
- function $g$ is used in stage 1 to convert data to the string representation $g(T) = C$, therefore inversely returning the string to the data is $g^{-1}(C) = T$ 
## A consistency measure for dialect detection
If the csv is parsed correctly the tuples will be more consistent than if not. 

### Algorithm 1: Dialect Detection

$$
\begin{array}{rl}
1: & \mathbf{function}\ \text{DetectDialect}(\mathbf{x})\\
2: & \quad \Theta_{\mathbf{x}} \leftarrow \text{GetDialects}(\mathbf{x})\\
3: & \quad \mathcal{H} \leftarrow \emptyset\\
4: & \quad Q_{\max} \leftarrow -\infty\\
5: & \quad \mathbf{for}\ \boldsymbol{\theta}\in\Theta_{\mathbf{x}}\ \mathbf{do}\\
6: & \qquad P(\mathbf{x},\boldsymbol{\theta}) \leftarrow \text{PatternScore}(\mathbf{x},\boldsymbol{\theta})\\
7: & \qquad \mathbf{if}\ P(\mathbf{x},\boldsymbol{\theta}) < Q_{\max}\ \mathbf{then}\\
8: & \qquad\quad \mathbf{continue}\\
9: & \qquad \mathbf{end\ if}\\
10: & \qquad T(\mathbf{x},\boldsymbol{\theta}) \leftarrow \text{TypeScore}(\mathbf{x},\boldsymbol{\theta})\\
11: & \qquad Q(\mathbf{x},\boldsymbol{\theta}) \leftarrow P(\mathbf{x},\boldsymbol{\theta})T(\mathbf{x},\boldsymbol{\theta})\\
12: & \qquad \mathbf{if}\ Q(\mathbf{x},\boldsymbol{\theta}) > Q_{\max}\ \mathbf{then}\\
13: & \qquad\quad \mathcal{H} \leftarrow \{\boldsymbol{\theta}\}\\
14: & \qquad\quad Q_{\max} \leftarrow Q(\mathbf{x},\boldsymbol{\theta})\\
15: & \qquad \mathbf{else\ if}\ Q(\mathbf{x},\boldsymbol{\theta}) = Q_{\max}\ \mathbf{then}\\
16: & \qquad\quad \mathcal{H} \leftarrow \mathcal{H}\cup\{\boldsymbol{\theta}\}\\
17: & \qquad \mathbf{end\ if}\\
18: & \quad \mathbf{end\ for}\\
19: & \quad \mathbf{if}\ |\mathcal{H}|=1\ \mathbf{then}\\
20: & \qquad \mathbf{return}\ \boldsymbol{\theta}\in\mathcal{H}\\
21: & \quad \mathbf{else}\\
22: & \qquad \mathbf{return}\ \text{TieBreaking}(\mathcal{H})\\
23: & \quad \mathbf{end\ if}\\
24: & \mathbf{end\ function}
\end{array}
$$

The dialect $\theta$ consists of three parameters:
- $\theta_d$ = delimiter
- $\theta_q$ = quote character
- $\theta_e$ = escape character
Each parameter can be a single character or absent ($\epsilon$).

The consistency score for a given dialect is:
$$
Q(\mathbf{x},\boldsymbol{\theta}) = P(\mathbf{x},\boldsymbol{\theta}) \cdot T(\mathbf{x},\boldsymbol{\theta})
$$
- $P$ = pattern score
- $T$ = type score
- $Q$ = consistency score
- $\Theta_{\mathbf{x}}$ = set of potential dialects
The dialect with the highest consistency score is selected:

$$
\hat{\boldsymbol{\theta}} = \arg\max_{\boldsymbol{\theta}\in\Theta_{\mathbf{x}}} Q(\mathbf{x},\boldsymbol{\theta})
$$
### 4.1 Pattern Score
Abstract each row into a pattern, ignoring cell contents but accounting for quotes and escape characters.
- $C$ = cell
- $D$ = delimiter
- $K$ = number of distinct row patterns
- $N_k$ = number of occurrences of pattern $k$
- $L_k$ = number of cells in pattern $k$

The pattern score is calculated as:

$$
P(\mathbf{x},\boldsymbol{\theta}) = \frac{1}{K}\sum_{k=1}^{K}N_k\frac{L_k-1}{L_k}
$$

The score favors:
- Fewer distinct patterns.
- More frequently occurring patterns.
- Patterns with more columns.

To prevent single-column files from receiving a score of zero, introduce $\alpha=10^{-3}$:

$$
P(\mathbf{x},\boldsymbol{\theta}) = \frac{1}{K}\sum_{k=1}^{K}N_k\frac{\max(\alpha,L_k-1)}{L_k}
$$

Uninterpreted quote characters can also distinguish otherwise identical row patterns.

### 4.2 Type Score

Determine the proportion of cells matching recognizable data types.

- $\mathcal{T}$ = set of recognized data types
- $\mu(z)$ = function identifying the type of string $z$
- $M$ = total number of parsed cells
- $N$ = number of rows
- $L_i$ = number of cells in row $i$
- $c_{i,j}$ = cell at row $i$, column $j$
- $I$ = indicator function (1 if true, 0 otherwise)

$$
T(\mathbf{x},\boldsymbol{\theta}) = \frac{1}{M}\sum_{i=1}^{N}\sum_{j=1}^{L_i}I[\mu(c_{i,j})\in\mathcal{T}]
$$

Recognized types include:

- Empty cells
- Numbers
- URLs and email addresses
- Percentages and currencies
- Dates and times
- Alphanumeric strings

Types are identified using regular expressions.

To prevent unrecognized data types from reducing the entire consistency score to zero:

$$
\tilde{T}(\mathbf{x},\boldsymbol{\theta}) = \max(\beta,T(\mathbf{x},\boldsymbol{\theta}))
$$

Where $\beta=10^{-10}$.

Note: type score evaluates individual cells, not type consistency within columns.

### 4.3 Tie Breaking

If multiple dialects have the same consistency score:

- Determine whether the differing dialect parameter affects the parsed result.
- If removing a parameter produces identical data, prefer its absence.
- Apply this to delimiters, quote characters and escape characters.

### 4.4 Potential Dialects

Generate potential dialects from characters present in the file rather than evaluating every possible character combination.

- $\mathcal{D}$ = potential delimiters
- $\mathcal{Q}$ = potential quote characters
- $\mathcal{E}_{d,q}$ = potential escape characters for a delimiter-quote combination

#### Algorithm 2: Construction of Potential Dialects

1. Filter URLs from the input to avoid detecting their punctuation as delimiters.
2. Identify potential delimiters using Unicode character categories and an exclusion list.
3. Identify potential quote characters from an allowed set.
4. Identify potential escape characters:
   - Must belong to Unicode category `Po` (Other Punctuation).
   - Must occur immediately before a potential delimiter or quote character.
5. Include absent parameters ($\epsilon$) as candidates.
6. Generate combinations of delimiters, quote characters and their corresponding escape characters.
7. Reject dialects whose delimiter is always contained within quoted sections.
8. Return the remaining potential dialects.
