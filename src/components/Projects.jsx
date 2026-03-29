import { useEffect, useRef, useState, forwardRef } from "react"

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
    if (window.innerWidth > 768) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const card = entry.target

          if (entry.isIntersecting) {
            card.classList.add("flip")
          } else {
            card.classList.remove("flip")
          }
        })
      },
      {
        rootMargin: "-50% 0px -50% 0px", //Key to flip in middle of viewport
        threshold: 0
      }
    )

    refs.current.forEach((card) => {
      if (card) observer.observe(card)
    })

    return () => {
      refs.current.forEach((card) => {
        if (card) observer.unobserve(card)
      })
    }
  }, [])

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>

      <div className="grid">
        {projects.map((p, i) => (
          <Card
            key={i}
            data={p}
            ref={(el) => (refs.current[i] = el)}
          />
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
          transition: transform 0.6s ease cubic-bezier(0.22, 1, 0.36, 1);
        }

        /* DESKTOP ONLY */
        @media (min-width: 769px) {
          .card:hover .inner {
            transform: rotateY(180deg);
          }
        }

        /* MOBILE */
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

/* 🔴 FIXED CARD WITH forwardRef */
const Card = forwardRef(({ data }, ref) => {
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
})