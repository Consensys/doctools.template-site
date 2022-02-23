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
- Last update of page on all sites
- Home pages (like landing pages) and new [home page design](../index.md)
- **Back to top** button
- Instant navigation (faster search and reduced bandwidth usage)
- Easy [Katacoda] integration
- [Easy ReDoc REST API documentation] from a JSON or YAML specification (local or remote).
- Integration of YouTube videos using `![type:video](<YouTube link>)`
- Simpler configuration file for contributors: only navigation and redirects
- Only requires Docker to build (no more Python version issues)
- New consistent branding
- No [commmon Git submodule](../contribute/use-common-submodule.md): build, tests, and preview are included in the
  Docker image
- New version selector in the header
- New language selector (only when a translation exists)
- New hosting with AWS S3 instead of Read the Docs
- Sites hosted under `consensys.net/docs/<project name>/<language>/<version>` instead of
  `docs.<project name>.consensys.net/<language>/<version>`
- Standard compliant sites accessibility
- Sticky navigation tabs
- Section index pages
- Accessibility compliance tool (via AccessiBe)
- Per page table of contents depth configuration
- New code linter for Markdown and all other files
- GitHub-pages PR preview and PR preview comment
- [Macros and filters]
- [Pluglets]

!!! note

    You can see the [features list](https://github.com/ConsenSys/doctools.template-site/discussions/13) for an overview
    of what's still to be added and add your ideas.
