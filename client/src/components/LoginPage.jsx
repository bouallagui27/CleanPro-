import { useState } from "react";  
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import InputField from "./InputField";
import AXIOS from "axios";

const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginUser = async (e) => {
    e.preventDefault();
    try {
      const response = await AXIOS.post('http://localhost:3000/login/login', { email, password })
      if (response.status === 200) {  
      alert("Login successful! 🎉");
      localStorage.setItem("token", response.data.token);
      navigate('/booking');} // Navigate to the dashboard upon successful login
    } catch (error) {
      console.error('Login error:', error);
    }
  };
  return (
    <motion.div
      key="login"
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
  >
    <h2 className="font-['Cormorant_Garamond'] text-[30px] font-bold text-white tracking-[0.3px] leading-tight">
      Welcome Back
    </h2>
    <p className="text-[13px] text-[#4a4a6a] mt-1 mb-6">
      Sign in to manage your bookings
    </p>

    <InputField placeholder="Email Address"  onChange={(e)=> setEmail(e.target.value)} required type="email"
      icon={<i className="fas fa-envelope" />} />

    <div className="flex justify-end mb-1.5 -mt-1">
      <span className="text-[11px] text-purple-500 font-semibold cursor-pointer hover:underline tracking-[0.2px]">
        Forgot password?
      </span>
    </div>

    <InputField placeholder="Password"  onChange={(e)=> setPassword(e.target.value)} required type="password"
      icon={<i className="fas fa-lock" />} />

    <button onClick={loginUser} className="
      w-full mt-2 bg-gradient-to-br from-purple-600 to-purple-800
      rounded-[14px] py-[14px] font-['Plus_Jakarta_Sans']
      text-[14px] font-semibold text-white tracking-[0.3px]
      relative overflow-hidden
      hover:opacity-90 active:scale-[0.98] transition-all duration-150
      before:content-[''] before:absolute before:inset-0
      before:bg-gradient-to-br before:from-white/10 before:to-transparent before:pointer-events-none
    ">
      Sign In
    </button>
  </motion.div>
);};

export default LoginForm;