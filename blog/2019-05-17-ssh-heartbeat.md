---
id: ssh-heartbeat
title: ssh设置心跳 防止自动超时
# author: Yangshun Tay
# author_title: Front End Engineer @ Facebook
# author_url: https://github.com/yangshun
# author_image_url: https://avatars0.githubusercontent.com/u/1315101?s=400&v=4
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
