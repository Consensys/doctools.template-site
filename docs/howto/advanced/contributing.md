---
title: Contributing to Doctools
description: Contributing to Doctools
---

# Contributing to Doctools

Contributing to the Doctool documentation system can be done by using the [Doctools action builder].

## Requirement

- have [Docker](https://docs.docker.com/get-docker/) installed

## Docker settings

Docker configuration will change the speed at which your site preview is rebuilt.
To get the best from the system, consider having the following settings[^1]:

- 6 CPUs
- 6GB RAM
- 1GB swap

!!! warning
    If you are using a macOS machine, do not activate the experimental Docker Desktop "Use the new Virtualization framework". It will slow down builds by at least 3 times. A normal build time is around 5 seconds for this website for instance.

[^1]:
    These settings were tested on a MacBook Pro (15-inch, 2018) - 2,6 GHz 6-Core Intel Core i7 - 16 GB 2400 MHz DDR4.

## Modify or create new templates

The Doctools system enables to contribute to the templates by updating them or creating new ones.Doctools

- Update a template in case of a bug or to add a new feature that should be used by all doc sites already using this template
- Create a new template for a new need, a new tool or a variant only used on some sites

Creating templates is done in the [Doctools action builder] repository in the `/common/custom_theme` folder.

!!! warning
    This process is not for users who only want to preview their doc site.
    If you want to preview, please refer to [the preview documentation](../preview_the_doc_site.md).

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
        container_name: mkdocs-serve-dev-${PROJECT:-project}
        ports:
          - "0.0.0.0:8000:8000"
        image: ghcr.io/consensys/doctools-builder:${DOCTOOLS_IMAGE_VERSION:-dev}
        build:
          context: ../doctools.action-builder/
        working_dir: /workspace/
        env_file: .env.dev
        command: ["serve", "--watch-theme" ,"--dev-addr", "0.0.0.0:8000"]
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
docker compose -f docker-compose.dev.yml --env-file ./.env.dev up
```

Then open [`http://0.0.0.0:8000`](http://0.0.0.0:8000){: target="_blank} in your browser and navigate the preview.

### Stropping the preview

To stop the service, type ++ctrl+c++ and then remove containers by running

```bash
docker compose down mkdocs
```

### Reloading on changes

If you keep the Docker compose service running,
the website preview will reload and display changes automatically for:

- content (all `.md` files, modification, deletions or new pages if added to navigation)
- configuration (changes on entries in `mkdocs.yml` and all `mkdocs.*.yml`)
- theme templates and assets ( all files in the ``../doctools.action-builder/common/custom_theme` directory)

!!!important
    If you make changes on the `.env.dev` or assets outside of your repos `docs` folder,
    the system is not yet able to reload automatically and you will have to restart the docker-compose service.

    Run:

    ```bash
    docker compose restart mkdocs
    ```

[Doctools action builder]: https://github.com/ConsenSys/doctools.action-builder
