import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { contactInfo } from '../data/mockData';

export default function RentalSection() {
  const containerRef = useRef(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '', phone: '', equipment: '', date: '', duration: '', requirements: ''
  });

  const handleRentalSubmit = (e) => {
    e.preventDefault();
    
    const message = `*New Rental Request*
Name: ${formData.name}
Phone: ${formData.phone}
Equipment: ${formData.equipment}
Date: ${formData.date || 'N/A'}
Duration: ${formData.duration || 'N/A'}
Additional Requirements: ${formData.requirements || 'N/A'}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, '')}?text=${encodedMessage}`;
    
    setModalOpen(false);
    setFormData({ name: '', phone: '', equipment: '', date: '', duration: '', requirements: '' });
    window.open(whatsappUrl, '_blank');
  };

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  const steps = [
    { title: "SELECT", desc: "Choose your requirement." },
    { title: "ENQUIRE", desc: "Share your details." },
    { title: "CONFIRM", desc: "Discuss availability and rental terms." },
    { title: "RECEIVE", desc: "Coordinate delivery based on service terms." }
  ];

  return (
    <section id="rental" className="relative py-16 md:py-48 bg-primary overflow-hidden text-white">
      
      {/* Background Graphic - clipped to prevent mobile overflow */}
      <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none flex items-center justify-center overflow-hidden">
         <motion.div 
           className="w-[min(800px,100vw)] h-[min(800px,100vw)] rounded-full border border-white/20 border-dashed"
           style={{ rotate }}
         />
         <motion.div 
           className="absolute w-[min(1000px,120vw)] h-[min(1000px,120vw)] rounded-full border border-white/10"
           style={{ rotate: useTransform(scrollYProgress, [0, 1], [360, 0]) }}
         />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 border border-accent/30 bg-accent/10 text-accent text-xs font-bold tracking-widest uppercase mb-8"
          >
            MAJOR USP &mdash; SURGICAL RENTAL
          </motion.div>
          <motion.h2 
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Surgical Equipment,<br/>
            <span className="text-accent">When You Need It.</span>
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            If you need surgical equipment for a short period, this is a golden opportunity. We offer highly flexible options—customers can rent on a Daily, Weekly, Monthly, or Long-term basis according to their specific requirements.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-4"
          >
            <button 
              onClick={() => setModalOpen(true)}
              className="px-8 py-4 bg-accent text-white font-bold text-sm tracking-widest hover:bg-white hover:text-primary transition-colors cursor-none-hover w-full sm:w-auto"
            >
              ENQUIRE ABOUT RENTAL &rarr;
            </button>
          </motion.div>
          
          <motion.p 
            className="mt-6 text-xs text-white/30 uppercase tracking-widest"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            * Availability subject to equipment and requirement.
          </motion.p>
        </div>

        {/* WOW Animation Area - full height on desktop, compact on mobile */}
        <div className="relative max-w-5xl mx-auto h-auto md:h-[600px] flex items-center justify-center mb-6 md:mb-32" ref={containerRef}>
          {/* Central Image */}
          <motion.div 
            className="relative z-20 w-52 h-52 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary shadow-[0_0_50px_rgba(13,148,136,0.3)] bg-white p-3 md:p-4"
            style={{ scale }}
          >
            <img 
              src="https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=1000&auto=format&fit=crop" 
              alt="Surgical Equipment"
              className="w-full h-full object-cover rounded-full"
            />
          </motion.div>

          {/* Orbiting Steps */}
          {steps.map((step, i) => {
            const angle = (i * (360 / steps.length)) * (Math.PI / 180);
            const radius = 300; // Adjust based on screen size normally, hardcoded for demo
            
            return (
              <motion.div 
                key={i}
                className="absolute z-30 hidden md:block"
                style={{
                  top: `calc(50% + ${Math.sin(angle) * radius}px)`,
                  left: `calc(50% + ${Math.cos(angle) * radius}px)`,
                  x: '-50%',
                  y: '-50%'
                }}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: 0.4 + (i * 0.2), type: "spring" }}
              >
                <div className="bg-primary/90 backdrop-blur-md border border-white/10 p-4 rounded-lg w-48 shadow-xl text-center">
                  <div className="text-accent text-xs font-bold tracking-widest uppercase mb-2">{step.title}</div>
                  <div className="text-white/70 text-xs">{step.desc}</div>
                </div>
                {/* Connecting line */}
                <div className="absolute top-1/2 left-1/2 -z-10 w-[2px] bg-accent/30 origin-top"
                     style={{ 
                       height: `${radius - 192}px`, // 192 is half of the center image (384/2)
                       transform: `translate(-50%, 0) rotate(${angle * (180/Math.PI) + 90}deg)`
                     }} 
                />
              </motion.div>
            )
          })}
        </div>

        {/* Mobile Step List - visible only on mobile */}
        <div className="md:hidden mt-0 grid grid-cols-2 gap-4">
          {steps.map((step, i) => (
            <div key={i} className="bg-white/10 backdrop-blur-sm border border-white/10 p-4 rounded-lg text-center">
              <div className="text-accent text-xs font-bold tracking-widest uppercase mb-2">{step.title}</div>
              <div className="text-white/70 text-xs">{step.desc}</div>
            </div>
          ))}
        </div>



      </div>

      {/* Enquiry Modal */}
      <AnimatePresence>
        {modalOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setModalOpen(false)}
              className="fixed inset-0 z-[100] bg-primary/90 backdrop-blur-md cursor-none-hover"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[101] w-[95%] md:w-[600px] max-h-[90vh] bg-white text-primary rounded-xl overflow-y-auto"
            >
              <div className="p-6 md:p-12 relative">
                <button
                  onClick={() => setModalOpen(false)}
                  className="absolute top-6 right-6 p-2 hover:bg-supporting rounded-full transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
                
                <h3 className="text-3xl font-bold mb-2">Request Rental</h3>
                <p className="text-primary/60 mb-8">Fill out the form below and our team will contact you to discuss availability and requirements.</p>
                
                <form className="space-y-6" onSubmit={handleRentalSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold tracking-widest uppercase mb-2">Name</label>
                      <input type="text" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full bg-supporting border-none p-4 focus:ring-2 focus:ring-accent outline-none" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold tracking-widest uppercase mb-2">Phone</label>
                      <input type="tel" required value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="w-full bg-supporting border-none p-4 focus:ring-2 focus:ring-accent outline-none" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-xs font-bold tracking-widest uppercase mb-2">Equipment Required</label>
                    <input type="text" required value={formData.equipment} onChange={e => setFormData({...formData, equipment: e.target.value})} className="w-full bg-supporting border-none p-4 focus:ring-2 focus:ring-accent outline-none" placeholder="e.g. Surgical Equipment Suite" />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold tracking-widest uppercase mb-2">Required Date</label>
                      <input type="date" value={formData.date} onChange={e => setFormData({...formData, date: e.target.value})} className="w-full bg-supporting border-none p-4 focus:ring-2 focus:ring-accent outline-none" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold tracking-widest uppercase mb-2">Duration</label>
                      <input type="text" value={formData.duration} onChange={e => setFormData({...formData, duration: e.target.value})} className="w-full bg-supporting border-none p-4 focus:ring-2 focus:ring-accent outline-none" placeholder="e.g. 1 Week" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-xs font-bold tracking-widest uppercase mb-2">Additional Requirements</label>
                    <textarea rows="3" value={formData.requirements} onChange={e => setFormData({...formData, requirements: e.target.value})} className="w-full bg-supporting border-none p-4 focus:ring-2 focus:ring-accent outline-none"></textarea>
                  </div>
                  
                  <button type="submit" className="w-full py-4 bg-primary text-white font-bold tracking-widest text-sm uppercase hover:bg-accent transition-colors">
                    Submit Request &rarr;
                  </button>
                </form>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

    </section>
  );
}
