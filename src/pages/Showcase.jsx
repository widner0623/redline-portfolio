function Showcase() {
  return (
    <section className="showcase">
      <div className="content">
        <h1>Showcase</h1>

        <p className="coming">
          🚧 Coming Soon
        </p>

        <p className="desc">
          I’m currently building out real-world projects and live demos.
          This section will showcase full applications, UI systems, and advanced functionality.
        </p>

        <p className="sub">
          Stay tuned — this is where things get serious.
        </p>
      </div>

      <style>{`
        .showcase {
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          padding: 20px;
        }

        .content {
          max-width: 600px;
        }

        h1 {
          font-size: 2.5rem;
        }

        .coming {
          margin-top: 20px;
          font-size: 1.8rem;
          color: red;
          animation: pulse 2s infinite;
        }

        .desc {
          margin-top: 20px;
          color: #aaa;
          line-height: 1.6;
        }

        .sub {
          margin-top: 15px;
          font-size: 14px;
          color: #666;
        }
      `}</style>
    </section>
  )
}

export default Showcase