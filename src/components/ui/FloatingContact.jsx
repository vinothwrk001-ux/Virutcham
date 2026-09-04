import { MessageCircle, Phone, FileText } from 'lucide-react';
import { contactInfo } from '../../data/mockData';

export default function FloatingContact() {
  const whatsappUrl = `https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, '')}?text=Hello, I'm interested in Virutcham Elite medical equipment. I would like to know more about the available equipment and rental options.`;
  const phoneUrl = `tel:${contactInfo.phone.replace(/[^0-9+]/g, '')}`;

  return (
    <>
      {/* Desktop Floating Actions */}
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

      {/* Mobile Sticky Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-[0_-10px_30px_rgba(0,0,0,0.05)] md:hidden">
        <div className="flex h-16">
          <a 
            href={phoneUrl}
            className="flex-1 flex items-center justify-center space-x-2 text-primary border-r border-gray-200"
          >
            <Phone className="w-5 h-5" />
            <span className="text-xs font-bold tracking-widest uppercase">Call</span>
          </a>
          <a 
            href={whatsappUrl}
            target="_blank" rel="noreferrer"
            className="flex-[1.5] flex items-center justify-center space-x-2 bg-[#25D366] text-white"
          >
            <MessageCircle className="w-5 h-5" />
            <span className="text-xs font-bold tracking-widest uppercase">WhatsApp</span>
          </a>
          <a 
            href="#contact"
            className="flex-[1.5] flex items-center justify-center space-x-2 bg-primary text-white"
          >
            <span className="text-xs font-bold tracking-widest uppercase">Quote &rarr;</span>
          </a>
        </div>
      </div>
    </>
  );
}
