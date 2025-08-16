"use client";

import * as React from "react";
import AutoScroll from "embla-carousel-auto-scroll";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const maquipayLogos = [
  // Seu array de logos continua o mesmo
  {
    id: "logo-visa",
    description: "Visa",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg",
    className: "h-8 w-auto",
  },
  {
    id: "logo-mastercard",
    description: "Mastercard",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Mastercard_2019_logo.svg",
    className: "h-10 w-auto",
  },
  {
    id: "logo-elo",
    description: "Elo",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/54/Elo_logo.svg",
    className: "h-9 w-auto",
  },
  {
    id: "logo-amex",
    description: "American Express",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/fa/American_Express_logo_%282018%29.svg",
    className: "h-9 w-auto",
  },
  {
    id: "logo-hipercard",
    description: "Hipercard",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Hipercard_logo_2019.svg",
    className: "h-12 w-auto",
  },
  {
    id: "logo-pix",
    description: "Pix",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Logo_do_PIX.svg",
    className: "h-8 w-auto",
  },
  {
    id: "logo-hiper",
    description: "Hiper",
    image: "https://logodownload.org/wp-content/uploads/2019/09/hiper-logo-1.png",
    className: "h-8 w-auto",
  },
  {
    id: "logo-cabal",
    description: "Cabal",
    image: "https://logodownload.org/wp-content/uploads/2019/09/cabal-logo.png",
    className: "h-12 w-auto",
  },
];

const Logos = () => {
  const autoScroll = React.useRef(
    AutoScroll({ speed: 0.8, stopOnInteraction: false })
  );

  return (
    <section className="bg-surface py-16 sm:py-20">
      <div className="container mx-auto flex flex-col items-center text-center px-6">
        <h2 className="text-lg font-semibold text-text-secondary mb-12">
          Aceitamos as principais bandeiras do mercado
        </h2>
        <div className="relative w-full max-w-5xl">
          <Carousel
            opts={{ loop: true, align: "start" }}
            plugins={[autoScroll.current]}
          >
            <CarouselContent className="-ml-4">
              {[...maquipayLogos, ...maquipayLogos].map((logo, index) => (
                <CarouselItem
                  key={`${logo.id}-${index}`}
                  className="flex basis-1/3 justify-center pl-4 sm:basis-1/4 md:basis-1/5 lg:basis-1/6"
                >
                  <div className="mx-8 flex shrink-0 transform items-center justify-center transition-transform duration-300 hover:scale-110">
                    <img
                      src={logo.image}
                      alt={logo.description}
                      // AQUI ESTÁ A CORREÇÃO:
                      // Trocamos o filtro antigo por um mais consistente usando grayscale e opacity.
                      className={`${logo.className} object-contain grayscale opacity-60 transition-all duration-300 hover:grayscale-0 hover:opacity-100`}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-surface to-transparent"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-surface to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default Logos;
