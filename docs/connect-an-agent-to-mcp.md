# Connect an agent to Stacksync MCP

The Stacksync MCP server lets an AI assistant build and run two-way syncs, workflows and Genies in a Stacksync workspace, with exactly the permissions of the person who signed in.

Server URL (streamable HTTP): `https://mcp.stacksync.com/mcp`

## Interactive clients (OAuth)

Add the URL, sign in once in the browser, then ask "List my Stacksync workspaces."

| Client | How |
|---|---|
| Claude (web, desktop) | Customize, Connectors, **+ Add**, Add custom connector, enter the URL, Connect |
| ChatGPT | Settings, Apps, Advanced settings, Developer mode, Create app, enter the URL, choose OAuth |
| Claude Code | `claude mcp add --transport http stacksync https://mcp.stacksync.com/mcp`, then `/mcp` |
| Codex | `codex mcp add stacksync --url https://mcp.stacksync.com/mcp`, then `codex mcp login stacksync` |
| Cursor | Add the entry from [code/mcp-configs/cursor.mcp.json](../code/mcp-configs/cursor.mcp.json) to `~/.cursor/mcp.json`, then Connect |
| VS Code | `code --add-mcp '{"name":"stacksync","type":"http","url":"https://mcp.stacksync.com/mcp"}'` |
| Windsurf | Merge [code/mcp-configs/windsurf.mcp.json](../code/mcp-configs/windsurf.mcp.json) into `mcp_config.json` |
| Gemini CLI | `gemini mcp add --transport http stacksync https://mcp.stacksync.com/mcp`, then `/mcp auth stacksync` |

Ready-to-copy config files are in [code/mcp-configs](../code/mcp-configs).

## Scripts, CI and your own agents (API key)

Clients without OAuth can send a Stacksync API key in the `Authorization: Bearer <key>` header. See the minimal clients in [code/clients](../code/clients). Keep the key in an environment variable, never in a file you commit.

## What the assistant does after connecting

A good order, and what the [skills](../code/skills/README.md) encode:

1. `workspaces_list`, then ask which workspace if there is more than one.
2. Read the guidance (`skills_list`, then `skills_get` with `getting-started`).
3. List what exists first (`connections_list`, `syncs_list`, `workflows_list`, `genies_list`) so nothing is built twice.
4. For each missing app, `connections_create` returns a sign-in link you open. No password or key goes in the chat.
5. Build in order: connections, syncs and variables, workflows and queues, Genies and knowledge bases.
6. Accept the preview card for each change. Ask before deleting.

Limits: each user and each workspace API key can make up to 120 tool calls per minute. Workspace owners can require a preview and acceptance for every change.

Official docs: [docs.stacksync.com/mcp](https://docs.stacksync.com/mcp). Overview: [Stacksync MCP](https://www.stacksync.com/mcp).
