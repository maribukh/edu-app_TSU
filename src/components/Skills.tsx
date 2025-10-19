import { portfolioData, type Skill, type SkillCategory } from "../data/portfolioData";

export default function Skills() {
  const skillsByCategory = portfolioData.skills.reduce(
    (acc, skill) => {
      const key = skill.category;
      if (!acc[key]) acc[key] = [] as Skill[];
      acc[key]!.push(skill);
      return acc;
    },
    {} as Record<SkillCategory, Skill[]>
  );

  const categories: SkillCategory[] = ["Languages", "Frameworks", "Tools"];

  return (
    <section id="skills" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-widest mb-10 text-white/90 text-center">
          Skills
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div key={category} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4">{category}</h3>
              <div className="flex flex-wrap gap-3">
                {(skillsByCategory[category] || []).map((skill) => (
                  <span
                    key={`${category}-${skill.name}`}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-white/90 border border-white/15"
                  >
                    {/* Using simple emoji icons for now */}
                    <span aria-hidden>
                      {category === "Languages" ? "💡" : category === "Frameworks" ? "🧩" : "🛠️"}
                    </span>
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
