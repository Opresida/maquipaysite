import { cn } from '@/lib/utils';
import { TestimonialCard } from '@/components/ui/testimonial-card';

const testimonials = [
  {
    author: {
      name: 'Ana Silva',
      handle: 'Café Delícia',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    text: 'A MaquiPAY transformou a gestão do meu café. As taxas são ótimas e o dinheiro cai muito rápido. Recomendo!',
  },
  {
    author: {
      name: 'Carlos Pereira',
      handle: 'Barbearia Estilo',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    text: 'O link de pagamento salvou minhas vendas. É muito fácil de usar e meus clientes adoram a praticidade.',
  },
  {
    author: {
      name: 'Juliana Costa',
      handle: 'Juh Acessórios',
      avatar: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    text: 'O suporte é incrível! Sempre que precisei, fui atendida rapidamente por uma pessoa de verdade, não um robô.',
  },
  {
    author: {
      name: 'Marcos Lima',
      handle: 'Oficina do Bairro',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    text: 'A maquininha é robusta e a bateria dura muito. Perfeita para quem trabalha na rua como eu.',
  },
  {
    author: {
      name: 'Fernanda Oliveira',
      handle: 'Doce Sonho Confeitaria',
      avatar: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    text: 'Com a MaquiPAY, meu controle financeiro ficou muito mais simples. O portal do cliente é super completo.',
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className={cn(
      "bg-background text-foreground",
      "py-20 sm:py-28",
    )}>
      <div className="mx-auto flex max-w-container flex-col items-center gap-4 text-center sm:gap-16">
        <div className="flex flex-col items-center gap-4 px-4 sm:gap-8">
          <h2 className="max-w-[720px] text-3xl font-bold leading-tight sm:text-4xl sm:leading-tight text-text-primary">
            O que nossos <span className="bg-gradient-primary text-transparent bg-clip-text">Clientes</span> Dizem
          </h2>
          <p className="text-lg max-w-[600px] font-medium text-text-secondary sm:text-xl">
            A confiança de quem usa e aprova nossas soluções no dia a dia.
          </p>
        </div>

        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <div className="group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-row [--duration:60s]">
            <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused]">
              {[...Array(4)].map((_, setIndex) => (
                testimonials.map((testimonial, i) => (
                  <TestimonialCard 
                    key={`${setIndex}-${i}`}
                    {...testimonial}
                  />
                ))
              ))}
            </div>
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-1/3 bg-gradient-to-r from-background sm:block" />
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 bg-gradient-to-l from-background sm:block" />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
