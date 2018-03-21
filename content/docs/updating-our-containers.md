---
path: "/docs/updating-our-containers"
date: "2018-03-23"
title: "Updating our Containers"
---

<div class="preface">
Our images are updated weekly, so make sure you're always running the latest version, as they contain important bug fixes and new features.
</div>

## Steps required to update

Docker containers are, for the most part, immutable. This means that important configuration such as volume and port mappings can't be easily changed once the container has been created. The containers created from our images run a very specific version of the application they wrap, so in order to update the application, you must recreate the container.

### Stop the container

Firstly, stop the container.

```bash
docker stop <container_name>
```

### Remove the container

Once the container has been stopped, remove it.

> **Important**: Did you remember to persist the <code>/config</code> volume when you originally created the container? Bear in mind, you'll lose any configuration inside the container if this volume was not persisted.  [Read up on why this is important](/docs/running-our-containers#the-code-classlanguage-textconfigcode-volume).

```bash
docker rm <container_name>
```

### Pull the latest version

Now you can pull the latest version of the application image from Docker Hub.

```bash
docker pull linuxserver/<image_name>
```
