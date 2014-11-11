---
layout: nav
title: Virtual Appliances
category: started
nav: started
show_heading: yes
read_more: yes
---

OSv virtual appliances are virtual machine images with popular software, and management tools, pre-installed.  

<!--more-->

## Memcached Virtual Appliance

Memcached is an in-memory key-value store for small chunks of arbitrary data (strings, objects) from results of database calls, API calls, or page rendering.
The main Memcached main use is as a front end to a persistence DB (SQL or NoSQL).

###Why Memcached on the cloud?

Memcached is popular in latency sensitive applications and web servers in particular.
As many of these servers are deployed on the cloud, having Memcached available in the same cloud is very common.

### Why a Virtual Appliance?

#### Higher throughput, lower latency

OSv Memcached provides higher throughput for EC2 instance types. For latest benchmark results see [Benchmarks](/benchmarks/).
With higher throughput per VM, you can choose to use a smaller number of instances per cluster, or use smaller instance types to support the same amount of traffic.
In either case, OSv results in OPEX saving.

####Easier administration
OSvMemcached is a simpler solution than Memcached on top of a complete Linux stack.
Every OSv configuration is available via REST API and GUI, making it easier to monitor and configure the system. No more digging in to obscure Linux configuration files to set the page size of TCP stack parameters.

#### What is included?
OSv Memcached fully support the Memcached Text interface, so no changes in the client application are required.


#### What is missing?
OSvMemcached does not yet support the binary interface.
If you want to use binary interface: 
this version of OSvMemcached is not the right choice for you.
Let us know! we may want to expedite this feature priority

<!-- Register for OSv Beta [TBD link] to get a AMI ID to use. -->




## Redis Virtual Appliance 

Redis is an open source advanced key-value cache and store. It is often referred to as a data structure server, since keys can contain strings, hashes, lists, sets, sorted sets, bitmaps and hyperloglogs.

Popular use cases for Redis are:

 * As a caching layer in front of a DB

 * As pub/sub queue

 * As a simple DB, leveraging its data structure and data expire time support

And many more

### Why Redis on the cloud?
Redis is popular in latency sensitive application and web server in particular.
As many of these servers are deployed on the cloud, having Redis available in the same cloud is very common.

###Why OSv-Redis Virtual Appliance?

 * Higher  throughput, lower latency
 * OSv Redis  provides higher throughput for EC2 instance types. For latest benchmark results see [Benchmarks](/benchmarks/).

With higher throughput per VM, you can choose to use a smaller number of instances per cluster, or use smaller instance types to support the same amount of traffic.
In either case, OSv results in OPEX saving.

#### Easier administration
OSv Redis  is a simpler solution than Redis on top of a complete Linux stack.
Every OSv configuration is available via REST API and GUI, making it easier to monitor and configure the system. No more digging in to obscure Linux configuration file to set the page size of TCP stack parameters.

#### What is included?
OSv Redis fully support the Redis interface, so no changes in the client application is required.

#### What is missing?
OSv Redis is in-memory only. It does NOT support persistency. 
If you want to use persistency: 
this version of OSv Redis is not the right choice for you.
Let us know! we may want to expedite this feature priority.

<!-- Register for OSv Beta [TBD link] to get a AMI ID to use. -->


## Cassandra Virtual Appliance

### What is Apache Cassandra?

Apache Cassandra is an open source, massively scalable NoSQL database. Cassandra delivers continuous availability, linear scalability, and operational simplicity.

### Why Cassandra on the cloud?

Cassandra supports data replication across multiple regions and zones, providing lower latency for your users and the peace of mind of knowing that you can survive regional outages.
Cassandra on public cloud is used in production by many organizations at huge scales. Some well-known examples are Netflix and SoundCloud.

### Why OSv-Cassandra Virtual Appliance?

The OSv Cassandra Virtual Appliance  provides a lean, tightly integrated, Cassandra virtual machine.

Here are some of the benefits:

 * **Higher throughput, lower latency**

 * **Higher throughput for EC2 instance types.** For latest benchmark results see [Benchmarks](/benchmarks).  With higher throughput per VM, you can choose to use a smaller number of instances per cluster, or use smaller instance types to support the same amount of traffic.  In either case, OSv results in OPEX savings.

  *  **Easier administration**: *  A virtual appliance
  is a simpler solution than Cassandra on top of a
  complete Linux stack. There is no need to manually
  tune JVM heap size. OSv eliminates this task by
  dynamically allocating and freeing JVM memory, based
  on JVM and OS needs. Every configuration is
  available via REST API and GUI, making it easier to
  monitor and configure the system. No more digging
  in to obscure Linux configuration file to set the
  page size of TCP stack parameters.

  *  **Simple invocation**: You can launch the virtual
    appliance as an AMI on EC2, or a ready
    made image on GCE. Cloudius Systems provides
    available instances that are always up to date,
    validated and end to end tested.

  * **Faster boot time**: Faster boot time mean faster scalability, which translate to more granularity and less need to keep unused servers alive

  *  **Same application logic functionality:** The Cassandra part is exactly the same as standard Cassandra on Linux. Working with an OSv VM is completely transparent to the client.


### EC2 cluster deployment
To launch a OSvC* cluster on EC2, you need to:

 * Choose the OSvC* AMI

 * Choose the instance size (see below)

 * Set the number of instances you want to luach

 * Define the following user data:

```
cassandra:
    clustername: Your Cluster Name
    totalnodes: 3
```
If you want to enable OSv SSL, you need to add a SSL section to the user data as well.

#### Choosing the right instance size
For production use, we recommend using  m3.xlarge (medium), m3.2xlarge (large) or similar servers.

## OSvFlashcache Virtual Appliance

### A new lightweight NoSQL store

As the name suggest, OSvFlashCache is an extension of OSvMemcached, enhanced to support flash storage.  Working efficiently with flash memory allow OSvFlashCache to support much higher volumes of data, while keeping the memcached interface and simplicity.

###  Why OSv-Flashcache Virtual Appliance?
Higher  throughput, lower latency and easy Easier administration.
Native for SSD, now available from public cloud providers.  For best results, use one of the EC2 m3.x instance types.

### What is included?
OSvFlashcache fully support the Memcached Text interface, so no changes in the client application is required.

###What is missing?

OSvFlashcache  does not yet support the binary interface.


## Virtual appliance AMIs

Register for the [OSv Private Beta](/beta-release/) to obtain ready-to-run virtual appliances for Amazon EC2.
