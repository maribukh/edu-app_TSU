import type { Course } from "../data/academyData";

interface Props {
  course: Course;
}

export default function CourseCard({ course }: Props) {
  const { title, duration, description, technologies, level, price } = course;

  const levelColor = {
    Beginner: "bg-green-500/20 text-green-400",
    Advanced: "bg-yellow-500/20 text-yellow-400",
    Workshop: "bg-purple-500/20 text-purple-400",
  };

  return (
    <article className="h-full bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col shadow-md hover:shadow-lg transition-transform transform hover:scale-[1.02]">
      <div className="flex-grow">
        <div className="flex items-center justify-between gap-4">
          <h3 className="text-xl font-semibold">{title}</h3>
          <span
            className={`px-3 py-1 text-xs rounded-full font-semibold ${levelColor[level]}`}
          >
            {level}
          </span>
        </div>
        <p className="mt-1 text-sm text-[#E0E0E0]/70">Duration: {duration}</p>

        <p className="mt-4 text-sm md:text-base text-[#E0E0E0]/90">
          {description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {technologies.map((tech: string) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs rounded-full bg-white/10 text-[#E0E0E0] border border-white/10"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
        <p className="text-lg font-bold">{price} GEL</p>
        <a
          href="#"
          className="btn-accent px-6 py-2 rounded-full text-sm font-semibold"
        >
          Learn More
        </a>
      </div>
    </article>
  );
}
