export default function Dashboard() {
  return (
    <div className="min-h-screen px-10 py-28 flex justify-center">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-card p-12 border-t-4 border-[#00F0FF]">
        <h1 className="text-3xl font-bold tracking-widest text-gray-900 text-center mb-6">
          WELCOME BACK, STUDENT
        </h1>
        <p className="text-gray-500 text-center mb-10">
          Mariam Bukhaidze // React Front-End Developer Track
        </p>
        <div className="mb-10">
          <p className="text-sm text-gray-500 tracking-wider mb-2">
            COURSE PROGRESSION
          </p>
          <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full w-[40%] bg-[#00F0FF]"></div>
          </div>
          <p className="text-xs text-gray-500 mt-1">40% Complete</p>
        </div>
        <div className="grid sm:grid-cols-3 gap-6">
          <a
            href="https://github.com/maribukh"
            target="_blank"
            className="p-6 rounded-xl bg-[#F5F7FA] hover:shadow-neon transition border"
          >
            <p className="text-gray-700 text-center tracking-wide">GitHub</p>
          </a>
          <a
            href="/courses"
            className="p-6 rounded-xl bg-[#F5F7FA] hover:shadow-neon transition border"
          >
            <p className="text-gray-700 text-center tracking-wide">
              Continue Courses →
            </p>
          </a>
          <a
            href="https://linkedin.com"
            className="p-6 rounded-xl bg-[#F5F7FA] hover:shadow-neon transition border"
          >
            <p className="text-gray-700 text-center tracking-wide">LinkedIn</p>
          </a>
        </div>
      </div>
    </div>
  );
}
