# Approvals, access and logs

Four controls decide whether an agent is safe to run on real data.

## Approval steps

A run pauses with the full payload. A reviewer approves, rejects or edits it, and the run continues from where it stopped. Each decision is logged with who made it.

Approval thresholds live in your workflow logic. For example, route only vendor bills above an amount you choose to a reviewer. There is no global threshold setting, so write the condition into the workflow.

## Access

Role-based access control decides who can build, run and deploy. An assistant connected through MCP acts with the role of the person who signed in.

## Logs

The log explorer shows each run, its steps and where it failed. A failed run can be replayed after the cause is fixed.

## Pre-flight checks to build

- Before a write, look up the record that would be created (for example the vendor bill by vendor and invoice number). Stop or route to approval if it exists.
- On a schedule, compare posted records with the source records and flag duplicates, missing records and mismatched amounts. Send the flags to the process owner.
- Test on a sandbox copy before production data.

## Questions to raise in a security review

Which model providers process the prompts, where inference runs, what is retained and for how long, whether any provider may train on the data, and whether the AI features you use are inside your compliance scope. Get the answers in writing.

Stacksync describes its approach on the [AI agent governance page](https://www.stacksync.com/security/ai-agents).
