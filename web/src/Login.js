/**
 * DELIBERATE SECURITY FLAW (Training only)
 * - Raw user input is rendered without escaping → XSS
 * - No CSRF token or Content-Security-Policy
 * Used in Secure Coding / OWASP sessions.
 */

import React, { useState } from 'react';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:4000';
const AUTH_URL = process.env.REACT_APP_AUTH_URL || 'http://localhost:5000';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [userInput, setUserInput] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${AUTH_URL}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      setMessage(data.token ? 'Login successful (training only)' : (data.error || 'Login failed'));
    } catch (err) {
      setMessage('Error: ' + err.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="user@example.com"
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>{message}</p>

      {/* DELIBERATE XSS: user input rendered as HTML without sanitization */}
      <div style={{ marginTop: '2rem' }}>
        <label>Display name (XSS demo — do not use in production)</label>
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Enter text or script payload"
        />
        <div dangerouslySetInnerHTML={{ __html: userInput || '(empty)' }} />
      </div>
    </div>
  );
}
