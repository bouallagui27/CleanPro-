import { motion } from "framer-motion";
import axios from "axios";

const Step4 = ({ back, data, setData }) => {

  const fetchBooking = async () => {
    try {
     
      const response = await axios.post('http://localhost:3000/bookings/create', data); 
      console.log("✅ Booking Saved:", response.data);
      alert("Booking Confirmed Successfully!");
    } catch (error) {
      console.error("❌ Booking Error:", error.response?.data || error.message);
      alert("Error saving booking. Check console.");
    }
  };

  const handleConfirm = () => {
    console.log("Sending data to server...", data);
    fetchBooking(); 
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }} 
      animate={{ opacity: 1, scale: 1 }} 
      className="space-y-8"
    >
      
      <div className="bg-purple-600/10 border border-purple-500/20 p-6 rounded-[24px] mb-8">
        <h3 className="text-purple-400 font-bold mb-4 uppercase text-[10px] tracking-[3px]">
          Booking Summary
        </h3>
        <div className="grid grid-cols-2 gap-y-4 text-sm border-t border-white/5 pt-4">
          <span className="text-gray-500">City:</span> 
          <span className="text-right text-white">{data.city || "Not selected"}</span>
          
          <span className="text-gray-500">Service:</span> 
          <span className="text-right text-white">{data.service || "Not selected"}</span>
          
          <span className="text-gray-500">Details:</span> 
          <span className="text-right text-white">{data.rooms} Rooms, {data.area}m²</span>
          
          <span className="text-gray-500 font-bold border-t border-white/5 pt-2">Total Price:</span> 
          <span className="text-right text-purple-400 font-bold border-t border-white/5 pt-2">
            {50 + (data.rooms * 20) + (data.area * 1)} DT
          </span>
        </div>
      </div>

      <div className="space-y-4">
        <input 
          type="text" 
          placeholder="Full Name" 
          value={data.name || ""}
          onChange={(e) => setData({...data, name: e.target.value})}
          className="w-full bg-white/5 border border-white/10 p-4 rounded-xl focus:border-purple-500 outline-none transition-all text-white" 
        />
        
        <input 
          type="tel" 
          placeholder="Phone Number" 
          value={data.phone || ""}
          onChange={(e) => setData({...data, phone: e.target.value})}
          className="w-full bg-white/5 border border-white/10 p-4 rounded-xl focus:border-purple-500 outline-none transition-all text-white" 
        />

        <input 
          type="email" 
          placeholder="Email Address" 
          value={data.email || ""}
          onChange={(e) => setData({...data, email: e.target.value})}
          className="w-full bg-white/5 border border-white/10 p-4 rounded-xl focus:border-purple-500 outline-none transition-all text-white" 
        />
      </div>

      <div className="flex justify-between mt-10">
        <button onClick={back} className="text-gray-500 hover:text-white transition-colors">
          ← Previous
        </button>
        <button 
          onClick={handleConfirm}
          disabled={!data.name || !data.phone}
          className={`px-12 py-4 rounded-2xl font-bold transition-all ${
            data.name && data.phone 
            ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg hover:scale-105' 
            : 'bg-gray-800 text-gray-500 cursor-not-allowed'
          }`}
        >
          ✓ Confirm Booking
        </button>
      </div>
    </motion.div>
  );
};

export default Step4;