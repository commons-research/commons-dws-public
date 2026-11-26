# [Tidy Data](https://tidyr.tidyverse.org/articles/tidy-data.html)
**Tidying:** structuring datasets to facilitate analysis. 

This works as a data standard. 

## Defining tidy data
### Data structure
Usually datasets are rows and columns. Columns are usually labeled, and rows are sometimes labeled. 

Rows and columns can be transposed. 
### Data semantics
Datasets are a collection of values, and values are organized as either a variable or an observation. 
- variables contain contain all values that measure attributes accross units
- observations contain all values measured on the same unit
## Tidy Data
Standard for mapping data to meaning and structure. 
1. each variable is a column
2. each observation is a row
3. each value is a cell
## Tidying messy datasets
Common issues with datasets
- column headers are values not variable names
- multiple variables are stored in one column
- variables are stored in both rows and columns
- multiple types of observational units are stored in same table
- single observational unit is stored in multiple tables
### Column headers are values, not variable names
example:
```
#> # A tibble: 18 × 11
#>    religion   `<$10k` `$10-20k` `$20-30k` `$30-40k` `$40-50k` `$50-75k`
#>    <chr>        <dbl>     <dbl>     <dbl>     <dbl>     <dbl>     <dbl>
#>  1 Agnostic        27        34        60        81        76       137
#>  2 Atheist         12        27        37        52        35        70
#>  3 Buddhist        27        21        30        34        33        58
#>  4 Catholic       418       617       732       670       638      1116
#>  5 Don’t kno…      15        14        15        11        10        35
#>  6 Evangelic…     575       869      1064       982       881      1486
#>  7 Hindu            1         9         7         9        11        34
#>  8 Historica…     228       244       236       238       197       223
#>  9 Jehovah's…      20        27        24        24        21        30
#> 10 Jewish          19        19        25        25        30        95
#> # ℹ 8 more rows
#> # ℹ 4 more variables: `$75-100k` <dbl>, `$100-150k` <dbl>,
#> #   `>150k` <dbl>, `Don't know/refused` <dbl>
```
Data has 3 variables - religion, income, and frequency. 
Tidying means pivoting the data inot non variable columns:
```
#> # A tibble: 180 × 3
#>    religion income             frequency
#>    <chr>    <chr>                  <dbl>
#>  1 Agnostic <$10k                     27
#>  2 Agnostic $10-20k                   34
#>  3 Agnostic $20-30k                   60
#>  4 Agnostic $30-40k                   81
#>  5 Agnostic $40-50k                   76
#>  6 Agnostic $50-75k                  137
#>  7 Agnostic $75-100k                 122
#>  8 Agnostic $100-150k                109
#>  9 Agnostic >150k                     84
#> 10 Agnostic Don't know/refused        96
#> # ℹ 170 more rows
```

Here now each column represents a variable and each row represents an observation, in this case a demographic unit corresponding to a combination of `religion` and `income`. 

Note that this results in a lot of redundancy in data columns. 

### Multiple variables stored in one column
See below example of TB cases
```
#> # A tibble: 5,769 × 22
#>    iso2   year   m04  m514  m014 m1524 m2534 m3544 m4554 m5564   m65
#>    <chr> <int> <int> <int> <int> <int> <int> <int> <int> <int> <int>
#>  1 AD     1989    NA    NA    NA    NA    NA    NA    NA    NA    NA
#>  2 AD     1990    NA    NA    NA    NA    NA    NA    NA    NA    NA
#>  3 AD     1991    NA    NA    NA    NA    NA    NA    NA    NA    NA
#>  4 AD     1992    NA    NA    NA    NA    NA    NA    NA    NA    NA
#>  5 AD     1993    NA    NA    NA    NA    NA    NA    NA    NA    NA
#>  6 AD     1994    NA    NA    NA    NA    NA    NA    NA    NA    NA
#>  7 AD     1996    NA    NA     0     0     0     4     1     0     0
#>  8 AD     1997    NA    NA     0     0     1     2     2     1     6
#>  9 AD     1998    NA    NA     0     0     0     1     0     0     0
#> 10 AD     1999    NA    NA     0     0     0     1     1     0     0
#> # ℹ 5,759 more rows
#> # ℹ 11 more variables: mu <int>, f04 <int>, f514 <int>, f014 <int>,
#> #   f1524 <int>, f2534 <int>, f3544 <int>, f4554 <int>, f5564 <int>,
#> #   f65 <int>, fu <int>
```

This can be tidied up to be:
```
#> # A tibble: 35,750 × 4
#>    iso2   year demo      n
#>    <chr> <int> <chr> <int>
#>  1 AD     1996 m014      0
#>  2 AD     1996 m1524     0
#>  3 AD     1996 m2534     0
#>  4 AD     1996 m3544     4
#>  5 AD     1996 m4554     1
#>  6 AD     1996 m5564     0
#>  7 AD     1996 m65       0
#>  8 AD     1996 f014      0
#>  9 AD     1996 f1524     1
#> 10 AD     1996 f2534     1
#> # ℹ 35,740 more rows
```

Then further separating out the gender as:
```
#> # A tibble: 35,750 × 5
#>    iso2   year sex   age       n
#>    <chr> <int> <chr> <chr> <int>
#>  1 AD     1996 m     014       0
#>  2 AD     1996 m     1524      0
#>  3 AD     1996 m     2534      0
#>  4 AD     1996 m     3544      4
#>  5 AD     1996 m     4554      1
#>  6 AD     1996 m     5564      0
#>  7 AD     1996 m     65        0
#>  8 AD     1996 f     014       0
#>  9 AD     1996 f     1524      1
#> 10 AD     1996 f     2534      1
```

Note that this new tidied format readily presents a necessary piece of information: the population. 
### Variables are stored in both rows and columns
Most complicated issue. example:
```
#> # A tibble: 22 × 35
#>    id      year month element    d1    d2    d3    d4    d5    d6    d7
#>    <chr>  <int> <int> <chr>   <dbl> <dbl> <dbl> <dbl> <dbl> <dbl> <dbl>
#>  1 MX170…  2010     1 tmax       NA  NA    NA      NA  NA      NA    NA
#>  2 MX170…  2010     1 tmin       NA  NA    NA      NA  NA      NA    NA
#>  3 MX170…  2010     2 tmax       NA  27.3  24.1    NA  NA      NA    NA
#>  4 MX170…  2010     2 tmin       NA  14.4  14.4    NA  NA      NA    NA
#>  5 MX170…  2010     3 tmax       NA  NA    NA      NA  32.1    NA    NA
#>  6 MX170…  2010     3 tmin       NA  NA    NA      NA  14.2    NA    NA
#>  7 MX170…  2010     4 tmax       NA  NA    NA      NA  NA      NA    NA
#>  8 MX170…  2010     4 tmin       NA  NA    NA      NA  NA      NA    NA
#>  9 MX170…  2010     5 tmax       NA  NA    NA      NA  NA      NA    NA
#> 10 MX170…  2010     5 tmin       NA  NA    NA      NA  NA      NA    NA
#> # ℹ 12 more rows
#> # ℹ 24 more variables: d8 <dbl>, d9 <lgl>, d10 <dbl>, d11 <dbl>,
#> #   d12 <lgl>, d13 <dbl>, d14 <dbl>, d15 <dbl>, d16 <dbl>, d17 <dbl>,
#> #   d18 <lgl>, d19 <lgl>, d20 <lgl>, d21 <lgl>, d22 <lgl>, d23 <dbl>,
#> #   d24 <lgl>, d25 <dbl>, d26 <dbl>, d27 <dbl>, d28 <dbl>, d29 <dbl>,
#> #   d30 <dbl>, d31 <dbl>
```

individual column variables (id, year, month), spread across columns (day, d1-d31) and across rows (tmin, tmax). 

Tidied up:
```
#> # A tibble: 33 × 6
#>    id       year month   day  tmax  tmin
#>    <chr>   <int> <int> <int> <dbl> <dbl>
#>  1 MX17004  2010     1    30  27.8  14.5
#>  2 MX17004  2010     2     2  27.3  14.4
#>  3 MX17004  2010     2     3  24.1  14.4
#>  4 MX17004  2010     2    11  29.7  13.4
#>  5 MX17004  2010     2    23  29.9  10.7
#>  6 MX17004  2010     3     5  32.1  14.2
#>  7 MX17004  2010     3    10  34.5  16.8
#>  8 MX17004  2010     3    16  31.1  17.6
#>  9 MX17004  2010     4    27  36.3  16.7
#> 10 MX17004  2010     5    27  33.2  18.2
```

one variable in each column, each row is now one day
### Multiple types in one table
Each observational unit should be stored in its own table. Similar to DB normalization. Example: 
song dataset has artist and song name
```
#> # A tibble: 317 × 3
#>    artist         track                   song_id
#>    <chr>          <chr>                     <int>
#>  1 2 Pac          Baby Don't Cry (Keep...       1
#>  2 2Ge+her        The Hardest Part Of ...       2
#>  3 3 Doors Down   Kryptonite                    3
#>  4 3 Doors Down   Loser                         4
#>  5 504 Boyz       Wobble Wobble                 5
#>  6 98^0           Give Me Just One Nig...       6
#>  7 A*Teens        Dancing Queen                 7
#>  8 Aaliyah        I Don't Wanna                 8
#>  9 Aaliyah        Try Again                     9
#> 10 Adams, Yolanda Open My Heart                10
#> # ℹ 307 more rows
```
ranking table which gives each song a ranking. 

```
#> # A tibble: 5,307 × 4
#>    song_id date        week  rank
#>      <int> <date>     <int> <dbl>
#>  1       1 2000-02-26     1    87
#>  2       1 2000-03-04     2    82
#>  3       1 2000-03-11     3    72
#>  4       1 2000-03-18     4    77
#>  5       1 2000-03-25     5    87
#>  6       1 2000-04-01     6    94
#>  7       1 2000-04-08     7    99
#>  8       2 2000-09-02     1    91
#>  9       2 2000-09-09     2    87
#> 10       2 2000-09-16     3    92
#> # ℹ 5,297 more rows
```

