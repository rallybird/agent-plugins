---
title: MCP server
description: Connect any OAuth-capable MCP client to Rallybird.
---

Rallybird exposes your customer proof through a remote Streamable HTTP MCP
server:

```text
https://app.rallybird.ai/mcp
```

It works with OAuth-capable MCP clients such as Claude, Claude Code, Codex and
ChatGPT.

## Connect a client

| Client      | How                                                                                                                                                                |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| claude.ai   | **Settings → Connectors → Add custom connector**. Name it "Rallybird" and enter the URL.                                                                           |
| ChatGPT     | Open [chatgpt.com/plugins](https://chatgpt.com/plugins), choose **Add custom MCP server**, name it Rallybird, enter the URL and leave authentication as **OAuth**. |
| Claude Code | `claude mcp add rallybird --transport http https://app.rallybird.ai/mcp`                                                                                           |
| Codex       | `codex mcp add rallybird --url https://app.rallybird.ai/mcp`                                                                                                       |

## Authorization

The server uses OAuth 2.1 with PKCE. Your client discovers the authorization
server, registers itself, and opens your browser to sign in and approve access.
No API key is stored in client configuration.

On the consent screen you choose the workspace the connection is bound to:

- if you belong to one workspace, it is selected automatically;
- if you belong to several, you pick one;
- if you belong to none, you are asked to create one first.

Access tokens expire after one hour and are refreshed automatically. Refresh
tokens last 30 days and rotate on every use. Disconnecting the server in your
client stops it using its saved credentials.

## What the server can see

Each call is scoped to the workspace chosen at consent, and callers can't select
a different one. The server reads that workspace's customer proof: case studies,
customer stories, quotes, metrics, and G2 reviews of your own product, enriched
with firmographic data about the customers named. See [Tools](../tools/).
