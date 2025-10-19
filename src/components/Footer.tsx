import { portfolioData } from "../data/portfolioData";

export default function Footer() {
  const { email, github } = portfolioData.contact;
  return (
    <footer className="mt-24 py-10 border-t border-white/10 text-center text-white/70">
      <div className="container-lg">
        <div className="flex items-center justify-center gap-6">
          <a
            className="hover:text-white transition inline-flex items-center gap-2"
            href={`mailto:${email}`}
          >
            <span>✉️</span>
            <span>{email}</span>
          </a>
          {github ? (
            <a
              className="hover:text-white transition inline-flex items-center gap-2"
              href={github}
              target="_blank"
              rel="noreferrer"
            >
              <span>🐙</span>
              <span>GitHub</span>
            </a>
          ) : null}
        </div>
        <p className="mt-4 text-sm">© Mariam Bukhaidze 2025</p>
      </div>
    </footer>
  );
}
