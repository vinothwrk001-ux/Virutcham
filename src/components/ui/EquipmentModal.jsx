import { motion, AnimatePresence } from 'framer-motion';
import { X, Check } from 'lucide-react';
import { contactInfo } from '../../data/mockData';

export default function EquipmentModal({ isOpen, onClose, equipment }) {
  if (!equipment) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-primary/80 backdrop-blur-sm cursor-none-hover"
            data-cursor="CLOSE"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-0 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 z-[101] w-full md:w-[900px] max-h-[100dvh] md:h-[600px] bg-white md:rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/50 backdrop-blur-md rounded-full flex items-center justify-center text-primary hover:bg-white hover:text-accent transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Image Column */}
            <div className="w-full md:w-5/12 h-64 md:h-full bg-supporting relative shrink-0">
              <img
                src={equipment.image}
                alt={equipment.name}
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
            </div>

            {/* Details Column */}
            <div className="w-full md:w-7/12 flex flex-col h-full max-h-[100dvh] md:max-h-full">
              {/* Scrollable Content */}
              <div className="p-8 md:p-10 flex-1 overflow-y-auto">
                <div className="mb-2 text-xs font-bold tracking-widest text-accent uppercase">
                  {equipment.category}
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-primary mb-4 leading-tight">
                  {equipment.name}
                </h2>
                <p className="text-primary/70 mb-8 leading-relaxed">
                  {equipment.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-sm font-bold tracking-widest uppercase text-primary/40 mb-4">Available Products</h4>
                  <ul className="space-y-3">
                    {equipment.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="w-5 h-5 text-accent mr-3 shrink-0" />
                        <span className="text-primary/80 font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Fixed Bottom Actions */}
              <div className="p-8 md:p-10 pt-6 border-t border-gray-100 bg-white shrink-0">
                <div className="flex justify-between items-center text-sm font-bold tracking-widest uppercase mb-6">
                  <span className="text-primary/50">Availability</span>
                  <span className={equipment.availability === "Available" ? "text-accent" : "text-amber-500"}>
                    {equipment.availability}
                  </span>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="#contact"
                    onClick={onClose}
                    className="flex-1 py-4 bg-primary text-white text-center font-bold tracking-widest text-sm hover:bg-accent transition-all cursor-none-hover rounded-xl shadow-md hover:shadow-lg"
                  >
                    ENQUIRE NOW &rarr;
                  </a>
                  <a
                    href={`https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, '')}?text=Hi, I'm interested in the ${equipment.name}`}
                    target="_blank" rel="noreferrer"
                    className="flex-1 py-4 bg-[#25D366] text-white text-center font-bold tracking-widest text-sm hover:bg-[#1da851] transition-all cursor-none-hover rounded-xl shadow-md hover:shadow-lg"
                  >
                    WHATSAPP
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
