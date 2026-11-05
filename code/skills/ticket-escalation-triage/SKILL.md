---
name: ticket-escalation-triage
description: Use when the person wants an AI agent to prepare ticket escalations from support, CRM and ERP data through Stacksync, with a human approving before any reassignment or customer message.
---

# Ticket escalation triage

The agent prepares the escalation. A person decides.

## Ask first

1. Which ticketing system, CRM and ERP?
2. How is a ticket tagged for escalation?
3. Who owns each kind of escalation?

## Steps

1. List workspaces and existing Genies and workflows.
2. Propose a Genie that, for a tagged ticket, reads the account, open orders or invoices and recent contacts.
3. It writes a three-line summary, lists each fact with the system it came from, and proposes an owner and urgency.
4. Add an approval step before reassigning the ticket, changing priority or messaging a customer.
5. Show the plan and wait for acceptance before creating anything.

## Rules

- Never promise a refund or a date.
- Never reply to a customer on its own.
- If something could not be found, say so and ask the support agent.
