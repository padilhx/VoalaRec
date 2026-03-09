import React from 'react';
import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import videoIntro from './videos/videointro.mp4';

export function Hero() {
  const scrollToArtists = () => {
    const element = document.getElementById('artistas');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={videoIntro} type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/85"></div>

      {/* Noise Texture Overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-8xl sm:text-9xl md:text-[12rem] font-black mb-6 tracking-wider"
            style={{ fontFamily: 'MinhaFonte' }}
          >
            <span className="block text-white drop-shadow-[0_0_40px_rgba(255,255,255,0.5)]">
              VOALA RECORDS
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-4 max-w-3xl mx-auto uppercase tracking-widest"
            style={{ fontFamily: 'Teko, sans-serif', fontWeight: 600 }}
          >
            Criados pela rua.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="text-base sm:text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Autenticidade, atitude e resistência. <br />
            Onde o rap encontra sua verdadeira voz.
          </motion.p>

          {/* CTA Button */}
          <motion.button
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToArtists}
            className="group relative px-8 py-4 bg-white text-black text-lg font-bold rounded-none overflow-hidden shadow-lg shadow-white/20 hover:shadow-white/30 transition-all duration-300 uppercase tracking-wider"
            style={{ fontFamily: 'Teko, sans-serif' }}
          >
            <span className="relative z-10">Conheça os Artistas</span>
            <div className="absolute inset-0 bg-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.button>
        </motion.div>

        {/* Scroll Indicator (seta estática) */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div
            className="text-white/50 cursor-pointer"
            onClick={scrollToArtists}
          >
            <ChevronDown size={40} />
          </div>
        </div>
      </div>

      {/* Urban Shapes */}
      <div className="absolute top-1/4 left-0 w-64 h-64 border border-white/10 rotate-45 -translate-x-32"></div>
      <div className="absolute bottom-1/4 right-0 w-80 h-80 border border-white/10 rotate-12 translate-x-40"></div>
    </section>
  );
}
