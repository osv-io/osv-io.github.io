---
layout: nav
title: Run Locally
category: started
nav: started
show_heading: yes
read_more: yes
---

The easiest way to try OSv locally is to use the Capstan tool to run one of the
images from our public repository.

<!--more-->

&nbsp;

To install the tool please follow instructions in this [README](https://github.com/cloudius-systems/capstan/blob/master/README.md).
After you have capstan installed you can try our basic image out:

{% highlight bash %}
$ capstan run cloudius/osv
Created instance: i1396433884
OSv v0.06

[/]%
{% endhighlight %}


## Building and running from sources

If you want to run OSv from sources, start by cloning the git project:

{% highlight bash %}
$ git clone https://github.com/cloudius-systems/osv.git
{% endhighlight %}

Then follow the instructions in the [README](https://github.com/cloudius-systems/osv/blob/master/README.md) file.
