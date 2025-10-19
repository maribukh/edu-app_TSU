const nav = [
  { href: '#courses', label: 'Курсы' },
  { href: '#about', label: 'Об инструкторе' },
  { href: '#contacts', label: 'Контакты' },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/10 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#" className="text-lg md:text-xl font-bold tracking-widest text-[#E0E0E0]">
          MB Dev Academy
        </a>

        <nav className="hidden sm:flex items-center gap-6">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm tracking-wide text-[#E0E0E0]/80 hover:text-neonBlue transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
