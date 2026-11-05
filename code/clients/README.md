# Minimal MCP clients for your own agents

Two small, read-only examples (Python and Node) that connect to the Stacksync MCP server with an API key, list its tools and call `workspaces_list`. Use them as the first step of your own agent, then add the tools your job needs.

- Auth: `Authorization: Bearer <key>` from the `STACKSYNC_API_KEY` environment variable.
- A key acts with the permissions it was created for. Use a read-only one while you test.
- Limit: up to 120 tool calls per minute per user and per workspace key.
- Interactive tools (Claude, ChatGPT, Cursor) should use OAuth instead. See [../mcp-configs](../mcp-configs/README.md).

These examples are written against the public MCP SDKs and have not been run against your workspace. Run them read-only first.
