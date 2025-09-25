export const metadata = {
  title: "Anmol Singh Paman — Portfolio",
  description: "Data & Sports Analytics — turning messy data into smart decisions.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, sans-serif' }}>
        {children}
      </body>
    </html>
  );
}
