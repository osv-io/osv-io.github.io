---
layout: nav
title: FlashCache
show_heading: yes
nav: started
category: started
redirect_from: "/Flashcache/"
---

As the name suggests, FlashCache is an extension of Memcached.  It is enhanced to extend the storage capacity from RAM only to also include SSD storage, while preserving the performance
properties of memcache. Efficient LRU algorithms and a special framework are responsible
for keeping the working set in memory while less recently used data is evicted to Flash storage in the background. FlashCache allows higher volume of data, while keeping the memcached interface and simplicity with near RAM performance.

FlashCache can reach 300k pps per core with RAM and 100k pps w/ SSD
per core, with almost linear scalability per core.

![flash](images/flash.png)

### Unique Architecture
Flashcache reach its super fast throughput and low latency through a new
architecture named "Seastar."
Seastar is a new framework for supreme performance, base on a
few key architectural principles:

* Share nothing. Each core runs a completely independent thread of
  computation, with zero shared resources between cores.
* *All* inter core communication is done via message passing.
* *All* interaction is done asynchronously.

Although each of the rules above is known and has been used before in systems
such as Node.js, Seastar is the first to take it to all levels of the system, including the TCP and IP layers.

Use of some recently adopted C++14 features allow for easy development, without
compromising on performance and correctness.

In particular Seastar is a good fit for applications with high throughput and small to medium information element size. NoSQL databases, and flash based caches, are two good examples.

### Why a FlashCache Appliance?

* Higher  throughput, lower latency and easy Easier administration.
* Native for SSD, now available from public cloud providers (for example the Amazon EC2 m3.x, c3.x and r3.x instance types)

* FlashCache fully supports the Memcached Text interface, so no changes in the client application is required.

