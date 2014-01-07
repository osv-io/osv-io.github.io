---
layout: nav
title: Frequently asked questions
category: users
show_heading: yes
nav: users
---

## Why a new operating system?

Operating systems have evolved over decades to perform two distinct functions: manage the hardware, and provide isolation between the multiple applications and user running on the system.

However, in modern deployments, the hardware is virtualized, so there is very little for the operating system to manage. In addition, common deployment scenarios have one application per server, leaving the the isolation capabilities of the OS unutilized.

<!--more-->

In short, modern practice has turned the traditional operating system to pure bloat. OSV recognizes this and rebuilds the operating system for the modern era.

### How is OSV optimized for virtualized environments?

While hypervisors strive to present virtual hardware that emulates real hardware faithfully, there are limits to what can be achieved. Many operations that take nanoseconds on real hardware, take microseconds on virtualized hardware. Furthermore, the hypervisor can and does schedule away virtual CPUs, leading to unbounded latency at any point in the instruction stream.

OSV recognises this and never expects any sequence of instructions to execute in “a short time” - one cpu never spins while waiting for another to respond. We use a combination of non-blocking, lock-free algorithms, and sleeping mutexes, to ensure that processor time is never wasted. OSV also tries hard to avoid operations that are especially expensive on virtualized environments.

### How is OSV optimized for the Java Virtual Machine?

A traditional operating system does not trust the application it runs; so it runs it in a separate, unprivileged context - user space. Any interaction of the application with the operating system requires a privilege level switch and parameter validation.

Since the JVM protects itself from the application by verifying bytecode, OSV does not need to do this. The application and the kernel run in the same privilege level, and so expensive context switches and parameter validation are avoided.



OSV also uses large pages to map application memory. This improves memory access latency for applications that use large amounts of memory.

We plan to add specialized APIs that expose processor hardware, such as the page tables, to the JVM. This allows optimized garbage collection, reducing memory access overhead and garbage collection pauses.

### What runtime languages does OSV support?

OSV supports all the languages that the JVM supports: Java, of course, as well as Ruby (via JRuby), JavaScript (via Rhino and Nashorn), Scala, and many more.

In time we hope to receive support for other runtimes such as php, python (reported to work), etc.

### What hypervisors does OSV support?

OSV runs on top of the KVM and Xen (HVM mode) hypervisors. Support for VMware and Xen PV mode are planned.

### What processor do I need to run OSV?

An x86 processor with 64-bit support (also known as x86-64 or x64) is required.

We welcome new architecture ports.

### Why did you pick C++ as the implementation language?

Aren’t there enough operating systems written in C? Let’s give another language a chance.

While C++ has a deserved reputation for being incredibly complicated, it is also incredibly rich and flexible, and in particular has very a flexible standard library as well as add-on libraries such as boost. This allows OSV code to be much more concise than it would be if it were written in C, while retaining the close-to-the-metal efficiency of C.

### How can I contribute?

Easy; spawn an EC2 image or download an image, run it and upload your application.

Developers should clone the repository and follow the README. Find an interesting area and send patches to the mailing list. Currently, Fedora 18 or 19, and Ubuntu 13.04 on x86-64 are supported as development platforms.

### How is OSV licensed?

OSV is available under a 3-clause BSD-style license.
