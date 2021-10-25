---
title: Contributing to Doctools
description: Contributing to Doctools
---

# Contributing to Doctools

Contributing to the Doctool documentation system can be done by using the [Doctools action builder].

## Requirement

- have [Docker](https://docs.docker.com/get-docker/) installed

## Modify or create new templates

The Doctools system enables to contribute to the templates by updating them or creating new ones.Doctools

- Update a template in case of a bug or to add a new feature that should be used by all doc sites already using this template
- Create a new template for a new need, a new tool or a variant only used on some sites

Creating templates is done in the [Doctools action builder] repository in the `/common/custom_theme` folder.

!!! warning
    This process is not for users who only want to preview their doc site.
    If you want to preview, please refer to [the preview documentation](../preview_the_doc_site/index.md).

To be able to develop templates, you will have to run that repos alongside the template repos.

### Prepare the workspace

1. Clone the template repository from [https://github.com/ConsenSys/doctools.template-site.git](https://github.com/ConsenSys/doctools.template-site.git) on your local machine.

   ```bash
    git clone https://github.com/ConsenSys/doctools.template-site.git
    ```

1. Clone the builder repository from [https://github.com/ConsenSys/doctools.action-builder.git](https://github.com/ConsenSys/doctools.action-builder.git) on your local machine at the same level as the template repos.

    ```bash
    git clone https://github.com/ConsenSys/doctools.action-builder.git
    ```

1. Resulting directory tree is:

    ```text
    your-base-dir
    ├── doctools.template-site
    └── doctools.action-builder
    ```

1. Pull latest docker image

    ```bash
    docker pull ghcr.io/consensys/doctools-builder:latest
    ```

!!!important
    If you are using the `latest` docker image tag, remember to pull the latest version before to have the latest version!

    ```bash
    docker pull ghcr.io/consensys/doctools-builder:latest
    ```

### Create the `docker-compose.dev.yml` file

!!! question "Why do I have to create this manually?"
    This file will not be committed and is only useful for advanced usage,
    we don't want it to interfere with every day content editing.

Create a new file in your `doctools.template-site` directory with the following content:

!!! Example "`docker-compose.dev.yml` file"

    ```yml
    ---
    version: '3.2'
    services:
      mkdocs:
        container_name: mkdocs-serve-dev
        ports:
          - "0.0.0.0:8000:8000"
        image: ghcr.io/consensys/doctools-builder:${DOCTOOLS_IMAGE_VERSION:-latest}
        working_dir: /workspace/
        env_file: .env.dev
        volumes:
          - type: bind
            source: .
            target: /workspace
          - type: bind
            source: ../doctools.action-builder/common
            target: /common
    ```

### Create the `.env.dev` file

Copy your `.env` file to a `.env.dev` file

!!! tip
    This file will not be committed and you will be able to test values in it without breaking your site.

### Starting the preview

To preview the doc site locally, go to your doc site code source directory and run:

```bash
docker compose -f docker-compose.dev.yml up-d
```

Then open [`http://0.0.0.0:8000`](http://0.0.0.0:8000){: target="_blank} in your browser and navigate the preview.

### Stropping the preview

To stop and remove containers, run
```bash
docker compose -f docker-compose.dev.yml down
```

### Reloading on changes

If you keep the Docker compose service running in background,
the website preview will reload and display changes automatically for:

- content (all `.md` files, modification, deletions or new pages if added to navigation)
- configuration (changes on entries in `mkdocs.yml`)

!!!important
    If you make changes on the `.env.dev` or any HTML template file or assets outside of your repos `docs` folder,
    the system is not yet able to reload automatically and you will have to restart the docker-compose service.

    Run:

    ```bash
    docker compose -f docker-compose.dev.yml restart
    ```

[Doctools action builder]: https://github.com/ConsenSys/doctools.action-builder
