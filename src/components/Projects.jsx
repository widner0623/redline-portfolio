import { motion } from "framer-motion"

const projects = [
  { name: "Enterprise Dashboard", desc: "Scalable data visualization platform." },
  { name: "Finance Tracking Suite", desc: "Secure and intuitive financial tools." },
  { name: "Interactive Game System", desc: "Browser-based physics engine." },
  { name: "Automation Platform", desc: "Workflow automation and optimization." }
]

function Projects() {
  return (
    <section id="projects">
      <h2 style={{ textAlign: "center", marginBottom: "40px" }}>Featured Work</h2>

      <div style={grid}>
        {projects.map((p, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            style={card}
          >
            <h3>{p.name}</h3>
            <p>{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "20px"
}

const card = {
  padding: "25px",
  background: "#111",
  border: "1px solid #222",
  borderRadius: "12px",
  transition: "0.3s"
}

export default Projects