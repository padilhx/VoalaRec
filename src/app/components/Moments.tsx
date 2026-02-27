import { motion } from 'motion/react';
import { useInView } from './useInView';
import { useState } from 'react';
import {
  rlxfest1,
  rlxfest2,
  rlxfest3,
  tangieImage,
  fundacaoImage,
  tkzImage,
} from './images/eventos';

const moments = [
  {
    id: 1,
    image: rlxfest1,

    date: '09.04.2022',
    event: 'Primeiro evento do coletivo',
    location: 'Inae, Curitiba/PR',
  },
  {
    id: 2,
    image: rlxfest2,
    date: '20.04.2024',
    event: 'Segunda edição do RlxFest',
    location: 'Camaleão cultural, Curitiba/PR',
  },
  {
    id: 3,
    image: rlxfest3,
    date: '08.02.2025',
    event: 'Terceira edição do RlxFest',
    location: 'Camaleão cultural, Curitiba/PR',
  },
  {
    id: 4,
    image: tangieImage,
    date: '19.07.2025',
    event: 'Baile Rap',
    location: 'Tangie, Curitiba/PR',
  },
  {
    id: 5,
    image: fundacaoImage,
    date: '19.08.2025',
    event: 'Primeiro registro do coletivo',
    location: 'Curitiba, PR - Brasil',
  },
  {
    id: 6,
    image: tkzImage,
    date: '30.07.2025',
    event: 'Lançamento Take izi x Voala records',
    location: 'Curitiba, PR - Brasil',
  },
];

export function Moments() {
  const { ref, inView } = useInView();
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section
      id="momentos"
      className="relative py-24 md:py-32 bg-zinc-950 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

      {/* Concrete Texture Overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.5'/%3E%3C/svg%3E")`,
        }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2
            className="text-6xl md:text-7xl font-black mb-4 text-white tracking-tight uppercase"
            style={{ fontFamily: 'Oswald, sans-serif' }}
          >
            Na Rua
          </h2>
          <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
          <p
            className="text-gray-400 text-lg max-w-2xl mx-auto"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Registros dos palcos, bastidores e ruas onde a Voala marca presença.
          </p>
        </motion.div>

        {/* Moments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {moments.map((moment, index) => (
            <motion.div
              key={moment.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative overflow-hidden aspect-square cursor-pointer group"
              onMouseEnter={() => setHoveredId(moment.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image */}
              <img
                src={moment.image}
                alt={moment.event}
                className="w-full h-full object-cover grayscale group-hover:scale-110 transition-transform duration-500"
              />

              {/* Overlay */}
              <div
                className={`absolute inset-0 bg-black/80 backdrop-blur-sm flex flex-col items-center justify-center p-6 transition-opacity duration-300 ${
                  hoveredId === moment.id ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <p
                  className="text-white text-2xl font-bold mb-2 text-center"
                  style={{ fontFamily: 'Teko, sans-serif' }}
                >
                  {moment.date}
                </p>
                <p
                  className="text-white text-xl font-semibold mb-2 text-center"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {moment.event}
                </p>
                <p
                  className="text-gray-400 text-base text-center"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {moment.location}
                </p>

                {/* Decorative element */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-16 h-px bg-white"></div>
              </div>

              {/* Corner Border */}
              <div
                className={`absolute top-0 right-0 w-16 h-16 border-r-2 border-t-2 border-white transition-opacity duration-300 ${
                  hoveredId === moment.id ? 'opacity-100' : 'opacity-0'
                }`}
              ></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
