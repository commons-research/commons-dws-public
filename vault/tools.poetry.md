---
id: 40po5od17ekcr1e77dluxao
title: Poetry
desc: ''
updated: 1719206517089
created: 1712857978273
---

### In case poetry doesn't detect the active pyenv 

`poetry env use $(pyenv which python)`

As per https://github.com/python-poetry/poetry/issues/651#issuecomment-1073213937

### In case Poetry is not getting the latest pypi package

poetry cache list

poetry cache clear PyPI --all

poetry cache clear _default_cache --all

