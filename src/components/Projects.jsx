import { useEffect, useRef, useState } from "react"

const projects = [
  {
    title: "Finance Tracking Suite",
    desc: "Advanced analytics system",
    img: "https://picsum.photos/400?1",
    reviews: [
      "This changed everything for us.",
      "Extremely reliable and fast.",
      "Best system we’ve used."
    ]
  },
  {
    title: "E-Commerce System",
    desc: "Full-stack store platform",
    img: "https://picsum.photos/400?2",
    reviews: [
      "Sales increased immediately.",
      "Super smooth checkout.",
      "Handles traffic perfectly."
    ]
  },
  {
    title: "AI Automation Tool",
    desc: "AI powered workflows",
    img: "https://picsum.photos/400?3",
    reviews: [
      "Saved us hours daily.",
      "Automation is perfect.",
      "Huge productivity boost."
    ]
  }
]

export default function Projects() {
  const refs = useRef([])

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth > 768) return

      refs.current.forEach((card) => {
        if (!card) return

        const rect = card.getBoundingClientRect()
        const center = window.innerHeight / 2

        const inView =
          rect.top <= center && rect.bottom >= center

        if (inView) {
          card.classList.add("flip")
        } else {
          card.classList.remove("flip")
        }
      })
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section id="projects" className="projects">
      <h2 className="project-text">Projects
        <style>{`
          .project-text{
          // font-size: ;
          margin: 0 0 50px 0;
        }
        `}</style>
      </h2>

      <div className="grid">
        {projects.map((p, i) => (
          <Card key={i} data={p} ref={(el) => (refs.current[i] = el)} />
        ))}
      </div>

      <style>{`
        .projects {
          padding: 100px 20px;
          text-align: center;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px,1fr));
          gap: 25px;
          max-width: 1100px;
          margin: auto;
        }

        .card {
          perspective: 1000px;
        }

        .inner {
          position: relative;
          height: 320px;
          transform-style: preserve-3d;
          transition: transform 0.5s ease;
        }

        /* 🔴 DESKTOP ONLY HOVER */
        @media (min-width: 769px) {
          .card:hover .inner {
            transform: rotateY(180deg);
          }
        }

        /* 🔴 MOBILE FLIP */
        .flip .inner {
          transform: rotateY(180deg);
        }

        .front,
        .back {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 10px;
          overflow: hidden;
          backface-visibility: hidden;
        }

        .front {
          background: #111;
        }

        .front img {
          width: 100%;
          height: 180px;
          object-fit: cover;
        }

        .back {
          background: black;
          transform: rotateY(180deg);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          box-shadow: 0 0 40px rgba(255,0,0,0.6);
        }

        .back p {
          margin-top: 10px;
        }

        .back span {
          margin-top: 15px;
          color: #aaa;
        }
      `}</style>
    </section>
  )
}

/* 🔥 CARD */
const Card = ({ data }, ref) => {
  const [review, setReview] = useState("")

  const randomReview = () => {
    const r = data.reviews[Math.floor(Math.random() * data.reviews.length)]
    setReview(r)
  }

  useEffect(() => {
    randomReview()
  }, [])

  return (
    <div
      ref={ref}
      className="card"
      onMouseEnter={randomReview}
      onTouchStart={randomReview}
    >
      <div
        className="inner"
        onTransitionEnd={(e) => {
          if (e.propertyName === "transform") {
            randomReview()
          }
        }}
      >
        <div className="front">
          <img src={data.img} />
          <h3>{data.title}</h3>
          <p>{data.desc}</p>
        </div>

        <div className="back">
          <div>⭐⭐⭐⭐⭐</div>
          <p>"{review}"</p>
          <span>- Verified Client</span>
        </div>
      </div>
    </div>
  )
}