import Hero from "@/components/Hero";
import StatsCard from "@/components/StatsCard";

export default function HomePage() {
  return (
    <div className="space-y-12">
      <Hero />

    <section className="mt-10 grid gap-6 md:grid-cols-3">
       <StatsCard title="Students" value="10" />
       <StatsCard title="Courses" value="12" />
       <StatsCard title="Departments" value="5" />
    </section>
    </div>
  );
}