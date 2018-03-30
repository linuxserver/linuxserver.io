---
path: "/docs/tls-everywhere"
date: "2018-03-30"
title: "TLS Everywhere"
---

<div class="preface">
Encryption is increasingly important in today's internet. Here's how to get started...
</div>

## Why is this important?

![ssl](https://www.linuxserver.io/content/images/2017/09/Screen-Shot-2017-09-19-at-16.34.14.png)

Thanks to [Let's Encrypt(https://letsencrypt.org/)] it's never been easy or cheaper to get an SSL (or TLS) certificate. This is important for a few reasons:

* Identity verification
* In-transit security i.e. encryption

Vistors to your domain can be sure, cryptographically, that the data they are receiving hasn't been tampered with en-route by the NSA, GCHQ or the Russians. With the added benefit of hiding your traffic from "men in the middle" there's literally no reason *not* to use TLS anymore. Let's Encrypt are a Certificate Authority who provide free, rate limited SSL/TLS certificates which are easily configured using [acme.sh](http://acme.sh/) or our very own [docker-letsencrypt](https://github.com/linuxserver/docker-letsencrypt).

## What do I need to know?

This topic was covered in huge detail for docker apps on the Linuxserver blog - [How to setup a reverse proxy with LetsEncrypt SSL for all your Docker apps](https://www.linuxserver.io/2017/11/28/how-to-setup-a-reverse-proxy-with-letsencrypt-ssl-for-all-your-docker-apps/).