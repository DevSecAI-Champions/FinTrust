# 03 — Blue Team Brief (Defenders)

**Do not share this document with the Red Team.**

---

## Your mission

You are the **Blue Team**. Your goal is to defend **all three** FinTrust applications with a **limited** set of controls. You do **not** know which app the Red Team will attack, so your choices must spread coverage across the whole stack while still allowing one app to be slightly stronger.

---

## The three apps you must defend

| App | Description |
|-----|-------------|
| **Web front** | Bank statements, balances, transfers. User-facing React portal. |
| **Mobile app** | Same banking on mobile; shares backend and auth with web. |
| **Partner API** | B2B API for partners; tokens, rate limits, data exposure. |

---

## Your choices (strict rules)

You have a list of **20 controls** in **[05-Defense-Controls.md](05-Defense-Controls.md)**. You must pick **exactly 3**:

1. **Two controls** that apply to **all three** apps (e.g. authentication hardening, encryption in transit). These count as one control each and protect Web, Mobile, and Partner API.
2. **One control** that applies **extra** to **one app of your choice** (Web, Mobile, or Partner API). That chosen app then has **3 controls in total** (the 2 global + this 1). The other two apps only have the **2 global** controls.

So after your choices:

- One app has 3 controls (2 global + 1 app-specific).
- The other two apps have 2 controls each (the 2 global only).

You must decide **before** the debrief which app gets the extra control. You cannot change it after you see the Red Team’s target.

---

## Deliverables

1. **Decisions (written)**
   - Control 1 (applies to all three): (ID and title from [05-Defense-Controls.md](05-Defense-Controls.md)).
   - Control 2 (applies to all three): (ID and title).
   - Control 3 (applies extra to one app): (ID and title) — and state which app: Web / Mobile / Partner API.

2. **Defense map (draw.io)**  
   Follow **[07-Drawio-Mapping.md](07-Drawio-Mapping.md)**. Your diagram must show:
   - All three apps and their main components.
   - Where each of your 3 controls is applied (and which app has the extra control).
   - How those controls would block or mitigate the kinds of attacks from the attack-options list (without knowing which one Red Team chose).

Bring your draw.io file (or link) to the debrief. The facilitator will compare your defense with the Red Team’s attack to decide whether the attack succeeded or was stopped.
