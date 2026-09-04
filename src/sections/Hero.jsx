import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import heroImage from '../assets/Home Banner.png';
import mobileBg from '../assets/Mobile Background.png';

export default function Hero() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section 
      ref={containerRef}
      id="home"
      className="relative h-[calc(100svh-60px)] md:h-[calc(100vh-7rem)] mt-[60px] md:mt-28 w-full overflow-hidden bg-primary text-white flex items-center"
    >
      {/* ── MOBILE BANNER (hidden on md+) ── */}
      <motion.div
        className="absolute inset-0 z-0 md:hidden flex flex-col items-center pt-24 px-6 text-center"
        style={{ opacity, scale }}
        initial={{ scale: 1.04 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <div className="absolute inset-0 z-0 bg-primary/20">
          <img
            src={mobileBg}
            alt="Virutcham Elite Mobile Background"
            className="w-full h-full object-cover object-bottom"
          />
          {/* Subtle gradient overlay to make text pop even more */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A192F]/80 via-transparent to-[#0A192F]/90" />
        </div>
        
        <div className="relative z-10 flex flex-col items-center w-full mt-4">
          <div className="w-12 h-1 bg-accent mb-6 rounded-full" />
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight mb-4 text-white">
            Reliable Equipment.<br/>
            <span className="text-white">Better Care.</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/80 font-medium">
            Virutcham <span className="text-white/60 font-normal">Elite Healthcare</span>
          </p>
        </div>
      </motion.div>

      {/* ── DESKTOP BANNER (hidden below md) ── */}
      <motion.div
        className="absolute inset-0 z-0 hidden md:block cursor-pointer"
        style={{ y, opacity, scale }}
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        onClick={() => document.getElementById('equipment')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <img 
          src={heroImage}
          alt="Virutcham Elite Home Banner"
          className="absolute w-full object-cover object-center"
          style={{ height: 'calc(100% + 96px)', top: '-96px' }}
        />
      </motion.div>
    </section>
  );
}
