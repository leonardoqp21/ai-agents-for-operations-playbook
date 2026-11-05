# Example skills for operations agents

A **skill** is a folder with a `SKILL.md` file: a name, a description that says when to use it, and instructions. It follows the open Agent Skills format that Claude, Cursor, Gemini CLI, Copilot and others read.

Skills do not run anything. The Stacksync MCP server does the work, and a skill tells the assistant **how**: the questions to ask first, the steps in order, and the rules that keep a live account safe.

## Official Stacksync skills

Use these first: [stacksyncdata/skills](https://github.com/stacksyncdata/skills). Install:

```bash
npx skills add stacksyncdata/skills
```

In Claude Code: `/plugin marketplace add stacksyncdata/skills`, then `/plugin install stacksync@stacksync`. With the MCP server connected, Claude and ChatGPT get the skills from the server itself.

## The examples in this folder

These three are **teaching examples** for this playbook, written to show the format. They are not official Stacksync skills.

| Folder | Playbook |
|---|---|
| [`invoice-reconciliation`](invoice-reconciliation/SKILL.md) | [01](../../playbooks/01-freight-invoice-disputes.md), [02](../../playbooks/02-invoice-and-document-intake.md) |
| [`account-enrichment-review`](account-enrichment-review/SKILL.md) | [05](../../playbooks/05-account-enrichment.md) |
| [`ticket-escalation-triage`](ticket-escalation-triage/SKILL.md) | [06](../../playbooks/06-ticket-escalation.md) |

## Anatomy of a skill

```text
my-skill/
  SKILL.md          required
  references/       optional, longer notes the skill points to
```

`SKILL.md` starts with YAML frontmatter:

```markdown
---
name: my-skill
description: One or two sentences on what it does and when to use it. The assistant reads this to decide whether to load the skill.
---

Instructions in Markdown.
```

Tips that make a skill work:

- Write the description as a trigger: "Use when ...".
- Put the safety rules in the first lines, not the last.
- Say what to ask the person before acting.
- Name the order of steps, and where to stop for approval.
- Keep it short. Link out for detail.

## Install an example

Copy the folder into your client's skills directory (for Claude Code, `.claude/skills/<name>/SKILL.md` in your project or `~/.claude/skills/<name>/`). Restart the session.
