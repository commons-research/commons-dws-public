
# This is PMAS's COMMONS Lab daily Open Notebook.

Today is 2024.01.22

## Todo today

### Have a look at the COMMONS research discussion forum
    - https://github.com/orgs/commons-research/discussions

### Daily work on the Open Science for natural products research Viewpoint

See [[viewpoint]]


###
###

## Doing

Some procrastination on https://gothenburgbitfactory.github.io/taskserver-setup/


By default, Taskserver uses port 53589. You can choose any port you wish, provided it is unused. If you choose a port number that is under 1024, then Taskserver must run as root, which is not recommended.

Creating a new user and group on the COMMONS server for taskserver


taskd add user 'Public' 'First Last' (doesnt works)
sudo taskd add user 'Public' 'First Last' --data /var/taskd (works)

task_server_user@biolpc045600:~$ sudo taskd add user 'Public' 'First Last' --data /var/taskd
New user key: 6240d660-30d9-4ab8-bdbe-d3d6b91f1944
Created user 'First Last' for organization 'Public'

task config taskd.credentials -- Public/First Last/6240d660-30d9-4ab8-bdbe-d3d6b91f1944



https://github.com/ogarcia/docker-taskd


docker run -d \
  --name=taskd \
  -e CERT_BITS=4096 \
  -e CERT_EXPIRATION_DAYS=365 \
  -e CERT_ORGANIZATION="COMMONS Lab Task server" \
  -e CERT_CN=localhost \
  -e CERT_COUNTRY=CH \
  -e CERT_STATE="Fribourg" \
  -e CERT_LOCALITY="Fribourg" \
  -p 53589:53589 \
  -v /home/task_server_user/taskd:/var/taskd \
  ghcr.io/connectical/taskd


docker exec -t -i \
  86d94d29ed51c8c6230bc29bc0b2754297233e6a9d76c7dd3fd67813e2f82044 sh
  

New user key: ae500061-a550-4dae-9b74-fa6a2b012c91
Created user 'First Last' for organization 'Public'

task config taskd.credentials -- Public/First Last/ae500061-a550-4dae-9b74-fa6a2b012c91
## Paused

## Done

## Notes

## Todo tomorrow, one day ... or never 


###
###


## Today I learned that

- o