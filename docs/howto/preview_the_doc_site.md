---
template: katacoda.html
title: Preview the doc site
description: How to preview the doc site
---

# How to preview the doc site

## Try the online demo

Learn how to preview using our Katacoda playgound.

No requirement at all to test this in the playgound.

<!-- The followin uses the Katacoda pluglet available for all sites using the build image. -->
{{ katacoda('consensys/doctools-doc-preview') }}

## Preview locally

The following is the same process as explained in the Katacoda playground but on your local computer.

### Requirements

Previewing a doc site requires to:

* have [Docker](https://docs.docker.com/get-docker/) installed

!!! important

    Previewing the doc site on your local machine will use the local port `8000`. If you already
    have a service running on this port, you have to stop it first.

### Pull latest Doctools Docker image

```bash
docker pull ghcr.io/consensys/doctools-builder:latest
```

### Run the container with Docker-compose

Change to your website project directory, for instance `doc.my-awesome-project` and
run the `docker-compose` command with `up` subcommand in a background process `-d`

```bash
cd doc.my-awesome-project
docker-compose up -d
```

You will now have a container running locally and serving the doc site.

Preview the doc site by opening [`http://0.0.0.0:8000`](http://0.0.0.0:8000)

![Doctools template site screenshot](doctools_template_site_screenshot.png)

Now, you can keep the website preview running in the background. Each time you will save a change
in your `.md` files or in the `mkdocs.yml` file, the site will rebuild and refresh to display the changes.

### Stop the preview

Still in your website project directory, run the following command:

```bash
docker-compose down
```

!!! tip
    If running Docker compose in the background uses too many resources for your computer (when the fan runs full speed),
    you can keep it down and only make it up when you have enough content to preview, check your site, make the changes
    and bring it down again. No need to keep it up all the time if you are fine with writing markdown without previewing
    too often.
