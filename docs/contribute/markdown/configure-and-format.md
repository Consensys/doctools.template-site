---
description: How to configure MkDocs and format Markdown
---

# Configure and format Markdown

[MkDocs](https://www.mkdocs.org/) is a Python tool that generates the static HTML documentation site that is published.

ConsenSys documentation uses the [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/) theme to render the
HTML pages.
It also comes with useful [extensions](extensions.md).

## MkDocs configuration

For [sites using the old documentation system](../../overview/index.md#documentation-sites-that-use-the-old-system),
MkDocs is configured in the `mdkocs.yml` file at the root of the repository.
This file configures:

- Site metadata and variables.
- Theme.
- Page navigation.
- Extensions.
- Plugins.
- Page redirects.

For [sites using the new documentation system](../../overview/index.md#documentation-sites-that-use-the-new-system), the
MkDocs configuration is separated into several `mkdocs.*.yml` files.

**If you add pages to the documentation** (rather than updating existing pages), add your new pages to the `nav` section
of `mkdocs.yml` or, if using the new system, to `mkdocs.navigation.yml`.

**If you move an existing page to another location or rename it**, the public path changes.
Create a redirect in the `redirects` section of `mkdocs.yml` or, if using the new system, in `mkdocs.redirects.yml`.

## Format Markdown for documentation

Having a standard for formatting Markdown helps writers and reviewers navigate the code and review changes.
The following are rules for formatting Markdown in ConsenSys documentation:

- Each Markdown file must contain a header composed of
  [metadata](https://squidfunk.github.io/mkdocs-material/setup/extensions/python-markdown/#metadata) and limited by
  three dashes (`-`).

    !!! example

        ```markdown
        ---
        title: Installation overview
        description: Overview and requirements to install the software
        ---
        ```

- For the rest of the Markdown code, each line should be (roughly)
  [limited to 100 columns long](https://google.github.io/styleguide/javaguide.html#s4.4-column-limit) to be readable on
  any editor.
  You'll receive a warning, not an error, if you exceed 100 columns.
  Lines must be wrapped without cutting the line in the middle of a word.
  One line break displays as a space.

    !!! example

        ```markdown
        In this example, this first sentence exceeds 100 characters, so we recommend wrapping it into
        multiple lines.
        One line break displays as a space, so this Markdown renders as one paragraph without line breaks.
        We also recommend starting each new sentence on a new line, even if the previous line didn't reach
        100 columns, for easy reviewing.
        You can set a column marker in your text editor as a heuristic.
        ```

- Use only one first level title (prefixed with a single `#`) on a page.

- No HTML markup can be used inside a Markdown document.
  There are many [extensions](extensions.md) you can use that have similar capabilities without HTML.

    There's one exception where HTML is tolerated: tables that are too complex and already exist.
    If possible, keep the table simple without any elements other than `table`, `tr`, and `td`.

- If using Markdown tables, format them so they're also readable in the source code.
  For example, add an appropriate number of spaces to align the columns in the source code.

    !!! example

        ```markdown
        | Syntax    | Description |
        | --------- | ----------- |
        | Name      | Title       |
        | Paragraph | Text        |
        ```

    You can quickly formate tables by using [Markdown Table Formatter](http://markdowntable.com/) or create tables from
    scratch using [Tables Generator](https://www.tablesgenerator.com/markdown_tables).

- [Code samples](extensions.md#code-samples) should be written so that users can copy and paste them with minimal
  editing and have them work as expected.
