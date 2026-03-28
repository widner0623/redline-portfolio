import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Showcase from "./pages/Showcase"

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/showcase" element={<Showcase />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App