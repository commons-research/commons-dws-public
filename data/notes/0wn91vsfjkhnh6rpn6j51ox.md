
# PAMREIN's daily Open Notebook (COMMONS Lab)

## Todo - [Check Github](https://github.com/orgs/commons-research/projects/2/views/1)
-[] try to get in touch with mkdocs


## Meetings
None


## Daily report (What did I learn?)

### Mkdocs
Tool for documentation.

1. Installation:
```bash
pipx install mkdocs
```

2. Create mkdocs in the projectfolder
```bash
mkdocs new <project_directory>
```

3. Configurate the mkdocs.yml. In this file will be set all the settings and links.
```bash
vim mkdocs.yml
```

The file can look like this (<https://www.mkdocs.org/user-guide/configuration/>):
```bash
The file can look like this:
site_name: "Dataset Extractor for LOTUS"
repo_url: "https://github.com/commons-research/dataset-extractor-lotus"
site_author: "Pascal Amrein"
site_description: "Python script to extract data from the LOTUS Database"
copyright: "commons-lab"
repo_name: "GitHub"
nav:
  - Home: "index.md"
  - About: "about.md"
not_in_nav:
theme: "readthedocs"
```

4. test your documentation
```bash
mkdocs serve
```

5. publish it to github (the output will show you the link for the documentation)
```bash
mkdocs gh-deploy
```

It is recommended to ignore (.ignore file) the folder /site which will be the outputfile from mkdocs. It will inclute the *.html file, *.css and others.


With the gh-deploy the following webpage went online <https://commons-research.github.io/dataset-extractor-lotus/#information>.


## Future perspective
how can it automatically include the functiondoc.


## Keywords
[[expanded_np_chemspace.abbreviations.md]]
