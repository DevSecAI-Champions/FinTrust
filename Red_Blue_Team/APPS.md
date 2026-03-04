# FinTrust applications — Red & Blue Team reference

All three applications are in scope. Red Team attacks **one**; Blue Team defends **all three** without knowing the target.

---

## Web Frontend

- **Description:** Customer-facing bank statement portal. Users log in to view account overview, transaction history, and initiate transfers.
- **Tech / characteristics:** React app, session-based auth, high user volume, public-facing.
- **Relevant risks:** XSS, phishing, session hijacking, brute force, credential stuffing, MiTM.

---

## Mobile App

- **Description:** iOS/Android banking app. Same banking features as web: biometric auth, push notifications, transfers.
- **Tech / characteristics:** Native or hybrid app, token storage on device, biometric bypass vectors, same backend and auth as web.
- **Relevant risks:** Token theft, device compromise, phishing, password spray, third-party SDK abuse.

---

## Partner API

- **Description:** B2B REST API used by third-party financial services (aggregators, fintechs). API key auth, bulk data access.
- **Tech / characteristics:** REST API, API keys, rate limits, third-party trust; may use Terraform/IaC for deployment.
- **Relevant risks:** API key leakage, IDOR, Terraform misconfiguration, third-party compromise, DDoS, insider abuse.

---

See **RED_TEAM.md** (Red Team only) and **BLUE_TEAM.md** (Blue Team only) for your brief, options, and draw.io instructions.
