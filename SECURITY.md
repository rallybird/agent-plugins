# Security policy

## Reporting a vulnerability

Please report security issues privately. Don't open a public issue or pull
request for them.

Use GitHub's private vulnerability reporting: open the
[Security tab](https://github.com/rallybird/agent-plugins/security) of this
repository and choose **Report a vulnerability**.

Rallybird's security practices, and how to reach the team about anything beyond
this repository, are on the [security page](https://rallybird.ai/security).

Please include:

- what you found and where (file, manifest field or skill);
- steps to reproduce it, or a short proof of concept;
- the impact you think it has.

We will acknowledge your report, keep you updated while we investigate, and let
you know when it's fixed. Please give us a reasonable chance to fix an issue
before you disclose it publicly.

## Scope

This repository holds plugin manifests, skills (plain-text instructions for your
agent) and an MCP server address. It contains no executable code and no secrets.
Issues here include, for example, a manifest or skill that could mislead an
agent into unsafe behaviour, or a wrong server address.

Problems with the Rallybird service itself (`app.rallybird.ai`, including its
MCP server and sign-in) are also welcome through the channels above.

## Supported versions

We fix security issues in the latest release only.
