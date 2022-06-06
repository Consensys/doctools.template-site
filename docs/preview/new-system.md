---
template: katacoda.html
description: How to preview documentation using the new system
---

# Preview documentation using the new system

Preview documentation sites that use the [new system](../overview/index.md#new-documentation-system)
on your [local machine](#preview-locally) and on [GitHub Pages](#preview-on-github-pages).

## Preview locally

We recommend previewing your work locally before pushing your changes in a PR.
With Docker running, follow these steps to preview your documentation site locally.

!!! note

    Previewing the site locally uses the port `8000`.
    If you already have a service running on this port, stop it first.

1. Pull the latest Doctools Docker image:

    ```bash
    docker pull ghcr.io/consensys/doctools-builder:latest
    ```

1. In the project directory, run:

    ```bash
    docker-compose up -d
    ```

    You now have a container running locally and serving the documentation site.

1. Preview the site at `http://0.0.0.0:8000`.

    ![Doctools template site screenshot](../assets/images/doctools_template_site_screenshot.png)

    You can keep the website preview running in the background.
    Each time you save changes, the site rebuilds and refreshes to display the changes.

1. Stop the preview by running `docker-compose down` in the project directory.
    You can preview the same documentation site again starting from step 3.

### Try the online demo

The following interactive tutorial demonstrates previewing documentation locally.

{{ katacoda('consensys/doctools-doc-preview') }}

## Preview on GitHub Pages

When you create a PR on a documentation repository, the PR triggers checks to verify links, Markdown syntax, and more.
The documentation is also built on [GitHub Pages](https://pages.github.com/) as a PR preview.

You can find the link to this preview in the latest comment from the `github-actions` bot.

![GitHub bot comment containing preview link](../assets/images/github_pages_pr_preview.png)
