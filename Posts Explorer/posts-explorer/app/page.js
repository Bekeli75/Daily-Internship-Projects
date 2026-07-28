export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }

  const posts = await response.json();

  return (
    <main className="min-h-screen bg-gray-600 p-8">
      <h1 className="mb-8 text-center text-4xl font-bold">
        Posts Explorer
      </h1>

      <div className="mx-auto max-w-5xl space-y-4">
        {posts.slice(0, 10).map((post) => (
          <div
            key={post.id}
            className="rounded-lg bg-white p-6 shadow"
          >
            <h2 className="mb-3 text-2xl font-bold text-gray-900">
              {post.title}
            </h2>
            
            <p className="text-gray-600">
              {post.body}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}