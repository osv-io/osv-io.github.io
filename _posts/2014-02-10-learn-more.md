---
layout: nav
title: Learn More
nav: learn
class: blog
category: top
order: 3
---

{% for p in site.categories.learn %}
{% if p.heading %}
## {{ p.heading }}
{:.section-header}
{% else %}
## {{ p.title }}
{:.section-header}
{% endif %}

{{ p.excerpt }}

{% if p.no_readmore != true %}
[Read more...]({{site.url}}{{ p.url }} "Read more")
{:.readmore}
{% endif %}
- - -
{% endfor %}
