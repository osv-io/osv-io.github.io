---
layout: nav
title: Flashcache
category: learn
show_heading: yes
nav: learn
---

As the name suggest, FlashCache is an extension of Memcached, enhanced to extend the storage capacity from RAM-only towards the SSD drive while preserving the performance
properties of memcache. Efficient LRU algorithms and a special framework are responsible
to keep that used working set in memory while non recently used data is evicated to disk in the background. FlashCache allows higher volume of data, while keeping memcached interface and simplicity, and most important - near RAM performance.

Flashcache can reach 300k pps per core with RAM and 100k pps w/ SSD
per core, with almost linear scalability per core.

![flash](images/flash.png)

### Unique Architecture
Flashcache reach its super fast throughput and low latency through a new
architecture named "Seastar"
Seastar is a new framework for supreme performance, base on a
few key architectural principles:


* Share nothing. Each core run completely independent thread of
  computation, with zero shared resources between cores
* *All* inter core communication is done via message passing
* *All* interaction is done a-sync
Although each of the rules above is known and used before in system
like Node.js, Seastar is the first to take it to such extreme, down
to the TCP and IP stacks.
Use of latest C++14 feature allow easy development, without
compromising on performance and correctness.
In particular Seastar is a good fit for application with high throughput, and small to medium information element size. NoSQL DB in memory and flash bases caches are a good examples.

### Why Flashcache Appliance?
Higher  throughput, lower latency and easy Easier administration.
Native for SSD, now available from public cloud providers, for example EC2 m3.x, c3.x and r3.x  instance types

* Whats is included?
Flashcache fully support the Memcached Text interface, so no changes in the client application is required.

* How can I get it?
You need to Register to join the Flashcache beta program

## Register to join the Flashcache beta program
<iframe src="https://docs.google.com/forms/d/1zwFz1RS3r8ufeehM3WdIxh3gzng5O7EG7zDTgQR-JRU/viewform?embedded=true" width="760" height="500" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>


