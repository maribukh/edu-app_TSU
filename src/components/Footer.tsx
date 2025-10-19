import { academyData } from "../data/academyData";

export default function Footer() {
  const { instructor } = academyData;
  return (
    <footer id="contacts" className="mt-20 border-t border-white/10">
      <div className="container mx-auto px-4 py-10 flex flex-col sm:flex-row gap-6 items-center justify-between">
        <div>
          <p className="font-semibold">Связаться с нами</p>
          <div className="mt-2 flex items-center gap-4 text-sm">
            <a className="link-accent" href={`mailto:${instructor.contact.email}`}>✉️ Email</a>
            <a className="link-accent" href={instructor.contact.github} target="_blank" rel="noreferrer">🐙 GitHub</a>
          </div>
        </div>

        <p className="text-xs text-[#E0E0E0]/70">© MB Dev Academy 2025</p>
      </div>
    </footer>
  );
}
