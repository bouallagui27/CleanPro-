const InputField = ({ icon, placeholder, type = "text", onChange }) => (
  <div className="relative group mb-3">
    <div className="absolute left-[14px] top-1/2 -translate-y-1/2 text-[#3d3d5e] group-focus-within:text-purple-500 transition-colors duration-200 text-sm">
      {icon}
    </div>
    <input
      type={type}
      required
      placeholder={placeholder}
      onChange={onChange}
      className="
        w-full bg-[#0a0a15] border border-white/[0.06]
        rounded-[14px] py-[13px] pl-10 pr-4
        font-['Plus_Jakarta_Sans'] text-[13px] text-[#e2e2f0]
        placeholder:text-[#2e2e4a] outline-none
        focus:border-purple-600/50 focus:bg-[#0c0c18]
        transition-all duration-200
      "
    />
  </div>
);

export default InputField;