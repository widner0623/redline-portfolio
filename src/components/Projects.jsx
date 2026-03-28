import { useEffect, useRef, useState } from "react"

function Projects() {
  const cardsRef = useRef([])

  useEffect(() => {
    const isMobile = window.innerWidth < 768
    if (!isMobile) return

    const handleScroll = () => {
      cardsRef.current.forEach((card) => {
        if (!card) return

        const rect = card.getBoundingClientRect()

        if (rect.top < window.innerHeight * 0.4 && rect.top > 0) {
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
      desc: "Advanced analytics & real-time reporting.",
      img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",
      reviews: [
        "Completely changed our financial workflow.",
        "Fast, accurate, and extremely reliable.",
        "Saved us hours every week."
      ]
    },
    {
      title: "E-Commerce System",
      desc: "Full-stack scalable store platform.",
      img: "https://images.unsplash.com/photo-1607083206869-4c7672e72a8a",
      reviews: [
        "Our sales increased immediately.",
        "Checkout is smooth and fast.",
        "Handles traffic perfectly."
      ]
    },
    {
      title: "AI Automation Tool",
      desc: "AI-powered automation workflows.",
      img: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
      reviews: [
        "Cut workload in half instantly.",
        "Smart automation that actually works.",
        "Huge productivity boost."
      ]
    },
    {
      title: "Analytics Dashboard",
      desc: "Real-time data visualization.",
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      reviews: [
        "Beautiful and powerful charts.",
        "Great for decision-making.",
        "Super responsive."
      ]
    },
    {
      title: "Team Collaboration App",
      desc: "Messaging + task management system.",
      img: "https://images.unsplash.com/photo-1551434678-e076c223a692",
      reviews: [
        "Team productivity skyrocketed.",
        "Very clean interface.",
        "Perfect for collaboration."
      ]
    },
    {
      title: "Marketing Platform",
      desc: "High-conversion growth system.",
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      reviews: [
        "Massive conversion increase.",
        "Looks and performs amazing.",
        "Highly optimized system."
      ]
    }
  ]

  return (
    <section id="projects" style={section}>
      <h2 style={title}>Projects</h2>

      <div style={grid}>
        {projects.map((p, i) => (
          <Card
            key={i}
            data={p}
            ref={(el) => (cardsRef.current[i] = el)}
          />
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
          transform: rotateY(180deg);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 20px;
          text-align: center;
          box-shadow: 0 0 30px rgba(255,0,0,0.4);
        }

        .stars {
          color: gold;
          margin-bottom: 8px;
          font-size: 18px;
        }

        .review {
          margin-top: 5px;
          line-height: 1.4;
        }

        .client {
          margin-top: 15px;
          opacity: 0.8;
          font-size: 14px;
        }

        @media (hover: hover) {
          .card:hover .card-inner {
            transform: rotateY(180deg);
          }
        }

        .flip .card-inner {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  )
}

/* CARD COMPONENT */
const Card = ({ data }, ref) => {
  const [review, setReview] = useState("")

  useEffect(() => {
    const random =
      data.reviews[Math.floor(Math.random() * data.reviews.length)]
    setReview(random)
  }, [data])

  return (
    <div ref={ref} className="card">
      <div className="card-inner">
        <div className="card-front">
          <img src={data.img} style={img} />
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

/* STYLES */
const section = {
  padding: "100px 40px",
  background: "black",
  color: "white"
}

const title = {
  textAlign: "center",
  marginBottom: "40px"
}

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px,1fr))",
  gap: "30px"
}

const img = {
  width: "100%",
  height: "180px",
  objectFit: "cover"
}

export default Projects