import Image from 'next/image';
import './styles/landingPage.scss';

function LandingPage() {
  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Step Into Style</h1>
          <p>
            Discover the latest trends in sneakers. Comfort, fashion, and
            performance combined.
          </p>
          <button className="cta-button">Shop Now</button>
        </div>
        <div className="hero-image">
          <Image
            src="/image-first.jpg"
            alt="Sneakers"
            width={600}
            height={600}
            className="image-product"
          />
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-products">
        <h2>Featured Sneakers</h2>
        <div className="product-grid">
          <div className="product-card">
            <Image
              src="/sneaker1.jpg"
              alt="Sneaker 1"
              width={200}
              height={200}
              className="product-display-images"
            />
            <h3>Air Max Classic</h3>
            <p>$120</p>
          </div>
          <div className="product-card">
            <Image
              src="/sneaker2.jpg"
              alt="Sneaker 2"
              width={200}
              height={200}
              className="product-display-images"
            />
            <h3>Retro Runner</h3>
            <p>$140</p>
          </div>
          <div className="product-card">
            <Image
              src="/sneaker3.jpg"
              alt="Sneaker 3"
              width={200}
              height={200}
              className="product-display-images"
            />
            <h3>Urban Edge</h3>
            <p>$160</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <h2>What Our Customers Say</h2>
        <div className="testimonial-cards">
          <div className="testimonial-card">
            <p>
              &quot;The most comfortable sneakers I&apos;ve ever worn!&quot;
            </p>
            <h4>- Alex J.</h4>
          </div>
          <div className="testimonial-card">
            <p>&quot;Stylish and perfect for any occasion.&quot;</p>
            <h4>- Maria P.</h4>
          </div>
          <div className="testimonial-card">
            <p>&quot;Amazing quality and fast shipping.&quot;</p>
            <h4>- John D.</h4>
          </div>
        </div>
      </section>
    </div>
  );
}
export default LandingPage;
