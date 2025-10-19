import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-28">
      <div className="w-full max-w-md bg-white border-t-4 border-[#FF00FF] shadow-card p-10 rounded-2xl">
        <h2 className="text-2xl font-bold text-center mb-8 tracking-widest text-gray-900">
          ACCESS PANEL
        </h2>
        <form className="space-y-6">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-5 py-3 rounded-full border focus:border-[#FF00FF] outline-none transition shadow"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-5 py-3 rounded-full border focus:border-[#FF00FF] outline-none transition shadow"
          />
          <button className="w-full py-3 rounded-full bg-[#FF00FF] text-white font-semibold tracking-wider hover:shadow-neonPink transition">
            LOGIN →
          </button>
        </form>
        <div className="mt-6 flex justify-between text-xs text-gray-500">
          <Link to="#" className="hover:text-[#FF00FF]">
            Forgot Password?
          </Link>
          <Link to="/signup" className="hover:text-[#FF00FF]">
            Create Account
          </Link>
        </div>
      </div>
    </div>
  );
}
