---
description: Documentation contribution guide
---

# Contribute to the documentation

The following guidelines explain how to contribute to existing ConsenSys documentation repositories.
You can also [create new documentation sites](../create/create-doc-site.md).

## Your first contribution

Start by choosing a [documentation repository](../overview/index.md#documentation-system-overview) and looking for
issues that have a `Good First Issue` label.
`Good First Issues` might require only a few lines of documentation, or have enough information for a newcomer to easily
document.

When you've identified an issue you want to work on, assign it to yourself, or message the ConsenSys team on that project's channel on
[Discord](https://discord.com/invite/consensys) and a maintainer will assign it to you.

## Contribution workflow

The documentation contribution workflow consists of
[submitting pull requests (PRs)](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)
using Git[^1].
This facilitates social contribution, easy testing, and peer review.

To contribute changes:

1. [Clone](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository)
    the documentation repository in which you want to make a change to your computer.
    For repositories using the [old system](../overview/index.md#old-documentation-system), add the
    `--recursive` option to retrieve the [common submodule](use-common-submodule.md).

    ```bash
    git clone [--recursive] <FORKED-REPO>
    ```

1. [Add an upstream remote](https://docs.github.com/en/github/collaborating-with-pull-requests/working-with-forks/configuring-a-remote-for-a-fork).

    ```bash
    git remote add upstream <ORIGINAL-REPO>
    ```

1. [Create and checkout a topic branch](https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging),
    naming it appropriately.
    We recommend using the issue number and short description, which is a reminder to fix only one issue in a PR.
    For example, `183-doc-cli-option`.

    ```bash
    git checkout -b <ISSUE-NUM>-<ISSUE-DESC>
    ```

1. Open the documentation repository in a text editor of your choice, for example
    [IntelliJ](https://www.jetbrains.com/idea/), and make your changes.
    Refer to the [documentation style guide](style-guide.md) and the
    [MkDocs and Markdown guide](markdown/index.md) when making documentation changes.

1. [Preview your changes with MkDocs](../preview/old-system.md) to check that the changes render correctly.

1. Add and commit your changes, using a clear commit message.
    Push your changes to your remote fork (usually named `origin`).

    ```bash
    git add *
    git commit -m "<COMMIT-MESSAGE>"
    git push origin
    ```

1. Navigate to the original ConsenSys documentation repository, and you'll see a banner prompting you to create a PR
    with your recent changes.
    Create a PR, filling out the description according to the template.
    <!-- markdown-link-check-disable-next-line -->
    Remember to [link the issue](https://help.github.com/en/github/managing-your-work-on-github/linking-a-pull-request-to-an-issue)
    that the PR fixes in the description.

    ```text
    fixes #<ISSUE-NUM>
    ```

1. The bottom of the PR page displays a list of checks that verify links, Markdown syntax, and more.
    If you have any [errors](fix-cicd-errors.md), make any required changes to your PR, repeating steps 5--7.

1. In the right sidebar of your PR, select the reviewer(s) who should [review your PR](review-pr.md) (typically the
    original issue raiser).
    Ask the ConsenSys documentation team to review by selecting **ConsenSys/protocol-pliny** as a reviewer.
    If you don't know who to choose or can't because you're not a maintainer yet, select the reviewers listed by GitHub
    or keep the default value.

1. Make any required changes to your PR based on reviewer feedback, repeating steps 5--7.

1. After your PR is validated, all checks have passed, and your branch has no conflicts with the target branch, you can
    merge your PR.
    You can delete the topic branch after merging your PR.

!!! tip

    You can use a Git client such as [Fork](https://fork.dev/) instead of the command line.

The following is a video demonstration of the contribution workflow:

![type:video](https://www.youtube.com/embed/rDFGvMIzHWE)

## Code of conduct

This project and everyone participating in it are governed by the
[contributor covenant code of conduct](../reference/code-of-conduct.md).
By contributing to documentation, you're expected to uphold this code.
Please report unacceptable behavior to [`private-quorum@consensys.net`](mailto:private-quorum@consensys.net).

## Contributor License Agreement

When you submit a PR for your first contribution to a documentation repository, you must read and sign the
[ConsenSys Individual Contributor License Agreement (CLA)](https://gist.github.com/rojotek/978b48a5e8b68836856a8961d6887992)
when prompted before you can merge the PR.

[^1]: If you're new to Git, you can try the [Learn Git Branching interactive
tutorial](https://learngitbranching.js.org/).
