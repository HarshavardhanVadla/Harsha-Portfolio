import React from "react";
// If you paste this into a Next.js App Router project, save as app/page.tsx (or page.jsx)
// For Vite-React, save as src/App.jsx and render <App /> in main.jsx.
// Tailwind recommended. If you don't use Tailwind yet, it will still render but without styles.

export default function App() {
  const projects = [
    {
      title: "Harsha_Portfolio",
      description:
        "I’m Harsha Vardhan, a passionate full-stack and DevOps engineer with expertise in Node.js, React, and cloud technologies. I love building reliable, scalable solutions and continuously expanding my skills to create impactful digital experiences.",
      stack: ["React", "Vite", "TypeScript", "RTL"],
      code: "https://github.com/HarshavardhanVadla/react-menu-card",
      demo: "#",
    },
    {
      title: "Node REST Starter",
      description:
        "Type-safe REST API with Express/Fastify, Zod validation, Prisma, JWT.",
      stack: ["Node", "TypeScript", "Prisma", "Jest"],
      code: "https://github.com/HarshavardhanVadla/node-rest-starter",
      demo: "#",
    },
    {
      title: "Realtime Chat",
      description:
        "Socket-powered chat with typing indicators, unread counts, and auth.",
      stack: ["React", "Node", "WebSocket", "Redis"],
      code: "https://github.com/HarshavardhanVadla/realtime-chat",
      demo: "#",
    },
  ];

  const skills = [
    "JavaScript/TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Express/Fastify",
    "REST APIs",
    "MongoDB/Postgres",
    "Prisma",
    "Jest/RTL",
    "Git & GitHub",
    "Docker",
    "CI/CD"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-white text-zinc-900">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-zinc-200">
        <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <a href="#home" className="font-bold text-xl tracking-tight">Harsha Vardhan</a>
          <ul className="hidden md:flex gap-6 text-sm">
            <li><a className="hover:text-zinc-600" href="#projects">Projects</a></li>
            <li><a className="hover:text-zinc-600" href="#experience">Experience</a></li>
            <li><a className="hover:text-zinc-600" href="#skills">Skills</a></li>
            <li><a className="hover:text-zinc-600" href="#contact">Contact</a></li>
          </ul>
          <a
            href="/resume.pdf"
            className="rounded-full border border-zinc-300 px-4 py-2 text-sm hover:bg-zinc-100"
          >
            Download Resume
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section id="home" className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs mb-4">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Open to full-time roles
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Full‑Stack Developer — Node.js & React
            </h1>
            <p className="mt-4 text-zinc-600 text-base md:text-lg">
              I build scalable backends and delightful frontends. Currently focusing on
              clean REST APIs, modern React UIs, and simple DevOps that keep apps fast and reliable.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="#projects"
                className="rounded-2xl px-5 py-2.5 bg-zinc-900 text-white hover:bg-zinc-800"
              >
                View Projects
              </a>
              <a
                href="https://github.com/HarshavardhanVadla"
                className="rounded-2xl px-5 py-2.5 border border-zinc-300 hover:bg-zinc-100"
              >
                GitHub Profile
              </a>
            </div>
            <div className="mt-6 flex items-center gap-6 text-sm text-zinc-500">
              <span>Node.js</span>
              <span>React</span>
              <span>TypeScript</span>
              <span>CI/CD</span>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-3xl border border-zinc-200 bg-white shadow-sm"/>
            <div className="absolute -bottom-4 -left-4 rounded-3xl border border-zinc-200 bg-white px-4 py-3 shadow-sm">
              <p className="text-sm">Shipping small projects weekly 🚀</p>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="bg-white border-t border-b border-zinc-200">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="flex items-end justify-between mb-6">
            <h2 className="text-2xl md:text-3xl font-semibold">Featured Projects</h2>
            <a href="https://github.com/HarshavardhanVadla?tab=repositories" className="text-sm hover:underline">View all →</a>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p) => (
              <article key={p.title} className="group rounded-3xl border border-zinc-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
                <div className="aspect-video rounded-2xl bg-gradient-to-br from-zinc-100 to-zinc-50 mb-4"/>
                <h3 className="font-semibold text-lg leading-snug">{p.title}</h3>
                <p className="mt-1 text-sm text-zinc-600">{p.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span key={s} className="text-xs rounded-full border border-zinc-200 bg-zinc-50 px-2 py-0.5">{s}</span>
                  ))}
                </div>
                <div className="mt-4 flex gap-3 text-sm">
                  <a href={p.demo} className="rounded-full px-3 py-1.5 bg-zinc-900 text-white hover:bg-zinc-800">Live</a>
                  <a href={p.code} className="rounded-full px-3 py-1.5 border border-zinc-300 hover:bg-zinc-100">Code</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Experience</h2>
        <ol className="relative border-s border-zinc-200">
          {[{
            role: "Azure DevOps Consultant",
            org: "Cloud9 Infosystems",
            time: "2025 — Present",
            points: [
              "Built CI/CD pipelines and improved release reliability.",
              "Containerized services and optimized deployment workflow.",
            ],
          },{
            role: "QA Test Analyst → DevOps/Full-Stack Transition",
            org: "Previous Roles",
            time: "2019 — 2024",
            points: [
              "Hands-on with automation, scripting, and cloud basics.",
              "Shipped small Node/React projects to learn by doing.",
            ],
          }].map((e, i) => (
            <li key={i} className="mb-8 ms-4">
              <div className="absolute w-3 h-3 bg-zinc-900 rounded-full mt-2 -start-1.5 border border-white" />
              <h3 className="font-semibold">{e.role} • <span className="text-zinc-600">{e.org}</span></h3>
              <p className="text-sm text-zinc-500">{e.time}</p>
              <ul className="list-disc ms-5 mt-2 text-sm text-zinc-700 space-y-1">
                {e.points.map((pt) => <li key={pt}>{pt}</li>)}
              </ul>
            </li>
          ))}
        </ol>
      </section>

      {/* SKILLS */}
      <section id="skills" className="bg-white border-t border-b border-zinc-200">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((s) => (
              <span key={s} className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-sm">{s}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-6xl px-4 py-14">
        <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl md:text-3xl font-semibold">Contact</h2>
          <p className="mt-2 text-zinc-600 text-sm">Have an opportunity or just want to say hi? Drop a message.</p>
          <form className="mt-6 grid md:grid-cols-2 gap-4">
            <input className="rounded-2xl border border-zinc-300 px-4 py-2" placeholder="Your name" />
            <input className="rounded-2xl border border-zinc-300 px-4 py-2" placeholder="Email" />
            <textarea className="md:col-span-2 min-h-[120px] rounded-2xl border border-zinc-300 px-4 py-2" placeholder="Message" />
            <div className="md:col-span-2">
              <button type="button" className="rounded-2xl px-5 py-2.5 bg-zinc-900 text-white hover:bg-zinc-800">Send</button>
            </div>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mx-auto max-w-6xl px-4 py-10 text-sm text-zinc-500">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Harsha Vardhan. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a className="hover:underline" href="mailto:you@example.com">you@example.com</a>
            <a className="hover:underline" href="https://github.com/HarshavardhanVadla">GitHub</a>
            <a className="hover:underline" href="https://www.linkedin.com/in/your-handle">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
