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
    color: "blue-500"
  },
  {
    title: "Partnerships Estratégicos",
    description: "Alianzas exclusivas con líderes mundiales como Dragos, Nozomi Networks y DHD Care",
    icon: "🤝",
    color: "orange-500"
  },
  {
    title: "Enfoque Holístico",
    description: "Visión integral desde la estrategia hasta la implementación y el soporte continuo",
    icon: "🎯",
    color: "teal-500"
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
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300ff88' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-16.569 13.431-30 30-30v60c-16.569 0-30-13.431-30-30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-anton text-gray-900 mb-6">
            FYH INGENIEROS 2.0
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Evolucionamos para liderar la nueva era de la ciberseguridad empresarial.
            Especialistas en tecnología operacional, compliance normativo y automatización avanzada.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="text-center bg-gray-50 rounded-lg p-6 border border-gray-200 shadow-lg"
            >
              <div className="text-3xl mb-3">{stat.icon}</div>
              <div className="text-3xl font-anton text-blue-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-900 text-sm font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Values Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="cyber-hover bg-gray-50 rounded-lg p-8 border border-gray-200 hover:border-blue-500"
            >
              <div className="flex items-start space-x-4">
                <div className="text-4xl">{value.icon}</div>
                <div className="flex-1">
                  <h3 className={`text-xl font-anton text-${value.color} mb-3 neon-glow`}>
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Industries Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-gray-100 rounded-lg p-8 border border-gray-300 mb-16"
        >
          <h3 className="text-3xl font-anton text-center text-blue-600 mb-8">
            SECTORES QUE ATENDEMOS
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center bg-white rounded-lg p-4 hover:bg-gray-50 transition-colors duration-300 border border-gray-200"
              >
                <div className="text-3xl mb-3">{industry.icon}</div>
                <div className="text-gray-900 text-sm font-medium leading-tight">
                  {industry.name}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

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
              <button className="bg-blue-600 bg-opacity-10 border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-opacity-20 transition-all duration-300 font-semibold">
                Conoce Nuestro Equipo
              </button>
              <button className="bg-teal-600 bg-opacity-10 border border-teal-600 text-teal-600 px-8 py-3 rounded-lg hover:bg-opacity-20 transition-all duration-300 font-semibold">
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