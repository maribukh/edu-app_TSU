import { useParams } from "react-router-dom";
import { coursesData } from "../data/coursesData";

export default function CourseDetails() {
  const { id } = useParams();
  const course = coursesData.find((c) => c.id === id);

  if (!course) {
    return (
      <div className="pt-28 text-center text-gray-500">Course not found.</div>
    );
  }

  return (
    <div className="pt-28 px-10 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-900 tracking-widest">
        {course.title}
      </h1>
      <p className="text-gray-500 mt-4">{course.subtitle}</p>
      <div className="mt-10 text-gray-700 leading-relaxed">
        <p>
          Welcome to{" "}
          <span className="text-[#00F0FF] font-semibold">{course.title}</span>.
          This course follows real development practices...
        </p>
      </div>
    </div>
  );
}
