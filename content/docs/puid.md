---
path: "/docs/puid-pgid"
date: "2017-11-07"
title: "Understanding PUID and PGID"
---

<div class="preface">
We use environment variables called <code>PUID</code> and <code>PGID</code> in order for the applications running inside our containers to run under the correct user scope.
</div>

## Using the variables

When creating a container from one of our images, ensure you use the `-e PUID` and `-e PGID` options in your docker command:

```bash
docker create --name=beets -e PUID=1000 -e PGID=1000 linuxserver/beets
```

Or, if you use `docker-compose`, add them to the `environment:` section:

```yaml
environment:
  PUID: 1000
  PGID: 1000
```
