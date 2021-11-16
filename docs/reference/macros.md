---
title: Macros
description: How to use MkDocs macros
---

# MkDocs macros and filters.

Macros and filters are scripts that your can write for your pages or whole site to make some tasks faster.

You can then use them in your Markdown content.

For instance, imagine that you are writing a CLI doc with multiple entries, all formatted the same way.

Instead of repeating the same Markdown code over and over for each CLI option, with just change in the CLI option name and params, write a macro and reuse it.

See how we did this in our [CLI doc example](../examples/write_cli_reference.md).

## Page level macros

Macros writen directly in a Markdown page and only available for this specific page.

!!! example "Example of CLI option macro"

    Here is an example of a page level macro. Imagine that you only have one CLI page, so you don't need it
    to be reused in other pages.

{% macro cli_option(name, type="INTEGER", example="", description="", default="") -%}

        ### `{{name}}`

        === "Syntax"

            ```bash
            --{{name}}=<{{type}}>
            ```

        === "Example"

            ```bash
            --{{name}}={{example}}
            ```

        === "Environment Variable"

            ```bash
            {{name | cli_to_env }}={{example}}
            ```

        === "Example Configuration File"

            ```bash
            {{name}}={{example}}
            ```

        {{description}}
        The default is `{{default}}`.

{%- endmacro %}

    === "Macro definition code"

        ```Django
        {% raw %}
        {% macro cli_option(name, type="INTEGER", example="", description="", default="") -%}

        ### `{{name}}`

        === "Syntax"

            ```bash
            --{{name}}=<{{type}}>
            ```

        === "Example"

            ```bash
            --{{name}}={{example}}
            ```

        === "Environment Variable"

            ```bash
            {{name | cli_to_env }}={{example}}
            ```

        === "Example Configuration File"

            ```bash
            {{name}}={{example}}
            ```

        {{description}}
        The default is `{{default}}`.

        {%- endmacro %}
        {% endraw %}
        ```

    === "Macro call cade in Markdown"

        ```Django
        {% raw %}
        {{ cli_option('my-option','INTEGER', '42', 'This option provides the expected answer to life, universe and everything.', '42') }}
        {% endraw %}
        ```

    === "Rendered result"

        {{ cli_option('my-option','INTEGER', '42', 'This option provides the expected answer to life, universe and everything.', '42') }}

        !!! tip
            See also how it renders in the [CLI doc example](../examples/write_cli_reference.md#options).

## Site level macros

Site level macros are writen in Python and are available for any page in the documentation site.

Macros must be written in the root of the site inside `main.py`.

!!! example

    This macro helps writing an email link.

    === "Macro definition code"

        ```python
        def define_env(env):
          "Hook function"

          # This is a demo macro that you can define for all your site.
          # parameters are:
          # address: the address prefix
          # domain: the email domain, using "consensys.net" as default if not provided.
          @env.macro
          def email(address:str, domain:str="consensys.net"):
            return 'Send email at [{address}@{domain}](mailto:{address}@{domain})'.format(address=address, domain=domain)
        ```

    === "Macro call cade in Markdown"

        ```Django
        {% raw %}
        {{ email("jane.doe") }}
        {% endraw %}
        ```

        What you would have had to type without macro:

        ```markdown
        Send email at [jane.doe@consensys.net](mailto:jane.doe@consensys.net)
        ```


    === "Rendered result"
        {{ email("jane.doe") }}

## FAQ

!!! question "Can this break my site?"
    Yes, it's code, so you will have to test it first.

    Keep it very simple, only formatting.

    Try to avoid complex logic, and even simple logic.

!!! question "Can I use a macro in an MkDocs HTML template?"
    No. But if you want write a template, you will have the Jinja2 syntax that can do the same,
    see [the contribution page](../howto/advanced/contributing.md).

!!! question "What's the best to reuse a macro in multiple sites?"
    Develop a [Pluglet](../../reference/pluglets) in the common Docker image instead.
