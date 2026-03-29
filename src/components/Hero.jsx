import { useEffect, useState } from "react"

const roles = [
  "Software Engineer",
  "Web Developer",
  "UI/UX Designer",
  "Automation Specialist",
  "Front-End Developer"
]

function Hero() {
  const [text, setText] = useState("")
  const [index, setIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    if (subIndex === roles[index].length + 1 && !deleting) {
      setTimeout(() => setDeleting(true), 1000)
      return
    }

    if (subIndex === 0 && deleting) {
      setDeleting(false)
      setIndex((prev) => (prev + 1) % roles.length)
      return
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1))
    }, deleting ? 40 : 80)

    setText(roles[index].substring(0, subIndex))

    return () => clearTimeout(timeout)
  }, [subIndex, index, deleting])

  return (
    <section className="hero" id="home">
      <div className="overlay">

        <h1 className="hero-name">Derrick Widner</h1>

        <h2 className="typing">{text}</h2>

        <p className="hero-desc">
          I build modern websites and systems that help businesses grow online.
        </p>

        <p className="guarantee">
          100% Satisfaction Money Back Guarantee
        </p>

        <div className="hero-buttons">
          <button
            onClick={() =>
              document.getElementById("projects").scrollIntoView({ behavior: "smooth" })
            }
          >
            View Work
          </button>

          <button
            className="secondary"
            onClick={() =>
              document.getElementById("contact").scrollIntoView({ behavior: "smooth" })
            }
          >
            Get Started
          </button>
        </div>

      </div>

      <style>{`
        .hero {
          height: 100vh;
          background: url("https://images.unsplash.com/photo-1518770660439-4636190af475")
            center/cover no-repeat;
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          position: relative;
        }

        /* 🔥 STRONGER OVERLAY */
        .overlay {
          background: rgba(0,0,0,0.7);
          padding: 50px;
          border-radius: 12px;
          backdrop-filter: blur(8px);
          box-shadow: 0 0 40px rgba(255,0,0,0.2);
        }

        .hero-name {
          font-size: 3.2rem;
          margin-bottom: 10px;
        }

        .typing {
          margin-top: 10px;
          color: red;
          min-height: 30px;
          font-size: 1.5rem;
        }

        .hero-desc {
          margin-top: 15px;
          font-size: 1rem;
          color: #ccc;
          max-width: 500px;
        }

        .guarantee {
          margin-top: 10px;
          font-size: 13px;
          color: #888;
        }

        .hero-buttons {
          margin-top: 25px;
          display: flex;
          justify-content: center;
          gap: 15px;
          flex-wrap: wrap;
        }

        button {
          padding: 12px 25px;
          background: red;
          border: none;
          color: white;
          cursor: pointer;
          border-radius: 6px;
          transition: 0.3s;
        }

        button:hover {
          transform: scale(1.05);
          box-shadow: 0 0 15px red;
        }

        .secondary {
          background: transparent;
          border: 1px solid red;
        }

        .secondary:hover {
          background: red;
          color: black;
        }

        /* 🔥 MOBILE */
        @media (max-width: 768px) {
          .hero-name {
            font-size: 2.2rem;
          }

          .overlay {
            padding: 30px;
          }
        }
      `}</style>
    </section>
  )
}

export default Hero