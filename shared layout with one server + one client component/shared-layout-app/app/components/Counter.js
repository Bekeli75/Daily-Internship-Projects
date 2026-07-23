"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count - 1)}>-</button>

      <button
        onClick={() => setCount(count + 1)}
        style={{ marginLeft: "10px" }}
      >
        +
      </button>
    </div>
  );
}