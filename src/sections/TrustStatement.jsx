import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

const words = ["Quality.", "Reliability.", "Affordability.", "Service."];

export default function TrustStatement() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, margin: "-20%" });

  return (
    <section 
      ref={containerRef} 
      className="py-32 md:py-48 bg-primary text-white relative overflow-hidden"
    >
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
         <div className="absolute top-20 right-20 w-96 h-96 border border-white rounded-full" />
         <div className="absolute bottom-10 left-10 w-[500px] h-[500px] border border-white rounded-full" />
         {/* Simple Plus icon representation */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96">
            <div className="absolute top-1/2 left-0 w-full h-1 bg-white -translate-y-1/2" />
            <div className="absolute top-0 left-1/2 w-1 h-full bg-white -translate-x-1/2" />
         </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center text-center">
        {words.map((word, i) => (
          <div key={i} className="overflow-hidden pb-4 md:pb-8">
            <motion.h3 
              className="text-5xl md:text-8xl lg:text-[9rem] font-bold tracking-tighter leading-none"
              initial={{ opacity: 0, y: 100 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
              transition={{ 
                duration: 0.8, 
                delay: i * 0.15, 
                ease: [0.16, 1, 0.3, 1] 
              }}
              style={{
                color: i === 3 ? "var(--color-accent)" : "white"
              }}
            >
              {word}
            </motion.h3>
          </div>
        ))}
        
        <motion.p
          className="mt-16 text-lg md:text-xl text-white/60 max-w-2xl"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          We are committed to delivering dependable equipment that supports your needs, without compromising on quality or care.
        </motion.p>
      </div>
    </section>
  );
}
