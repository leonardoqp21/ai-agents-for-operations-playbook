# AI agents for operations: a playbook of use cases, job descriptions and MCP setup

A practical playbook for ops, finance and revenue teams that want AI agents to do real cross-system work (reconcile invoices, enrich accounts, escalate tickets) without losing control of the data.

Each playbook gives the problem, the systems involved, whether it needs a **workflow** or an **AI agent**, a copyable **job description**, the **approval step**, and a prompt to build it from Claude, ChatGPT or Cursor through [Stacksync MCP](https://www.stacksync.com/mcp). The `code/` folder shows how to connect an agent to MCP, with config files, example skills and minimal clients.

The agents in these playbooks are [Stacksync Genies](https://www.stacksync.com/ai-agents): AI agents that read the ERP, CRM, database and support systems you connect and act across them, with approval steps before writes and a log of every run. The patterns work for any agent that follows the same rules.

## Playbooks

| # | Playbook | Use a | Systems |
|---|---|---|---|
| 01 | [Freight invoice disputes](playbooks/01-freight-invoice-disputes.md) | Workflow + Genie | ERP, database |
| 02 | [Invoice and document intake](playbooks/02-invoice-and-document-intake.md) | Genie + reviewer | Inbox, ERP |
| 03 | [Payout reconciliation](playbooks/03-payout-reconciliation.md) | Workflow | Payments, bank, ERP |
| 04 | [Closed-won onboarding](playbooks/04-closed-won-onboarding.md) | Genie | CRM, ticketing, ERP |
| 05 | [Account enrichment review](playbooks/05-account-enrichment.md) | Workflow + Genie | CRM, database |
| 06 | [Ticket escalation](playbooks/06-ticket-escalation.md) | Genie + approval | Ticketing, CRM, ERP |
| 07 | [Order questions from Slack](playbooks/07-order-questions-from-slack.md) | Genie (read-only) | Slack, commerce |
| 08 | [Sync issue triage](playbooks/08-sync-issue-triage.md) | Your assistant via MCP | Stacksync workspace |

## The pattern behind every playbook

1. **Write the job description.** Role, reads, does, needs approval, never does, when unsure, output. Template: [templates/job-description.md](templates/job-description.md).
2. **Use the least intelligent tool.** Known rules go in a workflow. Judgment goes to an agent. See [Genie or workflow?](docs/genie-vs-workflow.md).
3. **Put an approval step before every write that is hard to undo.** Checklist: [templates/approval-step-checklist.md](templates/approval-step-checklist.md).
4. **Check before you write.** Look up the record first, so you do not create duplicates.
5. **Read the log.** Every run should be inspectable and replayable.

## Connect an agent to MCP

Add the server URL to your assistant: `https://mcp.stacksync.com/mcp`. Sign in with OAuth, no API key in the chat. Then ask "List my Stacksync workspaces."

| You want | Go to |
|---|---|
| Setup for Claude, ChatGPT, Cursor, VS Code, Codex and more | [docs/connect-an-agent-to-mcp.md](docs/connect-an-agent-to-mcp.md) |
| Config files to copy | [code/mcp-configs](code/mcp-configs/README.md) |
| Example skills that teach an assistant the steps and safety rules | [code/skills](code/skills/README.md) |
| A minimal Python or Node client for your own agent | [code/clients](code/clients/README.md) |

Stacksync also publishes official skills: [stacksyncdata/skills](https://github.com/stacksyncdata/skills).

## Common questions

**What is an AI agent for operations?**  
An agent that reads data in several business systems and acts across them for a defined job, such as reconciling invoices or preparing an escalation, with limits on what it may write.

**Should I use an AI agent or a workflow?**  
Use a workflow when the rule is known in advance. Use an agent when the task needs judgment or reading free text. Many jobs use both. See [docs/genie-vs-workflow.md](docs/genie-vs-workflow.md).

**How do I keep an agent from making a mistake in my ERP?**  
Give it a narrow job description, limit write access, add an approval step before writes, check for an existing record first, and test on a sandbox copy. See [docs/approvals-and-logs.md](docs/approvals-and-logs.md).

**Does the agent need my passwords or API keys?**  
No. Apps are connected through a secure sign-in link, and your assistant signs in to Stacksync with OAuth.

**Can I run this without AI?**  
Yes. Two-way sync and workflows run without Copilot or Genies, with the same approvals and logs.

## Docs

- [How a Genie works](docs/how-a-genie-works.md)
- [Genie or workflow?](docs/genie-vs-workflow.md)
- [Approvals, access and logs](docs/approvals-and-logs.md)
- [Connect an agent to MCP](docs/connect-an-agent-to-mcp.md)
- [llms.txt](llms.txt)

These playbooks describe patterns, not guaranteed outcomes. Test every one on non-production data first.

## Contributing

Ideas and fixes are welcome. See [CONTRIBUTING.md](CONTRIBUTING.md).

## License

[MIT](LICENSE)
