import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AnimatedBackground from "@/components/AnimatedBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bharat Choudhary - Full Stack Developer",
  description: "Portfolio of Bharat Choudhary - Software Development Engineer specializing in React, Next.js, and full-stack development",
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-br from-sky-50 via-sky-100 to-blue-100 dark:from-slate-950 dark:via-indigo-950 dark:to-fuchsia-950`}
      >
        <AnimatedBackground />
        {children}
        {/* Fixed Social Dock (bottom-left) with animations */}
        <div className="fixed bottom-12 left-6 z-40 pointer-events-auto">
          <div className="flex flex-col gap-3 p-0">
            {/* GitHub */}
            <div className="relative group" style={{ animationDelay: "0ms" }}>
              <a
                href="https://github.com/bharatchoudhary"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="social-icon animate-float-slow text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/80 dark:hover:bg-white/10"
                style={{ animationDelay: "0ms" }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.565 21.387 24 16.89 24 11.59 24 5.373 18.627 0 12 0z"/>
                </svg>
              </a>
              <span className="social-tooltip">GitHub</span>
            </div>
            {/* LinkedIn */}
            <div className="relative group" style={{ animationDelay: "100ms" }}>
              <a
                href="https://www.linkedin.com/in/bharat-choudhary1/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="social-icon animate-float-slow text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/80 dark:hover:bg-white/10"
                style={{ animationDelay: "100ms" }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <span className="social-tooltip">LinkedIn</span>
            </div>
            {/* Instagram */}
            <div className="relative group" style={{ animationDelay: "200ms" }}>
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="social-icon animate-float-slow text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/80 dark:hover:bg-white/10"
                style={{ animationDelay: "200ms" }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm0 2a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H7zm5 2.75a5.25 5.25 0 110 10.5 5.25 5.25 0 010-10.5zm0 2a3.25 3.25 0 100 6.5 3.25 3.25 0 000-6.5zM18.5 6.25a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z"/>
                </svg>
              </a>
              <span className="social-tooltip">Instagram</span>
            </div>
            {/* Gmail */}
            <div className="relative group" style={{ animationDelay: "300ms" }}>
              <a
                href="mailto:bharatchoudhary.work@gmail.com"
                aria-label="Gmail"
                className="social-icon animate-float-slow text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/80 dark:hover:bg-white/10"
                style={{ animationDelay: "300ms" }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
              <span className="social-tooltip">Email</span>
            </div>
            {/* Decorative vertical line with subtle glow */}
            <div className="mx-auto mt-2 h-20 w-px bg-slate-400/50 dark:bg-slate-300/40 pointer-events-none animate-pulse-glow" />
          </div>
        </div>
        {/* Fixed Tech Stack Dock (bottom-right) with animations */}
        <div className="fixed bottom-12 right-6 z-40 pointer-events-auto">
          <div className="flex flex-col items-end gap-3 p-0">
            {/* React */}
            <div className="relative group" style={{ animationDelay: "0ms" }}>
              <a
                href="https://react.dev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="React"
                className="social-icon animate-float-slow hover:bg-slate-100/80 dark:hover:bg-white/10"
                style={{ animationDelay: "0ms", color: "#61DAFB" }}
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" aria-hidden>
                  <g fill="none" stroke="currentColor" strokeWidth="1.5">
                    <ellipse cx="12" cy="12" rx="10" ry="4" />
                    <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
                    <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
                  </g>
                  <circle cx="12" cy="12" r="1.8" fill="currentColor" />
                </svg>
              </a>
              <span className="social-tooltip-left">React</span>
            </div>
            {/* TypeScript */}
            <div className="relative group" style={{ animationDelay: "100ms" }}>
              <a
                href="https://www.typescriptlang.org"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TypeScript"
                className="social-icon animate-float-slow hover:bg-slate-100/80 dark:hover:bg-white/10"
                style={{ animationDelay: "100ms", color: "#3178C6" }}
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" aria-hidden>
                  <rect x="1" y="1" width="22" height="22" rx="4" fill="#3178C6" />
                  <text x="12" y="16" textAnchor="middle" fontSize="11" fontWeight="700" fill="#FFFFFF">TS</text>
                </svg>
              </a>
              <span className="social-tooltip-left">TypeScript</span>
            </div>
            {/* Python */}
            <div className="relative group" style={{ animationDelay: "200ms" }}>
              <a
                href="https://www.python.org"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Python"
                className="social-icon animate-float-slow hover:bg-slate-100/80 dark:hover:bg-white/10"
                style={{ animationDelay: "200ms", color: "#3776AB" }}
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" aria-hidden>
                  <path fill="#3776AB" d="M12 2c3 0 4 1 4 4v2h-4.5c-1.5 0-2.5 1-2.5 2.5V13c0 1.5 1 2.5 2.5 2.5h3v-1.5h-3c-.6 0-1-.4-1-1V10.5c0-.6.4-1 1-1H16V6c0-2.5-1.5-4-4-4z"/>
                  <circle cx="14.5" cy="5.5" r="0.8" fill="#fff"/>
                  <path fill="#FFD43B" d="M12 22c-3 0-4-1-4-4v-2h4.5c1.5 0 2.5-1 2.5-2.5V11c0-1.5-1-2.5-2.5-2.5h-3V10h3c.6 0 1 .4 1 1v2.5c0 .6-.4 1-1 1H8v3c0 2.5 1.5 4 4 4z"/>
                  <circle cx="9.5" cy="18.5" r="0.8" fill="#fff"/>
                </svg>
              </a>
              <span className="social-tooltip-left">Python</span>
            </div>
            {/* MongoDB */}
            <div className="relative group" style={{ animationDelay: "300ms" }}>
              <a
                href="https://www.mongodb.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="MongoDB"
                className="social-icon animate-float-slow hover:bg-slate-100/80 dark:hover:bg-white/10"
                style={{ animationDelay: "300ms", color: "#13AA52" }}
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" aria-hidden>
                  <path fill="#13AA52" d="M12 2c.5 2.5 3 4.5 3.5 8 .3 2-.2 4.3-1.3 6.4-1 2-2 3.1-2.2 5.6-1.1-2.5-2-3.6-3-5.6C7.9 14.3 7.4 12 7.7 10 8.2 6.5 10.9 4.6 12 2z"/>
                  <path fill="#0e6b2e" d="M12 22c.1-1.5.6-2.5 1.4-3.8.7-1.1 1.3-2.5 1.7-3.8-1.4 1-2.9 1.6-3.1 2.8V22z"/>
                </svg>
              </a>
              <span className="social-tooltip-left">MongoDB</span>
            </div>
            {/* JavaScript */}
            <div className="relative group" style={{ animationDelay: "400ms" }}>
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="JavaScript"
                className="social-icon animate-float-slow hover:bg-slate-100/80 dark:hover:bg-white/10"
                style={{ animationDelay: "400ms", color: "#F7DF1E" }}
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" aria-hidden>
                  <rect x="1" y="1" width="22" height="22" rx="3" fill="#F7DF1E" />
                  <text x="12" y="16" textAnchor="middle" fontSize="11" fontWeight="800" fill="#000">JS</text>
                </svg>
              </a>
              <span className="social-tooltip-left">JavaScript</span>
            </div>
            {/* Decorative vertical line */}
            <div className="mt-2 h-20 w-px bg-slate-400/50 dark:bg-slate-300/40 pointer-events-none self-center animate-pulse-glow" />
          </div>
        </div>
      </body>
    </html>
  );
}
