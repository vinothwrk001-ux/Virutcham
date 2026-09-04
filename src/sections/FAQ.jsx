import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { faqData } from '../data/mockData';
import { cn } from '../lib/utils';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-16 md:py-40 bg-supporting">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-16">
        
        <div className="w-full md:w-1/3">
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-primary mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Frequently<br/>Asked Questions.
          </motion.h2>
        </div>

        <div className="w-full md:w-2/3">
          <div className="border-t border-gray-300/50">
            {faqData.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={index} className="border-b border-gray-300/50">
                  <button
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className="w-full py-8 flex items-center justify-between text-left focus:outline-none"
                  >
                    <span className={cn(
                      "text-lg md:text-xl font-bold pr-8 transition-colors",
                      isOpen ? "text-accent" : "text-primary"
                    )}>
                      {faq.question}
                    </span>
                    <span className="flex-shrink-0 w-8 h-8 rounded-full border border-primary/20 flex items-center justify-center text-primary">
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>
                  
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pb-8 text-primary/70 text-lg leading-relaxed max-w-2xl">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
