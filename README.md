# Rallybird agent plugins

Find your strongest advocates and best customer proof, from inside your agent.

[Rallybird](https://rallybird.ai) is an AI context layer for customer marketing.
It connects to your internal data sources (CRM, call transcripts, surveys,
support tickets and more), understands your customers, collects customer proof,
and makes it available when you need it: generating assets, preparing for sales
calls, or finding the best reference for a buyer. Every claim links back to its
source and approval, so you can check it before you repeat it.

For a customer marketing manager it is the quickest way to get from "do we have
a story for this?" or "who would be a good reference for...?" to the right
customer, quote or metric.

This repository packages Rallybird plugins for
[Claude Code](https://claude.com/claude-code) and
[OpenAI Codex](https://developers.openai.com/codex). Installing the plugin
connects your agent to Rallybird and adds skills for common jobs.

## Example questions

There are many questions that Rallybird can answer, but here are a few examples:

- "Who can I put in front of a fintech buyer worried about reliability?"
- "Give me three quotes about onboarding from enterprise customers."
- "Do we have strong proof for developer productivity? Which customers raised
  it?"
- "Tell me about Acme: who we worked with there and what they said."

## Sign up

You need a Rallybird account to use the plugin. Create one at
[app.rallybird.ai](https://app.rallybird.ai); setup takes a few minutes and
walks you through the rest. The plugin signs you in through your browser the
first time you use it.

## Install the plugin

Pick the app you use. The first time you use Rallybird, your app opens a browser
tab so you can sign in and choose a workspace. There is no API key to copy.

### Claude desktop app

1. Open **Settings → Plugins**, choose **+ Add → Add marketplace** and enter
   `rallybird/agent-plugins`.
2. Open a session in the **Code** tab, click **+** next to the prompt box and
   choose **Add plugins** (or **Plugins**, then **Browse plugins**).
3. Select Rallybird and pick where to install it.

Or upload the plugin directly: download
[rallybird-claude.zip](https://github.com/rallybird/agent-plugins/releases/latest/download/rallybird-claude.zip),
open **Settings → Plugins**, choose **+ Add → Upload plugin** and select the
file. Uploaded plugins don't update themselves; download the latest zip to
upgrade.

### Codex desktop app

1. Open **Settings → Plugins**, choose **+ Add More...** and enter
   `https://github.com/rallybird/agent-plugins.git`.
2. Open the **Plugins** tab, find Rallybird and click **+** to install it.

### From the terminal

#### Claude Code

Either from inside a Claude Code session:

```
/plugin install rallybird --marketplace rallybird/agent-plugins
```

or from your shell:

```
claude plugin marketplace add rallybird/agent-plugins
claude plugin install rallybird@rallybird
```

Run `/mcp` in a session if you need to finish signing in.

#### Codex

Add the marketplace from your shell, then install from the shell or from inside
Codex:

```
codex plugin marketplace add rallybird/agent-plugins
```

```
codex plugin add rallybird@rallybird
```

or, in a Codex session, run `/plugins`, pick the `rallybird` marketplace and
install the plugin from there.

### Other apps, or MCP-only installations

Any client that supports remote MCP servers with OAuth can connect to
`https://app.rallybird.ai/mcp`. You get the tools but not the skills.

- **claude.ai:** go to Settings → Connectors → Add custom connector. Call it
  "Rallybird" and enter the URL as `https://app.rallybird.ai/mcp`.

- **ChatGPT:** Go to https://chatgpt.com/plugins, click **Add custom MCP
  server**, call it Rallybird, and enter the URL as
  `https://app.rallybird.ai/mcp`. Leave the "Authentication" field as "OAuth".

- **From the terminal:**

  ```
  claude mcp add rallybird --transport http https://app.rallybird.ai/mcp
  codex mcp add rallybird --url https://app.rallybird.ai/mcp
  ```

## Support and legal

Questions or problems: [rallybird.ai/support](https://rallybird.ai/support). See
the [terms](https://rallybird.ai/terms) and
[privacy policy](https://rallybird.ai/privacy). To report a security problem,
see [SECURITY.md](SECURITY.md). To suggest a change or report a bug in these
plugins, see [CONTRIBUTING.md](CONTRIBUTING.md).

## License

[MIT](LICENSE)
