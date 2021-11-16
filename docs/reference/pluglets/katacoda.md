# Katacoda pluglet for mkdocs-macros

This is a Katacoda **pluglet** for mkdocs-macros.

It helps adding Katacoda code into Markdown pages without having to write HTML.

See https://github.com/ConsenSys/doc.katacoda/ for ConsenSys Scenarios source code or https://www.katacoda.com/consensys for the rendered versions

See https://www.katacoda.com/create and https://github.com/katacoda/scenario-examples for inspiration.

## Use it

In your markdown, write the following:

```markdown
{{ katacoda('scenario', 'color', 'style', hide_intro, hide_finish) }}
```
Parameters are the following:

- scenario (required): the name of the Katacoda scenario to load. It's in the format `account/scenario`.
- color (optional): the hexadecimal color (no need to add `#`). Default is `213fa4`
- style (optional): the CSS style to make the playground fit your doc. Default is `height: 600px;`
- hide_intro (optional): true or false to hide or keep the intro page. Default is false.
- hide_finish (optional): true or false to hide or keep the finish page. Default is false.
- id (optional): an integer if you have multiple Katacoda playgrounds on the same page. Default is 1.

Example using defaults:

```markdown
{{ katacoda('consensys/doctools-doc-preview') }}
```

Example with optional parameters:

```markdown
{{ katacoda('consensys/doctools-doc-preview', 'AABBCC', 'height: 800px;', false, true, 42) }}
```
