import  { useState } from "react";
import { useNavigate , Link } from "react-router-dom";
import {  AnimatePresence } from "framer-motion";

import Step1 from "./booking/Step1";
import Step2 from "./booking/Step2";
import Step3 from "./booking/Step3";
import Step4 from "./booking/Step4";

const BookingPage = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    city: "",
    service: "",
    rooms: 1,
    area: 20,
    date: "",
    time: "",
    name: "",
    phone: "",
    email: ""
  });

  const next = () => setStep((p) => p + 1);
  const back = () => setStep((p) => p - 1);

  const stepsHeader = [
    { id: 1, label: "Location & Service" },
    { id: 2, label: "Details" },
    { id: 3, label: "Date & Time" },
    { id: 4, label: "Personal Info" },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white p-6 md:p-12 font-sans">
              
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="text-purple-500  mb-4 hover:underline">
          ← Back to Home
        </Link>
        
        <div className="relative mt-5 flex justify-between mb-20 max-w-2xl mx-auto">
          <div className="absolute top-5 left-0 w-full h-[1px] bg-gray-800 -z-0" />
          
          <div 
            className="absolute top-5 left-0 h-[1px] bg-purple-500 transition-all duration-500 -z-0" 
            style={{ width: `${((step - 1) / (stepsHeader.length - 1)) * 100}%` }}
          />

          {stepsHeader.map((s) => (
            <div key={s.id} className="z-10 flex flex-col items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                step >= s.id 
                ? 'bg-purple-600 border-purple-600 shadow-[0_0_15px_#a855f7]' 
                : 'bg-black border-gray-700 text-gray-500'
              }`}>
                {step > s.id ? "✓" : s.id}
              </div>
              <span className={`text-[10px] mt-3 uppercase tracking-widest font-medium ${
                step >= s.id ? 'text-purple-400' : 'text-gray-600'
              }`}>
                {s.label}
              </span>
            </div>
          ))}
        </div>

        <div className="bg-[#0c0c0e] border border-white/5 p-8 md:p-12 rounded-[32px] shadow-2xl relative">
          
          <AnimatePresence mode="wait">
            {step === 1 && (
              <Step1 key="s1" next={next} data={formData} setData={setFormData} />
            )}
            
            {step === 2 && (
              <Step2 key="s2" next={next} back={back} data={formData} setData={setFormData} />
            )}
            
            {step === 3 && (
              <Step3 key="s3" next={next} back={back} data={formData} setData={setFormData} />
            )}
            
            {step === 4 && (
              <Step4 key="s4" back={back} data={formData} setData={setFormData} />
            )}
          </AnimatePresence>

        </div>

        <p className="text-center text-gray-600 text-xs mt-10 tracking-widest">
          SECURE 256-BIT SSL ENCRYPTED PAYMENT
        </p>
      </div>
    </div>
  );
};

export default BookingPage;