function Showcase() {
  return (
    <section className="showcase">
      <div className="content">
        <h1>Showcase</h1>

        <p className="desc">
          Interactive demos and real-world systems built for modern businesses.
        </p>

        {/* 🔥 PIZZA DEMO CARD */}
        <div
          className="demo-card"
          onClick={() => window.open("/pizza-demo", "_blank")}
        >
          <img
            src="https://images.pexels.com/photos/2619967/pexels-photo-2619967.jpeg"
            alt="Pizza System Demo"
          />

          <div className="demo-info">
            <h2>Pizza Business System</h2>
            <p>
              Full POS, online ordering, and live operations system (Desktop & Mobile)
            </p>
          </div>
        </div>

        <p className="sub">
          More projects coming soon.
        </p>
      </div>

      <style>{`
        .showcase {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          padding: 20px;
        }

        .content {
          max-width: 800px;
          width: 100%;
        }

        h1 {
          font-size: 2.5rem;
        }

        .desc {
          margin-top: 15px;
          color: #aaa;
        }

        /* 🔥 CARD */
        .demo-card {
          margin-top: 40px;
          border-radius: 14px;
          overflow: hidden;
          cursor: pointer;
          background: #0a0a0a;
          border: 1px solid #111;
          transition: 0.3s;
          box-shadow: 0 0 25px rgba(255, 24, 24, 0.5);
        }

        .demo-card:hover {
          border: 1px solid #ff2c2c;
          box-shadow: 0 0 55px rgba(255, 44, 44, 0.3);
          transform: translateY(-4px);
        }

        /* 🔥 IMAGE */
        .demo-card img {
          width: 100%;
          height: 200px;
          object-fit: cover;
          display: block;
        }

        /* 🔥 TEXT */
        .demo-info {
          padding: 20px;
        }

        .demo-info h2 {
          color: #ff2c2c;
          margin-bottom: 10px;
        }

        .demo-info p {
          color: #aaa;
          font-size: 14px;
        }

        .sub {
          margin-top: 25px;
          font-size: 14px;
          color: #666;
        }
      `}</style>
    </section>
  );
}

export default Showcase;