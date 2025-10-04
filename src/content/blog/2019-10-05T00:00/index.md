---
title: 'Behind the scene: git branch'
slug: 'git_branch'
description: 'The one where we create our first git repo and see what happens in our file system'
pubDate: '2019-10-05T00:00'
tags: ['git']
draft: false
ogImageUrl: ''
pageUrl: 'https://www.notion.so/Behind-the-scene-git-branch-13c6f674ce1e80b185f6eb833a81e200'
lastEditedTime: '2024-11-15T14:56:00.000Z'
---
One of the strength of git is the way it handles branches.


Let’s start with 1 commit on master.


![](./image-001.svg)



and let’s create a branch named `feature-1`:


```bash
$ git branch feature-1
```


Git is very fast at creating branches because it is *only* about creating a pointer:


![](./image-002.svg)



`HEAD` is a symbolic ref to the branch your working tree is on and is still pointing to master.


If we switch to our new branch, git simply changes the `HEAD` reference


```bash
$ git checkout feature-1
Switched to branch 'feature-1'
```


![](./image-003.svg)
If we create a file while on that branch and commit it, we then have:


![](./image-004.svg)



If we switch to master:


```bash
$ git checkout master
Switched to branch 'master'
```


The `HEAD` reference is switched again, and our working directories is updated accordingly.


![](./image-005.svg)
As expected, if we create a new commit on master, we land on that configuration:


![](./image-006.svg)


