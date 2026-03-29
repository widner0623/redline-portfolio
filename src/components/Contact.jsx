function Contact() {
  return (
    <section className="contact" id="contact">
      <h2>Contact</h2>

      <p className="subtitle">
        Serving Kentucky • Indiana • Tennessee <br />
        Available 24/7
      </p>

      {/* 🔥 MAP FIRST */}
      <div className="map">
        <iframe
          src="https://www.google.com/maps?q=kentucky&output=embed"
          loading="lazy"
        ></iframe>
      </div>

      {/* 🔥 BUTTONS */}
      <div className="contact-buttons">
        <a href="mailto:derrick.widner@redlinelabs.com" className="btn">
          📧 Email Me
        </a>

        <a href="tel:+15093368537" className="btn call">
          📞 Call Now
        </a>
      </div>

      <style>{`
        .contact {
          padding: 100px 20px;
          text-align: center;
        }

        .subtitle {
          margin-top: 10px;
          color: #aaa;
        }

        .map {
          margin-top: 30px;
          width: 100%;
          margin-left: auto;
          margin-right: auto;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 0 20px rgba(255,0,0,0.4);
        }

        .map iframe {
          width: 100%;
          height: 300px;
          border: none;
        }

        .contact-buttons {
          margin-top: 30px;
          display: flex;
          justify-content: center;
          gap: 20px;
          flex-wrap: wrap;
        }

        .btn {
          padding: 14px 28px;
          border: 1px solid red;
          border-radius: 8px;
          text-decoration: none;
          color: white;
          background: #111;
          transition: 0.3s;
          box-shadow: 0 0 15px rgba(255,0,0,0.4);
        }

        .btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 0 25px rgba(255,0,0,0.9);
        }

        .call {
          padding: 14px 28px;
          border: 1px solid red;
          border-radius: 8px;
          text-decoration: none;
          color: white;
          background: #111;
          transition: 0.3s;
          box-shadow: 0 0 15px rgba(255,0,0,0.4);
        }

        .call:hover {
          transform: translateY(-3px);
          box-shadow: 0 0 25px rgba(255,0,0,0.9);
        }

        @media (max-width: 768px) {
          .btn {
            width: 100%;
            max-width: 250px;
          }
        }
      `}</style>
    </section>
  )
}

export default Contact