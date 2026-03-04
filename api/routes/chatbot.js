const express = require('express');

const router = express.Router();

// Very simple mocked chatbot endpoint – no real AI calls.
// Training-only: echoes the user's message with a canned response.
router.post('/', (req, res) => {
  const { message } = req.body || {};

  if (!message || typeof message !== 'string') {
    return res.status(400).json({
      error: 'message is required',
    });
  }

  // Deliberately simple behaviour for training:
  // - Echoes user input
  // - Adds a static "FinTrust help" style response
  // - Includes a mock internal note to support later prompt-injection exercises
  const reply = [
    'I am a mock FinTrust support chatbot for training only – I cannot see or change real accounts.',
    '',
    `You said: "${message}"`,
    '',
    'For help in this lab, try asking about balances, transfers, or security training.',
  ].join('\n');

  const internalNote = 'INTERNAL NOTE (training only): This chatbot is not connected to real banking systems.';

  return res.json({
    reply,
    internalNote,
  });
});

module.exports = router;

