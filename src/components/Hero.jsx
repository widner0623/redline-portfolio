import { motion } from "framer-motion"
import { TypeAnimation } from 'react-type-animation'

const bg = "https://images.unsplash.com/photo-1518770660439-4636190af475"

function Hero() {
  return (
    <section id="home" style={{
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      position: "relative",
      backgroundImage: `url(${bg})`,
      backgroundSize: "cover",
      backgroundPosition: "center"
    }}>

      {/* DARK OVERLAY */}
      <div style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        background: "linear-gradient(to bottom, rgba(0,0,0,0.7), #000)"
      }} />

      {/* CONTENT */}
      <motion.div 
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <h1 style={{ fontSize: "3.8rem", fontWeight: "700" }}>
          Derrick Widner
        </h1>

        <h2 style={{ color: "red", marginBottom: "10px" }}>
          Redline Labs
        </h2>

        {/* TYPE ANIMATION */}
        <TypeAnimation
          sequence={[
            'Full Stack Developer',
            1500,
            'Software Engineer',
            1500,
            'UI/UX Designer',
            1500,
            'Automation Engineer',
            1500,
            'Game Developer',
            1500,
            'Building at the Redline',
            2000,
          ]}
          repeat={Infinity}
          speed={40}
          style={{
            color: "#aaa",
            marginBottom: "30px",
            display: "block"
          }}
        />

        {/* BUTTON */}
        <motion.button
          whileHover={{ scale: 1.1, boxShadow: "0 0 20px red" }}
          style={{
            padding: "14px 28px",
            background: "red",
            border: "none",
            color: "white",
            borderRadius: "8px",
            cursor: "pointer",
            marginTop: "10px"
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