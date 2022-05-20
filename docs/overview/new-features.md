---
description: Features introduced in the new documentation system
---

# New documentation system features

The new documentation system introduces the following new features and changes from the old system:

- Light and dark themes
- Site search widget
    - Search suggestions while typing
    - Search sharing
    - Searched terms highlighted on page
    - Search terms now visible in analytics
- New version selector in the header
- New language selector (only when a translation exists)
- Last update of page
- Sticky navigation tabs
- Home pages (like landing pages) and new [home page design](../index.md)
- Section index pages
- **Back to top** button
- Instant navigation (faster search and reduced bandwidth usage)
- [Macros](../contribute/markdown/macros.md) and [pluglets](../contribute/markdown/pluglets.md)
- Integrated [ReDoc REST API documentation](../examples/write_rest_api_reference.md) from a JSON or YAML specification
  (local or remote)
- [Integration of YouTube videos](../contribute/markdown/extensions.md#videos)
- Per page table of contents depth configuration
- Simpler [configuration file](../contribute/markdown/configure-and-format.md#mkdocs-configuration) for contributors
- No [common Git submodule](../contribute/use-common-submodule.md): build, tests, and preview are included in the
  Docker image
- New hosting with AWS S3 instead of Read the Docs
- Sites hosted under `consensys.net/docs/<project name>/<language>/<version>` instead of
  `docs.<project name>.consensys.net/<language>/<version>`
- Accessibility compliance tool (via AccessiBe)
- New code linter for Markdown and all other files
- GitHub Pages PR preview and PR preview comment

!!! note

    You can see the [features list](https://github.com/ConsenSys/doctools.template-site/discussions/13) for an overview
    of what's still to be added and add your ideas.
