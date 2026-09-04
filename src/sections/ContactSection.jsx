import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';
import { contactInfo } from '../data/mockData';

export default function ContactSection() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '', phone: '', email: '',
    category: '', service: '',
    equipment: '', quantity: '', date: '', location: '', message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const totalSteps = 5;

  const updateForm = (field, value) => setFormData(prev => ({ ...prev, [field]: value }));
  
  const nextStep = (e) => {
    e?.preventDefault();
    if (step < totalSteps) setStep(step + 1);
  };
  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };
  const submitForm = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    
    const message = `*New Enquiry from Website*
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email || 'N/A'}
Category: ${formData.category || 'N/A'}
Service: ${formData.service || 'N/A'}
Equipment: ${formData.equipment || 'N/A'}
Quantity: ${formData.quantity || 'N/A'}
Date: ${formData.date || 'N/A'}
Location: ${formData.location}
Additional Msg: ${formData.message || 'N/A'}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, '')}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  const formVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 }
  };

  return (
    <section id="contact" className="py-24 md:py-40 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
          
          {/* Left Text */}
          <div>
            <motion.h2 
              className="text-4xl md:text-6xl font-bold tracking-tighter text-primary mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Looking for the<br/>Right Equipment?
            </motion.h2>
            <motion.p 
              className="text-lg md:text-xl text-primary/60 max-w-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Tell us what you need and our team can help you explore the available options.
            </motion.p>
          </div>

          {/* Right Form */}
          <div className="bg-secondary p-8 md:p-12 border border-gray-200/50 shadow-sm relative overflow-hidden min-h-[500px]">
            {/* Progress Bar */}
            {!isSubmitted && (
              <div className="absolute top-0 left-0 w-full h-1 bg-gray-200">
                <motion.div 
                  className="h-full bg-accent"
                  initial={{ width: 0 }}
                  animate={{ width: `${(step / totalSteps) * 100}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            )}

            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center h-full text-center py-20"
                >
                  <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mb-8 relative">
                     <motion.div
                       initial={{ pathLength: 0 }}
                       animate={{ pathLength: 1 }}
                       transition={{ duration: 0.8, delay: 0.2 }}
                     >
                       <Check className="w-10 h-10 text-accent" />
                     </motion.div>
                  </div>
                  <h3 className="text-3xl font-bold text-primary mb-4">Thank You.</h3>
                  <p className="text-primary/60">Your enquiry has been received.<br/>Our team will contact you shortly.</p>
                </motion.div>
              ) : (
                <motion.div
                  key={step}
                  variants={formVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{ duration: 0.3 }}
                  className="h-full flex flex-col"
                >
                  <div className="mb-8">
                    <span className="text-xs font-bold tracking-widest text-primary/40 uppercase mb-2 block">
                      STEP 0{step} OF 0{totalSteps}
                    </span>
                    <h3 className="text-2xl font-bold text-primary">
                      {step === 1 && "Your Details"}
                      {step === 2 && "Requirement Category"}
                      {step === 3 && "Service Type"}
                      {step === 4 && "Requirement Details"}
                      {step === 5 && "Review Enquiry"}
                    </h3>
                  </div>

                  <form onSubmit={step === totalSteps ? submitForm : nextStep} className="flex-1 flex flex-col">
                    
                    {step === 1 && (
                      <div className="space-y-6">
                        <input type="text" placeholder="Name" required value={formData.name} onChange={e => updateForm('name', e.target.value)} className="w-full border-b border-gray-300 py-4 bg-transparent focus:outline-none focus:border-accent text-primary placeholder:text-primary/30" />
                        <input type="tel" placeholder="Phone" required value={formData.phone} onChange={e => updateForm('phone', e.target.value)} className="w-full border-b border-gray-300 py-4 bg-transparent focus:outline-none focus:border-accent text-primary placeholder:text-primary/30" />
                        <input type="email" placeholder="Email (Optional)" value={formData.email} onChange={e => updateForm('email', e.target.value)} className="w-full border-b border-gray-300 py-4 bg-transparent focus:outline-none focus:border-accent text-primary placeholder:text-primary/30" />
                      </div>
                    )}

                    {step === 2 && (
                      <div className="space-y-4">
                        {["Hospital Cots", "Wheelchairs", "Oxygen Equipment", "Surgical Equipment", "Other"].map(cat => (
                          <label key={cat} className={`flex items-center p-4 border cursor-pointer transition-colors ${formData.category === cat ? 'border-accent bg-accent/5 text-accent' : 'border-gray-200 text-primary hover:border-accent/50'}`}>
                            <input type="radio" name="category" value={cat} checked={formData.category === cat} onChange={e => updateForm('category', e.target.value)} className="hidden" />
                            <span className="font-bold text-sm tracking-widest uppercase">{cat}</span>
                          </label>
                        ))}
                      </div>
                    )}

                    {step === 3 && (
                      <div className="space-y-4">
                        {["Purchase", "Rental", "Not Sure"].map(srv => (
                          <label key={srv} className={`flex items-center p-4 border cursor-pointer transition-colors ${formData.service === srv ? 'border-accent bg-accent/5 text-accent' : 'border-gray-200 text-primary hover:border-accent/50'}`}>
                            <input type="radio" name="service" value={srv} checked={formData.service === srv} onChange={e => updateForm('service', e.target.value)} className="hidden" />
                            <span className="font-bold text-sm tracking-widest uppercase">{srv}</span>
                          </label>
                        ))}
                      </div>
                    )}

                    {step === 4 && (
                      <div className="space-y-6">
                        <input type="text" placeholder="Specific Equipment Name (If known)" value={formData.equipment} onChange={e => updateForm('equipment', e.target.value)} className="w-full border-b border-gray-300 py-4 bg-transparent focus:outline-none focus:border-accent text-primary placeholder:text-primary/30" />
                        <div className="flex space-x-6">
                          <input type="text" placeholder="Quantity" value={formData.quantity} onChange={e => updateForm('quantity', e.target.value)} className="w-1/2 border-b border-gray-300 py-4 bg-transparent focus:outline-none focus:border-accent text-primary placeholder:text-primary/30" />
                          <input type="date" placeholder="Required Date" value={formData.date} onChange={e => updateForm('date', e.target.value)} className="w-1/2 border-b border-gray-300 py-4 bg-transparent focus:outline-none focus:border-accent text-primary placeholder:text-primary/30 text-sm" />
                        </div>
                        <input type="text" placeholder="Location / City" required value={formData.location} onChange={e => updateForm('location', e.target.value)} className="w-full border-b border-gray-300 py-4 bg-transparent focus:outline-none focus:border-accent text-primary placeholder:text-primary/30" />
                        <textarea placeholder="Any additional requirements?" rows={2} value={formData.message} onChange={e => updateForm('message', e.target.value)} className="w-full border-b border-gray-300 py-4 bg-transparent focus:outline-none focus:border-accent text-primary placeholder:text-primary/30"></textarea>
                      </div>
                    )}

                    {step === 5 && (
                      <div className="space-y-6 flex-1 text-sm text-primary/70 bg-white p-6 border border-gray-100">
                        <div className="grid grid-cols-2 gap-y-4">
                          <div className="font-bold">Name:</div><div>{formData.name}</div>
                          <div className="font-bold">Phone:</div><div>{formData.phone}</div>
                          <div className="font-bold">Category:</div><div>{formData.category || '-'}</div>
                          <div className="font-bold">Service:</div><div>{formData.service || '-'}</div>
                          <div className="font-bold">Location:</div><div>{formData.location}</div>
                        </div>
                      </div>
                    )}

                    <div className="mt-auto pt-8 flex justify-between items-center">
                      {step > 1 ? (
                        <button type="button" onClick={prevStep} className="text-sm font-bold tracking-widest uppercase text-primary/50 hover:text-primary">
                          Back
                        </button>
                      ) : <div></div>}
                      
                      <button type="submit" className="px-8 py-4 bg-primary text-white text-sm font-bold tracking-widest uppercase hover:bg-accent transition-colors cursor-none-hover">
                        {step === totalSteps ? 'SUBMIT ENQUIRY' : 'NEXT STEP'} &rarr;
                      </button>
                    </div>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
