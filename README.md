### 1. Write an application in React JS:
- The design is for reference only, feel free to use your own one: https://marvelapp.com/4f4j6j1/screen/46362067

<<<<<<< HEAD
### 2. Features Required:
- Base on our design.
- Search from NASA APIs and Add to the list: https://api.nasa.gov/api.html#Images
```
GET https://images-api.nasa.gov/search?q={q}
```
=======
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
>>>>>>> 01e57c1c081796b88d034df0c92ad1f471bb58d4

- For each Item, user can: Add to favorite, Edit and Delete.

<<<<<<< HEAD
### 3. Optional:
- User can: Filter (type, date, favorite), Sort (Title, Date), Pagination (optional).

### 4. Tech Requirement:
- Must not use any boilerplate.
- The list should use Local Storage or your preferable storage service.
=======
- All posts based on markdown syntax _(please googling)_. allowed extensions is `*.markdown` or `*.md`.
- This files can found at the path of `_posts/`.
- and the name of files are following `<date:%Y-%m-%d>-<slug>.<extension>`, for example:

```
2019-01-23-start-with-github-page.md
>>>>>>> 01e57c1c081796b88d034df0c92ad1f471bb58d4

### 5. Plus points for the candidate (optional):
- Styling by SASS, SCSS, LESS or Style components.
- No UI framework.
- Use Redux, Mobx, Flux.
- Config Webpack builds separately for the production and development environment.
- Build PWA.
- React Native (you can deploy to https://expo.io/ instead of https://pages.github.com/)

<<<<<<< HEAD
### 6. Deploy your application to https://pages.github.com/ or any server that you have
=======
2019-01-23-start-with-github-page.markdown
```
>>>>>>> 01e57c1c081796b88d034df0c92ad1f471bb58d4

### 7. Push the code to git.nfq.asia. For more information please contact hr@nfq.asia

### Development
```bash
npm install
npm start
```
<<<<<<< HEAD
=======
---
layout: post                          # (require) default post layout
title: "Your Title"                   # (require) a string title
date: 2016-04-20 19:51:02 +0700       # (require) a post date
categories: [python, django]          # (custom) some categories, but make sure these categories already exists inside path of `category/`
timeRead: "5 minute read"             # (custom) a string estimate time read a post
tags: [foo, bar]                      # (custom) tags only for meta `property="article:tag"`
---
>>>>>>> 01e57c1c081796b88d034df0c92ad1f471bb58d4

### Production
```bash
npm install
npm run build
npm run serve
```

<<<<<<< HEAD
### Editor Config
I'm using VSCode

## Tech Stacks used by developer:
- [React 16.4](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [Redux-form](https://redux-form.com/)
- [Redux-saga](https://redux-saga.js.org/)
- [styled-components](https://www.styled-components.com/)
- [react-helmet](https://github.com/nfl/react-helmet)
- [react-frontload](https://github.com/davnicwil/react-frontload)
=======
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
>>>>>>> 01e57c1c081796b88d034df0c92ad1f471bb58d4
