
# PAMREIN's daily Open Notebook (COMMONS Lab)

## Todo - [Check Github](https://github.com/orgs/commons-research/projects/2/views/1)
-[]


## Meetings



## Daily report (What did I learn?)

### Docstrings (in Python)
Docstring helps by the documentation of python modules. It can be added just under the function name with `"""`or `'''`.   

It can be called in two ways:

```py
# import your model
import zenodo_downloader as zd

# using variable __doc__
print("Using __doc__:")
print(zd.doi_info.__doc__)
 
# using help function
print("Using help:")
help(zd.doi_info)
```

For the documentation it exist different "styles" of docstring. One which I will prefer is google-style which is the following:
```py
def multiply_numbers(a, b):
    """
    Multiplies two numbers and returns the result.
 
    Args:
        a (int): The first number.
        b (int): The second number.
 
    Returns:
        int: The product of a and b.
    """
    return a * b
print(multiply_numbers(3,5))
```

Now I am working with the `pip install inquirerpy` package. It is a package for creating interactive command line interfaces.
<https://inquirerpy.readthedocs.io/en/latest/pages/prompts/rawlist.html>.   
Attention: It also exist 'pyinquirer` which is not the same!


## Future perspective



## Keywords
[[expanded_np_chemspace.abbreviations.md]]
