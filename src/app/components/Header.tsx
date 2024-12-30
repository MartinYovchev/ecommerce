import Link from 'next/link';
import '../styles/header.scss';
import Image from 'next/image';

function Header() {
  return (
    <>
      <div className="header-wrapper">
        <div className="nav-wrapper">
          <div className="head-name">SNEAKERS</div>
          <div className="header-navigation">
            <ul>
              <li>
                <Link href="/collection" passHref legacyBehavior>
                  <a style={{ all: 'unset' }}>Collections</a>
                </Link>
              </li>
              <li>Men</li>
              <li>Woman</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
        <div className="checkout-wrapper">
          <div className="cart-button">
            <Image src="/shopping-cart.png" width={40} height={45} alt="Cart" />
          </div>
          <div className="account-button">
            <Image src="/user.png" width={40} height={45} alt="Account" />
          </div>
        </div>
      </div>
    </>
  );
}
export default Header;
