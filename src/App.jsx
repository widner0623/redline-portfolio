import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Showcase from "./pages/Showcase"
import { Routes, Route } from "react-router-dom"
import { useEffect } from "react"

function App() {

  // 🔥 CURSOR GLOW
  useEffect(() => {
    const glow = document.querySelector(".cursor-glow")

    const move = (e) => {
      if (!glow) return
      glow.style.left = e.clientX + "px"
      glow.style.top = e.clientY + "px"
    }

    window.addEventListener("mousemove", move)
    return () => window.removeEventListener("mousemove", move)
  }, [])

  // 🔥 FADE-IN OBSERVER
  useEffect(() => {
    const elements = document.querySelectorAll(".fade")

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show")
        }
      })
    })

    elements.forEach((el) => observer.observe(el))
  }, [])

  return (
    <>
      <div className="cursor-glow"></div>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/showcase" element={<Showcase />} />
      </Routes>
    </>
  )
}

export default App