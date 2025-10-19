import { NavLink, Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="w-full bg-white/80 backdrop-blur-md shadow-md border-b border-[#E0E6EE]">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-6 px-10">
        <Link
          to="/"
          className="text-xl font-bold tracking-widest text-[#00F0FF]"
        >
          MB ACADEMY
        </Link>

        <nav className="flex gap-6">
          <NavLink
            to="/"
            className="px-5 py-2 rounded-full text-sm tracking-wide text-gray-700 hover:text-[#00F0FF] hover:shadow-neon transition"
          >
            Home
          </NavLink>
          <NavLink
            to="/courses"
            className="px-5 py-2 rounded-full text-sm tracking-wide text-gray-700 hover:text-[#00F0FF] hover:shadow-neon transition"
          >
            Courses
          </NavLink>
          <NavLink
            to="/dashboard"
            className="px-5 py-2 rounded-full text-sm tracking-wide text-gray-700 hover:text-[#00F0FF] hover:shadow-neon transition"
          >
            Dashboard
          </NavLink>
        </nav>

        <Link
          to="/login"
          className="px-6 py-2 border border-[#00F0FF] rounded-full text-[#00F0FF] text-sm hover:bg-[#00F0FF] hover:text-black transition shadow-neon"
        >
          Login
        </Link>
      </div>
    </header>
  );
}
