import { CreditCard, Smartphone, Link, BarChart2, LucideIcon } from 'lucide-react';
import { GlowingEffect } from './ui/glowing-effect';

type Solution = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const solutions: Solution[] = [
  {
    icon: CreditCard,
    title: 'Maquininha de Cartão',
    description: 'Venda no débito e crédito com as menores taxas e receba o dinheiro em 1 dia útil.',
  },
  {
    icon: Smartphone,
    title: 'Pagamento por Pix',
    description: 'Receba pagamentos instantâneos via QR Code na sua maquininha ou no seu celular.',
  },
  {
    icon: Link,
    title: 'Link de Pagamento',
    description: 'Venda online sem precisar de site. Envie um link seguro para seus clientes pagarem.',
  },
  {
    icon: BarChart2,
    title: 'Gestão Financeira',
    description: 'Acompanhe suas vendas, controle seu estoque e gerencie seu negócio na palma da mão.',
  },
];

const GridItem = ({ icon: Icon, title, description }: Solution) => {
  return (
    <li className="relative bg-surface p-8 rounded-2xl transition-all duration-300 list-none">
      <GlowingEffect
        disabled={false}
        className="rounded-2xl"
        proximity={80}
        spread={20}
        inactiveZone={0.5}
        borderWidth={1}
      />
      <div className="relative z-10">
        <div className="mb-6">
          <Icon className="w-12 h-12 text-secondary" />
        </div>
        <h3 className="text-xl font-bold text-text-primary mb-3">{title}</h3>
        <p className="text-text-secondary mb-4">{description}</p>
        <a href="#" className="font-semibold text-primary hover:text-primary/80 transition-colors">
          Saiba mais &rarr;
        </a>
      </div>
    </li>
  );
};

const Solutions = () => {
  return (
    <section id="solutions" className="py-20 sm:py-28 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary">Nossas <span className="bg-gradient-primary text-transparent bg-clip-text">Soluções</span> para Você</h2>
          <p className="text-lg text-text-secondary mt-4 max-w-2xl mx-auto">Tudo o que você precisa para vender mais e gerenciar melhor.</p>
        </div>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <GridItem
              key={index}
              icon={solution.icon}
              title={solution.title}
              description={solution.description}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Solutions;
