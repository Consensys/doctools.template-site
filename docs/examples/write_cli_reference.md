---
title: CLI spec
description: Dummy is a template doc project.
---

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
    {{ cli_to_env(name,env_prefix) }}={{example}}
    ```

=== "Configuration file"

    ```bash
    {{name}}={{example}}
    ```

{{description}}
The default is `{{default}}`.

{%- endmacro %}

# Example command-line

This reference describes the syntax of a sample Command-Line Interface (CLI) options
and subcommands.

## Specifying options

You can specify options:

* On the command-line
* As an [environment variable](#environment-variables)
* In a [configuration file](#configuration-file).

If you specify an option in more than one place, the order of priority is command line, environment
variable, configuration file.

### Environment variables

For each command-line option, the equivalent environment variable is:

{% set option_name = "--my-option" %}
{% set env_prefix = "ENVPREFIX" %}

* remove leading `--`
* Upper-case
* `_` replaces `-`
* add the `{{env_prefix}}` prefix

For example, set CLI option `{{ option_name }}` using the `{{ cli_to_env(option_name,env_prefix) }}` environment variable.

### Configuration file

Set one option and value per line in a text file.

For each command-line option, the equivalent environment variable is:

* no case change
* remove leading `--`

For example, set `--my-option=42` using the `my-option=42`.

## Options

To start the tool, run:

```bash
my-command [OPTIONS] [COMMAND]
```

{{ cli_option('my-option','INTEGER', '42', 'This option provides the expected answer to life, universe and everything.', '42') }}

!!! tip
    The default can also be used to provide the result of $6 \times 7$

{{ cli_option('my-other-option','STRING', 'hello world', 'This option provides the base code example.', 'Hello World') }}
