import SearchBar from "@/components/SearchBar";

async function getStudents() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users",
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch students.");
  }

  return response.json();
}

export default async function StudentsPage() {
  const students = await getStudents();

  return (
    <section>
      <h1 className="mb-8 text-center text-4xl font-bold text-slate-900">
        Students
      </h1>

      <SearchBar students={students} />
    </section>
  );
}