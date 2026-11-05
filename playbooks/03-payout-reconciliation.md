# Playbook 03: Payment payout reconciliation

**Use a:** workflow. No AI needed. A Genie is optional for exceptions.

## The problem

A payment processor pays out batches. Each batch must match bank deposits and ERP records, and the exceptions are what eat time.

## Systems

Payment processor, bank feed or bank records, the ERP.

## How it works

1. A **scheduled workflow** pulls payouts and deposits and matches them to ERP records on agreed keys (payout ID, amount, date window).
2. Matches are marked reconciled.
3. Unmatched items are written to an exceptions table.
4. Optionally, a **Genie** gathers evidence for each exception (the order, the refund, the fee) and writes a note. A person decides.

## Why this one is a workflow

The rule is known in advance: same ID, same amount, same window. A deterministic workflow is easier to audit and cheaper to run than an agent. Use the agent only for the messy part.

## Workflow outline

```text
Trigger: schedule (daily)
Step 1: fetch payouts since last run
Step 2: fetch bank deposits in the date window
Step 3: match on payout ID, then amount and window
Step 4: update the ERP record for each match
Step 5: write unmatched payouts to the exceptions table
Step 6: notify the finance channel with the count and a link
```

## Build it from your AI assistant

```text
Inspect my connections for the payment processor, bank data and ERP. Propose a scheduled workflow that matches payouts to deposits and ERP records and writes exceptions to a table. Use a workflow only, no Genie. Show me each step and the keys used, and wait for my confirmation before creating anything.
```

Read the guide on [workflow vs Genie](../docs/genie-vs-workflow.md).
