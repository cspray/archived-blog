---
layout: default
title: home
description: A PHP and web development blog, talking about OOP, design patterns, software architecture and the programming industry

disqus_enabled: false
---

<ul class="no-list-icon no-padding">
  {% for post in site.posts %}
    <li>
      {% include post-excerpt.html post=post %}
    </li>
  {% endfor %}
</ul>
