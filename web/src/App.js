import React from 'react';
import Login from './Login';

function App() {
  return (
    <div className="App">
      <header style={{ padding: '1rem', background: '#1a1a2e', color: '#eee' }}>
        <h1>FinTrust</h1>
        <p>Security Champions Training — Deliberately Insecure Demo</p>
      </header>
      <main style={{ padding: '2rem' }}>
        <Login />
      </main>
    </div>
  );
}

export default App;
