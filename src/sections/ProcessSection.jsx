import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const steps = [
  { id: "01", title: "TELL US WHAT YOU NEED" },
  { id: "02", title: "DISCUSS YOUR REQUIREMENT" },
  { id: "03", title: "CHECK AVAILABLE OPTIONS" },
  { id: "04", title: "CONFIRM" },
  { id: "05", title: "SERVICE / DELIVERY" }
];

export default function ProcessSection() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="py-24 md:py-40 bg-white relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-24 md:mb-32">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-primary mb-4">
            From Enquiry to Equipment.
          </h2>
          <p className="text-xs font-bold tracking-widest text-primary/40 uppercase">
            Sample Process
          </p>
        </div>

        <div className="relative">
          {/* Background Line */}
          <div className="absolute top-8 left-0 w-full h-[2px] bg-gray-100 hidden md:block" />
          
          {/* Animated Progress Line */}
          <motion.div 
            className="absolute top-8 left-0 h-[2px] bg-accent hidden md:block origin-left z-10"
            style={{ width: lineWidth }}
          />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4 relative z-20">
            {steps.map((step, i) => {
              // Calculate individual step activation
              const stepStart = i * (1 / (steps.length - 1));
              const isActive = useTransform(scrollYProgress, pos => pos >= stepStart - 0.1);
              
              return (
                <div key={step.id} className="flex flex-row md:flex-col items-center md:items-start group">
                  {/* Step Icon / Dot */}
                  <div className="mr-6 md:mr-0 md:mb-8 relative flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-white border-2 border-gray-100 flex items-center justify-center transition-colors duration-300">
                       <motion.div
                          className="absolute inset-0 rounded-full border-2 border-accent"
                          initial={{ opacity: 0 }}
                          style={{ opacity: isActive }}
                       />
                       <span className="text-sm font-bold text-primary/30 group-hover:text-primary transition-colors">
                          {step.id}
                       </span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div>
                    <h4 className="text-sm md:text-xs lg:text-sm font-bold tracking-widest uppercase text-primary">
                      {step.title}
                    </h4>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
