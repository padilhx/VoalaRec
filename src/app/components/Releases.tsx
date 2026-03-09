import React from 'react';
import { motion } from 'motion/react';
import { Play } from 'lucide-react';
import { useInView } from './useInView';

import {
  proldaculturaImage,
  substitutoImage,
  vencedorImage,
  momentosImage,
} from './images/music';

type Release = {
  id: number;
  title: string;
  artist: string;
  cover: string;
  type: 'EP' | 'Single';
  url: string;
};

const releases: Release[] = [
  {
    id: 1,
    title: 'Momentos',
    artist: 'Emize',
    cover: momentosImage,
    type: 'EP',
    url: 'https://open.spotify.com/intl-pt/album/4H8N8bKHx7LXoLeIcZMTn5?si=ZzWRtaPtSualY4fGyRL33w',
  },
  {
    id: 2,
    title: 'Em prol da cultura',
    artist: 'Emize ft negozero',
    cover: proldaculturaImage,
    type: 'Single',
    url: 'https://open.spotify.com/intl-pt/track/5AglDzkW8bfF5bU6PFB1AS?si=ebd776f1328f48e6',
  },
  {
    id: 3,
    title: 'Substituto',
    artist: 'Blo-p ft Emize',
    cover: substitutoImage,
    type: 'Single',
    url: 'https://open.spotify.com/intl-pt/track/3imLj6VbLMtWwGuGMYmhFe?si=ff9449d1281b4514',
  },
  {
    id: 4,
    title: 'Vencedor',
    artist: 'Brazin',
    cover: vencedorImage,
    type: 'Single',
    url: 'https://open.spotify.com/intl-pt/track/2KyoBVl2MrZN7gVvfbrQ3y?si=d157d807078b49b4',
  },
];

export function Releases() {
  const { ref, inView } = useInView();

  return (
    <section
      id="lancamentos"
      className="relative py-24 md:py-32 bg-zinc-950 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
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
            Últimos Lançamentos
          </h2>
          <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
          <p
            className="text-gray-400 text-lg max-w-2xl mx-auto"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            O som mais quente da cena. Ouça agora nas principais plataformas.
          </p>
        </motion.div>

        {/* Releases Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {releases.map((release, index) => (
            <motion.div
              key={release.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="group relative"
            >
              {/* Cover Art */}
              <div className="relative overflow-hidden mb-4 shadow-xl hover:shadow-2xl hover:shadow-white/10 transition-all duration-300">
                <div className="aspect-square relative">
                  <img
                    src={release.cover}
                    alt={release.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Overlay on Hover */}
                  <a
                    href={release.url}
                    target="_blank"
                    rel="noreferrer"
                    className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-white text-black rounded-full p-4 shadow-lg"
                    >
                      <Play size={28} fill="currentColor" />
                    </motion.div>
                  </a>

                  {/* Type Badge */}
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-black text-xs font-bold px-3 py-1 uppercase tracking-wider">
                    {release.type}
                  </div>
                </div>
              </div>

              {/* Release Info */}
              <div>
                <h3
                  className="text-xl font-bold text-white mb-1 uppercase truncate"
                  style={{ fontFamily: 'Teko, sans-serif' }}
                >
                  {release.title}
                </h3>
                <p
                  className="text-gray-400 text-sm truncate"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {release.artist}
                </p>
              </div>

              {/* Listen Button */}
              <motion.a
                href={release.url}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-4 w-full inline-flex items-center justify-center py-3 bg-white text-black font-semibold hover:bg-gray-200 transition-all duration-300 shadow-lg shadow-white/10 uppercase tracking-wider"
                style={{ fontFamily: 'Teko, sans-serif' }}
              >
                Ouça Agora
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
