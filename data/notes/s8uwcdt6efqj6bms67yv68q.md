
# PAMREIN's daily Open Notebook (COMMONS Lab)

## Todo - [Check Github](https://github.com/orgs/commons-research/projects/2/views/1)
-[]


## Meetings



## Daily report (What did I learn?)

**How to use JupyterLab on the cluster**  
1. start the correct environment and jupyter lab (Maybe you want also activate a specific environment with `poetry shell`)
```bash
srun --partition=pibu_el8 --cpus-per-task=10 --mem=30G --time=10:00:00 --pty /bin/bashun
micromamba activate jup_lab
jupyter lab --no-browser --ip=0.0.0.0 --port=8879
```

2. start a new ssh connection from your pc
```bash
ssh -N -f -L localhost:4000:binfservas22:8879 pamrein@login8.hpc.binf.unibe.ch
```

3. login with a browser (localhost:4000). The first time, you will be asked for a token. This you can find on the terminal (cluster), where the "server" is running. [my current password: jupyterlab]


4. close jupyter-lab
```bash
lsof -ti:4000 | xargs kill -9   #for the pc-terminal
```
With `Ctrl + C` you can close the jupyter-lab session on the cluster.


total generelized rules: 1224
total indermediate: 7358
intermediat with underline: 6746
Intermediat without underline should be: 612


## Future perspective



## Keywords
[[expanded_np_chemspace.abbreviations.md]]
