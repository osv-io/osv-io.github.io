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
Copy the following bash command and paste it to your terminal
{% highlight bash %}
$ mkdir -p $HOME/bin && curl
http://osv.capstan.s3.amazonaws.com/capstan/v0.1.1/darwin_amd64/capstan
-o $HOME/bin/capstan && chmod u+x $HOME/bin/capstan
{% endhighlight %}
Capstan is now installed.

##Run OSv with Capstan
The following will use capstan to download and run basic OSv image
with CLI
{% highlight bash %}
$ capstan run cloudius/osv
Created instance: cloudius-osv
OSv v0.09
eth0: 192.168.122.15

[/]%
{% endhighlight %}

##See for yourself
<script type="text/javascript" src="https://asciinema.org/a/9953.js"
id="asciicast-9953" async data-speed="2" data-autoplay="1"></script>

## Building and running from sources

If you want to run OSv from sources, start by cloning the git project:

{% highlight bash %}
$ git clone https://github.com/cloudius-systems/osv.git
{% endhighlight %}

Then follow the instructions in the [README](https://github.com/cloudius-systems/osv/blob/master/README.md) file.
