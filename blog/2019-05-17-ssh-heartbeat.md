---
id: ssh-heartbeat
title: ssh设置心跳 防止自动超时
tags: [ssh, linux]
---


## Server Side

`vim /etc/ssh/sshd_config`

```
ClientAliveInterval 30
ClientAliveCountMax 60
```

`systemctl restart sshd`


## Client Side

`vim /etc/ssh/ssh_config`

```
Host *
    ServerAliveInterval 30
    ServerAliveCountMax 60
```
