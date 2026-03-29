import { useEffect, useState } from "react"

const roles = [
  "Software Engineer",
  "Web Developer",
  "UI/UX Designer",
  "Automation Specialist"
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
        <h1>Derrick Widner</h1>

        <h2 className="typing">{text}</h2>

        {/* 🔥 GUARANTEE */}
        <p className="guarantee">
          100% Satisfaction Money Back Guarantee
        </p>

        <button onClick={() =>
          document.getElementById("projects").scrollIntoView({ behavior: "smooth" })
        }>
          Explore Work
        </button>
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

        /* 🔥 DARK OVERLAY FOR READABILITY */
        .overlay {
          background: rgba(0,0,0,0.6);
          padding: 40px;
          border-radius: 10px;
        }

        .typing {
          margin-top: 10px;
          color: red;
          min-height: 30px;
        }

        .guarantee {
          margin-top: 15px;
          font-size: 14px;
          color: #ccc;
        }

        button {
          margin-top: 20px;
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
      `}</style>
    </section>
  )
}

export default Hero