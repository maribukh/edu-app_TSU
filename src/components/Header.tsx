import { useCallback } from "react";

export default function Header() {
  const scrollTo = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/10 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
        <button
          onClick={() => scrollTo("hero")}
          className="text-xl font-bold tracking-widest text-cyan-300 hover:text-white transition"
        >
          MB
        </button>

        <nav className="flex gap-6 text-sm">
          {[
            { id: "about", label: "About" },
            { id: "experience", label: "Experience" },
            { id: "skills", label: "Skills" },
            { id: "education", label: "Education" },
          ].map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="text-white/80 hover:text-white transition relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-cyan-300 hover:after:w-full after:transition-all"
            >
              {link.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
