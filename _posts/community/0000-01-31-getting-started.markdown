---
layout: default
title: Getting started
category: community
nav: community
show_heading: yes
read_more: yes
---
In order to build and locally run Osv, just follow our REAME:

[https://github.com/cloudius-systems/osv/blob/master/README.md](https://github.com/cloudius-systems/osv/blob/master/README.md)

<!--more-->

## Compile ##

Well, just in case, you'll have to run make;

In practice there are more details since few rpms are needed and

you'll need to configure our git submodules and build them. Please go to the

above link and go through all of the instructions.

## Run ##

Osv has a tiny Python wrapper over qemu, jusr call it scripts/run.py and that's it. In practice the command line is the following:

qemu-system-x86_64 -vnc :1 -m 4g -smp 4 -device isa-serial,chardev=stdio -drive file=build/release/usr.img,if=virtio -netdev tap,id=hn0,vhost=on -device virtio-net-pci,netdev=hn0,id=nic1 -enable-kvm -cpu host,+x2apic

Note that the script supports Xen local invocation as well.