# Genie or workflow?

Use the least intelligent tool that does the job.

| Question | Workflow | Genie |
|---|---|---|
| Is the rule known in advance? | Yes | No, it needs judgment |
| Same input, same output every time? | Required | Not required |
| Does it read free text or documents? | Rarely | Often |
| Does it need to explain why? | Log of steps | Evidence for each decision |
| Cost and audit | Simple | Higher, so scope it |

## Rules of thumb

- **Matching on IDs, amounts and dates:** workflow.
- **Reading an attachment and deciding what it is:** Genie.
- **Both:** a workflow for the known 90 percent, a Genie for the exceptions. [Playbook 01](../playbooks/01-freight-invoice-disputes.md) does this.
- **Any write that is hard to undo:** an approval step, whichever you pick.
- **Policy against AI?** Two-way sync and workflows run without Copilot or Genies, with the same approvals and logs.

More on [workflow automation](https://www.stacksync.com/workflow-automation).
