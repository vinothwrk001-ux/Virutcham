import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import heroImage from '../assets/Home Banner.png';
import mobileBanner from '../assets/Mobile Banner.jpeg';

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
        className="absolute inset-0 z-0 md:hidden"
        style={{ opacity, scale }}
        initial={{ scale: 1.04 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <img
          src={mobileBanner}
          alt="Virutcham Elite Mobile Banner"
          className="w-full h-full object-cover object-bottom"
        />
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
