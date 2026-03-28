import { motion } from "framer-motion"
import { Link, useNavigate, useLocation } from "react-router-dom"

function Navbar() {
  const navigate = useNavigate()
  const location = useLocation()

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
      style={navStyle}
    >
      {/* 🔴 LOGO */}
      <div style={logoContainer}>
        <img
          src="/logo.png"
          alt="Redline Labs Logo"
          style={logoStyle}
          background="none"
        />
        <h2 style={logoText}>Redline Labs</h2>
      </div>

      {/* 🔗 NAV LINKS */}
      <div style={linksContainer}>
        <NavItem to="/" label="Home" active={location.pathname === "/"} />

        <span style={linkStyle} onClick={() => goToSection("projects")}>
          Projects
        </span>

        <NavItem to="/showcase" label="Showcase" active={location.pathname === "/showcase"} />

        <span style={linkStyle} onClick={() => goToSection("contact")}>
          Contact
        </span>
      </div>
    </motion.nav>
  )
}

/* 🔗 NAV ITEM COMPONENT */
function NavItem({ to, label, active }) {
  return (
    <Link to={to} style={{ position: "relative", marginRight: "20px" }}>
      <span style={{
        color: active ? "red" : "white",
        transition: "0.3s"
      }}>
        {label}
      </span>

      {/* 🔥 UNDERLINE EFFECT */}
      <span style={{
        position: "absolute",
        bottom: "-5px",
        left: 0,
        width: active ? "100%" : "0%",
        height: "2px",
        background: "red",
        transition: "0.3s"
      }} />
    </Link>
  )
}

/* 🎨 STYLES */

const navStyle = {
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
}

const logoContainer = {
  display: "flex",
  alignItems: "center",
  gap: "10px"
}

const logoStyle = {
  width: "38px",
  height: "38px",
  objectFit: "contain",
  filter: "drop-shadow(0 0 6px rgba(255,0,0,0.6))"
}

const logoText = {
  fontWeight: "700",
  letterSpacing: "0.5px"
}

const linksContainer = {
  display: "flex",
  alignItems: "center"
}

const linkStyle = {
  marginRight: "20px",
  cursor: "pointer",
  transition: "0.3s"
}

export default Navbar