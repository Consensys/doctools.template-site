---
description: Overview of the ConsenSys technical documentation sites and systems
---

# ConsenSys technical documentation

This site contains information about contributing to ConsenSys technical documentation.
This site is also the template to [create new documentation sites](../create/create-doc-site.md).

If you have any questions about ConsenSys products or documentation, ask on [Discord](https://discord.com/invite/consensys).

## Documentation system overview

!!! Important

    There are currently two documentation systems, referred to as the [old system](#old-documentation-system) and the
    [new system](#new-documentation-system).
    We are currently in the process of migrating sites using the old system to the new system.
    Any [new site created](../create/create-doc-site.md) will use the new system.

At the root of each ConsenSys documentation repository, the `docs` directory contains all the site documentation, which
is generated into a static HTML website using [MkDocs](https://www.mkdocs.org/) and the
[Material for MkDocs](https://squidfunk.github.io/mkdocs-material/) theme.

The documentation is automatically updated using [webhooks](https://docs.readthedocs.io/en/stable/integrations.html)
linking GitHub to the site when you merge a pull request in the main branch of the ConsenSys documentation repository.

The system also detects tags in the GitHub repository and [makes the latest stable release and previous versions
available](../reference/release-process.md).

## Old documentation system

Documentation sites that use the old documentation system are hosted by [Read the Docs (RTD)](https://readthedocs.org/).

The following documentation repositories currently use the old system:

- [`doc.common`](https://github.com/ConsenSys/doc.common)
- [Tessera](https://github.com/Consensys/doc.tessera)
- [Teku](https://github.com/Consensys/doc.teku)
- [EthSigner](https://github.com/Consensys/doc.ethsigner)
- [Web3Signer](https://github.com/Consensys/doc.web3signer)
- [gnark](https://github.com/consensys/doc.gnark)
- [Quorum Key Manager](https://github.com/consensys/doc.quorum-key-manager)
- [ConsenSys Rollups](https://github.com/consensys/doc.rollups)
- Orchestrate (private)
- Quorum Plugins (private)

## New documentation system

Documentation sites that use the new documentation system are hosted by [Amazon Web Services (AWS)](https://aws.amazon.com/).
The new system also introduces some [new features](new-features.md).

The following documentation repositories use the new system:

- [Doctools](https://github.com/ConsenSys/doctools.template-site) (this site)
- [GoQuorum](https://github.com/consensys/doc.goquorum)
- ConsenSys NFT (private)
- ConsenSys zkEVM (private)
- MetaMask Fiat On-Ramp (private)
- Quorum Blockchain Service (private)
