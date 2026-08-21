
# PAMREIN's daily Open Notebook (COMMONS Lab)

## Todo - [Check Github](https://github.com/orgs/commons-research/projects/2/views/1)
-[]


## Meetings



## Daily report (What did I learn?)

Zenodo is just used as a "research google drive". It will provide a DOI number and you can upload your data (without proofing it).

### zenodo_client 
Today I tried out the package zenodo_client <https://github.com/cthoyt/zenodo-client>.
For this you need to make an API token to access the zenodo webpage.
API tokens are used for authentication and authorization purposes in API (Application Programming Interface) requests.
This token has to be stored in the file `~/.config/zenodo.ini` ([.ini](https://en.wikipedia.org/wiki/INI_file)) with the following entry:
```yaml
[zenodo]
api_token = <your_token>
```
Unfortunately, I was not able to download my data specificly. Somehow I have to provide a name of the file, but I don't get it, how I would get the filename without knowing it. If I try the querys directly in the browser, I can see there is only one file to download. The package also needs the API_token, which doesn't makes it userfriendly.
I will try to find another solution for it. 


### Webscrapping
It didn't worked out with the zenodo_client, so I tried to do it with webscrapping. I used beautifulsoup4 and selenium to get the links.
The trick is, to open a webpage where all the versions are available, load them (javascript is activ what makes it more difficult to grap)
and get the links for downloading. I tried to build my own package, but it didn't worked out until now. So I will do it in the next days.

I learned a lot about webscrapping basics and some nice coding. I am looking forward to do my first package.

## Future perspective
Ask PM for more advice


## Keywords
[[expanded_np_chemspace.abbreviations.md]]
