'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  const goto = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="inicio" className="relative overflow-hidden">
      {/* Full background image */}
      <div className="absolute inset-0">
        <img
          src="/hero-ot-shield.jpg"
          alt="Infraestructura industrial protegida por escudo de ciberseguridad OT"
          className="w-full h-full object-cover"
        />
        {/* Multi-layer overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
        {/* Bottom hard fade to black for seamless transition */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent" />
      </div>

      {/* Hero content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 lg:py-44 min-h-[85vh] flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="pa-label text-pa-yellow mb-6"
          >
            Consultores Ciberseguridad OT
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-6"
          >
            Expertos en Ciberseguridad OT.{' '}
            <span className="text-pa-orange">Protegemos tu Infraestructura Crítica.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="text-lg text-[#ccc] mb-10 leading-relaxed max-w-xl"
          >
            Equipo consultor especializado en protección de sistemas industriales,
            compliance normativo IEC 62443 y Ley 21663. Certificados en Dragos, Nozomi, Wallix OT y DHD Care.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <button onClick={() => goto('contacto')} className="pa-btn-orange">
              Solicitar Evaluación <ArrowRight className="h-4 w-4" />
            </button>
            <button onClick={() => goto('servicios')} className="pa-btn-outline !border-white/40 !text-white hover:!bg-white/10">
              Ver Servicios <ArrowRight className="h-4 w-4" />
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Recommended strip */}
      <div className="relative z-10 border-t border-white/10 bg-black/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="pa-label text-pa-yellow mb-4">Destacados</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Certificados Dragos & Nozomi', desc: 'Únicos consultores certificados en Chile', color: 'pa-orange' },
              { title: 'Expertos IEC 62443 & Ley 21663', desc: 'Compliance garantizado en 90 días', color: 'pa-green' },
              { title: 'ROI 340% Documentado', desc: 'Resultados medibles en banca, minería y energía', color: 'pa-yellow' },
            ].map((item) => (
              <button key={item.title} onClick={() => goto('servicios')}
                className="flex items-start gap-4 text-left group hover:bg-white/5 rounded-lg p-3 -m-3 transition-colors">
                <div className={`w-1 h-12 bg-${item.color} rounded-full flex-shrink-0`} />
                <div>
                  <div className="text-white font-semibold text-sm group-hover:text-pa-orange transition-colors">{item.title}</div>
                  <div className="text-[#888] text-sm">{item.desc}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
