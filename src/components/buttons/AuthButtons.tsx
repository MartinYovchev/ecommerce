import React from 'react';
import '@styles/auth-buttons.scss';
import Link from 'next/link';

function AuthButtons() {
  return (
    <div className="auth-container">
      <Link href="../api/auth/login" legacyBehavior>
        <button className="auth-button" data-type="register">
          SIGN UP
        </button>
      </Link>
    </div>
  );
}

export default AuthButtons;
