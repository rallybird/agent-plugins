---
title: Install
description: Install the Rallybird plugin in Claude or Codex.
---

The first time you use Rallybird, your app opens a browser tab so you can sign
in and choose a workspace. There is no API key to copy.

## Claude desktop app

1. Open **Settings → Plugins**, choose **+ Add → Add marketplace** and enter
   `rallybird/agent-plugins`.
2. Open a session in the **Code** tab, click **+** next to the prompt box and
   choose **Add plugins**.
3. Select Rallybird and pick where to install it.

Or download
[rallybird-claude.zip](https://github.com/rallybird/agent-plugins/releases/latest/download/rallybird-claude.zip)
and choose **+ Add → Upload plugin**. Uploaded plugins don't update themselves.

## Codex desktop app

1. Open **Settings → Plugins**, choose **+ Add More...** and enter
   `https://github.com/rallybird/agent-plugins.git`.
2. Open the **Plugins** tab, find Rallybird and click **+** to install it.

## Claude Code

```sh
claude plugin marketplace add rallybird/agent-plugins
claude plugin install rallybird@rallybird
```

Run `/mcp` in a session if you need to finish signing in.

## Codex CLI

```sh
codex plugin marketplace add rallybird/agent-plugins
codex plugin add rallybird@rallybird
```

## MCP only

To connect without the plugin, see [MCP server](../mcp-server/). You get the
tools but not the skills.
