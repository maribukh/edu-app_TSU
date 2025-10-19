import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[75vh] flex items-center justify-center text-center px-10 bg-heroGlow">
      <div className="max-w-3xl">
        <h1 className="text-5xl font-bold tracking-widest text-gray-900">
          LEARN. BUILD. EVOLVE.
        </h1>
        <p className="mt-6 text-gray-600 tracking-wide">
          Front-End education with clean UI principles, React, and design
          thinking — powered by MB ACADEMY.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <Link
            to="/courses"
            className="px-8 py-3 rounded-full bg-[#00F0FF] text-black tracking-wider font-semibold hover:shadow-neon transition"
          >
            Start Learning
          </Link>
          <Link
            to="/dashboard"
            className="px-8 py-3 rounded-full border border-[#00F0FF] text-[#00F0FF] hover:bg-[#00F0FF] hover:text-black transition"
          >
            Dashboard →
          </Link>
        </div>
      </div>
    </section>
  );
}
