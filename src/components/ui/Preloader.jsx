import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import logo from '../../assets/Logo.jpeg';

export default function Preloader({ onComplete }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-secondary"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
    >
      <div className="relative flex flex-col items-center">
        {/* Logo Image */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8"
        >
          <img src={logo} alt="Virutcham Elite" className="w-64 md:w-[400px] lg:w-[500px] h-auto object-contain" />
        </motion.div>

        {/* Animation Container */}
        <div className="relative w-48 h-px bg-supporting overflow-hidden">
          {/* Medical Pulse / ECG Line representation transforming to clean line */}
          <motion.div
            className="absolute top-0 left-0 h-full bg-accent"
            initial={{ width: "0%", left: "0%" }}
            animate={{ 
              width: ["0%", "40%", "100%", "100%"],
              left: ["0%", "20%", "0%", "0%"]
            }}
            transition={{ 
              duration: 1.5, 
              ease: "easeInOut",
              times: [0, 0.4, 0.8, 1]
            }}
          />
        </div>
      </div>
    </motion.div>
  );
}
