import { useState } from "react"
import { motion } from "framer-motion"

const projects = [
  {
    name: "Enterprise Dashboard",
    desc: "Scalable data visualization platform for real-time insights.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    reviews: [
      "The dashboard completely transformed how we visualize our data. Everything is fast, responsive, and incredibly intuitive.",
      "We saw immediate improvements in decision-making after implementing this system. It’s clean, powerful, and extremely reliable.",
      "One of the best tools we’ve ever used. The performance and UI design are both top-tier.",
      "Our team productivity increased significantly thanks to this dashboard. It’s built with real-world usage in mind.",
      "The level of detail and performance optimization is unmatched. Highly professional work.",
      "This system scaled perfectly with our needs. We couldn't be happier with the results."
    ]
  },
  {
    name: "Finance Tracking Suite",
    desc: "Secure financial tracking system with advanced insights.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3",
    reviews: [
      "Managing finances has never been easier. Everything is organized, clear, and extremely efficient.",
      "The UI is clean and intuitive, making complex financial tracking feel simple.",
      "This platform saved us hours every week. It’s incredibly reliable and easy to use.",
      "Security and usability are both excellent. Exactly what we needed.",
      "The experience feels premium from start to finish. Very impressed.",
      "A powerful yet simple solution that just works."
    ]
  },
  {
    name: "Game Engine",
    desc: "Custom browser-based physics engine with real-time rendering.",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e",
    reviews: [
      "The performance is incredibly smooth. Everything runs flawlessly.",
      "A very impressive system with realistic physics and clean architecture.",
      "Gameplay feels responsive and polished. Great experience overall.",
      "This engine exceeded our expectations in both flexibility and performance.",
      "Innovative and well-built. You can tell a lot of thought went into it.",
      "Absolutely amazing work — very scalable and future-ready."
    ]
  },
  {
    name: "Automation Platform",
    desc: "Advanced workflow automation system for business optimization.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    reviews: [
      "This platform cut our workload in half. Massive improvement.",
      "Automation is seamless and incredibly powerful.",
      "Everything runs efficiently and reliably. Huge productivity boost.",
      "One of the best investments we’ve made for our business.",
      "Very intelligent system design — it just works.",
      "The scalability and flexibility are outstanding."
    ]
  },
  {
    name: "E-Commerce Platform",
    desc: "High-performance online store with optimized checkout flow.",
    image: "https://images.unsplash.com/photo-1515169067868-5387ec356754",
    reviews: [
      "Our sales increased immediately after launching this platform.",
      "Checkout is smooth and fast — customers love it.",
      "The design feels modern and professional.",
      "Everything loads quickly and performs perfectly.",
      "Very polished experience from start to finish.",
      "This platform gave our business a serious upgrade."
    ]
  },
  {
    name: "AI Assistant System",
    desc: "Intelligent automation assistant for advanced workflows.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
    reviews: [
      "This AI system saves us hours every day. Extremely powerful.",
      "Very intelligent and reliable automation across multiple tasks.",
      "The implementation is clean, fast, and scalable.",
      "Feels like the future of workflow automation.",
      "Super efficient and easy to integrate into existing systems.",
      "A truly impressive piece of technology."
    ]
  }
]

function Projects() {
  return (
    <section id="projects">
      <h2 style={{ textAlign: "center", marginBottom: "50px" }}>
        Featured Work
      </h2>

      <div style={grid}>
        {projects.map((p, i) => (
          <Card key={i} project={p} />
        ))}
      </div>
    </section>
  )
}

function Card({ project }) {
  const [flip, setFlip] = useState(false)
  const [review, setReview] = useState(project.reviews[0])

  const handleEnter = (e) => {
    setFlip(true)
    setReview(
      project.reviews[Math.floor(Math.random() * project.reviews.length)]
    )

    e.currentTarget.querySelector(".glow").style.opacity = 1
  }

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    // 🔥 ULTRA SMOOTH TILT (LESS INTENSE)
    const rotateX = -(y - rect.height / 2) / 18
    const rotateY = (x - rect.width / 2) / 18

    e.currentTarget.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`

    const glow = e.currentTarget.querySelector(".glow")
    glow.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,0,0,0.9), transparent 70%)`
  }

  const handleLeave = (e) => {
    setFlip(false)
    e.currentTarget.style.transform = "rotateX(0deg) rotateY(0deg)"

    const glow = e.currentTarget.querySelector(".glow")
    glow.style.opacity = 0
  }

  return (
    <div
      style={wrapper}
      onMouseEnter={handleEnter}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      {/* 🔥 GLOW */}
      <div className="glow" style={glowStyle} />

      <motion.div
        animate={{ rotateY: flip ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        style={card}
      >
        {/* FRONT */}
        <div style={front}>
          <img src={project.image} style={img} />
          <h3>{project.name}</h3>
          <p>{project.desc}</p>
        </div>

        {/* BACK */}
        <div style={back}>
          <p style={{ textAlign: "center", padding: "10px" }}>
            "{review}"
          </p>
          <span style={{ color: "#aaa", marginTop: "10px" }}>
            ⭐⭐⭐⭐⭐ Verified Client
          </span>
        </div>
      </motion.div>
    </div>
  )
}

/* STYLES */

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "30px"
}

const wrapper = {
  position: "relative",
  perspective: "1000px",
  transition: "transform 0.1s ease-out"
}

const glowStyle = {
  position: "absolute",
  inset: "-12px",
  filter: "blur(35px)",
  borderRadius: "12px",
  opacity: 0,
  transition: "opacity 0.2s ease",
  zIndex: 0
}

const card = {
  height: "360px",
  position: "relative",
  transformStyle: "preserve-3d",
  zIndex: 1
}

const front = {
  position: "absolute",
  width: "100%",
  height: "100%",
  backfaceVisibility: "hidden",
  background: "#111",
  borderRadius: "12px",
  padding: "15px"
}

const back = {
  position: "absolute",
  width: "100%",
  height: "100%",
  backfaceVisibility: "hidden",
  transform: "rotateY(180deg)",
  background: "#111",
  borderRadius: "12px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center"
}

const img = {
  width: "100%",
  height: "160px",
  objectFit: "cover",
  borderRadius: "8px"
}

export default Projects