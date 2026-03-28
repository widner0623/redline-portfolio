import { motion } from "framer-motion"

function Showcase() {
  return (
    <section style={{ textAlign: "center" }}>
      <h1>Capabilities</h1>

      <div style={{ marginTop: "40px" }}>
        {["Frontend", "Backend", "UI/UX", "Performance"].map((skill, i) => (
          <div key={i} style={{ marginBottom: "20px" }}>
            <p>{skill}</p>
            <div style={bar}>
              <motion.div
                style={fill}
                initial={{ width: 0 }}
                whileInView={{ width: `${80 + i * 5}%` }}
                transition={{ duration: 1 }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

const bar = {
  width: "100%",
  height: "10px",
  background: "#222"
}

const fill = {
  height: "100%",
  background: "red"
}

export default Showcase