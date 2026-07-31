export default function Loading() {
  return (
    <section className="py-20">
      <h1 className="text-center text-4xl font-bold text-slate-900 mb-10">
        Loading Students...
      </h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className="animate-pulse rounded-xl bg-white p-6 shadow"
          >
            <div className="h-16 w-16 rounded-full bg-gray-300"></div>

            <div className="mt-6 h-5 rounded bg-gray-300"></div>

            <div className="mt-3 h-4 rounded bg-gray-200"></div>

            <div className="mt-6 h-4 rounded bg-gray-300"></div>

            <div className="mt-3 h-4 rounded bg-gray-200"></div>

            <div className="mt-6 h-10 rounded bg-gray-300"></div>
          </div>
        ))}
      </div>
    </section>
  );
}