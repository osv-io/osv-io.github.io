---
category: feature
title: Optimize your Native apps
order: 1
---

Usually OS<sup>v</sup> runs unmodified applications. In order to provide better performance than traditional VMs, OS<sup>v</sup> exposes a low level kernel api.

An application has access to the block device and flushing, can map the NIC descriptors directly (virtio-app), and can signal the hypervisor. This allows performing IO without taking an expensive kernel path in the guest OS.

