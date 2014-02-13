---
layout: nav
title: Netpref Benchmarks
category: benchmarks
show_heading: yes
nav: learn
---

## Latest Benchamrk
{{ site.categories.netpref.first.content }}

## All Benchamrks
{% for p in site.categories.netpref %}
* [{{ p.title }}]({{ p.url }})
{% endfor %}

## Test Bed

* All tests runs for 30 sec

* Results present the average across 5 runs

* For tests TCP_STREAM, TCP_MAERTS, UDP_STREAM, TCP_RR, UDP_RR:
  netserver is running on the tested (guest) OS  
  netperf is running on a different server  

* For UDP Tx, netpref is running in the tested OS


#### Disable the Linux firewall
* Open ports 12865 and 12866 for netperf in the Linux firewall
{% highlight bash %}
    firewall-cmd --permanent --add-port=12866/udp  
    firewall-cmd --permanent --add-port=12866/tcp  
    firewall-cmd --permanent --add-port=12865/tcp  
    systemctl restart firewalld.service  
{% endhighlight %}

* Stop FW (firewall) on the Linux Guest
{% highlight bash %}
    systemctl stop firewalld.service  
{% endhighlight %}

* Check the status of the FW:
{% highlight bash %}
    firewall-cmd --state
{% endhighlight %}

* Check the FW rules:  
{% highlight bash %}
    firewall-cmd --list-all
{% endhighlight %}


#### Running a netserver  

* For Linux (run in the Guest shell)

{% highlight bash %}
    netserver  
{% endhighlight %}

* For OSv (run in the host shell): 

{% highlight bash %}
    sudo ./scripts/run.py -n -v -e "/tools/netserver.so -D -4 -f" -c <number of vCPUs, e.g. 4>  
{% endhighlight %}

* For UDP Tx, run on the host:  

{% highlight bash %}
    netserver  
{% endhighlight %}

#### Running a netperf  

* Run a netperf on a host, For both Linux and OSv  

{% highlight bash %}
    netperf -H <IP netserver is listening on, e.g. 192.168.122.89> -t <test name, e.g. TCP_MAERTS> -l 30 -- -P 12866  
{% endhighlight %}


* For UDP Tx, running UDP_STREAM from the Guest  
* For Linux (run in the Guest shell)  

{% highlight bash %}
    netperf -H <IP netserver is listening on, e.g. 192.168.122.1> -t UDP_STREAM -l 30 -- -P 12866 -m 1400  
{% endhighlight %}

* For OSv (run in the host shell):  

{% highlight bash %}
    sudo ./scripts/run.py -n -v -e "/tools/netperf.so -H <IP netserver is listening on, e.g. 192.168.122.1> -t UDP_STREAM -l 30 -- -P 12866 -m 1400" -c <number of vCPUs, e.g. 4>
{% endhighlight %}
