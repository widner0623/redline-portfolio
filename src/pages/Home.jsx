import Hero from "../components/Hero"
import Projects from "../components/Projects"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

function Home() {
  return (
    <div className="home-page">

      {/* HERO */}
      <section className="section hero-section">
        <Hero />
      </section>

      {/* PROJECTS */}
      <section className="section fade">
        <Projects />
      </section>

      {/* CONTACT */}
      <section className="section fade">
        <Contact />
      </section>

      {/* FOOTER */}
      <Footer />

    </div>
  )
}

export default Home