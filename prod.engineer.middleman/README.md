# Middleman v4 Front-end Starter Kit

Middleman v4 starter kit template created for middleman front-end development.
If you wonder about middleman please [check out here](https://middlemanapp.com/)

## Breaking Changes

In Middleman (v4.3.0.rc.2) if you got some error when you run Middleman please use
`NO_CONTRACTS=true bundle exec middleman server` instead of `middleman` or `middleman server`

[More info](https://middlemanapp.com/basics/build-and-deploy/)

### Quick start

`middleman init your_project_name --template=middleman-starter-kit`

More information is [here](https://middlemanapp.com/advanced/project_templates/)

### What's Include

Middleman start kit template basically build on HTML5 Boilerplate front-end
template. Ready to use Rails assets file structure, Sass file structure.

- Middleman v4.3.0.rc.3
- Haml v5
- Sass
- Autoprefixer
- EcmaScript 6
- jQuery
- Bootstrap v4 ("4.1.3")
- Editor Config
- Simple sitemap helper
- humans.txt
- Open graph meta tags

### Changelog

[18/10/2018]

- Update Middleman v4.3.0.rc.3
- EcmaScript6 compile, autoprefixer and automatic_image_sizes move to build environment

[06/10/2018]

- Update Middleman v4.3.0.rc.2

[11/07/2018]

- Add .ruby-version
- Update Middleman v4.3.0.rc.1
- Update Bootstrap v4.1.1
- Removed bower
- Removed middleman-deploy extension

[04/05/2018]

- Update layout.haml
- Update jQuery
- Removed IE9 support
- Removed font-awesome CDN (use SVG icons)

[28/02/2018]

- Bootstrap update "4.0"

[14/01/2018]

- Bootstrap update "4.0.0.beta3"
- Remove Compass
- Add Autoprefixer

[29/06/2017]

- Add ES6 support
- Update jQuery
- Update Haml config (https://github.com/haml/haml/pull/894)
- Update Gems
- Bootstrap upgrade to v4
