import { useState, useEffect } from "react";
import PizzaDashboard from "./PizzaDashboard";

function PizzaDemo() {
  const [code, setCode] = useState("");
  const [error, setError] = useState(false);
  const [unlocking, setUnlocking] = useState(false);
  const [fadeIn, setFadeIn] = useState(true);

  // 🔥 PERSIST LOGIN
  const [loggedIn, setLoggedIn] = useState(() => {
    return localStorage.getItem("pizza-auth") === "true";
  });

  /* ---------- RESET LOGIN (DEV TOOL) ---------- */
  useEffect(() => {
    window.resetPizzaLogin = () => {
      localStorage.removeItem("pizza-auth");
      window.dispatchEvent(new Event("pizza-logout"));
    };
  }, []);

  /* ---------- LOGOUT LISTENER (NO RELOAD) ---------- */
  useEffect(() => {
    const handleLogout = () => {
      setFadeIn(false);

      setTimeout(() => {
        setLoggedIn(false);
        setCode("");
        setUnlocking(false);
        setFadeIn(true);
      }, 150);
    };

    window.addEventListener("pizza-logout", handleLogout);
    return () => window.removeEventListener("pizza-logout", handleLogout);
  }, []);

  /* ---------- KEYBOARD INPUT ---------- */
  useEffect(() => {
    const handleKey = (e) => {
      if (!isNaN(e.key)) handleInput(e.key);
      if (e.key === "Backspace") setCode((c) => c.slice(0, -1));
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [code]);

  /* ---------- HANDLE INPUT ---------- */
  const handleInput = (num) => {
    if (code.length >= 4) return;

    const next = code + num;
    setCode(next);

    if (next.length === 4) {
      if (next === "2381") {
        setUnlocking(true);

        setTimeout(() => {
          localStorage.setItem("pizza-auth", "true");
          setLoggedIn(true);
        }, 600);
      } else {
        triggerError();
      }
    }
  };

  /* ---------- ERROR SHAKE ---------- */
  const triggerError = () => {
    setError(true);

    setTimeout(() => {
      setError(false);
      setCode("");
    }, 500);
  };

  /* ---------- AFTER LOGIN ---------- */
  if (loggedIn) {
    return <PizzaDashboard />;
  }

  /* ---------- LOGIN UI ---------- */
  return (
    <div
      style={{
        ...styles.container,
        opacity: fadeIn ? 1 : 0,
        transform: unlocking
          ? "scale(1.08)"
          : error
          ? "translateX(-10px)"
          : "scale(1)",
      }}
    >
      <h1 style={styles.title}>Enter Passcode</h1>

      {/* DOTS */}
      <div style={styles.dots}>
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            style={{
              ...styles.dot,
              background: code.length > i ? "#111" : "#ccc",
              transform: code.length === i ? "scale(1.4)" : "scale(1)",
            }}
          />
        ))}
      </div>

      {/* KEYPAD */}
      <div style={styles.keypad}>
        {[1,2,3,4,5,6,7,8,9,"",0,"⌫"].map((n, i) => (
          <button
            key={i}
            style={styles.key}
            onClick={() => {
              if (n === "⌫") {
                setCode((c) => c.slice(0, -1));
                return;
              }
              if (n !== "") handleInput(n);
            }}
            onMouseDown={(e) => {
              e.currentTarget.style.transform = "scale(0.85)";
            }}
            onMouseUp={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            {n}
          </button>
        ))}
      </div>
    </div>
  );
}

export default PizzaDemo;

/* ---------- STYLES ---------- */

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "#ffffff",
    transition: "all 0.3s ease",
  },

  title: {
    fontSize: "22px",
    color: "#111",
    marginBottom: "30px",
  },

  dots: {
    display: "flex",
    gap: "14px",
    marginBottom: "30px",
  },

  dot: {
    width: "14px",
    height: "14px",
    borderRadius: "50%",
    transition: "all 0.2s ease",
  },

  keypad: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 80px)",
    gap: "18px",
  },

  key: {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    border: "none",
    background: "#f1f5f9",
    fontSize: "20px",
    color: "#111",
    cursor: "pointer",
    transition: "transform 0.1s ease",
  },
};