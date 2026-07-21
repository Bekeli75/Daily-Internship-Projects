import { useState } from "react";

export default function App() {
  // Counter state
  const [count, setCount] = useState(0);

  // Theme state
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "#fff",
        color: darkMode ? "#fff" : "#000",
        minHeight: "100vh",
        textAlign: "center",
        padding: "30px",
      }}
    >
      <h1>Counter + Light/Dark Mode</h1>

      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>+</button>

      <button
        onClick={() => setCount(count - 1)}
        style={{ marginLeft: "10px" }}
      >
        -
      </button>

      <button
        onClick={() => setCount(0)}
        style={{ marginLeft: "10px" }}
      >
        Reset
      </button>

      <br />
      <br />

      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
    </div>
  );
}