---
layout: main
title: Scriptish
canonical: http://scriptish.org
keywords: scriptish, user script, userscript, firefox, mozilla, javascript
---

Scriptish is the greatest user script engine on the Internet.  It was forked 
from Greasemonkey and made much better.

If you are looking for user scripts, then check out
[userscripts.org](http://userscripts.org).

## News

<ul class="posts">
{% for post in site.categories.news limit: 3 %}
  <li>
    <span>{{ post.date | date_to_string }}</span>
    <a title="{{ post.title }}" href="{{ post.url }}">{{ post.title }}</a>
  </li>
{% endfor %}
</ul>

