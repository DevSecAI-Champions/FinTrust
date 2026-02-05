# Session-to-Repo Mapping

How FinTrust maps to DevSecAI Security Champions training sessions.

| Session / Topic        | Repo location              | What to use |
|------------------------|----------------------------|-------------|
| **OWASP Top 10**       | `api/`                     | Broken access control (IDOR in `users.js`), injection, error disclosure |
| **Secure coding**      | `web/`                     | XSS in `Login.js`, missing CSP, `dangerouslySetInnerHTML` |
| **IaC security**       | `terraform/`               | Public S3, wildcard IAM, unencrypted DB, no backup |
| **CI/CD security**     | `.github/workflows/`       | `ci.yml`, `iac-scan.yml`, `secrets-scan.yml`, `sbom.yml` |
| **Threat modeling**    | `docs/`                    | `architecture.md`, `toolkit/attack-surface-template.png`, `threat-modeling-guide.md` |
| **Pen testing**        | Whole stack                | Run `docker-compose up` and use as lab target |

See also: [OWASP ASVS checklist](toolkit/owasp-asvs-checklist.md), [threat modeling guide](toolkit/threat-modeling-guide.md), [maturity baseline](toolkit/maturity-baseline.md).
