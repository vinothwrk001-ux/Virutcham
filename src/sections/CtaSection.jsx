import { motion } from 'framer-motion';

export default function CtaSection() {
  return (
    <section className="relative py-32 md:py-48 bg-primary overflow-hidden flex items-center justify-center text-center">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-20 mix-blend-luminosity">
        <img 
          src="https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2000&auto=format&fit=crop" 
          alt="Medical Environment" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-primary/80" />

      {/* Animated Line */}
      <motion.div 
        className="absolute top-0 left-1/2 w-px h-full bg-accent/30 hidden md:block"
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.h2 
          className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Let's Find the<br/>Right Solution.
        </motion.h2>
        
        <motion.p 
          className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Explore equipment and rental options based on your specific requirements. We are ready to assist.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <a 
            href="#contact"
            className="w-full sm:w-auto px-10 py-5 bg-white text-primary text-sm font-bold tracking-widest hover:bg-accent hover:text-white transition-colors cursor-none-hover"
          >
            REQUEST A QUOTE &rarr;
          </a>
          <a 
            href="tel:+919876543210"
            className="w-full sm:w-auto px-10 py-5 bg-transparent border border-white/20 text-white text-sm font-bold tracking-widest hover:bg-white/10 transition-colors cursor-none-hover"
          >
            CALL US
          </a>
        </motion.div>
      </div>
    </section>
  );
}
