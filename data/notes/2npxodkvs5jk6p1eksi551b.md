
To launch a Jupyter notebook on a remote ssh

1. From the local host 

ssh commons-server -L 12888:localhost:12888

2. On the remote host

python -m jupyter notebook --port 12888

This can be done also to acess PGadmin 


ex


ssh commons-server -L PORT:localhost:PORT

then fromn 