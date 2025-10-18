import { useParams } from "react-router-dom";
import { coursesData } from "../data/coursesData";

export default function CourseDetails() {
  const { id } = useParams();
  const course = coursesData.find((c) => c.id === id);

  if (!course) {
    return (
      <div className="pt-24 text-center text-gray-400">
        <p>Course not found.</p>
      </div>
    );
  }

  return (
    <div className="pt-24 px-6 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-white tracking-wide">
        {course.title}
        <span className="block h-[3px] w-24 bg-[#00F0FF] mt-2"></span>
      </h1>
      <p className="text-gray-400 mt-4">{course.subtitle}</p>

      <div className="mt-8 text-gray-300 leading-relaxed">
        <p>
          Welcome to <span className="text-[#00F0FF]">{course.title}</span>.
          This course is structured based on real industry skills and clean
          development practice. You'll learn how to apply core concepts in
          modern front-end development — the same stack I personally use.
        </p>
      </div>
    </div>
  );
}
