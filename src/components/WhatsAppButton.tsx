
import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const phoneNumber = '987654321';
  const whatsappUrl = `https://wa.me/51${phoneNumber}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-salon-secondary rounded-full flex items-center justify-center shadow-lg hover:bg-salon-accent transition-all duration-300 hover:scale-110"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle size={30} className="text-white" />
      <span className="sr-only">Contactar por WhatsApp</span>
    </a>
  );
};

export default WhatsAppButton;
