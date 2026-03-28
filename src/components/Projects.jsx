import { useEffect, useRef } from "react"

function Projects() {
  const cardsRef = useRef([])

  useEffect(() => {
    const handleScroll = () => {
      cardsRef.current.forEach((card) => {
        if (!card) return

        const rect = card.getBoundingClientRect()

        if (rect.top < window.innerHeight - 100) {
          card.classList.add("flip")
        } else {
          card.classList.remove("flip")
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const projects = [
    {
      title: "Finance Tracking Suite",
      desc: "Secure financial tracking system with advanced analytics and real-time reporting.",
      img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d"
    },
    {
      title: "E-Commerce System",
      desc: "Scalable full-stack eCommerce platform with payment integration and dashboards.",
      img: "https://images.unsplash.com/photo-1607083206869-4c7672e72a8a"
    },
    {
      title: "AI Automation Tool",
      desc: "AI-powered automation platform improving workflows and business efficiency.",
      img: "https://images.unsplash.com/photo-1677442136019-21780ecad995"
    },
    {
      title: "Analytics Dashboard",
      desc: "Modern data visualization dashboard with interactive charts and insights.",
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71"
    },
    {
      title: "Team Collaboration App",
      desc: "Real-time collaboration platform with messaging and task management.",
      img: "https://images.unsplash.com/photo-1551434678-e076c223a692"
    },
    {
      title: "Marketing Landing System",
      desc: "High-converting landing page system optimized for engagement and growth.",
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f"
    }
  ]

  return (
    <section id="projects" style={section}>
      <h2 style={title}>Projects</h2>

      <div style={grid}>
        {projects.map((p, i) => (
          <div
            key={i}
            ref={(el) => (cardsRef.current[i] = el)}
            className="card"
            style={cardWrapper}
          >
            <div className="card-inner">
              <div className="card-front">
                <img src={p.img} style={img} />
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>

              <div className="card-back">
                <p>
                  “This solution completely transformed our workflow. The performance
                  improvements and reliability are unmatched in our experience.”
                </p>
                <div>⭐⭐⭐⭐⭐ Verified Client</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .card {
          perspective: 1000px;
        }

        .card-inner {
          position: relative;
          width: 100%;
          height: 320px;
          transition: transform 0.6s ease;
          transform-style: preserve-3d;
        }

        .card.flip .card-inner {
          transform: rotateY(180deg);
        }

        .card-front,
        .card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          border-radius: 12px;
          overflow: hidden;
        }

        .card-front {
          background: #111;
        }

        .card-back {
          background: #000;
          color: white;
          transform: rotateY(180deg);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 20px;
          text-align: center;
          box-shadow: 0 0 30px rgba(255,0,0,0.4);
        }

        @media (hover: hover) {
          .card:hover .card-inner {
            transform: rotateY(180deg);
          }
        }
      `}</style>
    </section>
  )
}

const section = {
  padding: "100px 40px",
  background: "black",
  color: "white"
}

const title = {
  textAlign: "center",
  marginBottom: "40px",
  fontSize: "2rem"
}

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px,1fr))",
  gap: "30px"
}

const cardWrapper = {
  cursor: "pointer"
}

const img = {
  width: "100%",
  height: "180px",
  objectFit: "cover"
}

export default Projects