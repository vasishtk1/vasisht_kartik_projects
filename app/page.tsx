import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-16">
      {/* Hero */}
      <section className="flex flex-col gap-5 pt-8">
        <div className="flex items-center gap-3">
          <span className="h-1 w-10 rounded-full bg-indigo-600" />
          <span className="text-sm font-medium text-indigo-600 uppercase tracking-widest">
            Welcome
          </span>
        </div>
        <h1 className="text-5xl font-bold tracking-tight text-slate-900">
          Hi, I&apos;m{" "}
          <span className="text-indigo-600">Vasisht Kartik</span>
        </h1>
        <p className="max-w-xl text-lg text-slate-500 leading-relaxed">
          {/* TODO: Replace with your tagline / brief bio */}
          I'm experienced in AI, machine learning, embedded systems, and product/systems engineering. 
          I’m passionate about building revolutionary computational tools that change the world. 
        </p>
        <div className="flex items-center gap-4 pt-2">
          <Link href="/projects" className="btn-primary">
            View Projects
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
          <Link href="/contact" className="btn-outline">
            Get in Touch
          </Link>
        </div>
      </section>

      {/* Divider */}
      <hr className="border-slate-200" />

      {/* Quick nav cards */}
      <section className="flex flex-col gap-6">
        <h2 className="section-heading">Explore</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Link href="/projects" className="card group flex flex-col gap-2 hover:border-indigo-300">
            <span className="text-2xl">🛠</span>
            <h3 className="font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors">
              Projects
            </h3>
            <p className="text-sm text-slate-500">
              Things I&apos;ve built — tools, apps, and experiments.
            </p>
          </Link>
          <Link href="/experience" className="card group flex flex-col gap-2 hover:border-indigo-300">
            <span className="text-2xl">💼</span>
            <h3 className="font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors">
              Experience
            </h3>
            <p className="text-sm text-slate-500">
              Roles, internships, and research I&apos;ve been part of.
            </p>
          </Link>
          <Link href="/interests" className="card group flex flex-col gap-2 hover:border-indigo-300">
            <span className="text-2xl">✦</span>
            <h3 className="font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors">
              Interests
            </h3>
            <p className="text-sm text-slate-500">
              Topics, hobbies, and areas I care about.
            </p>
          </Link>
          <Link href="/contact" className="card group flex flex-col gap-2 hover:border-indigo-300">
            <span className="text-2xl">✉</span>
            <h3 className="font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors">
              Contact
            </h3>
            <p className="text-sm text-slate-500">
              Reach out — I&apos;m always happy to connect.
            </p>
          </Link>
        </div>
      </section>
    </div>
  );
}
