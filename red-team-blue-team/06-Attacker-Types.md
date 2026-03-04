# 06 — Attacker Types (Red Team picks ONE)

Red Team must choose **one** attacker type. This shapes motivation, resources, and how the chosen attack option is carried out. Your draw.io attack map should reflect this profile.

---

| Type | Name | Motivation | Typical tactics | Skill level |
|------|------|------------|-----------------|-------------|
| **T1** | **Script kiddie** | Curiosity, notoriety | Off-the-shelf tools, default creds, known exploits | Low |
| **T2** | **Opportunistic fraudster** | Financial gain | Credential stuffing, phishing, card/account takeover | Low–medium |
| **T3** | **Insider (compromised or malicious)** | Theft, sabotage | Abuse of access, data exfiltration, backdoors | Medium |
| **T4** | **Organised crime** | Large-scale fraud, ransom | Targeted phishing, malware, coordinated attacks | Medium–high |
| **T5** | **Hacktivist** | Ideology, exposure | DDoS, defacement, data leak for publicity | Medium |
| **T6** | **Competitor / corporate espionage** | Business advantage | Partner API abuse, scraping, logic abuse to infer data | Medium–high |
| **T7** | **Nation-state / APT** | Strategic intelligence or disruption | Long-term access, supply chain, multiple vectors | High |
| **T8** | **Automated bot / scraper** | Data harvesting, enumeration | Bulk requests, credential stuffing, IDOR at scale | Low (automated) |

---

## How to use

- Pick **one** type (T1–T8) and note it in your Red Team brief and on your attack map.
- Your chosen **attack option** (from [04-Attack-Options.md](04-Attack-Options.md)) should be consistent with this type (e.g. T2 often uses option 1 or 10; T6 might use option 5 or 9).
- In the debrief, the facilitator may ask how your attacker type influenced your entry point and impact.
