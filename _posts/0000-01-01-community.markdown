---
layout: default
title: Community
nav: community
class: blog
---

## Merry Christmas ##

Merry Christmas everyone

![Merry Christmas](images/merry_christmasA_80x60.jpg)

[Read more...](/ "Read more")
{:.readmore}

- - -
{% for p in site.categories.community %}
## {{ p.title }} ##
{:.section-header}

{{ p.excerpt }}

{% if p.read_more %}
[Read more...]({{site.baseurl}}{{ p.url }} "Read more")
{:.readmore}
{% endif %}
- - -
{% endfor %}

