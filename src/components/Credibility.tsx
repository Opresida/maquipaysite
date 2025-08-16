const logos = [
        { name: 'Visa', src: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg' },
        { name: 'Mastercard', src: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Mastercard_2019_logo.svg' },
        { name: 'Elo', src: 'https://upload.wikimedia.org/wikipedia/commons/5/54/Elo_logo.svg' },
        { name: 'American Express', src: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/American_Express_logo_%282018%29.svg' },
        { name: 'Hipercard', src: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Hipercard_logo_2019.svg' },
        { name: 'Pix', src: 'https://upload.wikimedia.org/wikipedia/commons/a/a2/Logo_do_PIX.svg' },
    ];

    const Credibility = () => {
      return (
        <section className="bg-surface py-12 sm:py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-center text-lg font-semibold text-text-secondary mb-8">
              Aceitamos as principais bandeiras do mercado
            </h2>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              {logos.map((logo) => (
                <img 
                  key={logo.name} 
                  src={logo.src} 
                  alt={logo.name} 
                  className="h-8 md:h-10 object-contain filter grayscale brightness-200 contrast-0 hover:filter-none transition-all duration-300"
                />
              ))}
            </div>
          </div>
        </section>
      );
    };

    export default Credibility;
