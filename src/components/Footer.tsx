import { Link } from "react-router-dom";
import { academyData } from "../data/academyData";

const nav = [
  { href: "#courses", label: "Courses" },
  { href: "#about", label: "About Instructor" },
  { href: "#contacts", label: "Contacts" },
];

export default function Footer() {
  const { instructor, courses } = academyData;

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const id = href.substring(1);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer id="contacts" className="mt-20 border-t border-white/10">
      <div className="container mx-auto px-4 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="sm:col-span-2 lg:col-span-1">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="text-lg md:text-xl font-bold tracking-widest text-[#E0E0E0] cursor-pointer"
          >
            MB Dev Academy
          </a>
          <p className="mt-3 text-sm text-[#E0E0E0]/70 max-w-xs">
            Interactive courses on React and TypeScript from a practicing
            expert.
          </p>
        </div>

        <div>
          <h4 className="font-semibold tracking-widest text-sm uppercase text-[#E0E0E0]/80 mb-4">
            Navigate
          </h4>
          <ul className="space-y-3">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="link-accent text-sm cursor-pointer"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <Link to="/course-finder" className="link-accent text-sm">
                Find My Course 🧭
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold tracking-widest text-sm uppercase text-[#E0E0E0]/80 mb-4">
            Programs
          </h4>
          <ul className="space-y-3">
            {courses.map((course) => (
              <li key={course.id}>
                <Link
                  to={`/course/${course.id}`}
                  className="link-accent text-sm"
                >
                  {course.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold tracking-widest text-sm uppercase text-[#E0E0E0]/80 mb-4">
            Contact
          </h4>
          <ul className="space-y-3">
            <li>
              <a
                className="link-accent text-sm flex items-center gap-2"
                href={`mailto:${instructor.contact.email}`}
              >
                ✉️ Email
              </a>
            </li>
            <li>
              <a
                className="link-accent text-sm flex items-center gap-2"
                href={instructor.contact.github}
                target="_blank"
                rel="noreferrer"
              >
                🐙 GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 border-t border-white/10">
        <p className="text-center text-xs text-[#E0E0E0]/70">
          © MB Dev Academy 2025
        </p>
      </div>
    </footer>
  );
}
