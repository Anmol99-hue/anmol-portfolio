import "./globals.css";

export const metadata = {
  title: "Anmol Singh Paman — Portfolio",
  description: "Data & Sports Analytics — turning messy data into smart decisions.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased text-zinc-900 bg-white">{children}</body>
    </html>
  );
}

