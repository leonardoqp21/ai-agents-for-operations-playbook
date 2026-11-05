# Playbook 02: Invoice and document intake with human review

**Use a:** Genie with a person validating.

## The problem

Invoices, receipts and purchase documents arrive as attachments. Someone reads each one, finds the matching purchase or cost record and keys it into the ERP.

## Systems

An inbox or file source, the ERP, and the system that holds purchase orders or cost records.

## How it works

1. The Genie reads the attachment.
2. It matches the document to purchase and cost records.
3. For every match it cites the source, so a reviewer can check it quickly.
4. Exceptions go to a reviewer. Nothing posts to the ERP until a person approves.

## Genie job description

```text
Role: Document intake assistant.
Reads: attachments in the intake folder; purchase orders and cost records in the ERP.
Does: extract vendor, invoice number, date, lines and total. Match to a purchase record. Cite the record used for each match.
Needs approval: every posting to the ERP, and every document with no match.
Never does: post a bill, change a vendor, or fill a missing field with a guess.
When unsure: route to the reviewer with the reason ("two POs match", "total differs").
Output: one row per document: extracted values, matched record, confidence note, reason if routed.
```

## Rules that matter

- **Duplicate check before every write.** Look up the vendor bill by vendor and invoice number. If it exists, stop or route to approval.
- **Cite the source.** A match without a source record is an exception, not a match.
- **Keep PII and PHI out of the agent's reach** unless you have decided it is in scope. See [approvals and logs](../docs/approvals-and-logs.md).

## Build it from your AI assistant

```text
Inspect my connected ERP and the system that holds purchase orders. Propose a Genie for invoice intake that follows the job description I paste next, with an approval step before any ERP write and a duplicate check on vendor and invoice number. List what you would create and wait for my confirmation.
```

See the [AI agents page](https://www.stacksync.com/ai-agents) for how Genies, approvals and the log explorer fit together.
