
# This is PMA's daily notebook.

Today is 2023.02.12

## Todo today




## Doing


### Program 22nd DBGI

Working at [[communication.meetings.2023.02.22.program]]

### Peeking into Quarto
https://quarto.org/

Looks pretty much like the Knitr and Rmd format but also suited for python.
Maybe to keep in mind for MAPP reports [[2022.platform.communication and reports]]


## Paused

## Done
### MAPP Activity Report

## Notes

- followed
https://towardsdatascience.com/managing-project-specific-environments-with-conda-406365a539ab
Trying to better grasp the .env and location of env with mamba



- Created notebook-commons-pmallard.js
Should reflect the ON on the commons side.


## Todo tomorrow, another day ... or never !

### Will need to find a way to clean the huge mess within my conda environments at one point

### Think of a way to incentivate passage from daily Notebook to Open Notebooks at the end of the day
Most likely through the templates notes first  [[templates.notebook.commons.pmallard]]

Adding a 
` 📖 Comment what should be commented and pass this daily Notebook to it's Open Notebook counterpart`

- `cmd+A` on local Notebook (without frontmatter)
- `cmd+o cmd+c` to open new daily Open Notebook (in COMMONS)
- `cmd+v` to paste 
- remove/comment if needed
- post

That's some lines for now and will try redirecting to Open Notebook (in MAPP, COMMONS and DBGI) as much as possible. Will not port old notes ...too much of a burden



## Today I learned that

- I can output selectively a text (and not only code) depending on knitting as pdf or html. Note the `results='asis'` to render as text.

```R
```{r, echo=FALSE, results='asis'}
if (knitr::is_latex_output()) {
  cat("This text will only be rendered in PDF.")
}
if (knitr::is_html_output()) {
  cat("This text will only be rendered in HTML.")
}
```
```

- Just lost a lot of time since I wrote the MAPP activity report having in mind that I could share the Airtbale dashboard (they call this an interface) as a public link. Turns out it's not possible https://community.airtable.com/t5/other-questions/how-to-make-link-to-interface-public/td-p/81008
Another good reason to keep on digging in the NocoDB/Directus direction. Should have checked before.