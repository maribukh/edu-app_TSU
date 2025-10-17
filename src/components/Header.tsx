import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full backdrop-blur-md bg-[#0A0A0F]/80 border-b border-[#00F0FF]/20 z-50">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link
          to="/"
          className="text-[#00F0FF] font-bold tracking-wider text-lg uppercase hover:opacity-80 transition"
        >
          MB Academy
        </Link>

        {/* Navigation */}
        <nav className="flex gap-8">
          <NavLink
            to="/"
            className={({ isActive }: { isActive: boolean }) =>
              `text-sm uppercase tracking-wider transition ${
                isActive
                  ? "text-[#00F0FF]"
                  : "text-gray-300 hover:text-[#00F0FF]"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/courses"
            className={({ isActive }: { isActive: boolean }) =>
              `text-sm uppercase tracking-wider transition ${
                isActive
                  ? "text-[#00F0FF]"
                  : "text-gray-300 hover:text-[#00F0FF]"
              }`
            }
          >
            Courses
          </NavLink>
          <NavLink
            to="/dashboard"
            className={({ isActive }: { isActive: boolean }) =>
              `text-sm uppercase tracking-wider transition ${
                isActive
                  ? "text-[#00F0FF]"
                  : "text-gray-300 hover:text-[#00F0FF]"
              }`
            }
          >
            Dashboard
          </NavLink>
        </nav>

        {/* Login button */}
        <Link
          to="/login"
          className="px-4 py-2 text-sm uppercase tracking-wider border border-[#00F0FF] text-[#00F0FF] rounded-md hover:bg-[#00F0FF] hover:text-black transition shadow-[0_0_10px_#00F0FF]"
        >
          Login
        </Link>
      </div>
    </header>
  );
}
