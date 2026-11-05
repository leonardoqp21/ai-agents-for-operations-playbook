# Playbook 01: Freight invoice disputes and carrier rebilling

**Use a:** workflow for the matching, a Genie for the disputed cases.

## The problem

Carriers bill by shipment. The agreed rate lives in one system, the arrival time in another, and the invoice in the ERP. A person has to open all three to decide whether a charge is right.

## Systems

ERP (for example NetSuite), a database holding shipment data (for example PostgreSQL), and a chat tool for the approver.

## How it splits

- **Workflow:** match each carrier invoice to its shipment. This is deterministic, so it does not need an agent.
- **Genie:** for an invoice that does not match, compare the billed amount with the agreed rate and the arrival time, then propose a credit or a rebill.
- **Approval:** a finance reviewer approves, rejects or edits the proposed credit before anything is written.

## Genie job description

```text
Role: Freight dispute analyst.
Reads: carrier invoices and vendor bills in the ERP; agreed rates and arrival timestamps in the shipment database.
Does: for each invoice flagged as unmatched, compare the billed charge with the agreed rate and the recorded arrival time. Propose a credit amount with the evidence.
Needs approval: any credit memo or vendor bill change.
Never does: edit a posted bill, contact a carrier, or guess a rate that is not in the rate table.
When unsure: say which field is missing and stop.
Output: a short table per invoice (billed, agreed, difference, evidence) and the proposed action.
```

## Approval gate

The run pauses with the full payload. The reviewer sees the invoice, the rate used and the proposed credit. After approval the run continues from where it stopped.

## Build it from your AI assistant

With the Stacksync MCP server connected ([setup](../docs/connect-an-agent-to-mcp.md)), paste:

```text
List my Stacksync connections and any existing workflows or Genies for freight invoices first. Then propose a workflow that matches carrier invoices to shipments, and a Genie that handles only the unmatched ones using the job description I paste next. Add an approval step before any write to the ERP. Do not create or deploy anything until I confirm the plan.
```

## What to check before going live

- Every field the Genie reads exists in the connected tables.
- The approval step shows the evidence, not just the amount.
- A failed run appears in the log explorer and can be replayed after you fix the cause.

Learn more about [Genies on Stacksync](https://www.stacksync.com/ai-agents).
