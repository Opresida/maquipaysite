import { Zap, DollarSign, Headset } from 'lucide-react';
import { motion } from 'framer-motion';

const benefits = [
  {
    icon: Zap,
    title: 'Dinheiro na conta em 1 dia',
    description: 'Vendeu, recebeu. Sem espera, sem complicação. Seu dinheiro disponível no próximo dia útil.',
  },
  {
    icon: DollarSign,
    title: 'Taxas que cabem no seu bolso',
    description: 'Oferecemos as taxas mais competitivas do mercado para você lucrar mais em cada venda.',
  },
  {
    icon: Headset,
    title: 'Suporte rápido e humanizado',
    description: 'Nossa equipe está pronta para te ajudar com qualquer dúvida, 7 dias por semana.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { x: -20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const Benefits = () => {
  return (
    <section id="benefits" className="py-20 sm:py-28 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {benefits.map((benefit, index) => (
              <motion.div key={index} className="flex items-start" variants={itemVariants}>
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-secondary/10 text-secondary">
                    <benefit.icon className="h-8 w-8" />
                  </div>
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-bold text-text-primary">{benefit.title}</h3>
                  <p className="mt-2 text-text-secondary">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <div className="relative h-96 lg:h-auto">
            <img 
              src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Equipe de negócios colaborando" 
              className="rounded-xl shadow-2xl object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
