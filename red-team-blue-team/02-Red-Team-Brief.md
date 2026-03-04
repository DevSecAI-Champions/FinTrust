# 02 — Red Team Brief (Attackers)

**Do not share this document with the Blue Team.**

---

## Your mission

You are the **Red Team**. Your goal is to plan and document a **single** attack against **one** of FinTrust’s three applications. The Blue Team is defending all three apps but does **not** know which one you will attack.

---

## Your choices (all required)

### 1. Choose ONE app to attack

Pick exactly one target:

| Option | App | Notes |
|--------|-----|--------|
| **A** | **Web front** | Bank statements portal (React). Users log in and view/transfer funds. |
| **B** | **Mobile app** | Same banking features on mobile; uses same backend and auth. |
| **C** | **Partner API** | B2B API for partners; tokens, rate limits, and data exposure matter. |

Record your choice. You will use it in your draw.io attack map and in the debrief.

---

### 2. Choose ONE attacker type

Pick one profile from **[06-Attacker-Types.md](06-Attacker-Types.md)**. This defines your motivation, skill level, and typical tactics. It must be consistent with the attack option you choose next.

---

### 3. Choose ONE attack option

Pick **one** attack from the list of 10 in **[04-Attack-Options.md](04-Attack-Options.md)**. This is the specific way you will carry out your attack (e.g. credential theft, API abuse, injection). Your choice must be feasible against the app you selected in step 1.

---

## Deliverables

1. **Decisions (written)**
   - Target app: A, B, or C.
   - Attacker type: (name from [06-Attacker-Types.md](06-Attacker-Types.md)).
   - Attack option: (number and title from [04-Attack-Options.md](04-Attack-Options.md)).

2. **Attack map (draw.io)**  
   Follow **[07-Drawio-Mapping.md](07-Drawio-Mapping.md)**. Your diagram must show:
   - The chosen app and its components (e.g. browser, API, auth).
   - Steps of your attack (entry point → escalation → impact).
   - Where your chosen attack option and attacker type are reflected in the flow.

Bring your draw.io file (or link) to the debrief. You will present the map and state your three choices; the facilitator will then compare with the Blue Team’s defense to decide if the attack succeeded or was stopped.
