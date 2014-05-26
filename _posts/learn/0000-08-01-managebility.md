---
layout: nav
title: Managebility
category: learn
show_heading: yes
nav: learn
---

## Management usage and API:

OSV can be managed by REST API or SSH.

### REST API
On a cloud environment of multiple instances, interacting with each
instance via GUI or CLI is non efficient. 
Instead OS operations should allows easy automation.
OSv REST API allows such remote automation.

* Latest version of the REST API specification [here](http://osv.io/api/swagger-ui/dist/index.html)
* Instruction on how to interact with OSV using the API
  [here](https://github.com/cloudius-systems/mgmt/wiki/OSv-REST-API)
  

### SSH 
OSv is managed using the ssh protocol (implemented using [Apache MINA](http://mina.apache.org/)) and a shell. We have a [REST](http://en.wikipedia.org/wiki/Representational_state_transfer) API for automated management.



<!--more-->

## Language support

[Java](http://java.com/en/download/index.jsp), [Ruby](http://jruby.org/), [Scala](http://www.scala-lang.org/), JavaScript (via [Rhino](http://en.wikipedia.org/wiki/Rhino_(JavaScript_engine)) and [Nashorn](http://en.wikipedia.org/wiki/Nashorn_(JavaScript_engine))), and practically any JVM language is supported.

Hypervisor support

Xen and KVM are fully supported; VMware support is planned.

