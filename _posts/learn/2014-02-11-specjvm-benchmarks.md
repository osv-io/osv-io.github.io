---
layout: nav
title: Spec JVM Benchmarks
category: benchmarks
show_heading: yes
nav: learn
order: 22
---

The test compare two guest OS:

1. Out of the box (OOTB) Linux
2. OSv

Test goal is comparing  OS guests 'as is'.
No tuning is done on either Linux or OSv for this particular test .

## Motivation
Compare OSv guest to a Linux guest in a computation- and memory-oriented applications (not IO-intensive).


## Latest Benchmark
{{ site.categories.specjvm.first.content }}

## All Benchmarks
{% for p in site.categories.specjvm %}
* [{{ p.title }}]({{ p.url }})
{% endfor %}

## Test Bed

* Benchmarks runs with two benchmark threads, and given 2 vCPUs and 2GB of memory. 
* qemu options: 
{% highlight bash %}
    qemu-kvm -nographic -m 2G -smp 2 -device virtio-blk-pci,id=blk0,bootindex=0,drive=hd0,scsi=off -drive file=fedora.img,if=none,id=hd0,aio=native,cache=none -enable-kvm -cpu host,+x2apic
{% endhighlight %}
* Java options: Xmx=1400m Xms=1400m
* [SPECjvm2008 benchmark](http://www.spec.org/jvm2008/), version 1.01, is a free Java benchmark aims to measure Java’s performance on a system
* We ran all of SPECjvm2008’s sub-benchmarks except the “start.*” ones which measure process startup performance (as OS<sup>V</sup> does not support processes). 
* Each sub-benchmark warmed up for 120 seconds, and then measured for 240 additional sections. 
* Each measurement was repeated at least 3 times and averaged
