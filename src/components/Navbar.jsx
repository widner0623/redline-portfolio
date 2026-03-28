import { motion } from "framer-motion"
import { useNavigate, useLocation } from "react-router-dom"
import { useState, useEffect } from "react"

function Navbar() {
  const navigate = useNavigate()
  const location = useLocation()

  const [activeSection, setActiveSection] = useState("")

  /* 🔥 SCROLL DETECTION */
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["projects", "contact"]
      let found = ""

      sections.forEach((id) => {
        const el = document.getElementById(id)
        if (!el) return

        const rect = el.getBoundingClientRect()

        if (rect.top <= 150 && rect.bottom >= 150) {
          found = id
        }
      })

      setActiveSection(found)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const goToSection = (id) => {
    navigate("/")

    setTimeout(() => {
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: "smooth" })
      setActiveSection(id)
    }, 100)
  }

  const goHome = () => {
    navigate("/")
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" })
      setActiveSection("")
    }, 100)
  }

  return (
    <>
      {/* 🔴 RED GLOW UNDER NAVBAR */}
      <div style={glowBar}></div>

      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={navStyle}
      >
        {/* 🔴 LOGO WITH GLOW */}
        <motion.img
          src="/logo.png"
          alt="logo"
          style={logoStyle}
          onClick={goHome}
          whileHover={{ scale: 1.1 }}
          animate={{
            filter: [
              "drop-shadow(0 0 6px rgba(255,0,0,0.6))",
              "drop-shadow(0 0 20px rgba(255,0,0,1))",
              "drop-shadow(0 0 6px rgba(255,0,0,0.6))"
            ]
          }}
          transition={{
            duration: 2,
            repeat: Infinity
          }}
        />

        {/* NAV LINKS */}
        <div style={linksContainer}>
          <NavItem
            label="Home"
            active={location.pathname === "/" && activeSection === ""}
            onClick={goHome}
          />

          <NavItem
            label="Projects"
            active={activeSection === "projects"}
            onClick={() => goToSection("projects")}
          />

          <NavItem
            label="Showcase"
            active={location.pathname === "/showcase"}
            onClick={() => navigate("/showcase")}
          />

          <NavItem
            label="Contact"
            active={activeSection === "contact"}
            onClick={() => goToSection("contact")}
          />
        </div>
      </motion.nav>
    </>
  )
}

/* 🔗 NAV ITEM */
function NavItem({ label, active, onClick }) {
  return (
    <div onClick={onClick} style={navItem}>
      <motion.span
        whileHover={{
          color: "red",
          textShadow: "0 0 10px red"
        }}
        style={{
          color: active ? "red" : "white",
          fontSize: "1rem",
          fontWeight: "500"
        }}
      >
        {label}
      </motion.span>

      {/* UNDERLINE */}
      <motion.div
        style={underline}
        animate={{ width: active ? "100%" : "0%" }}
      />
    </div>
  )
}

/* 🔥 STYLES */

const navStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "18px 40px",
  background: "rgba(0,0,0,0.85)",
  backdropFilter: "blur(10px)",
  position: "sticky",
  top: 0,
  zIndex: 1000
}

/* 🔴 GLOW BAR */
const glowBar = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "80px",
  background: "linear-gradient(to bottom, rgba(255,0,0,0.25), transparent)",
  zIndex: 999,
  pointerEvents: "none"
}

const logoStyle = {
  width: "55px",
  transform: "scale(1.4)",
  cursor: "pointer"
}

const linksContainer = {
  display: "flex",
  gap: "30px"
}

const navItem = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  cursor: "pointer"
}

const underline = {
  height: "2px",
  background: "red",
  marginTop: "5px",
  borderRadius: "2px"
}

export default Navbar