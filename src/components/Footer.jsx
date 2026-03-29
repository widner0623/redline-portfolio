function Footer() {
  return (
    <footer className="footer">

      <div className="footer-content">

        {/* 🔥 BRAND */}
        <div className="footer-brand">
          <h2>Redline Labs</h2>
          <p>Websites • Branding • Growth Systems</p>
        </div>

        {/* 🔥 NAV LINKS */}
        <div className="footer-links">
          <span onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Home</span>
          <span onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>Projects</span>
          <span onClick={() => window.location.href = "/pricing"}>Pricing</span>
          <span onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>Contact</span>
        </div>

        {/* 🔥 CONTACT */}
        <div className="footer-contact">
          <p>📧 derrick.widner@redlinelabs.com</p>
          <p>📞 (509) 336-8537</p>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 Redline Labs. All rights reserved.
      </div>

      <style>{`
        .footer {
          padding: 50px 20px 20px;
          border-top: 1px solid #222;
          background: #000;
          text-align: center;
        }

        .footer-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 30px;
          max-width: 1100px;
          margin: auto;
          margin-bottom: 30px;
        }

        .footer-brand h2 {
          color: red;
          margin-bottom: 5px;
        }

        .footer-brand p {
          color: #aaa;
          font-size: 14px;
        }

        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .footer-links span {
          cursor: pointer;
          transition: 0.3s;
        }

        .footer-links span:hover {
          color: red;
          text-shadow: 0 0 10px red;
        }

        .footer-contact p {
          color: #ccc;
          font-size: 14px;
        }

        .footer-bottom {
          font-size: 13px;
          color: #777;
          border-top: 1px solid #111;
          padding-top: 15px;
        }
      `}</style>
    </footer>
  )
}

export default Footer