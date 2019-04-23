---
category: feature
title: Optimize your Native apps
order: 1
---

Usually OS<sup>v</sup> runs unmodified applications. In order to provide even better performance, it's possible to access a low level kernel api.

An application has access to the block device and flushing, and can map the NIC descriptors directly (virtio-app) and signal the hypervisor. We believe that the number of cycles the application requires should always be smaller than the kernel path.

