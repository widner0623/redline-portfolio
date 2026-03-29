import { useEffect, useRef, useState, forwardRef } from "react"

const projects = [
  {
    title: "Custom Web Development",
    desc: "High-performance, responsive websites built for speed, SEO, and modern user experience.",
    img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    rating: 4.8,
    reviews: [
      "My website loads insanely fast now.",
      "Exactly what my business needed.",
      "Clean, modern, and super smooth."
    ]
  },
  {
    title: "Custom Software Solutions",
    desc: "Scalable systems and tools designed to automate workflows and solve real-world problems.",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    rating: 4.5,
    reviews: [
      "Saved us hours every single week.",
      "Very reliable and easy to use.",
      "Made our entire process more efficient."
    ]
  },
  {
    title: "UI/UX Design & Optimization",
    desc: "Modern, user-focused interfaces designed to increase engagement and improve usability.",
    img: "https://images.unsplash.com/photo-1559028012-481c04fa702d",
    rating: 5,
    reviews: [
      "Our app feels completely different now.",
      "Users love the new design.",
      "Super clean and easy to navigate."
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
        rootMargin: "-50% 0px -50% 0px",
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
      <h2 className="projectText">Projects</h2>

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

        .projectText {
          margin-bottom: 35px;
          font-size: 32px;
          font-weight: 600;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px,1fr));
          gap: 30px;
          max-width: 1100px;
          margin: auto;
        }

        .card {
          perspective: 1000px;
        }

        .inner {
          position: relative;
          height: 340px;
          transform-style: preserve-3d;
          transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
        }

        @media (min-width: 769px) {
          .card:hover .inner {
            transform: rotateY(180deg);
          }
        }

        .flip .inner {
          transform: rotateY(180deg);
        }

        .front,
        .back {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 12px;
          overflow: hidden;
          backface-visibility: hidden;
        }

        .front {
          background: #111;
          display: flex;
          flex-direction: column;
        }

        .front img {
          width: 100%;
          height: 180px;
          object-fit: cover;
          filter: brightness(0.7);
        }

        .front-content {
          padding: 18px;
          text-align: left;
        }

        .front-content h3 {
          margin-bottom: 10px;
        }

        .front-content p {
          color: #ccc;
          line-height: 1.4;
        }

        .back {
          background: black;
          transform: rotateY(180deg);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 20px;
          box-shadow: 0 0 40px rgba(255,0,0,0.6);
        }

        .stars {
          display: flex;
          gap: 3px;
          margin-bottom: 10px;
        }

        .star {
          font-size: 20px;
          position: relative;
        }

        .star.full {
          color: #ff2a2a;
        }

        .star.empty {
          color: #333;
        }

        .star.half {
          color: #333;
        }

        .star.half::before {
          content: "★";
          color: #ff2a2a;
          position: absolute;
          width: 50%;
          overflow: hidden;
          left: 0;
          top: 0;
        }

        .back p {
          margin-top: 10px;
          text-align: center;
          line-height: 1.4;
        }

        .back span {
          margin-top: 15px;
          color: #aaa;
          font-size: 14px;
        }
      `}</style>
    </section>
  )
}

const Card = forwardRef(({ data }, ref) => {
  const [review, setReview] = useState("")
  const nextReviewRef = useRef("")

  const getRandomReview = () => {
    return data.reviews[Math.floor(Math.random() * data.reviews.length)]
  }

  useEffect(() => {
    const first = getRandomReview()
    setReview(first)
    nextReviewRef.current = getRandomReview()
  }, [])

  const handleFlipStart = () => {
    setReview(nextReviewRef.current)
    nextReviewRef.current = getRandomReview()
  }

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating)
    const hasHalf = rating % 1 >= 0.5

    return (
      <div className="stars">
        {[...Array(5)].map((_, i) => {
          if (i < fullStars) return <span key={i} className="star full">★</span>
          if (i === fullStars && hasHalf) return <span key={i} className="star half">★</span>
          return <span key={i} className="star empty">★</span>
        })}
      </div>
    )
  }

  return (
    <div
      ref={ref}
      className="card"
      onMouseEnter={handleFlipStart}
      onTouchStart={handleFlipStart}
    >
      <div className="inner">
        <div className="front">
          <img src={data.img} />
          <div className="front-content">
            <h3>{data.title}</h3>
            <p>{data.desc}</p>
          </div>
        </div>

        <div className="back">
          {renderStars(data.rating)}
          <p>"{review}"</p>
          <span>- Verified Client</span>
        </div>
      </div>
    </div>
  )
})