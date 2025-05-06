'use client';

import Link from 'next/link';
import { useAuth } from '../context/AuthContext';
import styles from './Navigation.module.scss';

export const Navigation = () => {
  const { user, logout } = useAuth();

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Link href="/">Your Logo</Link>
      </div>

      <div className={styles.navLinks}>
        {user ? (
          <div className={styles.userSection}>
            <span className={styles.userName}>Welcome, {user.name}</span>
            <button onClick={logout} className={styles.logoutButton}>
              Logout
            </button>
          </div>
        ) : (
          <div className={styles.authButtons}>
            <Link href="/login" className={styles.loginButton}>
              Login
            </Link>
            <Link href="/signup" className={styles.signupButton}>
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};
