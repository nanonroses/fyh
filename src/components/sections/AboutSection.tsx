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
          <div className="bg-gray-100 rounded-lg p-12 max-w-4xl mx-auto border border-gray-300">
            <h3 className="text-3xl font-anton text-teal-600 mb-6">
              NUESTRA MISIÓN
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              Proteger la infraestructura crítica de las organizaciones mediante soluciones
              avanzadas de ciberseguridad, compliance normativo y automatización inteligente,
              asegurando la continuidad operacional en la era digital.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button className="bg-blue-600 bg-opacity-10 border border-blue-600 text-white px-8 py-3 rounded-lg hover:bg-opacity-20 transition-all duration-300 font-semibold">
                Conoce Nuestro Equipo
              </button>
              <button className="bg-teal-600 bg-opacity-10 border border-teal-600 text-white px-8 py-3 rounded-lg hover:bg-opacity-20 transition-all duration-300 font-semibold">
                Case Studies
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;