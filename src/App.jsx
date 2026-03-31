import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Showcase from "./pages/Showcase"
import Pricing from "./pages/Pricing"

import { Routes, Route, useLocation } from "react-router-dom"
import { useEffect } from "react"

function App() {
  const location = useLocation()

  // 🔥 SCROLL TO TOP
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  // 🔥 CURSOR GLOW (DESKTOP ONLY)
  useEffect(() => {
    if (window.innerWidth <= 768) return

    const glow = document.querySelector(".cursor-glow")

    const move = (e) => {
      if (!glow) return
      glow.style.left = e.clientX + "px"
      glow.style.top = e.clientY + "px"
    }

    window.addEventListener("mousemove", move)

    return () => {
      window.removeEventListener("mousemove", move)
    }
  }, [])

  // 🔥 FADE-IN
  useEffect(() => {
    const elements = document.querySelectorAll(".fade")

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show")
        }
      })
    }, {
      threshold: 0.2
    })

    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [location.pathname])

  return (
    <>
      {/* 🔥 CURSOR GLOW */}
      <div className="cursor-glow"></div>

      {/* 🔥 NAVBAR */}
      <Navbar />

      {/* 🔥 ROUTES */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/showcase" element={<Showcase />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </>
  )
}

export default App