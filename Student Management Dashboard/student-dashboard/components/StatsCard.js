export default function StatsCard({ title, value }) {
  return (
    <div className="rounded-xl bg-white dark:bg-slate-800 border border-slate-200 p-6 shadow-sm hover:shadow-lg transition">
      <p className="text-slate-600 dark:text-slate-300">{title}</p>

      <h2 className="mt-2 text-4xl font-bold text-slate-900 dark:text-white">
        {value}
      </h2>
    </div>
  );
}