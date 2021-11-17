---
template: katacoda.html
---

# Katacoda pluglet for mkdocs-macros

This is a Katacoda **pluglet** for mkdocs-macros.

It helps adding Katacoda code into Markdown pages without having to write HTML.

See https://github.com/ConsenSys/doc.katacoda/ for ConsenSys Scenarios source code or https://www.katacoda.com/consensys for the rendered versions

See https://www.katacoda.com/create and https://github.com/katacoda/scenario-examples for inspiration.

## Example

!!! example "Katacoda playground rendering example"
    {{ katacoda('consensys/doctools-doc-preview', None , 'height: 300px;') }}

## Usage

In your Markdown file, you have to select the Katacoda template using the [Mkdocs Material Meta syntax](https://squidfunk.github.io/mkdocs-material/reference/meta-tags/).

!!! example "Example meta header"

    ```yaml title="my_page.md"
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

    - **scenario** _(required)_: the name of the Katacoda scenario to load. It's in the format `account/scenario`.
    - **color** _(optional)_: the hexadecimal color (no need to add `#`). Default is `213fa4`
    - **style** _(optional)_: the CSS style to make the playground fit your doc. Default is `height: 600px;`
    - **hide_intro** _(optional)_: true or false to hide or keep the intro page. Default is false.
    - **hide_finish** _(optional)_: true or false to hide or keep the finish page. Default is false.
    - **id** _(optional)_: an integer if you have multiple Katacoda playgrounds on the same page. Default is 1.

=== "Example using default values"

    ```django
    {% raw %}
    {{ katacoda('consensys/doctools-doc-preview') }}
    {% endraw %}
    ```

=== "Example using optional parameters"

    ```django
    {% raw %}
    {{ katacoda('consensys/doctools-doc-preview', 'AABBCC', 'height: 400px;', false, true, 42) }}
    {% endraw %}
    ```

    - Playground uses the scenario `consensys/doctools-doc-preview`
    - Main color is {{ color_block('#FF0000') }}
    - CSS style is `height: 800px;`
    - Do not hide intro page
    - Hide finish page
    - The Katacoda embeded `<div>` id is 42

    !!! tip
        If you want to set some optional parameters but not all, you can use `None` as value to skip
        a parameter. The Pluglet will then use the default value for the parameter.

        !!! example

            ```django
            {% raw %}
            {{ katacoda('consensys/doctools-doc-preview', None, None, false, None, 1337) }}
            {% endraw %}
            ```
