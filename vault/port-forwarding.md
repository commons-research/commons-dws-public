---
id: 4pqppog2u66rx1tkc8jy5v9
title: Port Forwarding
desc: ''
updated: 1732038122089
created: 1731595287017
---

Let's say you want to open on your local machine a port that is on a remote machine. You can do this with SSH port forwarding.

```bash
ssh commons-server -L 8888:localhost:8890
```

This will cease existing once your bash session is closed. If you want to keep it running, you can use `autossh`.

```bash
autossh -M 0 -f -N -L 8888:localhost:8890 commons-server
```

ssh metabomaps.nprod.net -L 8888:localhost:80