import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import Button from "../components/UI/Button";

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
            <Link to="/">
              <Button variant="primary" className="mt-8">
                Back to Homepage
              </Button>
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
              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="mt-4 w-full"
              >
                Register Now
              </Button>
            </form>
            <Link to="/" className="mt-6 inline-block">
              <Button variant="secondary">Back to All Courses</Button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
