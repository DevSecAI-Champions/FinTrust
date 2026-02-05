/**
 * Simulated OAuth2 / JWT issuer for FinTrust Security Champions training.
 * Not production-ready; accepts any credentials for demo.
 */

const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = process.env.PORT || 5000;
const JWT_SECRET = process.env.JWT_SECRET || 'training-only-secret';

app.use(express.json());

app.post('/login', (req, res) => {
  const { email, password } = req.body || {};
  // Deliberate: no real validation; issues JWT for any request (training only)
  const token = jwt.sign(
    { sub: email || 'anonymous', email: email || 'anonymous@example.com' },
    JWT_SECRET,
    { expiresIn: '1h' }
  );
  res.json({ token });
});

app.get('/health', (req, res) => res.json({ status: 'ok' }));

app.listen(PORT, () => console.log(`FinTrust Auth on port ${PORT}`));
