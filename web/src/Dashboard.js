/**
 * Post-login dashboard – accounts, transfer, pay bill, statements.
 * Deliberate flaws: IDOR (view any account statements), no CSRF on forms, API has no auth.
 */

import React, { useState, useEffect } from 'react';

const API_BASE = '';
const DEMO_ACCOUNT = { id: '1', email: 'alice@example.com', balance: 1250.5 };

export default function Dashboard({ onLogout }) {
  const [view, setView] = useState('overview');
  const [account, setAccount] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    fetch(`${API_BASE}/api/users/1`)
      .then((res) => (res.ok ? res.json() : Promise.reject(new Error('Failed'))))
      .then((data) => { if (!cancelled) setAccount(data); })
      .catch(() => { if (!cancelled) { setAccount(DEMO_ACCOUNT); setError(null); } })
      .finally(() => { if (!cancelled) setLoading(false); });
    return () => { cancelled = true; };
  }, []);

  const nav = [
    { id: 'overview', label: 'Overview' },
    { id: 'transfer', label: 'Transfer' },
    { id: 'pay', label: 'Pay a bill' },
    { id: 'statements', label: 'Statements' },
  ];

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <div>
          <h2>Accounts</h2>
          <p className="dashboard-welcome">Welcome back. Here’s an overview of your accounts.</p>
        </div>
        <button type="button" className="btn btn-outline" onClick={onLogout}>
          Sign out
        </button>
      </div>

      <nav className="dashboard-nav" aria-label="Account sections">
        {nav.map(({ id, label }) => (
          <button
            key={id}
            type="button"
            className={`dashboard-nav-btn ${view === id ? 'active' : ''}`}
            onClick={() => setView(id)}
          >
            {label}
          </button>
        ))}
      </nav>

      {loading && <p className="dashboard-loading">Loading…</p>}
      {error && <div className="message">{error}</div>}

      {account && !loading && (
        <>
          {view === 'overview' && (
            <Overview account={account} />
          )}
          {view === 'transfer' && (
            <Transfer account={account} />
          )}
          {view === 'pay' && (
            <PayBill account={account} />
          )}
          {view === 'statements' && (
            <Statements account={account} />
          )}
        </>
      )}
    </div>
  );
}

function Overview({ account }) {
  return (
    <>
      <div className="account-card">
        <div className="account-card-header">
          <span className="account-type">Current account</span>
          <span className="account-id">**** {account.id}</span>
        </div>
        <div className="account-balance">
          <span className="account-balance-label">Available balance</span>
          <span className="account-balance-amount">
            £{Number(account.balance).toLocaleString('en-GB', { minimumFractionDigits: 2 })}
          </span>
        </div>
        <div className="account-meta">{account.email}</div>
      </div>
      <div className="dashboard-section">
        <h3>Recent activity</h3>
        <ul className="activity-list">
          <li>
            <span className="activity-desc">Salary credit</span>
            <span className="activity-amount positive">+£1,200.00</span>
            <span className="activity-date">Today</span>
          </li>
          <li>
            <span className="activity-desc">Card payment – Supermarket</span>
            <span className="activity-amount negative">−£45.32</span>
            <span className="activity-date">Yesterday</span>
          </li>
          <li>
            <span className="activity-desc">Direct debit – Utilities</span>
            <span className="activity-amount negative">−£62.00</span>
            <span className="activity-date">2 days ago</span>
          </li>
        </ul>
      </div>
    </>
  );
}

function Transfer({ account }) {
  const [toAccount, setToAccount] = useState('');
  const [amount, setAmount] = useState('');
  const [reference, setReference] = useState('');
  const [status, setStatus] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus(null);
    setSubmitting(true);
    fetch(`${API_BASE}/api/transfers`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        fromUserId: account.id,
        toUserId: toAccount || '2',
        amount: parseFloat(amount) || 0,
        reference: reference || 'Transfer',
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setStatus({ type: 'success', message: data.message || 'Transfer submitted successfully.', ref: data.transferId });
        setAmount('');
        setReference('');
      })
      .catch(() => setStatus({ type: 'error', message: 'Transfer failed. Is the API running on port 4000?' }))
      .finally(() => setSubmitting(false));
  };

  return (
    <div className="form-card">
      <h3>Transfer money</h3>
      <p className="form-card-desc">Move money to another FinTrust account. No auth check on API (training).</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="transfer-from">From account</label>
          <input id="transfer-from" type="text" value={`**** ${account.id} – £${Number(account.balance).toFixed(2)}`} readOnly className="input-readonly" />
        </div>
        <div className="form-group">
          <label htmlFor="transfer-to">To account (user ID – IDOR: try 2 or 3)</label>
          <input
            id="transfer-to"
            type="text"
            value={toAccount}
            onChange={(e) => setToAccount(e.target.value)}
            placeholder="e.g. 2"
          />
        </div>
        <div className="form-group">
          <label htmlFor="transfer-amount">Amount (£)</label>
          <input
            id="transfer-amount"
            type="number"
            step="0.01"
            min="0"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="0.00"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="transfer-ref">Reference</label>
          <input
            id="transfer-ref"
            type="text"
            value={reference}
            onChange={(e) => setReference(e.target.value)}
            placeholder="Optional"
          />
        </div>
        <button type="submit" className="btn" disabled={submitting}>
          {submitting ? 'Submitting…' : 'Submit transfer'}
        </button>
      </form>
      {status && (
        <div className={`message ${status.type === 'success' ? 'success' : 'error'}`} role="alert">
          {status.message}
          {status.ref && <div className="message-ref">Ref: {status.ref}</div>}
        </div>
      )}
    </div>
  );
}

