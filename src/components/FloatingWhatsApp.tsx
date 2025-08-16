import { MessageCircle } from 'lucide-react';

    const FloatingWhatsApp = () => {
      return (
        <a
          href="https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20as%20maquininhas%20MaquiPAY."
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 hover:scale-110 transition-all duration-300"
          aria-label="Fale conosco pelo WhatsApp"
        >
          <MessageCircle size={32} />
        </a>
      );
    };

    export default FloatingWhatsApp;
