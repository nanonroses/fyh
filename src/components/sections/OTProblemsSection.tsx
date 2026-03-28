'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const problems = [
  { problem: 'Vulnerabilidades Físicas', solution: 'Assessment físico + controles biométricos + monitoreo 24/7' },
  { problem: 'VPN Inseguras y Auth Débil', solution: 'MFA, RSA tokens, RBAC y autenticación multifactor' },
  { problem: 'Inventario Incompleto', solution: 'Descubrimiento automático + respaldo integral de firmware' },
  { problem: 'Redes Sin Segmentación', solution: 'Segmentación Modelo Purdue + microsegmentación' },
  { problem: 'Imposibilidad de Parcheo', solution: 'Sistemas isla + actualización programada' },
  { problem: 'Sin Mapeo de Riesgos', solution: 'Análisis financiero OT + business case ejecutivo' },
];

export default function OTProblemsSection() {
  const goto = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="problemas" className="bg-pa-black py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
          <div className="pa-label text-pa-orange mb-4">Soluciones</div>
          <div className="grid lg:grid-cols-2 gap-8">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-white leading-tight">
              Cada vulnerabilidad tiene una solución.{' '}
              <span className="text-pa-green">Nuestro equipo las resuelve todas.</span>
            </h2>
            <p className="text-[#999] text-lg leading-relaxed self-end">
              Consultores certificados que identifican y remedian las amenazas más críticas de tu infraestructura OT con metodologías IEC 62443.
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {problems.map((item, i) => (
            <motion.div
              key={item.problem}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="pa-card group cursor-default"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-2 bg-pa-orange rounded-full" />
                <h3 className="text-white font-bold">{item.problem}</h3>
              </div>
              <p className="text-[#888] text-sm leading-relaxed mb-4">{item.solution}</p>
              <div className="h-px bg-pa-border group-hover:bg-pa-green transition-colors" />
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-12 text-center">
          <button onClick={() => goto('contacto')} className="pa-btn-green">
            Solicitar Assessment OT <ArrowRight className="h-4 w-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
