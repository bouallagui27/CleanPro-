import { motion } from "framer-motion";

const Step3 = ({ next, back, data, setData }) => {
  const times = ["8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"];
  
  const days = [
    { day: "Sat", date: 9 }, { day: "Sun", date: 10 }, { day: "Mon", date: 11 },
    { day: "Tue", date: 12 }, { day: "Wed", date: 13 }, { day: "Thu", date: 14 }, { day: "Fri", date: 15 }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }} 
      animate={{ opacity: 1, x: 0 }} 
      exit={{ opacity: 0, x: -20 }}
    >
      <div className="space-y-8">
        <div>
          <h2 className="text-white text-lg font-semibold mb-6">Select Date</h2>
          <div className="grid grid-cols-7 gap-2">
            {days.map((d) => (
              <button
                key={d.date}
                onClick={() => setData({ ...data, date: `2026-05-${d.date}` })}
                className={`flex flex-col items-center p-3 rounded-2xl border transition-all duration-300 ${
                  data.date === `2026-05-${d.date}`
                    ? "border-purple-500 bg-gradient-to-b from-purple-500/20 to-blue-500/20 text-white shadow-[0_0_15px_rgba(168,85,247,0.3)]"
                    : "border-white/5 bg-white/5 text-gray-500 hover:bg-white/10"
                }`}
              >
                <span className="text-[10px] uppercase">{d.day}</span>
                <span className="text-lg font-bold">{d.date}</span>
              </button>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-white text-lg font-semibold mb-6">Select Time</h2>
          <div className="grid grid-cols-4 gap-3">
            {times.map((t) => (
              <button
                key={t}
                onClick={() => setData({ ...data, time: t })}
                className={`p-3 rounded-xl border text-sm transition-all duration-300 ${
                  data.time === t
                    ? "border-purple-500 bg-purple-500/20 text-white"
                    : "border-white/5 bg-white/5 text-gray-400 hover:bg-white/10"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="flex justify-between mt-12">
          <button onClick={back} className="text-gray-500 hover:text-white transition">
            ‹ Previous
          </button>
          <button
            onClick={next}
            disabled={!data.date || !data.time} 
            className={`px-10 py-3 rounded-xl font-bold transition-all ${
              data.date && data.time
                ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/20 hover:scale-105"
                : "bg-gray-800 text-gray-600 cursor-not-allowed"
            }`}
          >
            Next Step ›
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Step3;