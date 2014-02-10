---
layout: nav
title: Getting Started
nav: started
class: blog
category: top
order: 2
---

{% for p in site.categories.started %}
{% if p.heading %}
## {{ p.heading }}
{:.section-header}
{% else %}
## {{ p.title }}
{:.section-header}
{% endif %}

{{ p.excerpt }}

{% if p.no_readmore != true %}
[Read more...]({{site.baseurl}}{{ p.url }} "Read more")
{:.readmore}
{% endif %}
- - -
{% endfor %}