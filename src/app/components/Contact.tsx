import React from 'react';
import { motion } from 'motion/react';
import { Instagram, Music2, Youtube, Mail, MapPin, Phone } from 'lucide-react';
import { useInView } from './useInView';
import { useState } from 'react';

const CONTACT_EMAIL = 'tiianbeats@gmail.com';

const SOCIAL_LINKS = {
  instagram: 'https://www.instagram.com/voala.records/',
  spotify: 'https://hyperfollow.com/voala',
  youtube:
    'https://www.youtube.com/watch?v=zAQG8GkhSG8&list=PLrE48ITP2OgjK6LfJy-NKwxGXnz42LqeN',
} as const;

export function Contact() {
  const { ref, inView } = useInView();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent('Contato via site Voala Records');
    const body = encodeURIComponent(
      `Nome: ${formData.name}\nE-mail: ${formData.email}\n\nMensagem:\n${formData.message}`
    );

    if (typeof window !== 'undefined') {
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    }

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contato"
      className="relative py-24 md:py-32 bg-black overflow-hidden"
    >
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
            Fale Conosco
          </h2>
          <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
          <p
            className="text-gray-400 text-lg max-w-2xl mx-auto"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Contrate shows de nossos MCs, produza conosco ou grave sua musica
            aqui.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-300 mb-2 font-medium"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-zinc-950 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-white focus:ring-2 focus:ring-white/20 transition-all"
                  placeholder="Seu nome completo"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-300 mb-2 font-medium"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-zinc-950 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-white focus:ring-2 focus:ring-white/20 transition-all"
                  placeholder="seu@email.com"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-300 mb-2 font-medium"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-zinc-950 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-white focus:ring-2 focus:ring-white/20 transition-all resize-none"
                  placeholder="Conte-nos sobre seu projeto ou ideia..."
                  style={{ fontFamily: 'Inter, sans-serif' }}
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={submitted}
                className="w-full py-4 bg-white text-black font-bold hover:bg-gray-200 transition-all duration-300 shadow-lg shadow-white/20 disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-wider"
                style={{ fontFamily: 'Teko, sans-serif' }}
              >
                {submitted ? 'Mensagem Enviada! ✓' : 'Enviar Mensagem'}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="space-y-8"
          >
            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-white p-3">
                  <Mail className="text-black" size={24} />
                </div>
                <div>
                  <h3
                    className="text-white font-bold mb-1 uppercase"
                    style={{
                      fontFamily: 'Teko, sans-serif',
                      fontSize: '1.25rem',
                    }}
                  >
                    Email
                  </h3>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="text-gray-400 hover:text-white transition-colors"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {CONTACT_EMAIL}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-white p-3">
                  <Phone className="text-black" size={24} />
                </div>
                <div>
                  <h3
                    className="text-white font-bold mb-1 uppercase"
                    style={{
                      fontFamily: 'Teko, sans-serif',
                      fontSize: '1.25rem',
                    }}
                  >
                    Telefone
                  </h3>
                  <p
                    className="text-gray-400"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    (41) 99512-7950
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-white p-3">
                  <MapPin className="text-black" size={24} />
                </div>
                <div>
                  <h3
                    className="text-white font-bold mb-1 uppercase"
                    style={{
                      fontFamily: 'Teko, sans-serif',
                      fontSize: '1.25rem',
                    }}
                  >
                    Localização
                  </h3>
                  <p
                    className="text-gray-400"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    Curitiba, PR - Brasil
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="pt-8 border-t border-white/20">
              <h3
                className="text-white font-bold mb-6 uppercase"
                style={{ fontFamily: 'Teko, sans-serif', fontSize: '1.5rem' }}
              >
                Redes Sociais
              </h3>
              <div className="flex space-x-4">
                <motion.a
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  href={SOCIAL_LINKS.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white p-4 text-black hover:bg-gray-200 transition-all shadow-lg"
                >
                  <Instagram size={28} />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  href={SOCIAL_LINKS.spotify}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white p-4 text-black hover:bg-gray-200 transition-all shadow-lg"
                >
                  <Music2 size={28} />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  href={SOCIAL_LINKS.youtube}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white p-4 text-black hover:bg-gray-200 transition-all shadow-lg"
                >
                  <Youtube size={28} />
                </motion.a>
              </div>
            </div>

            {/* CTA Box */}
            <div className="bg-zinc-950 border border-white/20 p-6 backdrop-blur-sm">
              <h3
                className="text-white font-bold mb-3 uppercase"
                style={{ fontFamily: 'Teko, sans-serif', fontSize: '1.5rem' }}
              >
                Quer Fazer Parte?
              </h3>
              <p
                className="text-gray-300 mb-4"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Se você é artista, produtor ou quer colaborar com a Voala,
                estamos sempre abertos para novos talentos.
              </p>
              <p
                className="text-white font-bold"
                style={{ fontFamily: 'Teko, sans-serif', fontSize: '1.25rem' }}
              >
                Vamos voar juntos!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
