---
title: Getting started
description: Getting started with a new site
---

# Getting started with a new site

## Step 1 - Contact the doc team

The best way to start is to contact the doc team on our #documentation ConsenSys Slack channel and ask for a demo.
We will support you un creating and configuring your doc site using Doctools.

The doc team will also help you to get ready:

!!! info "Creating a new doc site from the template requires to:"

    - [x] have access to [Github](https://github.com/).
    - [x] have [the tools to handle Git repositories](https://git-scm.com/downloads/guis).
    - [x] have the right to create a new repository in the [ConsenSys Github organisation](https://github.com/ConsenSys).
    - [x] have a modern text editor[^1], preferably with MarkDown and YAML support.
    - [x] have [Docker](https://docs.docker.com/get-docker/) installed
    - [x] have access to [AWS](https://aws.amazon.com/) to publish the site (or ask the docOps team[^2] to configure credentials for you)

    If you want to know more about the detailed process, read the [how to setup a doc site page](howto/setup_new_doc_repos).

## Step 2 - Learn how to write MarkDown

All the Doctools doc sites content is written using MarkDown. BUt we added some sugar and we allow some
more flexible syntax. You can start browsing these features on our [MarkDown reference page](reference/markdown.md).

## Step 3 - Write your doc

Once your doc site is created and configured, that you made yourself familiar with [Doctools MarkDown syntax](reference/markdown.md),
you can start writing your doc!

Our doc team is here to help you, not only to start the doc, but also if you need a review of your content.

Finally, this template doc site is also built with Doctools. If reading the Doctool doc is not enough for you, feel free to look at [the source code](https://github.com/Consensys/doctools.template-site/) and pick code pieces for the features that you need!

[^1]:
    UFT-8 and linux end-of-lines capable.
    We use intelliJ, Atom, Sublime but feel free to use your favourite one.
    It has to be raw text capable, no Word or Google Docs

[^2]:
    Ask on ConsenSys Slack #documentation channel.
