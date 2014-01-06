---
category: feature
title: Optimize your Native apps
---

Usually OS<sup>v</sup> runs unmodified applications. In order to provide even better performance, it's possible to access low level kernel api.

An application have access to the block device and flushing, applications can map the NIC descriptors directly (virtio-app) and signal the hypervisor. We believe that the amount of cycles the application requires, should always be smaller than the kernel path.









