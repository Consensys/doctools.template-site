---
title: What's new?
description: Dummy is a template doc project.
---

# What's new?

Version {{ version.number }}

The new documentation system provides a lot of features.

- Light and dark themes
- Site search widget
    - Search suggestions while typing
    - Search sharing
    - Searched terms highlighted on page
    - Search terms now able to be visible in analytics
- Last update of page on all sites
- New [home page design](index.md)
- Go back to top button, great for long pages like API docs
- Instant navigation (faster search and reduce bandwidth usage)
- Easy katacoda.com integration (other to come on demand)
- [Easy ReDoc REST API doc](examples/write_rest_api_reference.md) from a JSON or YAML spec (local or remote).
- Integration of YouTube videos
    - ![type:video](https://www.youtube.com/embed/ttdvxAOO50E)
- Simpler configuration file for contributors: only nav and redirects
- Only requires Docker to build (no more Python version issues)
- New consistent branding
- No Git Submodule anymore, everything is included in the Docker image: build, tests and preview.
- New version selector in the header (bye bye ugly RTD one)
- New language selector (only when translation exists)
- New hosting (bye bye RTD, hello AWS S3)
- Sites hosted under consensys.net/docs/[project name]/[language]/[version]
- Standard compliant sites accessibility
- Sticky navigation tabs
- Section indexes (no need to create an "overview" page anymore, see [the example section](examples/index.md))
- Home pages (like landing pages)
- Accessibility compliance tool (via AccessiBe)
- Per page TOC depth configuration
- New code linter for Markdown but also all other files, config files
- Github-pages PR preview and PR preview comment
- [Macros and filters](reference/macros.md)
- [Pluglets](reference/pluglets/index.md)

!!! note
    You can also look at [the features list on the GitHub repos](https://github.com/ConsenSys/doctools.template-site/discussions/13) for an overview of what's still to be added and
    to participate to this list and add your ideas.
