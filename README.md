# FinTrust

**FinTrust** is a fictional fintech application built for [DevSecAI](https://github.com/DevSecAI-Champions)'s 6-month **Security Champions** training programme. This repo is intentionally scaffolded with deliberate security flaws for secure coding, IaC, and DevSecOps training—**do not use in production**.

Official repo: [github.com/DevSecAI-Champions/FinTrust](https://github.com/DevSecAI-Champions/FinTrust)

---

## Architecture overview

- **Web** (React) — Port 3000: User-facing portal; contains deliberate XSS and missing security headers for training.
- **API** (Node.js/Express) — Port 4000: Backend API; contains missing auth checks, IDOR, and verbose error responses for training.
- **Auth** (Node.js) — Port 5000: Simulated OAuth2/JWT issuer for login flows.

All services run in Docker and communicate over an internal network. See [docs/architecture.md](docs/architecture.md) for a diagram.

---

## Run locally with Docker

```bash
cp .env.example .env   # optional: edit if needed
docker-compose up --build
```

- Web: http://localhost:3000  
- API: http://localhost:4000  
- Auth: http://localhost:5000  

---

## Session-to-repo mapping

| Training focus        | Where in the repo                          |
|-----------------------|--------------------------------------------|
| **OWASP Top 10**      | `api/` — injection, broken auth, IDOR, etc. |
| **Secure coding**     | `web/` — XSS, missing CSP, unsafe input handling |
| **Infrastructure as Code** | `terraform/` — public S3, wildcard IAM, unencrypted DB |
| **CI/CD security**    | `.github/workflows/` — SAST, IaC scan, secrets, SBOM |
| **Threat modeling**   | `docs/` — attack surface template, threat-modeling guide |
| **Pen testing**       | Whole stack — end-to-end lab environment |

See [docs/session-mapping.md](docs/session-mapping.md) for details.

---

## Security notice

This repository includes **deliberate security flaws** for training only. Do not deploy to production or use real credentials. All sensitive-looking values in `.env.example` are placeholders.
