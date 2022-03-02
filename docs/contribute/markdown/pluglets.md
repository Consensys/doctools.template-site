---
template: katacoda.html
description: How to use MkDocs pluglets
---

# Markdown pluglets

Documentation sites that use the [new system](../../overview/index.md#new-documentation-system) support pluglets, which
are small Python scripts that you can share between documentation sites.

You can use the existing pluglets or [write your own](https://mkdocs-macros-plugin.readthedocs.io/).

## Katacoda

The [Katacoda](https://www.katacoda.com/create) pluglet helps you create interactive content and guides without writing
HTML in Markdown pages.

ConsenSys documentation has existing [Katacoda scenarios](https://github.com/ConsenSys/doc.katacoda/) to use with this
pluglet.

See more [Katacoda scenario examples](https://github.com/katacoda/scenario-examples).

### Usage

In the Markdown file, select the Katacoda template using the
[metadata](https://squidfunk.github.io/mkdocs-material/setup/extensions/python-markdown/#metadata) syntax.

!!! example "Example metadata header"

    ```markdown
    ---
    template: katacoda.html
    title: My page title
    description: My page description
    ---
    ```

Then use the following in your Markdown to display the Katacoda playground:

=== "Syntax"

    ```django
    {% raw %}
    {{ katacoda('scenario', 'color', 'style', hide_intro, hide_finish) }}
    {% endraw %}
    ```

    Parameters are the following:

    - `scenario` - (required) The name of the Katacoda scenario to load, in the format `account/scenario`.
    - `color` - (optional) The hexadecimal color (no need to add `#`).
      The default is `213fa4`.
    - `style` - (optional) The CSS style to make the playground fit your documentation.
      The default is `height: 600px;`.
    - `hide_intro` - (optional) Indicates whether to hide or keep the intro page.
      The default is `false`.
    - `hide_finish` - (optional) Indicates whether to hide or keep the finish page.
      The default is `false`.
    - `id` - (optional) An integer if you have multiple Katacoda playgrounds on the same page.
      The default is `1`.

=== "Example markdown"

    ```django
    {% raw %}
    {{ katacoda('consensys/doctools-doc-preview', None, 'height: 800px;') }}
    {% endraw %}
    ```

    !!! tip

        If you want to set some optional parameters but not all, you can use `None` as value to skip a parameter.

=== "Example playground rendering"

    {{ katacoda('consensys/doctools-doc-preview', None, 'height: 700px;') }}
