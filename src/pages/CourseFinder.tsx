import { Link } from "react-router-dom";

export default function CourseFinder() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 container mx-auto">
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold tracking-widest">
          Find Your Perfect Course
        </h1>
        <p className="mt-6 text-base md:text-lg text-[#E0E0E0]/80">
          Answer a few questions, and we'll find the perfect program for you.
          It's like creating a character in a game—only here, you're building
          your career!
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
          <button className="btn-accent px-10 py-4 rounded-full tracking-wide font-semibold text-lg">
            Start Quiz
          </button>
          <Link
            to="/"
            className="text-[#E0E0E0]/70 hover:text-white transition-colors"
          >
            Back to All Courses
          </Link>
        </div>
      </div>
    </div>
  );
}
