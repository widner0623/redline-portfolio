import { useState, useEffect } from "react";

function PizzaDashboard() {
  const [tab, setTab] = useState("dashboard");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 900);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <div style={styles.container}>
      
      {!isMobile && (
        <div style={styles.sidebar}>
          <h2 style={styles.logo}>🍕 Redline</h2>

          <Nav tab={tab} setTab={setTab} label="Dashboard" id="dashboard" />
          <Nav tab={tab} setTab={setTab} label="POS" id="pos" />
          <Nav tab={tab} setTab={setTab} label="Orders" id="orders" />
          <Nav tab={tab} setTab={setTab} label="Inventory" id="inventory" />
        </div>
      )}

      <div style={styles.main}>
        <Topbar />

        <div style={styles.content}>
          {tab === "dashboard" && <Dashboard />}
          {tab === "pos" && <Coming />}
          {tab === "orders" && <Coming />}
          {tab === "inventory" && <Coming />}
        </div>
      </div>

      {isMobile && (
        <div style={styles.mobileNav}>
          <MobileNav tab={tab} setTab={setTab} id="dashboard" label="Home" />
          <MobileNav tab={tab} setTab={setTab} id="pos" label="POS" />
          <MobileNav tab={tab} setTab={setTab} id="orders" label="Orders" />
          <MobileNav tab={tab} setTab={setTab} id="inventory" label="Stock" />
        </div>
      )}
    </div>
  );
}

export default PizzaDashboard;

/* ---------- NAV ---------- */

function Nav({ tab, setTab, label, id }) {
  return (
    <div
      onClick={() => setTab(id)}
      style={{
        ...styles.nav,
        background: tab === id ? "#eef2ff" : "transparent",
      }}
    >
      {label}
    </div>
  );
}

function MobileNav({ tab, setTab, id, label }) {
  return (
    <div
      onClick={() => setTab(id)}
      style={{
        ...styles.mobileItem,
        color: tab === id ? "red" : "#555",
      }}
    >
      {label}
    </div>
  );
}

/* ---------- TOPBAR ---------- */

function Topbar() {
  return (
    <div style={styles.topbar}>
      <div style={{ fontWeight: 600 }}>Pizza System</div>

      <div style={styles.topRight}>
        <div style={styles.live}>
          <div style={styles.liveDot}></div>
          Live
        </div>

        <button
          style={styles.logout}
          onClick={() => {
            localStorage.removeItem("pizza-auth");
            window.dispatchEvent(new Event("pizza-logout"));
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

/* ---------- 🔥 DASHBOARD ---------- */

function Dashboard() {
  const [revenue, setRevenue] = useState(2340);
  const [orders, setOrders] = useState(128);

  useEffect(() => {
    const i = setInterval(() => {
      setRevenue((r) => r + Math.floor(Math.random() * 15));
      setOrders((o) => o + Math.floor(Math.random() * 2));
    }, 3000);

    return () => clearInterval(i);
  }, []);

  return (
    <div style={styles.dashboard}>
      
      {/* HEADER */}
      <div style={styles.header}>
        <h1 style={styles.h1}>Dashboard</h1>
        <p style={styles.sub}>Real-time business insights</p>
      </div>

      {/* STATS */}
      <div style={styles.stats}>
        <Stat title="Revenue" value={`$${revenue}`} />
        <Stat title="Orders" value={orders} />
        <Stat title="Avg Order" value="$18.40" />
        <Stat title="Labor %" value="28%" />
      </div>

      {/* MAIN GRID */}
      <div style={styles.mainGrid}>
        
        {/* GRAPH */}
        <div style={styles.cardLarge}>
          <h3>Sales Today</h3>
          <div style={styles.chart}></div>
        </div>

        {/* SIDE INFO */}
        <div style={styles.sideStack}>
          
          <div style={styles.card}>
            <h3>Kitchen Load</h3>
            <p>New: 5</p>
            <p>Preparing: 7</p>
            <p>Oven: 3</p>
          </div>

          <div style={styles.card}>
            <h3>Inventory Alerts</h3>
            <p style={{ color: "#f59e0b" }}>Mozzarella Low</p>
            <p style={{ color: "#dc2626" }}>Pepperoni Critical</p>
          </div>

        </div>
      </div>

      {/* ACTIVITY */}
      <div style={styles.card}>
        <h3>Live Activity</h3>
        <p>🔥 Order #142 placed</p>
        <p>✅ Order #139 completed</p>
        <p>⚠️ Inventory updated</p>
      </div>

    </div>
  );
}

/* ---------- COMPONENTS ---------- */

function Stat({ title, value }) {
  return (
    <div style={styles.stat}>
      <p style={styles.statLabel}>{title}</p>
      <h2 style={styles.statValue}>{value}</h2>
    </div>
  );
}

function Coming() {
  return (
    <div style={styles.coming}>
      <h2>Coming Soon</h2>
    </div>
  );
}

/* ---------- STYLES ---------- */

const styles = {
  container: {
    display: "flex",
    height: "100vh",
    background: "#f4f6f8",
    color: "#111",
  },

  sidebar: {
    width: "220px",
    background: "#fff",
    padding: "20px",
    borderRight: "1px solid #ddd",
  },

  logo: { marginBottom: "30px", color: "red" },

  nav: {
    padding: "12px",
    marginBottom: "10px",
    cursor: "pointer",
    borderRadius: "8px",
  },

  main: { flex: 1, display: "flex", flexDirection: "column" },

  topbar: {
    padding: "15px",
    background: "#fff",
    display: "flex",
    justifyContent: "space-between",
    borderBottom: "1px solid #ddd",
  },

  topRight: { display: "flex", gap: "15px", alignItems: "center" },

  logout: {
    background: "#111",
    color: "#fff",
    border: "none",
    padding: "6px 12px",
    borderRadius: "6px",
  },

  live: { display: "flex", gap: "6px", alignItems: "center" },
  liveDot: { width: "8px", height: "8px", background: "green", borderRadius: "50%" },

  content: { padding: "20px", overflowY: "auto" },

  dashboard: { display: "flex", flexDirection: "column", gap: "20px" },

  header: {},
  h1: { fontSize: "26px", marginBottom: "5px" },
  sub: { color: "#666" },

  stats: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
    gap: "15px",
  },

  stat: {
    background: "#fff",
    padding: "15px",
    borderRadius: "10px",
  },

  statLabel: { color: "#666", fontSize: "13px" },
  statValue: { fontSize: "20px" },

  mainGrid: {
    display: "grid",
    gridTemplateColumns: "2fr 1fr",
    gap: "20px",
  },

  cardLarge: {
    background: "#fff",
    padding: "20px",
    borderRadius: "12px",
  },

  chart: {
    height: "150px",
    background: "linear-gradient(to right, #ff2c2c, #ff8a8a)",
    borderRadius: "8px",
    marginTop: "10px",
  },

  sideStack: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },

  card: {
    background: "#fff",
    padding: "15px",
    borderRadius: "10px",
  },

  coming: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    color: "#555",
  },

  mobileNav: {
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    background: "#fff",
    display: "flex",
    justifyContent: "space-around",
    padding: "10px",
    borderTop: "1px solid #ddd",
  },

  mobileItem: { fontSize: "14px" },
};