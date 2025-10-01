import Link from "next/link";

type Project = {
  title: string;
  note: string;
  slug: string;
  tags?: string[];
  year?: number;
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <li className="rounded-xl border border-zinc-200 p-4 transition hover:shadow-sm">
      <h2 className="text-xl font-semibold">
        <Link href={`/work/${project.slug}`} className="hover:underline">
          {project.title}
        </Link>
      </h2>
      <p className="mt-1 text-zinc-600">{project.note}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {(project.tags ?? []).map((t) => (
          <span
            key={t}
            className="rounded-full border border-zinc-200 px-2 py-0.5 text-xs text-zinc-700"
          >
            {t}
          </span>
        ))}
        {project.year ? (
          <span className="rounded-full bg-zinc-100 px-2 py-0.5 text-xs text-zinc-700">
            {project.year}
          </span>
        ) : null}
      </div>
    </li>
  );
}