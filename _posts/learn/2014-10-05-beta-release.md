---
layout: nav
title: Beta Release
category: learn
show_heading: yes
nav: learn
---

OSv 0.14 "Aspen" is the first of a series of close OSv Beta releases.

OSv is a new lightweight OS, designed from the ground up to run in a
virtual cloud environment, with maximum performance, low latency, and
simple management.

This release focuses on stability, management and ease of use.

To get into the OSv beta program please register [here](beta-registration).

### Release Features
Below is a partial list of OSv Beta release features.


#### Cloud Support
OSv is fully functional on the following cloud provider:

* Amazon Web Service EC2
* Google Compute Engine (GCE)

OSv is fully functional on the following Hyper-visors:

* KVM
* Xen
* VMWare
* VirtualBox

#### Linux Compatibility
OSv is binary compatible with Linux, and can run most Linux apps as
shared library.
More on porting Linux applications to OSv [here](https://github.com/cloudius-systems/osv/wiki/Porting-native-applications-to-OSv)


#### REST API 
REST API for configuration and run time management, full spec is
[here](http://osv.io/api/swagger-ui/dist/index.html)


REST API supports Includes:

* Optional SSL support
* Swagger UI - browser base front end for the API
* New Command Line Interface (CLI) build on top of the REST API. More
  on the CLI [here](https://github.com/cloudius-systems/osv/wiki/Command-Line-Interface-(CLI))


#### New Dashboard
A new browser base Dashboard allow easier management and monitoring of
OSv run-time. The Dashboard visualize the REST API, presenting a unify
picture of every aspect of the system: CPU, threads status , custom
trace points and much more.

When running OSv as a Virtual Appliance, the dashboard will
automatically include a run-time and application tab, with the specific
metric for each.
For example, JVM and Cassandra tabs.
You can also add you own tab when developing a new appliance.

![Dashboard main tab](images/dashboard_main_tab.png)

More on the dashboard [here](TBD)  


#### Performance
OSv is par or better from Linux for each of the Virtual Appliance
provided.
For more details and latest benchmark [here](TBD)


#### Cloud Init support
Cloud Init is a mechanism which allows one to configure the instance
at the time it is started.
Cloud Init is supported via meta data in all major cloud providers.

OSv Cloud Init is very extensible, where each application can add
its own section. Out of the box OSv supports:

* SSL setting via Cloud Init. More on SSL [here](TBD) 
* Per application configuration. More on Cassandra Cloud Init support [here](TBD)


#### Virtual Appliances
  * Memcache
  * Redis
  * MySQL
  * Cassandra
  * Tomcat
  * [full list](https://github.com/cloudius-systems/osv-apps)

  
#### Capstan
a tool for rapidly building and running your application
on OSv. More [here](capstan)  


### Beta FAQ

* How can I become part of OSv beta program?

Please register [here](beta-registration)

* Why is the beta closed?

We take beta testing very seriously, and we want to make sure we are giving our full attention to each user.  To do that we have to limit the size of the beta program.

* Will you have an open beta?

Yes, we do plan an open beta in the near future.
Please register on the form to be notified, or follow @CloudiusSystems on Twitter.

* The OSv project is open source, what makes the beta closed?

The project will stay open, and you can clone the Git master branch for the latest code.
In addition we keep a more stable version of each virtual appliance for beta testers.
Usually the beta version will lag behind the dev version feature-wise.

* When will you release a GA version of OSv?

We will have a GA version about one quarter after the public beta phase. Stay tuned!
