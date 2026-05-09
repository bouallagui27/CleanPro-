import { motion } from "framer-motion"; // 1. الـ Import الناقص

const Step2 = ({ next, back, data, setData }) => {
  
  // 2. الحسبة لازم تكون هوني وسط الـ Function
  const price = 50 + (data.rooms * 20) + (data.area * 1);

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }} 
      animate={{ opacity: 1, x: 0 }} 
      exit={{ opacity: 0, x: -20 }}
    >
      <div className="space-y-12">
        {/* Slider 1: Rooms */}
        <div>
          <label className="block text-gray-400 mb-4 text-lg">
            Number of Rooms: <span className="text-purple-400 font-bold">{data.rooms}</span>
          </label>
          <input 
            type="range" 
            min="1" 
            max="20" 
            value={data.rooms} 
            onChange={(e) => setData({...data, rooms: parseInt(e.target.value)})} 
            className="w-full h-1 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-purple-500" 
          />
          <div className="flex justify-between text-xs text-gray-600 mt-2">
            <span>1 room</span>
            <span>20 rooms</span>
          </div>
        </div>

        {/* Slider 2: Area */}
        <div>
          <label className="block text-gray-400 mb-4 text-lg">
            Square Meters: <span className="text-purple-400 font-bold">{data.area} m²</span>
          </label>
          <input 
            type="range" 
            min="20" 
            max="500" 
            value={data.area} 
            onChange={(e) => setData({...data, area: parseInt(e.target.value)})} 
            className="w-full h-1 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-purple-500" 
          />
          <div className="flex justify-between text-xs text-gray-600 mt-2">
            <span>20 m²</span>
            <span>500 m²</span>
          </div>
        </div>

        {/* Price Display */}
        <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 border border-purple-500/30 p-8 rounded-2xl text-center">
          <p className="text-gray-400 text-sm mb-2">Estimated Price</p>
          <h3 className="text-4xl font-bold text-white">{price} DT</h3>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-10">
          <button 
            onClick={back} 
            className="px-6 py-2 border border-white/10 rounded-xl text-gray-400 hover:bg-white/5 transition"
          >
            ‹ Previous
          </button>
          <button 
            onClick={next} 
            className="bg-gradient-to-r from-purple-600 to-blue-600 px-10 py-3 rounded-xl font-bold hover:scale-105 transition shadow-lg shadow-purple-500/20"
          >
            Next Step ›
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Step2;