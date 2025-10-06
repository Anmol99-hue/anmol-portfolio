import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t border-zinc-200">
      <div className="mx-auto max-w-5xl px-4 py-6 text-sm text-zinc-600">
        <div className="flex items-center justify-between">
          <p>© {new Date().getFullYear()} Anmol Singh Paman</p>
          <div className="flex gap-4">
            <Link href="https://github.com/Anmol99-hue" target="_blank" className="hover:underline">
              GitHub
            </Link>
            <Link href="mailto:anmol@example.com" className="hover:underline">
              Email
            </Link>
            <Link href="/resume" className="hover:underline">
              Resume
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}