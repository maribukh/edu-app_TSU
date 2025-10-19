import CourseCard from "../components/CourseCard";
import { coursesData } from "../data/coursesData";

export default function Courses() {
  return (
    <div className="px-10 pt-28 pb-20 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-900 mb-10 tracking-widest">
        Available Courses
      </h2>
      <div className="grid gap-6">
        {coursesData.map((course) => (
          <CourseCard key={course.id} {...course} />
        ))}
      </div>
    </div>
  );
}
