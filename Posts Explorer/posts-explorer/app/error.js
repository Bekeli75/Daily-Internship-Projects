"use client";

export default function Error({ error, reset }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-red-50 p-6">
      <h1 className="mb-4 text-4xl font-bold text-red-600">
        Oops! Something went wrong.
      </h1>

      <p className="mb-6 text-center text-gray-700">
        We couldn't load the posts. Please try again.
      </p>

      <button
        onClick={() => reset()}
        className="rounded-lg bg-red-600 px-6 py-3 text-white hover:bg-red-700"
      >
        Try Again
      </button>
    </main>
  );
}