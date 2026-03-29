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
    const isMobile = window.innerWidth < 768
    if (!isMobile) return

    refs.current.forEach((card) => {
      if (!card) return

      const rect = card.getBoundingClientRect()
      const screenMiddle = window.innerHeight / 2

      const isInCenter =
        rect.top < screenMiddle && rect.bottom > screenMiddle

      if (isInCenter) {
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
      <h2 className="projectText">Projects
        <style>{`
        .projectText{
          margin: 0 0 35px 0;
          font-size: 35px;
        }
      `}</style>
      </h2>

      <div className="grid">
        {projects.map((p, i) => (
          <Card key={i} data={p} ref={(el) => (refs.current[i] = el)} />
        ))}
      </div>
    </section>
  )
}

const Card = ({ data }, ref) => {
  const [review, setReview] = useState("")

  const randomReview = () => {
    const r = data.reviews[Math.floor(Math.random() * data.reviews.length)]
    setReview(r)
  }

  useEffect(randomReview, [])

  return (
    <div ref={ref} className="card" onMouseEnter={randomReview}>
      <div
        className="inner"
        onTransitionEnd={(e) => {
          if (e.propertyName === "transform") randomReview()
        }}
      >
        <div className="front">
          <img src={data.img} />
          <h3>{data.title}</h3>
          <p>{data.desc}</p>
        </div>

        <div className="back">
          ⭐⭐⭐⭐⭐
          <p>"{review}"</p>
          <span>- Verified Client</span>
        </div>
      </div>
    </div>
  )
}