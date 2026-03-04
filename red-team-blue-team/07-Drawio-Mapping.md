# 07 — Draw.io Mapping (Attack and Defense)

Both teams produce one diagram in **draw.io** ([app.diagrams.net](https://app.diagrams.net/) or diagrams.net). Use the same tool so maps can be compared in the debrief.

---

## Red Team: Attack map

**Tool:** draw.io (diagrams.net)  
**Save as:** e.g. `FinTrust-RedTeam-Attack-{team name}.drawio` or export to PNG/PDF.

### Your diagram must include

1. **Target app**  
   A single diagram focused on the app you chose (Web front, Mobile app, or Partner API). Show:
   - User/attacker, client (browser or app), API, auth, and any backend you care about.

2. **Attack flow**  
   Numbered steps, e.g.:
   - Step 1: Entry point (e.g. login form, API endpoint, phishing link).
   - Step 2–N: How you get in, escalate, or abuse the app (aligned with your chosen attack option).
   - Final step: Impact (e.g. data stolen, funds moved, account taken over).

3. **Labels**  
   Clearly label:
   - Chosen **app** (Web / Mobile / Partner API).
   - **Attacker type** (from [06-Attacker-Types.md](06-Attacker-Types.md)).
   - **Attack option** (number and short name from [04-Attack-Options.md](04-Attack-Options.md)).

### Tips

- Use a single colour (e.g. red) for attack path and a different one for normal components.
- One page is enough; keep it readable for the debrief.

---

## Blue Team: Defense map

**Tool:** draw.io (diagrams.net)  
**Save as:** e.g. `FinTrust-BlueTeam-Defense-{team name}.drawio` or export to PNG/PDF.

### Your diagram must include

1. **All three apps**  
   Show Web front, Mobile app, and Partner API (simplified boxes are fine). Indicate how they connect (e.g. to auth, API gateway).

2. **Where your 3 controls apply**  
   For each of your 3 chosen controls (from [05-Defense-Controls.md](05-Defense-Controls.md)):
   - Mark **which control** (ID and short name).
   - Mark **where** it applies: “all three apps” for the two global controls, or “Web only” / “Mobile only” / “Partner API only” for the extra one.

3. **How controls block or mitigate**  
   Optionally add short notes or arrows showing how each control would stop or reduce impact of example attacks (e.g. “C04 blocks IDOR”, “C01 reduces credential stuffing impact”).

### Tips

- Use a single colour (e.g. blue) for defensive controls and another for the apps.
- Make it clear which app has the extra (third) control.

---

## Sharing for the debrief

- Export to **PNG** or **PDF** for screen share, or share the **.drawio** file so the facilitator can open it.
- Both teams present their map in turn; then the facilitator uses [08-Debrief-Success.md](08-Debrief-Success.md) to decide who was successful.
