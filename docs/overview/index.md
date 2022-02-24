---
description: Overview of the ConsenSys technical documentation sites and systems
---

# ConsenSys technical documentation

This site contains information about and tools for contributing to ConsenSys technical documentation.
This site is also the template to [create new documentation sites](../create/create-doc-site.md).

## Documentation system overview

At the root of each ConsenSys documentation repository, the `docs` directory contains all the site documentation, which
is generated into a static HTML website using [MkDocs](https://www.mkdocs.org/) and the
[Material for MkDocs](https://squidfunk.github.io/mkdocs-material/) theme.

[Documentation sites that use the old documentation system](#documentation-sites-that-use-the-old-system) are hosted by
[Read the Docs (RTD)](https://readthedocs.org/).

[Documentation sites that use the new documentation system](#documentation-sites-that-use-the-new-system), which contain
[new features](new-features.md), are hosted by [Amazon Web Services (AWS)](https://aws.amazon.com/).
Any [new site created](../create/create-doc-site.md) will use the new system.

The documentation is automatically updated using [webhooks](https://docs.readthedocs.io/en/stable/integrations.html)
linking GitHub to the RTD or AWS site when you merge a pull request in the master branch of the ConsenSys
documentation repository.

The system also detects tags in the GitHub repository and [makes the latest stable release and previous versions
available](../reference/release-process.md).

If you have any questions about ConsenSys products or documentation, ask us on [Discord](https://discord.gg/6cfyqRGbzq).

## Documentation sites that use the old system

- [`doc.common`](https://github.com/ConsenSys/doc.common)
- [Tessera](https://github.com/Consensys/doc.tessera)
- [Teku](https://github.com/Consensys/doc.teku)
- [EthSigner](https://github.com/Consensys/doc.ethsigner)
- [Web3Signer](https://github.com/Consensys/doc.web3signer)
- [Gnark](https://github.com/consensys/doc.gnark)
- [Quorum Key Manager](https://github.com/consensys/doc.quorum-key-manager)
- [ConsenSys Rollups](https://github.com/consensys/doc.rollups)
- Orchestrate (private)
- Quorum Plugins (private)
- Quorum Blockchain Service (private)

## Documentation sites that use the new system:

- [Doctools](https://consensys.net/docs/doctools/en/stable/) (this site)
- [GoQuorum](https://consensys.net/docs/goquorum/en/stable/)
