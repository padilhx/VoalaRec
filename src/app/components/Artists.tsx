import React from 'react';
import { motion } from 'motion/react';
import { useInView } from './useInView';
import {
  emizeImage,
  winduImage,
  peroliImage,
  tianImage,
  brazinImage,
  blopImage,
  k1llua33Image,
} from './images';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel';
const teamMembers = [
  {
    id: 1,
    name: 'Blo-P',
    role: 'MC',
    style: 'BoomBap / Trap / Old School',
    description:
      'BLO-P é rapper, cantor, compositor e produtor musical de Curitiba e cofundador da Voala Records. Na cena local, lançou os singles “Vista-se de Acordo à Ocasião”, “Substituto” e “Bolacha”, e já se apresentou em casas como Tangie Underclub, Stand By Music e Camaleão Cultural.',
    image: blopImage,
    type: 'mc',
  },
  {
    id: 2,
    name: 'Brazin',
    role: 'MC',
    style: 'Drill / BoomBap / Trap',
    description:
      'Brazin é um rapper underground de Curitiba, ativo há 4 anos, com letras ácidas e mensagens de superação que retratam a realidade da periferia. Já lançou quatro singles autorais e participou de trabalhos com BLO-P e EMIZ3, consolidando seu nome na cena local.',
    image: brazinImage,
    type: 'mc',
  },
  {
    id: 3,
    name: 'Emize',
    role: 'MC',
    style: 'BoomBap / Trap / Drill',
    description:
      'Emiz3 é um rapper underground de Curitiba, ativo há cerca de três anos, com identidade sonora autêntica e letras críticas sobre vivências e conflitos cotidianos. Atuando de forma independente, fortalece a cena local com lançamentos, colaborações e presença constante no hip-hop curitibano.',
    image: emizeImage,
    type: 'mc',
  },
  {
    id: 4,
    name: 'Peroli',
    role: 'MC',
    style: 'Boom Bap / Old School',
    description:
      'Per0li é uma MC de rap de Curitiba que iniciou sua trajetória em 2025. Com presença em batalhas de rima e shows da cena underground, marcando sua identidade na nova geração do rap curitibano.',
    image: peroliImage,
    type: 'mc',
  },
  {
    id: 5,
    name: 'k1llua33',
    role: 'Designer',
    style: null,
    description:
      'Killua33 é designer e cofundadora da Voala Records, responsável pela identidade visual do coletivo. Suas artes incluem capas de lançamentos e comunicação visual nas redes, ajudando a traduzir a estética e a energia da banca na cena underground.',
    image: k1llua33Image,
    type: 'designer',
  },
  {
    id: 6,
    name: 'Windu',
    role: 'Produtor Musical',
    style: null,
    description:
      'W1ndu é produtor de rap de Curitiba e atua na cena underground através da Voala Records. Já produziu para artistas como EMIZ3, BLO-P, Brazin e PER0LI, contribuindo para o fortalecimento da nova geração do rap curitibano.',
    image: winduImage,
    type: 'producer',
  },
  {
    id: 7,
    name: 'TiianBeats',
    role: 'DJ',
    style: null,
    description:
      'Tiian Beats é DJ e produtor de Curitiba, ativo desde 2015, conhecido por sets que misturam house, rap e trap com criatividade e mixagem orgânica. Também é cofundador da Voala Records, onde atua produzindo batidas e discotecando shows do coletivo.',
    image: tianImage,
    type: 'dj',
  },
];

export function Artists() {
  const { ref, inView } = useInView();

  return (
    <section
      id="artistas"
      className="relative py-24 md:py-32 bg-black overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-center mb-16"
        >
          <h2
            className="text-6xl md:text-7xl font-black mb-4 text-white tracking-tight uppercase"
            style={{ fontFamily: 'Oswald, sans-serif' }}
          >
            O Coletivo
          </h2>
          <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
          <p
            className="text-gray-400 text-lg max-w-2xl mx-auto"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Mais que artistas. Somos uma família unida pela cultura, pelo som e
            pela rua.
          </p>
        </motion.div>

        <Carousel
          className="relative"
          opts={{
            loop: true,
            align: 'center',
          }}
        >
          <CarouselContent>
            {teamMembers.map((member, index) => (
              <CarouselItem
                key={member.id}
                className="basis-[80%] md:basis-1/2 lg:basis-1/3"
              >
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="group relative overflow-hidden aspect-square cursor-pointer bg-black"
                >
                  <div className="relative w-full h-full">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-black/20"></div>
                  </div>

                  <div className="absolute inset-0 bg-black/90 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-6 text-center">
                    <h3
                      className="text-3xl md:text-4xl font-black text-white mb-2 uppercase tracking-wide"
                      style={{ fontFamily: 'Permanent Marker, cursive' }}
                    >
                      {member.name}
                    </h3>

                    <p
                      className="text-base md:text-lg text-gray-300 font-bold mb-3 uppercase tracking-widest"
                      style={{ fontFamily: 'Teko, sans-serif' }}
                    >
                      {member.role}
                    </p>

                    {member.style && (
                      <p
                        className="text-sm text-gray-400 mb-4 font-semibold"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      >
                        {member.style}
                      </p>
                    )}

                    <div className="w-16 h-px bg-white/40 mb-4"></div>

                    <p
                      className="text-sm text-gray-300 leading-relaxed max-w-xs"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {member.description}
                    </p>
                  </div>

                  <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="w-2 h-2 bg-white"></div>
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Controles do carrossel */}
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
}
