import Link from "next/link";

export default function Header() {
  return (
    <header style={{ padding: "20px", borderBottom: "2px solid gray" }}>
      <h1>My Next.js App</h1>

      <nav style={{ display: "flex", gap: "20px", marginTop: "10px" }}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
}