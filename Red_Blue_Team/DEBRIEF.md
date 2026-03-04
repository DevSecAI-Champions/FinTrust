# Debrief — The reveal: who won?

Use this when the group reconvenes after Red and Blue teams have built their draw.io maps. Both teams share their diagrams; the facilitator walks through the outcome. There is no single right answer — the debrief is where the real learning happens.

---

## Reveal script

1. **Red Team reveals their target**  
   Which app did they pick? Which attacker type and attack method did they choose? Walk the group through the attack path on the draw.io diagram.

2. **Blue Team reveals their controls**  
   Which 3 controls did they pick? Which app got the extra layer? Show the coverage map.

3. **Did the attack succeed?**  
   Overlay the attack path against the defence map. Did any of the Blue Team’s controls (that apply to the attacked app) block the chosen attack method? Was the priority app the right bet?

4. **What would have changed the outcome?**  
   If the attack succeeded: which control would have stopped it? If the defence held: what attack method would have bypassed it?

**Key insight to land:** Defenders must cover all surfaces; attackers only need one gap.

---

## Success criteria

### Attack succeeded (Red Team wins)

- The chosen **attack method** (from RED_TEAM.md) is **not** meaningfully mitigated by any of the Blue Team’s 3 controls **at the app Red Team attacked**.

### Attack stopped (Blue Team wins)

- At least one of the Blue Team’s controls that **applies to the attacked app** would **block or materially reduce** the chosen attack.

### Partial (optional)

- One control partially mitigates but does not fully stop the attack. Use for discussion: what would fully stop it?

---

## Facilitator checklist

| Question | Notes |
|----------|--------|
| Which app did Red Team attack? | Web Frontend / Mobile App / Partner API |
| Which attack method (1–11)? | SQL Injection, DDoS, Internal Insider, Phishing, Terraform Misconfiguration, XSS, Brute Force, Exploit Third Party, MiTM, Password Spray, Ransomware |
| Which 3 controls did Blue Team pick? | 2 apply to all apps; 1 applies to one priority app. Which app got the extra? |
| Do the 2 global controls apply to the attacked app? | Yes — they apply to all three. |
| Does the app-specific control apply to the attacked app? | Only if Blue Team chose that same app for their extra control. |
| Would any of those controls (that apply to this app) block or materially reduce the attack? | If yes → Attack stopped. If no → Attack succeeded. |

---

## Discussion prompts (after outcome)

- **Red Team:** What would you do if you had to attack again with the same constraints? What would you change?
- **Blue Team:** If you had known the target app, would you have chosen a different app for your extra control? Why?
- **Everyone:** Which one control would you add first in a real FinTrust rollout? Which attack is hardest to defend with only 3 controls?

---

## Recording the outcome

- **Attack succeeded** — Red Team’s attack was not stopped by the chosen defences.
- **Attack stopped** — At least one Blue Team control that applied to the attacked app would block or materially reduce the attack.
- **Partial** — (optional) Some mitigation but not full stop.

You can run multiple rounds with different Red/Blue choices to explore more attack/control combinations.
