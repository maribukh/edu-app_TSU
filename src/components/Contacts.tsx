export default function Contacts() {
  return (
    <footer className="mt-32 py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-sm text-gray-500 tracking-widest mb-4">
          CONNECT WITH MB //
        </p>
        <div className="flex justify-center gap-6 text-gray-400">
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
          <a href="#" className="hover:text-[#00F0FF] transition">
            LinkedIn
          </a>
        </div>
        <p className="text-xs text-gray-600 mt-6">
          © 2025 MB ACADEMY. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
