import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"

const bg = "https://images.unsplash.com/photo-1518770660439-4636190af475"

function Hero() {

  const particlesInit = async (main) => {
    await loadFull(main)
  }

  return (
    <section style={{
      height: "100vh",
      position: "relative",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      overflow: "hidden"
    }}>

      {/* 🔥 BACKGROUND IMAGE */}
      <div style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        zIndex: 0
      }} />

      {/* 🔥 DARK OVERLAY */}
      <div style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        background: "rgba(0,0,0,0.7)",
        zIndex: 1
      }} />

      {/* 🔥 PARTICLES */}
      <Particles
        init={particlesInit}
        options={{
          particles: {
            number: { value: 50 },
            color: { value: "#ff0000" },
            links: { enable: true, color: "#ff0000" },
            move: { enable: true, speed: 1 }
          }
        }}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          zIndex: 2
        }}
      />

      {/* 🔥 CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        style={{
          zIndex: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <h1 style={{ fontSize: "3.8rem" }}>
          Derrick Widner
        </h1>

        <h2 style={{ color: "red" }}>
          Redline Labs
        </h2>

        <TypeAnimation
          sequence={[
            "Full Stack Developer",1500,
            "Software Engineer",1500,
            "UI/UX Designer",1500,
            "Automation Engineer",1500,
            "Game Developer",1500,
            "Building at the Redline",2000
          ]}
          repeat={Infinity}
          speed={40}
          style={{ marginBottom: "30px", color: "#aaa" }}
        />

        <motion.button
          whileHover={{ scale: 1.1, boxShadow: "0 0 20px red" }}
          style={{
            padding: "14px 28px",
            background: "red",
            border: "none",
            borderRadius: "8px",
            color: "white"
          }}
          onClick={() => {
            document.getElementById("projects").scrollIntoView({ behavior: "smooth" })
          }}
        >
          Explore Work
        </motion.button>
      </motion.div>

    </section>
  )
}

export default Hero