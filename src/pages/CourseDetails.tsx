import { useParams, Link } from "react-router-dom";
import { academyData } from "../data/academyData";
import Button from "../components/UI/Button.tsx";
import {
  FaClock,
  FaUsers,
  FaTag,
  FaCode,
  FaRoad,
  FaArrowRight,
} from "react-icons/fa";

export default function CourseDetails() {
  const { id } = useParams<{ id: string }>();
  const course = academyData.courses.find((c) => c.id === id);

  if (!course) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center text-center">
        <div>
          <h1 className="text-4xl font-bold text-white">Course Not Found</h1>
          <p className="mt-4 text-lg text-gray-400">
            Sorry, we couldn't find the course you were looking for.
          </p>
          <Link to="/">
            <Button variant="primary" size="lg" className="mt-8">
              Back to Homepage
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const groupSize =
    course.level === "Workshop" ? "Up to 12 students" : "Up to 5 students";

  const levelStyles: { [key: string]: string } = {
    Beginner: "border-green-400 text-green-400",
    Advanced: "border-yellow-400 text-yellow-400",
    Workshop: "border-purple-400 text-purple-400",
  };

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-4xl mx-auto">
        <header className="text-center">
          <span
            className={`px-4 py-1.5 text-sm rounded-full font-semibold border ${
              levelStyles[course.level] || "border-gray-400"
            }`}
          >
            {course.level}
          </span>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold tracking-widest font-orbitron">
            {course.title}
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-300/80">
            {course.description}
          </p>
        </header>

        <div className="my-12 grid grid-cols-2 md:grid-cols-3 gap-6 text-center bg-white/5 border border-white/10 rounded-2xl p-6">
          <div className="flex flex-col items-center gap-2">
            <FaClock className="text-2xl text-neonBlue" />
            <span className="font-semibold">Duration</span>
            <span className="text-gray-400">{course.duration}</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <FaUsers className="text-2xl text-neonBlue" />
            <span className="font-semibold">Class Size</span>
            <span className="text-gray-400">{groupSize}</span>
          </div>
          <div className="flex flex-col items-center gap-2 col-span-2 md:col-span-1">
            <FaTag className="text-2xl text-neonBlue" />
            <span className="font-semibold">Price</span>
            <span className="text-gray-400">{course.price} GEL</span>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold tracking-widest mb-10 text-center font-orbitron flex items-center justify-center gap-4">
            <FaRoad /> Course Roadmap
          </h2>
          <div className="relative pl-8 border-l-2 border-white/20">
            {course.roadmap.map((item, index) => (
              <div key={index} className="mb-10">
                <div className="absolute -left-[15px] mt-1 w-7 h-7 bg-gray-900 rounded-full border-4 border-neonBlue flex items-center justify-center">
                  <span className="text-xs font-bold text-white">
                    {index + 1}
                  </span>
                </div>
                <div className="relative bg-white/5 p-6 rounded-xl">
                  <p className="text-sm font-semibold text-neonBlue">
                    Weeks {item.week}
                  </p>
                  <h3 className="text-xl font-bold text-white mt-1">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-gray-300/80">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold tracking-wide text-white mb-6 text-center font-orbitron flex items-center justify-center gap-4">
            <FaCode /> Technologies You'll Master
          </h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {course.technologies.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 text-sm rounded-full bg-white/10 text-white border border-white/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-20 text-center bg-white/5 border border-neonBlue/50 rounded-2xl p-8 shadow-lg shadow-neonBlue/10">
          <h3 className="text-2xl font-bold text-white">
            Ready to Start Your Journey?
          </h3>
          <p className="mt-2 text-gray-300/80">
            Register now to secure your spot in the next cohort.
          </p>
          <Link to="/course-finder" className="mt-6 inline-block">
            <Button variant="primary" size="lg">
              Register For This Course
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
