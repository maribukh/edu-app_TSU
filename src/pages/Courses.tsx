import CourseCard from "../components/CourseCard";
import { coursesData } from "../data/coursesData";

export default function Courses() {
  return (
    <div className="px-6 pt-24 pb-16 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-[#00F0FF] mb-8 tracking-wide">
        Available Courses
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {coursesData.map((course) => (
          <CourseCard key={course.id} {...course} />
        ))}
      </div>
    </div>
  );
}
