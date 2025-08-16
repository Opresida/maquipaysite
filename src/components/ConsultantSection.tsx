
import HeroSection from './ui/hero-section';

const ConsultantSection = () => {
  return (
    <HeroSection
      title="Torne-se um <span class='bg-gradient-primary text-transparent bg-clip-text'>Consultor</span> MaquiPAY e fique com até 60% do lucro de cada cliente"
      subtitle="Faça parte da nossa rede de consultores e ajude empreendedores a crescerem seus negócios enquanto você constrói uma renda extra sólida e recorrente."
      actions={[
        {
          label: "Consultores",
          href: "#",
          variant: "outline"
        },
        {
          label: "Contadores",
          href: "#",
          variant: "default"
        }
      ]}
      imageUrl="https://i.imgur.com/k7s1y4z.png"
      className="bg-surface"
      titleClassName="text-3xl md:text-4xl font-bold text-text-primary"
      subtitleClassName="text-lg text-text-secondary mt-4"
      actionsClassName="mt-8"
    />
  );
};

export default ConsultantSection;
