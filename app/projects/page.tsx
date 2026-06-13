// Add or remove project objects from this array to populate the page.
// Each field marked with TODO should be replaced with your real content.
const projects = [
  {
    id: 1,
    name: "AgentVeil",                           // TODO
    accolades: "Browser Use x Y-Combinator x Anthropic x Deepmind Web-Agents Hackathon @ YC· Feb 2026",  // TODO
    description:
      "AgentVeil is a full-stack web-automation platform that uses multi-agent security and UX scanning to detect issues on live websites and automatically generate patch pull requests with the help of LLMs, Convex, Daytona, and GitHub.",  // TODO
    tools: ["Browser Use", "Convex", "Vercel", "React", "TypeScript", "GitHub"],          // TODO
    link: "https://github.com/reknahs/agent-veil",                                       // TODO: replace with actual URL
  },
  {
    id: 2,
    name: "Mastermind",
    accolades: "Clinical Voice Intelligence Platform · San Francisco, California · March 2026 – Present",
    description:
      "Mastermind is a clinical voice intelligence platform that combines a real-time web dashboard for patient monitoring and neuroscience triage with an on-device LLM voice agent, powered by Gemma 4, Convex, and Gemini API fallback.",
    tools: ["TypeScript", "Convex", "Swift", "Xcode", "Gemma 4", "Cactus", "Gemini API"],
    link: "https://github.com/vasishtk1/mastermind_v1",
  },
  {
    id: 3,
    name: "Deep Learning Research",
    accolades: "2024 IEEE MIT Undergraduate Research Technology Conference · Oct 2024 ",
    description:
      "A computer vision system that uses deep learning and novel curve-fitting algorithms to analyze basketball shot videos and provide real-time trajectory feedback for self-training.",
    tools: ["OpenCV", "Pydantic", "Tensorflow"],
    link: "https://ieeexplore.ieee.org/document/10937574",
  },
];

export default function Projects() {
  return (
    <div className="flex flex-col gap-10">
      {/* Header */}
      <div className="flex flex-col gap-3 pt-4">
        <div className="flex items-center gap-3">
          <span className="h-1 w-10 rounded-full bg-indigo-600" />
          <span className="text-sm font-medium text-indigo-600 uppercase tracking-widest">
            Work
          </span>
        </div>
        <h1 className="section-heading text-4xl">Projects</h1>
        <p className="text-slate-500">
          A collection of things I&apos;ve built.
        </p>
      </div>

      {/* Project cards */}
      <div className="flex flex-col gap-6">
        {projects.map((project) => (
          <article key={project.id} className="card flex flex-col gap-4">
            {/* Name + link */}
            <div className="flex items-start justify-between gap-4">
              <div className="flex flex-col gap-1">
                <h2 className="text-xl font-semibold text-slate-900">
                  {project.name}
                </h2>
                {/* Accolades */}
                <p className="text-sm font-medium text-indigo-600">
                  {project.accolades}
                </p>
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline shrink-0"
              >
                View Project
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 3h6v6" />
                  <path d="M10 14 21 3" />
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                </svg>
              </a>
            </div>

            {/* Description */}
            <p className="text-slate-600 leading-relaxed text-sm">
              {project.description}
            </p>

            {/* Tools */}
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool) => (
                <span key={tool} className="tag">
                  {tool}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
