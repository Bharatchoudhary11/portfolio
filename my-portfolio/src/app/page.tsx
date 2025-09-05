import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen space-y-8 px-4">
        <div className="text-center space-y-4">
          <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent animate-pulse">
            Bharat Choudhary
          </h1>
          <p className="text-2xl text-gray-700 font-medium tracking-wide">
            Full Stack Developer & Software Engineer
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Link 
            href="/projects" 
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            View My Projects
          </Link>
          <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-full hover:bg-blue-600 hover:text-white transform hover:scale-105 transition-all duration-300">
            Contact Me
          </button>
        </div>

        {/* Social Links */}
        <div className="flex space-x-6 mt-4">
          <a 
            href="https://github.com/bharatchoudhary" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
          >
            <svg className="w-6 h-6 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a 
            href="https://www.linkedin.com/in/bharat-choudhary1/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
          >
            <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
        </div>
        
        <div className="mt-8 flex space-x-4">
          <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce [animation-delay:0.1s]"></div>
          <div className="w-3 h-3 bg-indigo-500 rounded-full animate-bounce [animation-delay:0.2s]"></div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and passion for development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card 1 */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                <div className="text-white text-4xl font-bold">E-Commerce</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">E-Commerce Platform</h3>
                <p className="text-gray-600 mb-4">A full-stack e-commerce solution built with Next.js, MongoDB, and Stripe integration.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Next.js</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">MongoDB</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">Stripe</span>
                </div>
                <div className="flex space-x-4">
                  <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">Live Demo</a>
                  <a href="#" className="text-gray-600 hover:text-gray-800 font-medium">GitHub</a>
                </div>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center">
                <div className="text-white text-4xl font-bold">Task Manager</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Task Management App</h3>
                <p className="text-gray-600 mb-4">A collaborative task management application with real-time updates and team collaboration features.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm">React</span>
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">Node.js</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Socket.io</span>
                </div>
                <div className="flex space-x-4">
                  <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">Live Demo</a>
                  <a href="#" className="text-gray-600 hover:text-gray-800 font-medium">GitHub</a>
                </div>
              </div>
            </div>

            {/* Project Card 3 */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center">
                <div className="text-white text-4xl font-bold">AI Chat</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">AI Chat Application</h3>
                <p className="text-gray-600 mb-4">An intelligent chat application powered by OpenAI API with conversation history and context awareness.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">Python</span>
                  <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">FastAPI</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">OpenAI</span>
                </div>
                <div className="flex space-x-4">
                  <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">Live Demo</a>
                  <a href="#" className="text-gray-600 hover:text-gray-800 font-medium">GitHub</a>
                </div>
              </div>
            </div>

            {/* Project Card 4 */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center">
                <div className="text-white text-4xl font-bold">Portfolio</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Personal Portfolio</h3>
                <p className="text-gray-600 mb-4">A modern, responsive portfolio website showcasing my projects and skills with dynamic animations.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Next.js</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">Tailwind</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">TypeScript</span>
                </div>
                <div className="flex space-x-4">
                  <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">Live Demo</a>
                  <a href="#" className="text-gray-600 hover:text-gray-800 font-medium">GitHub</a>
                </div>
              </div>
            </div>

            {/* Project Card 5 */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center">
                <div className="text-white text-4xl font-bold">Weather</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Weather Dashboard</h3>
                <p className="text-gray-600 mb-4">A real-time weather application with location-based forecasts and interactive charts.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">JavaScript</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">API</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Charts.js</span>
                </div>
                <div className="flex space-x-4">
                  <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">Live Demo</a>
                  <a href="#" className="text-gray-600 hover:text-gray-800 font-medium">GitHub</a>
                </div>
              </div>
            </div>

            {/* Project Card 6 */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center">
                <div className="text-white text-4xl font-bold">Blog</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Tech Blog Platform</h3>
                <p className="text-gray-600 mb-4">A content management system for tech articles with markdown support and SEO optimization.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">React</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">GraphQL</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">Prisma</span>
                </div>
                <div className="flex space-x-4">
                  <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">Live Demo</a>
                  <a href="#" className="text-gray-600 hover:text-gray-800 font-medium">GitHub</a>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/projects" 
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View All Projects
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
