---
layout: nav
title: Community
nav: community
class: blog
category: top
order: 5
---

{% for p in site.categories.community %}
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
