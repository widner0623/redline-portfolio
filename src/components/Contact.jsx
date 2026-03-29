function Contact() {
  return (
    <section className="contact fade" id="contact">
      <h2>Let’s Build Something That Works</h2>

      <p className="subtitle">
        Serving Kentucky • Indiana • Tennessee <br />
        Fast response. Reliable service. Built for results.
      </p>

      {/* 🔥 MAP */}
      <div className="map">
        <iframe
          src="https://www.google.com/maps?q=kentucky&output=embed"
          loading="lazy"
        ></iframe>
      </div>

      {/* 🔥 CTA TEXT */}
      <p className="cta-text">
        Ready to get started? Reach out and let’s bring your idea to life.
      </p>

      {/* 🔥 BUTTONS */}
      <div className="contact-buttons">
        <a href="mailto:derrick.widner@redlinelabs.com" className="btn">
          📧 Email Me
        </a>

        <a href="tel:+15093368537" className="btn primary">
          📞 Call Now
        </a>
      </div>

      <style>{`
        .contact {
          padding: 100px 20px;
          text-align: center;
        }

        .contact h2 {
          font-size: 2.5rem;
          margin-bottom: 10px;
        }

        .subtitle {
          margin-top: 10px;
          color: #aaa;
          font-size: 15px;
        }

        .cta-text {
          margin-top: 25px;
          color: #ccc;
          font-size: 14px;
        }

        /* 🔥 MAP */
        .map {
          margin-top: 30px;
          width: 100%;
          margin-left: auto;
          margin-right: auto;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 0 25px rgba(255,0,0,0.4);
        }

        .map iframe {
          width: 100%;
          height: 300px;
          border: none;
        }

        /* 🔥 BUTTONS */
        .contact-buttons {
          margin-top: 30px;
          display: flex;
          justify-content: center;
          gap: 20px;
          flex-wrap: wrap;
        }

        .btn {
          padding: 14px 28px;
          border-radius: 8px;
          text-decoration: none;
          color: white;
          background: #111;
          border: 1px solid red;
          transition: 0.3s;
          box-shadow: 0 0 15px rgba(255,0,0,0.4);
        }

        .btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 0 25px rgba(255,0,0,0.9);
        }

        /* 🔥 PRIMARY BUTTON (CALL) */
        .primary {
          background: red;
          color: black;
          font-weight: bold;
        }

        .primary:hover {
          background: #ff1a1a;
          box-shadow: 0 0 30px red;
        }

        /* 🔥 MOBILE */
        @media (max-width: 768px) {
          .contact-buttons {
            flex-direction: column;
            align-items: center;
          }
          .btn {
            width: 100%;
            max-width: 260px;
          }
        }
      `}</style>
    </section>
  )
}

export default Contact