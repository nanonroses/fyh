'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const cases = [
  {
    id: 1, company: 'Institución Financiera Regulada', industry: 'Banca',
    challenge: 'Cumplimiento urgente Ley 21663 y protección de infraestructura crítica.',
    solution: 'Implementación Dragos Platform + compliance normativo integral.',
    stats: [
      { value: '78%', label: 'Reducción incidentes' },
      { value: '$1.4M', label: 'Ahorro documentado' },
      { value: '6 sem', label: 'Tiempo compliance' },
      { value: '99.7%', label: 'Uptime' },
    ],
    quote: 'La implementación transformó completamente nuestra postura de ciberseguridad operacional.',
    author: 'CISO, Institución Financiera',
  },
  {
    id: 2, company: 'Operación Minera de Gran Escala', industry: 'Minería',
    challenge: 'Incidentes recurrentes en SCADA y pérdidas operacionales.',
    solution: 'Protección OT 360° con Nozomi Networks + automatización.',
    stats: [
      { value: '92%', label: 'Reducción SCADA' },
      { value: '$1.1M', label: 'Ahorro anual' },
      { value: '68%', label: 'Menos downtime' },
      { value: '220%', label: 'ROI año 1' },
    ],
    quote: 'No solo mejoró nuestra seguridad, sino que optimizó toda la operación.',
    author: 'CTO, Industria Minera',
  },
  {
    id: 3, company: 'Distribuidora Eléctrica', industry: 'Energía',
    challenge: 'Convergencia IT-OT insegura y riesgo operacional.',
    solution: 'Arquitectura convergente + monitoreo 24/7.',
    stats: [
      { value: '95%', label: 'Reducción riesgo' },
      { value: '$890K', label: 'Valor protegido' },
      { value: '<45m', label: 'Detección' },
      { value: '100%', label: 'Compliance' },
    ],
    quote: 'Alcanzamos estándares internacionales de ciberseguridad OT.',
    author: 'Director TI, Sector Energía',
  },
];

export default function CaseStudiesSection() {
  const [active, setActive] = useState(cases[0]);
  const goto = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="casos-exito" className="bg-pa-black py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
          <div className="pa-label text-pa-green mb-4">Casos de éxito</div>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-white leading-tight max-w-3xl">
            Lo que nuestro equipo ha logrado en empresas líderes de Chile
          </h2>
        </motion.div>

        {/* Case selector tabs */}
        <div className="flex flex-wrap gap-3 mb-12">
          {cases.map((c) => (
            <button
              key={c.id}
              onClick={() => setActive(c)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all border ${
                active.id === c.id
                  ? 'bg-pa-orange text-black border-pa-orange'
                  : 'bg-transparent text-[#999] border-pa-border hover:border-[#666]'
              }`}
            >
              {c.industry} — {c.company}
            </button>
          ))}
        </div>

        {/* Case detail */}
        <motion.div
          key={active.id}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {/* Stats bar */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {active.stats.map((s) => (
              <div key={s.label} className="pa-card text-center">
                <div className="text-3xl font-extrabold text-pa-orange mb-1">{s.value}</div>
                <div className="text-sm text-[#888]">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Challenge + Solution */}
            <div className="space-y-8">
              <div>
                <div className="pa-label text-pa-orange mb-3">Desafío</div>
                <p className="text-[#ccc] leading-relaxed">{active.challenge}</p>
              </div>
              <div>
                <div className="pa-label text-pa-green mb-3">Solución</div>
                <p className="text-[#ccc] leading-relaxed">{active.solution}</p>
              </div>
              <button onClick={() => goto('contacto')} className="pa-btn-outline">
                Ser el próximo caso <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            {/* Quote */}
            <div className="pa-card border-l-4 border-l-pa-green flex flex-col justify-center">
              <blockquote className="text-white text-xl leading-relaxed mb-6 italic">
                &ldquo;{active.quote}&rdquo;
              </blockquote>
              <cite className="text-[#888] not-italic text-sm">— {active.author}</cite>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
