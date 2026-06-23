import { useState } from "react";
import { UseAuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const SignUp = ({ toggleForm }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);

  console.log(error);

  //sign up state
  const { signUp } = UseAuthContext();

  const navigate = useNavigate();

  const formHandler = async (e) => {
    e.preventDefault();

    setLoading(true);
    let newError = {};
    if (fullName.trim() === "") {
      newError = { nameError: "Enter Your Name" };
    }
    if (email.trim() === "") {
      newError = { ...newError, EmailError: "Enter Your Email" };
    }

    if (password.trim() === "") {
      newError = { ...newError, passwordError: "Enter Your password" };
    }
    if (confirmPassword.trim() === "") {
      newError = {
        ...newError,
        ConfirmPasswordError: "Enter Your confirm password",
      };
    }
    if (password !== confirmPassword) {
      newError = { ...newError, passwordNotMatchError: "Password Not Match" };
    }
    setError(newError);
    if (newError) {
      setLoading(false);
      return;
    }

    //fireBase integreation

    try {
      await signUp(fullName, email, password);
      setLoading(false);
      alert("Account Created");
      navigate("/");
    } catch (err) {
      console.log(err.message);
      setLoading(false);
    }
  };

  return (
    <>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-white border border-gray-100 rounded-2xl shadow-sm p-8">
        {/* Header */}
        <div className="flex flex-col items-center mb-6 text-center">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">🕋</span>
            <span className="font-bold text-xl tracking-tight text-[#0b3323]">
              Naiki <span className="text-[#10b981]">Tracker</span>
            </span>
          </div>
          <p className="text-xs text-gray-400 font-medium tracking-wide uppercase">
            Create Your Account
          </p>
        </div>
        <div>
          <ul>
            {/* {error.map((items) => {
              return <li>{items}</li>;
            })} */}
          </ul>
        </div>

        {/* Form */}
        <form onSubmit={formHandler} className="space-y-4">
          {/* Full Name */}
          <div>
            <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wider">
              Full Name
            </label>
            <input
              onChange={(e) => setFullName(e.target.value)}
              value={fullName}
              type="text"
              placeholder="Muhammad Hassam"
              className="w-full px-4 py-3 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#10b981] focus:bg-white transition-all text-gray-700"
            />
          </div>

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
            <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wider">
              Password
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-3 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#10b981] focus:bg-white transition-all text-gray-700"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wider">
              Confirm Password
            </label>
            <input
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
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
            Get Started
          </button>
        </form>

        {/* Footer / Toggle Switch */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">
            Already have an account?{" "}
            <button
              onClick={toggleForm}
              className="text-[#10b981] font-semibold hover:underline bg-transparent border-none p-0 cursor-pointer"
            >
              Sign In
            </button>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignUp;
