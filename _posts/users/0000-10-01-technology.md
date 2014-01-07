---
layout: nav
title: Technology
category: users
show_heading: yes
nav: users
---

## The cloud design allows OSv to simplify the stack, both looking down (towards the hardware) and looking up (towards the application).

- limited hardware support: Xen, KVM, and Vmware. This dramatically simplifies the I/O stack.

- optimized for running on top of a hypervisor

- runs a single application and cooperates with it

- Assimilate into the run time such as the Java Virtual Machine (JVM)

<!--more-->

### Single address space, ring 0

Since the hypervisor is responsible for multiplexing the hardware into different applications, the operating system no longer needs to do this. Instead, the application runs in the operating system kernel’s address space. This increases the efficiency of system calls and context switches: the kernel no longer needs to copy and validate system call parameters, and context switches become faster and more efficient.

### Java Virtual Machine integration

Running in the same address space as the Java Virtual Machine allows OSv to expose hardware features, such as the page tables, directly to the Java Virtual Machine. This in turn allows the JVM to manage memory more efficiently than is possible with traditional APIs (mmap() and friends). Among the possibilities for exploiting the hardware are:

- Direct use of large pages (2MB and 1GB pages)

- Using the page tables to track memory modifications, to aid with garbage collection

- Cooperative scheduling and prioritization of critical GC threads

- Remap the memory instead copying large swept objects.

### lock-free algorithms

Unlike traditional multi-core operating systems, OSV does not use spin-locks at all. On virtual machines, spin-locks are known to cause the “Lock Holder Preemption” problem which degrades performance. So OSV avoids spin-locks completely - and even offers a mutex implementation which is not based on a spin-lock.

&nbsp;

Operating systems on a multi-core virtual machine face a unique challenge that did not exist on physical machines: On a physical machine, all cores always run at full steam (unless the OS requested otherwise). This is not true on virtual machines: A virtual CPU often stops running guest code at unpredictable times, for short or long durations. For example, the guest can stop while the hypervisor is processing a device interrupt, or when the hypervisor preempts the running VM in favor of a different host process or a different guest VM.

Spin-locks are especially vulnerable to CPUs being stopped. When one virtual cpu holds a spin-lock and gets stopped, other virtual cpus which try to take the lock start spinning indefinitely, wasting CPU time and consequently reducing performance. This is a familiar problem known as the Lock Holder Preemption problem, and it hurts performance of traditional operating systems on virtual machines.

OSV, as a new operating system designed from the ground up for virtual machines, is immune to the lock-holder preemption problem because it does not use spin-locks at all. In many cases, OSV uses lock-free algorithms to avoid locking completely. In other cases, where locking is required, it provides a lock-free mutex, a mutual-exclusion primitive which is implemented, unlike traditional mutex implementations, without a spin-lock.

&nbsp;

Lock-free mutexes have been proposed in 2005 and previously implemented in the threading library LFthreads, but OSV is the first operating system to use this idea to completely eliminate spin-locks.

### Interrupt handling in threads

OSV does not handle interrupts in a special interrupt context, but rather in ordinary threads. This simplifies the kernel code, and avoids unwanted spin-locks. Performance is not degraded because of efficient context switches.

Traditionally, operating systems have an interrupt context, a special context for processing device interrupts, which is distinct from regular thread context. Code running in interrupt context is more difficult to write. Moreover, since one cannot sleep in interrupt context, spin-locks are traditionally used there to protect data from concurrent access. But as explained above, we wish to avoid spin-locks completely.

Our solution is to handle device interrupts in interrupt-handling threads. These are just normal, ordinary, threads. In the interrupt context, all we do is wake up the interrupt-handling thread, and when this thread runs it will do the bulk of the interrupt processing work. If the interrupt-handling thread needs locking, it uses a mutex, not a spin-lock.

&nbsp;

For interrupt-handling in threads to be efficient, it’s important that context-switches between threads be as light-weight as possible. OSV indeed focuses on light-weight context switches, and its single address space and single protection domain help achieve that.

### Van Jacobson style network stack

Continuing the theme of avoiding locks and lock contention, OSv is adopts Van Jacobson’s net channels idea, which removes a lot of the overhead in SMP networking stack and increases efficiency. Net channels are not yet in mainline; they will be merged soon.

### State of the art file system

OSv uses the ZFS file system for local storage; a self-healing file system is perfect for the cloud.

