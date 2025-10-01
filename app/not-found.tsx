import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold">404 — Page not found</h1>
      <p className="mt-3 text-zinc-600">No worries. Let’s get you back on track.</p>
      <Link href="/" className="mt-6 rounded-md bg-sky-600 px-4 py-2 text-white hover:bg-sky-700">
        Go Home
      </Link>
    </section>
  );
}