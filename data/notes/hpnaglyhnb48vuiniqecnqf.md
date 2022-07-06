
# Title 
time
## Context
Looking into nginx to setup a connection to NocoDB from the commons_lab server 

This was done on the metabomaps server for the graphDB instance with the help of Jo.
Trying to reproduce here.
## Need
setup a connection to NocoDB from the commons_lab server

## Task (of the note/paragraph/text/paper/project)
Third, indicate what you have done in an effort to address the need (this is the task).
- [ ] Watching https://www.youtube.com/watch?v=JKxlsvZXG7c

They indicate that the conf file is usually under etc/nginx.
Indeed over there on the metabomaps server.

Lets looks at the commonslab server
Not there.

Lets install this

Following https://ubuntu.com/tutorials/install-and-configure-nginx#2-installing-nginx


We get the following error when starting nginx 

(base) allardpm@biolpc045600:/etc/nginx/sites-enabled$ systemctl status nginx.service
● nginx.service - A high performance web server and a reverse proxy server
     Loaded: loaded (/lib/systemd/system/nginx.service; enabled; vendor preset: enabled)
     Active: failed (Result: exit-code) since Sun 2022-06-19 09:06:20 CEST; 57s ago
       Docs: man:nginx(8)
    Process: 3544101 ExecStartPre=/usr/sbin/nginx -t -q -g daemon on; master_process on; (code=exited, status=0/SUCCESS)
    Process: 3544102 ExecStart=/usr/sbin/nginx -g daemon on; master_process on; (code=exited, status=1/FAILURE)


Following https://stackoverflow.com/questions/51525710/nginx-failed-to-start-a-high-performance-web-server-and-a-reverse-proxy-server

we 
 sudo service apache2 stop


 ![](/assets/images/2022-06-19-09-11-18.png)

 Amazing !


 
- [ ] So this was a first step.
Apparently certbot was used later one. Lets see how this one works

https://certbot.eff.org/instructions?ws=nginx&os=ubuntufocal

I added the ip of the commons lab server to the dbgi DNS
And can now vie the previously made placeholder website when serving on port 80

![](/assets/images/2022-06-19-09-43-57.png)

However the certbot step is not working 
sudo certbot --nginx

And returns 


https://check-your-website.server-daten.de/?q=commons.dbgi.org



![](/assets/images/2022-06-19-10-53-34.png)

Yeah !! But thats on the metabomaps server. Apparently thing will not work that smoothly on the commons server sinc it is behind the university firewall
running (saved as a .sh script)
 certbot --authenticator standalone --installer nginx   -d xxxxxxx.xxxx.org --pre-hook "service nginx stop" --post-hook "service nginx start"




- [ ] So I can serve the nocodb instance hosted on the commonslab server via a .dbgi.org domains

nginx server file is as follows

server {
       listen 80;
       listen [::]:80;

       server_name xxxxx.dbgi.org;

  # If you would like to gzip your stuff
  gzip on;
  gzip_min_length 1;
  gzip_types *;

  # Setup the proxy
  # This will forward all requests to the server
  # and then it will relay the servers response back to the client
  location / {
    proxy_pass http://127.0.0.1:8080;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_cache_bypass $http_upgrade;
  }
}


Node: **v16.15.1**
Arch: **x64**
Platform: **linux**
Docker: **false**
Database: **pg**
ProjectOnRootDB: **true**
RootDB: **pg**
PackageVersion: **0.91.10**







## Object (of the note/paragraph/text/paper/project)
Finally, preview the remainder of the paper to mentally prepare you/readers for its structure, in the object of the document.


## Ressources
Some notes:
https://www.youtube.com/watch?v=JKxlsvZXG7c




