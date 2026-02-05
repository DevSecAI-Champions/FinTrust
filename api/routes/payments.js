/**
 * DELIBERATE SECURITY FLAWS (Training only)
 * - No auth, no CSRF
 * - No validation on amount or payee
 * Used for secure coding / OWASP training.
 */

const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const { fromAccountId, payeeName, amount, reference } = req.body || {};
  const ref = reference || 'Bill payment';
  // Deliberate: no ownership check on fromAccountId
  res.status(201).json({
    success: true,
    paymentId: `P${Date.now()}`,
    payee: payeeName || 'Payee',
    amount: Number(amount) || 0,
    reference: ref,
    message: 'Payment scheduled.',
  });
});

module.exports = router;
