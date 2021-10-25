---
title: CLI spec
description: Dummy is a template doc project.
---

# Example command line

This reference describes the syntax of a sample Command Line Interface (CLI) options
and subcommands.

## Specifying options

You can specify options:

* On the command line
* As an [environment variable](#environment-variables)
* In a [configuration file](#configuration-file).

If you specify an option in more than one place, the order of priority is command line, environment
variable, configuration file.

### Environment variables

For each command line option, the equivalent environment variable is:

* Upper-case
* `_` replaces `-`

For example, set `--my-option` using the `MY_OPTION` environment variable.

### Configuration file

Set one option and value per line in a text file.

For each command line option, the equivalent environment variable is:

* no case change
* remove leading `--`

For example, set `--my-option=42` using the `my-option=42`.

## Options

To start the tool, run:

```bash
deep-thought [OPTIONS] [COMMAND]
```

### `my-option`

=== "Syntax"

    ```bash
    --my-option=<INTEGER>
    ```

=== "Example"

    ```bash
    --my-option=42
    ```

=== "Environment Variable"

    ```bash
    MY_OPTION=42
    ```

=== "Example Configuration File"

    ```bash
    my-option=42
    ```

This option provides the expected answer to life, universe and everything.
The default is `42`.

!!! tip
    The default can also be used to provide the result of $6 \times 7$
