import { useState } from "react";
import SignUpForm from "./SignUpPage";
import LoginForm from "./LoginPage";
import {Link} from 'react-router-dom';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className="min-h-screen bg-[#080810] flex flex-col items-center justify-center p-4 text-white"
         style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>

      <div className="flex bg-[#0f0f1a] border border-purple-900/20 p-1 rounded-2xl mb-6 w-full max-w-[260px]">
        <button
          onClick={() => setIsLogin(false)}
          className={`flex-1 py-[9px] rounded-xl text-[13px] font-medium transition-all duration-300 tracking-[0.3px]
            ${!isLogin ? "bg-gradient-to-br from-purple-600 to-purple-800 text-white" : "text-[#4a4a6a]"}`}
        >
          Sign Up
        </button>
        <button
          onClick={() => setIsLogin(true)}
          className={`flex-1 py-[9px] rounded-xl text-[13px] font-medium transition-all duration-300 tracking-[0.3px]
            ${isLogin ? "bg-gradient-to-br from-purple-600 to-purple-800 text-white" : "text-[#4a4a6a]"}`}
        >
          Login
        </button>
      </div>

      <div className="w-full max-w-[440px] bg-[#0d0d1a] border border-purple-900/20 rounded-[28px] p-9 relative overflow-hidden">

        <div className="absolute -top-20 -right-20 w-52 h-52 bg-purple-900/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-44 h-44 bg-purple-800/8 rounded-full blur-3xl pointer-events-none" />

        <div className="flex items-center gap-3 mb-7">
          <div className="w-[42px] h-[42px] bg-gradient-to-br from-purple-600 to-purple-800 rounded-[12px] flex items-center justify-center border border-white/10">
            <i className="fas fa-shield-alt text-white text-sm" />
          </div>
          <div>
            <h1 className="font-['Cormorant_Garamond'] text-[22px] font-bold text-white tracking-[0.5px]">
              CleanPro
            </h1>
            <p className="text-[9px] text-[#5b4f7a] uppercase tracking-[2px] font-semibold mt-0.5">
              Cleaning Services
            </p>
          </div>
        </div>

        {isLogin ? <LoginForm /> : <SignUpForm onSuccess={() => setIsLogin(true)} />}

        <div className="flex items-center gap-3 my-5">
          <div className="flex-1 h-px bg-white/5" />
          <span className="text-[11px] text-[#2e2e4a] uppercase tracking-[0.5px] font-medium">or</span>
          <div className="flex-1 h-px bg-white/5" />
        </div>

        <button className="w-full bg-[#0a0a15] border border-white/[0.06] rounded-[14px] py-[13px] flex items-center justify-center gap-2.5 hover:bg-[#0f0f1e] hover:border-purple-900/30 transition-all duration-200">
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            className="w-[17px] h-[17px]"
            alt="Google"
          />
          <span className="text-[13px] font-medium text-[#5a5a7a]">Continue with Google</span>
        </button>

        <p className="text-center text-[12px] text-[#2e2e4a] mt-5">
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-purple-400 font-semibold hover:underline bg-transparent border-none cursor-pointer"
          >
            {isLogin ? "Sign up" : "Sign in"}
          </button>
        </p>
      </div>
      <Link to="/" className="mt-6 text-[11px] text-[#2e2e4a] hover:text-purple-500 transition-colors duration-200">
        Back to Home
      </Link>
    </div>
  );
};

export default AuthPage;