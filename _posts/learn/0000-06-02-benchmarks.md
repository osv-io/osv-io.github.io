---
layout: nav
title: Benchmarks
category: learn
show_heading: yes
nav: learn
---

## memcached

[Memcached](http://memcached.org/) is a popular in-memory key-value store. It is used by many high-profile Web sites to cache results of database queries and prepared page sections, to significantly boost site performance.

An unmodified memcached running on OS<sup>V</sup> was able to handle about 20% more requests per second than the same memcached version on Linux. A modified memcached, designed to use OS<sup>V</sup>-specific network APIs, had nearly four times the throughput. 

<img src="https://docs.google.com/a/cloudius-systems.com/spreadsheet/oimg?key=0ArcF3GCoRwFrdHdqdFgwRWJGY3FmZlVSbTExZFBKWmc&oid=2&zx=l8qch0b4ej0z" />

<!--more-->

|memcached version and platform      |Requests/second|
|:-----------------------------------|--------------:|
|memcached 1.4.17, Linux 3.13        |104394         |
|memcached 1.4.17, OSv 0.06          |127275         |
|OSv-memcached (socket API), OSv 0.06|161740         |
|OSv-memcached (native API), OSv 0.06|406750         |

&nbsp;

Memcached makes high demands on the operating system. It needs to handle a huge number of requests and manage a lot of memory filled with small objects. Because OS<sup>V</sup> is not bound by 30-year-old Unix networking APIs used on other cloud guests, it is able to achieve dramatically higher throughput with lower overhead.



## More OS<sup>V</sup> benchmark results


{% for p in site.categories.benchmarks %}
* [{{ p.title }}]({{ p.url }})
{% endfor %}
