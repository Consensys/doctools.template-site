---
description: How to preview documentation using the old system
---

# Preview documentation using the old system

Preview documentation sites that use the [old system](../overview/index.md#old-documentation-system)
on your [local machine](#preview-locally) and on [Read the Docs](#preview-on-read-the-docs).

## Preview locally

We recommend previewing your work locally before pushing your changes in a PR.
Since the final documentation is built with MkDocs, you must build the documentation locally with MkDocs to ensure the
Markdown is correctly rendered.
To preview the documentation locally:

1. [Install Python 3](https://www.python.org/downloads/).

1. Create a virtual environment for the project:

    ```bash
    python3 -m venv env
    ```

1. Activate the virtual environment:

    ```bash
    source env/bin/activate
    ```

    An `(env)` now appears at the beginning of your prompt.

1. Install all the required dependencies in this virtual environment:

    ```bash
    pip install -r common/build_tools/requirements.txt
    ```

1. Run the following command in the project directory:

    ```bash
    mkdocs serve
    ```

1. In the output of this command, follow the link displayed on the line that looks like the following:

    ```bash
    [I 190206 18:48:47 server:298] Serving on http://127.0.0.1:8000
    ```

    In this case, go to `http://127.0.0.1:8000`.

    You can let this server run while you work on the documentation.
    It updates the local website automatically when you save changes in your Markdown files.

1. Deactivate the virtual environment if you work on another Python project, by running `deactivate`.
    You can preview the same documentation site again starting from step 3 and skipping step 4, until you update Python.

## Preview on Read the Docs

When you create a PR on a documentation repository, the PR triggers [CircleCI](https://circleci.com/) checks to verify
links, Markdown syntax, writing style, and more.
The documentation is also built on [Read the Docs (RTD)](https://readthedocs.org/) as a PR preview.

You can find the link to this preview in the checklist at the bottom of your PR page.
The preview only works for registered and permitted RTD users.
Ask for help on [Discord](https://discord.com/invite/consensys) if needed.

![PR checklist containing preview link](../assets/images/rtd_pr_preview.png)
