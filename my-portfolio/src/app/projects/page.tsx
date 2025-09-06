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
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">Projects</h1>
      <ul className="space-y-4">
        {projects.map((p) => (
          <li key={p._id} className="border border-slate-200 dark:border-white/10 p-4 rounded bg-white/80 dark:bg-white/5">
            <h2 className="font-semibold text-slate-900 dark:text-white">{p.title}</h2>
            <p className="text-slate-600 dark:text-slate-300">{p.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
