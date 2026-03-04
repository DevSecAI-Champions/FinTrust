# 08 — Debrief and Success Criteria

Use this when the group reconvenes after Red and Blue teams have built their draw.io maps. The goal is to decide whether the **attack succeeded** or was **stopped** by the defense.

---

## Order of play

1. **Red Team presents** (5 min)  
   - Which app they attacked (Web / Mobile / Partner API).  
   - Their attacker type and attack option (number and name).  
   - Walk through the attack map: entry point → steps → impact.

2. **Blue Team presents** (5 min)  
   - Their 3 controls (2 all apps + 1 app-specific) and which app got the extra control.  
   - Walk through the defense map: where each control is applied.

3. **Facilitator-led comparison** (10 min)  
   - Use the criteria below to decide: **Attack succeeded** vs **Attack stopped** (or **Partial** if you use that option).

---

## Success criteria

### Attack succeeded (Red Team wins this round)

- The **chosen attack option** (from [04-Attack-Options.md](04-Attack-Options.md)) is **not** meaningfully mitigated by any of the Blue Team’s 3 controls **at the app Red Team attacked**.
- Example: Red Team chose IDOR (option 4) on the Partner API. Blue Team’s two global controls are C05 (TLS) and C10 (error handling); their app-specific control is C14 (API key scope) on the **Web** app. Partner API therefore has only C05 and C10, neither of which stops IDOR → **Attack succeeded**.

### Attack stopped (Blue Team wins this round)

- At least one of the Blue Team’s controls that **applies to the attacked app** would **block or materially reduce** the chosen attack.
- Example: Red Team chose XSS (option 3) on the Web app. Blue Team has C03 (input validation / output encoding) as a global control and C06 (security headers) as the extra control on the **Web** app. Both C03 and C06 are relevant to XSS on Web → **Attack stopped**.

### Partial (optional)

- One control partially mitigates (e.g. slows or narrows the attack) but does not fully stop it. Facilitator can call this a **Partial** and briefly discuss what would be needed to fully stop it.

---

## Checklist for the facilitator

| Question | Notes |
|----------|--------|
| Which app did Red Team attack? | Web / Mobile / Partner API |
| Which attack option (1–10)? | See [04-Attack-Options.md](04-Attack-Options.md). |
| Which 3 controls did Blue Team pick? | 2 global + 1 app-specific; which app got the extra? |
| Do the 2 global controls apply to the attacked app? | Yes — they apply to all three. |
| Does the app-specific control apply to the attacked app? | Only if Blue Team chose that same app for their extra control. |
| For the chosen attack, would any of those controls (that apply to this app) block or materially reduce it? | If yes → Attack stopped. If no → Attack succeeded. |

---

## Discussion prompts (after outcome)

- **Red Team:** What would you do if you had to attack again with the same constraints? What would you change?
- **Blue Team:** If you had known the target app, would you have chosen a different app for your extra control? Why?
- **Everyone:** Which one control would you add first in a real FinTrust rollout? Which attack is hardest to defend with only 3 controls?

---

## Recording the outcome

- **Attack succeeded** — Red Team’s attack was not stopped by the chosen defenses.
- **Attack stopped** — At least one Blue Team control that applied to the attacked app would block or materially reduce the attack.
- **Partial** — (optional) Some mitigation but not full stop.

You can run multiple rounds with different Red/Blue choices to explore more attack/control combinations.
