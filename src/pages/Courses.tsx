import CourseCard from "../components/CourseCard";
import { coursesData } from "../data/coursesData";

export default function Courses() {
  return (
    <div className="px-6 pt-24 pb-16 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-gray-800 mb-8 tracking-wide">
        Available Courses
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {coursesData.map((course) => (
          <CourseCard
            imageUrl={""}
            category={""}
            lessonsCount={0}
            progress={0}
            key={course.id}
            {...course}
          />
        ))}
      </div>
    </div>
  );
}
