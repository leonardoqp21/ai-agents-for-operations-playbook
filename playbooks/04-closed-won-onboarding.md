# Playbook 04: Closed-won onboarding

**Use a:** Genie.

## The problem

When a Salesforce opportunity closes, ops has to confirm the legal entity, billing contact and package, chase what is missing, and create the customer in the ERP.

## Systems

CRM (Salesforce), ticketing (Zendesk), ERP (NetSuite).

## How it works

1. Trigger: an opportunity moves to closed-won.
2. The Genie validates the legal entity, billing contact and package.
3. If anything is missing, it opens a ticket listing exactly what, instead of guessing.
4. Once complete, it drafts the NetSuite customer record.
5. An **approval step** holds the draft for a finance reviewer.
6. On approval, the customer is created and the sales team is told in Slack.

## Genie job description

```text
Role: Onboarding coordinator.
Reads: the closed opportunity, account and contacts in the CRM; existing customers in the ERP.
Does: check legal entity name, billing contact, billing address and package. Check whether the customer already exists in the ERP.
Needs approval: creating the customer record in the ERP.
Never does: create a customer that may already exist, or invent a billing detail.
When unsure: open a support ticket that lists each missing field, and stop.
Output: either a ticket with missing fields, or a draft customer record ready for approval.
```

## Approval gate

Finance sees the draft record and the CRM fields it came from. Approve, reject or edit. Each decision is logged with who made it.

## Build it from your AI assistant

```text
Inspect my Salesforce, Zendesk and NetSuite connections and any existing onboarding workflows. Propose a Genie for closed-won onboarding using the job description I paste next, with an approval step before the NetSuite write and a Slack notification after. Wait for my confirmation before creating anything.
```

More on the pattern: [AI agent governance](https://www.stacksync.com/security/ai-agents) has a worked NetSuite approval example.
