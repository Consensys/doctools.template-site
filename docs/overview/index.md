---
description: Overview of the ConsenSys technical documentation sites and systems
---

# ConsenSys technical documentation overview

If you have any questions about ConsenSys products or documentation, ask us on [Discord](https://discord.gg/6cfyqRGbzq).

## Old system

The `docs` directory at the root of each ConsenSys documentation repository contains all the site documentation, which is generated into a static HTML website using [MkDocs] and the [Material for MkDocs] theme, and hosted by [Read the Docs].

The documentation is automatically updated using [webhooks](https://docs.readthedocs.io/en/stable/integrations.html) linking GitHub to the Read the Docs site when you merge a pull request (PR) in the master branch of the ConsenSys documentation repository.

The system also detects tags in the GitHub repository and [makes the latest stable release and previous versions available](Documentation-release-process).

Documentation sites that use the old system:

- [Tessera](https://github.com/Consensys/doc.tessera)
- [Teku](https://github.com/Consensys/doc.teku)
- [EthSigner](https://github.com/Consensys/doc.ethsigner)
- [Web3Signer](https://github.com/Consensys/doc.web3signer)
- [Gnark](https://github.com/consensys/doc.gnark)
- [Quorum Key Manager](https://github.com/consensys/doc.quorum-key-manager)
- [ConsenSys Rollups](https://github.com/consensys/doc.rollups)
- [Orchestrate](https://github.com/Consensys/doc.orchestrate) (private)
- [Quorum Plugins](https://github.com/Consensys/doc.quorumplugins) (private)
- [Quorum Blockchain Service](https://github.com/consensys/doc.qbs) (private)

## New system

Documentation sites that use the new system:

- [Doctools](https://consensys.net/docs/doctools/en/stable/) (this site)
- [GoQuorum](https://consensys.net/docs/goquorum/en/stable/)
