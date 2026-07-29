import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 gap-6">
      <h1 className="text-4xl font-bold">
        Next.js Forms & Server Actions
      </h1>

      <Link
        href="/feedback"
        className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800"
      >
        Go to Feedback Form
      </Link>
    </main>
  );
}