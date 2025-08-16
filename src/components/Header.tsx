import { useState } from 'react';
    import { Menu, X } from 'lucide-react';

    const Header = () => {
      const [isOpen, setIsOpen] = useState(false);

      return (
        <header className="bg-background/80 backdrop-blur-sm sticky top-0 z-50">
          <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-primary text-transparent bg-clip-text">
              MaquiPAY
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#solutions" className="text-text-secondary hover:text-text-primary transition-colors">Soluções</a>
              <a href="#benefits" className="text-text-secondary hover:text-text-primary transition-colors">Vantagens</a>
              <a href="#testimonials" className="text-text-secondary hover:text-text-primary transition-colors">Depoimentos</a>
              <a href="#" className="text-text-secondary hover:text-text-primary transition-colors">Ajuda</a>
            </nav>
            <div className="hidden md:flex items-center space-x-4">
                <a href="#" className="text-text-primary font-semibold">Login</a>
                <button className="bg-primary text-white font-bold py-2 px-6 rounded-lg hover:opacity-90 transition-opacity">
                    Peça já
                </button>
            </div>
            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
          {isOpen && (
            <div className="md:hidden bg-surface">
              <nav className="flex flex-col items-center space-y-4 py-4">
                <a href="#solutions" onClick={() => setIsOpen(false)} className="text-text-secondary hover:text-text-primary transition-colors">Soluções</a>
                <a href="#benefits" onClick={() => setIsOpen(false)} className="text-text-secondary hover:text-text-primary transition-colors">Vantagens</a>
                <a href="#testimonials" onClick={() => setIsOpen(false)} className="text-text-secondary hover:text-text-primary transition-colors">Depoimentos</a>
                <a href="#" onClick={() => setIsOpen(false)} className="text-text-secondary hover:text-text-primary transition-colors">Ajuda</a>
                <a href="#" onClick={() => setIsOpen(false)} className="text-text-primary font-semibold pt-4">Login</a>
                <button className="bg-primary text-white font-bold py-3 px-8 rounded-lg hover:opacity-90 transition-opacity w-11/12">
                    Peça já
                </button>
              </nav>
            </div>
          )}
        </header>
      );
    };

    export default Header;
