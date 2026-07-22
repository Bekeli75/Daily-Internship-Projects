import Link from "next/link";

export default function DashboardLayout({ children }) {
  return (
    <div style={{ padding: "30px" }}>
      <h2>Dashboard Layout</h2>

      <nav style={{ marginBottom: "20px" }}>
        <Link href="/">Home</Link>{" | "}
        <Link href="/dashboard">Dashboard</Link>{" | "}
        <Link href="/dashboard/analytics">Analytics</Link>{" | "}
        <Link href="/dashboard/settings">Settings</Link>
      </nav>

      <hr />

      {children}
    </div>
  );
}