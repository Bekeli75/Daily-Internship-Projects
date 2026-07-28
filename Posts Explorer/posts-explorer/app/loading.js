export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-blue-600">
          Loading Posts...
        </h1>

        <p className="mt-2 text-gray-600">
          Please wait while we fetch the latest posts.
        </p>
      </div>
    </main>
  );
}