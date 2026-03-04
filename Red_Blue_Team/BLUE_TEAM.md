# Blue Team Brief

**Do not share this document with the Red Team.**

---

## Your mission

You are the **Blue Team**. Your goal is to defend **all three** FinTrust applications with a **limited** set of controls. You do **not** know which app the Red Team will attack, so your choices must spread coverage across the whole stack. One app can have extra protection.

---

## Step 1 — Understand your attack surface

You must defend all three applications. See **APPS.md** for full descriptions.

| App | Summary |
|-----|---------|
| **Web Frontend** | Public-facing, high user volume, session-based auth. |
| **Mobile App** | Device-level risks, token storage, biometric bypass vectors. |
| **Partner API** | API key exposure, bulk data risk, third-party trust issues. |

---

## Step 2 — Pick your 3 controls

You have **16 controls** to choose from. You must pick **exactly 3**. Rules:

1. **Controls 1 & 2** must apply to **ALL three apps** (e.g. WAF, MFA, IDS, backups).
2. **Control 3** applies to **ONE priority app** of your choice — that app gets an extra layer of defence (so it has 3 controls in total; the other two apps have 2 each).
3. You cannot pick more than 3. Choose wisely.

### List of 16 controls

| ID | Control |
|----|---------|
| 1 | Multi-Factor Authentication (MFA) |
| 2 | Web Application Firewall (WAF) |
| 3 | Load Balancers |
| 4 | Dynamic Application Security Testing (DAST) |
| 5 | Static Application Security Testing (SAST) |
| 6 | Third-Party Due Diligence |
| 7 | Anti-Virus |
| 8 | Enhanced Background Checks |
| 9 | Virtual Private Network (VPN) |
| 10 | Backups |
| 11 | Intrusion Detection System (IDS) |
| 12 | Data Loss Prevention (DLP) |
| 13 | Infrastructure as Code (IaC) Scanner |
| 14 | Segregation of Duties |
| 15 | Identity and Access Management (IAM) Access Analyser |
| 16 | Amazon GuardDuty |

---

## Step 3 — Map your defence in draw.io

Using the instructions in **DRAWIO_TEMPLATES.md**, map which controls protect which apps. Show your coverage — the facilitator will use this in the debrief.

**You're defending blind.** The Red Team has already chosen their target. Your 3 controls must cover as much surface as possible, but one app will always have more protection than the others.

---

## Deliverables

1. **Decisions (written)**  
   - Control 1 (applies to all three): (ID and name).  
   - Control 2 (applies to all three): (ID and name).  
   - Control 3 (applies to one priority app): (ID and name) — and state which app: Web Frontend / Mobile App / Partner API.

2. **Defence map (draw.io)**  
   Show all three apps, where each of your 3 controls is applied, and which app has the extra control.

Bring your draw.io file (or link) to the debrief. The facilitator will compare your defense with the Red Team’s attack to decide whether the attack succeeded or was stopped.
