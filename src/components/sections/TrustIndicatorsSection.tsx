'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Award, Users, Clock, Zap, Target, Star, CheckCircle } from 'lucide-react';

const trustMetrics = [
  {
    icon: Users,
    number: "500+",
    label: "Sistemas OT Protegidos",
    description: "Infraestructura crítica asegurada"
  },
  {
    icon: Shield,
    number: "99.9%",
    label: "Uptime Garantizado",
    description: "Disponibilidad comprobada"
  },
  {
    icon: Award,
    number: "15+",
    label: "Años de Experiencia",
    description: "Liderazgo en ciberseguridad"
  },
  {
    icon: Clock,
    number: "24/7",
    label: "Soporte Especializado",
    description: "Respuesta inmediata"
  }
];

const certifications = [
  {
    name: "Partner Oficial Dragos",
    description: "Único partner certificado en Chile",
    icon: Shield,
    level: "PLATINUM"
  },
  {
    name: "Nozomi Networks Elite",
    description: "Implementaciones OT certificadas",
    icon: Target,
    level: "ELITE"
  },
  {
    name: "DHD Care Specialist",
    description: "Soporte técnico avanzado",
    icon: Zap,
    level: "SPECIALIST"
  },
  {
    name: "ISO 27001 Lead Auditor",
    description: "Certificación internacional",
    icon: Award,
    level: "CERTIFIED"
  }
];

const industryLeadership = [
  "Primeros en implementar MITRE ATT&CK for ICS en Chile",
  "Únicos con certificación Dragos Platform en LATAM",
  "Pioneros en compliance Ley 21663 en sector energético",
  "Especialistas reconocidos en convergencia IT-OT"
];

const TrustIndicatorsSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233b82f6' fill-opacity='0.1'%3E%3Cpath d='M20 20h20v20H20V20zm-20 0h20v20H0V20z'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Trust Metrics Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {trustMetrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
            >
              <div className="bg-gradient-to-r from-blue-100 to-cyan-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <metric.icon className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {metric.number}
              </div>
              <div className="text-lg font-semibold text-gray-800 mb-1">
                {metric.label}
              </div>
              <div className="text-sm text-gray-600">
                {metric.description}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Certificaciones y Partnerships Elite
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Somos los únicos en Chile con partnerships oficiales de los líderes mundiales en ciberseguridad OT
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden"
              >
                {/* Certification Level Badge */}
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold ${
                  cert.level === 'PLATINUM' ? 'bg-purple-100 text-purple-600' :
                  cert.level === 'ELITE' ? 'bg-gold-100 text-yellow-600' :
                  cert.level === 'SPECIALIST' ? 'bg-blue-100 text-blue-600' :
                  'bg-green-100 text-green-600'
                }`}>
                  {cert.level}
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <cert.icon className="h-6 w-6 text-blue-600" />
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {cert.name}
                </h3>
                <p className="text-sm text-gray-600">
                  {cert.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Industry Leadership */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-gradient-to-br from-blue-900 to-indigo-900 rounded-3xl p-8 lg:p-12 text-white"
        >
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
              <Star className="h-5 w-5 text-yellow-400" />
              <span className="text-yellow-400 font-semibold">Liderazgo en la Industria</span>
            </div>
            <h3 className="text-3xl font-bold mb-4">
              Pioneros en Ciberseguridad OT en Chile
            </h3>
            <p className="text-xl text-blue-200">
              Reconocidos por nuestra innovación y resultados excepcionales
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {industryLeadership.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="bg-green-400 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="h-4 w-4 text-white" />
                </div>
                <p className="text-white text-lg leading-relaxed">
                  {achievement}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button
              onClick={() => {
                const element = document.getElementById('casos-exito');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white text-blue-900 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg"
            >
              Ver Casos de Éxito Comprobados
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustIndicatorsSection;