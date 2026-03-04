# 04 — Attack Options (Red Team picks ONE)

Red Team must choose **exactly one** of the following 10 options. The choice must be feasible against the single app they selected (Web front, Mobile app, or Partner API).

---

| # | Attack option | Best fits app(s) | Short description |
|---|----------------|------------------|--------------------|
| **1** | **Credential stuffing / password spray** | Web, Mobile | Use leaked or default credentials to gain access to user or partner accounts. |
| **2** | **Session hijacking / token theft** | Web, Mobile, Partner API | Steal or forge session cookies, JWTs, or API keys to impersonate a user or partner. |
| **3** | **Cross-site scripting (XSS)** | Web | Inject script into the web app so it runs in victims’ browsers; steal sessions or alter content. |
| **4** | **Insecure direct object reference (IDOR)** | Web, Mobile, Partner API | Manipulate IDs in requests (e.g. user ID, account ID) to access another user’s or partner’s data. |
| **5** | **API abuse / broken object-level auth** | Partner API, Web, Mobile | Call APIs without proper authorization, or use another tenant’s/partner’s identifiers. |
| **6** | **Injection (SQL / command / NoSQL)** | Partner API, Web | Send crafted input to break out of queries or commands and read/modify data or execute code. |
| **7** | **Sensitive data exposure (logs, errors, responses)** | All three | Obtain PII, tokens, or internal details via verbose errors, logs, or API responses. |
| **8** | **Man-in-the-middle (MITM) / lack of TLS** | Web, Mobile, Partner API | Intercept or modify traffic in transit when TLS is weak or not enforced. |
| **9** | **Abuse of business logic (transfers, limits)** | Web, Mobile, Partner API | Exploit flawed rules (e.g. negative amounts, bypassing limits, race conditions). |
| **10** | **Phishing / social engineering** | Web, Mobile | Trick users or support into revealing credentials or performing actions (e.g. reset link). |

---

## How to use this list

- Red Team: pick **one** number (1–10) and document it in your brief and on your draw.io attack map.
- In the debrief, the facilitator will check whether the Blue Team’s three chosen controls would block or mitigate this specific attack against the chosen app.
