import { NavLink, Link } from "react-router-dom";

export default function Header() {
  const navLinkClasses =
    "relative text-sm tracking-wide text-gray-400 hover:text-[#00F0FF] transition";

  const activeClasses = "text-[#00F0FF]";

  return (
    <header className="fixed top-0 left-0 w-full bg-[#0A0A0F]/80 backdrop-blur-sm border-b border-white/5 z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="text-lg font-semibold tracking-wider text-[#00F0FF]"
        >
          MB ACADEMY
        </Link>

        {/* Navigation */}
        <nav className="flex gap-8">
          <NavLink
            to="/"
            className={({ isActive }: { isActive: boolean }) =>
              `${navLinkClasses} ${isActive ? activeClasses : ""}`
            }
          >
            Home
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#00F0FF] transition-all group-hover:w-full"></span>
          </NavLink>

          <NavLink
            to="/courses"
            className={({ isActive }: { isActive: boolean }) =>
              `${navLinkClasses} ${isActive ? activeClasses : ""}`
            }
          >
            Courses
          </NavLink>

          <NavLink
            to="/dashboard"
            className={({ isActive }: { isActive: boolean }) =>
              `${navLinkClasses} ${isActive ? activeClasses : ""}`
            }
          >
            Dashboard
          </NavLink>
        </nav>

        {/* Login */}
        <Link
          to="/login"
          className="text-sm px-4 py-2 border border-[#00F0FF] rounded-md hover:bg-[#00F0FF] hover:text-black transition"
        >
          Login
        </Link>
      </div>
    </header>
  );
}
