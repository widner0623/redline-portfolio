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
      if (el) {
        el.scrollIntoView({ behavior: "smooth" })
        setActiveSection(id)
      }
    }, 100)
  }

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      style={navStyle}
    >
      {/* 🔴 LOGO */}
      <motion.img
        src="/logo.png"
        alt="Logo"
        style={logoStyle}
        onClick={() => {
          navigate("/")
          setActiveSection("")
        }}
        whileHover={{ scale: 1.15 }}
        animate={{
          filter: [
            "drop-shadow(0 0 6px rgba(255,0,0,0.6))",
            "drop-shadow(0 0 16px rgba(255,0,0,1))",
            "drop-shadow(0 0 6px rgba(255,0,0,0.6))"
          ]
        }}
        transition={{
          duration: 2,
          repeat: Infinity
        }}
      />

      {/* 🔗 NAV ITEMS */}
      <div style={linksContainer}>
        <NavItem
          label="Home"
          active={location.pathname === "/" && activeSection === ""}
          onClick={() => {
            navigate("/")
            setActiveSection("")
          }}
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
  )
}

/* 🔗 NAV ITEM */
function NavItem({ label, active, onClick }) {
  return (
    <div onClick={onClick} style={navItemWrapper}>
      <motion.span
        whileHover={{
          color: "red",
          textShadow: "0 0 10px rgba(255,0,0,0.9)"
        }}
        style={{
          fontSize: "1.1rem",
          fontWeight: "500",
          color: active ? "red" : "white"
        }}
      >
        {label}
      </motion.span>

      <motion.div
        style={{
          height: "2px",
          background: "red",
          borderRadius: "2px",
          marginTop: "5px"
        }}
        initial={{ width: 0 }}
        animate={{ width: active ? "100%" : "0%" }}
        transition={{ duration: 0.3 }}
      />
    </div>
  )
}

/* 🎨 STYLES */

const navStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "18px 40px",
  position: "sticky",
  top: 0,
  zIndex: 1000,
  background: "rgba(0,0,0,0.7)",
  backdropFilter: "blur(14px)",
  borderBottom: "1px solid rgba(255,0,0,0.25)",
  boxShadow: "0 5px 30px rgba(255,0,0,0.2)"
}

const logoStyle = {
  width: "55px",
  height: "55px",
  objectFit: "contain",
  cursor: "pointer",
  transform: "scale(2.25)",
  transformOrigin: "left center",
  filter: "drop-shadow(0 0 8px rgba(255,0,0,0.7))"
}

const linksContainer = {
  display: "flex",
  alignItems: "center",
  gap: "35px"
}

const navItemWrapper = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  cursor: "pointer"
}

export default Navbar