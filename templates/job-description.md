# Genie job description template

Copy this, fill every line, and paste it into your Genie setup. A line you cannot fill is a gap in the design.

```text
Role:            <one line: who this agent is>
Reads:           <systems and objects it may read>
Does:            <the steps, in order>
Needs approval:  <every write that needs a person>
Never does:      <hard limits, including what it must not guess>
When unsure:     <what it does instead of guessing>
Output:          <the exact shape of what it returns>
```

## Checklist

- [ ] Every system it reads is connected and the fields exist.
- [ ] Every write is listed under "Needs approval" or deliberately allowed.
- [ ] "Never does" names the risky action for this job.
- [ ] "When unsure" is an action, not "use judgment".
- [ ] The output can be checked by someone who did not build it.
