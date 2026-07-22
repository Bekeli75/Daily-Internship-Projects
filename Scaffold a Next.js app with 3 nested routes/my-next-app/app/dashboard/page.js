import Link from "next/link";

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>

      <p>Welcome to the dashboard.</p>

      <ul>
        <li>
          <Link href="/dashboard/analytics">Analytics</Link>
        </li>

        <li>
          <Link href="/dashboard/settings">Settings</Link>
        </li>
      </ul>
    </div>
  );
}