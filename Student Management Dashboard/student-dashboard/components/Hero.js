import Link from "next/link";

export default function Hero() {
  return (
    <section className="rounded-3xl bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500 px-10 py-16 text-white">
      <h1 className="text-4xl md:text-5xl font-bold">
        Student Management Dashboard
      </h1>

      <p className="mt-6 max-w-2xl text-lg text-indigo-100">
        Manage student information, search profiles, explore details,
        and submit feedback using modern Next.js features.
      </p>

      <Link
        href="/students"
        className="mt-10 inline-block rounded-lg bg-white px-8 py-3 font-semibold text-blue-700 transition hover:scale-105"
      >
        Explore Students →
      </Link>
    </section>
  );
}