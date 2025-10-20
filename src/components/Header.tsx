const nav = [
  { href: "#courses", label: "Courses" },
  { href: "#about", label: "About Instructor" },
  { href: "#contacts", label: "Contacts" },
];

export default function Header() {

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const id = href.substring(1); 
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/10 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="text-lg md:text-xl font-bold tracking-widest text-[#E0E0E0] cursor-pointer"
        >
          MB Dev Academy
        </a>

        <nav className="hidden sm:flex items-center gap-6">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
     
              onClick={(e) => scrollToSection(e, item.href)}
              className="text-sm tracking-wide text-[#E0E0E0]/80 hover:text-neonBlue transition-colors cursor-pointer"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
