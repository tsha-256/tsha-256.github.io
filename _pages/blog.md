---
layout: default
permalink: /blog/
title: blog
nav: true
nav_order: 1
pagination:
  enabled: false
---

<div class="post">

  {% comment %} Show only posts marked for the simple blog view {% endcomment %}
  {% assign postlist = site.posts | where: "show_in_blog", true | sort: "date" | reverse %}

  {% for post in postlist %}
    <article class="mb-4">
      <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
      {% if post.description %}
        <p>{{ post.description }}</p>
      {% endif %}
      <p class="post-meta">{{ post.date | date: '%B %d, %Y' }}</p>
    </article>
    <hr>
  {% endfor %}

</div>
