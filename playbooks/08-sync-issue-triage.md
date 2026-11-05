# Playbook 08: Sync issue triage from your AI assistant

**Use a:** your connected assistant, through MCP. No Genie needed.

## The problem

A sync has open issues. Someone has to read the errors, group them by cause and decide between retry, revert or ignore.

## How it works

With the Stacksync MCP server connected, the assistant can read sync health and the grouped record errors, then propose the smallest fix. You choose the action.

## Prompt

```text
Find my syncs and read their current issues. Group failures by cause and show the affected mappings and record IDs. Propose the smallest correction and explain when retry, revert or ignore would be appropriate. Do not resolve issues or change a mapping until I choose the action.
```

## Why this is not an agent job

It is on demand and it ends with a person choosing. An assistant with read access and a clear prompt is enough. Use a Genie when the job should run on its own.

Connect your assistant first: [connect an agent to MCP](../docs/connect-an-agent-to-mcp.md). Learn more about [Stacksync MCP](https://www.stacksync.com/mcp).
