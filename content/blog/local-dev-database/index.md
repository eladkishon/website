---
title: Development Setup Best Practices - shared database configuration
date: '2022-06-27'
description: 'What I use for better database setup and visibility'
---


One of the most important aspects of having a well-synced development team is the ability of every developer on the team to be able to easily have a working and predictable development environment.

The shared resources most developers have at least in the backend world are codebase, deployment configuration (sometimes contained within the codebase), database/storage configuration, external services configuration (production visibility tools, Elastic, etc) and more that I probably haven’t even thought about.

My mission is to make the process of existing developers and new recruits on the team have a seamless environment so that the only thing left is to actually write good code and tests.

In this article, I wanted to share with you a nice method of syncing database configuration within your development teams with maximum ease and visibility for team-knowledge preservation.

Before we start my favorite tool for connecting to and managing databases is DataGrip from Jetbrains. You can easily view and do operations on your databases with a familiar interface you know from Webstom, IntelliJ, etc.

![](https://miro.medium.com/max/1400/1*NK_qKj1Qr30f4zzgbgqVew.png)Datagrip interface

So to start off with having a predictable database setup in you local machine is having the ability for every developer to have the exact same setup with a simple action like cloning a git repo.  
Fortunately! this is a simple thing you can do to actually save and backup you configuration so the next developer can easily clone later and have a copy of the system database config.

![](https://miro.medium.com/max/1400/1*1BWwE_SF3ISHxjmGedxSOg.png)Enabling git in DataGrip

When you finish adding your databases configurations, just commit and push it like a regular code repo.

Now if we want to make database management even more easy to access for developers as part of their local setup, I want to show you a neat trick to show a DataGrip-like view from within Jetbrains IDEs like Webstorm.

To do that add the following plugin to your IDE:

![](https://miro.medium.com/max/1400/1*uYtN0KqHC_n20i-iAwtnww.png)

What it does is adds a nice view on the side that functions exactly as the DataGrip view but from within your IDE! Like shown here:

![](https://miro.medium.com/max/1400/1*NmgidsXX1ZrXj4xTnHVqMA.png)

Finally to make this, even more, a no-brainer, and potentially part of the local setup script we can use the previously committed repo of our database configuration and automatically load it, by adding something like this:

```
git clone "git@github.com:eladkishon/db-config.git" .db-configcp .db-config/.idea/dataSources.xml .idea/dataSources.xml
```
                