
# PAMREIN's daily Open Notebook (COMMONS Lab) [2024.02.27]

## Todo - [Check Github](https://github.com/orgs/commons-research/projects/2/views/1)
-[] Cookiecutter install with poetry
-[]Install Rust (with Packagemanager Cargo) and try to make a script


## Meetings
None


## Daily report (What did I learned?)
[Tiobe](https://www.tiobe.com/tiobe-index/) makes the ranking for programmlanguages.
Number one is python followed by C, C++, Java and C#. Rust and Julia are not under the first 20 places.

Rust: Performance, Reliability (memory-safety and thread-safety), Productivity (specially because of cargo)

Julia: High Performance (LLVM for numerical and scientific computing), Versatility (web development, game development, machine learning, data science, financial modeling, network security, and more), Ease of Use (like python), Interoperability (supports foreing functions), Growing Ecosystem (BioJulia, JuMP Dev, JuliaImages, QuantumBFS...). It has also an build in package and environment manager which is called "pkg".

Cookiecutter is using some called "generators", which helps to set up a specific structure for a project with some files.
It can be usefull to have a standard structure for projects. 

Poetry is a package and environment manager for python.


## What I did today
Installed pipx: https://pipx.pypa.io/stable/
If pipx is installed in the terminal, you have to be sure it is added to the .bashrc and to reopen the terminal, so that the changes takes place.  
'sudo apt update'  
'sudo apt install pipx'  
'pipx ensurepath'  


Installed cookiecutter: 
pip install cookiecutter

Installed poetry: 
'pipx install poetry'
'poetry init' or 'poetry new <projectname>'
'poetry install'

poetry show -v
(Windows) $ poetry run python setup.py windows -s
(macOS)   $ poetry run python setup.py macos -s
(Linux)   $ poetry run python setup.py linux -s
poetry build

poetry shell /go into terminal mode - type "exit" to leave the shell

To run codium in a specific directory, write in the shell: 'codium .'
 

Installed [rust](https://www.rust-lang.org/tools/install)



## Future perspective



## Keywords
[[expanded_np_chemspace.abbreviations.md]]
