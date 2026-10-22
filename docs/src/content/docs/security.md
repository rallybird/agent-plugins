---
title: Privacy and security
description: How Rallybird handles sign-in, workspace isolation and access.
---

How access works when an agent connects to Rallybird.

- **Sign-in.** Access uses OAuth 2.1 with PKCE through your browser. No API key
  is created or stored.
- **Workspace isolation.** A connection is bound to one workspace at consent.
  Every tool call is scoped to it on the server.
- **Read-only.** The tools search and read your customer proof. They don't
  change it.
- **Revoking access.** Disconnect Rallybird in your client to stop it using its
  saved credentials.
- **Traceable answers.** Results link back to the source they came from.

See the [terms](https://rallybird.ai/terms) and
[privacy policy](https://rallybird.ai/privacy). To report a security problem,
follow
[SECURITY.md](https://github.com/rallybird/agent-plugins/blob/main/SECURITY.md).
