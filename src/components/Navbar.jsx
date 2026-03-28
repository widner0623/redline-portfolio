import { motion } from "framer-motion"
import { Link, useNavigate } from "react-router-dom"

function Navbar() {
  const navigate = useNavigate()

  const goToSection = (id) => {
    navigate("/")
    setTimeout(() => {
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: "smooth" })
    }, 100)
  }

  return (
    <motion.nav 
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 40px",
        background: "rgba(0,0,0,0.85)",
        backdropFilter: "blur(12px)",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        borderBottom: "1px solid #222"
      }}
    >
      <h2 style={{ color: "red", fontWeight: "700" }}>🔴 Redline Labs</h2>

      <div>
        <Link to="/" style={{ marginRight: "20px" }}>Home</Link>

        <span onClick={() => goToSection("projects")} style={linkStyle}>
          Projects
        </span>

        <Link to="/showcase" style={{ marginRight: "20px" }}>
          Showcase
        </Link>

        <span onClick={() => goToSection("contact")} style={linkStyle}>
          Contact
        </span>
      </div>
    </motion.nav>
  )
}

const linkStyle = {
  marginRight: "20px",
  cursor: "pointer"
}

export default Navbar