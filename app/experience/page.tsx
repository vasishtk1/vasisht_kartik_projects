// Add or remove experience objects from this array to populate the page.
// Each field marked with TODO should be replaced with your real content.
const experiences = [
  {
    id: 1,
    role: "Software Engineer Intern",                                  // TODO
    company: "Plasiv AI",                     // TODO
    period: "May 2026 - September 2026",                     // TODO
    description: [
      "Building computer vision intelligence and video analytics pipelines to extract station-level manufacturing insights from real-world electronics manufacturing data",
      "Developing physical AI-driven 3D digital twin tooling using synthetic data generation and NVIDIA Omniverse; automating line planning and simulation workflows for electronics manufacturers",
    ],  
    skills: ["Skill 1", "Skill 2", "Skill 3"],             // TODO
    link: "https://example.com",                           // TODO: replace with actual URL
  },
];

export default function Experience() {
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
        <h1 className="section-heading text-4xl">Experience</h1>
        <p className="text-slate-500">
          Roles, internships, and research I&apos;ve been part of.
        </p>
      </div>

      {/* Experience cards */}
      <div className="flex flex-col gap-6">
        {experiences.map((experience) => (
          <article key={experience.id} className="card flex flex-col gap-4">
            {/* Role + link */}
            <div className="flex items-start justify-between gap-4">
              <div className="flex flex-col gap-1">
                <h2 className="text-xl font-semibold text-slate-900">
                  {experience.role}
                </h2>
                {/* Company + period */}
                <p className="text-sm font-medium text-indigo-600">
                  {experience.company} · {experience.period}
                </p>
              </div>
              <a
                href={experience.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline shrink-0"
              >
                Link to Work
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
            <ul className="list-disc list-inside flex flex-col gap-1 text-slate-600 leading-relaxed text-sm">
              {experience.description.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            {/* Skills */}
            <div className="flex flex-wrap gap-2">
              {experience.skills.map((skill) => (
                <span key={skill} className="tag">
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
