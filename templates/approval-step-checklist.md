# Approval step checklist

Before you rely on an approval step:

- [ ] It runs before the write, not after.
- [ ] The reviewer sees the full payload and the evidence.
- [ ] The reviewer can approve, reject or edit.
- [ ] The reviewer is a person with the right role, not the person who built the agent.
- [ ] The decision and the person are logged.
- [ ] A rejected run ends cleanly and is visible in the log.
- [ ] You tested it with a record that should be rejected.
