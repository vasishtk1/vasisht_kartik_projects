// Add or remove interest objects to populate this page.
// Replace TODO fields with your real content.
const interests = [
  {
    id: 1,
    title: "Interest Title",          // TODO
    description:
      "A short description of this interest — what draws you to it, how long you've been into it, or anything that makes it meaningful to you.",  // TODO
  },
  {
    id: 2,
    title: "Interest Title",
    description:
      "A short description of this interest.",
  },
  {
    id: 3,
    title: "Interest Title",
    description:
      "A short description of this interest.",
  },
  {
    id: 4,
    title: "Interest Title",
    description:
      "A short description of this interest.",
  },
];

export default function Interests() {
  return (
    <div className="flex flex-col gap-10">
      {/* Header */}
      <div className="flex flex-col gap-3 pt-4">
        <div className="flex items-center gap-3">
          <span className="h-1 w-10 rounded-full bg-indigo-600" />
          <span className="text-sm font-medium text-indigo-600 uppercase tracking-widest">
            About Me
          </span>
        </div>
        <h1 className="section-heading text-4xl">Interests</h1>
        <p className="text-slate-500">
          Things I think about, explore, and care about outside of work.
        </p>
      </div>

      {/* Interest cards — 2-col grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {interests.map((interest) => (
          <div key={interest.id} className="card flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center">
                <span className="text-indigo-600 text-sm font-bold">
                  {interest.id}
                </span>
              </div>
              <h2 className="text-lg font-semibold text-slate-900">
                {interest.title}
              </h2>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              {interest.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
