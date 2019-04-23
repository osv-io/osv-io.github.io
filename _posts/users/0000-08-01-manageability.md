---
layout: nav
title: Manageability
category: learn
show_heading: yes
nav: learn
order: 1
---

## Management usage and API

OSv places all management endpoints in a single location: a simple, documented REST API.  All management operations can be done using your chosen management tools, or your own scripts, over HTTP.

![OSv Dashboard screenshot](/images/dashboard.png)

**An optional in-browser dashboard is available.**  The dashboard provides live updates and includes:

 * OS basics such as memory usage and CPU load

 * Tracepoints for all system and application functionality

 * JMX endpoints (using the [Jolokia](http://osv.io/blog/blog/2014/08/26/jolokia-jmx-connectivity-in-osv/) JMX-over-REST connector)

 * Application-specific metrics, which can be added by the application developer.

### REST API details

On a cloud environment of multiple instances, it is inefficient to interact with each instance using a conventional GUI or CLI designed for hardware servers.  The OSv REST API simplifies management.

* The latest version of the [REST API specification](http://osv.io/api/swagger-ui/dist/index.html)

* Details on how to interact with OSV using the API are in a Wiki article: 
  [OSv REST API](https://github.com/cloudius-systems/mgmt/wiki/OSv-REST-API).
 
### cloud-init

The [cloud-init](https://github.com/cloudius-systems/osv/wiki/cloud-init) mechanism provides a simple way to provide per-instance configuration parameters to an OSv VM at boot time.  It is useful for booting many clustered instances of a horizontally scaled application such as a NoSQL database.

OSv cloud-init works the same way across public and private clouds, so a cloud-init configuration developed in-house will work anywhere you choose to deploy&mdash;perfect for hybrid cloud environments.

