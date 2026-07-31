"use client";

import { useState } from "react";
import StudentCard from "./StudentCard";

export default function SearchBar({ students }) {
  const [search, setSearch] = useState("");

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="w-full rounded-xl border border-slate-300 bg-white dark:bg-slate-800 px-4 py-3 shadow-sm focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 outline-none">
        <input
          type="text"
          placeholder="Search students..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-xl border border-slate-300 dark:border-slate-700 p-4 text-lg text-slate-600 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
      </div>

      {filteredStudents.length === 0 ? (
        <div className="rounded-lg bg-white p-8 text-center shadow">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
            No students found.
          </h2>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredStudents.map((student) => (
            <StudentCard
              key={student.id}
              student={student}
            />
          ))}
        </div>
      )}
    </>
  );
}