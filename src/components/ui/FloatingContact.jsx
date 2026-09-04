import { MessageCircle, Phone, FileText } from 'lucide-react';
import { contactInfo } from '../../data/mockData';

export default function FloatingContact() {
  const whatsappUrl = `https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, '')}?text=Hello, I'm interested in Virutcham Elite medical equipment. I would like to know more about the available equipment and rental options.`;
  const phoneUrl = `tel:${contactInfo.phone.replace(/[^0-9+]/g, '')}`;

  return (
    <>
      {/* Desktop Floating Actions (hidden on mobile) */}
      <div className="fixed right-6 bottom-6 z-50 flex-col space-y-4 hidden md:flex">
        <a 
          href="#contact"
          className="w-14 h-14 bg-primary text-white rounded-full shadow-lg flex items-center justify-center hover:bg-accent transition-colors cursor-none-hover"
          title="Request Quote"
        >
          <FileText className="w-6 h-6" />
        </a>
        <a 
          href={phoneUrl}
          className="w-14 h-14 bg-primary text-white rounded-full shadow-lg flex items-center justify-center hover:bg-accent transition-colors cursor-none-hover"
          title="Call Us"
        >
          <Phone className="w-6 h-6" />
        </a>
        <a 
          href={whatsappUrl}
          target="_blank" rel="noreferrer"
          className="w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#1da851] transition-colors cursor-none-hover"
          title="WhatsApp"
        >
          <MessageCircle className="w-6 h-6" />
        </a>
      </div>

      {/* Mobile Floating Round Buttons — bottom-right, stacked vertically */}
      <div
        className="fixed right-4 z-50 flex flex-col space-y-3 md:hidden"
        style={{ bottom: `calc(1rem + env(safe-area-inset-bottom))` }}
      >
        {/* Quote */}
        <a
          href="#contact"
          className="w-13 h-13 w-[52px] h-[52px] bg-primary text-white rounded-full shadow-xl flex items-center justify-center active:scale-95 transition-transform"
          title="Request Quote"
        >
          <FileText className="w-5 h-5" />
        </a>

        {/* Call */}
        <a
          href={phoneUrl}
          className="w-[52px] h-[52px] bg-primary text-white rounded-full shadow-xl flex items-center justify-center active:scale-95 transition-transform"
          title="Call Us"
        >
          <Phone className="w-5 h-5" />
        </a>

        {/* WhatsApp */}
        <a
          href={whatsappUrl}
          target="_blank" rel="noreferrer"
          className="w-[52px] h-[52px] bg-[#25D366] text-white rounded-full shadow-xl flex items-center justify-center active:scale-95 transition-transform"
          title="WhatsApp"
        >
          <MessageCircle className="w-5 h-5" />
        </a>
      </div>
    </>
  );
}
