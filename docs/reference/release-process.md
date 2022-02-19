---
description: Documentation release process
---

# Documentation release process

For all ConsenSys documentation repositories that use this common repository, a new stable version of the documentation is released when a new version of the corresponding software is released.

The process consists of one manual action and two automatically triggered actions:

## 1. Manually create a release on GitHub.

When a new version of the software is released, the ConsensSys documentation team manually [creates a release](https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository) on the corresponding GitHub documentation repository.

Documentation versioning follows the same Calendar Versioning (CalVer) pattern as the software to help users match the documentation version to the software version easily.

The GitHub release creation process tags the Git repository with the new version (for example, `21.1.4`).

## 2. Automatically build the documentation on Read the Docs.

When [Read the Docs (RTD)](https://readthedocs.org/) detects a new tag on a documentation repository, RTD automatically generates the following documentation versions:

- **Latest** - Corresponds to the latest commit in the master branch of the documentation repository.
- **CalVer** - Corresponds to the tag in the master branch that was created during the release (for example, `21.1.4`).
- **Stable** - Corresponds to the last created tag.

RTD builds all three versions, all showing the same content from the same commit.

As contributors continue to work on the documentation, RTD rebuilds the latest version from the latest master commit each time a new PR is merged, and the CalVer and stable versions remain behind latest.

## 3. Automatically activate the documentation version on Read the Docs.

By default, new documentation CalVer versions are not activated and not public on RTD, but ConsenSys documentation has custom rules for RTD to automatically activate and publish CalVer versions.

If you have access to RTD as a ConsenSys documentation maintainer, you can view these automation rules and the history of version activations in the **Admin** tab of the RTD documentation project.
