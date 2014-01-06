---
layout: nav
title: Community
nav: community
class: blog
---

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

