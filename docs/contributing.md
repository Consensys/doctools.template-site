---
title: Contributing
description: Doc contribution guidelines
---

# Contributing

Contributing to the new documentation.

## Preview the doc with Docker compose

The project already has a `docker-compose.yml` file.

The only requirement is for you to have Docker installed on your computer.

!!!important
    If you are using the latest docker image, remember to pull the latest version before previewing!

    ```bash
    docker pull ghcr.io/consensys/doctools-builder:latest
    ```

### Starting the preview

To preview the doc site locally, go to your doc site code source directory and run:

```bash
docker compose up -d
```

Then open [`http://0.0.0.0:8000`](http://0.0.0.0:8000) in your browser and navigate the preview.

### Stropping the preview

To stop and remove containers, run
```bash
docker compose down
```

### Reloading on changes

If you keep the Docker compose service running in background,
the website preview will reload and display changes automatically for:

- content (all `.md` files, modification, deletions or new pages if added to navigation)
- configuration (changes on entries in `mkdocs.yml`)

!!!important
    If you make changes on the `.env` file, the system is not yet able to reload automatically
    and you will have to restart the docker-compose service. Run:

    ```bash
    docker compose restart
    ```
