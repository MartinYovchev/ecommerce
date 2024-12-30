import '../styles/about.scss';

function About() {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1>About Us</h1>
        <p>We bring the best sneakers to your doorsteps.</p>
        <p className="tagline">Quality, Style, Performance</p>
      </header>

      <section className="about-description">
        <h2>Our Story</h2>
        <p>
          Welcome to SneakerWorld, your ultimate destination for high-quality
          sneakers! Our mission is to offer the latest and greatest sneaker
          trends from around the world. With our vast collection of premium
          brands, we aim to deliver comfort, style, and performance in every
          step.
        </p>

        <h2>Why Choose Us?</h2>
        <ul>
          <li>
            <strong>Quality:</strong> We curate the best sneaker brands.
          </li>
          <li>
            <strong>Fast Shipping:</strong> Get your sneakers delivered quickly!
          </li>
          <li>
            <strong>Customer Service:</strong> We&apos;re here to help, always!
          </li>
        </ul>
      </section>

      <section className="our-team">
        <h2>Meet Our Team</h2>
        <div className="team-members">
          <div className="team-member">
            {/* <img
              src="https://via.placeholder.com/150"
              alt="Team Member"
              className="team-photo"
            /> */}
            <h3>John Doe</h3>
            <p>Founder & CEO</p>
          </div>
          <div className="team-member">
            {/* <img
              src="https://via.placeholder.com/150"
              alt="Team Member"
              className="team-photo"
            /> */}
            <h3>Jane Smith</h3>
            <p>Marketing Director</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
