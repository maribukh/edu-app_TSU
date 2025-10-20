import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";

export default function CourseFinder() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Registration attempt:", { name, email });
    if (name && email) {
      setSubmitted(true);
    }
  };

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 container mx-auto">
      <div className="w-full max-w-lg">
        {submitted ? (
          <div className="bg-white/10 border border-neonBlue rounded-2xl p-8">
            <h1 className="text-3xl md:text-4xl font-bold tracking-widest text-neonBlue">
              Thank You!
            </h1>
            <p className="mt-4 text-base md:text-lg text-[#E0E0E0]/80">
              Your registration has been received. We will contact you shortly
              with the next steps.
            </p>
            <Link
              to="/"
              className="btn-accent mt-8 inline-block px-8 py-3 rounded-full tracking-wide font-semibold"
            >
              Back to Homepage
            </Link>
          </div>
        ) : (
          <>
            <h1 className="text-4xl md:text-5xl font-bold tracking-widest">
              Register for a Course
            </h1>
            <p className="mt-6 text-base md:text-lg text-[#E0E0E0]/80">
              Fill out the form below to get started on your development
              journey. We're excited to have you!
            </p>
            <form
              onSubmit={handleSubmit}
              className="mt-10 text-left flex flex-col gap-4"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-[#E0E0E0]/80 mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:ring-2 focus:ring-neonBlue focus:outline-none transition"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-[#E0E0E0]/80 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:ring-2 focus:ring-neonBlue focus:outline-none transition"
                  placeholder="you@example.com"
                />
              </div>
              <button
                type="submit"
                className="btn-accent mt-4 w-full px-10 py-4 rounded-full tracking-wide font-semibold text-lg"
              >
                Register Now
              </button>
            </form>
            <Link
              to="/"
              className="mt-6 inline-block text-[#E0E0E0]/70 hover:text-white transition-colors"
            >
              Back to All Courses
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
