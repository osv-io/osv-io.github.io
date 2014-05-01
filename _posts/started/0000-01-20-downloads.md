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

osv: http://downloads.osv.io.s3.amazonaws.com/cloudius/osv/osv-v0.08
tomcat: http://downloads.osv.io.s3.amazonaws.com/cloudius/osv-tomcat/osv-tomcat-v0.08
mem: http://downloads.osv.io.s3.amazonaws.com/cloudius/osv-memcached-opt/osv-memcached-opt-v0.08
iperf: http://downloads.osv.io.s3.amazonaws.com/cloudius/osv-iperf/osv-iperf-v0.08
cassandra: http://downloads.osv.io.s3.amazonaws.com/cloudius/osv-cassandra/osv-cassandra-v0.08

---

### OSv Images
Easiest way to look for latest OSv images and run them is using [Capstan](/capstan)

For OSv v0.08 images direct download see below

Image                | OSv   |  OSv-Cassandra | OSv-Memcached | OSv-Tomcat | OSv-IPerf
---------------------|-------|----------------|---------------|------------|----------
QCOW2 for KVM*       | [V]({{page.osv}}{{page.qcow}}) | [V]({{page.cassandra}}{{page.qcow}}) | [V]({{page.mem}}{{page.qcow}}) | [V]({{page.tomcat}}{{page.qcow}}) |  [V]({{page.iperf}}{{page.qcow}})
OVA for VirtualBox*| [V]({{page.osv}}{{page.vbox}}) | [V]({{page.cassandra}}{{page.vbox}}) | [V]({{page.mem}}{{page.vbox}}) | [V]({{page.tomcat}}{{page.vbox}}) |  [V]({{page.iperf}}{{page.vbox}})
VMW for VMWare workstation  | [V]({{page.osv}}{{page.vmw}}) | [V]({{page.cassandra}}{{page.vmw}}) | [V]({{page.mem}}{{page.vmw}}) | [V]({{page.tomcat}}{{page.vmw}}) |  [V]({{page.iperf}}{{page.vmw}})
OVA for VMWare ESXi | [V]({{page.osv}}{{page.esx}}) | [V]({{page.cassandra}}{{page.esx}}) | [V]({{page.mem}}{{page.esx}}) | [V]({{page.tomcat}}{{page.esx}}) |  [V]({{page.iperf}}{{page.esx}})
{:.supportTableB}

\* Also available using Capstan search
