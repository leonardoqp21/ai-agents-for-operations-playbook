---
name: account-enrichment-review
description: Use when the person wants to fill missing CRM account fields (industry, size, region) through Stacksync without overwriting data a person entered, using a staging table and a review step.
---

# Account enrichment with review

The CRM is the record people trust. Enrichment must not damage it.

## Ask first

1. Which CRM, and which fields are in scope?
2. Where do suggestions come from, and should a source and date be stored?
3. Who reviews conflicts?

## Steps

1. List workspaces, connections and existing syncs and workflows.
2. Propose a workflow that finds accounts with empty fields and writes suggestions to a **staging table**, not to the CRM.
3. Propose a review step that marks each suggestion as "fill empty", "conflict" or "same".
4. Write back only fields that are empty, or that a reviewer approved.
5. Limit write access to the fields the process owns.
6. Show the plan and wait for acceptance before creating anything.

## Rules

- Never overwrite a populated field without approval.
- Never delete a value or change an owner.
- Keep the suggestion, source and date so a change can be traced.
