import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const galleryImages = [
  "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1598256989800-fea5ce20ddee?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1583324113626-70df0f4deaab?q=80&w=1200&auto=format&fit=crop"
];

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [touchStart, setTouchStart] = useState(null);

  const nextImg = (e) => {
    e?.stopPropagation();
    setSelectedIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImg = (e) => {
    e?.stopPropagation();
    setSelectedIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.changedTouches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (touchStart === null) return;
    const diff = touchStart - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      diff > 0 ? nextImg(e) : prevImg(e);
    }
    setTouchStart(null);
  };

  return (
    <section className="py-24 md:py-40 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-primary">
            Equipment Gallery.
          </h2>
        </div>

        {/* Masonry-like Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative overflow-hidden bg-supporting group cursor-none-hover ${
                i === 0 || i === 3 ? "col-span-2 md:col-span-1 md:row-span-2 aspect-square md:aspect-[3/4]" : "aspect-[4/3]"
              }`}
              onClick={() => setSelectedIndex(i)}
              data-cursor="VIEW"
            >
              <img 
                src={img} 
                alt={`Gallery ${i}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Fullscreen Viewer */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] bg-primary/95 backdrop-blur-sm flex items-center justify-center cursor-none-hover"
            onClick={() => setSelectedIndex(null)}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <button className="absolute top-6 right-6 p-2 text-white/50 hover:text-white z-20">
              <X className="w-8 h-8" />
            </button>

            <div className="absolute top-6 left-6 text-white/50 font-bold tracking-widest text-sm z-20">
              0{selectedIndex + 1} / 0{galleryImages.length}
            </div>

            <button onClick={prevImg} className="absolute left-3 md:left-12 top-1/2 -translate-y-1/2 p-3 md:p-4 text-white/50 hover:text-white z-20 bg-white/10 rounded-full md:bg-transparent md:rounded-none">
              <ChevronLeft className="w-12 h-12" />
            </button>

            <button onClick={nextImg} className="absolute right-3 md:right-12 top-1/2 -translate-y-1/2 p-3 md:p-4 text-white/50 hover:text-white z-20 bg-white/10 rounded-full md:bg-transparent md:rounded-none">
              <ChevronRight className="w-12 h-12" />
            </button>

            <motion.div 
              key={selectedIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="w-[90vw] h-[80vh] md:w-[70vw] md:h-[80vh] relative flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={galleryImages[selectedIndex]} 
                alt="Fullscreen Preview" 
                className="max-w-full max-h-full object-contain shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
