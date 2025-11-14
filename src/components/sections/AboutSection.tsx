'use client';

import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { number: "500+", label: "Proyectos de Ciberseguridad", icon: "🔒" },
  { number: "15+", label: "Años de Experiencia", icon: "🏆" },
  { number: "99.9%", label: "Uptime Garantizado", icon: "⚡" },
  { number: "24/7", label: "Soporte Especializado", icon: "🛠️" }
];

const values = [
  {
    title: "Innovación Continua",
    description: "Implementamos las últimas tecnologías y metodologías en ciberseguridad y automatización",
    icon: "💡",
    color: "blue-600"
  },
  {
    title: "Expertise Multidisciplinario",
    description: "Equipo especializado en OT, IT, compliance y marcos regulatorios internacionales",
    icon: "👥",
    color: "blue-600"
  },
  {
    title: "Partnerships Estratégicos",
    description: "Alianzas exclusivas con líderes mundiales como Dragos, Nozomi Networks y DHD Care",
    icon: "🤝",
    color: "blue-600"
  },
  {
    title: "Enfoque Holístico",
    description: "Visión integral desde la estrategia hasta la implementación y el soporte continuo",
    icon: "🎯",
    color: "blue-600"
  }
];

const industries = [
  { name: "Financiero y Banca", icon: "🏦" },
  { name: "Energía y Utilities", icon: "⚡" },
  { name: "Manufactura", icon: "🏭" },
  { name: "Telecomunicaciones", icon: "📡" },
  { name: "Minería", icon: "⛏️" },
  { name: "Gobierno", icon: "🏛️" }
];

const AboutSection: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden" style={{backgroundColor: '#FFFFFF'}}>
      <div className="container mx-auto px-6 relative z-10">
        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <motion.div
            className="glass-effect electric-border rounded-3xl p-12 max-w-4xl mx-auto modern-hover relative overflow-hidden"
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            {/* Background Glow */}
            <div className="absolute inset-0 opacity-15 blur-3xl">
              <div className="w-full h-full bg-gradient-to-br from-cyber-lime via-electric-magenta to-quantum-blue" />
            </div>

            <div className="relative z-10">
              <h3 className="text-4xl font-space-grotesk font-bold text-white mb-6">
                NUESTRA MISIÓN
              </h3>
              <p className="text-white text-lg leading-relaxed mb-8 max-w-3xl mx-auto">
                Proteger la infraestructura crítica de las organizaciones mediante soluciones
                avanzadas de ciberseguridad, compliance normativo y automatización inteligente,
                asegurando la continuidad operacional en la era digital.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative overflow-hidden px-8 py-3 rounded-2xl font-space-grotesk font-bold text-lg modern-hover hologram-effect"
                  style={{
                    background: 'linear-gradient(135deg, rgb(0 255 136) 0%, rgb(0 128 255) 100%)',
                    color: 'rgb(15 23 42)'
                  }}
                >
                  Conoce Nuestro Equipo
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 glass-effect electric-border rounded-2xl font-space-grotesk font-bold text-electric-magenta text-lg magnetic-hover"
                >
                  Case Studies
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;