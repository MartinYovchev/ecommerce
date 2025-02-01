'use client';

import Link from 'next/link';
import '@styles/header.scss';
import CartButton from '../buttons/CartButton';
import AuthButtons from '../buttons/AuthButtons';
import { useUser } from '@auth0/nextjs-auth0/client';
import AccountButton from '../buttons/AccountButton';

function Header() {
  const scrollToFooter = () => {
    const footer = document.getElementById('footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const { user } = useUser();
  return (
    <>
      <div className="header-wrapper">
        <div className="nav-wrapper">
          <div className="head-name">
            <Link href="/landing" passHref legacyBehavior>
              <a style={{ all: 'unset' }}>SNEAKERS</a>
            </Link>
          </div>
          <div className="header-navigation">
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
export default Header;
