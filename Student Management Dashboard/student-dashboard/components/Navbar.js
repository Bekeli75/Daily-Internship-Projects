"use client";

import { useTheme } from "@/app/context/ThemeContext";
import Link from "next/link";

export default function Navbar() {
    const { darkMode, toggleTheme } = useTheme();
  return (
    <nav className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700 shadow-sm text-slate-700 dark:text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-2xl font-bold">
          Student Dashboard
        </Link>

        <div className="flex gap-6">
          <Link href="/" className="hover:text-blue-200 transition">
            Home
          </Link>

          <Link href="/students" className="hover:text-blue-200 transition">
            Students
          </Link>

          <Link href="/feedback" className="hover:text-blue-200 transition">
            Feedback
          </Link>
          <button
            onClick={toggleTheme}
            className="rounded-lg bg-slate-200 px-3 py-2 transition hover:bg-slate-300 dark:bg-slate-700 dark:text-white dark:hover:bg-slate-600"
          >
            {darkMode ? "☀️ Light" : "🌙 Dark"}
          </button>
        </div>
      </div>
    </nav>
  );
}