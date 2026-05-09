import { motion } from "framer-motion";
import InputField from "./InputField";

const LoginForm = () => {
  
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

    <InputField placeholder="Email Address" required type="email"
      icon={<i className="fas fa-envelope" />} />

    {/* Forgot password above the field */}
    <div className="flex justify-end mb-1.5 -mt-1">
      <span className="text-[11px] text-purple-500 font-semibold cursor-pointer hover:underline tracking-[0.2px]">
        Forgot password?
      </span>
    </div>

    <InputField placeholder="Password" required type="password"
      icon={<i className="fas fa-lock" />} />

    <button className="
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