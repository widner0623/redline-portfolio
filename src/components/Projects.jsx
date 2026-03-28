import { useEffect, useRef, useState } from "react"

const projects = [
  {
    title: "Finance Tracking Suite",
    desc: "Advanced analytics & real-time reporting.",
    img: "/images/finance.jpg",
    reviews: [
      "This completely changed how we track our finances.",
      "Super clean interface and powerful insights.",
      "Best financial tool we’ve used so far."
    ]
  },
  {
    title: "E-Commerce System",
    desc: "Full-stack scalable store platform.",
    img: "/images/ecommerce.jpg",
    reviews: [
      "Our sales doubled after switching to this.",
      "Incredibly fast and easy to manage.",
      "Exactly what our business needed."
    ]
  },
  {
    title: "AI Automation Tool",
    desc: "Automated workflows powered by AI.",
    img: "/images/ai.jpg",
    reviews: [
      "Saved us hours every single day.",
      "Automation is insanely smooth.",
      "Game changer for productivity."
    ]
  },
  {
    title: "Analytics Dashboard",
    desc: "Real-time performance tracking.",
    img: "/images/analytics.jpg",
    reviews: [
      "We can finally see everything clearly.",
      "Very intuitive and powerful.",
      "Perfect for decision making."
    ]
  },
  {
    title: "Team Collaboration App",
    desc: "Streamlined communication platform.",
    img: "/images/team.jpg",
    reviews: [
      "Our team is way more organized now.",
      "Communication is seamless.",
      "Love how simple it is."
    ]
  },
  {
    title: "Marketing Platform",
    desc: "All-in-one campaign manager.",
    img: "/images/marketing.jpg",
    reviews: [
      "Boosted our campaign performance instantly.",
      "Everything in one place is amazing.",
      "Highly recommend for marketers."
    ]
  }
]

export default function Projects() {
  const cardRefs = useRef([])

  /* 📱 MOBILE AUTO FLIP ON SCROLL */
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth > 768) return

      cardRefs.current.forEach((card) => {
        if (!card) return

        const rect = card.getBoundingClientRect()
        const middle = window.innerHeight * 0.6

        if (rect.top < middle && rect.bottom > middle) {
          card.classList.add("flip")
        } else {
          card.classList.remove("flip")
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>

      <div className="grid">
        {projects.map((proj, i) => (
          <Card
            key={i}
            data={proj}
            ref={(el) => (cardRefs.current[i] = el)}
          />
        ))}
      </div>

      <style>{`
        .projects {
          padding: 120px 20px;
          background: black;
          color: white;
          text-align: center;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
          max-width: 1100px;
          margin: auto;
        }

        .card {
          perspective: 1000px;
        }

        .card-inner {
          position: relative;
          width: 100%;
          height: 320px;
          transform-style: preserve-3d;
          transition: transform 0.6s ease;
        }

        /* DESKTOP HOVER ONLY */
        @media (min-width: 769px) {
          .card:hover .card-inner {
            transform: rotateY(180deg);
          }
        }

        /* MOBILE FLIP */
        .flip .card-inner {
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
          background: #111;
        }

        .card-front img {
          width: 100%;
          height: 180px;
          object-fit: cover;
        }

        .card-front h3 {
          margin: 15px 0 5px;
        }

        .card-back {
          transform: rotateY(180deg);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 20px;
        }

        .stars {
          margin-bottom: 10px;
        }

        /* 🔥 FADE EFFECT */
        .review {
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .card-back.active .review {
          opacity: 1;
        }

        .client {
          margin-top: 15px;
          color: #aaa;
        }
      `}</style>
    </section>
  )
}

/* 🔥 CARD COMPONENT */
const Card = ({ data }, ref) => {
  const [review, setReview] = useState("")
  const [active, setActive] = useState(false)

  const getRandomReview = () => {
    const random =
      data.reviews[Math.floor(Math.random() * data.reviews.length)]
    setActive(false)

    setTimeout(() => {
      setReview(random)
      setActive(true)
    }, 150)
  }

  useEffect(() => {
    getRandomReview()
  }, [data])

  return (
    <div
      ref={ref}
      className="card"
      onMouseEnter={getRandomReview}
      onTouchStart={getRandomReview}
    >
      <div
        className="card-inner"
        onTransitionEnd={(e) => {
          if (e.propertyName === "transform") {
            getRandomReview()
          }
        }}
      >
        <div className="card-front">
          <img src={data.img} />
          <h3>{data.title}</h3>
          <p>{data.desc}</p>
        </div>

        <div className={`card-back ${active ? "active" : ""}`}>
          <div className="stars">⭐⭐⭐⭐⭐</div>
          <p className="review">"{review}"</p>
          <div className="client">- Verified Client</div>
        </div>
      </div>
    </div>
  )
}