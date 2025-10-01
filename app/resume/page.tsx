export default function ResumePage() {
    return (
      <section className="py-10">
        <h1 className="text-3xl font-bold">Resume</h1>
        <p className="mt-3 text-zinc-700">
          I’ll add a downloadable PDF here. For now, this is a placeholder.
        </p>
        {/* Later: place your PDF in /public/resume.pdf and add a link:
            <a href="/resume.pdf" className="text-sky-600 hover:underline">Download PDF</a>
        */}
      </section>
    );
  }