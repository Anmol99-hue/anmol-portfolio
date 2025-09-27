import Link from "next/link";

export default function Home() {
  return (
    <main className="px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm font-medium text-sky-600">Portfolio</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight">Anmol Singh Paman</h1>
        <p className="mt-3 text-lg text-zinc-600">
          Data &amp; Sports Analytics — I turn messy data into smart decisions.
        </p>

        <div className="mt-6 flex gap-3">
          <Link
            href="/work"
            className="inline-flex items-center rounded-lg bg-sky-600 px-4 py-2 text-white hover:bg-sky-700"
          >
            View Projects
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center rounded-lg border border-zinc-300 px-4 py-2 text-zinc-800 hover:bg-zinc-50"
          >
            About
          </Link>
        </div>
      </div>
    </main>
  );
}
