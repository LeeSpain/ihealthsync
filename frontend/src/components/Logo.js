import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Activity } from 'lucide-react';

const Logo = () => {
  // Enhanced pulse animation with brightness variation
  const pulseAnimation = {
    scale: [1, 1.2, 1],
    filter: ['brightness(1)', 'brightness(1.5)', 'brightness(1)'],
    transition: {
      duration: 1.2,
      repeat: Infinity,
      ease: "easeInOut",
      times: [0, 0.5, 1],
    }
  };

  return (
    <a href="/" className="no-underline">
      <motion.div 
        className="flex items-center space-x-2 p-1.5 cursor-pointer h-12"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        style={{ backgroundColor: '#008B8B' }}
      >
        <motion.div 
          className="relative" 
          animate={pulseAnimation}
          style={{ filter: 'drop-shadow(0 0 4px rgba(255,127,80,0.5))' }}
        >
          <Heart 
            className="w-6 h-6"
            style={{ 
              color: '#FF7F50',
              fill: '#FF7F50', // Make heart solid orange
            }} 
          />
          <Activity className="w-3 h-3 text-white absolute -bottom-1 -right-1" />
        </motion.div>

        <div className="flex items-center">
          <span className="text-xl md:text-2xl font-bold text-white tracking-tight">
            iHealth-<span style={{ color: '#FF7F50' }}>Sync</span>
          </span>
        </div>

        <div className="hidden md:flex items-center space-x-1.5">
          <div 
            className="w-8 h-0.5 rounded-full" 
            style={{ background: 'linear-gradient(to right, #FF7F50, rgba(255,127,80,0.7))' }} 
          />
          <div 
            className="w-1.5 h-1.5 rounded-full animate-pulse"
            style={{ backgroundColor: '#FF7F50' }} 
          />
        </div>
      </motion.div>
    </a>
  );
};

export default Logo;