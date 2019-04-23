---
layout: nav
title: Getting Started
nav: started
class: blog
category: top
order: 2
---

{% assign sorted_started_cats = site.categories.started | sort: 'title' %}
{% for p in sorted_started_cats %}
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
