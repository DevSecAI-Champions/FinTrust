# Red Team vs Blue Team — FinTrust Attack/Defend Simulation

A facilitated exercise for Security Champions training. The group is split into **Red Team** (attackers) and **Blue Team** (defenders) in a time-boxed simulation against the three FinTrust applications.

---

## Quick links (separate MD files)

| File | Purpose |
|------|--------|
| [01-Scenario-Overview.md](01-Scenario-Overview.md) | FinTrust apps, rules, and how the simulation runs |
| [02-Red-Team-Brief.md](02-Red-Team-Brief.md) | Attackers: pick one app, attacker type, and one attack option |
| [03-Blue-Team-Brief.md](03-Blue-Team-Brief.md) | Defenders: pick 3 controls (2 global + 1 app-specific), defend all three apps |
| [04-Attack-Options.md](04-Attack-Options.md) | List of 10 attack options — Red Team picks one |
| [05-Defense-Controls.md](05-Defense-Controls.md) | List of 20 controls — Blue Team picks 3 (2 all apps + 1 for one app) |
| [06-Attacker-Types.md](06-Attacker-Types.md) | Attacker type options — Red Team picks one |
| [07-Drawio-Mapping.md](07-Drawio-Mapping.md) | Using draw.io to map attack and defense |
| [08-Debrief-Success.md](08-Debrief-Success.md) | Reconvene, compare maps, and decide who was successful |

---

## Flow (high level)

1. **Split** — Half the group is Red Team, half is Blue Team. Each team gets their brief only.
2. **Red Team** — Chooses one of the three FinTrust apps to attack, one attacker type, and one attack from the list of 10. Maps the attack in draw.io.
3. **Blue Team** — Does not know which app will be attacked. Picks 3 controls from the list of 20: two that apply to **all three apps**, and one that applies **extra** to a **chosen app** (that app then has 3 controls in total). Maps the defense in draw.io.
4. **Reconvene** — Both teams present their draw.io maps. Facilitator leads a debrief to determine whether the attack succeeded or was stopped (see [08-Debrief-Success.md](08-Debrief-Success.md)).

---

## FinTrust applications (attack surface)

- **Web front** — Bank statements and user portal (React, port 3001).
- **Mobile app** — Customer banking on mobile (simulated in-scenario; shares API with web).
- **Partner API** — External partners (e.g. aggregators, B2B); backend API (port 4000) and auth (5001).

Red Team attacks **one** of these. Blue Team must defend **all three** without knowing the chosen target.
