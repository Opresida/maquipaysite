import { Facebook, Instagram, Linkedin } from 'lucide-react';

    const Footer = () => {
      return (
        <footer className="bg-background text-text-secondary py-16">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-bold bg-gradient-primary text-transparent bg-clip-text mb-4">MaquiPAY</h3>
                <p className="text-sm">A solução completa de pagamentos para o seu negócio.</p>
                <div className="flex space-x-4 mt-4">
                  <a href="#" className="hover:text-primary transition-colors"><Facebook size={20} /></a>
                  <a href="#" className="hover:text-primary transition-colors"><Instagram size={20} /></a>
                  <a href="#" className="hover:text-primary transition-colors"><Linkedin size={20} /></a>
                </div>
              </div>
              <div>
                <h4 className="font-bold text-text-primary mb-4">Soluções</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="hover:text-primary transition-colors">Maquininhas</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Link de Pagamento</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Pix</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Gestão</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-text-primary mb-4">Institucional</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="hover:text-primary transition-colors">Sobre Nós</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Carreiras</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Imprensa</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-text-primary mb-4">Ajuda</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="hover:text-primary transition-colors">Central de Ajuda</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Taxas e Tarifas</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Fale Conosco</a></li>
                </ul>
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
