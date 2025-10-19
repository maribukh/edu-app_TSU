import { portfolioData } from "../data/portfolioData";

export default function Hero() {
  return (
    <section id="hero" className="relative w-full min-h-[80vh] flex items-center justify-center text-center px-6">
      <div className="max-w-3xl">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white">
          {portfolioData.name}
        </h1>
        <p className="mt-3 text-cyan-200 text-lg md:text-xl">
          {portfolioData.title}
        </p>
        <p className="mt-6 text-white/80">
          {portfolioData.objective}
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <a
            href="/Mariam_Bukhaidze_CV.pdf"
            download
            className="px-6 py-2 rounded-full bg-cyan-300 text-black font-medium hover:brightness-110 transition"
          >
            Download CV
          </a>
          <a
            href={portfolioData.contact.github}
            target="_blank"
            rel="noreferrer"
            className="px-6 py-2 rounded-full border border-cyan-300 text-cyan-200 hover:bg-cyan-300 hover:text-black transition"
          >
            GitHub →
          </a>
        </div>
      </div>
    </section>
  );
}
