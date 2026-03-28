import { useNavigate, useLocation } from "react-router-dom"
import { useState, useEffect } from "react"

function Navbar() {
  const navigate = useNavigate()
  const location = useLocation()

  const [menuOpen, setMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
  const [activeSection, setActiveSection] = useState("")

  /* 📱 MOBILE DETECTION */
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  /* 🔥 SCROLL DETECTION */
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["projects", "contact"]
      let current = ""

      sections.forEach((id) => {
        const el = document.getElementById(id)
        if (!el) return

        const rect = el.getBoundingClientRect()

        if (rect.top <= 150 && rect.bottom >= 150) {
          current = id
        }
      })

      setActiveSection(current)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const goTo = (path, section) => {
    setMenuOpen(false)

    if (path) {
      navigate(path)
      return
    }

    navigate("/")
    setTimeout(() => {
      const el = document.getElementById(section)
      if (el) el.scrollIntoView({ behavior: "smooth" })
    }, 100)
  }

  return (
    <nav className="nav">
      {/* LOGO */}
      <img
        src="/logo.png"
        alt="logo"
        className="logo"
        onClick={() => goTo("/", null)}
      />

      {/* DESKTOP NAV */}
      {!isMobile && (
        <div className="nav-links">
          <NavItem label="Home" active={location.pathname === "/" && !activeSection} onClick={() => goTo("/", null)} />
          <NavItem label="Projects" active={activeSection === "projects"} onClick={() => goTo(null, "projects")} />
          <NavItem label="Showcase" active={location.pathname === "/showcase"} onClick={() => goTo("/showcase")} />
          <NavItem label="Contact" active={activeSection === "contact"} onClick={() => goTo(null, "contact")} />
        </div>
      )}

      {/* HAMBURGER */}
      {isMobile && (
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>
      )}

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="mobile-menu">
          <MobileItem label="Home" onClick={() => goTo("/", null)} />
          <MobileItem label="Projects" onClick={() => goTo(null, "projects")} />
          <MobileItem label="Showcase" onClick={() => goTo("/showcase")} />
          <MobileItem label="Contact" onClick={() => goTo(null, "contact")} />
        </div>
      )}

      {/* STYLES */}
      <style>{`
        .nav {
          position: fixed;
          top: 0;
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px 40px;
          background: rgba(0,0,0,0.65);
          backdrop-filter: blur(14px);
          z-index: 1000;
        }

        .logo {
          width: 60px;
          transform: scale(1.9);
          transform-origin: left center;
          cursor: pointer;
          animation: logoPulse 3s ease-in-out infinite;
        }

        .nav-links {
          display: flex;
          gap: 30px;
        }

        .nav-item {
          cursor: pointer;
          color: white;
          transition: 0.3s;
        }

        .nav-item:hover {
          color: red;
          text-shadow: 0 0 10px red;
        }

        .active {
          color: red;
          text-shadow: 0 0 12px red;
        }

        .hamburger {
          font-size: 26px;
          color: white;
          cursor: pointer;
        }

        .mobile-menu {
          position: absolute;
          top: 70px;
          right: 20px;
          background: rgba(0,0,0,0.9);
          padding: 20px;
          border-radius: 10px;
          display: flex;
          flex-direction: column;
          gap: 15px;
          box-shadow: 0 0 20px rgba(255,0,0,0.4);
        }

        /* 🔴 GLOW LINE */
        .nav::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, transparent, red, transparent);
          animation: glowMove 4s linear infinite;
        }

        @keyframes glowMove {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        @keyframes logoPulse {
          0% { filter: drop-shadow(0 0 10px rgba(255,0,0,0.6)); }
          50% { filter: drop-shadow(0 0 25px rgba(255,0,0,1)); }
          100% { filter: drop-shadow(0 0 10px rgba(255,0,0,0.6)); }
        }

        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }
        }
      `}</style>
    </nav>
  )
}

function NavItem({ label, onClick, active }) {
  return (
    <div
      onClick={onClick}
      className={`nav-item ${active ? "active" : ""}`}
    >
      {label}
    </div>
  )
}

function MobileItem({ label, onClick }) {
  return (
    <div className="nav-item" onClick={onClick}>
      {label}
    </div>
  )
}

export default Navbar