import { useNavigate, useLocation } from "react-router-dom"
import { useState, useEffect } from "react"

function Navbar() {
  const navigate = useNavigate()
  const location = useLocation()

  const [menuOpen, setMenuOpen] = useState(false)
  const [mobile, setMobile] = useState(false)
      useEffect(() => {
        const check = () => setMobile(window.innerWidth < 768)
        check()
        window.addEventListener("resize", check)
      return () => window.removeEventListener("resize", check)
      }, [])

  // ✅ HANDLE RESIZE
  useEffect(() => {
    const resize = () => setMobile(window.innerWidth < 768)
    window.addEventListener("resize", resize)
    return () => window.removeEventListener("resize", resize)
  }, [])

  // ✅ NAVIGATION HELPERS
  const goHome = () => {
    setMenuOpen(false)
    navigate("/")
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const goTo = (id) => {
  setMenuOpen(false)

  if (location.pathname !== "/") {
    navigate("/")

    // Wait until DOM is ready
    setTimeout(() => {
      const interval = setInterval(() => {
        const el = document.getElementById(id)
        if (el) {
          el.scrollIntoView({ behavior: "smooth" })
          clearInterval(interval)
        }
      }, 50)
    }, 100)
  } else {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }
}

  const goPage = (path) => {
    setMenuOpen(false)
    navigate(path)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  // ✅ ACTIVE LINK CHECK
  const isActive = (path) => location.pathname === path

  return (
    <nav className="nav">
      <img src="/logo.png" className="logo" onClick={goHome} />

      {!mobile && (
        <div className="links">
          <span onClick={goHome} className={isActive("/") ? "active" : ""}>Home</span>
          <span onClick={() => goTo("projects")}>Projects</span>
          <span onClick={() => goPage("/showcase")} className={isActive("/showcase") ? "active" : ""}>Showcase</span>
          <span onClick={() => goPage("/pricing")} className={isActive("/pricing") ? "active" : ""}>Pricing</span>
          <span onClick={() => goTo("contact")}>Contact</span>
        </div>
      )}

      {mobile && (
        <>
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </div>

          {menuOpen && (
            <div className="mobile">
              <span onClick={goHome}>Home</span>
              <span onClick={() => goTo("projects")}>Projects</span>
              <span onClick={() => goPage("/showcase")}>Showcase</span>
              <span onClick={() => goPage("/pricing")}>Pricing</span>
              <span onClick={() => goTo("contact")}>Contact</span>
            </div>
          )}
        </>
      )}

      <style>{`
        .nav {
          position: fixed;
          top: 0;
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px 30px;
          background: rgba(0,0,0,0.8);
          backdrop-filter: blur(10px);
          z-index: 1000;
        }

        .logo {
          width: 60px;
          transform: scale(2.2);
          transform-origin: left center;
          cursor: pointer;
          animation: pulse 3s infinite;
        }

        .links span {
          font-size: 20px;
          margin-left: 25px;
          cursor: pointer;
          transition: 0.3s;
        }

        .links span:hover {
          color: red;
          text-shadow: 0 0 10px red;
        }

        /* 🔥 ACTIVE LINK */
        .active {
          color: red;
          text-shadow: 0 0 10px red;
        }

        .hamburger {
          font-size: 34px;
          cursor: pointer;
        }

        .mobile {
          position: absolute;
          top: 70px;
          right: 20px;
          background: black;
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          box-shadow: 0 0 20px red;
          cursor: pointer;
          z-index: 1;
        }

        .mobile span:hover {
          color: red;
        }

        /* 🔥 NAVBAR GLOW LINE */
        .nav::after {
          content: "";
          position: absolute;
          bottom: 0;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, transparent, red, transparent);
          animation: move 4s linear infinite;
          z-index: -1;
        }

        @keyframes move {
          0% { transform: translateX(-100%) }
          100% { transform: translateX(100%) }
        }

        @keyframes pulse {
          0% { filter: drop-shadow(0 0 10px red); }
          50% { filter: drop-shadow(0 0 25px red); }
          100% { filter: drop-shadow(0 0 10px red); }
        }
      `}</style>
    </nav>
  )
}

export default Navbar