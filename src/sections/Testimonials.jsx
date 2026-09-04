import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: "[Customer Name]",
    org: "[Hospital / Clinic Name]",
    text: "The quality of surgical equipment provided by Virutcham Elite has been exceptional. Their rental service is highly reliable and always delivered on time."
  },
  {
    name: "[Customer Name]",
    org: "[Home Care Patient]",
    text: "Getting a hospital cot for home care was made incredibly easy. The team guided us to the right product and handled the setup perfectly."
  }
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 md:py-40 bg-primary text-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 flex flex-col items-center text-center">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-16 text-white">
          Trusted Through Service.
        </h2>

        <div className="relative w-full max-w-4xl mx-auto h-[300px]">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-12 text-[120px] leading-none font-serif text-accent/20">
            &ldquo;
          </div>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex flex-col items-center justify-center"
            >
              <p className="text-xl md:text-3xl text-white/90 leading-relaxed font-medium mb-10 max-w-3xl">
                {testimonials[current].text}
              </p>
              <div>
                <div className="text-sm font-bold tracking-widest uppercase text-accent mb-1">
                  {testimonials[current].name}
                </div>
                <div className="text-xs text-white/40 uppercase tracking-widest">
                  {testimonials[current].org}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-12 flex items-center space-x-8">
          <button onClick={prev} className="p-3 text-white/30 hover:text-white transition-colors border border-white/10 rounded-full hover:bg-white/5">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <div className="text-xs font-bold tracking-widest text-white/50">
            0{current + 1} / 0{testimonials.length}
          </div>
          <button onClick={next} className="p-3 text-white/30 hover:text-white transition-colors border border-white/10 rounded-full hover:bg-white/5">
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
        
        <p className="mt-8 text-xs text-white/20 uppercase tracking-widest">
          * Demo placeholders - Replace with actual customer testimonials
        </p>

      </div>
    </section>
  );
}
