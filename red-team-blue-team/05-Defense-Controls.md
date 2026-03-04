# 05 — Defense Controls (Blue Team picks 3)

Blue Team must choose **exactly 3** controls from the list below:

- **Two** must apply to **all three** apps (Web, Mobile, Partner API).
- **One** applies **extra** to **one app** of your choice (that app then has 3 controls in total).

Controls marked **All** can be used as one of your two “all apps” choices. Controls marked **Web**, **Mobile**, or **API** can be used as the app-specific (extra) control for that app.

---

| ID | Control | App scope | Short description |
|----|---------|-----------|--------------------|
| **C01** | Strong authentication (MFA / step-up) | All | Require MFA or step-up for sensitive actions; reduce impact of stolen passwords. |
| **C02** | Secure session and token handling | All | Short-lived tokens, secure cookies, binding to device/fingerprint where appropriate. |
| **C03** | Input validation and output encoding | All | Validate and sanitise all inputs; encode outputs to prevent injection and XSS. |
| **C04** | Authorization checks on every request | All | Enforce object-level and endpoint-level auth so users/partners only access their data. |
| **C05** | TLS everywhere and HSTS | All | Enforce TLS 1.2+ and HSTS to mitigate MITM and downgrade. |
| **C06** | Security headers (CSP, X-Frame-Options, etc.) | Web, All | CSP, X-Frame-Options, etc. to reduce XSS and clickjacking; “All” if you apply headers at gateway for all channels. |
| **C07** | Rate limiting and throttling | All | Limit login attempts, API calls, and transfers per user/partner/IP. |
| **C08** | Audit logging and alerting | All | Log auth and sensitive actions; alert on anomalies (e.g. impossible travel, bulk access). |
| **C09** | Secrets and key management | All | No hardcoded secrets; rotate keys; use vault or managed secrets. |
| **C10** | Error handling and logging (no sensitive data) | All | Generic user-facing errors; no stack traces or secrets in responses or logs. |
| **C11** | WAF or request filtering | Web, API | Block known bad patterns (e.g. injection, known exploits) at edge or API layer. |
| **C12** | Anti-CSRF and stateful flows | Web, Mobile | CSRF tokens and correct SameSite cookies; validate state in critical flows. |
| **C13** | Client-side integrity (cert pinning, integrity checks) | Mobile | Certificate pinning and/or app integrity checks to reduce MITM and tampering. |
| **C14** | Partner API key / scope enforcement | API | Strict API key and scope checks so partners only access allowed resources. |
| **C15** | Database parameterised queries and least privilege | All | Parameterised queries to prevent injection; DB user with minimal required permissions. |
| **C16** | Business logic validation (amounts, limits, idempotency) | All | Validate amounts, limits, and idempotency keys to block logic abuse. |
| **C17** | Secure dependency and supply chain | All | Track and patch dependencies; SBOM; reduce risk from vulnerable libraries. |
| **C18** | Sandbox or isolation for user content | Web, API | Render or process user content in sandboxed environment to limit blast radius. |
| **C19** | Data classification and access policy | All | Classify data; restrict access and storage by policy (e.g. no PII in logs). |
| **C20** | Security training and phishing simulation | Web, Mobile | Training and simulated phishing to reduce success of social engineering. |

---

## App scope legend

- **All** — Control can count as one of your two “applies to all three apps” choices.
- **Web** — Can be chosen as the extra control that applies specifically to the Web front.
- **Mobile** — Can be chosen as the extra control that applies specifically to the Mobile app.
- **API** — Can be chosen as the extra control that applies specifically to the Partner API.

If a control is listed as e.g. **Web, All**, you may use it either as a global control (All) or as the app-specific (Web) control, but not both in the same game.
