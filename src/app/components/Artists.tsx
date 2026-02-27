import { motion } from 'motion/react';
import { useInView } from './useInView';
import {
  emizeImage,
  winduImage,
  peroliImage,
  tianImage,
  brazinImage,
  blopImage,
} from './images';
const teamMembers = [
  // MCs
  {
    id: 1,
    name: 'Blo-P',
    role: 'MC',
    style: 'Trap Melódico',
    description: 'Voz que fala da rua com melodia que toca a alma.',
    image: blopImage,
    type: 'mc',
  },
  {
    id: 2,
    name: 'Brazin',
    role: 'MC',
    style: 'Drill / Hardcore',
    description: 'Peso, atitude e letra crua. Drill brasileiro autêntico.',
    image: brazinImage,
    type: 'mc',
  },
  {
    id: 3,
    name: 'Emize',
    role: 'MC',
    style: 'Trap/R&B',
    description: 'A voz que mistura trap com soul urbano.',
    image: emizeImage,
    type: 'mc',
  },
  {
    id: 4,
    name: 'Peroli',
    role: 'MC',
    style: 'Boom Bap / Old School',
    description: 'Resgatando a essência do rap raiz com consciência.',
    image: peroliImage,
    type: 'mc',
  },
  // Designer
  {
    id: 5,
    name: 'k1llua33',
    role: 'Designer',
    style: null,
    description: 'Identidade visual e arte conceitual da Voala.',
    image:
      'https://images.unsplash.com/photo-1673101609020-4b5e203885bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFwaGljJTIwZGVzaWduZXIlMjB3b3JraW5nJTIwbGFwdG9wfGVufDF8fHx8MTc3MjA0MDg2Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    type: 'designer',
  },
  // Produtor
  {
    id: 6,
    name: 'Windu',
    role: 'Produtor Musical',
    style: null,
    description: 'Beats que definem o som da Voala.',
    image: winduImage,
    type: 'producer',
  },
  // DJ
  {
    id: 7,
    name: 'DJ Tian',
    role: 'DJ',
    style: null,
    description: 'Comandando as pick-ups nos eventos da família.',
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

        {/* Team Grid - 3x3 desktop, 2 cols tablet, 1 col mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="group relative overflow-hidden aspect-square cursor-pointer bg-black"
            >
              {/* Member Image */}
              <div className="relative w-full h-full">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-110"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-black/20"></div>
              </div>

              {/* Hover Overlay with Info */}
              <div className="absolute inset-0 bg-black/90 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-6 text-center">
                {/* Name */}
                <h3
                  className="text-3xl md:text-4xl font-black text-white mb-2 uppercase tracking-wide"
                  style={{ fontFamily: 'Permanent Marker, cursive' }}
                >
                  {member.name}
                </h3>

                {/* Role */}
                <p
                  className="text-base md:text-lg text-gray-300 font-bold mb-3 uppercase tracking-widest"
                  style={{ fontFamily: 'Teko, sans-serif' }}
                >
                  {member.role}
                </p>

                {/* Style (only for MCs) */}
                {member.style && (
                  <p
                    className="text-sm text-gray-400 mb-4 font-semibold"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {member.style}
                  </p>
                )}

                {/* Divider */}
                <div className="w-16 h-px bg-white/40 mb-4"></div>

                {/* Description */}
                <p
                  className="text-sm text-gray-300 leading-relaxed max-w-xs"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {member.description}
                </p>
              </div>

              {/* Type Badge - Subtle corner indicator */}
              <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-2 h-2 bg-white"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
