import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Preloader from './components/ui/Preloader';
import CustomCursor from './components/ui/CustomCursor';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import FloatingContact from './components/ui/FloatingContact';
import Hero from './sections/Hero';
import About from './sections/About';
import EquipmentSection from './sections/EquipmentSection';
import RentalSection from './sections/RentalSection';
import WhyChooseUs from './sections/WhyChooseUs';
import ServicesSection from './sections/ServicesSection';
import Gallery from './sections/Gallery';
import Testimonials from './sections/Testimonials';
import FAQ from './sections/FAQ';
import ContactSection from './sections/ContactSection';
import CtaSection from './sections/CtaSection';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <AnimatePresence>
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>
      
      {!loading && (
        <>
          <CustomCursor />
          <Navbar />
          <FloatingContact />
          
          <main className="min-h-screen bg-secondary">
            <Hero />
            <About />
            <EquipmentSection />
            <RentalSection />
            <ServicesSection />
            <WhyChooseUs />
            <Gallery />
            <Testimonials />
            <FAQ />
            <ContactSection />
            <CtaSection />
          </main>

          <Footer />
        </>
      )}
    </>
  );
}

export default App;
