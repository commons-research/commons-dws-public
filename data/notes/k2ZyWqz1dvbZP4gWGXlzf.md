Exercice 1

docker run -it ubuntu



root@ed76dc41b28c:/# figlet 'SIB courses are great!'
 ____ ___ ____
/ ___|_ _| __ )    ___ ___  _   _ _ __ ___  ___  ___    __ _ _ __ ___
\___ \| ||  _ \   / __/ _ \| | | | '__/ __|/ _ \/ __|  / _` | '__/ _ \
 ___) | || |_) | | (_| (_) | |_| | |  \__ \  __/\__ \ | (_| | | |  __/
|____/___|____/   \___\___/ \__,_|_|  |___/\___||___/  \__,_|_|  \___|

                      _   _
  __ _ _ __ ___  __ _| |_| |
 / _` | '__/ _ \/ _` | __| |
| (_| | | |  __/ (_| | |_|_|
 \__, |_|  \___|\__,_|\__(_)
 |___/


 

docker run \
-it \
--mount type=bind,source=/Users/pma/02_tmp/docker_share,target=/working_dir/ \
ubuntu-figlet


docker run \
-it \
-u "$(id -u):$(id -g)" \
--mount type=bind,source=/Users/pma/02_tmp/docker_share,target=/working_dir/ \
ubuntu-figlet



for the jupyter-lab docker

docker run \
-it \
--rm \
-p 8888:8888 \
--mount type=bind,source=/Users/pma/02_tmp/docker_share,target=/working_dir/ \
jupyter-lab

ssh -i key_pallard.pem pallard@18.192.227.69


singularity pull docker://grndstt/ubuntu-figlet:v2

### Piepline

snakemake
nextflow

both support docker, conda and singularity


conda + docker + snakemake 

![](/assets/images/2021-10-14-16-28-02.png)


snakemake --containerize

https://snakemake.readthedocs.io/en/stable/snakefiles/deployment.html?highlight=conda#containerization-of-conda-based-workflows
