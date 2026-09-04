import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, MessageCircle } from 'lucide-react';
import { contactInfo } from '../../data/mockData';
import { cn } from '../../lib/utils';
import logo from '../../assets/Logo.jpeg';

const navLinks = [
  { name: 'HOME', href: '#home' },
  { name: 'ABOUT', href: '#about' },
  { name: 'EQUIPMENT', href: '#equipment' },
  { name: 'RENTAL', href: '#rental' },
  { name: 'SERVICES', href: '#services' },
  { name: 'FAQ', href: '#faq' },
  { name: 'CONTACT', href: '#contact' }
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-white backdrop-blur-md border-b border-gray-100",
          isScrolled ? "py-2 md:py-4 shadow-sm" : "py-3 md:py-6"
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="container mx-auto px-4 md:px-6 lg:px-12 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex-shrink-0 z-50 flex items-center">
            <img src={logo} alt="Virutcham Elite" className="h-9 md:h-12 lg:h-16 w-auto object-contain" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className={cn(
                  "text-sm font-bold tracking-widest transition-colors",
                  "text-primary/80 hover:text-accent"
                )}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href={`https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, '')}`}
              target="_blank" rel="noreferrer"
              className={cn(
                "p-2 transition-colors cursor-none-hover",
                "text-primary hover:text-accent"
              )}
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <a 
              href="#contact"
              className={cn(
                "px-6 py-2.5 text-sm font-bold tracking-widest transition-colors cursor-none-hover rounded-lg shadow-sm hover:shadow-md",
                "bg-primary text-white hover:bg-accent"
              )}
            >
              REQUEST A QUOTE &rarr;
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="flex md:hidden z-50 p-2 -mr-2 items-center justify-center"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen 
              ? <X className="w-6 h-6" style={{ color: '#0A192F' }} /> 
              : <Menu className="w-6 h-6" style={{ color: '#0A192F' }} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Fullscreen Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-white flex flex-col justify-center px-8"
            initial={{ opacity: 0, clipPath: "circle(0% at 100% 0)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 100% 0)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 100% 0)" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <div className="flex flex-col space-y-6 mt-20">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="text-3xl font-bold text-primary tracking-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </motion.a>
              ))}
              
              <motion.div 
                className="pt-8 border-t border-gray-100 flex flex-col space-y-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <a 
                  href="#contact"
                  className="inline-block px-8 py-4 bg-primary text-white text-center font-semibold text-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  REQUEST A QUOTE &rarr;
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
