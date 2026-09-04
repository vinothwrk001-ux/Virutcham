import { motion } from 'framer-motion';
import { Stethoscope, ClipboardList, Package, Wrench } from 'lucide-react';

const services = [
  {
    icon: Package,
    title: "EQUIPMENT SALES",
    desc: "Premium medical equipment sales for hospitals, clinics, nursing homes, and individuals."
  },
  {
    icon: Stethoscope,
    title: "EQUIPMENT RENTAL",
    desc: "Our specialty. Flexible rental solutions for surgical and medical equipment."
  },
  {
    icon: Wrench,
    title: "MAINTENANCE & SERVICES",
    desc: "Comprehensive repair, maintenance, and service support for all medical equipment."
  },
  {
    icon: ClipboardList,
    title: "DOOR DELIVERY",
    desc: "Convenient door delivery services available across Tamilnadu (includes transportation charges)."
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 md:py-40 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-32">
          <motion.h2 
            className="text-4xl md:text-6xl font-bold tracking-tighter text-primary mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            More Than Equipment.
          </motion.h2>
          <motion.p 
            className="text-lg text-primary/60"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            We provide comprehensive solutions and support to ensure your healthcare environment is equipped properly.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1 }}
              className="p-8 border border-gray-100 hover:border-accent hover:shadow-[0_20px_40px_-15px_rgba(13,148,136,0.1)] transition-all duration-300 group cursor-default"
            >
              <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center mb-8 group-hover:bg-accent group-hover:text-white text-primary transition-colors duration-300">
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold tracking-widest uppercase mb-4 text-primary">
                {service.title}
              </h3>
              <p className="text-primary/60 text-sm leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
