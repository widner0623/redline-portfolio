function Contact() {
  return (
    <section id="contact" style={{ textAlign: "center" }}>
      <h2>Contact</h2>

      <p style={{ color: "#aaa" }}>
        Serving Kentucky • Indiana • Tennessee
      </p>

      <iframe
        src="https://www.google.com/maps?q=37.5,-86.5&z=6&output=embed"
        width="100%"
        height="300"
        style={{
          border: "1px solid #222",
          borderRadius: "12px",
          margin: "20px 0",
          boxShadow: "0 0 25px rgba(255,0,0,0.2)"
        }}
      />

      <p>24/7 Availability</p>

      <a href="mailto:derrick.widner@redlinelabs.com" style={btn}>
        Get In Touch
      </a>
    </section>
  )
}

const btn = {
  display: "inline-block",
  marginTop: "20px",
  padding: "14px 28px",
  background: "red",
  color: "white",
  borderRadius: "8px"
}

export default Contact