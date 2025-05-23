---
id: NQYMosADQOZjknNMpqnTQ
title: Tmux
desc: ''
updated: 1717761328680
created: 1642180965235
---

https://tmuxcheatsheet.com/


Tmux Cheat Sheet
Finally, we want to share a cheat sheet to use as a reference:

Sessions

Start a new Session:

`tmux`

Start a new session with a name:

`tmux new -s [name]`

Start an attached session:

```tmux a #```

If the Tmux session has a name:

`tmux attach -t [name]`
 %>% 
List all Tmux sessions:

`tmux ls`

Exit the utility:

`exit`

Kill session:

`tmux kill-session -t [name]`

## Window Handling

Note the Prefix is **Ctrl + B**

* New window	<prefix>+c
* Next window	<prefix>+n
* List all windows	<prefix>+w
* Rename a window	<prefix>+,
* Previous window	<prefix>+p
* Find a window	<prefix>+f
* Kill a window	<prefix>+&

## Pane Handling

* Split panes vertically	<prefix>+%
* Split panes horizontally	<prefix>+“
* Toggle last active plane	<prefix>+;
* Swap panes	<prefix>+o
* Kill pane	<prefix>+x
* Show pane numbers	<prefix>+q
* Move plan left	<prefix>+{
* Move plan right	<prefix>+}
* Switching between panes	<prefix>+arrow key




Sessions
tmux
tmux new
tmux new-session
new
Start a new session

tmux new -s mysession
new -s mysession
Start a new session with the name mysession

tmux kill-ses -t mysession
tmux kill-session -t mysession
kill/delete session mysession

tmux kill-session -a
kill/delete all sessions but the current

tmux kill-session -a -t mysession
kill/delete all sessions but mysession

Ctrl + b $
Rename session

Ctrl + b d
Detach from session

attach -d
Detach others on the session (Maximize window by detach other clients)

tmux ls
tmux list-sessions
Ctrl + b s
Show all sessions

tmux a
tmux at
tmux attach
tmux attach-session
Attach to last session

tmux a -t mysession
tmux at -t mysession
tmux attach -t mysession
tmux attach-session -t mysession
Attach to a session with the name mysession

Ctrl + b w
Session and Window Preview

Ctrl + b (
Move to previous session

Ctrl + b )
Move to next session

Windows
tmux new -s mysession -n mywindow
start a new session with the name mysession and window mywindow

Ctrl + b c
Create window

Ctrl + b ,
Rename current window

Ctrl + b &
Close current window

Ctrl + b w
List windows

Ctrl + b p
Previous window

Ctrl + b n
Next window

Ctrl + b 0 ... 9
Switch/select window by number

Ctrl + b l
Toggle last active window

swap-window -s 2 -t 1
Reorder window, swap window number 2(src) and 1(dst)

swap-window -t -1
Move current window to the left by one position

Panes
Ctrl + b ;
Toggle last active pane

Ctrl + b %
Split pane with horizontal layout

Ctrl + b "
Split pane with vertical layout

Ctrl + b {
Move the current pane left

Ctrl + b }
Move the current pane right

Ctrl + b 
Ctrl + b 
Ctrl + b 
Ctrl + b 
Switch to pane to the direction

setw synchronize-panes
Toggle synchronize-panes(send command to all panes)

Ctrl + b Spacebar
Toggle between pane layouts

Ctrl + b o
Switch to next pane

Ctrl + b q
Show pane numbers

Ctrl + b q 0 ... 9
Switch/select pane by number

Ctrl + b z
Toggle pane zoom

Ctrl + b !
Convert pane into a window

Ctrl + b + 
Ctrl + b Ctrl + 
Ctrl + b + 
Ctrl + b Ctrl + 
Resize current pane height(holding second key is optional)

Ctrl + b + 
Ctrl + b Ctrl + 
Ctrl + b + 
Ctrl + b Ctrl + 
Resize current pane width(holding second key is optional)

Ctrl + b x
Close current pane

Copy Mode
setw -g mode-keys vi
use vi keys in buffer

Ctrl + b [
Enter copy mode

Ctrl + b PgUp
Enter copy mode and scroll one page up

q
Quit mode

g
Go to top line

G
Go to bottom line

Scroll up

Scroll down

h
Move cursor left

j
Move cursor down

k
Move cursor up

l
Move cursor right

w
Move cursor forward one word at a time

b
Move cursor backward one word at a time

/
Search forward

?
Search backward

n
Next keyword occurance

N
Previous keyword occurance

Spacebar
Start selection

Esc
Clear selection

Enter
Copy selection

Ctrl + b ]
Paste contents of buffer_0

show-buffer
display buffer_0 contents

capture-pane
copy entire visible contents of pane to a buffer

list-buffers
Show all buffers

choose-buffer
Show all buffers and paste selected

save-buffer buf.txt
Save buffer contents to buf.txt

delete-buffer -b 1
delete buffer_1

Misc
Ctrl + b :
Enter command mode

set -g OPTION
Set OPTION for all sessions

setw -g OPTION
Set OPTION for all windows

set mouse on
Enable mouse mode

Help
tmux list-keys
list-keys
Ctrl + b ?
List key bindings(shortcuts)

tmux info
Show every session, window, pane, etc...


### Scrolling

Ctrl-b then [ then you can use your normal navigation keys to scroll around (eg. Up Arrow or PgDn). Press q to quit scroll mode.