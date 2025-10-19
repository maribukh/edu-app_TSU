import { portfolioData, type ExperienceItem } from "../data/portfolioData";

export default function Experience() {
  const experiences: ExperienceItem[] = portfolioData.experience;

  return (
    <section id="experience" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-widest mb-10 text-white/90 text-center">
          Experience
        </h2>

        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-white/20" aria-hidden />
          <ul className="space-y-10">
            {experiences.map((item, idx) => (
              <li key={`${item.company}-${idx}`} className="relative pl-12">
                <span className="absolute left-2 top-3 block w-4 h-4 rounded-full bg-cyan-300 ring-4 ring-white/10" />
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:translate-y-[-2px] transition-transform">
                  <div className="flex flex-wrap items-baseline justify-between gap-4">
                    <h3 className="text-xl font-semibold text-white">
                      {item.role}
                    </h3>
                    <span className="text-sm text-white/60">{item.period}</span>
                  </div>
                  <p className="mt-1 text-white/80">{item.company}</p>
                  <ul className="mt-4 list-disc list-inside space-y-2 text-white/80">
                    {item.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
