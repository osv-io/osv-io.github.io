---
layout: nav
title: Beta Release
category: started
show_heading: yes
nav: learn
redirect_from: "/beta/"
---

**OSv "Aspen" is the first of a series of closed Beta releases of OSv.**
OSv is a new lightweight OS, designed from the ground up to run in a
virtual cloud environment, with maximum performance, low latency, and
simple management.

This release focuses on stability, management and ease of use.

We are accepting applications for the OSv beta program.  To apply, please visit the  [Beta Registration](beta-registration) page.

<!--more-->

## Release Features
Below is a partial list of OSv Beta release features.


### Cloud Support
OSv is fully functional on the following cloud providers:

* Amazon Web Service EC2
* Google Compute Engine (GCE)

OSv is fully functional on the following hypervisors:

* KVM
* Xen
* VMware
* VirtualBox

For now, Beta program includes only EC2, but you can already
[Register](beta-registration) for other providers.
We will notify you when they become available.

### Linux Compatibility
OSv is binary compatible with Linux, and can run most Linux applications.

For more information, visit [Porting Linux applications to OSv](https://github.com/cloudius-systems/osv/wiki/Porting-native-applications-to-OSv)


### REST API 

OSv has a REST API for OS and application-level configuration and runtime management.  Detailed information is in the [OSv API online documentation](http://osv.io/api/swagger-ui/dist/index.html).


The REST API supports:

* Optional SSL support
* Swagger UI - browser based front end for the API and documentation
* New [command line interface for the REST API](https://github.com/cloudius-systems/osv/wiki/Command-Line-Interface-(CLI))


### New Dashboard

A new browser based Dashboard allows easier management and monitoring of
OSv at run-time. The Dashboard visualizes ethe REST API, presenting a unified
picture of every aspect of the system: CPU, threads status, custom
trace points and much more.

When running OSv as a virtual appliance, the dashboard will automatically include run-time and application tabs, with specific metrics for each.  For example, JVM and Cassandra tabs.  You can also add your own tabs when developing a new appliance. 

![Dashboard main tab](images/dashboard_main_tab.png)



### Performance

OSv has comparable or better performance compared to Linux for each virtual appliance provided. 

Details are on the [OSv Benchmarks](/benchmarks) page.


### Cloud-init support

Cloud-init is a mechanism which allows one to configure the instance
at the time it is started.
Cloud Init is supported in all major cloud providers.

OSv cloud-init is very extensible.  Each application can add
its own section. Out of the box OSv supports:

* SSL settings

* Management UI settings

* Per application configuration 


### Virtual Appliances
  * Memcache
  * Redis
  * Cassandra

More info: [OSv Virtual Appliances](virtual-appliances)

  
### Capstan
a tool for rapidly building and running your application
on OSv. More info at: [Capstan](capstan)  


### Beta FAQ

#### How can I become part of the OSv beta program?

Please register using the [beta registration form](beta-registration).

#### Why is the beta closed?

We take beta testing very seriously, and we want to make sure we are giving our full attention to each user.  To do that we have to limit the size of the beta program.

#### Will you have an open beta?

Yes, we do plan an open beta in the near future.
Please register on the form to be notified, or follow [@CloudiusSystems](https://twitter.com/CloudiusSystems) on Twitter.

#### The OSv project is open source, what makes the beta closed?

The project will stay open, and you can clone the Git master branch for the latest code.  In addition we keep a more stable version of each virtual appliance for beta testers.  Usually the beta version will lag behind the dev version feature-wise.

#### When will you release a GA version of OSv?

We will have a GA version about one quarter after the public beta phase. Stay tuned!
