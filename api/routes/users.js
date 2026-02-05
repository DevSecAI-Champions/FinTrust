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

// Fake transactions per user (IDOR: request any user's transactions)
const transactions = {
  '1': [
    { id: 'T1', date: new Date().toISOString().slice(0, 10), description: 'Salary credit', amount: 1200, type: 'credit' },
    { id: 'T2', date: new Date(Date.now() - 864e5).toISOString().slice(0, 10), description: 'Card payment – Supermarket', amount: -45.32, type: 'debit' },
    { id: 'T3', date: new Date(Date.now() - 2 * 864e5).toISOString().slice(0, 10), description: 'Direct debit – Utilities', amount: -62, type: 'debit' },
    { id: 'T4', date: new Date(Date.now() - 3 * 864e5).toISOString().slice(0, 10), description: 'Transfer in', amount: 50, type: 'credit' },
  ],
  '2': [
    { id: 'T5', date: new Date().toISOString().slice(0, 10), description: 'Transfer from Alice', amount: 100, type: 'credit' },
    { id: 'T6', date: new Date(Date.now() - 864e5).toISOString().slice(0, 10), description: 'Card payment', amount: -30, type: 'debit' },
  ],
  '3': [
    { id: 'T7', date: new Date().toISOString().slice(0, 10), description: 'Deposit', amount: 500, type: 'credit' },
  ],
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

// DELIBERATE IDOR: view any user's transactions by changing :id
router.get('/:id/transactions', (req, res, next) => {
  const { id } = req.params;
  const list = transactions[id] || [];
  res.json(list);
});

router.get('/', (req, res) => {
  res.json(Object.values(users));
});

module.exports = router;
