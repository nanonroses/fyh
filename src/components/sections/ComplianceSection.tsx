'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Zap, AlertCircle, Star } from 'lucide-react';

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
  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 bg-gradient-to-br from-dark-void via-dark-void/95 to-dark-void relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ec4899' fill-opacity='0.2'%3E%3Cpath d='M30 0L60 30L30 60L0 30z'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Animated Glow */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{ repeat: Infinity, duration: 30, ease: "easeInOut" }}
        className="absolute top-32 right-32 w-40 h-40 rounded-full opacity-8 blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgb(0, 255, 136 / 0.6) 0%, transparent 70%)'
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-3 glass-effect quantum-border rounded-full px-8 py-4 mb-8"
          >
            <Shield className="h-6 w-6 text-cyber-lime glow-pulse" />
            <span className="font-space-grotesk font-bold text-cyber-lime text-lg tracking-wider">
              MARCOS REGULATORIOS
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            <h2 className="display-text text-5xl lg:text-7xl text-light-ghost leading-none">
              COMPLIANCE
              <span className="block text-gradient glow-pulse">
                NORMATIVO
              </span>
            </h2>

            <p className="font-poppins text-xl text-silver-mist max-w-4xl mx-auto leading-relaxed">
              Especialistas en marcos regulatorios internacionales y normativas de ciberseguridad.
              <span className="block font-bold text-cyber-lime mt-2">
                Aseguramos el cumplimiento total en tu industria.
              </span>
            </p>
          </motion.div>
        </motion.div>

        {/* Frameworks Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {frameworks.map((framework, index) => (
            <motion.div
              key={framework.name}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.12 }}
              className="group glass-effect electric-border rounded-3xl p-8 modern-hover relative overflow-hidden"
            >
              {/* Background Glow */}
              <div className="absolute inset-0 opacity-10 blur-3xl">
                <div className="w-full h-full bg-gradient-to-br from-cyber-lime to-quantum-blue" />
              </div>

              <div className="relative z-10">
                <div className="flex items-start gap-4 mb-6">
                  <div className="text-5xl">{framework.icon}</div>
                  <div className="flex-1">
                    <h3 className="font-space-grotesk font-bold text-2xl text-light-ghost mb-2">
                      {framework.name}
                    </h3>
                    <h4 className="font-poppins font-semibold text-lg text-cyber-lime mb-3">
                      {framework.title}
                    </h4>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                      className="inline-block px-4 py-2 rounded-full text-xs font-space-grotesk font-bold glass-effect quantum-border text-cyber-lime glow-pulse"
                    >
                      {framework.status}
                    </motion.div>
                  </div>
                </div>

                <p className="font-poppins text-white mb-6 leading-relaxed text-sm">
                  {framework.description}
                </p>

                <div className="space-y-3 mb-6">
                  <h5 className="font-space-grotesk font-bold text-light-ghost uppercase tracking-wide flex items-center gap-2 text-sm">
                    <Star className="h-4 w-4 text-cyber-lime" />
                    Aspectos Clave:
                  </h5>
                  {framework.details.map((detail, detailIndex) => (
                    <motion.div
                      key={detailIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + detailIndex * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <AlertCircle className="h-4 w-4 text-cyber-lime mt-0.5 flex-shrink-0 glow-pulse" />
                      <span className="font-poppins text-white text-sm">
                        {detail}
                      </span>
                    </motion.div>
                  ))}
                </div>

                <motion.button
                  onClick={scrollToContact}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full group relative overflow-hidden bg-gradient-to-r from-cyber-lime to-quantum-blue text-dark-void py-4 px-6 rounded-2xl font-space-grotesk font-bold text-sm modern-hover hologram-effect"
                >
                  <div className="relative z-10 flex items-center justify-center gap-2">
                    <span>Consultoría Especializada</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Services Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="glass-effect electric-border rounded-3xl p-12 lg:p-16 max-w-6xl mx-auto modern-hover relative overflow-hidden"
        >
          {/* Background Glow */}
          <div className="absolute inset-0 opacity-20 blur-3xl">
            <div className="w-full h-full bg-gradient-to-br from-neon-purple via-electric-magenta to-cyber-lime" />
          </div>

          <div className="relative z-10">
            <motion.div
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-8"
            >
              <h3 className="font-space-grotesk font-bold text-4xl lg:text-5xl text-light-ghost mb-6 text-center">
                Servicios
                <span className="block text-gradient glow-pulse">
                  de Compliance
                </span>
              </h3>
              <p className="font-poppins text-xl text-silver-mist leading-relaxed max-w-4xl mx-auto text-center">
                Ayudamos a las organizaciones a navegar el complejo panorama regulatorio,
                <span className="block font-bold text-cyber-lime mt-2">
                  asegurando cumplimiento y fortaleciendo la ciberseguridad.
                </span>
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              {services.map((service, index) => (
                <motion.div
                  key={service}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="text-center glass-effect rounded-2xl p-6 quantum-border glass-hover"
                >
                  <div className="font-poppins text-white text-sm font-semibold">
                    {service}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="inline-flex items-center gap-4"
              >
                <motion.button
                  onClick={scrollToContact}
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative overflow-hidden px-12 py-6 rounded-2xl font-space-grotesk font-bold text-lg modern-hover hologram-effect"
                  style={{
                    background: 'linear-gradient(135deg, rgb(0 255 136) 0%, rgb(0 128 255) 100%)',
                    color: 'rgb(15 23 42)'
                  }}
                >
                  <div className="relative z-10 flex items-center gap-3">
                    <span>Evaluación Gratuita</span>
                    <ArrowRight className="h-6 w-6" />
                  </div>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="group px-12 py-6 glass-effect electric-border rounded-2xl font-space-grotesk font-bold text-electric-magenta text-lg magnetic-hover flex items-center gap-3"
                >
                  <span>Descargar Whitepaper</span>
                  <ArrowRight className="h-6 w-6" />
                </motion.button>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Timeline Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <h3 className="font-space-grotesk font-bold text-3xl lg:text-4xl text-light-ghost mb-8">
            Próximas Fechas
            <span className="block text-gradient glow-pulse">
              Importantes
            </span>
          </h3>

          <div className="glass-effect electric-border rounded-3xl p-8 max-w-5xl mx-auto modern-hover relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute inset-0 opacity-15 blur-3xl">
              <div className="w-full h-full bg-gradient-to-br from-cyber-lime to-neon-purple" />
            </div>

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { date: "Abril 2025", description: "Ley 21663 Chile - Enforcement completo", icon: "📅" },
                { date: "2025 Q2", description: "NERC CIP - Nuevas actualizaciones", icon: "⚡" },
                { date: "Continuo", description: "NIS2 - Implementación EU", icon: "🇪🇺" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <div className="font-space-grotesk font-bold text-2xl text-cyber-lime mb-2 glow-pulse">
                    {item.date}
                  </div>
                  <div className="font-poppins text-silver-mist text-sm">
                    {item.description}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ComplianceSection;