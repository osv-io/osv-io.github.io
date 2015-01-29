---
layout: nav
title: Downloads
category: started
nav: started
show_heading: yes

s3: http://downloads.osv.io.s3.amazonaws.com/cloudius/osv/
esx: .esx.ova
gce: .gce.tar.gz
qcow: .qemu.qcow2
vbox: .vbox.ova
vmw: .vmw.zip

osv: http://downloads.osv.io.s3.amazonaws.com/cloudius/osv/osv-v0.17
tomcat: http://downloads.osv.io.s3.amazonaws.com/cloudius/osv-tomcat/osv-tomcat-v0.17
mem: http://downloads.osv.io.s3.amazonaws.com/cloudius/osv-memcached-opt/osv-memcached-opt-v0.17
iperf: http://downloads.osv.io.s3.amazonaws.com/cloudius/osv-iperf/osv-iperf-v0.17
cassandra: http://downloads.osv.io.s3.amazonaws.com/cloudius/osv-cassandra/osv-cassandra-v0.17
redis: http://downloads.osv.io.s3.amazonaws.com/cloudius/osv-redis-memonly/osv-redis-memonly-v0.17


---

For Beta images please [Register](beta-registration)


### OSv Images - release 0.17
The recommended way to run OSv [locally](/run-locally)
is using [Capstan](/capstan)

The following images can be used to download standalone OSv image to
use directly with KVM, VirtualBox, or VMWare.

* All OSv binaries collect and send basic OS data at each boot.
For more information, see [osv-stat](osv-stat)


<!--more-->

* OSv with CLI
  * [Download]({{page.osv}}{{page.qcow}}) QCOW2 for KVM
  * [Download]({{page.osv}}{{page.vbox}}) OVA for VirtualBox
  * [Download]({{page.osv}}{{page.vmw}}) VMW for VMWare workstation
  * [Download]({{page.osv}}{{page.esx}}) OVA for VMWare ESXi

* Cassandra Virtual Appliance
  * [Download]({{page.cassandra}}{{page.qcow}}) QCOW2 for KVM
  * [Download]({{page.cassandra}}{{page.vbox}}) OVA for VirtualBox
  * [Download]({{page.cassandra}}{{page.vmw}}) VMW for VMWare workstation
  * [Download]({{page.cassandra}}{{page.esx}}) OVA for VMWare ESXi


* Memcached Virtual Appliance
  * [Download]({{page.mem}}{{page.qcow}}) QCOW2 for KVM
  * [Download]({{page.mem}}{{page.vbox}}) OVA for VirtualBox
  * [Download]({{page.mem}}{{page.vmw}}) VMW for VMWare workstation
  * [Download]({{page.mem}}{{page.esx}}) OVA for VMWare ESXi


* Tomcat Virtual Appliance
  * [Download]({{page.tomcat}}{{page.qcow}}) QCOW2 for KVM
  * [Download]({{page.tomcat}}{{page.vbox}}) OVA for VirtualBox
  * [Download]({{page.tomcat}}{{page.vmw}}) VMW for VMWare workstation
  * [Download]({{page.tomcat}}{{page.esx}}) OVA for VMWare ESXi


* IPerf Virtual Appliance
  * [Download]({{page.iperf}}{{page.qcow}}) QCOW2 for KVM
  * [Download]({{page.iperf}}{{page.vbox}}) OVA for VirtualBox
  * [Download]({{page.iperf}}{{page.vmw}}) VMW for VMWare workstation
  * [Download]({{page.iperf}}{{page.esx}}) OVA for VMWare ESXi

* Redis Virtual Appliance
  * [Download]({{page.redis}}{{page.qcow}}) QCOW2 for KVM
  * [Download]({{page.redis}}{{page.vbox}}) OVA for VirtualBox
  * [Download]({{page.redis}}{{page.vmw}}) VMW for VMWare workstation
  * [Download]({{page.redis}}{{page.esx}}) OVA for VMWare ESXi


* *Older version of all virtual appliances available [here](http://s3.amazonaws.com/downloads.osv.io/index.html?prefix=cloudius/)*
