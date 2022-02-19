---
description: How to use the common submodule
---

# Use the common submodule

Every [listed ConsenSys documentation repository](#consensys-documentation-repositories) includes this common repository as a [Git submodule](https://git-scm.com/book/en/v2/Git-Tools-Submodules).
This repository contains templates and scripts used by each documentation repository, and is a single place to update.

Apart from the usual license and `README` files at the root of the repository, this repository includes:

- [`build_tools`](https://github.com/ConsenSys/doc.common/tree/master/build_tools) directory - Contains all the [CircleCI](https://circleci.com/)-related scripts and configuration files used to verify links, Markdown syntax, writing style, and more.
  - [`scripts`](https://github.com/Consensys/doc.common/tree/master/build_tools/scripts) subdirectory - Contains shortcut scripts to run the CI jobs locally to test your changes.
  - [`package.json`](https://github.com/ConsenSys/doc.common/blob/master/build_tools/package.json) and [`package-lock.json`](https://github.com/ConsenSys/doc.common/blob/master/build_tools/package-lock.json) - Files that must be in the documentation project root.
    The real files are in the common repository and symbolic links point to them from the documentation project root.
- [`custom_theme`](https://github.com/Consensys/doc.common/tree/master/custom_theme) directory - Contains the [MkDocs](https://www.mkdocs.org/) custom HTML templates, CSS and JS scripts, and images for the ConsenSys documentation custom design.

## Retrieve the submodule

When you clone a ConsenSys documentation repository, use the `--recursive` option to retrieve the submodule.

```bash
git clone --recursive <FORKED-REPO>
```

If you didn't use the `--recursive` option when first cloning the repository, or if you removed the common submodule directory and links, you can fix this and update your local repository by running [`git submodule update --init`](https://git-scm.com/docs/git-submodule#Documentation/git-submodule.txt-update--init--remote-N--no-fetch--no-recommend-shallow-f--force--checkout--rebase--merge--referenceltrepositorygt--depthltdepthgt--recursive--jobsltngt--no-single-branch--ltpathgt82308203).

## Update repositories to the latest submodule version

When someone updates the code files in this common repository, you must update any forked documentation repositories to the latest common submodule version in order to incorporate the common changes into your repository.
You can do this by running the following commands in your project's root directory:

```bash
cd common
git checkout master && git pull
cd ..
git add common
git commit -m "updating submodule to latest"
```
