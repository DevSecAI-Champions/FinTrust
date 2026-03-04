# Draw.io attack and defence map templates

Both teams produce one diagram in **draw.io** ([app.diagrams.net](https://app.diagrams.net/) or diagrams.net). Use the same tool so maps can be compared in the debrief.

---

## Red Team — Attack map

**Tool:** draw.io (diagrams.net)  
**Save as:** e.g. `FinTrust-RedTeam-Attack-{team name}.drawio` or export to PNG/PDF.

### Your diagram must include

1. **Target app**  
   Focus on the app you chose (Web Frontend, Mobile App, or Partner API). Show user/attacker, client (browser or app), API, auth, and any backend you care about.

2. **Attack flow**  
   Numbered steps, e.g.:
   - Step 1: Entry point (e.g. login form, API endpoint, phishing link).
   - Step 2–N: How you get in, escalate, or abuse the app (aligned with your chosen attack method).
   - Final step: Impact (e.g. data stolen, funds moved, account taken over).

3. **Labels**  
   Clearly label your chosen **app**, **attacker type**, and **attack method** (from RED_TEAM.md).

### Tips

- Use one colour (e.g. red) for the attack path and another for normal components.
- One page is enough; keep it readable for the debrief.
- Do not reveal your diagram or target until the facilitator runs the reveal.

---

## Blue Team — Defence map

**Tool:** draw.io (diagrams.net)  
**Save as:** e.g. `FinTrust-BlueTeam-Defense-{team name}.drawio` or export to PNG/PDF.

### Your diagram must include

1. **All three apps**  
   Show Web Frontend, Mobile App, and Partner API (simplified boxes are fine). Indicate how they connect (e.g. to auth, API gateway).

2. **Where your 3 controls apply**  
   For each of your 3 chosen controls (from BLUE_TEAM.md):
   - Mark **which control** (ID and name).
   - Mark **where** it applies: “all three apps” for the two global controls, or “Web only” / “Mobile only” / “Partner API only” for the extra one.

3. **Coverage**  
   Optionally add short notes or arrows showing how each control would block or mitigate example attacks (e.g. “WAF blocks XSS”, “MFA reduces password spray impact”).

### Tips

- Use one colour (e.g. blue) for defensive controls and another for the apps.
- Make it clear which app has the extra (third) control.

---

## Sharing for the debrief

- Export to **PNG** or **PDF** for screen share, or share the **.drawio** file so the facilitator can open it.
- Both teams present their map in turn; then the facilitator uses **DEBRIEF.md** for scoring and discussion.
