export default function Contacts() {
  return (
    <footer className="mt-32 py-16 border-t border-[#E0E6EE]">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-sm text-gray-500 tracking-[0.2em] mb-6">
          CONNECT WITH MB
        </p>
        <div className="flex justify-center gap-8 text-gray-600">
          <a
            href="mailto:mariebukhaidze@gmail.com"
            className="hover:text-[#00F0FF] transition"
          >
            Email
          </a>
          <a
            href="https://github.com/maribukh"
            target="_blank"
            className="hover:text-[#00F0FF] transition"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            className="hover:text-[#00F0FF] transition"
          >
            LinkedIn
          </a>
        </div>
        <p className="text-xs text-gray-400 mt-8">
          © 2025 MB ACADEMY. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
