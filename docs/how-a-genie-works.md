# How a Genie works

A Genie is a Stacksync AI agent. You give it a job description, and it reads the systems you connect and acts across them, running workflows, two-way sync and EDI tasks.

## Setup in four moves

1. **Write the job description.** Role, what it reads, what it may do, what needs approval, what it never does. Use [the template](../templates/job-description.md).
2. **Connect the systems.** ERP, CRM, database and support tools come from the connector catalog.
3. **Describe the workflow.** Either prompt Stacksync AI Copilot to build it, or build it by hand in no-code or pro-code.
4. **Add approval steps** before the writes that matter.

## Why a synced database helps

An agent that calls each SaaS API on every question is slow and hits rate limits. With [two-way sync](https://www.stacksync.com/two-way-sync), a current copy of ERP and CRM records sits in a database the agent can query. A row the agent writes flows back to the source system within the field mappings and write directions you configured.

## What a run looks like

```text
trigger -> read connected data -> decide -> (approval step) -> write -> log
```

The log explorer shows each step and where a run failed. After you fix the cause, the run can be replayed.

## Names that get mixed up

- **Stacksync AI Copilot** builds integrations and workflows from a prompt.
- **Genies** are the agents that run the work.
- **Your own assistant** (Claude, ChatGPT, Cursor) connects through the Stacksync MCP server to build and manage things. See [connect an agent to MCP](connect-an-agent-to-mcp.md).
- Microsoft Copilot is a separate Microsoft product.
