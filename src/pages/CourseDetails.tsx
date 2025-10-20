import { useParams } from "react-router-dom";
import { coursesData } from "../data/coursesData";

export default function CourseDetails() {
  const { id } = useParams();
  const course = coursesData.find((c) => c.id === id);

  if (!course) {
    return (
      <div className="pt-24 text-center text-gray-500">Course not found.</div>
    );
  }

  return (
    <div className="pt-24 px-6 max-w-4xl mx-auto">
      <h1 className="text-4xl font-extrabold text-white tracking-tight">
        {course.title}
      </h1>
      <p className="text-lg text-gray-600 mt-2">{course.subtitle}</p>

      <div className="mt-8 p-6 bg-white shadow-md rounded-xl border border-gray-100">
        <p className="text-gray-700 leading-relaxed">
          Welcome to{" "}
          <span className="text-cyan-500 font-semibold">{course.title}</span>.
          This course is designed to give students hands-on experience with
          real-world development practices. You'll build projects, collaborate
          with peers, and gain skills that matter.
        </p>
        <ul className="mt-4 list-disc list-inside text-gray-600 space-y-2">
          <li>Interactive lessons and quizzes</li>
          <li>Project-based learning</li>
          <li>Mentorship and feedback</li>
        </ul>
      </div>
    </div>
  );
}
