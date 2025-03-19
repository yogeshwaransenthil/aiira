import React from 'react';
import backgroundImage from '../assets/flower-desktop-wallpaper-background-vector_53876-144449.avif';
import logo from '../assets/aiira.png';

const Login = ({ onLogin }) => {
  const [credentials, setCredentials] = React.useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <div className="login-content">
          <div className="logo">
            <img src={logo} alt="AIIRA" className="logo-icon" />
            <span></span>
          </div>

          <div className="login-header">
            <p className="journey-text">Start your journey</p>
            <h1>Sign Up to AIIRA</h1>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="input-field">
              <label>E-mail</label>
              <div className="input-wrapper">
                <input
                  type="email"
                  placeholder="example@email.com"
                  value={credentials.email}
                  onChange={(e) => setCredentials({...credentials, email: e.target.value})}
                />
                <span className="input-icon">✉️</span>
              </div>
            </div>

            <div className="input-field">
              <label>Password</label>
              <div className="input-wrapper">
                <input
                  type="password"
                  placeholder="••••••••"
                  value={credentials.password}
                  onChange={(e) => setCredentials({...credentials, password: e.target.value})}
                />
                <button type="button" className="password-toggle">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </button>
              </div>
            </div>

            <button type="submit" className="signup-button">Sign Up</button>

            <div className="social-signup">
              <span className="divider">or sign up with</span>
              <div className="social-buttons">
                <button type="button" className="social-button facebook">
                  <svg viewBox="0 0 24 24" fill="#1877F2">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </button>
                <button type="button" className="social-button google">
                  <svg viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                </button>
                <button type="button" className="social-button apple">
                  <svg viewBox="0 0 24 24" fill="#000000">
                    <path d="M14.94 5.19A4.38 4.38 0 0 0 16 2.75a4.38 4.38 0 0 0-2.91 1.4 4.26 4.26 0 0 0-1.16 2.39 3.88 3.88 0 0 0 2.99-1.35z"/>
                    <path d="M19.21 15.74c-.47.74-.69 1.1-1.3 1.78-1.07 1.17-2.58 2.62-4.44 2.64-1.75.02-2.19-.99-4.53-.98-2.34.01-2.82 1.01-4.57.99-1.86-.02-3.28-1.33-4.35-2.5C-2.46 14.52-1.36 7.07 2.29 6.09c1.39-.38 2.72.16 3.85.51.89.27 1.73.53 2.84.53 1.05 0 1.87-.25 2.72-.5 1.15-.35 2.35-.71 3.88-.27 1.38.4 2.4 1.24 3.05 2.23-2.8 1.76-2.36 5.7.58 7.15z"/>
                  </svg>
                </button>
              </div>
            </div>
          </form>

          <p className="login-link">
            Have an account? <a href="#sign-in">Sign in</a>
          </p>
        </div>
      </div>
      <div className="login-right">
        <img src={backgroundImage} alt="Background" />
      </div>
    </div>
  );
};

export default Login; 