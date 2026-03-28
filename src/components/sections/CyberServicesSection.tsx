'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const platforms = [
  {
    id: 'ot',
    tab: 'Protección OT Avanzada',
    title: 'PROTECCIÓN OT AVANZADA',
    description: 'Consultoría especializada en protección de sistemas OT/ICS. Implementamos y operamos Dragos Platform y Nozomi Networks para monitoreo 24/7 y respuesta en menos de 30 minutos.',
    stats: [{ value: '85%', label: 'Reducción incidentes' }, { value: '340%', label: 'ROI documentado' }],
    color: 'pa-orange',
    underline: 'bg-pa-orange',
    image: '/service-ot-protection.jpg',
    imageAlt: 'Analista de ciberseguridad OT monitoreando sistemas industriales',
  },
  {
    id: 'compliance',
    tab: 'Compliance Regulatorio',
    title: 'COMPLIANCE REGULATORIO',
    description: 'Asesoría experta en IEC 62443, Ley 21663, NERC CIP, NIS2 e ISO 27001. Nuestro equipo lleva tu organización a compliance certificado en 90 días con auditorías trimestrales.',
    stats: [{ value: '100%', label: 'Compliance certificado' }, { value: '90 días', label: 'Tiempo implementación' }],
    color: 'pa-green',
    underline: 'bg-pa-green',
    image: '/service-compliance.jpg',
    imageAlt: 'Equipo consultor revisando dashboard de compliance IEC 62443 e ISO 27001',
  },
  {
    id: 'automation',
    tab: 'Automatización Inteligente',
    title: 'AUTOMATIZACIÓN INTELIGENTE',
    description: 'Diseñamos e implementamos soluciones RPA + IA predictiva que eliminan tareas manuales y reducen costos operativos hasta 60%. Incluye dashboard ejecutivo a medida.',
    stats: [{ value: '$2.3M', label: 'Ahorro anual' }, { value: '60%', label: 'Menos costos operativos' }],
    color: 'pa-yellow',
    underline: 'bg-pa-yellow',
    image: '/service-automation.jpg',
    imageAlt: 'Flujos de automatización inteligente y workflows digitales',
  },
];

export default function CyberServicesSection() {
  const [active, setActive] = useState(platforms[0]);
  const goto = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="servicios" className="bg-pa-dark border-y border-pa-border py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-6">
          <div className="pa-label text-pa-yellow mb-4">Servicios de Consultoría</div>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-white leading-tight max-w-3xl">
            Nuestras áreas de especialización, respaldadas por certificaciones de clase mundial
          </h2>
        </motion.div>

        {/* Tabs - like PA */}
        <div className="flex gap-8 border-b border-pa-border mt-12 mb-16 overflow-x-auto">
          {platforms.map((p) => (
            <button
              key={p.id}
              onClick={() => setActive(p)}
              className={`pb-4 text-sm font-semibold whitespace-nowrap transition-colors relative ${
                active.id === p.id ? 'text-white' : 'text-[#666] hover:text-[#999]'
              }`}
            >
              {p.tab}
              {active.id === p.id && (
                <motion.div layoutId="tab-underline" className={`absolute bottom-0 left-0 right-0 h-[3px] ${p.underline} rounded-full`} />
              )}
            </button>
          ))}
        </div>

        {/* Content - like PA platform section */}
        <motion.div
          key={active.id}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left - text */}
          <div>
            <h3 className={`pa-label text-${active.color} mb-6 text-lg tracking-[0.3em]`}>
              {active.title}
            </h3>
            <p className="text-[#ccc] text-lg leading-relaxed mb-8">{active.description}</p>

            <div className="flex gap-8 mb-8">
              {active.stats.map((s) => (
                <div key={s.label}>
                  <div className={`text-3xl font-extrabold text-${active.color}`}>{s.value}</div>
                  <div className="text-white font-semibold text-sm">{s.label}</div>
                </div>
              ))}
            </div>

            <button onClick={() => goto('contacto')} className="pa-btn-green">
              Agendar consultoría <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          {/* Right - service image */}
          <div className="aspect-[4/3] rounded-2xl border border-pa-border overflow-hidden relative">
            <img
              src={active.image}
              alt={active.imageAlt}
              className="w-full h-full object-cover transition-opacity duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className={`absolute bottom-0 left-0 w-full h-1 bg-${active.color}`} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
