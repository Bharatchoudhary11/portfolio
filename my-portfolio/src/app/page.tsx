"use client";

import Link from "next/link";
import Image from "next/image";
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
    { name: "JavaScript", level: 95 },
    { name: "React.js", level: 90 },
    { name: "Python", level: 85 },
    { name: "C++", level: 80 },
    { name: "MongoDB", level: 85 },
    { name: "PostgreSQL", level: 80 },
    { name: "Node.js", level: 75 },
    { name: "HTML/CSS", level: 90 },
    { name: "Git", level: 85 },
    { name: "AWS", level: 70 },
    { name: "Docker", level: 75 },
    { name: "Figma", level: 80 }
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

        <div className={`flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Profile Photo */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative bg-white p-2 rounded-full shadow-2xl transform group-hover:scale-105 transition-transform duration-300">
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                <Image
                  src="/profile-photo.svg"
                  alt="Bharat Choudhary - Full Stack Developer"
                  width={224}
                  height={224}
                  className="w-full h-full object-cover rounded-full"
                  priority
                />
              </div>
            </div>
            {/* Floating elements around photo */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full animate-bounce opacity-70"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full animate-bounce opacity-70 [animation-delay:0.5s]"></div>
          </div>

          {/* Text Content */}
          <div className="text-center lg:text-left space-y-4">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 cursor-default">
              Bharat Choudhary
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 font-medium tracking-wide">
              Full Stack Developer & Software Engineer
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto lg:mx-0 rounded-full hover:w-32 transition-all duration-300"></div>
            
            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 mt-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">2+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">10+</div>
                <div className="text-sm text-gray-600">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-indigo-600">99%</div>
                <div className="text-sm text-gray-600">User Satisfaction</div>
              </div>
            </div>
          </div>
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
            
            {/* Core Skills */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-blue-600 mb-4 flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                Core Skills
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="group">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-gray-700">Object-Oriented Programming</span>
                    <span className="text-sm text-gray-500">90%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div className="h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000 ease-out group-hover:shadow-lg" style={{ width: '90%' }}></div>
                  </div>
                </div>
                <div className="group">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-gray-700">Data Structures</span>
                    <span className="text-sm text-gray-500">85%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div className="h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000 ease-out group-hover:shadow-lg" style={{ width: '85%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Professional Skills */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-purple-600 mb-4 flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                Professional Skills
              </h4>
              <div className="space-y-4">
                {skills.slice(0, 8).map((skill, index) => (
                  <div key={index} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-gray-700">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div 
                        className="h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-1000 ease-out group-hover:shadow-lg"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* UI/UX & Tools */}
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-green-600 mb-4 flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  UI/UX Design
                </h4>
                <div className="space-y-3">
                  <div className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-gray-700">Figma</span>
                      <span className="text-sm text-gray-500">80%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div className="h-3 bg-gradient-to-r from-green-500 to-teal-500 rounded-full transition-all duration-1000 ease-out group-hover:shadow-lg" style={{ width: '80%' }}></div>
                    </div>
                  </div>
                  <div className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-gray-700">Adobe InDesign</span>
                      <span className="text-sm text-gray-500">75%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div className="h-3 bg-gradient-to-r from-green-500 to-teal-500 rounded-full transition-all duration-1000 ease-out group-hover:shadow-lg" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-orange-600 mb-4 flex items-center">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                  Tools & Technologies
                </h4>
                <div className="space-y-3">
                  {skills.slice(8).map((skill, index) => (
                    <div key={index} className="group">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-gray-700">{skill.name}</span>
                        <span className="text-sm text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                        <div 
                          className="h-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-full transition-all duration-1000 ease-out group-hover:shadow-lg"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
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

      {/* Achievements Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4 hover:scale-105 transition-transform duration-300">
              Achievements & Recognition
            </h2>
            <p className="text-xl text-gray-600">
              Celebrating milestones and accomplishments in my journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Hackathon Achievement */}
            <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 p-8 border-l-4 border-yellow-500 transform hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl">🏆</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Hackathon Winner</h3>
                  <p className="text-yellow-600 font-semibold">Auto visionX by Bosch</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Secured <span className="font-bold text-yellow-600">1st runner-up position</span> in the prestigious Auto visionX hackathon conducted by Bosch, showcasing innovative solutions in automotive technology.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-semibold">Innovation</span>
                <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-semibold">Automotive Tech</span>
                <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-semibold">Bosch</span>
              </div>
            </div>

            {/* Scholarship Achievement */}
            <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 p-8 border-l-4 border-green-500 transform hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-teal-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl">🎓</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Scholarship Awardee</h3>
                  <p className="text-green-600 font-semibold">AWES ESSA Scholarship</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Recipient of the prestigious <span className="font-bold text-green-600">AWES ESSA Scholarship</span>, recognizing academic excellence and potential in software engineering.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold">Academic Excellence</span>
                <span className="px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-sm font-semibold">Merit-Based</span>
                <span className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm font-semibold">Recognition</span>
              </div>
            </div>

            {/* Event Organization */}
            <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 p-8 border-l-4 border-blue-500 transform hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Event Organizer</h3>
                  <p className="text-blue-600 font-semibold">Technical Aakarti</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Organized college's biggest <span className="font-bold text-blue-600">inter-college technical event "Technical Aakarti"</span>, demonstrating leadership and event management skills.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">Leadership</span>
                <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-semibold">Event Management</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-semibold">Technical Events</span>
              </div>
            </div>

            {/* Coding Achievement */}
            <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 p-8 border-l-4 border-purple-500 transform hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl">💻</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Coding Excellence</h3>
                  <p className="text-purple-600 font-semibold">1000+ Problems Solved</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Solved <span className="font-bold text-purple-600">1000+ problems</span> across various coding platforms, demonstrating consistent practice and problem-solving skills.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-semibold">Problem Solving</span>
                <span className="px-3 py-1 bg-pink-100 text-pink-800 rounded-full text-sm font-semibold">Consistency</span>
                <span className="px-3 py-1 bg-violet-100 text-violet-800 rounded-full text-sm font-semibold">Multiple Platforms</span>
              </div>
            </div>
          </div>

          {/* Achievement Stats */}
          <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Achievement Highlights</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🥈</span>
                </div>
                <div className="text-3xl font-bold text-yellow-600 mb-2">1st Runner-up</div>
                <div className="text-sm text-gray-600">Bosch Hackathon</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎓</span>
                </div>
                <div className="text-3xl font-bold text-green-600 mb-2">Scholarship</div>
                <div className="text-sm text-gray-600">AWES ESSA Award</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <div className="text-3xl font-bold text-blue-600 mb-2">Biggest Event</div>
                <div className="text-sm text-gray-600">Technical Aakarti</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">1000+</span>
                </div>
                <div className="text-3xl font-bold text-purple-600 mb-2">Problems</div>
                <div className="text-sm text-gray-600">Coding Platforms</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-indigo-50 to-blue-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent mb-4 hover:scale-105 transition-transform duration-300">
              Education
            </h2>
            <p className="text-xl text-gray-600">
              Academic foundation and continuous learning journey
            </p>
          </div>

          <div className="space-y-8">
            {/* Bachelor's Degree */}
            <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 p-8 border-l-4 border-indigo-500 transform hover:-translate-y-2">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Bachelor of Engineering (B.E.-EnTC)</h3>
                  <p className="text-lg text-indigo-600 font-semibold">Army Institute of Technology</p>
                  <p className="text-gray-600">Pune, Maharashtra • 2021 - 2025</p>
                </div>
                <div className="mt-4 md:mt-0">
                  <span className="inline-block px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full font-semibold">
                    CGPA: 8.32
                  </span>
                </div>
              </div>
              <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-6 rounded-xl">
                <p className="text-gray-700 leading-relaxed">
                  Pursuing Electronics and Telecommunication Engineering with focus on software development, 
                  digital systems, and modern communication technologies. Active participation in technical 
                  events and coding competitions.
                </p>
              </div>
            </div>

            {/* 12th Grade */}
            <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 p-8 border-l-4 border-green-500 transform hover:-translate-y-2">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">12th Grade (Higher Secondary)</h3>
                  <p className="text-lg text-green-600 font-semibold">Genius Children Public School</p>
                  <p className="text-gray-600">Kota, Rajasthan • 2019 - 2020</p>
                </div>
                <div className="mt-4 md:mt-0">
                  <span className="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-full font-semibold">
                    74%
                  </span>
                </div>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-teal-50 p-6 rounded-xl">
                <p className="text-gray-700 leading-relaxed">
                  Completed higher secondary education with focus on Mathematics, Physics, and Chemistry. 
                  Developed strong analytical and problem-solving skills that laid the foundation for 
                  engineering studies.
                </p>
              </div>
            </div>

            {/* 10th Grade */}
            <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 p-8 border-l-4 border-purple-500 transform hover:-translate-y-2">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">10th Grade (Secondary)</h3>
                  <p className="text-lg text-purple-600 font-semibold">Subodh Vidhya Sagar Sec. School</p>
                  <p className="text-gray-600">Jodhpur, Rajasthan • 2016 - 2017</p>
                </div>
                <div className="mt-4 md:mt-0">
                  <span className="inline-block px-4 py-2 bg-purple-100 text-purple-800 rounded-full font-semibold">
                    87.17%
                  </span>
                </div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl">
                <p className="text-gray-700 leading-relaxed">
                  Completed secondary education with excellent academic performance. Developed fundamental 
                  knowledge in core subjects and participated in various school activities and competitions.
                </p>
              </div>
            </div>
          </div>

          {/* Education Highlights */}
          <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Academic Highlights</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎓</span>
                </div>
                <div className="text-3xl font-bold text-indigo-600 mb-2">8.32</div>
                <div className="text-sm text-gray-600">Current CGPA</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📚</span>
                </div>
                <div className="text-3xl font-bold text-green-600 mb-2">4 Years</div>
                <div className="text-sm text-gray-600">Engineering Program</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏆</span>
                </div>
                <div className="text-3xl font-bold text-purple-600 mb-2">87.17%</div>
                <div className="text-sm text-gray-600">10th Grade Score</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4 hover:scale-105 transition-transform duration-300">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Ready to collaborate or have a project in mind? Let's connect and bring your ideas to life.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-blue-400">Let's Connect</h3>
                <p className="text-gray-300 leading-relaxed mb-8">
                  I'm always excited to work on new projects and collaborate with fellow developers. 
                  Whether you have a question, want to discuss a project, or just want to say hello, 
                  I'd love to hear from you!
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Email</h4>
                    <p className="text-gray-300">bharatchoudhary.work@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Location</h4>
                    <p className="text-gray-300">Pune, Maharashtra, India</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Phone</h4>
                    <p className="text-gray-300">+91 9352674027</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Response Time</h4>
                    <p className="text-gray-300">Usually within 24 hours</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-6">
                <h4 className="font-semibold text-white mb-4">Follow Me</h4>
                <div className="grid grid-cols-2 gap-4">
                  {/* Professional Links */}
                  <div>
                    <h5 className="text-sm font-medium text-gray-400 mb-3">Professional</h5>
                    <div className="flex space-x-3">
                      <a 
                        href="https://github.com/bharatchoudhary" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors duration-300"
                        title="GitHub"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </a>
                      <a 
                        href="https://www.linkedin.com/in/bharat-choudhary1/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors duration-300"
                        title="LinkedIn"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </a>
                    </div>
                  </div>

                  {/* Coding Platforms */}
                  <div>
                    <h5 className="text-sm font-medium text-gray-400 mb-3">Coding Platforms</h5>
                    <div className="flex space-x-3">
                      <a 
                        href="https://leetcode.com/bharatchoudhary" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center hover:bg-orange-700 transition-colors duration-300"
                        title="LeetCode"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.801 4.801a5.938 5.938 0 0 0 1.818 1.271 5.83 5.83 0 0 0 1.017.349 5.527 5.527 0 0 0 2.362.062 5.35 5.35 0 0 0 .513-.125 5.266 5.266 0 0 0 2.104-1.209l4.126-3.854 5.788-5.406a1.374 1.374 0 0 0 .438-.961V1.374a1.374 1.374 0 0 0-1.374-1.374z"/>
                        </svg>
                      </a>
                      <a 
                        href="https://www.codechef.com/users/bharatchoudhary" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors duration-300"
                        title="CodeChef"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                          <path d="M8 8h8v8H8z"/>
                        </svg>
                      </a>
                      <a 
                        href="https://codeforces.com/profile/bharatchoudhary" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-300"
                        title="Codeforces"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                          <path d="M6 6h12v12H6z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell me about your project or just say hello..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-16 pt-8 border-t border-white/20 text-center">
            <p className="text-gray-400">
              © 2024 Bharat Choudhary. Built with Next.js and Tailwind CSS.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
