import { useState } from "react";
import { motion } from "framer-motion";
import InputField from "./InputField";
import axios from "axios";

const SignUpForm = () => {
  const [pw, setPw] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
const fetchData = async (e) => {
     e.preventDefault(); 
    try {
        // حط العنوان كامل باش تضمن الربط حالياً
        const response = await axios.post('http://localhost:3000/users/users', {
            firstName,
            lastName,
            email,
            phone,
            password: pw
        });
        
        if (response.status === 201) {
            alert("Account created successfully! 🎉");
             // هوني تنجم تهزو لصفحة الـ Login
        }
    } catch (error) {
        // هوني تخرج الـ Error اللي يبعثو السيرفر (مثلاً Email already exists)
        console.error("Error details:", error.response?.data || error.message);
        alert(error.response?.data?.message || "Something went wrong!");
    }
  };
  const strength = (() => {
    let s = 0;
    if (pw.length >= 6) s++;
    if (pw.length >= 10) s++;
    if (/[A-Z]/.test(pw) && /[0-9]/.test(pw)) s++;
    if (/[^A-Za-z0-9]/.test(pw)) s++;
    return s;
  })();

  const barColor =
    strength <= 1 ? "bg-purple-900"
    : strength <= 3 ? "bg-purple-500"
    : "bg-emerald-500";

  return (
    <motion.div
      key="signup"
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
    >
      <h2 className="font-['Cormorant_Garamond'] text-[30px] font-bold text-white tracking-[0.3px] leading-tight">
        Create Account
      </h2>
      <p className="text-[13px] text-[#4a4a6a] mt-1 mb-6">
        Join thousands of satisfied customers
      </p>

      <div className="grid grid-cols-2 gap-3">
        <InputField placeholder="First Name" onChange={(e) => setFirstName(e.target.value)} icon={<i className="fas fa-user text-xs" />} />
        <InputField placeholder="Last Name" onChange={(e) => setLastName(e.target.value)} icon={<i className="fas fa-user text-xs" />} />
      </div>

      <InputField placeholder="Email Address" type="email"
        onChange={(e) => setEmail(e.target.value)}
        icon={<i className="fas fa-envelope" />} />
      <InputField placeholder="Phone Number" type="tel"
        onChange={(e) => setPhone(e.target.value)}
        icon={<i className="fas fa-phone" />} />

      {/* Password + strength bar */}
      <div className="mb-3">
        <InputField
          placeholder="Password"
          type="password"
          icon={<i className="fas fa-lock" />}
          onChange={(e) => setPw(e.target.value)}
        />
        <div className="flex gap-1 -mt-1 px-1">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className={`flex-1 h-[2px] rounded-full transition-all duration-300 ${
                i < strength ? barColor : "bg-[#16162a]"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Terms */}
      <label className="flex items-start gap-2.5 mb-5 cursor-pointer mt-3">
        <input type="checkbox" className="mt-0.5 accent-purple-600 flex-shrink-0" />
        <span className="text-[11px] text-[#2e2e4a] leading-relaxed">
          I agree to the{" "}
          <a href="#" className="text-purple-500 hover:underline">Terms of Service</a>
          {" "}and{" "}
          <a href="#" className="text-purple-500 hover:underline">Privacy Policy</a>
        </span>
      </label>

      <button
        onClick={fetchData} 
      className="
        w-full bg-gradient-to-br from-purple-600 to-purple-800
        rounded-[14px] py-[14px] font-['Plus_Jakarta_Sans']
        text-[14px] font-semibold text-white tracking-[0.3px]
        relative overflow-hidden
        hover:opacity-90 active:scale-[0.98] transition-all duration-150
        before:content-[''] before:absolute before:inset-0
        before:bg-gradient-to-br before:from-white/10 before:to-transparent before:pointer-events-none
      ">
        Create Account
      </button>
    </motion.div>
  );
};

export default SignUpForm;