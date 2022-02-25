---
description: How to create a new site template
---

# Update or create a site template

The following guidelines explain how to update or create a documentation site template.
[Documentation sites that use the new system](../../overview/index.md#documentation-sites-that-use-the-new-system) use this
Doctools template.

You might update the template because of a bug or to add a new feature that should be used by all documentation sites
that use the template.

You might create a new template for a new need, a new tool, or a variant only used on some sites.

## Prerequisites

You must have [Docker](https://docs.docker.com/get-docker/) installed.

The Docker configuration affects the speed at which your [site preview](#preview-the-template) is rebuilt.
For example, a normal build time for this Doctools site is around five seconds.

We recommend the following configuration:

- 6 CPUs
- 6GB RAM
- 1GB swap

!!! warning

    If using macOS, don't activate the experimental Docker Desktop Virtualization framework.
    It slows down builds by at least three times.

## Steps

1. Clone the [template repository](https://github.com/ConsenSys/doctools.template-site.git) on your local machine:

    ```bash
    git clone https://github.com/ConsenSys/doctools.template-site.git
    ```

1. Clone the [builder repository](https://github.com/ConsenSys/doctools.action-builder.git) on your local machine in the
    same directory as the template repository:

    ```bash
    git clone https://github.com/ConsenSys/doctools.action-builder.git
    ```

    The resulting directory tree is:

    ```text
    your-base-dir
    ├── doctools.template-site
    └── doctools.action-builder
    ```

1. Pull latest Docker image:

    ```bash
    docker pull ghcr.io/consensys/doctools-builder:latest
    ```

    !!! note

        Pull the latest Docker image when using the `latest` Docker image tag.

1. Create a new file name `docker-compose.dev.yml` in the `doctools.template-site` directory with the following content:

    !!! example "`docker-compose.dev.yml`"

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
            command: ["serve", "--watch-theme", "--dirtyreload" ,"--dev-addr", "0.0.0.0:8000"]
            volumes:
              - type: bind
                source: .
                target: /workspace
              - type: bind
                source: ../doctools.action-builder/common
                target: /common
        ```

1. In the `doctools.template-site` directory, make a copy of the `.env.template` file, naming it `.env.dev`:

    ```bash
    cp .env.template .env.dev
    ```

    You can make the following changes to the development environment variables:

    - `DEBUG=true|false` - Remove or set to `false` to hide debug comments, set to `true` to show debug comments inside
      the HTML source code.
      The default is `false`.
    - `MINIFY=true|false` - Remove or set to `false` to generate readable HTML source code.
      The default is `true`.
      If set to `true`, debug comments in the source code are hidden.
    - `PREBUILD_INDEX=true|false` - Remove or set to `false` to prevent the search index to be generated at each build
      and speed up the build.
      The default is `true` as it's useful for production.
    - `VERSION=string` - Set to a specific number to simulate a version locally.
      This value is otherwise initialized by CI.

## Preview the template

1. To preview the documentation site template locally, go to your site directory and run:

    ```bash
    docker compose -f docker-compose.dev.yml --env-file ./.env.dev up
    ```

    You can see the preview at `http://0.0.0.0:8000`.

1. If you keep the Docker compose service running, the site preview automatically reloads and displays most changes.

    If you make changes to `.env.dev` or assets outside of the `docs` folder, the system doesn't reload automatically and
    you must restart Docker compose to view the changes:

    ```bash
    docker compose restart mkdocs
    ```

1. To stop the service, press ++ctrl+c++.
    Remove containers by running:

    ```bash
    docker compose down mkdocs
    ```

[Doctools action builder]: https://github.com/ConsenSys/doctools.action-builder
*[CI]: Continuous Integration
