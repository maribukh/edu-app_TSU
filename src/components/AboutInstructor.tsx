import { useState } from "react";
import { academyData } from "../data/academyData";
import {
  FaUniversity,
  FaCertificate,
  FaCode,
  FaChevronDown,
  FaCheck,
  FaBriefcase,
  FaGithub,
} from "react-icons/fa";

const getIconForTitle = (title: string) => {
  const lowerCaseTitle = title.toLowerCase();
  if (
    lowerCaseTitle.includes("bachelor") ||
    lowerCaseTitle.includes("university")
  ) {
    return <FaUniversity className="text-neonBlue" />;
  }
  if (
    lowerCaseTitle.includes("mentorship") ||
    lowerCaseTitle.includes("react") ||
    lowerCaseTitle.includes("front-end")
  ) {
    return <FaCode className="text-neonBlue" />;
  }
  return <FaCertificate className="text-neonBlue" />;
};

export default function AboutInstructor() {
  const { instructor } = academyData;
  const [expandedCardId, setExpandedCardId] = useState<number | null>(null);

  const handleCardClick = (id: number) => {
    setExpandedCardId(expandedCardId === id ? null : id);
  };

  return (
    <section id="about" className="container mx-auto px-4 py-16 sm:py-24">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex flex-col items-center">
          <div
            className={`relative w-48 h-48 md:w-56 md:h-56 rounded-full p-1.5 
                        bg-gradient-to-br from-neonBlue via-neutral-50 to-neonPink 
                        shadow-neon-glow
                        animate-gradient-rotation`}
          >
            <div className="relative w-full h-full rounded-full overflow-hidden bg-gray-900">
              {instructor.imageUrl ? (
                <img
                  alt={instructor.name}
                  src={instructor.imageUrl}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  <span>Photo</span>
                </div>
              )}
            </div>
          </div>
          <h2 className="mt-6 text-4xl md:text-5xl font-bold tracking-widest font-orbitron">
            {instructor.name}
          </h2>
          <p className="mt-2 text-lg text-neonBlue">{instructor.title}</p>
          <p className="mt-4 max-w-2xl mx-auto text-base text-gray-300/90">
            {instructor.bio}
          </p>
        </div>

        <div className="my-12">
          <h3 className="text-2xl md:text-3xl font-bold tracking-widest mb-8 font-orbitron">
            Professional Experience
          </h3>
          <div className="text-left">
            {instructor.experience.map((exp) => (
              <div
                key={exp.id}
                className="bg-white/5 border border-white/10 rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-neonBlue/20"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="md:col-span-2">
                    <div className="flex items-center gap-4">
                      <FaBriefcase className="text-3xl text-neonBlue flex-shrink-0" />
                      <div>
                        <h4 className="text-xl font-bold text-white">
                          {exp.title}
                        </h4>
                        <p className="text-base font-semibold text-neonBlue">
                          {exp.company}
                        </p>
                      </div>
                    </div>
                    <p className="mt-4 text-sm text-gray-300/80">
                      {exp.description}
                    </p>
                  </div>
                  <div className="md:col-span-1 md:border-l md:border-white/10 md:pl-6">
                    <h5 className="text-sm font-semibold text-white mb-3">
                      Key Skills
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.keySkills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 text-xs rounded-full bg-neonBlue/20 text-neonBlue"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                    {exp.projects && (
                      <div className="mt-4">
                        <h5 className="text-sm font-semibold text-white mb-3">
                          Projects
                        </h5>
                        <div className="space-y-2">
                          {exp.projects.map((project) => (
                            <a
                              href={project.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              key={project.name}
                              className="flex items-center gap-2 text-sm text-gray-300 hover:text-neonBlue transition-colors duration-200"
                            >
                              <FaGithub />
                              {project.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="my-12 h-px bg-white/10 w-3/4 mx-auto"></div>

        <div>
          <h3 className="text-2xl md:text-3xl font-bold tracking-widest mb-8 font-orbitron">
            Education & Certifications
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {instructor.educationHistory.map((item) => {
              const isExpanded = expandedCardId === item.id;
              return (
                <div
                  key={item.id}
                  className="group relative bg-white/5 border border-white/10 rounded-xl 
                             transition-all duration-300 hover:border-neonBlue/80 hover:-translate-y-1"
                  onClick={() => handleCardClick(item.id)}
                >
                  <div
                    className="absolute inset-0 bg-neonBlue/10 rounded-xl blur-lg 
                               opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  ></div>
                  <div className="relative p-5 cursor-pointer">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <div className="mt-1 text-2xl flex-shrink-0">
                          {getIconForTitle(item.title)}
                        </div>
                        <div>
                          <h4 className="font-semibold text-white">
                            {item.title}
                          </h4>
                          <p className="text-sm text-neonBlue">{item.source}</p>
                          <p className="text-xs text-gray-400 mt-1">
                            {item.period}
                          </p>
                        </div>
                      </div>
                      <FaChevronDown
                        className={`mt-1 text-white/50 flex-shrink-0 transition-transform duration-300 ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                    <div
                      className={`transition-all duration-500 ease-in-out overflow-hidden ${
                        isExpanded
                          ? "max-h-96 opacity-100 mt-4"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="border-t border-white/10 pt-4">
                        <h5 className="text-sm font-semibold text-white mb-2">
                          Key Skills:
                        </h5>
                        <ul className="space-y-2">
                          {item.keySkills.map((skill) => (
                            <li
                              key={skill}
                              className="flex items-center gap-2 text-xs text-gray-300"
                            >
                              <FaCheck className="text-neonBlue" size={12} />
                              {skill}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
