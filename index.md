---
layout: main
title: Scriptish
---

The greatest user script engine on the Internet.

## News

<ul class="posts">
{% for post in site.categories.news limit: 3 %}
  <li><span>{{ post.date | date_to_string }}</span><a title="{{ post.title }}" href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
</ul>

