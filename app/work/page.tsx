import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    title: "Multimodal Cricket Performance Tracker",
    note: "YouTube + Cricsheet + Pose estimation",
    slug: "multimodal-cricket-performance-tracker",
    tags: ["ML", "Sports", "Vision"],
    year: 2025,
  },
  {
    title: "GTA Traffic Risk Dashboard",
    note: "Simulated GTA data + Power BI mock",
    slug: "gta-traffic-risk-dashboard",
    tags: ["BI", "Mobility", "AV"],
    year: 2025,
  },
  {
    title: "Route Optimization & Predictive Maintenance",
    note: "Torque Analytics concept",
    slug: "route-optimization-predictive-maintenance",
    tags: ["Optimization", "MLOps"],
    year: 2025,
  },
];

export default function WorkPage() {
  return (
    <section className="py-10">
      <h1 className="text-3xl font-bold">Projects</h1>
      <ul className="mt-6 grid gap-4 sm:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </ul>
    </section>
  );
}