import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className=" flex items-center justify-center bg-gray-50 px-4 py-20">
      <div className="m-[5rem] max-w-md bg-white border-t-4 border-pink-500 shadow-lg p-8 rounded-xl">
        <h2 className="text-3xl font-bold text-center mb-6 text-white tracking-wide">
          Student Login
        </h2>
        <form className="space-y-5">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition"
          />
          <button className="w-full py-3 rounded-lg bg-pink-500 text-white font-semibold hover:bg-pink-600 transition">
            Login →
          </button>
        </form>
        <div className="mt-6 flex justify-between text-sm text-gray-600">
          <Link to="#" className="hover:text-pink-500">
            Forgot Password?
          </Link>
          <Link to="/signup" className="hover:text-pink-500">
            Create Account
          </Link>
        </div>
      </div>
    </div>
  );
}
