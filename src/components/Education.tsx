import { portfolioData, type EducationItem } from "../data/portfolioData";

export default function Education() {
  const educationItems: EducationItem[] = portfolioData.education;

  return (
    <section id="education" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-widest mb-10 text-white/90 text-center">
          Education
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {educationItems.map((edu, idx) => (
            <div key={`${edu.institution}-${idx}`} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white">{edu.institution}</h3>
              <p className="text-white/80 mt-1">{edu.degree}</p>
              <p className="text-sm text-white/60 mt-1">{edu.period}</p>
              {edu.details ? (
                <p className="text-white/70 mt-3">{edu.details}</p>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
