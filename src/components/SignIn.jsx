import React, { useState } from "react";
import { UseAuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const SignIn = ({ toggleForm }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState([]);
  const navigate = useNavigate();

  const { signIn } = UseAuthContext();
  const fromHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    const newError = [];

    if (email.trim() === "") {
      newError.push("Enter Email");
    }
    if (password.trim() === "") {
      newError.push("Enter Your Password");
    }
    setError(newError);
    if (newError.length > 0) {
      setLoading(false);
      return;
    }

    //firebase

    try {
      await signIn(email, password);
      setLoading(false);
      navigate("/");
    } catch (err) {
      console.log(err.message);
      setLoading(false);
    }
  };

  return (
    <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-full max-w-md bg-white border border-gray-100 rounded-2xl shadow-sm p-8">
      {/* Header */}
      <div className="flex flex-col items-center mb-6 text-center">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-2xl">🕋</span>
          <span className="font-bold text-xl tracking-tight text-[#0b3323]">
            Naiki <span className="text-[#10b981]">Tracker</span>
          </span>
        </div>
        <p className="text-xs text-gray-400 font-medium tracking-wide uppercase">
          Welcome Back
        </p>
      </div>

      <div>
        <ul>
          {error.map((items) => {
            return <li>{items}</li>;
          })}
        </ul>
      </div>
      {/* Form */}
      <form onSubmit={fromHandler} className="space-y-4">
        {/* Email */}
        <div>
          <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wider">
            Email Address
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="example@gmail.com"
            className="w-full px-4 py-3 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#10b981] focus:bg-white transition-all text-gray-700"
          />
        </div>

        {/* Password */}
        <div>
          <div className="flex justify-between items-center mb-1.5">
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Password
            </label>
            <button
              type="button"
              className="text-xs font-semibold text-[#10b981] hover:underline bg-transparent border-none p-0 cursor-pointer"
            >
              Forgot Password?
            </button>
          </div>

          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder="••••••••"
            className="w-full px-4 py-3 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#10b981] focus:bg-white transition-all text-gray-700"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 mt-2 bg-[#10b981] hover:bg-[#0d9488] text-white font-medium text-sm rounded-xl shadow-sm transition-all"
        >
          Sign In
        </button>
      </form>

      {/* Footer / Toggle Switch */}
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-500">
          Don't have an account?{" "}
          <button
            onClick={toggleForm}
            className="text-[#10b981] font-semibold hover:underline bg-transparent border-none p-0 cursor-pointer"
          >
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
