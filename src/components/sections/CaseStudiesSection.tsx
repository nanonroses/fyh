'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Shield, Clock, DollarSign, Users, Award, CheckCircle, ArrowRight, Target } from 'lucide-react';

const caseStudies = [
  {
    id: 1,
    company: "Institución Financiera Regulada",
    industry: "Sector Bancario",
    challenge: "Cumplimiento urgente Ley 21663 y protección de infraestructura crítica financiera",
    solution: "Implementación completa Dragos Platform + compliance normativo integral",
    results: {
      timeframe: "8 meses",
      metrics: [
        { label: "Reducción incidentes críticos", value: "78%", icon: Shield },
        { label: "Ahorro documentado", value: "$1.4M USD", icon: DollarSign },
        { label: "Tiempo compliance", value: "6 semanas", icon: Clock },
        { label: "Uptime alcanzado", value: "99.7%", icon: TrendingUp }
      ]
    },
    testimonial: {
      quote: "La implementación transformó completamente nuestra postura de ciberseguridad operacional. Los resultados fueron medibles desde el primer trimestre.",
      author: "J.M.",
      position: "CISO, Institución Financiera"
    },
    tags: ["Ley 21663", "Detección OT", "Compliance", "Sector Regulado"]
  },
  {
    id: 2,
    company: "Operación Minera de Gran Escala",
    industry: "Sector Minero",
    challenge: "Incidentes recurrentes en sistemas SCADA y pérdidas operacionales significativas",
    solution: "Protección OT 360° con Nozomi Networks + automatización de respuesta a incidentes",
    results: {
      timeframe: "6 meses",
      metrics: [
        { label: "Reducción incidentes SCADA", value: "92%", icon: Shield },
        { label: "Ahorro anual documentado", value: "$1.1M USD", icon: DollarSign },
        { label: "Reducción downtime", value: "68%", icon: Clock },
        { label: "ROI primer año", value: "220%", icon: TrendingUp }
      ]
    },
    testimonial: {
      quote: "La implementación no solo mejoró nuestra seguridad, sino que optimizó significativamente nuestra operación continua. Resultados medibles mes a mes.",
      author: "M.S.",
      position: "CTO, Industria Minera"
    },
    tags: ["Visibilidad OT", "Protección SCADA", "Operación 24/7", "Minería"]
  },
  {
    id: 3,
    company: "Empresa de Distribución Eléctrica",
    industry: "Sector Energía",
    challenge: "Convergencia IT-OT insegura y riesgo operacional ante ciberamenazas",
    solution: "Arquitectura de seguridad convergente + monitoreo continuo 24/7",
    results: {
      timeframe: "10 meses",
      metrics: [
        { label: "Reducción riesgo operacional", value: "95%", icon: Shield },
        { label: "Valor protegido anual", value: "$890K USD", icon: DollarSign },
        { label: "Tiempo detección amenazas", value: "<45 min", icon: Clock },
        { label: "Cumplimiento normativo", value: "100%", icon: Target }
      ]
    },
    testimonial: {
      quote: "La implementación nos permitió alcanzar estándares internacionales de ciberseguridad OT. El expertise técnico fue fundamental para el éxito del proyecto.",
      author: "R.F.",
      position: "Director TI, Sector Energía"
    },
    tags: ["Convergencia IT-OT", "Monitoreo 24/7", "Compliance", "Infraestructura Crítica"]
  }
];

const CaseStudiesSection: React.FC = () => {
  const [selectedCase, setSelectedCase] = useState(caseStudies[0]);

  return (
    <section id="casos-exito" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233b82f6' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-16.569 13.431-30 30-30v60c-16.569 0-30-13.431-30-30z'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 bg-green-100 border border-green-200 rounded-full px-6 py-3 mb-6">
            <Award className="h-5 w-5 text-green-600" />
            <span className="text-green-600 font-semibold">Casos de Éxito Comprobados</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Resultados Reales de
            <span className="block text-blue-600">Empresas Chilenas</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Estas son las empresas que ya transformaron su ciberseguridad y están cosechando
            los beneficios de una protección OT de clase mundial.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Case Study Selector */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 space-y-4"
          >
            {caseStudies.map((caseStudy) => (
              <button
                key={caseStudy.id}
                onClick={() => setSelectedCase(caseStudy)}
                className={`w-full text-left p-6 rounded-2xl border-2 transition-all duration-300 ${
                  selectedCase.id === caseStudy.id
                    ? 'border-blue-500 bg-blue-50 shadow-lg'
                    : 'border-gray-200 bg-white hover:border-blue-300 hover:bg-blue-25'
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg mb-1">
                      {caseStudy.company}
                    </h3>
                    <div className="text-sm text-blue-600 font-semibold">
                      {caseStudy.industry}
                    </div>
                  </div>
                  <div className="bg-green-100 text-green-600 px-2 py-1 rounded-full text-xs font-bold">
                    ✓ ACTIVO
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {caseStudy.challenge}
                </p>

                <div className="flex flex-wrap gap-2">
                  {caseStudy.tags.slice(0, 2).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </button>
            ))}
          </motion.div>

          {/* Selected Case Study Details */}
          <motion.div
            key={selectedCase.id}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8 space-y-8"
          >
            {/* Case Header */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">
                    {selectedCase.company}
                  </h3>
                  <div className="flex items-center gap-4">
                    <span className="text-blue-600 font-semibold">{selectedCase.industry}</span>
                    <span className="text-gray-400">•</span>
                    <span className="text-green-600 font-semibold">
                      Implementación: {selectedCase.results.timeframe}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-green-600">ÉXITO</div>
                  <div className="text-sm text-gray-500">Caso verificado</div>
                </div>
              </div>

              {/* Challenge & Solution */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Target className="h-5 w-5 text-red-500" />
                    Desafío
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {selectedCase.challenge}
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    Solución
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {selectedCase.solution}
                  </p>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {selectedCase.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Results Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {selectedCase.results.metrics.map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 text-center"
                >
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <metric.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {metric.value}
                  </div>
                  <div className="text-gray-600 text-sm">
                    {metric.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Testimonial */}
            <div className="bg-gradient-to-br from-blue-900 to-indigo-900 rounded-3xl p-8 text-white">
              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-xl">
                  <Users className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <blockquote className="text-lg leading-relaxed mb-6 italic">
                    &ldquo;{selectedCase.testimonial.quote}&rdquo;
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="font-bold text-lg">
                        {selectedCase.testimonial.author.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <div className="font-bold">{selectedCase.testimonial.author}</div>
                      <div className="text-blue-200 text-sm">{selectedCase.testimonial.position}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-8 lg:p-12 text-white max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">
              ¿Listo para ser nuestro próximo caso de éxito?
            </h3>
            <p className="text-green-100 text-lg mb-8 leading-relaxed">
              Únete a las empresas líderes que ya están protegidas con nuestras soluciones.
              Obtén una auditoría gratuita y descubre tu potencial de transformación.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => {
                  const element = document.getElementById('contacto');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group bg-white text-green-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg flex items-center gap-3"
              >
                <span>Solicitar Auditoría Gratuita</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="text-green-100 text-sm">
                ✓ Evaluación completa • ✓ Sin compromiso • ✓ Resultados en 48h
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;