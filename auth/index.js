/**
 * Simulated OAuth2 / JWT issuer for FinTrust Security Champions training.
 * Not production-ready; accepts any credentials for demo.
 */

const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = process.env.PORT || 5001;
const JWT_SECRET = process.env.JWT_SECRET || 'training-only-secret';

// Deliberate: hardcoded test credentials (Security Champions training)
const TEST_USERS = {
    'alice@fintrust.com': { password: 'Password1', role: 'admin' },
    'bob@fintrust.com':   { password: 'Password2', role: 'user' },
    'charlie@fintrust.com': { password: 'Welcome123!', role: 'auditor' },
};

app.use(cors());
app.use(express.json());

app.post('/login', (req, res) => {
  try {
    const body = req.body && typeof req.body === 'object' ? req.body : {};
    const { email, password } = body;
    // Deliberate: no real validation; issues JWT for any request (training only)
    const token = jwt.sign(
      { sub: email || 'anonymous', email: email || 'anonymous@example.com' },
      JWT_SECRET,
      { expiresIn: '1h' }
    );
    res.json({ token });
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ error: 'Login failed', message: err.message });
  }
});

app.get('/health', (req, res) => res.json({ status: 'ok' }));

app.use((err, req, res, next) => {
  console.error('Auth error:', err);
  res.status(500).json({ error: 'Internal error', message: err.message });
});

app.listen(PORT, () => console.log(`FinTrust Auth on port ${PORT}`));
