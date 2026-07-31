import Link from "next/link";
import { notFound } from "next/navigation";

async function getStudent(id) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`,
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    notFound();
  }

  return response.json();
}

export default async function StudentDetails({ params }) {
  const { id } = await params;

  const student = await getStudent(id);

  return (
    <section className="max-w-3xl mx-auto">
      <div className="rounded-xl bg-white p-8 shadow-lg">
        <div className="flex items-center gap-6">
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-blue-600 text-4xl font-bold text-white">
            {student.name.charAt(0)}
          </div>

          <div>
            <h1 className="text-4xl font-bold">{student.name}</h1>
            <p className="text-slate-600">@{student.username}</p>
          </div>
        </div>

        <div className="mt-10 space-y-4">
          <p><strong>Email:</strong> {student.email}</p>
          <p><strong>Phone:</strong> {student.phone}</p>
          <p><strong>Website:</strong> {student.website}</p>
          <p><strong>Company:</strong> {student.company.name}</p>
          <p><strong>City:</strong> {student.address.city}</p>
          <p><strong>Street:</strong> {student.address.street}</p>
        </div>

        <Link
          href="/students"
          className="mt-10 inline-block rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
        >
          ← Back to Students
        </Link>
      </div>
    </section>
  );
}