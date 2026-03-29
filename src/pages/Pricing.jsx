import "./pricing.css"

function Pricing() {
  return (
    <div className="pricing-page">

      {/* 🔥 HEADER */}
      <div className="pricing-header fade">
        <h1>Pricing & Services</h1>
        <p>Websites, branding, and growth systems built to get results.</p>
      </div>

      {/* 🔥 PRICING CARDS */}
      <div className="pricing-grid">

        <div className="pricing-card fade">
          <h2>Starter Presence</h2>
          <p className="tagline">Perfect for individuals & portfolios</p>
          <p className="price">$150 – $300</p>
          <ul>
            <li>1-page website</li>
            <li>Mobile optimized</li>
            <li>Contact form</li>
            <li>Basic SEO</li>
          </ul>
          <button className="btn">Get Started</button>
        </div>

        <div className="pricing-card popular fade">
          <span className="badge">⭐ Most Popular</span>
          <h2>Business Launch</h2>
          <p className="tagline">Best for local businesses</p>
          <p className="price">$400 – $700</p>
          <ul>
            <li>3–5 pages</li>
            <li>Booking system</li>
            <li>Google Maps integration</li>
            <li>Testimonials section</li>
            <li>Speed optimization</li>
          </ul>
          <button className="btn">Get Started</button>
        </div>

        <div className="pricing-card fade">
          <h2>Brand Builder</h2>
          <p className="tagline">For growing brands & coaches</p>
          <p className="price">$800 – $1,500</p>
          <ul>
            <li>Unlimited pages</li>
            <li>Blog/content system</li>
            <li>Advanced UI design</li>
            <li>Branding kit</li>
          </ul>
          <button className="btn">Get Started</button>
        </div>

        <div className="pricing-card fade">
          <h2>Scale Systems</h2>
          <p className="tagline">For businesses ready to scale</p>
          <p className="price">$1,500 – $3,500+</p>
          <ul>
            <li>Custom features</li>
            <li>Payment systems</li>
            <li>Automation setup</li>
            <li>API integrations</li>
          </ul>
          <button className="btn">Get Started</button>
        </div>

      </div>

      {/* 🔥 ADD-ONS */}
      <div className="addons fade">
        <h2>Add-Ons</h2>
        <div className="addon-grid">
          <div>Extra Page — $75</div>
          <div>Logo Design — $100–$250</div>
          <div>SEO Setup — $150–$300</div>
          <div>Speed Optimization — $100</div>
          <div>Content Writing — $75/page</div>
        </div>
      </div>

      {/* 🔥 MONTHLY */}
      <div className="monthly fade">
        <h2>Monthly Plans</h2>
        <div className="monthly-grid">

          <div>
            <h3>Maintenance</h3>
            <p>$40–$75/mo</p>
          </div>

          <div>
            <h3>Growth</h3>
            <p>$150–$300/mo</p>
          </div>

          <div>
            <h3>Full Management</h3>
            <p>$400–$800/mo</p>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Pricing