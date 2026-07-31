"use client";

export default function Error({ error, reset }) {
  return (
    <section className="py-20 text-center">
      <h1 className="text-5xl font-bold text-red-600">
        Oops!
      </h1>

      <p className="mt-6 text-gray-600">
        {error.message}
      </p>

      <button
        onClick={() => reset()}
        className="mt-8 rounded-lg bg-red-600 px-6 py-3 text-white transition hover:bg-red-700"
      >
        Try Again
      </button>
    </section>
  );
}