'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';

const frameworks = [
  { icon: '🇨🇱', name: 'Ley 21663', subtitle: 'Marco de Ciberseguridad Chile', status: 'Vigente', color: 'pa-orange' },
  { icon: '⚡', name: 'NERC CIP', subtitle: 'Critical Infrastructure Protection', status: 'Activo', color: 'pa-yellow' },
  { icon: '🇪🇺', name: 'NIS2', subtitle: 'Network & Information Security', status: '2024', color: 'pa-green' },
  { icon: '🏆', name: 'ISO 27001:2022', subtitle: 'Information Security Management', status: 'Activa', color: 'pa-orange' },
  { icon: '🎯', name: 'MITRE ATT&CK', subtitle: 'Tactics & Techniques for ICS', status: 'v15', color: 'pa-green' },
];

export default function ComplianceSection() {
  const goto = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="compliance" className="bg-pa-dark border-y border-pa-border py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
          <div className="pa-label text-pa-green mb-4">Compliance</div>
          <div className="grid lg:grid-cols-2 gap-8">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-white leading-tight">
              Consultores expertos en compliance normativo.{' '}
              <span className="text-pa-green">Cumplimiento garantizado.</span>
            </h2>
            <p className="text-[#999] text-lg self-end">
              Nuestro equipo domina IEC 62443, Ley 21663, NERC CIP y NIS2. Te llevamos a certificación en los primeros 90 días.
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {frameworks.map((fw, i) => (
            <motion.div
              key={fw.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className={`pa-card relative overflow-hidden ${i === 4 ? 'lg:col-start-2' : ''}`}
            >
              <div className={`absolute top-0 left-0 w-full h-[3px] bg-${fw.color}`} />
              <div className="flex items-center gap-3 mb-3 mt-2">
                <span className="text-2xl">{fw.icon}</span>
                <div>
                  <h3 className="text-white font-bold">{fw.name}</h3>
                  <p className="text-[#888] text-xs">{fw.subtitle}</p>
                </div>
              </div>
              <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-${fw.color}/10 text-${fw.color}`}>
                {fw.status}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
          <button onClick={() => goto('contacto')} className="pa-btn-green">
            Evaluación de Compliance <ArrowRight className="h-4 w-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
