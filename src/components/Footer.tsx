import React from 'react';
import { Facebook, Instagram, Linkedin, Apple } from 'lucide-react';
import { RainbowButton } from "./ui/rainbow-button";

// Ícone da Play Store que você já tinha criado
const PlayStoreIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor">
    <path d="M325.1 256.2L132.3 449c-4.2 2.5-9.4-1.1-9.4-6.1V69.1c0-5 5.2-8.5 9.4-6.1l192.8 193.2z"/>
    <path d="M480.5 237.6L343.2 100.3c-14.9-14.9-38.4-12.3-50.1 5.4l-44.5 66.7 192.8 115.2 39.1-34.8c11.3-10.1 11.3-27.2 0-37.2z"/>
    <path d="M248.6 288.9l-44.5-66.7c-11.7-17.6-35.2-20.3-50.1-5.4L39.5 232.1c-11.3 10.1-11.3 27.2 0 37.2l39.1 34.8 170-115.2z"/>
    <path d="M343.2 411.7l-192.8-115.2 170 115.2 39.1 34.8c11.3-10.1 28.4 10.1 39.1 0l.7-.7c11.3-10.1 11.3-27.2 0-37.2L343.2 411.7z"/>
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-background text-text-secondary py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-x-8 gap-y-12 mb-8">

          {/* Coluna 1: Logo e Social */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-xl font-bold bg-gradient-primary text-transparent bg-clip-text mb-4">MaquiPAY</h3>
            <p className="text-sm">A solução completa de pagamentos para o seu negócio.</p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="hover:text-primary transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-primary transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-primary transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>

          {/* Coluna 2: Soluções */}
          <div>
            <h4 className="font-bold text-text-primary mb-4">Soluções</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">Maquininhas</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Link de Pagamento</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Pix</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Gestão</a></li>
            </ul>
          </div>

          {/* Coluna 3: Institucional */}
          <div>
            <h4 className="font-bold text-text-primary mb-4">Institucional</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Carreiras</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Imprensa</a></li>
            </ul>
          </div>

          {/* Coluna 4: Ajuda */}
          <div>
            <h4 className="font-bold text-text-primary mb-4">Ajuda</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">Central de Ajuda</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Taxas e Tarifas</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Fale Conosco</a></li>
            </ul>
          </div>

          {/* Coluna 5: Baixe o App (RESTAURADA) */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h4 className="font-bold text-text-primary mb-4">Baixe o App</h4>
            <div className="flex flex-col space-y-4 items-start">
              <RainbowButton 
                onClick={() => window.open("https://www.apple.com/app-store/", "_blank")}
                className="w-full max-w-xs flex items-center justify-start gap-3"
              >
                <Apple className="h-8 w-8" />
                <div className="text-left">
                  <p className="text-xs leading-tight">Baixar na</p>
                  <p className="text-lg font-semibold leading-tight">App Store</p>
                </div>
              </RainbowButton>
              <RainbowButton 
                onClick={() => window.open("https://play.google.com/store/apps/details?id=br.com.yuhuu.payments.maquipay&pli=1", "_blank")}
                className="w-full max-w-xs flex items-center justify-start gap-3"
              >
                <PlayStoreIcon className="h-7 w-7" />
                <div className="text-left">
                  <p className="text-xs leading-tight">DISPONÍVEL NO</p>
                  <p className="text-lg font-semibold leading-tight">Google Play</p>
                </div>
              </RainbowButton>
            </div>
          </div>

        </div>
        <div className="border-t border-surface pt-8 mt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} MaquiPAY. Todos os direitos reservados.</p>
          <p className="mt-2">MaquiPAY Instituição de Pagamento Ltda. CNPJ: 00.000.000/0001-00</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
