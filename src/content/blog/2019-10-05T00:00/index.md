---
title: 'Behind the scene: git branch'
slug: 'git_branch'
description: 'The one where we create our first git repo and see what happens in our file system'
pubDate: '2019-10-05T00:00:00Z'
tags: ['git']
draft: false
ogImageUrl: ''
---

One of the strength of git is the way it handles branches.

Let’s start with 1 commit on master.

![](./git_branch-001.svg)


and let’s create a branch named `feature-1`:

```bash
$ git branch feature-1
```
Git is very fast at creating branches because it is *only* about creating a pointer:

![](./git_branch-002.svg)


`HEAD` is a symbolic ref to the branch your working tree is on and is still pointing to master.

If we switch to our new branch, git simply changes the `HEAD` reference

```bash
$ git checkout feature-1
Switched to branch 'feature-1'
```
![](./git_branch-003.svg)
If we create a file while on that branch and commit it, we then have:

![](./git_branch-004.svg)


If we switch to master:

```bash
$ git checkout master
Switched to branch 'master'
```
The `HEAD` reference is switched again, and our working directories is updated accordingly.

![](./git_branch-005.svg)
As expected, if we create a new commit on master, we land on that configuration:

![](./git_branch-006.svg)

