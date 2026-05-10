import { motion } from "framer-motion";
import { HoverCards } from "../HoverCard";
const Step1 = ({ next, data, setData }) => {
  
  const cities = [
    { id: 'sfax', title: 'Sfax', price: 'Tunisia' },
    { id: 'sousse', title: 'Sousse', price: 'Tunisia' },
  ];

  const services = [
    { id: 1, title: 'Residential Cleaning', price: 'From 50 DT' },
    { id: 2, title: 'Office Cleaning', price: 'From 80 DT' },
    { id: 3, title: 'Deep Clean', price: 'From 120 DT' },
    { id: 4, title: 'Post-Construction', price: 'From 150 DT' },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="bg-[#0c0c0e] border border-white/5 p-8 rounded-[32px] shadow-2xl">
        
        <div className="mb-10">
          <h2 className="text-white text-lg font-semibold mb-6 ml-1">Select City</h2>
          <HoverCards className='focus:bg-brand-purpleLight'
            items={cities} 
            selectedId={data.city} 
            onSelect={(id) => setData({...data, city: id})} 
          />
        </div>

        <div className="mb-6">
          <h2 className="text-white text-lg font-semibold mb-6 ml-1">Select Service Type</h2>
          <HoverCards 
            items={services} 
            selectedId={data.service} 
            onSelect={(title) => setData({...data, service: title})} 
          />
        </div>
      </div>

      <div className="flex justify-end mt-8">
        <button 
          onClick={next}
          disabled={!data.city || !data.service}
          className={`group relative flex items-center gap-2 px-8 py-3 rounded-2xl font-bold transition-all duration-300 ${
            data.city && data.service 
            ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:scale-105 active:scale-95' 
            : 'bg-gray-800 text-gray-500 cursor-not-allowed opacity-50'
          }`}
        >
          Next
          <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Step1;