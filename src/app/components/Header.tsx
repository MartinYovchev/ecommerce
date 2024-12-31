'use client';

import Link from 'next/link';
import '../styles/header.scss';
import Image from 'next/image';

function Header() {
  const scrollToFooter = () => {
    const footer = document.getElementById('footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
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
          <div className="cart-button">
            <Image
              src="/images_website/shopping-cart.png"
              width={40}
              height={45}
              alt="Cart"
            />
          </div>
          <div className="account-button">
            <Image
              src="/images_website/user.png"
              width={40}
              height={45}
              alt="Account"
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default Header;
