import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { equipmentData } from '../data/mockData';
import EquipmentModal from '../components/ui/EquipmentModal';
import { cn } from '../lib/utils';

const categories = ["ALL", "HOSPITAL BEDS", "ACCESSORIES", "WHEELCHAIRS", "MOBILITY", "TOILET CARE", "RESPIRATORY", "MONITORING", "STRETCHERS", "FURNITURE", "OTHER"];

export default function EquipmentSection() {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [selectedEquipment, setSelectedEquipment] = useState(null);

  const filteredEquipment = activeCategory === "ALL" 
    ? equipmentData 
    : equipmentData.filter(item => item.category === activeCategory);

  return (
    <section id="equipment" className="py-16 md:py-40 bg-secondary">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-20 gap-6 md:gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-primary mb-6">
              Explore Our Equipment
            </h2>
            <p className="text-lg text-primary/60">
              Quality medical equipment selected to meet professional standards and practical care needs.
            </p>
          </div>
          
          {/* Filters - horizontally scrollable on mobile */}
          <div className="-mx-6 md:mx-0 px-6 md:px-0 overflow-x-auto pb-2 md:pb-0">
            <div className="flex gap-2 min-w-max md:min-w-0 md:flex-wrap">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-6 py-3 text-xs font-bold tracking-widest uppercase transition-all border",
                  activeCategory === category 
                    ? "bg-primary text-white border-primary" 
                    : "bg-transparent text-primary/50 border-gray-200 hover:border-primary/30 hover:text-primary"
                )}
              >
                {category === "ALL" ? category : category.split(' ')[0]}
              </button>
            ))}
            </div>
          </div>
        </div>

        {/* Equipment List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
          <AnimatePresence mode="popLayout">
            {filteredEquipment.map((item, index) => (
              <motion.div 
                key={item.id}
                layout
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, margin: "-100px" }}
                className="flex flex-col gap-8 group cursor-pointer"
                onClick={() => setSelectedEquipment(item)}
              >
                {/* Image Panel */}
                <div className="w-full relative aspect-[4/3] overflow-hidden bg-supporting">
                  <motion.div 
                    className="absolute inset-0 z-10 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-500"
                  />
                  <motion.img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Hover Border Effect */}
                  <div className="absolute inset-6 border border-white/0 group-hover:border-white/50 transition-colors duration-500 z-20 pointer-events-none mix-blend-overlay" />
                  
                  {/* Subtle 'Explore' label */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none hidden md:block">
                     <span className="px-6 py-3 bg-white text-primary text-xs font-bold tracking-widest uppercase">
                        Explore
                     </span>
                  </div>
                </div>

                {/* Content Panel */}
                <div className="w-full flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex items-baseline space-x-4 mb-4">
                      <span className="text-2xl font-light text-primary/30">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="text-xs font-bold tracking-widest text-accent uppercase">
                        {item.category}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-primary mb-4 group-hover:text-accent transition-colors duration-300">
                      {item.name}
                    </h3>
                    
                    <p className="text-primary/70 mb-8 text-base leading-relaxed line-clamp-3">
                      {item.description}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between border-t border-gray-100 pt-6 mt-auto">
                    <div className="flex flex-col">
                      <span className="text-xs font-bold tracking-widest uppercase text-primary/40 mb-1">
                        Status
                      </span>
                      <span className="text-sm font-bold text-primary">
                        {item.availability}
                      </span>
                    </div>
                    
                    <div className="flex items-center text-sm font-bold tracking-widest uppercase text-primary group-hover:text-accent transition-colors">
                      VIEW DETAILS 
                      <motion.span 
                        className="ml-2 inline-block"
                        initial={{ x: 0 }}
                        whileHover={{ x: 5 }}
                      >
                        &rarr;
                      </motion.span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <EquipmentModal 
        isOpen={!!selectedEquipment} 
        onClose={() => setSelectedEquipment(null)} 
        equipment={selectedEquipment} 
      />
    </section>
  );
}
