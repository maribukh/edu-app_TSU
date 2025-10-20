import { Link } from "react-router-dom";
import { academyData } from "../data/academyData.ts";
import CourseCard from "./CourseCard.tsx";
import Button from "./UI/Button.tsx";
import { FaCompass, FaArrowRight } from "react-icons/fa"; 

export default function CoursesList() {
  return (
    <section id="courses" className="container mx-auto px-4 py-16">
      <h2 className="text-2xl md:text-3xl font-bold tracking-widest mb-8 text-center">
        Our Learning Programs
      </h2>

      <div className="mb-12 bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
        <h3 className="text-2xl font-bold flex items-center justify-center gap-3">
          <FaCompass className="text-blue-400" /> 
          Don't know where to start?
        </h3>
        <p className="mt-2 text-[#E0E0E0]/80 max-w-2xl mx-auto">
          Answer a few questions, and we'll find the perfect program for you.
          It's like creating a character in a game—only here, you're building
          your career!
        </p>
        <Link to="/course-finder">
          <Button variant="primary" size="lg" className="mt-6">
            Find My Course
            <FaArrowRight className="ml-2" /> 
          </Button>
        </Link>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {academyData.courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </section>
  );
}
