---
id: git-switch-committer-accross-projects
title: 在公司和个人项目中自动切换git commiter信息
tags: [git]
---


代码目录 ~/Code

公司项目目录 ~/Code/Work

<!--truncate-->

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
