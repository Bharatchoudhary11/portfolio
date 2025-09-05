"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeProject, setActiveProject] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with Next.js, MongoDB, and Stripe integration.",
      tech: ["Next.js", "MongoDB", "Stripe"],
      gradient: "from-blue-400 to-purple-500",
      icon: "🛒"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates and team collaboration features.",
      tech: ["React", "Node.js", "Socket.io"],
      gradient: "from-green-400 to-blue-500",
      icon: "📋"
    },
    {
      title: "AI Chat Application",
      description: "An intelligent chat application powered by OpenAI API with conversation history and context awareness.",
      tech: ["Python", "FastAPI", "OpenAI"],
      gradient: "from-purple-400 to-pink-500",
      icon: "🤖"
    },
    {
      title: "Personal Portfolio",
      description: "A modern, responsive portfolio website showcasing projects and skills with dynamic animations.",
      tech: ["Next.js", "Tailwind", "TypeScript"],
      gradient: "from-orange-400 to-red-500",
      icon: "💼"
    }
  ];

  const skills = [
    { name: "React", level: 90 },
    { name: "Next.js", level: 85 },
    { name: "JavaScript", level: 95 },
    { name: "TypeScript", level: 80 },
    { name: "Node.js", level: 75 },
    { name: "Python", level: 70 },
    { name: "MongoDB", level: 85 },
    { name: "SQL", level: 80 }
  ];
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen space-y-8 px-4 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute top-40 left-40 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        <div className={`text-center space-y-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 cursor-default">
            Bharat Choudhary
          </h1>
          <p className="text-2xl text-gray-700 font-medium tracking-wide">
            Full Stack Developer & Software Engineer
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full hover:w-32 transition-all duration-300"></div>
        </div>
        
        <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Link 
            href="/projects" 
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group"
          >
            <span className="group-hover:animate-pulse">View My Projects</span>
          </Link>
          <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-full hover:bg-blue-600 hover:text-white transform hover:scale-105 transition-all duration-300 group">
            <span className="group-hover:animate-bounce">Contact Me</span>
          </button>
        </div>

        {/* Interactive Social Links */}
        <div className={`flex space-x-6 mt-4 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <a 
            href="https://github.com/bharatchoudhary" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 group"
          >
            <svg className="w-6 h-6 text-gray-800 group-hover:text-blue-600 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a 
            href="https://www.linkedin.com/in/bharat-choudhary1/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 group"
          >
            <svg className="w-6 h-6 text-blue-600 group-hover:text-purple-600 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
        </div>
        
        {/* Interactive Scroll Indicator */}
        <div className="mt-8 flex flex-col items-center space-y-2">
          <div className="flex space-x-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse [animation-delay:0.5s]"></div>
            <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse [animation-delay:1s]"></div>
          </div>
          <div className="text-sm text-gray-500 animate-bounce">Scroll to explore</div>
        </div>
      </section>

      {/* Interactive Projects Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4 hover:scale-105 transition-transform duration-300">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Interactive showcase of my development work
            </p>
          </div>

          {/* Project Navigation */}
          <div className="flex justify-center mb-8">
            <div className="flex space-x-2 bg-white rounded-full p-2 shadow-lg">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveProject(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeProject === index ? 'bg-blue-500 scale-125' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Active Project Display */}
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-500">
            <div className={`h-64 bg-gradient-to-br ${projects[activeProject].gradient} flex items-center justify-center relative overflow-hidden`}>
              <div className="text-white text-6xl font-bold animate-pulse">
                {projects[activeProject].icon}
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-20"></div>
            </div>
            <div className="p-8">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">{projects[activeProject].title}</h3>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">{projects[activeProject].description}</p>
              <div className="flex flex-wrap gap-3 mb-6">
                {projects[activeProject].tech.map((tech, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-sm font-semibold hover:scale-110 transition-transform duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Live Demo
                </button>
                <button className="px-6 py-3 border-2 border-gray-300 text-gray-600 font-semibold rounded-full hover:border-blue-600 hover:text-blue-600 transform hover:scale-105 transition-all duration-300">
                  GitHub
                </button>
              </div>
            </div>
          </div>

          {/* Skills Progress Bars */}
          <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Technical Skills</h3>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div key={index} className="group">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-gray-700">{skill.name}</span>
                    <span className="text-sm text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div 
                      className="h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000 ease-out group-hover:shadow-lg"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Streamlined Experience Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4 hover:scale-105 transition-transform duration-300">
              Experience
            </h2>
            <p className="text-xl text-gray-600">
              Professional journey with measurable impact
            </p>
          </div>

          <div className="space-y-8">
            {/* Current Role */}
            <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 p-8 border-l-4 border-blue-500 transform hover:-translate-y-2">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Software Development Engineer</h3>
                  <p className="text-lg text-blue-600 font-semibold">Ingenii Digitalization</p>
                  <p className="text-gray-600">Pune, Maharashtra • June 2025 - Present</p>
                </div>
                <div className="mt-4 md:mt-0">
                  <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full font-semibold">
                    Current
                  </span>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl">
                  <h4 className="font-bold text-blue-800 mb-3">Key Achievement</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Engineered Study Pot's assessment module, achieving <span className="font-bold text-green-600">25% increase in student engagement</span> and <span className="font-bold text-green-600">15% improvement in assessment scores</span>.
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700">Built comprehensive assessment platform with analytics</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700">Designed admin dashboard for <span className="font-semibold text-blue-600">10+ institutions</span></span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700"><span className="font-semibold text-green-600">40% reduction</span> in manual overhead</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Previous Role */}
            <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 p-8 border-l-4 border-purple-500 transform hover:-translate-y-2">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">SDE Intern</h3>
                  <p className="text-lg text-purple-600 font-semibold">Spring Money</p>
                  <p className="text-gray-600">Pune, Maharashtra • Oct 2024 - April 2025</p>
                </div>
                <div className="mt-4 md:mt-0">
                  <span className="inline-block px-4 py-2 bg-purple-100 text-purple-800 rounded-full font-semibold">
                    Internship
                  </span>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl">
                  <h4 className="font-bold text-purple-800 mb-3">Security Focus</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Built secure input system with encryption, <span className="font-bold text-green-600">reducing breach risk by 99%</span> and improving data flow efficiency.
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-700">Integrated SQL & MongoDB for data management</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-700"><span className="font-semibold text-green-600">99% user satisfaction</span> achieved</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-700"><span className="font-semibold text-green-600">30% efficiency</span> improvement</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
