// Your Navbar Component

'use client';
import Link from 'next/link';
import { useState, useRef, MouseEvent } from 'react';
import styles from './Navbar.module.scss';
import useClickAway from '../../hooks/useClickAway';
import { useAuth } from '../../context/AuthContext';
import { useIsLoggedIn } from '../../hooks/useIsLoggedIn';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const { user, logout } = useAuth();
  const isLoggedIn = useIsLoggedIn();

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = (e: MouseEvent) => {
    e.stopPropagation();
    setDropdownOpen(!dropdownOpen);
  };

  useClickAway(menuRef, () => setIsOpen(false));
  useClickAway(dropdownRef, () => setDropdownOpen(false));

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">Sneakers</Link>
      </div>

      <div
        className={`${styles.links} ${isOpen ? styles.open : ''}`}
        ref={menuRef}
      >
        <div className={styles.closeButton} onClick={toggleMenu}>
          &times;
        </div>
        <Link
          href="/"
          onClick={() => {
            setDropdownOpen(false);
            setIsOpen(false);
          }}
        >
          Home
        </Link>
        <div className={styles.dropdown} ref={dropdownRef}>
          <span onClick={toggleDropdown}>Collections</span>
          {dropdownOpen && (
            <div className={styles.dropdownMenu}>
              <Link
                href="/collection/men-shoes"
                onClick={() => {
                  setDropdownOpen(false);
                  setIsOpen(false);
                }}
              >
                Men Shoes
              </Link>
              <Link
                href="/collection/women-shoes"
                onClick={() => {
                  setDropdownOpen(false);
                  setIsOpen(false);
                }}
              >
                Women Shoes
              </Link>
              <Link
                href="/collection/kid-shoes"
                onClick={() => {
                  setDropdownOpen(false);
                  setIsOpen(false);
                }}
              >
                Kids Shoes
              </Link>
              <Link
                href="/collection"
                onClick={() => {
                  setDropdownOpen(false);
                  setIsOpen(false);
                }}
              >
                View All Collections
              </Link>
            </div>
          )}
        </div>
        <Link
          href="/about"
          onClick={() => {
            setDropdownOpen(false);
            setIsOpen(false);
          }}
        >
          About
        </Link>
        <Link
          href="/contact"
          onClick={() => {
            setDropdownOpen(false);
            setIsOpen(false);
          }}
        >
          Contact
        </Link>

        {isLoggedIn ? (
          <div className={styles.userSection}>
            <span className={styles.userName}>Welcome, {user?.name}</span>
            <button onClick={logout} className={styles.logoutButton}>
              Logout
            </button>
          </div>
        ) : (
          <div className={styles.authButtons}>
            <Link
              href="/login"
              className={styles.loginButton}
              onClick={() => {
                setDropdownOpen(false);
                setIsOpen(false);
              }}
            >
              Login
            </Link>
            <Link
              href="/signup"
              className={styles.signupButton}
              onClick={() => {
                setDropdownOpen(false);
                setIsOpen(false);
              }}
            >
              Sign Up
            </Link>
          </div>
        )}
      </div>

      <div className={styles.burger} onClick={toggleMenu}>
        <span />
        <span />
        <span />
      </div>
    </nav>
  );
}

export default Navbar;
