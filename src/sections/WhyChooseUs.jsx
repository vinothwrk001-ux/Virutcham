import { motion } from 'framer-motion';

const reasons = [
  { title: "RELIABLE", desc: "Focused on dependable equipment and service." },
  { title: "AFFORDABLE", desc: "Solutions with value in mind." },
  { title: "QUALITY", desc: "Equipment selected with quality as a priority." },
  { title: "SERVICE", desc: "Support from enquiry to fulfilment." },
  { title: "FLEXIBLE", desc: "Rental options for applicable surgical equipment." }
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 md:py-40 bg-secondary relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-20">
          <motion.h2 
            className="text-4xl md:text-6xl font-bold tracking-tighter text-primary mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            Why Virutcham Elite?
          </motion.h2>
          <motion.p
             className="text-lg text-primary/60 max-w-2xl"
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ delay: 0.1 }}
          >
             Virutcham Elite is your trusted partner in healthcare. We provide high-quality medical equipment with a focus on reliability, affordability and excellent service.
          </motion.p>
        </div>

        <div className="space-y-0">
          {reasons.map((reason, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1 }}
              className="group border-t border-gray-200 py-8 md:py-12 flex flex-col md:flex-row md:items-center justify-between cursor-default hover:bg-gray-50 transition-colors px-4 -mx-4"
            >
              <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary/30 group-hover:text-accent transition-colors duration-500 mb-4 md:mb-0 w-full md:w-1/2">
                {reason.title}
              </h3>
              <p className="text-lg md:text-xl text-primary/70 w-full md:w-1/2 md:text-right font-medium">
                {reason.desc}
              </p>
            </motion.div>
          ))}
          <div className="border-t border-gray-200"></div>
        </div>
      </div>
    </section>
  );
}
