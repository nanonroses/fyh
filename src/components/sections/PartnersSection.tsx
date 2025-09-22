'use client';

import React from 'react';
import { motion } from 'framer-motion';

const partners = [
  {
    name: "Dragos Security",
    description: "Líder mundial en ciberseguridad para sistemas de control industrial (ICS) y tecnología operacional (OT)",
    specialties: [
      "Monitoreo de redes ICS/SCADA",
      "Detección de amenazas industriales",
      "23 grupos de amenazas rastreados",
      "Inteligencia de amenazas OT",
      "Plataforma Dragos"
    ],
    logo: "🛡️",
    color: "blue-600",
    recognition: "Líder en Gartner Magic Quadrant 2025 para CPS Protection"
  },
  {
    name: "Nozomi Networks",
    description: "Especialista en visibilidad y seguridad continua para entornos OT, IoT e IT",
    specialties: [
      "Monitoreo continuo de redes OT/IoT",
      "Descubrimiento automático de activos",
      "Gestión de vulnerabilidades OT",
      "Plataforma Guardian & Vantage",
      "Análisis con IA"
    ],
    logo: "👁️",
    color: "blue-500",
    recognition: "Reconocido líder en seguridad OT y monitoreo de redes industriales"
  },
  {
    name: "DHD Care",
    description: "Servicios de mantenimiento third-party y soporte RMA para infraestructura IT",
    specialties: [
      "Soporte técnico 24x7x365",
      "Reemplazo avanzado de hardware",
      "Soporte multi-OEM (Cisco, Juniper, Dell EMC)",
      "Extensión de equipos EoS/EoL",
      "Portal de gestión global"
    ],
    logo: "🔧",
    color: "orange-500",
    recognition: "Soporte global con red certificada de técnicos especializados"
  }
];

const certifications = [
  { name: "ISO 27001", icon: "🏆" },
  { name: "NERC CIP", icon: "⚡" },
  { name: "SOC 2", icon: "🔐" },
  { name: "CISA Certified", icon: "🎯" }
];

const PartnersSection: React.FC = () => {
  return (
    <section className="py-20 relative" style={{backgroundColor: '#FFFFFF'}}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-anton text-gray-900 mb-6">
            PARTNERS ESTRATÉGICOS
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Colaboramos con los líderes mundiales en ciberseguridad y tecnología
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="cyber-hover bg-gray-50 rounded-lg p-8 border border-gray-200 hover:border-blue-500 shadow-lg"
            >
              <div className="text-center mb-6">
                <div className="text-5xl mb-4">{partner.logo}</div>
                <h3 className={`text-2xl font-anton text-${partner.color} mb-3`}>
                  {partner.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {partner.description}
                </p>
                <div className={`inline-block px-4 py-2 bg-${partner.color} bg-opacity-10 border border-${partner.color} rounded text-${partner.color} text-xs font-semibold`}>
                  {partner.recognition}
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <h4 className="text-gray-900 font-semibold text-sm">Especialidades:</h4>
                {partner.specialties.map((specialty, specialtyIndex) => (
                  <div key={specialtyIndex} className="cyber-bullet text-gray-700 text-sm">
                    {specialty}
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-gray-200">
                <button className={`w-full py-2 px-4 bg-${partner.color} bg-opacity-10 border border-${partner.color} text-${partner.color} rounded hover:bg-opacity-20 transition-all duration-300 font-semibold`}>
                  Ver Soluciones
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certificaciones y Reconocimientos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-gray-100 rounded-lg p-8 border border-gray-300"
        >
          <h3 className="text-3xl font-anton text-center text-blue-600 mb-8">
            CERTIFICACIONES Y RECONOCIMIENTOS
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl mb-2">{cert.icon}</div>
                <div className="text-gray-900 font-semibold text-sm">{cert.name}</div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-gray-600 text-lg leading-relaxed">
              Nuestros partnerships nos permiten ofrecer soluciones de clase mundial,
              respaldadas por la tecnología más avanzada y el soporte técnico especializado.
            </p>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center space-x-4">
            <button className="bg-blue-600 bg-opacity-10 border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-opacity-20 transition-all duration-300 font-semibold">
              Conocer Más Partners
            </button>
            <button className="bg-gray-600 bg-opacity-10 border border-gray-600 text-gray-600 px-8 py-3 rounded-lg hover:bg-opacity-20 transition-all duration-300 font-semibold">
              Solicitar Demo
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;