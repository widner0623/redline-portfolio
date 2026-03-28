import { useNavigate, useLocation } from "react-router-dom"
import { useEffect, useState } from "react"

function Navbar() {
  const navigate = useNavigate()
  const location = useLocation()
  const [active, setActive] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["projects", "contact"]
      let current = "home"

      sections.forEach((id) => {
        const el = document.getElementById(id)
        if (!el) return

        const rect = el.getBoundingClientRect()

        if (rect.top <= 150 && rect.bottom >= 150) {
          current = id
        }
      })

      setActive(current)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const goHome = () => {
    navigate("/")
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" })
      setActive("home")
    }, 100)
  }

  const goTo = (id) => {
    navigate("/")
    setTimeout(() => {
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: "smooth" })
      setActive(id)
    }, 100)
  }

  return (
    <nav style={nav}>
      {/* LOGO */}
      <img
        src="/logo.png"
        alt="logo"
        style={logo}
        onClick={goHome}
        onMouseEnter={(e) =>
          (e.currentTarget.style.filter = "drop-shadow(0 0 25px red)")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.filter = "drop-shadow(0 0 12px red)")
        }
      />

      {/* LINKS */}
      <div style={links}>
        <NavItem label="Home" active={active === "home"} onClick={goHome} />
        <NavItem label="Projects" active={active === "projects"} onClick={() => goTo("projects")} />
        <NavItem label="Showcase" active={location.pathname === "/showcase"} onClick={() => navigate("/showcase")} />
        <NavItem label="Contact" active={active === "contact"} onClick={() => goTo("contact")} />
      </div>

      {/* 🔴 UNDER GLOW */}
      <div style={navGlow}></div>
    </nav>
  )
}

function NavItem({ label, active, onClick }) {
  return (
    <div onClick={onClick} style={item}>
      <span
        style={{
          color: active ? "red" : "white",
          textShadow: active ? "0 0 10px red" : "none",
          transition: "0.3s"
        }}
      >
        {label}
      </span>

      <div
        style={{
          ...underline,
          width: active ? "100%" : "0%"
        }}
      />
    </div>
  )
}

const nav = {
  position: "sticky",
  top: 0,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "15px 40px",
  background: "rgba(0,0,0,0.9)",
  backdropFilter: "blur(10px)",
  zIndex: 1000,
  position: "sticky",
  position: "relative"
}

const logo = {
  width: "60px",
  transform: "scale(1.4)",
  cursor: "pointer",
  filter: "drop-shadow(0 0 12px red)",
  transition: "0.3s"
}

const links = {
  display: "flex",
  gap: "30px"
}

const item = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  cursor: "pointer"
}

const underline = {
  height: "2px",
  background: "red",
  marginTop: "5px",
  transition: "0.3s"
}

const navGlow = {
  position: "absolute",
  bottom: "-8px",
  left: 0,
  width: "100%",
  height: "20px",
  background: "radial-gradient(circle, rgba(255,0,0,0.4), transparent)",
  pointerEvents: "none"
}

export default Navbar