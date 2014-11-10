---
layout: nav
title: Run Locally
category: started
nav: started
show_heading: yes
read_more: yes
---

The easiest way to try OSv locally is to use the [Capstan](https://github.com/cloudius-systems/capstan/blob/master/README.md) tool to run one of the
images from our public repository.

<!--more-->

##Install Capstan

### Linux/Mac Installation
Copy the following bash command and paste it to your terminal
{% highlight bash %}
curl https://raw.githubusercontent.com/cloudius-systems/capstan/master/scripts/download | bash
{% endhighlight %}
Capstan is now installed.


### Windows Installation
[![Install capstan on Windows 8.1 ](http://img.youtube.com/vi/-k7SlS-2Ank/0.jpg)](https://www.youtube.com/watch?v=-k7SlS-2Ank)

More on Win install [here](https://github.com/cloudius-systems/capstan/wiki/Capstan-Installation)

##Run OSv with Capstan
The following will use capstan to download and run basic OSv image
with CLI
{% highlight bash %}
$ capstan run cloudius/osv
Created instance: cloudius-osv
OSv v0.10
eth0: 192.168.122.15

[/]%
{% endhighlight %}

## Building and running from sources

If you want to run OSv from sources, start by cloning the git project:

{% highlight bash %}
$ git clone https://github.com/cloudius-systems/osv.git
{% endhighlight %}

Then follow the instructions in the [README](https://github.com/cloudius-systems/osv/blob/master/README.md) file.

## Data collection

OSv binaries collect and send some basic data at each boot.  For more information, see [osv-stat](/osv-stat/).
