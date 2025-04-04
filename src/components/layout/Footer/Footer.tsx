import './footer.scss';
import Image from 'next/image';

function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h2>Sneakers</h2>
          <p>
            Step into the best. Trendy, comfy, and sustainable footwear for
            everyone.
          </p>
        </div>

        <div className="footer-contact">
          <h3>Contact Us</h3>
          <ul>
            <li>Email: support@sneakers.com</li>
            <li>Phone: +1 (800) 555-1234</li>
            <li>Address: 123 Sneaker Lane, Fashion City, TX</li>
          </ul>
        </div>

        <div className="footer-socials">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images_website/facebook-icon.png"
                alt="Facebook"
                width={50}
                height={50}
              />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images_website/twitter-icon.png"
                alt="Twitter"
                width={50}
                height={50}
              />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images_website/instagram-icon.png"
                alt="Instagram"
                width={50}
                height={50}
              />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Sneakers. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
export default Footer;
