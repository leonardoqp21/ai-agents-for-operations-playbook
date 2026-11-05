# Playbook 07: Order questions from Slack

**Use a:** Genie.

## The problem

Support and sales ask ops "where is order 4312?" all day. Each answer needs the order, its fulfillment status and the tracking.

## Systems

Chat (Slack), commerce (Shopify), the fulfillment or ERP record.

## How it works

1. Someone asks in a channel.
2. The Genie finds the order, checks fulfillment and tracking, and drafts a reply.
3. If the question has no order number, it **asks for it instead of guessing**.

## Genie job description

```text
Role: Order status assistant.
Reads: orders in the commerce system; fulfillment and tracking records.
Does: find the order by number or by email plus date. Report status, tracking and last event. Draft a reply a person can send.
Needs approval: none for read-only answers. Any refund, cancel or edit needs a person.
Never does: guess an order from a name alone, or change an order.
When unsure: ask for the order number.
Output: a short answer with the order number, status and tracking link.
```

## Build it from your AI assistant

```text
Inspect my Slack, Shopify and fulfillment connections. Propose a read-only Genie that answers order status questions in one Slack channel using the job description I paste next. Confirm the channel and the scope before creating anything.
```

Part of the [operations playbook](../README.md). See [Genies on Stacksync](https://www.stacksync.com/ai-agents).
