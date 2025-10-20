import { useParams, Link } from "react-router-dom";
import { academyData } from "../data/academyData";
import Button from "../components/UI/Button.tsx";

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

  const levelColor: { [key: string]: string } = {
    Beginner: "bg-green-500/20 text-green-400",
    Advanced: "bg-yellow-500/20 text-yellow-400",
    Workshop: "bg-purple-500/20 text-purple-400",
  };

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-widest">
            {course.title}
          </h1>
          <span
            className={`px-4 py-2 text-sm rounded-full font-semibold self-start ${
              levelColor[course.level] || "bg-gray-500/20 text-gray-400"
            }`}
          >
            {course.level}
          </span>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-lg">
          <div className="md:col-span-2">
            <p className="text-white/80 leading-relaxed">
              {course.description}
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h3 className="font-bold text-white mb-4">Course Details</h3>
            <div className="space-y-3 text-white/70">
              <p>
                <strong>Duration:</strong> {course.duration}
              </p>
              <p>
                <strong>Price:</strong> {course.price} GEL
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-bold tracking-wide text-white mb-4">
            Technologies You'll Master
          </h3>
          <div className="flex flex-wrap gap-3">
            {course.technologies.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 text-sm rounded-full bg-white/10 text-white border border-white/10"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link to="/course-finder">
            <Button variant="primary" size="lg">
              Register For This Course
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
