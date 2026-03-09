import React from 'react';
import { motion } from 'motion/react';
import { useInView } from './useInView';
import VoalaImg from './images/voalahistory.png';

export function History() {
  const { ref, inView } = useInView();

  return (
    <section
      id="historia"
      className="relative py-24 md:py-32 bg-black overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className="grid md:grid-cols-2 gap-12 md:gap-16 items-center"
        >
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            {/* Title */}
            <h2
              className="text-6xl md:text-7xl font-black mb-6 text-white tracking-tight uppercase"
              style={{ fontFamily: 'Oswald, sans-serif' }}
            >
              Nossa História
            </h2>

            {/* Decorative Line */}
            <div className="w-24 h-1 bg-white mb-8"></div>

            {/* Story Text */}
            <div
              className="space-y-6 text-gray-300"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              <p className="text-lg leading-relaxed">
                O coletivo é a junção de vivências, sonhos, frustrações e
                vitórias pelas ruas de Curitiba. Cada um tem sua história, todas
                com sua importância pra construir o que hoje chamamos de{' '}
                <span className="text-white font-semibold">Voala Records</span>.
                Mantendo a lealdade entre os irmãos e irmãs, e a originalidade
                individual de cada um, nos expressamos através da música e da
                arte.
              </p>
              <p className="text-lg leading-relaxed">
                Nosso nome vem da gíria de rua "voar alto" - representando a
                ascensão, a superação e o voo que cada artista dá ao transformar
                sua realidade em arte. Somos mais que uma gravadora: somos um
                movimento, uma família, um coletivo que acredita no poder
                transformador da música.
              </p>
              <p className="text-lg leading-relaxed">
                Do estúdio independente no coração da cidade às principais
                plataformas de streaming, levamos a essência da rua para o
                mundo. Cada beat, cada rima, cada mensagem carrega a verdade das
                ruas e a força de quem vive a cultura.
              </p>
              <p className="text-lg leading-relaxed font-semibold text-white">
                Voala não é só música. É atitude, resistência e
                representatividade.
              </p>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative overflow-hidden shadow-2xl shadow-black/50">
              {/* Image */}
              <img
                src={VoalaImg}
                alt="Estúdio Voala"
                className="w-full h-full object-cover"
              />

              {/* Overlay Effect */}
              <div className="absolute inset-0 bg-black/40"></div>

              {/* Corner Decoration */}
              <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-white"></div>
              <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-white"></div>
            </div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -bottom-6 -left-6 bg-white text-black p-6 shadow-xl"
            >
              <p
                className="text-4xl font-black"
                style={{ fontFamily: 'Oswald, sans-serif' }}
              >
                DESDE 2022
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
