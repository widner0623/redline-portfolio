import { useEffect, useRef, useState } from "react"

const projects = [
  {
    title: "Finance Tracking Suite",
    desc: "Advanced analytics & real-time reporting.",
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",
    reviews: [
      "This completely changed how we track our finances.",
      "Super clean interface and powerful insights.",
      "Best financial tool we’ve used so far."
    ]
  },
  {
    title: "E-Commerce System",
    desc: "Full-stack scalable store platform.",
    img: "https://images.unsplash.com/photo-1607083206869-4c7672e72a8a",
    reviews: [
      "Our sales doubled after switching to this.",
      "Incredibly fast and easy to manage.",
      "Exactly what our business needed."
    ]
  },
  {
    title: "AI Automation Tool",
    desc: "Automated workflows powered by AI.",
    img: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
    reviews: [
      "Saved us hours every single day.",
      "Automation is insanely smooth.",
      "Game changer for productivity."
    ]
  },
  {
    title: "Analytics Dashboard",
    desc: "Real-time performance tracking.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    reviews: [
      "We can finally see everything clearly.",
      "Very intuitive and powerful.",
      "Perfect for decision making."
    ]
  },
  {
    title: "Team Collaboration App",
    desc: "Streamlined communication platform.",
    img: "https://images.unsplash.com/photo-1551434678-e076c223a692",
    reviews: [
      "Our team is way more organized now.",
      "Communication is seamless.",
      "Love how simple it is."
    ]
  },
  {
    title: "Marketing Platform",
    desc: "All-in-one campaign manager.",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    reviews: [
      "Boosted our campaign performance instantly.",
      "Everything in one place is amazing.",
      "Highly recommend for marketers."
    ]
  }
]

export default function Projects() {
  const cardRefs = useRef([])

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

        @media (min-width: 769px) {
          .card:hover .card-inner {
            transform: rotateY(180deg);
          }
        }

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

        .card-front h3,
        .card-front p {
          text-align: center;
          padding: 0 10px;
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

        /* 🔥 CLEAN FADE (NO DELAY) */
        .review {
          opacity: 0;
          animation: fadeIn 0.3s forwards;
        }

        @keyframes fadeIn {
          to {
            opacity: 1;
          }
        }

        .client {
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

  const getRandomReview = () => {
    const random =
      data.reviews[Math.floor(Math.random() * data.reviews.length)]
    setReview(random)
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

        <div className="card-back">
          <div className="stars">⭐⭐⭐⭐⭐</div>
          <p className="review">"{review}"</p>
          <div className="client">- Verified Client</div>
        </div>
      </div>
    </div>
  )
}