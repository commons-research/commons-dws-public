
https://bytexd.com/xpra/


xpra attach ssh:xxxx@xxxxx:100 should restore the session.


Working smoothly :)


## Starting (on the server)

xpra start :100 --start=chromium
xpra start :200 --start=xterm
xpra start :300 --start=xterm

To view running session

xpra sessions 

To rename a session
xpra control :10 name WHATEVER

Ex:
xpra start :200 --start=xterm
xpra control :200 name MZMINE


xpra start :100 --start=chromium
xpra control :100 name CHROMIUM



## List of xpra servers
Command to attach from the client

### Chromium
xpra attach ssh:allardpm@biolpc045600:100

### Xterm
xpra attach ssh:allardpm@biolpc045600:200


### Xterm2
xpra attach ssh:allardpm@biolpc045600:300


