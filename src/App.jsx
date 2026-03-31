import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Showcase from "./pages/Showcase"
import Pricing from "./pages/Pricing"
import PizzaDemo from "./pages/PizzaDemo";

import { Routes, Route, useLocation } from "react-router-dom"
import { useEffect } from "react"

function App() {
  const location = useLocation()

  // 🔥 Detect Pizza Demo page
  const isPizzaDemo = location.pathname === "/pizza-demo";

  // 🔥 SCROLL TO TOP
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  // 🔥 CURSOR GLOW (DISABLED ON DEMO)
  useEffect(() => {
    if (window.innerWidth <= 768) return
    if (isPizzaDemo) return

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
  }, [isPizzaDemo])

  // 🔥 FADE-IN
  useEffect(() => {
    if (isPizzaDemo) return

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
  }, [location.pathname, isPizzaDemo])

  return (
    <>
      {/* 🔥 CURSOR GLOW */}
      {!isPizzaDemo && <div className="cursor-glow"></div>}

      {/* 🔥 NAVBAR */}
      {!isPizzaDemo && <Navbar />}

      {/* 🔥 ROUTES */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/showcase" element={<Showcase />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/pizza-demo" element={<PizzaDemo />} />
      </Routes>
    </>
  )
}

export default App