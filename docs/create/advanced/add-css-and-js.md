---
description: How to add CSS and Javascript
---

# Add custom CSS and Javascript

The following guidelines explain how to add CSS and Javascript to your site without modifying
the common doc theme.

Extra script and style configuration enables individual sites to have a specific colour scheme
or run some script to complement the initial set provided by the common theme.

These scripts and styles will be loaded on all pages of the doc site.

Add scripts and styles by updating the `mkdocs.extra.yml` configuration file.

!!! example "Custom CSS and JS files example"

    Create new `docs/assets/stylesheets/` and `docs/assets/javascripts/` folders.

    Create a CSS files `docs/assets/stylesheets/a_custom_style.css` and a javascript file  `docs/assets/javascripts/a_custom_script.js`.

    Modify the `mkdocs.extra.yml` with the following:

    ```yaml
    extra_css:
      - assets/stylesheets/a_custom_style.css

    extra_javascript:
      - assets/javascripts/a_custom_script.js
    ```
