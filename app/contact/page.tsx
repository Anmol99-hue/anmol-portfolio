import Link from "next/link";

export default function ContactPage() {
  return (
    <section className="py-10">
      <h1 className="text-3xl font-bold">Contact</h1>
      <p className="mt-3 text-zinc-700">
        The fastest way: <Link href="mailto:anmolpaman99@gmail.com" className="text-sky-600 hover:underline">anmolpaman99@gmail.com</Link>
      </p>
      <p className="mt-2 text-zinc-700">
        GitHub:{" "}
        <Link href="https://github.com/Anmol99-hue" target="_blank" className="text-sky-600 hover:underline">
          @Anmol99-hue
        </Link>
      </p>
      <p className="mt-2 text-zinc-700">
        LinkedIn: add link later
      </p>
    </section>
  );
}