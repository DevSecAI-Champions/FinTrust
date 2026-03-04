# 01 — Scenario Overview

## Purpose

This is a **Red Team vs Blue Team** simulation on the fictional **FinTrust** fintech stack. Students experience attack planning, control selection under uncertainty, and mapping both in draw.io. The outcome is decided in a structured debrief.

---

## FinTrust applications (three attack surfaces)

| App | Description | In-scope for exercise |
|-----|-------------|------------------------|
| **Web front** | Bank statements, balances, transfers. User-facing React portal. | Yes — real app in repo (port 3001). |
| **Mobile app** | Same banking features on mobile; consumes same backend APIs. | Yes — treat as separate channel; may share API/auth with web. |
| **Partner API** | B2B/aggregator API for partners. Node.js API (4000) + Auth (5001). | Yes — real API in repo. |

- **Red Team** chooses **one** of these three apps to attack.
- **Blue Team** must defend **all three** and does **not** know which app Red Team will attack.

---

## Rules summary

### Red Team (attackers)

- Pick **one** of the three apps: Web front, Mobile app, or Partner API.
- Pick **one** attacker type from [06-Attacker-Types.md](06-Attacker-Types.md).
- Pick **one** attack option from the list of 10 in [04-Attack-Options.md](04-Attack-Options.md).
- Produce a **draw.io** attack map (see [07-Drawio-Mapping.md](07-Drawio-Mapping.md)).

### Blue Team (defenders)

- Defend **all three** apps; do not know which app will be attacked.
- Pick **exactly 3** controls from the list of 20 in [05-Defense-Controls.md](05-Defense-Controls.md):
  - **Two** controls must apply to **all three** apps.
  - **One** control applies **extra** to **one chosen app** (so that app has 3 controls in total; the other two apps have 2 controls each).
- Produce a **draw.io** defense map (see [07-Drawio-Mapping.md](07-Drawio-Mapping.md)).

---

## Timing (suggested)

| Phase | Duration | Activity |
|-------|----------|----------|
| Briefing | 10 min | Everyone reads [01-Scenario-Overview.md](01-Scenario-Overview.md). Split into Red and Blue. |
| Red Team | 25 min | Read [02-Red-Team-Brief.md](02-Red-Team-Brief.md), [04-Attack-Options.md](04-Attack-Options.md), [06-Attacker-Types.md](06-Attacker-Types.md). Choose app, type, attack. Build draw.io attack map. |
| Blue Team | 25 min | Read [03-Blue-Team-Brief.md](03-Blue-Team-Brief.md), [05-Defense-Controls.md](05-Defense-Controls.md). Choose 3 controls (2 all + 1 app). Build draw.io defense map. |
| Debrief | 20 min | Reconvene. Present maps. Use [08-Debrief-Success.md](08-Debrief-Success.md) to decide if attack succeeded or was stopped. |

Adjust times to fit your session length.

---

## Materials

- This folder (all MD files).
- [draw.io](https://app.diagrams.net/) (or diagrams.net) for attack and defense maps.
- Optional: running FinTrust locally (`npm run install:all` then `npm run dev`) so Red Team can reference real endpoints.
