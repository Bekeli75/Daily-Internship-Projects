import Link from "next/link";

export default function StudentCard({ student }) {
  return (
    <div className="rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="flex items-center gap-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-2xl font-bold text-white">
          {student.name.charAt(0)}
        </div>

        <div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            {student.name}
          </h2>

          <p className="text-slate-600 dark:text-slate-300">
            {student.email}
          </p>
        </div>
      </div>

      <Link
        href={`/students/${student.id}`}
        className="mt-6 inline-block rounded-lg bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
      >
        View Profile
      </Link>
    </div>
  );
}