import type { Course } from "../data/academyData";

interface Props {
  course: Course;
}

export default function CourseCard({ course }: Props) {
  const { title, duration, description, technologies } = course;

  return (
    <article className="bg-white/5 border border-white/10 rounded-2xl p-6 shadow-md hover:shadow-lg transition-transform transform hover:scale-105">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="mt-1 text-sm text-[#E0E0E0]/70">Длительность: {duration}</p>
        </div>
      </div>

      <p className="mt-4 text-sm md:text-base text-[#E0E0E0]/90">{description}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 text-xs rounded-full bg-white/10 text-[#E0E0E0] border border-white/10"
          >
            {tech}
          </span>
        ))}
      </div>
    </article>
  );
}
