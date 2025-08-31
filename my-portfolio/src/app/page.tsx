import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center space-y-4">
      <h1 className="text-3xl font-bold">Welcome to my portfolio</h1>
      <Link href="/projects" className="text-blue-600 hover:underline">
        View Projects
      </Link>
    </main>
  );
}
