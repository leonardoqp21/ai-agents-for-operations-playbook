---
name: invoice-reconciliation
description: Use when the person wants to reconcile invoices or vendor bills against purchase, shipment or cost records through Stacksync, including setting up a workflow for the matches and an approval step before any ERP write.
---

# Invoice reconciliation with Stacksync

Do not write to the ERP until a person has approved. Inspect first, propose, then build.

## Ask first

1. Which ERP and which system holds the purchase, shipment or cost records?
2. What is the matching key (vendor and invoice number, PO number, shipment ID)?
3. Who approves a write, and above what amount?
4. Is this a sandbox or production workspace?

## Steps

1. List workspaces and confirm which one to use.
2. List connections, syncs, workflows and Genies so nothing is built twice.
3. If an app is not connected, create the connection and give the person the sign-in link. Never ask for a password or key.
4. Propose a **workflow** for matches on the key. Propose a **Genie** only for invoices that do not match.
5. Add a duplicate check before every write: look up the bill by vendor and invoice number. If it exists, stop or route to approval.
6. Add an approval step before the ERP write. The reviewer must see the evidence.
7. Show the plan and wait for the person to accept before creating or deploying.

## Rules

- Never edit a posted bill.
- Never guess a rate, amount or vendor.
- A match without a cited source record is an exception.
- If a field is missing, say which one and stop.
