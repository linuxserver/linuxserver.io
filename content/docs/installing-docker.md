---
path: "/docs/installing-docker"
date: "2018-03-18"
title: "Installing Docker"
---

<div class="preface">
You won't get far without it.
</div>

## Using the convenience script

The people at Docker have kindly written what they call a "convenience script" that will run all of the necessary commands to get Docker CE installed on your machine.

> **Important:** Always check the contents of shell scripts before piping them into your shell! You can see the content of the convenience script here: https://get.docker.com/

In your terminal, run:

```bash
curl -sSL https://get.docker.com/ | sh
```

This will download the shell script, then execute it in your shell. You will probably want to root to do this (via sudo or however else).

## User setup

Depending on how you wish to use the `docker` command, by default you must use the `sudo` command as the Docker daemon runs under the root user. For novice users, this is a wise step to take while getting to grips with what Docker can do. However, if you feel comfortable bypassing this requirement, you can add your user to the `docker` group, which give you permission to run the Docker command without `sudo`:

```bash
sudo usermod -aG docker $user
```
