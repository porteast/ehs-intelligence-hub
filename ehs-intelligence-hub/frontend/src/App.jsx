import React, { useState } from 'react';

export default function App() {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = (e) => {
    e.preventDefault();
    if (email === 'admin@ehs.com' && password === 'password') {
      setUser({ email });
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: 20, backgroundColor: '#f5f8fa' }}>
      {!user ? (
        <div style={{
          maxWidth: 400,
          margin: '100px auto',
          padding: 30,
          backgroundColor: 'white',
          borderRadius: 10,
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
        }}>
          <h2 style={{ textAlign: 'center', color: '#1e40af', marginBottom: 20 }}>
            EHS Intelligence Hub
          </h2>
          <form onSubmit={login}>
            <input
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                width: '100%',
                padding: 12,
                margin: '10px 0',
                border: '1px solid #d1d5db',
                borderRadius: 6
              }}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: '100%',
                padding: 12,
                margin: '10px 0',
                border: '1px solid #d1d5db',
                borderRadius: 6
              }}
              required
            />
            <button
              type="submit"
              style={{
                width: '100%',
                padding: 12,
                backgroundColor: '#2563eb',
                color: 'white',
                border: 'none',
                borderRadius: 6,
                fontWeight: 'bold',
                marginTop: 10
              }}
            >
              Login
            </button>
          </form>
        </div>
      ) : (
        <div style={{
          maxWidth: 800,
          margin: '0 auto',
          padding: 30,
          backgroundColor: 'white',
          borderRadius: 10,
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
        }}>
          <h1 style={{ color: '#1e40af' }}>EHS Intelligence Hub</h1>
          <p>Welcome, {user.email}!</p>
          <div style={{
            marginTop: 20,
            padding: 20,
            backgroundColor: '#fee2e2',
            borderRadius: 8,
            textAlign: 'center'
          }}>
            <div style={{ fontSize: 32, fontWeight: 'bold', color: '#dc2626' }}>3.8</div>
            <div style={{ fontWeight: 'bold', color: '#b91c1c' }}>HIGH RISK</div>
            <div style={{ fontSize: 14, color: '#7f1d1d' }}>Predictive Risk Score (1–5)</div>
          </div>
        </div>
      )}
    </div>
  );
}