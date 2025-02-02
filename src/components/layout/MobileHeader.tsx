'use client';

import { useState } from 'react';
import Link from 'next/link';
import '@styles/header.scss';
import CartButton from '../buttons/CartButton';
import AuthButtons from '../buttons/AuthButtons';
import { useUser } from '@auth0/nextjs-auth0/client';
import AccountButton from '../buttons/AccountButton';
import { useIsMobile } from '@hooks/useIsMobile';
import '@styles/mobile-header.scss';

function MobileHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const { user } = useUser();

  const scrollToFooter = () => {
    const footer = document.getElementById('footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="header-wrapper">
        <div className="nav-wrapper">
          <div className="head-name">
            <Link href="/landing" passHref legacyBehavior>
              <a style={{ all: 'unset' }}>SNEAKERS</a>
            </Link>
          </div>

          {isMobile && (
            <div className="mobile-menu-icon" onClick={toggleMenu}>
              <span className="burger-line"></span>
              <span className="burger-line"></span>
              <span className="burger-line"></span>
            </div>
          )}

          <div className={`header-navigation ${isMenuOpen ? 'open' : ''}`}>
            <ul>
              <li>
                <Link href="/collection" passHref legacyBehavior>
                  <a style={{ all: 'unset' }}>Collections</a>
                </Link>
              </li>
              <li>
                <Link href="/collection/men" passHref legacyBehavior>
                  <a style={{ all: 'unset' }}>Men</a>
                </Link>
              </li>
              <li>
                <Link href="/collection/women" passHref legacyBehavior>
                  <a style={{ all: 'unset' }}>Women</a>
                </Link>
              </li>
              <li>
                <Link href="/about" passHref legacyBehavior>
                  <a style={{ all: 'unset' }}>About</a>
                </Link>
              </li>
              <li>
                <button
                  style={{ all: 'unset' }}
                  onClick={scrollToFooter}
                  className="scroll-to-footer-btn"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="checkout-wrapper">
          <CartButton />
          {user ? <AccountButton /> : <AuthButtons />}
        </div>
      </div>
    </>
  );
}

export default MobileHeader;
