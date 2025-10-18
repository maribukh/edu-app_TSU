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
      className="group block bg-[#111317] border border-transparent hover:border-[#00F0FF] p-6 rounded-lg transition duration-300 hover:shadow-[0_0_12px_#00F0FF] hover:-translate-y-1"
    >
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-[#00F0FF] transition">
            {title}
          </h3>
          <p className="text-sm text-gray-400">{subtitle}</p>
        </div>
        <div className="w-8 h-8 border border-[#00F0FF]/30 rounded-md group-hover:border-[#00F0FF] transition"></div>
      </div>
    </Link>
  );
}
