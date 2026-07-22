import Link from "next/link";

export default function Home() {
  return (
    <main style={{ padding: "30px" }}>
      <h1>Home Page</h1>

      <p>Welcome.</p>

      <Link href="/dashboard">Go to Dashboard</Link>
    </main>
  );
}