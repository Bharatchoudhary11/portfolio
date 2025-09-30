"use client";

import { useEffect, useState } from "react";

interface Project {
  _id: string;
  title: string;
  description: string;
}

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    async function loadProjects() {
      try {
        const res = await fetch("/api/projects");
        if (!res.ok) {
          console.error("Failed to fetch projects", res.statusText);
          return;
        }

        const text = await res.text();
        const data: Project[] = text ? JSON.parse(text) : [];
        setProjects(data);
      } catch (err) {
        console.error("Error loading projects", err);
      }
    }

    loadProjects();

    const evtSource = new EventSource("/api/projects/stream");
    evtSource.onmessage = (e) => {
      const project: Project = JSON.parse(e.data);
      setProjects((prev) => [project, ...prev]);
    };
    return () => evtSource.close();
  }, []);

  return (
    <div className="min-h-screen bg-slate-100/60 dark:bg-slate-950/40 py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="rounded-3xl border border-slate-200/60 bg-white/70 shadow-xl backdrop-blur dark:border-white/10 dark:bg-slate-900/40">
          <div className="flex h-[70vh] flex-col p-6 sm:p-10">
            <div>
              <p className="text-sm font-medium uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                Selected Work
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                Projects
              </h1>
              <p className="mt-3 max-w-2xl text-sm text-slate-600 dark:text-slate-300 sm:text-base">
                Explore the things I’ve been building lately. Scroll inside the showcase to browse through every project.
              </p>
            </div>

            <div className="mt-6 flex-1 overflow-y-auto pr-3 sm:pr-4">
              <ul className="space-y-4">
                {projects.length === 0 ? (
                  <li className="rounded-2xl border border-dashed border-slate-300/70 bg-white/80 p-6 text-center text-sm font-medium text-slate-500 dark:border-white/10 dark:bg-slate-900/20 dark:text-slate-300">
                    No projects to display yet. Check back soon!
                  </li>
                ) : (
                  projects.map((p) => (
                    <li
                      key={p._id}
                      className="rounded-2xl border border-slate-200/70 bg-white/90 p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-white/10 dark:bg-slate-900/60"
                    >
                      <h2 className="text-lg font-semibold text-slate-900 dark:text-white">{p.title}</h2>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                        {p.description}
                      </p>
                    </li>
                  ))
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
