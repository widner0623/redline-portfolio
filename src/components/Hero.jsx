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
          <button onClick={() =>
            document.getElementById("projects").scrollIntoView({ behavior: "smooth" })
          }>
            View Work
          </button>

          <button className="secondary" onClick={() =>
            document.getElementById("contact").scrollIntoView({ behavior: "smooth" })
          }>
            Get Started
          </button>
        </div>

      </div>

      <style>{`
        .hero {
          min-height: 100vh;
          padding: 100px 20px;
          background: url("https://images.unsplash.com/photo-1518770660439-4636190af475")
            center/cover no-repeat;
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
        }
        .typing {
          margin-top: 10px;
          color: red;
          min-height: 30px;
          font-size: 1.5rem;
        }

        .overlay {
          background: rgba(0,0,0,0.7);
          padding: 50px;
          border-radius: 12px;
          backdrop-filter: blur(8px);
        }

        .hero-buttons {
          margin-top: 25px;
          display: flex;
          gap: 15px;
          flex-wrap: wrap;
          justify-content: center;
        }

        button {
          padding: 12px 25px;
          background: red;
          border: none;
          color: white;
          border-radius: 6px;
        }

        .secondary {
          background: transparent;
          border: 1px solid red;
        }

        @media (max-width: 768px) {
          .hero {
            min-height: auto;
            padding: 120px 20px 80px;
          }

          .hero-buttons {
            flex-direction: column;
            align-items: center;
          }

          .hero-buttons button {
            width: 100%;
            max-width: 280px;
          }
        }
      `}</style>
    </section>
  )
}

export default Hero