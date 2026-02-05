/**
 * DELIBERATE SECURITY FLAWS (Training only)
 * - No auth: anyone can submit a transfer
 * - IDOR: can specify fromUserId/toUserId (transfer from any account to any account)
 * - No balance validation, no rate limit
 * Used for OWASP Broken Access Control / IDOR training.
 */

const express = require('express');
const router = express.Router();

// Stub: in real app would update balances
router.post('/', (req, res) => {
  const { fromUserId, toUserId, amount, reference } = req.body || {};
  const from = fromUserId || '1';
  const to = toUserId || '2';
  const amt = Number(amount) || 0;
  const ref = reference || 'Transfer';
  // Deliberate: no check that requester owns fromUserId; no balance check
  res.status(201).json({
    success: true,
    transferId: `T${Date.now()}`,
    fromAccount: from,
    toAccount: to,
    amount: amt,
    reference: ref,
    message: 'Transfer submitted.',
  });
});

module.exports = router;
