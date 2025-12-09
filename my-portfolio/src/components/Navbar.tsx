const resumeLink =
  "https://drive.google.com/file/d/1lJIJVs_xQQZ2n1PTNxo7m79ne4ZRehro/view?usp=drive_link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-100 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex flex-wrap items-center justify-between gap-3 text-center sm:text-left">
        <p className="text-sm font-medium text-gray-900 dark:text-gray-100 tracking-wide">
          Download the Bharat Resume
        </p>
        <a
          href={resumeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center text-gray-900 hover:text-gray-600 dark:text-gray-100 dark:hover:text-gray-300 transition-colors"
        >
          <svg
            aria-hidden="true"
            className="h-5 w-5 download-arrow"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5v11" />
            <path d="m7 11 5 5 5-5" />
            <path d="M5 19h14" />
          </svg>
          <span className="sr-only">Download Resume</span>
        </a>
      </div>
    </nav>
  );
}
