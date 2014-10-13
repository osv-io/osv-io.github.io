---
layout: nav
title: Benchmarks
category: learn
show_heading: yes
nav: learn
---

## Redis on Amazon EC2

[Redis](http://redis.io/) is a simple service that fills a valuable niche between a key-value data store and a full-scale NoSQL database such as Cassandra. Redis supports not just key-value items, but also more advanced data structures such as sets and queues.

The following benchmark compares Redis (version beta-8) on OSv and on Ubuntu 14 AMI. To do that, we have just launched a new AMI, selected Ubuntu14.04, and launched it. We use the configuration file shipped with Redis by default, with one change: we disable disk activity.

<img alt="Redis graph" width="100%" src="http://osv.io/blog/images/redis.png">

On Ubuntu, Redis was run with:

```
	numactl --physcpubind=1 redis-server ~/redis.conf
```

Using numactl considerably reduces the standard deviation as a result of Linux scheduling.  The redis-benchmark command was run from another machine of the same type, running in the same zone and placement group.

## memcached

[Memcached](http://memcached.org/) is a popular in-memory key-value store. It is used by many high-profile Web sites to cache results of database queries and prepared page sections, to significantly boost site performance.

An unmodified memcached running on OS<sup>V</sup> was able to handle about 20% more requests per second than the same memcached version on Linux. A modified memcached, designed to use OS<sup>V</sup>-specific network APIs, had nearly four times the throughput. 

<img width="100%" src="https://docs.google.com/a/cloudius-systems.com/spreadsheet/oimg?key=0ArcF3GCoRwFrdHdqdFgwRWJGY3FmZlVSbTExZFBKWmc&oid=2&zx=l8qch0b4ej0z">

<!--more-->

|memcached version and platform      |Requests/second|
|:-----------------------------------|--------------:|
|memcached 1.4.17, Linux 3.13        |104394         |
|memcached 1.4.17, OSv 0.06          |127275         |
|OSv-memcached (socket API), OSv 0.06|161740         |
|OSv-memcached (native API), OSv 0.06|406750         |

&nbsp;

### NFV optimization: using the memory::shrinker framework

Memcached makes high demands on the operating system. It needs to handle a huge number of requests and manage a lot of memory filled with small objects.  On a typical Linux or Unix-like operating system, the memcached server uses a static limitation for maximum memory consumption. This prevents the guest from becoming sluggish due to memory exhaustion under high load, but it is impossible to optimally utilize the memory available when running with lower loads.

Under OS<sup>V</sup>, osv-memcached uses another approach: it utilizes all memory available in the guest and may dynamically shrink the application's cache if the guest runs out of memory.  The shrinking will be triggered by the memory::shrinker framework, which notifies all registered applications when the amount of free memory in the system falls below some threshold.  By taking advantage of this interface,  osv-memcached will use the maximum amount of memory available in the guest at any moment, and is able to release any needed memory back to the OS when needed.

This functionality means that OS<sup>V</sup> has higher throughput with zero tuning than a conventional OS with extensive tuning&mdash;a must for network functions virtualization (NFV) applications.


## More OS<sup>V</sup> benchmark results


{% for p in site.categories.benchmarks %}
* [{{ p.title }}]({{ p.url }})
{% endfor %}
