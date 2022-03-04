---
description: How to add CSS and Javascript
---

# Add custom CSS and JavaScript

The following guidelines explain how to add CSS and JavaScript (JS) to documentation sites that use the [new system](../../overview/index.md#new-documentation-system) without modifying the common documentation theme.

Extra script and style configuration enables individual sites to have a specific color scheme
or to run scripts in addition to the common set of scripts.

These scripts and styles are loaded on all pages of the documentation site.

Add scripts and styles by updating the `mkdocs.extra.yml` configuration file.

!!! example "Custom CSS and JS files example"

    Create new `docs/assets/stylesheets/` and `docs/assets/javascripts/` folders.

    Create a CSS file `docs/assets/stylesheets/a_custom_style.css` and a JS file  `docs/assets/javascripts/a_custom_script.js`.

    Modify `mkdocs.extra.yml` with the following:

    ```yaml
    extra_css:
      - assets/stylesheets/a_custom_style.css

    extra_javascript:
      - assets/javascripts/a_custom_script.js
    ```
