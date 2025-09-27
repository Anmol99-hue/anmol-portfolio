import Link from "next/link";

const projects = [
  { title: "Multimodal Cricket Performance Tracker", note: "YouTube + Cricsheet + Pose estimation", slug: "multimodal-cricket-performance-tracker" },
  { title: "GTA Traffic Risk Dashboard", note: "Simulated GTA data + Power BI mock", slug: "gta-traffic-risk-dashboard" },
  { title: "Route Opt & Predictive Maintenance", note: "Torque Analytics concept", slug: "route-optimization-predictive-maintenance" },
];

export default function WorkPage() {
  return (
    <main className="px-6 py-12">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-3xl font-bold">Projects</h1>
        <ul className="mt-6 grid gap-4">
          {projects.map((p) => (
            <li key={p.slug} className="rounded-xl border border-zinc-200 p-4 hover:shadow-sm">
              <h2 className="text-xl font-semibold">
                <Link href={`/work/${p.slug}`} className="hover:underline">
                  {p.title}
                </Link>
              </h2>
              <p className="mt-1 text-zinc-600">{p.note}</p>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