function PayBill({ token }) {
  const [payee, setPayee] = useState('');
  const [amount, setAmount] = useState('');
  const [reference, setReference] = useState('');
  const [status, setStatus] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus(null);
    setSubmitting(true);
    fetch(`${API_BASE}/api/payments`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        payeeName: payee,
        amount: parseFloat(amount) || 0,
        reference: reference || 'Bill payment',
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setStatus({ type: 'success', message: data.message || 'Payment scheduled.', ref: data.paymentId });
        setPayee('');
        setAmount('');
        setReference('');
      })
      .catch(() => setStatus({ type: 'error', message: 'Payment failed. Is the API running?' }))
      .finally(() => setSubmitting(false));
  };

  return (
    <div className="form-card">
      <h3>Pay a bill</h3>
      <p className="form-card-desc">Set up a payment. No CSRF or auth on API (training).</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="payee">Payee name</label>
          <input
            id="payee"
            type="text"
            value={payee}
            onChange={(e) => setPayee(e.target.value)}
            placeholder="e.g. British Gas"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="pay-amount">Amount (£)</label>
          <input
            id="pay-amount"
            type="number"
            step="0.01"
            min="0"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="0.00"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="pay-ref">Reference</label>
          <input
            id="pay-ref"
            type="text"
            value={reference}
            onChange={(e) => setReference(e.target.value)}
            placeholder="Account or reference"
          />
        </div>
        <button type="submit" className="btn" disabled={submitting}>
          {submitting ? 'Submitting…' : 'Schedule payment'}
        </button>
      </form>
      {status && (
        <div className={`message ${status.type === 'success' ? 'success' : 'error'}`} role="alert">
          {status.message}
          {status.ref && <div className="message-ref">Ref: {status.ref}</div>}
        </div>
      )}
    </div>
  );
}

function Statements({ account }) {
  const [accountId, setAccountId] = useState(account.id);
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadError, setLoadError] = useState(null);

  const loadTransactions = (id) => {
    const targetId = id || accountId;
    setLoading(true);
    setLoadError(null);
    fetch(`${API_BASE}/api/users/${targetId}/transactions`)
      .then((res) => (res.ok ? res.json() : Promise.reject(new Error('Failed'))))
      .then((data) => { setTransactions(Array.isArray(data) ? data : []); })
      .catch(() => { setLoadError('Could not load. Try account 1, 2, or 3 (IDOR demo).'); setTransactions([]); })
      .finally(() => setLoading(false));
  };

  useEffect(() => { loadTransactions(account.id); }, [account.id]);

  const handleView = (e) => {
    e.preventDefault();
    loadTransactions(accountId);
  };

  return (
    <div className="form-card">
      <h3>Statements &amp; transactions</h3>
      <p className="form-card-desc">
        View transactions. IDOR: change account ID to view another user’s transactions (training).
      </p>
      <form onSubmit={handleView} className="statements-form">
        <div className="form-group">
          <label htmlFor="stmt-account">Account ID</label>
          <input
            id="stmt-account"
            type="text"
            value={accountId}
            onChange={(e) => setAccountId(e.target.value)}
            placeholder="1, 2, or 3"
          />
        </div>
        <button type="submit" className="btn btn-outline">View statements</button>
      </form>
      {loadError && <div className="message">{loadError}</div>}
      {loading && <p className="dashboard-loading">Loading…</p>}
      {transactions.length > 0 && (
        <ul className="activity-list" style={{ marginTop: '1rem' }}>
          {transactions.map((t) => (
            <li key={t.id}>
              <span className="activity-desc">{t.description}</span>
              <span className={`activity-amount ${t.amount >= 0 ? 'positive' : 'negative'}`}>
                {t.amount >= 0 ? '+' : ''}£{Number(t.amount).toFixed(2)}
              </span>
              <span className="activity-date">{t.date}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
