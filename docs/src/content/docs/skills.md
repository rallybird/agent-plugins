---
title: Skills
description: Skills the Rallybird plugin adds to Claude and Codex.
---

The plugin adds four skills that your agent uses automatically when your request
matches. Each is a recipe over the [tools](../tools/).

| Skill            | Use it for                                                                                                         |
| ---------------- | ------------------------------------------------------------------------------------------------------------------ |
| `find-reference` | Choosing the best customer reference, or a ranked shortlist, for a buyer, or finding who to talk to about a topic. |
| `pull-quotes`    | Pulling verbatim customer quotes for a topic, each with a short judgement of why it is worth using.                |
| `proof-coverage` | Assessing how much proof exists for a feature, capability, challenge or theme, and which customers raised it.      |
| `account-brief`  | Briefing you on one customer or one person: profile, people in the sources, and supported proof highlights.        |

## Examples

- "Who should I put in front of a fintech buyer?" → `find-reference`
- "Give me three quotes about reliability." → `pull-quotes`
- "How strong is our onboarding evidence?" → `proof-coverage`
- "Give me a rundown on Acme." → `account-brief`

Without the plugin, any MCP client can still call the tools directly.
