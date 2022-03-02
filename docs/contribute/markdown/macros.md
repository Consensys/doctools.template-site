---
description: How to use MkDocs macros
---

# Markdown macros

Documentation sites that use the [new system](../../overview/index.md#new-documentation-system) support macros, which
are scripts that make some tasks faster.
For example, use macros to format repeated content such as CLI option documentation.

You can write macros for a Markdown [page](#page-level-macros) or [site](#site-level-macros) and use them in your content.

!!! note "Notes"

    - You can't use macros in an [MkDocs HTML template](../../create/advanced/create-site-template.md), but the Jinja2
      syntax has the same functionality.

    - The best way to reuse a script across multiple sites is to develop a [pluglet](pluglets.md) in the common Docker
      image instead.

## Page-level macros

Macros written directly in a Markdown page are only available for the specific page.

!!! example "Example CLI option macro"

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

        === "Environment variable"

            ```bash
            {{ cli_to_env(name) }}={{example}}
            ```

        === "Configuration file"

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

        === "Environment variable"

            ```bash
            {{ cli_to_env(name) }}={{example}}
            ```

        === "Configuration file"

            ```bash
            {{name}}={{example}}
            ```

        {{description}}
        The default is `{{default}}`.

        {%- endmacro %}
        {% endraw %}
        ```

    === "Macro call code in Markdown"

        ```Django
        {% raw %}
        {{ cli_option('my-option','INTEGER', '42', 'This option provides the expected answer to life, universe and everything.', '42') }}
        {% endraw %}
        ```

    === "Rendered result"

        {{ cli_option('my-option','INTEGER', '42', 'This option provides the expected answer to life, universe and everything.', '42') }}

## Site-level macros

Site level macros are written in Python and are available for any page in the documentation site.

Macros must be written in the `main.py` file at the root of the project.

!!! example "Example email link macro"

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

    === "Macro call code in Markdown"

        ```Django
        {% raw %}
        {{ email("jane.doe") }}
        {% endraw %}
        ```

    === "Rendered result"

        {{ email("jane.doe") }}
