---
id: git-switch-committer-accross-projects
title: 在公司和个人项目中自动切换git commiter信息
# author: Yangshun Tay
# author_title: Front End Engineer @ Facebook
# author_url: https://github.com/yangshun
# author_image_url: https://avatars0.githubusercontent.com/u/1315101?s=400&v=4
tags: [git]
---


代码目录 ~/Code

公司项目目录 ~/Code/Work


.gitconfig

```
[includeIf "gitdir:~/Code/"]
  path = .gitconfig-personal
[includeIf "gitdir:~/Code/Work/"]
  path = .gitconfig-work
```

.gitconfig-personal

```
[user]
name = solarhell
email = songjiaxin2008@gmail.com
```

.gitconfig-work

```
[user]
name = 程序员
email = 程序员@公司.com
```
