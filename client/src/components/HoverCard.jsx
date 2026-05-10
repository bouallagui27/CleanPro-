import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const HoverCards = ({ items, onSelect, selectedId }) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-10">
      {items.map((item, idx) => (
        <div
          key={item.id}
          className="relative group block p-2 h-full w-full cursor-none"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
          onClick={() => onSelect(item.id)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-brand-purple/20 block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.15 } }}
                exit={{ opacity: 1, transition: { duration: 0.15, delay: 0.2 } }}
              />
            )}
          </AnimatePresence>

<div className={`relative z-20 rounded-2xl h-full w-full p-4 overflow-hidden border transition-all duration-500 
  ${selectedId === item.id 
    ? 'bg-gradient-to-t from-brand-purple to-brand-purpleLight border-brand-purpleLight shadow-[0_0_30px_rgba(168,85,247,0.4)]' 
    : 'bg-[#121217] border-white/10 group-hover:border-white/20'}`}>
    
    <div className="p-4 relative z-30">
      <h4 className={`font-bold text-lg transition-colors duration-300 ${selectedId === item.id ? 'text-white' : 'text-white'}`}>
        {item.title}
      </h4>
      <p className={`text-sm transition-colors duration-300 ${selectedId === item.id ? 'text-white/90' : 'text-gray-400'}`}>
        {item.price}
      </p>
    </div>

    {selectedId === item.id && (
      <div className="absolute top-0 left-0 w-full h-full bg-white/5 pointer-events-none" />
    )}
</div>
        </div>
      ))}
    </div>
  );
};