import { contactInfo } from '../../data/mockData';
import { Phone, Mail, MapPin } from 'lucide-react';
import logo from '../../assets/Logo.jpeg';

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div>
            <div className="bg-white inline-block p-2 rounded mb-4">
               <img src={logo} alt="Virutcham Elite" className="h-12 w-auto object-contain" />
            </div>
            <p className="text-white/60 mb-8 max-w-xs">
              Reliable Equipment. Better Care. Providing high-quality medical and surgical equipment with exceptional service across Tamilnadu. Available 24/7.
            </p>
            <div className="flex space-x-4">
              <a href={contactInfo.instagram} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent transition-colors">
                <span className="text-xs font-bold">IG</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold tracking-widest uppercase mb-6 text-white/40">Navigation</h4>
            <ul className="space-y-4">
              {['Home', 'About', 'Equipment', 'Rental', 'Services', 'FAQ', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-white/80 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-bold tracking-widest uppercase mb-6 text-white/40">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span className="text-white/80">{contactInfo.phone}</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span className="text-white/80">{contactInfo.email}</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span className="text-white/80">{contactInfo.address}</span>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="text-sm font-bold tracking-widest uppercase mb-6 text-white/40">Need Equipment?</h4>
            <p className="text-white/60 mb-6">Reach out to us to discuss your specific requirements.</p>
            <a 
              href="#contact"
              className="inline-block px-6 py-3 bg-white text-primary text-sm font-bold hover:bg-accent hover:text-white transition-colors w-full text-center"
            >
              REQUEST A QUOTE
            </a>
          </div>

        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-white/40">
          <p>&copy; 2017-{new Date().getFullYear()} Virutcham Healthcare and Services. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
