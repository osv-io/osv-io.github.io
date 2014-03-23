---
layout: nav
title: Development to Devops
category: started
show_heading: yes
nav: started
---

Developers need to be able to deploy and test in the cloud, but conventional cloud management is slowing us down.  What should be a rapid, automated process is time-consuming and error-prone on a conventional OS.

We know that building a native application to run on a Linux host is simple, often just a single command aided by decades of tool refinement.  Building a virtual machine image, though, is another story.  It doesn't have to be.

<!--more-->

OSv gives developers the power to build and run on the cloud with the minimum of overhead.  As you make incremental improvements in your application, you can create working VM images, ready to deploy anywhere, in real time.


## Minimal overhead

OSv includes just the operating system basics, in a clean, bottom-up implementation that's free of a conventional OS's details, drivers, and lore.  After all, you're building your cloud application for a modern IT infrastructure, not a minicomputer with a room full of terminals, or a PC on a desk.

If you're coding for the cloud, not for a legacy environment, then don't burden your cloud builds with legacy support.


## Simple configuration

OSv's simple, modern configuration is available through a REST API.  There's no need to spend time on complex tools to modify the config files of a conventional OS.  Even a basic install of a commonly-used Linux distribution has 198 config files, in a variety of formats.  On OSv, everything is configurable using REST.  Spend your time coding what matters, not writing workarounds in arcane config file formats.


## Rapid iteration

With OSv, you can treat virtual machine images the same as any other build artifact.  OSv adds only about 12MB to the size of the application, plus the size of the Java Virtual Machine, if included.   And you'll be making VM images in only a few seconds more than your application build already takes.

With OSv-enabled VM images at your fingertips any time in the build process, the possibilities are endless.  Easily scale a test environment horizontally. Deploy to remote locations or public clouds without the wait.  Ideas welcome.


## More information

* [osv-dev mailing list](https://groups.google.com/forum/#!forum/osv-dev)
* [@CloudiusSystems](https://twitter.com/CloudiusSystems) on Twitter

