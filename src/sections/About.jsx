import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import aboutImage from '../assets/About  1.png';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-40 bg-secondary relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Content Left */}
          <div className="lg:col-span-5 order-2 lg:order-1 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="flex items-center space-x-4 mb-8">
                <span className="text-xs font-bold tracking-widest text-accent uppercase">
                  01 &mdash; ABOUT VIRUTCHAM HEALTHCARE
                </span>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-tight mb-8 text-primary">
                Healthcare Equipment,<br />
                <span className="text-black/40">With Service at Heart.</span>
              </h2>
              
              <p className="text-lg text-primary/70 mb-10 max-w-lg leading-relaxed">
                With over 8 years of experience in the medical field, Virutcham Healthcare and Services is dedicated to providing premium service at affordable prices. Our core specialty lies in comprehensive equipment sales, dedicated services, and flexible rental solutions tailored to support hospitals, clinics, nursing homes, home patients, and individuals.
              </p>
              
              <div className="grid grid-cols-2 gap-8 pt-8 border-t border-gray-100">
                <div>
                  <h4 className="text-3xl font-bold text-accent mb-2">8 Years</h4>
                  <p className="text-sm text-primary/60">Of trusted medical service experience</p>
                </div>
                <div>
                  <h4 className="text-3xl font-bold text-accent mb-2">Service</h4>
                  <p className="text-sm text-primary/60">Support from enquiry to delivery</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Image Right (Asymmetric) */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex items-center justify-center">
            <motion.div 
              className="relative w-full aspect-[4/3] lg:aspect-[3/2] bg-white overflow-hidden rounded-3xl shadow-xl ml-auto lg:w-[90%]"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.img 
                src={aboutImage}
                alt="About Virutcham Healthcare" 
                className="w-full h-full object-cover object-center"
                initial={{ scale: 1.1 }}
                animate={isInView ? { scale: 1 } : { scale: 1.1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
              {/* Decorative Accent */}
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/90 backdrop-blur flex items-center justify-center p-6 text-white font-bold leading-tight">
                Premium Solutions.
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
