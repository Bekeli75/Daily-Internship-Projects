"use client";

import { useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  function toggleTheme() {
    setDark(!dark);

    document.body.style.backgroundColor = dark ? "white" : "black";
    document.body.style.color = dark ? "black" : "white";
  }

  return (
    <button onClick={toggleTheme}>
      {dark ? "🌙 Dark Mode" : "☀️ Light Mode"}
    </button>
  );
}