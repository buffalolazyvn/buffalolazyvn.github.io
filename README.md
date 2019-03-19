## My Stack Problems

> This project forked and has been modified from [A simple grey theme for Jekyll](https://github.com/agusmakmun/agusmakmun.github.io),
> and the search posts using [Super Search](https://github.com/chinchang/super-search)

### Demo

- [https://buffalolazyvn.github.io](https://buffalolazyvn.github.io)

#### Features

- Sitemap and XML Feed
- Pagination in homepage
- Posts under category
- RealTime Search Posts _(title & description)_ by query.
- Related Posts
- Highlight pre
- Next & Previous Post
- Disqus comment
- Projects page & Detail Project page
- Google analytics
- HTML Minify _(Compress HTML)_ using [Jekyll Compress HTML](https://github.com/penibelst/jekyll-compress-html)
- Navigation menu content of a post (fixed on top) *(made by me)*
- Progress bar scroll of a post *(made by me)*

#### Screenshot

![Screenshot Post Page](https://raw.githubusercontent.com/buffalolazyvn/buffalolazyvn.github.io/master/static/img/first_page.png "Screenshot Post Page")

### Install & Configuration

1. Fork this repository
2. Edit site settings inside file of `_config.yml`
3. Edit your posts at folder of `_posts` and category at folder of "category"
4. Edit your projects at file of `projects.md`, `_data/projects.json` and inside path of `_project/` _(for detail project)_.
5. Edit about yourself inside file of `about.md`

### How to Use?

**a. Add new Category**

All categories saved inside path of `category/`, you can see the existed categories.

**b. Add new Posts**

- All posts based on markdown syntax _(please googling)_. allowed extensions is `*.markdown` or `*.md`.
- This files can found at the path of `_posts/`.
- and the name of files are following `<date:%Y-%m-%d>-<slug>.<extension>`, for example:

```
2019-01-23-start-with-github-page.md

# or

2019-01-23-start-with-github-page.markdown
```

Inside the file of it,

```
---
layout: post                          # (require) default post layout
title: "Your Title"                   # (require) a string title
date: 2016-04-20 19:51:02 +0700       # (require) a post date
categories: [python, django]          # (custom) some categories, but make sure these categories already exists inside path of `category/`
timeRead: "5 minute read"             # (custom) a string estimate time read a post
tags: [foo, bar]                      # (custom) tags only for meta `property="article:tag"`
---

# your content post with markdown syntax goes here...
```

**c. Config comment feature under a post**

A Jekyll blog is not backed by a database. Out of the box, there is no way for people to comment on or discuss blog posts. Disqus is a third party service that can be used to get around that limitation. This post covers adding Disqus to a Jekyll blog.

- Register 1 account and setup to site at https://disqus.com

  ![2019-01-25_161035_disqus](https://user-images.githubusercontent.com/11416513/51736106-d4a3f980-20bb-11e9-9bc3-bc4b17b2c95a.png)

- In file \_config.yml

```
disqus_shortname: disqus_username
```

**d. Build and run on local**

> Guide on: https://help.github.com/articles/setting-up-your-github-pages-site-locally-with-jekyll/

Command build and run server on local

```
bundle exec jekyll serve
```

### Contributing

Feel free to [open a bug](https://github.com/buffalolazyvn/buffalolazyvn.github.io/issues) or [contribute to code](https://github.com/buffalolazyvn/buffalolazyvn.github.io/pulls)!
