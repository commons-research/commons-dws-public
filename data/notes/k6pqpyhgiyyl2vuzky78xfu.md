
Documentation is an important step for all kind of projects.
Specially then, when you want to share it and used by the community.
Mostly the mayority of time is spend for coding and some small part for the documentation.
To make the documentation easier and less timeconsuming, some packages are developped.


## Mkdocs
[Mkdocs](https://www.mkdocs.org) is a tool for documentation.
It can build out of a markdown (*.md) file a website.
Github provides the possibility to add "Actions" (actions that would be run after a specific event) and also host this website.

### Installation
We recommend to use Poetry for this task. Remember: the best practice would be using one environment for one project.
```bash
# basic installation
poetry add mkdocs

# for more material <https://squidfunk.github.io/mkdocs-material/>
poetry add mkdocs-material
```

Alternativaly it can also be done with Pypi:
```bash
# basic installation
pip install mkdocs

# for more material <https://squidfunk.github.io/mkdocs-material/>
pip install mkdocs-material
```
 

### Project layout
If you run the first time `mkdocs new <project_name>`, it will create new folders for the documentation and a config file (mkdocs.yml). 

    mkdocs.yml    # The configuration file.
    docs/
        index.md  # The documentation homepage.
        ...       # Other markdown pages, images and other files.  

### Configuration
Open the configuration file (mkdocs.yml) and customize it. This file has some basic functions, which can be very usefull.
This file was used in this project <https://commons-research.github.io/dataset-extractor-lotus/>.

```yaml
site_name: Dataset Extractor for LOTUS  #websitename (name of project) 
site_description: "Python script to extract data from the LOTUS Database" #description
site_url: https://commons-research.github.io/dataset-extractor-lotus/ #website to mkdocs (will be deployd after running 'mkdocs gh-deploy')
site_author: <your-name> #your name
repo_url: https://github.com/commons-research/dataset-extractor-lotus #Github repository
repo_name: GitHub - Dataset Extractor for LOTUS #name of repository

nav: #links to the documentation files in the "/docs" folder.
  - Home: index.md
  - About: about.md
not_in_nav: #files, which shouldn't be published with mkdocs, but still in the repo.
theme: readthedocs #theme
language: en

theme: #advanced changes
  name: material
  features:
    - navigation.tabs
    - navigation.sections
    - toc.integrate
    - navigation.top
    - search.suggest
    - search.highlight
    - content.tabs.link
    - content.code.annotation
    - content.code.copy
  language: en
  palette:
    - scheme: default
      toggle:
        icon: material/toggle-switch-off-outline 
        name: Switch to dark mode
      primary: teal
      accent: purple 
    - scheme: slate 
      toggle:
        icon: material/toggle-switch
        name: Switch to light mode    
      primary: teal
      accent: lime


copyright: |
  &copy; 2024 <a href="https://github.com/pamrein"  target="_blank" rel="noopener"> YOUR-NAME </a>
```

### Commands
* `mkdocs new [dir-name]` - Create a new project.
* `mkdocs serve` - Start the live-reloading docs server.
* `mkdocs build` - Build the documentation site.
* `mkdocs -h` - Print help message and exit.
* `mkdocs gh-deploy` - Deploy the documentation to GitHub pages and push it with the branch gh-pages.
* `mkdocs gh-deploy --help` - Print help of gh-deploy

The easiest way to "deploy" the documentation is putting the required files in the **/docs** folder and configuring the **mkdocs.yml** file.
With the command `mkdocs gh-deploy` the documentation will be deployed and pushed to Github (uses the branch: gh-deploy). This can takes less than a minute. The website name you can find in the terminal output of this command or < username >.github.io/< repository >.


### github - workflows 
For even make it easier for the documentation, it's possible to do an ["action"](https://docs.github.com/en/actions/learn-github-actions/understanding-github-actions?learn=getting_started) on github.
It is a `/.github/workflows/*.yml` file, which will be run after a specific event.
In this case we will run the command `mkdocs gh-deploy` after a push to the main or master branch.  

Create the folders and file `/.github/workflows/mkdocs.yml` and put the following content in the file (**ci.yml**):
```yaml
name: ci-mkdocs

#if pushed from master or main, this action will be triggered
on:
  push:
    branches:
      - master 
      - main
permissions:
  contents: write

#jobs to be executed
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Configure Git Credentials
        run: |
          git config user.name github-actions[bot]
          git config user.email 41898282+github-actions[bot]@users.noreply.github.com
      - uses: actions/setup-python@v5
        with:
          python-version: 3.x
      - run: echo "cache_id=$(date --utc '+%V')" >> $GITHUB_ENV 
      - uses: actions/cache@v4
        with:
          key: mkdocs-material-${{ env.cache_id }}
          path: .cache
          restore-keys: |
            mkdocs-material-
      - run: pip install mkdocs-material
      - run: pip install pillow cairosvg
      - run: mkdocs gh-deploy --force
```
The main part for this file comes from the following sourece: <https://squidfunk.github.io/mkdocs-material/publishing-your-site/?h=github#with-github-actions>.  

Now, when you push your documentation with the main branch, it will be automaticaly deployed on github. You even don't have to run anymore `mkdocs gh-deploy`.

