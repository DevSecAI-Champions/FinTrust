# Red Team Brief

**Do not share this document with the Blue Team.**

---

## Your mission

You are the **Red Team**. Your goal is to plan and document a **single** attack against **one** of FinTrust’s three applications. The Blue Team is defending all three apps but does **not** know which one you will attack.

---

## Step 1 — Pick your target app

Choose **ONE** of the three FinTrust applications to attack:

| Option | App | Description |
|--------|-----|-------------|
| **A** | **Web Frontend** | Customer-facing bank statement portal. Login, account overview, transaction history. |
| **B** | **Mobile App** | iOS/Android banking app. Biometric auth, push notifications, transfers. |
| **C** | **Partner API** | B2B REST API used by third-party financial services. API key auth, bulk data access. |

Record your choice. Do not reveal it to the Blue Team until the debrief.

---

## Step 2 — Choose your attacker type

Pick **ONE** attacker persona from the list below. This defines your motivation, resources, and typical tactics.

| # | Attacker type | Motivation | Typical tactics |
|---|----------------|------------|-----------------|
| 1 | **Script kiddie** | Curiosity, notoriety | Off-the-shelf tools, default creds, known exploits |
| 2 | **Opportunistic fraudster** | Financial gain | Credential stuffing, phishing, account takeover |
| 3 | **Insider (compromised or malicious)** | Theft, sabotage | Abuse of access, data exfiltration, backdoors |
| 4 | **Organised crime** | Large-scale fraud, ransom | Targeted phishing, malware, coordinated attacks |
| 5 | **Hacktivist** | Ideology, exposure | DDoS, defacement, data leak for publicity |
| 6 | **Competitor / corporate espionage** | Business advantage | Partner API abuse, scraping, logic abuse |
| 7 | **Nation-state / APT** | Strategic intelligence or disruption | Long-term access, supply chain, multiple vectors |
| 8 | **Automated bot / scraper** | Data harvesting, enumeration | Bulk requests, credential stuffing, IDOR at scale |
| 9 | **Credential stuffer** | Account takeover at scale | Leaked password lists, automated login attempts |
| 10 | **Supply chain attacker** | Compromise via dependencies or vendors | Malicious packages, compromised third-party code, IaC misconfig |

---

## Step 3 — Choose your attack method

Pick **ONE** attack technique from the list below. Your choice must be feasible against the app you selected in Step 1.

| # | Attack method |
|---|----------------|
| 1 | **SQL Injection** |
| 2 | **DDoS Attack** |
| 3 | **Internal Insider** |
| 4 | **Phishing Attack** |
| 5 | **Exploit Terraform Misconfiguration** |
| 6 | **Cross-Site Scripting (XSS)** |
| 7 | **Brute Force Password Attack** |
| 8 | **Exploit a Third Party** |
| 9 | **Man-in-the-Middle (MiTM) Attack** |
| 10 | **Password Spray** |
| 11 | **Ransomware Virus** |

---

## Deliverables

1. **Decisions (written)**  
   - Target app: A, B, or C.  
   - Attacker type: (number and name).  
   - Attack method: (number and name).

2. **Attack map (draw.io)**  
   Use the instructions in **DRAWIO_TEMPLATES.md**. Your diagram must show:
   - The chosen app and its components (e.g. browser, API, auth).
   - Steps of your attack (entry point → escalation → impact).
   - Your attacker type and attack method reflected in the flow.

**Do not reveal your target app or method to the Blue Team. Keep your draw.io diagram hidden until the reveal.**

Bring your draw.io file (or link) to the debrief. You will present the map and state your three choices; the facilitator will then compare with the Blue Team’s defense to decide if the attack succeeded or was stopped.
