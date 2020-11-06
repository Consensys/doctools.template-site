---
description: Using the EthSigner configuration file
---

# Using the EthSigner configuration file

To specify command line options in a file, use a TOML configuration file.

Save the configuration file and reuse it across node startups. To specify the configuration file,
use the [`--config-file`](../Reference/CLI/CLI-Syntax.md#config-file) option.

To override an option specified in the configuration file, either specify the same option on the
command line or as an
[environment variable](../Reference/CLI/CLI-Syntax.md#environment-variables). For options
specified in more than one place, the order of precedence is command line, environment variable,
configuration file.

## TOML specification

The configuration file must be a valid TOML file composed of key/value pairs. Each key is the same
as the corresponding command line option name without the leading dashes (`--`). For [subcommands],
prefix the key with the name of the subcommand. For example, `multikey-signer.directory=<DIR>`

!!! note

    Subcommands cannot be specified in the configuration file, you can only specify a subcommand's
    associated options. The signing key subcommand must be specified on the command line.

Values must conform to TOML specifications for string, numbers, arrays, and booleans. Specific
differences between the command line and the TOML file format are:

* Comma-separated lists on the command line are string arrays in the TOML file.
* Enclose file paths, hexadecimal numbers, URLs, and &lt;host:port> values in quotes.

!!! tip

    The [command line reference](../Reference/CLI/CLI-Syntax.md) includes configuration file
    examples for each option.

!!! example "Sample TOML configuration file"

    ```toml
    # Chain
    chain-id=2017

    # Path
    data-path="~/ethsignerdata" # Path

    # Ethereum client (Besu)
    downstream-http-host="localhost"
    downstream-http-port=8545

    # Signing options
    # file-based
    file-based-signer.key-file="/Users/me/my_node/transactionKey"
    file-based-signer.password-file="/Users/me/my_node/password.txt"

    # multi-key
    multikey-signer.directory="/Users/me/keys"
    ```

The sample TOML file specifies options for the `file-based-signer` and `multikey-signer`
subcommands. However, you can only start EthSigner using one signing subcommand.

!!! example "Starting EthSigner with a configuration file"

    ```bash
    ethsigner --config-file=/home/me/me_node/config.toml multikey-signer
    ```

<!-- links -->
[subcommands]: ../Reference/CLI/CLI-Subcommands.md
