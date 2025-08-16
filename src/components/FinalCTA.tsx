const FinalCTA = () => {
      return (
        <section className="relative py-24 sm:py-32">
          <div className="absolute inset-0 bg-gradient-primary opacity-90"></div>
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="container mx-auto px-6 relative z-10 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Pronto para vender mais?</h2>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8">
              Junte-se a milhares de empreendedores e simplifique seus pagamentos.
            </p>
            <button className="bg-white text-primary font-bold py-4 px-10 rounded-lg text-lg hover:scale-105 transform transition-transform duration-300 shadow-lg">
              Quero ser MaquiPAY agora
            </button>
          </div>
        </section>
      );
    };

    export default FinalCTA;
