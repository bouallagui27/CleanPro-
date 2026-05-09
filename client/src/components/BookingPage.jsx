import  { useState } from "react";
import {  AnimatePresence } from "framer-motion";

// Import الـ Steps متاعك (ثبت في الـ paths حسب الـ folders متاعك)
import Step1 from "./booking/Step1";
import Step2 from "./booking/Step2";
import Step3 from "./booking/Step3";
import Step4 from "./booking/Step4";

const BookingPage = () => {
  // 1. الحالة اللي تعرفنا إحنا في أما مرحلة
  const [step, setStep] = useState(1);

  // 2. الـ Object الكبير اللي يلم المعلومات الكل من الـ 4 مراحل
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

  // 3. Functions التحريك (Next & Back)
  const next = () => setStep((p) => p + 1);
  const back = () => setStep((p) => p - 1);

  // العناوين متاع الـ Stepper الفوقاني
  const stepsHeader = [
    { id: 1, label: "Location & Service" },
    { id: 2, label: "Details" },
    { id: 3, label: "Date & Time" },
    { id: 4, label: "Personal Info" },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white p-6 md:p-12 font-sans">
      <div className="max-w-4xl mx-auto">
        
        {/* --- 1. Stepper (الدوائر والخط) --- */}
        <div className="relative flex justify-between mb-20 max-w-2xl mx-auto">
          {/* الخط الخلفي */}
          <div className="absolute top-5 left-0 w-full h-[1px] bg-gray-800 -z-0" />
          
          {/* الخط الملون اللي يتقدم مع الـ Step */}
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

        {/* --- 2. الـ Container الكبير اللي يتبدل محتواه --- */}
        <div className="bg-[#0c0c0e] border border-white/5 p-8 md:p-12 rounded-[32px] shadow-2xl relative">
          
          {/* AnimatePresence تخلي الصفحات يخرجوا ويدخلوا بـ Animation مزيانة */}
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

        {/* كلمة لوطة زينة كينما في الـ Figma */}
        <p className="text-center text-gray-600 text-xs mt-10 tracking-widest">
          SECURE 256-BIT SSL ENCRYPTED PAYMENT
        </p>
      </div>
    </div>
  );
};

export default BookingPage;