function Showcase() {
  const openDemo = () => {
    const win = window.open("", "_blank");

    win.document.write(`
      <html>
        <head>
          <title>Launching System...</title>

         <style>
            body {
              margin: 0;
              height: 100vh;
              display: flex;
              justify-content: center;
              align-items: center;
              background: #0f0f0f;
              font-family: -apple-system, BlinkMacSystemFont, sans-serif;
              overflow: hidden;
              padding: 20px;
            }

            .container {
              text-align: center;
              width: 100%;
              max-width: 520px;
            }

            /* 🔥 LOADER (SCALES WITH SCREEN) */
            .loader {
              width: clamp(80px, 20vw, 120px);
              height: clamp(80px, 20vw, 120px);
              border: clamp(4px, 1vw, 6px) solid #222;
              border-top: clamp(4px, 1vw, 6px) solid #ff2c2c;
              border-radius: 50%;
              animation: spin 1s linear infinite;
              margin: 0 auto 30px;
            }

            @keyframes spin {
              to { transform: rotate(360deg); }
            }

            /* 🔥 TITLE */
            h1 {
              color: #ff2c2c;
              margin-bottom: 12px;
              font-size: clamp(32px, 5vw, 38px);
              letter-spacing: 0.5px;
              text-shadow: 0 0 12px rgba(255, 44, 44, 0.4);
            }

            /* 🔥 STATUS TEXT */
            p {
              color: #bbb;
              font-size: clamp(16px, 3.5vw, 18px);
              margin-bottom: 28px;
            }

            /* 🔥 PROGRESS BAR */
            .progress-wrap {
              width: 100%;
              height: clamp(8px, 2vw, 12px);
              background: #222;
              border-radius: 10px;
              overflow: hidden;
            }

            .progress-bar {
              height: 100%;
              width: 0%;
              background: linear-gradient(90deg, #ff2c2c, #ff6b6b);
              transition: width 0.2s ease;
            }

            /* 🔥 PERCENT */
            .percent {
              margin-top: 12px;
              color: #888;
              font-size: clamp(14px, 3vw, 16px);
            }

            /* 🔥 SMALL PHONES BOOST */
            @media (max-width: 400px) {
              h1 {
                font-size: 38px;
              }

              p {
                font-size: 22px;
              }
            }
            .redirect-msg {
              font-size: 22px;
            }
            @media (max-width: 768px) {
              .redirect-msg {
                font-size: 22px;
                font-weight: 500;
              }
            }
          </style>
        </head>

        <body>
          <div class="container" id="app">
            <div class="loader"></div>
            <h1>Booting System...</h1>
            <p id="status">Initializing POS environment</p>

            <div class="progress-wrap">
              <div class="progress-bar" id="bar"></div>
            </div>

            <div class="percent" id="percent">0%</div>
          </div>

          <script>
            let progress = 0;

            const statuses = [
              "Initializing POS environment",
              "Loading menu data",
              "Connecting to orders system",
              "Syncing inventory",
              "Starting services"
            ];

            const bar = document.getElementById("bar");
            const percent = document.getElementById("percent");
            const status = document.getElementById("status");

            const interval = setInterval(() => {
              progress += Math.floor(Math.random() * 8) + 3;

              if (progress >= 100) progress = 100;

              bar.style.width = progress + "%";
              percent.innerText = progress + "%";

              const index = Math.floor((progress / 100) * statuses.length);
              status.innerText = statuses[index] || statuses[statuses.length - 1];

              if (progress === 100) {
                clearInterval(interval);

                setTimeout(() => {
                  document.getElementById("app").innerHTML = \`
                    <h1>🚀 Coming Soon</h1>
                    <p style="color:#aaa">Pizza POS System is Under Development.</p>
                  \`;
                }, 600);
              }
            }, 180);
            // REDIRECT MESSAGE + FADE IN
            setTimeout(() => {
              const msg = document.createElement("p");
              msg.className = "redirect-msg";

              msg.innerText = "Redirecting back in 5s...";
              msg.style.marginTop = "17px";
              msg.style.color = "#777";
              msg.style.opacity = "0";
              msg.style.transition = "opacity 0.6s ease";

              document.getElementById("app").appendChild(msg);

              // fade in
              setTimeout(() => {
                msg.style.opacity = "1";
              }, 100);

              // countdown
              let seconds = 5;
              const countdown = setInterval(() => {
                seconds--;
                msg.innerText = "Redirecting back in " + seconds + "s...";

                if (seconds <= 0) {
                  clearInterval(countdown);

                  // redirect
                  window.location.href = window.location.origin + "/showcase";
                }
              }, 1000);

            }, 7500); // delay so it appears AFTER "Coming Soon"
          </script>
        </body>
      </html>
    `);
  };

  return (
    <section className="showcase">
      <div className="content">
        <h1>Showcase</h1>

        <p className="desc">
          Interactive systems built for real businesses.
        </p>

        <div className="demo-card" onClick={openDemo}>
          <div className="badge">In Development</div>

          <img
            src="https://images.pexels.com/photos/2619967/pexels-photo-2619967.jpeg"
            alt="Pizza System"
          />

          <div className="demo-info">
            <h2>Pizza POS System</h2>
            <p>
              Full point-of-sale, inventory tracking, and live operations system.
            </p>
          </div>
        </div>

        <p className="sub">
          More systems coming soon.
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
          margin-top: 55px;
          color: #ffffff;
        }

        .desc {
          margin-top: 15px;
          color: #c0c0c0;
        }

        .demo-card {
          position: relative;
          margin-top: 40px;
          border-radius: 16px;
          overflow: hidden;
          cursor: pointer;
          background: #1a1a1a;
          border: 1px solid #ff2c2c;
          transition: all 0.25s ease;
          box-shadow: 0 0 20px rgba(255, 44, 44, 0.4);
        }

        .demo-card:active {
          transform: scale(0.98);
        }

        .demo-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 30px rgba(255, 44, 44, 0.5);
        }
        .demo-card:hover .badge {
          opacity: 1;
          background: #ff2c2c;
          transform: translateY(0);
        }

        .demo-card img {
          width: 100%;
          height: 200px;
          object-fit: cover;
        }

        .demo-info {
          padding: 20px;
          text-align: left;
        }

        .demo-info h2 {
          color: #f5f5f5;
          margin-bottom: 8px;
        }

        .demo-info p {
          color: #c7c7c7;
          font-size: 14px;
        }

        .badge {
          positoin: absolute;
          top: 12px;
          right: 12px;
          background: #ffffff;
          color: #111;
          padding: 6px 10px;
          font-size: 11px;
          border: 10px solid #ff2c2c
          border-radius: 8px;
          font-weight: 600;
          z-index: 10;
          box-shadow: 0 0 10px rgba(255, 44, 44, 0.6);
          opacity: 0;
          transform: translateY(-6px);
          transition: all 0.3s ease;
        }
          @media (hover: none) {
            .badge {
              opacity: 1;
              transform: none;
              animation: badgeGlow 3s ease-in-out infinite;
              background: #ff2c2c;
            }
          }
          @keyframes badgeGlow {
            0% {
              box-shadow: 0 0 0px rgba(255, 44, 44, 0.4);
            }
            50% {
              box-shadow: 0 0 12px rgba(255, 44, 44, 1.25);
            }
            100% {
              box-shadow: 0 0 0px rgba(255, 44, 44, 0.4);
            }
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