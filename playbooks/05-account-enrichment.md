# Playbook 05: Account enrichment review

**Use a:** workflow to enrich, a Genie to review the odd ones. Pattern built from the same parts as the other playbooks.

## The problem

CRM accounts have missing industry, size, region or owner. Filling them by hand is slow, and automatic overwrites can destroy data that a rep entered on purpose.

## Systems

CRM (HubSpot or Salesforce), an enrichment source, a database for review.

## How it works

1. A workflow finds accounts with empty fields.
2. It writes suggested values to a **staging table**, not to the CRM.
3. A Genie compares each suggestion with what the CRM already says and flags conflicts.
4. Only fields that are empty, or that a reviewer approves, are written back.

## Rules

- **Never overwrite a field a person filled in** without an approval.
- Keep the suggestion, its source and the date, so a change can be traced.
- Use field-level write permissions so the enrichment process can write only the fields it owns.

## Genie job description

```text
Role: Account data reviewer.
Reads: suggested values in the staging table; current account fields in the CRM.
Does: compare each suggestion with the current value. Mark each as "fill empty", "conflict" or "same".
Needs approval: any change to a field that already has a value.
Never does: overwrite a populated field, delete a value, or change owner.
When unsure: mark as conflict and explain.
Output: a list of conflicts with current value, suggested value and source.
```

## Build it from your AI assistant

```text
Inspect my CRM connection and propose how to find accounts with missing industry, size and region, write suggestions to a staging table, and have a Genie review conflicts before anything is written back. Limit write access to the fields the process owns. Wait for my confirmation before creating anything.
```

See [two-way sync](https://www.stacksync.com/two-way-sync) for keeping the staging table and the CRM matched.
