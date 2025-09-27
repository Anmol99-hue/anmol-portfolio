import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Multimodal Cricket Performance Tracker — Case Study",
  description: "Pose + video + ball-by-ball stats to predict events and surface coaching insights.",
};

export default function CaseStudy() {
  return (
    <article className="px-6 py-12">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm font-medium text-sky-600">Case Study</p>
        <h1 className="mt-2 text-3xl font-bold">Multimodal Cricket Performance Tracker</h1>
        <p className="mt-3 text-zinc-600">
          YouTube frames + Cricsheet data + pose estimation (MediaPipe/PoseNet) to engineer features for
          wicket/boundary prediction and coaching feedback.
        </p>

        <section className="mt-8 space-y-3">
          <h2 className="text-xl font-semibold">Context</h2>
          <p>Solo project, 2025. Goal: more actionable insights per over using public data.</p>
        </section>

        <section className="mt-6 space-y-3">
          <h2 className="text-xl font-semibold">Data</h2>
          <ul className="list-disc pl-5 text-zinc-700">
            <li>YouTube match videos (sampled frames)</li>
            <li>Cricsheet ball-by-ball CSVs</li>
            <li>Derived pose keypoints and angles</li>
          </ul>
        </section>

        <section className="mt-6 space-y-3">
          <h2 className="text-xl font-semibold">Approach</h2>
          <p>Feature engineering on pose, temporal windows, simple baselines → compare to ML models.</p>
        </section>

        <section className="mt-6 space-y-3">
          <h2 className="text-xl font-semibold">Results & Impact</h2>
          <p>Placeholder: add charts and metrics here (accuracy, F1, lift vs baseline).</p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold">Links</h2>
          <ul className="list-disc pl-5">
            <li>Repo / Notebook / Demo — (add when ready)</li>
          </ul>
        </section>
      </div>
    </article>
  );
}
