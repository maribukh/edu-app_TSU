import type React from "react";

export default function Hero() {
  const scrollToCourses = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full min-h-[70vh] flex items-center justify-center text-center px-6">
      <div className="max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold tracking-widest">
          Станьте Front-End Разработчиком Будущего
        </h1>
        <p className="mt-6 text-base md:text-lg text-[#E0E0E0]/80">
          Интерактивные курсы по React и TypeScript от практикующего эксперта.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <a
            href="#courses"
            onClick={scrollToCourses}
            className="btn-accent px-8 py-3 rounded-full tracking-wide font-semibold"
          >
            Посмотреть все курсы
          </a>
        </div>
      </div>
    </section>
  );
}
