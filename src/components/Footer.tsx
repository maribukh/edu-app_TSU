import React, { useState } from "react";
import { Link } from "react-router-dom";
import { academyData } from "../data/academyData";
import { FaGithub, FaEnvelope, FaArrowRight, FaCompass } from "react-icons/fa";

const nav = [
  { href: "#courses", label: "Courses" },
  { href: "#about", label: "About Instructor" },
  { href: "#contacts", label: "Contacts" },
];

export default function Footer() {
  const { instructor, courses } = academyData;
  const [email, setEmail] = useState("");

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const id = href.substring(1);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribed with:", email);
    alert(`Thank you for subscribing, ${email}!`);
    setEmail(""); 
  };


  const linkStyle =
    "text-sm text-gray-400 hover:text-neonBlue transition-colors duration-200 cursor-pointer";

  return (
    <footer
      id="contacts"
      className="mt-20 border-t border-white/10 bg-gray-950"
    >
      <div className="container mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
   
        <div className="md:col-span-2 lg:col-span-1">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="text-lg md:text-xl font-bold tracking-widest text-gray-100 cursor-pointer"
          >
            MB Dev Academy
          </a>
          <p className="mt-3 text-sm text-gray-400 max-w-xs">
            Interactive courses on React and TypeScript from a practicing
            expert.
          </p>
        </div>

        <div>
          <h4 className="font-semibold tracking-widest text-sm uppercase text-gray-500 mb-4">
            Navigate
          </h4>
          <ul className="space-y-3">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className={linkStyle}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <Link
                to="/course-finder"
                className={linkStyle + " flex items-center gap-2"}
              >
                Find My Course <FaCompass />
              </Link>
            </li>
          </ul>
        </div>


        <div>
          <h4 className="font-semibold tracking-widest text-sm uppercase text-gray-500 mb-4">
            Programs
          </h4>
          <ul className="space-y-3">
            {courses.map((course) => (
              <li key={course.id}>
                <Link to={`/course/${course.id}`} className={linkStyle}>
                  {course.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>


        <div>
          <h4 className="font-semibold tracking-widest text-sm uppercase text-gray-500 mb-4">
            Stay Updated
          </h4>
          <p className="text-sm text-gray-400 mb-4">
            Get the latest course news, tips, and offers directly in your inbox.
          </p>
          <form onSubmit={handleSubscribe} className="flex gap-2">
            <label htmlFor="email-subscribe" className="sr-only">
              Email Address
            </label>
            <input
              id="email-subscribe"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
    
              className="flex-grow min-w-0 px-3 py-2 rounded-md bg-gray-800 text-gray-200 text-sm border border-gray-700 focus:outline-none focus:ring-2 focus:ring-neonBlue"
            />
            <button
              type="submit"
              aria-label="Subscribe"

              className="flex-shrink-0 px-3 py-2 rounded-md bg-neonBlue text-gray-900 font-medium hover:bg-neonBlue/80 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-neonBlue"
            >
              <FaArrowRight />
            </button>
          </form>
        </div>
      </div>


      <div className="container mx-auto px-4 py-6 border-t border-white/10">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-center sm:text-left text-xs text-gray-500">
            © {new Date().getFullYear()} MB Dev Academy. All Rights Reserved.
          </p>

          <div className="flex items-center gap-5">
            <a
              href={instructor.contact.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Profile"
              className="text-gray-500 hover:text-white transition-colors duration-200"
            >
              <FaGithub size={20} />
            </a>
            <a
              href={`mailto:${instructor.contact.email}`}
              aria-label="Email Instructor"
              className="text-gray-500 hover:text-white transition-colors duration-200"
            >
              <FaEnvelope size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
