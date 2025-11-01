"use client";

import ProfileFlip from "@/components/ProfileFlip";
import { useState, useEffect, useRef } from "react";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution built with Next.js, MongoDB, and Stripe integration.",
    tech: ["Next.js", "MongoDB", "Stripe"],
    image: "/project1.jpg",
    github: "https://github.com/bharatchoudhary11/ecommerce",
    live: "https://ecommerce-demo.com"
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates and team collaboration features.",
    tech: ["React", "Node.js", "Socket.io"],
    image: "/project2.jpg",
    github: "https://github.com/bharatchoudhary/taskmanager",
    live: "https://taskmanager-demo.com"
  },
  {
    title: "AI Chat Application",
    description:
      "An intelligent chat application powered by OpenAI API with conversation history and context awareness.",
    tech: ["Python", "FastAPI", "OpenAI"],
    image: "/project3.jpg",
    github: "https://github.com/bharatchoudhary/aichat",
    live: "https://aichat-demo.com"
  },
  {
    title: "Personal Portfolio",
    description:
      "A modern, responsive portfolio website showcasing projects and skills with dynamic animations.",
    tech: ["Next.js", "Tailwind", "TypeScript"],
    image: "/project4.jpg",
    github: "https://github.com/bharatchoudhary/portfolio",
    live: "https://bharatchoudhary.dev"
  }
];

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeProject, setActiveProject] = useState(0);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    projectRefs.current.forEach((ref, index) => {
      if (!ref) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveProject(index);
          }
        },
        {
          threshold: 0.6
        }
      );

      observer.observe(ref);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  const skills = [
    "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Python", "C++",
    "MongoDB", "PostgreSQL", "HTML", "CSS", "Tailwind CSS", "Git", "AWS", "Docker"
  ];

  return (
    <main className="min-h-screen relative overflow-x-hidden">

      {/* Content */}
      <div className="relative z-10">
        {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-900/70 backdrop-blur-md border-b border-slate-200 dark:border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">Bharat Choudhary</div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">About</a>
              <a href="#projects" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">Projects</a>
              <a href="#experience" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">Experience</a>
              <a href="#contact" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero / About Section */}
      <section id="about" className="relative overflow-hidden pt-24 pb-16 px-6">
        {/* Section Background: Indigo/Blue mesh */}
        <div className="absolute inset-0 pointer-events-none -z-10 section-fade">
          <div className="absolute -top-24 -left-24 w-80 h-80 bg-blue-200 rounded-full blur-3xl opacity-40 animate-blob" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-indigo-200 rounded-full blur-3xl opacity-40 animate-blob animation-delay-2000" />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-72 h-72 bg-violet-200 rounded-full blur-3xl opacity-30 animate-blob animation-delay-4000" />
        </div>
        <div className="max-w-4xl mx-auto">
          <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <div className="text-center mb-12">
              <div className="w-32 h-32 mx-auto mb-8 rounded-full">
                <ProfileFlip
                  frontSrc="/portfoliopic.svg"
                  backSrc="/profile-photo.jpg"
                  altFront="Profile photo"
                  altBack="Alternate profile photo"
                  size={128}
                />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white tracking-tight mb-4">
                Bharat Choudhary
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
                <span className="text-gradient font-semibold">Full Stack Developer &amp; Software Engineer</span> passionate about building innovative solutions and creating exceptional user experiences.
              </p>
              <div className="flex justify-center space-x-6 mb-8">
                <a 
                  href="https://github.com/bharatchoudhary" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.linkedin.com/in/bharat-choudhary1/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a 
                  href="https://leetcode.com/bharatchoudhary" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.801 4.801a5.938 5.938 0 0 0 1.818 1.271 5.83 5.83 0 0 0 1.017.349 5.527 5.527 0 0 0 2.362.062 5.35 5.35 0 0 0 .513-.125 5.266 5.266 0 0 0 2.104-1.209l4.126-3.854 5.788-5.406a1.374 1.374 0 0 0 .438-.961V1.374a1.374 1.374 0 0 0-1.374-1.374z"/>
                  </svg>
                </a>
              </div>
              <a
                href="#contact"
                className="inline-block px-8 py-3 rounded-lg bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 transition-colors"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative overflow-hidden py-16 px-6">
        {/* Section Background: Lavender/Violet accents */}
        <div className="absolute inset-0 pointer-events-none -z-10 section-fade">
          <div className="absolute -top-20 right-0 w-80 h-80 bg-violet-200 rounded-full blur-3xl opacity-40 animate-blob" />
          <div className="absolute bottom-0 -left-10 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-40 animate-blob animation-delay-2000" />
          <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-pink-200 rounded-full blur-3xl opacity-30 animate-blob animation-delay-4000" />
        </div>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-8 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                I&apos;m a passionate Full Stack Developer with 2+ years of experience building scalable web applications.
                Currently pursuing B.E. in Electronics and Telecommunication Engineering at Army Institute of Technology, Pune.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                I specialize in modern web technologies including React, Next.js, Node.js, and have extensive experience 
                with databases like MongoDB and PostgreSQL. I&apos;m passionate about creating efficient, user-friendly applications
                that solve real-world problems.
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.slice(0, 8).map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-indigo-50/80 via-sky-50/80 to-purple-50/80 dark:from-white/10 dark:via-white/5 dark:to-white/10 text-slate-700 dark:text-slate-100 border border-white/60 dark:border-white/10 shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-white/80 dark:bg-white/5 p-6 rounded-lg border border-slate-200 dark:border-white/10">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Education</h3>
                <p className="text-slate-600 dark:text-slate-300">B.E. Electronics & Telecommunication</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">Army Institute of Technology, Pune</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">CGPA: 8.32</p>
              </div>
              <div className="bg-white/80 dark:bg-white/5 p-6 rounded-lg border border-slate-200 dark:border-white/10">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Location</h3>
                <p className="text-slate-600 dark:text-slate-300">Pune, Maharashtra, India</p>
              </div>
              <div className="bg-white/80 dark:bg-white/5 p-6 rounded-lg border border-slate-200 dark:border-white/10">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Availability</h3>
                <p className="text-slate-600 dark:text-slate-300">Open to new opportunities</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-12 text-center">Featured Projects</h2>
          <div className="relative">
            <div className="space-y-12 md:space-y-16 lg:space-y-20">
              {projects.map((project, index) => (
                <div
                  key={index}
                  ref={(el) => {
                    projectRefs.current[index] = el;
                  }}
                  className="min-h-[60vh] md:min-h-[65vh] lg:min-h-[70vh]"
                >
                  <article
                    className={`sticky top-32 mx-auto max-w-4xl bg-white/80 dark:bg-white/5 rounded-lg border border-slate-200 dark:border-white/10 overflow-hidden transition-all duration-500 backdrop-blur-sm ${
                      activeProject === index
                        ? "opacity-100 scale-100 shadow-xl"
                        : "opacity-40 scale-95"
                    }`}
                  >
                    <div className="h-48 bg-slate-50 dark:bg-white/5 flex items-center justify-center">
                      <div className="text-4xl text-slate-400">📱</div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-sm font-medium uppercase tracking-widest text-slate-400 dark:text-slate-500">
                          Project {index + 1} of {projects.length}
                        </span>
                        <div className="flex gap-2">
                          {projects.map((_, indicatorIndex) => (
                            <span
                              key={indicatorIndex}
                              className={`h-1.5 w-8 rounded-full transition-colors ${
                                activeProject === indicatorIndex
                                  ? "bg-slate-900 dark:bg-white"
                                  : "bg-slate-200 dark:bg-white/20"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-3">{project.title}</h3>
                      <p className="text-slate-600 dark:text-slate-300 mb-5 leading-relaxed">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-5">
                        {project.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-slate-100/80 via-indigo-50/80 to-purple-50/70 dark:from-white/10 dark:via-white/5 dark:to-white/10 text-slate-700 dark:text-slate-100 border border-white/40 dark:border-white/10 shadow-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-4">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
                        >
                          <span>GitHub</span>
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M12.293 2.293a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L14 5.414V17a1 1 0 11-2 0V5.414L9.707 7.707A1 1 0 018.293 6.293l4-4z" />
                          </svg>
                        </a>
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
                        >
                          <span>Live Demo</span>
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M12.293 2.293a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L14 5.414V17a1 1 0 11-2 0V5.414L9.707 7.707A1 1 0 018.293 6.293l4-4z" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="relative overflow-hidden py-16 px-6">
        {/* Section Background: Amber/Rose */}
        <div className="absolute inset-0 pointer-events-none -z-10 section-fade">
          <div className="absolute -top-16 right-1/4 w-72 h-72 bg-amber-200 rounded-full blur-3xl opacity-40 animate-blob" />
          <div className="absolute bottom-0 left-1/5 w-96 h-96 bg-rose-200 rounded-full blur-3xl opacity-40 animate-blob animation-delay-2000" />
          <div className="absolute top-1/2 right-10 w-64 h-64 bg-pink-200 rounded-full blur-3xl opacity-30 animate-blob animation-delay-4000" />
        </div>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-12 text-center">Experience</h2>
          <div className="space-y-8">
            <div className="bg-white/80 dark:bg-white/5 p-6 rounded-lg border border-slate-200 dark:border-white/10 hover:shadow-lg hover:scale-105 transition-all duration-300 backdrop-blur-sm">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Software Development Engineer</h3>
                  <p className="text-slate-600 dark:text-slate-300">Ingenii Digitalization</p>
                </div>
                <span className="text-sm text-slate-500 dark:text-slate-400 mt-2 md:mt-0">June 2025 - Present</span>
              </div>
              <ul className="text-slate-600 dark:text-slate-300 space-y-2">
                <li>• Engineered Study Pot&apos;s assessment module, achieving 25% increase in student engagement</li>
                <li>• Designed admin dashboard for 10+ institutions, reducing manual overhead by 40%</li>
                <li>• Built comprehensive assessment platform with analytics and performance tracking</li>
              </ul>
            </div>
            <div className="bg-white/80 dark:bg-white/5 p-6 rounded-lg border border-slate-200 dark:border-white/10 hover:shadow-lg hover:scale-105 transition-all duration-300 backdrop-blur-sm">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">SDE Intern</h3>
                  <p className="text-slate-600 dark:text-slate-300">Spring Money</p>
                </div>
                <span className="text-sm text-slate-500 dark:text-slate-400 mt-2 md:mt-0">Oct 2024 - April 2025</span>
              </div>
              <ul className="text-slate-600 dark:text-slate-300 space-y-2">
                <li>• Built secure input system with encryption, reducing breach risk by 99%</li>
                <li>• Integrated SQL & MongoDB for efficient data storage and retrieval</li>
                <li>• Optimized system performance, achieving 99% user satisfaction</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-12 text-center">Achievements</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/80 dark:bg-white/5 p-6 rounded-lg border border-slate-200 dark:border-white/10">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">🏆 Hackathon Winner</h3>
              <p className="text-slate-600 dark:text-slate-300">1st runner-up in Auto visionX hackathon by Bosch</p>
            </div>
            <div className="bg-white/80 dark:bg-white/5 p-6 rounded-lg border border-slate-200 dark:border-white/10">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">🎓 Scholarship Awardee</h3>
              <p className="text-slate-600 dark:text-slate-300">AWES ESSA Scholarship recipient</p>
            </div>
            <div className="bg-white/80 dark:bg-white/5 p-6 rounded-lg border border-slate-200 dark:border-white/10">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">🎯 Event Organizer</h3>
              <p className="text-slate-600 dark:text-slate-300">Organized Technical Aakarti - college&apos;s biggest technical event</p>
            </div>
            <div className="bg-white/80 dark:bg-white/5 p-6 rounded-lg border border-slate-200 dark:border-white/10">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">💻 Coding Excellence</h3>
              <p className="text-slate-600 dark:text-slate-300">Solved 1000+ problems across coding platforms</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative overflow-hidden py-16 px-6">
        {/* Section Background: Teal/Cyan */}
        <div className="absolute inset-0 pointer-events-none -z-10 section-fade">
          <div className="absolute -top-24 left-0 w-80 h-80 bg-teal-200 rounded-full blur-3xl opacity-40 animate-blob" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-200 rounded-full blur-3xl opacity-40 animate-blob animation-delay-2000" />
          <div className="absolute top-1/3 right-1/3 w-72 h-72 bg-emerald-200 rounded-full blur-3xl opacity-30 animate-blob animation-delay-4000" />
        </div>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-12 text-center">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">Let&apos;s Connect</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-8">
                I&apos;m always excited to work on new projects and collaborate with fellow developers.
                Whether you have a question, want to discuss a project, or just want to say hello, 
                I&apos;d love to hear from you!
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-slate-600 dark:text-slate-300">bharatchoudhary.work@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-slate-600 dark:text-slate-300">+91 9352674027</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-slate-600 dark:text-slate-300">Pune, Maharashtra, India</span>
                </div>
              </div>
            </div>
            <div>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-white/10 bg-white dark:bg-slate-900/40 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 dark:focus:ring-white focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-white/10 bg-white dark:bg-slate-900/40 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 dark:focus:ring-white focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-white/10 bg-white dark:bg-slate-900/40 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 dark:focus:ring-white focus:border-transparent resize-none"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 rounded-lg bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-slate-200 dark:border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-slate-500 dark:text-slate-400">
            © 2024 Bharat Choudhary. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </footer>
      </div>
    </main>
  );
}
