import { motion } from "framer-motion"
import { useState, useEffect, useRef } from "react"

const projects = [
  {
    title: "Finance Tracking Suite",
    desc: "Secure financial tracking system with advanced insights.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",
    reviews: [
      "This platform completely changed how we manage finances.",
      "Clean UI and extremely powerful backend performance.",
      "Accurate reporting and very fast analytics.",
      "Saved our business countless hours every week.",
      "Highly scalable and reliable system.",
      "Best financial dashboard we've ever used."
    ]
  },
  {
    title: "E-Commerce System",
    desc: "Full-stack scalable online store platform.",
    image: "https://images.unsplash.com/photo-1607082349566-187342175e2f",
    reviews: [
      "Our sales increased immediately after launch.",
      "Checkout process is smooth and optimized.",
      "Handles high traffic with zero issues.",
      "Professional and polished UI.",
      "Very easy to manage inventory.",
      "Extremely fast load speeds."
    ]
  },
  {
    title: "AI Automation Tool",
    desc: "Automated workflows powered by AI logic.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
    reviews: [
      "Cut our workload in half instantly.",
      "Smart automation that actually works.",
      "Saved us tons of time daily.",
      "AI integration is seamless.",
      "Very intuitive interface.",
      "Highly efficient system."
    ]
  },
  {
    title: "Analytics Dashboard",
    desc: "Real-time data visualization platform.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    reviews: [
      "We can now track everything in real time.",
      "Beautiful and functional charts.",
      "Super responsive performance.",
      "Great UX design.",
      "Makes decision-making easier.",
      "Very reliable system."
    ]
  },
  {
    title: "Custom CRM System",
    desc: "Client management system built for scale.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692",
    reviews: [
      "Organizing clients is effortless now.",
      "Very powerful features.",
      "Clean and modern UI.",
      "Great for team collaboration.",
      "Improved workflow dramatically.",
      "Extremely customizable."
    ]
  },
  {
    title: "SaaS Platform",
    desc: "Full SaaS product with subscription system.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    reviews: [
      "Launch-ready SaaS product out of the box.",
      "Handles subscriptions flawlessly.",
      "Professional-grade system.",
      "Very scalable architecture.",
      "Secure and stable.",
      "Perfect for growing businesses."
    ]
  }
]

function Projects() {
  return (
    <section id="projects" style={section}>
      <h2 style={title}>Projects</h2>

      <div style={grid}>
        {projects.map((p, i) => (
          <ProjectCard key={i} {...p} />
        ))}
      </div>
    </section>
  )
}

function ProjectCard({ title, desc, image, reviews }) {
  const ref = useRef(null)

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
  const [flipped, setFlipped] = useState(false)
  const [reviewIndex, setReviewIndex] = useState(0)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  /* 🔥 AUTO FLIP ON MOBILE */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && isMobile) {
          setFlipped(true)
          setReviewIndex(Math.floor(Math.random() * reviews.length))
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) observer.observe(ref.current)

    return () => {
      if (ref.current) observer.unobserve(ref.current)
    }
  }, [isMobile, reviews])

  return (
    <motion.div
      ref={ref}
      style={card}
      onMouseEnter={() => {
        if (!isMobile) {
          setFlipped(true)
          setReviewIndex(Math.floor(Math.random() * reviews.length))
        }
      }}
      onMouseLeave={() => !isMobile && setFlipped(false)}
      animate={{ rotateY: flipped ? 180 : 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* FRONT */}
      <div style={front}>
        <img src={image} style={img} />
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>

      {/* BACK */}
      <div style={back}>
        <p>"{reviews[reviewIndex]}"</p>
        <p style={{ marginTop: "10px", color: "gold" }}>
          ⭐⭐⭐⭐⭐ Verified Client
        </p>
      </div>
    </motion.div>
  )
}

/* STYLES */

const section = {
  padding: "60px 20px",
  textAlign: "center"
}

const title = {
  fontSize: "2rem",
  marginBottom: "30px"
}

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "20px"
}

const card = {
  height: "320px",
  position: "relative",
  transformStyle: "preserve-3d",
  cursor: "pointer"
}

const front = {
  position: "absolute",
  width: "100%",
  height: "100%",
  backfaceVisibility: "hidden",
  background: "#111",
  borderRadius: "12px",
  padding: "20px"
}

const back = {
  position: "absolute",
  width: "100%",
  height: "100%",
  backfaceVisibility: "hidden",
  transform: "rotateY(180deg)",
  background: "black",
  borderRadius: "12px",
  padding: "20px"
}

const img = {
  width: "100%",
  borderRadius: "10px",
  marginBottom: "10px"
}

export default Projects