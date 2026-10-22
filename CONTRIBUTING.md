# Contributing

Thanks for your interest in the Rallybird agent plugins.

This repository is generated from Rallybird's private source and updated
automatically. Anything changed here is overwritten on the next sync, so **we
can't accept pull requests**.

Please open an [issue](https://github.com/rallybird/agent-plugins/issues)
instead. We read every one and make the fix in the source. Useful issues
include:

- the plugin fails to install in Claude or Codex (tell us which app or CLI, and
  its version);
- a skill doesn't trigger, or gives a poor answer (include the prompt you used);
- something in the README is wrong or unclear.

## How this repository is laid out

```
.claude-plugin/marketplace.json      Claude Code marketplace
.agents/plugins/marketplace.json     Codex marketplace
plugins/rallybird/
  .claude-plugin/plugin.json         Claude Code manifest
  .codex-plugin/plugin.json          Codex manifest
  .mcp.json                          MCP server (shared by both)
  skills/<name>/SKILL.md             skills (shared by both)
```

The skills and MCP config are shared; only the manifests differ.

For questions about your Rallybird account or workspace, see
[rallybird.ai/support](https://rallybird.ai/support). To report a security
problem, follow [SECURITY.md](SECURITY.md) rather than opening an issue.
