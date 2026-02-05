/**
 * DELIBERATE SECURITY FLAWS (Training only)
 * - Missing auth check: /users/:id returns data without verifying JWT
 * - IDOR: any caller can access any user by id
 * - No rate-limiting
 * Used in OWASP Top 10 / Broken Access Control sessions.
 */

const express = require('express');
const router = express.Router();

// In-memory stub for training (no real DB)
const users = {
  '1': { id: '1', email: 'alice@example.com', balance: 1000 },
  '2': { id: '2', email: 'bob@example.com', balance: 2500 },
  '3': { id: '3', email: 'charlie@example.com', balance: 500 },
};

// DELIBERATE: No middleware to verify JWT; anyone can request any user by id (IDOR)
router.get('/:id', (req, res, next) => {
  const { id } = req.params;
  const user = users[id];
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }
  res.json(user);
});

router.get('/', (req, res) => {
  res.json(Object.values(users));
});

module.exports = router;
