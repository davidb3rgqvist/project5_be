import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Auth.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function getCSRFToken() {
  let csrfToken = null;
  const cookies = document.cookie.split(';');
  for (let cookie of cookies) {
    if (cookie.trim().startsWith('csrftoken=')) {
      csrfToken = cookie.split('=')[1];
    }
  }
  return csrfToken;
}

function Login({ setIsAuthenticated }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const csrfToken = getCSRFToken();
      const response = await fetch('/api/auth/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': csrfToken,
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const data = await response.json();
      document.cookie = `my-app-auth=${data.token}; path=/;`;

      setIsAuthenticated(true);
      alert('Login successful');
      navigate('/workouts');

    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className={styles.authContainer}>
      <div className={styles.authCard}>
        <div className={styles.authForm}>
          <h2 className={styles.formTitle}>Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                className="form-control"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary btn-block">Login</button>
            {error && <p className="text-danger mt-3">{error}</p>}
          </form>
          <p className="mt-3">
            Don't have an account? <Link to="/register">Register here</Link>
          </p>
        </div>
        <div className={styles.authImage}></div>
      </div>
    </div>
  );
}

export default Login;
