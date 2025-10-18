import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center text-center px-4 sm:px-6 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1580894742597-87bc8789db3d?q=80&w=2070&auto=format&fit=crop"
          alt="Team collaborating on a web project"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="relative z-10 max-w-4xl text-white">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
          Bring Fresh Growth To Your Skills
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-base sm:text-lg text-white/90">
          Experience the ultimate learning journey with expert-led courses,
          premium gear, and professional insights into modern web development.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/courses"
            className="w-full sm:w-auto px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-full shadow-lg hover:bg-primary/90 transition-transform hover:scale-105"
          >
            Start Learning Now
          </Link>
          <Link
            to="/about"
            className="w-full sm:w-auto px-8 py-3 text-white font-semibold rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors"
          >
            Book a Free Intro
          </Link>
        </div>
      </div>
    </section>
  );
}
