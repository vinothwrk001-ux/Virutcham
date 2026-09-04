import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import heroImage from '../assets/Desktop_Hero_Final.png';
import mobileBanner from '../assets/Mobile_Hero_Final.png';

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
          className="w-full h-full object-cover object-top"
        />
      </motion.div>

      {/* ── MOBILE CTA BUTTONS (absolute over banner, hidden on md+) ── */}
      <div className="absolute bottom-[12%] left-0 right-0 z-10 md:hidden flex flex-col gap-3 px-14">
        <a
          href="#equipment"
          className="w-full py-2.5 text-center text-[10px] font-bold tracking-widest uppercase text-white border border-[#B8924A] bg-[#B8924A]/80 hover:bg-[#B8924A] transition-colors rounded-xl"
          style={{ backdropFilter: 'blur(4px)' }}
        >
          EXPLORE EQUIPMENT →
        </a>
        <a
          href="#rental"
          className="w-full py-2.5 text-center text-[10px] font-bold tracking-widest uppercase text-white border border-white/50 bg-transparent hover:bg-white/10 transition-colors rounded-xl"
          style={{ backdropFilter: 'blur(4px)' }}
        >
          RENT SURGICAL EQUIPMENT →
        </a>
      </div>

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
          className="w-full h-full object-cover object-center"
        />
      </motion.div>
      {/* ── DESKTOP CTA BUTTONS (hidden on mobile) ── */}
      <div className="absolute bottom-[14%] left-[3%] z-10 hidden md:flex gap-4">
        <a
          href="#equipment"
          className="px-7 py-4 text-xs font-bold tracking-widest uppercase text-white border border-[#B8924A] bg-[#B8924A]/80 hover:bg-[#B8924A] transition-colors rounded-xl"
          style={{ backdropFilter: 'blur(4px)' }}
        >
          EXPLORE EQUIPMENT →
        </a>
        <a
          href="#rental"
          className="px-7 py-4 text-xs font-bold tracking-widest uppercase text-white border border-white/50 bg-transparent hover:bg-white/10 transition-colors rounded-xl"
          style={{ backdropFilter: 'blur(4px)' }}
        >
          RENT SURGICAL EQUIPMENT →
        </a>
      </div>
    </section>
  );
}
