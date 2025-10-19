import { portfolioData } from "../data/portfolioData";

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-widest mb-6 text-white/90">
          About Me
        </h2>
        <p className="text-lg leading-relaxed text-white/80 max-w-3xl mx-auto">
          {portfolioData.objective}
        </p>
      </div>
    </section>
  );
}
