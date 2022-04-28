---
description: Documentation release process
---

# Documentation release process

For all ConsenSys documentation repositories, a new stable version of the documentation is released when a new version
of the corresponding software is released.

The process consists of one manual action and two automatically triggered actions:

## 1. Manually create a release on GitHub

When a new version of the software is released, the ConsenSys documentation team manually
[creates a release](https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository)
on the corresponding GitHub documentation repository.

Documentation versioning follows the same Calendar Versioning (CalVer) pattern as the software to help users match the
documentation version to the software version easily.

The GitHub release creation process tags the Git repository with the new version (for example, `21.1.4`).

## 2. Automatically build the documentation on RTD or AWS

When [Read the Docs (RTD)](https://readthedocs.org/) (if using the
[old system](../overview/index.md#old-documentation-system)) or [Amazon Web Services (AWS)](https://aws.amazon.com/) (if
using the [new system](../overview/index.md#new-documentation-system)) detects a new tag on a documentation repository,
RTD or AWS automatically generates the following documentation versions:

- **Latest** - Corresponds to the latest commit in the main branch of the documentation repository.
- **CalVer** - Corresponds to the tag in the main branch that was created during the release (for example, `21.1.4`).
- **Stable** - Corresponds to the last created tag.

RTD or AWS builds all three versions, all showing the same content from the same commit.

As contributors continue to work on the documentation, RTD or AWS rebuilds the latest version from the latest main
commit each time a new PR is merged, and the CalVer and stable versions remain behind latest.

## 3. Automatically activate the documentation version on RTD or AWS

For old-system sites, by default, RTD doesn't activate or publish new CalVer versions, but ConsenSys documentation has
custom rules for RTD to automatically do so.
If you have access to RTD as a ConsenSys documentation maintainer, you can view these automation rules and the history
of version activations in the **Admin** tab of the RTD documentation project.

For new-system sites, AWS automatically activates and publishes new CalVer versions.
