---
layout: nav
title: Use Cases
category: learn
show_heading: yes
nav: learn
---

## Virtual appliance

ISVs who offer a packaged application as a virtual machine image can benefit in several ways from releasing on OSv.  The VM images for OSv-based virtual appliances are small, often only 12-20MB larger than the application itself. And the ISV does not need to maintain and support the large set of software and configuration required by even the simplest guest images on other platforms. 


## Network functions virtualization

Virtualizing network devices requires extreme low latency and high network throughput.  OSv, with its Network Channels-based network stack, removes bottlenecks at the guest OS level.


## Java application server 

The user can upload an application WAR file, via a REST API, and the application runs without further configuration.  The deployment process can be connected to a continuous integration system or IDE.


## C and C++-based applications

Several C and C++ applications have been ported by OSV developers or third parties. Porting additional applications often requires only a two-line Makefile change.  OSv can use unmodified shared libraries built on and for Linux. The images containing these applications can be downloaded and deployed as needed, with lower overhead than on legacy guest OSs.


## Horizontal scaling

OSv's sub-second boot time makes it ideal for NoSQL and other applications requiring horizontal scaling or failover. It is often faster to boot a fresh OSv guest than to fail over to an already-running guest.
