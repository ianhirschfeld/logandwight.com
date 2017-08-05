# logandwight.com

## Running Locally

1. Clone down repo.
1. Make sure you have Jekyll installed, `gem install jekyll`.
1. Run Jekyll, `jekyll server`.
1. Visit http://localhost:4000 in your browser.

## Adding a New Project

1. Create a new file that is named what you want the URL to be. e.g. `atlas.html` for `/atlas`
1. Copy the below [New Project HTML Template](#new-project-html) into the file.
1. Update `title` and `description` which are used for the page's meta data. Leave `layout` as is.
1. Update the `CHANGE_ME` text to be the name of the file (without the `.html`). e.g. `p.url == "atlas"`
1. Open up `projects.json` and copy the below [New Project JSON Template](#new-project-json) into it.
1. Fill out the fields you need, remove the ones you don't.
    * `url`: Should be the same as the file name, minus the `.html`. e.g. `atlas`
    * `gif_class`: Can be `grid-two`, `grid-two-gutter`, `grid-three`.
    * `image_class`: Can be `grid-two`, `grid-two-gutter`, `grid-three`.
    * `image_section_class`: Can be `has-gutter`. Use this in conjunction when one of the above two is `grid-two-gutter`.
    * `tile_image`, `hero_image`, `path`, and `loading_image`: These are relative paths from the `/images` directory. e.g. `tiles/TileAtlas.jpg`
    * `loading_image`: Can be `loading/LoadingPhoneLandscape.png`, `loading/LoadingPhonePortrait.png`, or `loading/LoadingRect.png`.


## Templates

### New Project HTML

```
---
title: Fille out title...
description: Fill out description...
layout: home
---
{% for p in site.data.projects %}
  {% if p.url == "CHANGE_ME" %}
    {% assign project = p %}
  {% endif %}
{% endfor %}
{% include project.html %}
```

### New Project JSON

```
{
  "url": "",
  "title": "",
  "tile_image": "",
  "tile_description": "",
  "hero_image": "",
  "description": "",
  "responsibilities": "",
  "link_text": "",
  "link_url": "",
  "vimeo_id": "",
  "youtube_id": "",
  "gifs": [
    {"path": "", "loading_image": "", "title": ""},
  ],
  "gif_class": "",
  "images": [
    {"path": "", "loading_image": "", "title": ""},
  ],
  "image_class": "",
  "image_section_class": "",
},
```
