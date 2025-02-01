import React from 'react';
import '@styles/auth-buttons.scss';

function AuthButtons() {
  const handleLogin = () => {
    // Handle login logic here
    console.log('Login button clicked');
  };

  const handleRegister = () => {
    // Handle register logic here
    console.log('Register button clicked');
  };

  return (
    <div className="auth-container">
      <button className="auth-button" data-type="login" onClick={handleLogin}>
        Login
      </button>
      <button className="auth-button" data-type="register" onClick={handleRegister}>
        Register
      </button>
    </div>
  );
}

export default AuthButtons;
