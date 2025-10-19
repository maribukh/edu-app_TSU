import { Link } from "react-router-dom";

interface CourseCardProps {
  id: string;
  title: string;
  subtitle: string;
}

export default function CourseCard({ id, title, subtitle }: CourseCardProps) {
  return (
    <Link
      to={`/course/${id}`}
      className="group block bg-white shadow-card hover:shadow-neon transition rounded-xl border-l-4 border-[#00F0FF] px-8 py-6 hover:-translate-y-1"
    >
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[#00F0FF] tracking-wide">
            {title}
          </h3>
          <p className="text-sm text-gray-500 mt-1">{subtitle}</p>
        </div>
        <div className="w-4 h-4 rounded-full border border-[#00F0FF]/40"></div>
      </div>
    </Link>
  );
}
