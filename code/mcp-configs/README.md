# MCP config files for Stacksync

Server URL: `https://mcp.stacksync.com/mcp`

| File | Where it goes | Auth |
|---|---|---|
| `claude-code.mcp.json` | `.mcp.json` at your project root (Claude Code) | OAuth, sign in with `/mcp` |
| `claude-code.api-key.mcp.json` | `.mcp.json` for CI or headless use | API key from `STACKSYNC_API_KEY` |
| `cursor.mcp.json` | merge into `~/.cursor/mcp.json` | OAuth, Connect in MCP settings |
| `windsurf.mcp.json` | merge into `mcp_config.json` | OAuth on first use |
| `vscode.mcp.json` | `.vscode/mcp.json` | OAuth, start from the tools picker |

Rules:

- **Merge, do not overwrite.** Keep any servers you already use.
- **Never commit a key.** The API-key file reads it from an environment variable.
- Prefer OAuth for anything interactive. It uses your Stacksync login and your role, and you can revoke the session from the Sessions tab.

After connecting, ask: "List my Stacksync workspaces."
