# Playbook 06: Ticket escalation with human-in-the-loop

**Use a:** Genie that recommends, a person who decides. Pattern built from the same parts as the other playbooks.

## The problem

Support sees a billing, order or contract issue it cannot resolve. Escalating means collecting context from three systems and finding the right owner.

## Systems

Ticketing (Zendesk), CRM, ERP, chat (Slack).

## How it works

1. A ticket is tagged for escalation.
2. The Genie gathers the account, the open orders or invoices and the recent contacts.
3. It drafts a summary and proposes the owner and urgency.
4. A person approves the escalation. Only then is the owner pinged and the ticket reassigned.

## Genie job description

```text
Role: Escalation assistant.
Reads: the ticket, the customer's account in the CRM, orders and invoices in the ERP.
Does: write a three-line summary, list the facts it found with the system each came from, propose an owner and urgency.
Needs approval: reassigning the ticket, changing priority, or messaging a customer.
Never does: promise a refund or a date, or reply to the customer on its own.
When unsure: say what it could not find and ask the agent.
Output: summary, facts with sources, proposed owner and urgency.
```

## Why a person stays in the loop

Escalation is a judgment call with a customer waiting. The agent saves the lookup. The decision stays with a person, and the log shows who made it.

## Build it from your AI assistant

```text
Inspect my Zendesk, CRM and ERP connections. Propose a Genie that prepares an escalation summary for tickets I tag, with an approval step before any reassignment or customer message. Show the data it would read and wait for my confirmation before creating anything.
```

Related: [Genies and approvals](https://www.stacksync.com/ai-agents).
