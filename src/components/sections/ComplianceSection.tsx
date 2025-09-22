'use client';

import React from 'react';
import { motion } from 'framer-motion';

const frameworks = [
  {
    name: "Ley 21663 Chile",
    title: "Ley Marco de Ciberseguridad",
    description: "Nueva ley chilena que crea la Agencia Nacional de Ciberseguridad (ANCI) y establece marcos regulatorios",
    details: [
      "Implementación desde abril 2025",
      "Protección de infraestructura crítica",
      "Auditorías obligatorias",
      "Reporte de incidentes en 3 horas",
      "Sectores: banca, telecoms, energía, salud"
    ],
    icon: "🇨🇱",
    color: "blue-600",
    status: "Vigente desde 2024"
  },
  {
    name: "NERC CIP",
    title: "Critical Infrastructure Protection",
    description: "Estándares norteamericanos para protección de la red eléctrica y sistemas de control industrial",
    details: [
      "13 estándares CIP activos",
      "Protección Bulk Electric System",
      "Categorización de activos BES",
      "Perímetros de seguridad electrónicos",
      "Auditorías regulares y sanciones"
    ],
    icon: "⚡",
    color: "blue-500",
    status: "Actualizado 2022"
  },
  {
    name: "Directiva NIS2",
    title: "Network & Information Security",
    description: "Marco europeo unificado de ciberseguridad que expande de 7 a 15 sectores críticos",
    details: [
      "Vigente desde octubre 2024",
      "15 sectores críticos cubiertos",
      "Reporte en 24h/72h/30 días",
      "Empresas medianas y grandes",
      "Estrategias nacionales obligatorias"
    ],
    icon: "🇪🇺",
    color: "orange-500",
    status: "Implementación 2024"
  },
  {
    name: "ISO 27001:2022",
    title: "Information Security Management",
    description: "Estándar internacional para sistemas de gestión de seguridad de la información",
    details: [
      "Marco de gestión ISMS",
      "Enfoque basado en riesgos",
      "Mejora continua",
      "Certificación internacional",
      "70,000+ certificados globalmente"
    ],
    icon: "🏆",
    color: "teal-500",
    status: "Versión 2022 activa"
  },
  {
    name: "MITRE ATT&CK",
    title: "Adversarial Tactics & Techniques",
    description: "Framework global de tácticas y técnicas de adversarios basado en observaciones reales",
    details: [
      "196 técnicas documentadas",
      "411 sub-técnicas",
      "Matrices Enterprise, Mobile, ICS",
      "Threat hunting y red team",
      "Lenguaje común para defensores"
    ],
    icon: "🎯",
    color: "blue-500",
    status: "Actualización v11.3"
  }
];

const services = [
  "Auditorías de compliance",
  "Implementación de marcos normativos",
  "Preparación para certificaciones",
  "Gap analysis y remediation",
  "Documentación y políticas",
  "Training y capacitación"
];

const ComplianceSection: React.FC = () => {
  return (
    <section className="py-20 relative" style={{backgroundColor: '#0f172a'}}>
      {/* Parallax Background */}
      <div className="parallax-bg absolute inset-0" style={{
        backgroundImage: 'linear-gradient(45deg, rgba(0, 255, 136, 0.05) 0%, rgba(0, 128, 255, 0.05) 100%)'
      }}>
        <div className="parallax-overlay"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-anton text-white mb-6">
            COMPLIANCE NORMATIVO
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Especialistas en marcos regulatorios internacionales y normativas de ciberseguridad
          </p>
        </motion.div>

        {/* Frameworks Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {frameworks.map((framework, index) => (
            <motion.div
              key={framework.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="cyber-hover bg-gray-800 rounded-lg p-8 border border-gray-700 hover:border-blue-400 shadow-lg"
            >
              <div className="flex items-start space-x-4 mb-6">
                <div className="text-4xl">{framework.icon}</div>
                <div className="flex-1">
                  <h3 className={`text-2xl font-anton text-${framework.color} mb-2`}>
                    {framework.name}
                  </h3>
                  <h4 className="text-white font-semibold text-lg mb-3">
                    {framework.title}
                  </h4>
                  <div className={`inline-block px-3 py-1 bg-${framework.color} bg-opacity-10 border border-${framework.color} rounded text-${framework.color} text-xs font-semibold`}>
                    {framework.status}
                  </div>
                </div>
              </div>

              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                {framework.description}
              </p>

              <div className="space-y-3">
                <h5 className="text-white font-semibold text-sm">Aspectos clave:</h5>
                {framework.details.map((detail, detailIndex) => (
                  <div key={detailIndex} className="cyber-bullet text-gray-200 text-sm">
                    {detail}
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-gray-700">
                <button className={`w-full py-2 px-4 bg-${framework.color} bg-opacity-10 border border-${framework.color} text-${framework.color} rounded hover:bg-opacity-20 transition-all duration-300 font-semibold`}>
                  Consultoría Especializada
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Services Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-gray-800 rounded-lg p-8 border border-gray-700"
        >
          <h3 className="text-3xl font-anton text-center text-blue-400 mb-8">
            SERVICIOS DE COMPLIANCE
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {services.map((service, index) => (
              <motion.div
                key={service}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="cyber-bullet text-gray-200 font-medium text-center py-3"
              >
                {service}
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Ayudamos a las organizaciones a navegar el complejo panorama regulatorio,
              asegurando el cumplimiento y fortaleciendo la postura de ciberseguridad.
            </p>

            <div className="inline-flex items-center space-x-4">
              <button className="bg-blue-400 bg-opacity-10 border border-blue-400 text-blue-400 px-6 py-3 rounded-lg hover:bg-opacity-20 transition-all duration-300 font-semibold">
                Evaluación Gratuita
              </button>
              <button className="bg-gray-400 bg-opacity-10 border border-gray-400 text-gray-400 px-6 py-3 rounded-lg hover:bg-opacity-20 transition-all duration-300 font-semibold">
                Descargar Whitepaper
              </button>
            </div>
          </div>
        </motion.div>

        {/* Timeline Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-anton text-blue-400 mb-6">
            PRÓXIMAS FECHAS IMPORTANTES
          </h3>
          <div className="bg-gray-800 rounded-lg p-6 max-w-4xl mx-auto border border-gray-700 shadow">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div className="text-center">
                <div className="text-blue-400 font-bold">Abril 2025</div>
                <div className="text-gray-200">Ley 21663 Chile - Enforcement completo</div>
              </div>
              <div className="text-center">
                <div className="text-blue-400 font-bold">2025 Q2</div>
                <div className="text-gray-200">NERC CIP - Nuevas actualizaciones</div>
              </div>
              <div className="text-center">
                <div className="text-blue-400 font-bold">Continuo</div>
                <div className="text-gray-200">NIS2 - Implementación EU</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ComplianceSection;