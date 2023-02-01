---
description: How to fix PR errors
---

# Fix CI/CD errors

Documentation sites that use the [old system](../overview/index.md#old-documentation-system) use
[CircleCI](https://circleci.com/) to verify links, Markdown syntax, writing style, and more on all documentation changes.
This section describes the four CI error types and how to fix them:

- [`build` errors](#build-errors)
- [`linkchecker` errors](#linkchecker-errors)
- [`markdownlint` errors](#markdownlint-errors)
- [`vale` errors](#vale-errors)

Submitting or updating a PR automatically runs all CI checks, displaying a checklist at the bottom of the PR page.

Manually re-running a failed job on CircleCI requires a ConsenSys account.
Anyone can run the CI checks on their local machine using the [local tests helper scripts](https://github.com/Consensys/doc.common/tree/master/build_tools/scripts).

!!! important

    The [new documentation system](../overview/index.md#new-documentation-system) doesn't use
    CircleCI, but runs [Markdown](#markdownlint-errors) and [link](#linkchecker-errors) tests that you can view and fix
    in a similar way.

## `build` errors

The `build` job builds the documentation using MkDocs in `strict` mode, failing on both errors and warnings.
Select the `build` **Details**, which takes you to the CircleCI site.
Check the error message under **Run MkDocs** and make any required fixes.

The best way to reproduce the error is by running `mkdocs build -s` locally in a [virtual environment](../preview/old-system.md).

## `linkchecker` errors

The `linkchecker` job verifies links.
Select the `linkchecker` **Details**, which takes you to the CircleCI site.
The error message under **Run markdown link checker** displays all the broken links and their HTTP error codes.

HTTP error codes include:

- `404` - The page doesn't exist anymore.
  Update the link.
- `4xx` - Refer to the [full list of HTTP codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes).
- `5xx` - The web server is experiencing issues.
  You may re-run the job later.

!!! example

    ```bash
    FILE: ./docs/index.md
    [✓] Concepts/Overview.md → Status: 200
    [✖] https://consensys.net/quorum/developers → Status: 503
    [✖] https://consensys.net/quorum/contact-us → Status: 503

    3 links checked.

    ERROR: 2 dead links found!
    [✖] https://consensys.net/quorum/developers → Status: 503
    [✖] https://consensys.net/quorum/contact-us → Status: 503
    ```

    These errors mean the two links in `./docs/index.md` to the `consensys.net` site don't work because the server has issues.
    The `503` code means `Service Unavailable`.

!!! note

    If your link is working but doesn't pass the `linkchecker` job, you can bypass the check by
    adding `<!-- markdown-link-check-disable-next-line -->` to the line above the link.

## `markdownlint` errors

The `markdownlint` job verifies Markdown syntax.
Select the `markdownlint` **Details**, which takes you to the CircleCI site.

The error message under **Run Markdownlint** displays Markdown errors that you must fix.
These errors are also displayed in the `markdownlint.out` artifact.

The log under **Run Markdownlint info checks** displays warnings that you should be aware of but don't prevent the tests
from passing.
These warnings are also displayed in the `markdownlint_info.out` artifact.

!!! example

    ```bash
    `docs/Reference/Responsible-Disclosure.md:18:1 MD007/ul-indent Unordered list indentation [Expected: 2; Actual: 4]`
    ```

    This indicates that you have an error in the file `docs/Reference/Responsible-Disclosure.md` at line 18, character 1.
    The error code is [`MD007`](https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md007---unordered-list-indentation)
    and the description message is `Unordered list indentation [Expected: 2; Actual: 4]` indicating that there are four
    spaces used to indent the line instead of the expected two.
    Fix by removing the two spaces.

Frequent Markdown errors in the ConsenSys documentation include:

- Not trimming end-of-line spaces.
  You can configure your editor to automatically fix this.
- Not adding blank lines around lists, code blocks, or titles.
- Using the wrong title level (for example, starting a page with `##` instead of `#`, or jumping from `#` to `###`).
- Not defining the language on code blocks.
- Manually incrementing ordered list elements.
  All ordered lists elements must start with `1.`; the numbers increment automatically in the rendered Markdown.
- Using inconsistent unordered list markers.
  You can use `*` or `-` to start unordered list elements, but they must be the same everywhere on a page.
- Using HTML when Markdown can do the job.
  Don't use HTML unless it's a matter of life and death!

View the [full list of `markdownlint` errors and fixes](https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md).

## `vale` errors

The `vale` job verifies the documentation against basic writing guidelines configured in the
[common submodule `vale` directory](https://github.com/ConsenSys/doc.common/tree/master/build_tools/vale).

Select the `vale` **Details**, which takes you to the CircleCI site.
The error message under **Run Vale** displays writing errors that you must fix, and warnings that you should be aware of
but don't prevent the tests from passing.

!!! example

    ```bash
    docs/Reference/CLI/CLI-Syntax.md
    1349:34  error    Did you really mean             Vale.Spelling
                      'attestions'?
    1436:19  warning  'is used' may be passive        write-good.Passive
                      voice. Use active voice if you
                      can.

    ✖ 1 error, 1 warnings and 0 suggestions in 1 file.

    Exited with code exit status 1
    CircleCI received exit code 1
    ```

    This indicates that you have one error and one warning in the file `docs/Reference/CLI/CLI-Syntax.md`.

    The error is a typo on the word `attestions` that should be `attestations`.
    The warning reminds you to use [active voice](https://docs.microsoft.com/en-us/style-guide/grammar/verbs#active-and-passive-voice)
    where possible.

If you're introducing a new product term not recognized by Vale:

1. [Make a documentation contribution](index.md) to the [`doc.common`](https://github.com/ConsenSys/doc.common)
    repository, adding the term to the Vale [`accept.txt`](https://github.com/ConsenSys/doc.common/blob/master/build_tools/vale/vale_styles/Vocab/Consensys/accept.txt)
    file.
1. In the documentation repository in which you're making the original contribution,
    [update the submodule to the latest version](use-common-submodule.md#update-repositories-to-the-latest-submodule-version).
