import { motion, AnimatePresence } from "framer-motion"
import { useNavigate, useLocation } from "react-router-dom"
import { useState, useEffect } from "react"

function Navbar() {
  const navigate = useNavigate()
  const location = useLocation()

  const [activeSection, setActiveSection] = useState("")
  const [menuOpen, setMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  /* 🔥 HANDLE RESIZE */
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

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
    setMenuOpen(false)

    setTimeout(() => {
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: "smooth" })
        setActiveSection(id)
      }
    }, 100)
  }

  return (
    <motion.nav style={navStyle}>
      {/* 🔴 LOGO */}
      <motion.img
        src="/logo.png"
        style={logoStyle}
        onClick={() => {
          navigate("/")
          setMenuOpen(false)
        }}
      />

      {/* 🔥 DESKTOP NAV */}
      {!isMobile && (
        <div style={linksContainer}>
          <NavItem label="Home" active={location.pathname === "/" && activeSection === ""} onClick={() => navigate("/")} />
          <NavItem label="Projects" active={activeSection === "projects"} onClick={() => goToSection("projects")} />
          <NavItem label="Showcase" active={location.pathname === "/showcase"} onClick={() => navigate("/showcase")} />
          <NavItem label="Contact" active={activeSection === "contact"} onClick={() => goToSection("contact")} />
        </div>
      )}

      {/* 🍔 HAMBURGER */}
      {isMobile && (
        <div onClick={() => setMenuOpen(!menuOpen)} style={hamburger}>
          <span style={bar}></span>
          <span style={bar}></span>
          <span style={bar}></span>
        </div>
      )}

      {/* 📱 MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={mobileMenu}
          >
            <NavItem label="Home" onClick={() => navigate("/")} />
            <NavItem label="Projects" onClick={() => goToSection("projects")} />
            <NavItem label="Showcase" onClick={() => navigate("/showcase")} />
            <NavItem label="Contact" onClick={() => goToSection("contact")} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

/* 🔗 NAV ITEM */
function NavItem({ label, active, onClick }) {
  return (
    <div onClick={onClick} style={{ cursor: "pointer", margin: "10px 0" }}>
      <motion.span
        whileHover={{ color: "red" }}
        style={{
          color: active ? "red" : "white",
          fontSize: "1rem"
        }}
      >
        {label}
      </motion.span>
    </div>
  )
}

/* 🎨 STYLES */

const navStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "15px 20px",
  background: "black",
  position: "sticky",
  top: 0,
  zIndex: 1000
}

const logoStyle = {
  width: "45px",
  transform: "scale(1.3)",
  cursor: "pointer"
}

const linksContainer = {
  display: "flex",
  gap: "30px"
}

const hamburger = {
  display: "flex",
  flexDirection: "column",
  cursor: "pointer",
  gap: "5px"
}

const bar = {
  width: "25px",
  height: "3px",
  background: "white"
}

const mobileMenu = {
  position: "absolute",
  top: "70px",
  left: 0,
  width: "100%",
  background: "black",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px 0",
  borderTop: "1px solid red"
}

export default Navbar