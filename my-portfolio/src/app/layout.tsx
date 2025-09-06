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
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-br from-indigo-50 via-sky-50 to-rose-50 dark:from-slate-950 dark:via-indigo-950 dark:to-fuchsia-950`}
      >
        <AnimatedBackground />
        {children}
      </body>
    </html>
  );
}
