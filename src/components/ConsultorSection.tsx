
import { motion } from 'framer-motion';
import { Users, Calculator } from 'lucide-react';

const ConsultorSection = () => {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: 0.3 + i * 0.2,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  };

  return (
    <section className="py-20 sm:py-28 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            className="space-y-8"
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
                Torne-se um <span className="bg-gradient-primary text-transparent bg-clip-text">Consultor MaquiPAY</span> e fique com até 60% do lucro de cada cliente
              </h2>
              <p className="text-lg text-text-secondary mb-8">
                Seja parte da nossa rede de parceiros e construa uma fonte de renda recorrente ajudando empresários a crescer.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                custom={0}
                variants={buttonVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="group relative overflow-hidden bg-gradient-primary text-white font-bold py-4 px-8 rounded-lg text-lg hover:scale-105 transform transition-all duration-300 flex items-center justify-center gap-3"
              >
                <Users className="w-6 h-6" />
                Para Consultores
                <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              </motion.button>
              
              <motion.button
                custom={1}
                variants={buttonVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="group relative overflow-hidden bg-surface text-text-primary font-bold py-4 px-8 rounded-lg text-lg border-2 border-secondary hover:border-primary hover:scale-105 transform transition-all duration-300 flex items-center justify-center gap-3"
              >
                <Calculator className="w-6 h-6" />
                Para Contadores
                <div className="absolute inset-0 bg-gradient-primary/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              </motion.button>
            </div>
          </motion.div>
          
          <motion.div 
            className="relative flex items-center justify-center"
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="relative">
              <img 
                src="https://i.imgur.com/y3kM3tB.png" 
                alt="Consultor MaquiPAY" 
                className="rounded-xl shadow-2xl max-w-full h-auto"
              />
              <div className="absolute -inset-4 bg-gradient-primary/20 rounded-xl blur-xl opacity-50"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ConsultorSection;
