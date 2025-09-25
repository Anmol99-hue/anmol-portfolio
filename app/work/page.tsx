const projects = [
    { title: "Multimodal Cricket Performance Tracker", note: "YouTube + Cricsheet + Pose estimation" },
    { title: "GTA Traffic Risk Dashboard", note: "Simulated GTA data + Power BI mock" },
    { title: "Route Opt & Predictive Maintenance", note: "Torque Analytics concept" },
  ];
  
  export default function WorkPage() {
    return (
      <main style={{ padding: "2rem" }}>
        <h1>Projects</h1>
        <ul>
          {projects.map((p) => (
            <li key={p.title} style={{ margin: "0.5rem 0" }}>
              <strong>{p.title}</strong> — {p.note}
            </li>
          ))}
        </ul>
      </main>
    );
  }
  