'use client';

import { motion } from 'framer-motion';

const stats = [
  { value: '90%', label: 'Reducción en MTTR', color: 'text-pa-orange' },
  { value: '$2.8M', label: 'Ahorros generados', color: 'text-pa-orange' },
  { value: '500+', label: 'Sistemas OT protegidos', color: 'text-pa-orange' },
];

export default function TrustIndicatorsSection() {
  return (
    <section className="bg-pa-dark border-y border-pa-border">
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* The Bad News - like PA */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Left - bars */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {[
              { label: 'Aumento en ataques a infraestructura OT (YoY)', value: '73%', width: '73%' },
              { label: 'Empresas OT sin visibilidad básica de seguridad', value: '60%', width: '60%' },
              { label: 'Aumento en brechas de datos e incidentes (YoY)', value: '56%', width: '56%' },
            ].map((bar, i) => (
              <motion.div
                key={bar.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="pa-label text-[#888] mb-3">{bar.label}</div>
                <div className="flex items-center gap-4">
                  <div className="flex-1 h-1.5 bg-pa-border rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: bar.width }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.3 + i * 0.15 }}
                      className="h-full bg-pa-orange rounded-full"
                    />
                  </div>
                  <span className="font-display font-extrabold text-white text-2xl min-w-[60px] text-right">{bar.value}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right - headline */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="pa-label text-pa-orange mb-4">El panorama actual</div>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-white leading-tight">
              Los atacantes están acelerando su velocidad y escala.
            </h2>
          </motion.div>
        </div>

        {/* Why FYH - like PA "Why Palo Alto Networks" */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="pa-label text-pa-yellow mb-4">Por qué FYH Ingenieros</div>
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-white leading-tight">
              Nuestro equipo blinda tu operación con metodologías probadas.{' '}
              <span className="text-pa-orange">
                Consultoría experta en IEC 62443, NERC CIP y Ley 21663.
              </span>
            </h2>
            <div className="flex items-start">
              <button onClick={() => document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' })}
                className="pa-btn-outline">
                Conocer nuestros servicios <span className="ml-1">→</span>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="pa-card"
            >
              <div className={`text-4xl lg:text-5xl font-extrabold ${s.color} mb-2`}>{s.value}</div>
              <div className="text-white font-semibold mb-3">{s.label}</div>
              <p className="text-sm text-[#888]">
                Resultados comprobados de nuestro equipo consultor en banca, energía y minería.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
