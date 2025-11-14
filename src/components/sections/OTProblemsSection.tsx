'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  AlertTriangle,
  Lock,
  Network,
  Zap,
  ShieldCheck,
  CheckCircle2,
  TrendingDown,
  ArrowRight,
  Radio
} from 'lucide-react';

const problemsSolutions = [
  {
    id: 1,
    problem: "Vulnerabilidades Físicas Desprotegidas",
    pain: "Acceso físico descontrolado a equipos, cableado expuesto, sin cámaras. Un atacante entra y desconecta todo.",
    solution: "Assessment físico exhaustivo + controles de acceso biométrico + monitoreo 24/7",
    icon: AlertTriangle,
    painColor: "electric-magenta",
    solutionColor: "cyber-lime"
  },
  {
    id: 2,
    problem: "VPN Inseguras & Autenticación Débil",
    pain: "VPNs sin MFA permiten acceso remoto desprotegido. Credenciales comprometidas = pérdida total de operación.",
    solution: "Implementación de MFA, RSA tokens, RBAC y autenticación multifactor presencial",
    icon: Lock,
    painColor: "plasma-orange",
    solutionColor: "quantum-blue"
  },
  {
    id: 3,
    problem: "Inventario Incompleto & Activos Obsoletos",
    pain: "No sabes qué sistemas tienes, firmware de 18 años sin respaldos. Una caída = pérdida permanente de datos.",
    solution: "Descubrimiento automático de activos + respaldo integral de firmware + sistemas de contingencia",
    icon: Radio,
    painColor: "electric-magenta",
    solutionColor: "cyber-lime"
  },
  {
    id: 4,
    problem: "Redes Sin Segmentación",
    pain: "Zonas críticas conectadas sin aislamiento. Un ataque en una red = comprometida toda la operación industrial.",
    solution: "Segmentación por niveles (Modelo Purdue) + isolamiento de zonas críticas + microsegmentación",
    icon: Network,
    painColor: "plasma-orange",
    solutionColor: "quantum-blue"
  },
  {
    id: 5,
    problem: "Imposibilidad de Actualizar Parches",
    pain: "No puedes reiniciar sistemas sin parar producción. Vulnerabilidades conocidas quedan abiertas indefinidamente.",
    solution: "Plan de contingencia con sistemas isla + actualización programada + respuesta rápida a incidentes",
    icon: Zap,
    painColor: "electric-magenta",
    solutionColor: "cyber-lime"
  },
  {
    id: 6,
    problem: "Sin Mapeo de Riesgos Operacionales",
    pain: "Dirección no autoriza presupuesto. No sabes el costo real de detención: ¿USD/hora? ¿millones?",
    solution: "Análisis financiero OT: traduce riesgo operativo a cifra económica + business case ejecutivo",
    icon: TrendingDown,
    painColor: "plasma-orange",
    solutionColor: "quantum-blue"
  }
];

const OTProblemsSection: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-16 bg-gradient-to-br from-dark-void via-dark-void/95 to-dark-void relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ec4899' fill-opacity='0.2'%3E%3Cpath d='M30 0L60 30L30 60L0 30z'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Animated Danger Glow */}
      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{ repeat: Infinity, duration: 25, ease: "easeInOut" }}
        className="absolute top-20 left-10 w-40 h-40 rounded-full opacity-8 blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgb(236 72 153 / 0.8) 0%, transparent 70%)'
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
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
            <AlertTriangle className="h-6 w-6 text-electric-magenta glow-pulse" />
            <span className="font-space-grotesk font-bold text-electric-magenta text-lg tracking-wider">
              AMENAZAS OT REALES
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
              Los Problemas Que
              <span className="block text-gradient glow-pulse">
                Paraliza tu Operación OT
              </span>
            </h2>

            <p className="font-poppins text-xl text-silver-mist max-w-4xl mx-auto leading-relaxed">
              No es software. Es tu infraestructura crítica en riesgo.
              <span className="block font-bold text-electric-magenta mt-2">
                Y sabes exactamente dónde están los agujeros.
              </span>
            </p>
          </motion.div>
        </motion.div>

        {/* Problems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {problemsSolutions.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.12 }}
              className="group glass-effect electric-border rounded-2xl p-5 modern-hover relative overflow-hidden"
            >
              {/* Background Glow */}
              <div className="absolute inset-0 opacity-10 blur-3xl">
                <div className={`w-full h-full bg-gradient-to-br from-${item.painColor} to-electric-magenta`} />
              </div>

              <div className="relative z-10">
                {/* Problem Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  className={`inline-flex p-3 rounded-xl bg-gradient-to-r from-${item.painColor} to-electric-magenta mb-3`}
                >
                  <item.icon className="h-8 w-8 text-light-ghost glow-pulse" />
                </motion.div>

                {/* Problem Title */}
                <h3 className="font-space-grotesk font-bold text-lg text-light-ghost mb-3">
                  {item.problem}
                </h3>

                {/* Pain Point - Dolor */}
                <div className="rounded-xl p-4 mb-4 border border-red-400/40 bg-gradient-to-r from-red-950/70 to-rose-950/70">
                  <p className="font-poppins text-red-200 font-semibold text-xs uppercase tracking-wider mb-2 flex items-center gap-2">
                    <TrendingDown className="h-4 w-4" />
                    Problema:
                  </p>
                  <p className="font-poppins text-white leading-relaxed text-sm">
                    {item.pain}
                  </p>
                </div>

                {/* Solution - Solución */}
                <div className="rounded-xl p-4 border border-emerald-400/40 bg-gradient-to-r from-emerald-950/70 to-teal-950/70">
                  <p className={`font-poppins text-emerald-200 font-semibold text-xs uppercase tracking-wider mb-2 flex items-center gap-2`}>
                    <CheckCircle2 className="h-4 w-4" />
                    Solución:
                  </p>
                  <p className="font-poppins text-white leading-relaxed text-sm">
                    {item.solution}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <p className="font-poppins text-lg text-silver-mist mb-8 max-w-3xl mx-auto leading-relaxed">
            <span className="font-bold text-electric-magenta">
              Sin un roadmap de ciberseguridad OT, sin mapeo de riesgos y sin inventario de activos:
            </span>
            {' '}ya eres objetivo de los atacantes.
          </p>

          <motion.button
            onClick={scrollToContact}
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="relative overflow-hidden px-12 py-6 rounded-2xl font-space-grotesk font-bold text-xl modern-hover hologram-effect inline-flex items-center gap-3"
            style={{
              background: 'linear-gradient(135deg, rgb(236 72 153) 0%, rgb(124 58 237) 100%)',
              color: 'white'
            }}
          >
            <ShieldCheck className="h-6 w-6" />
            Solicitar Assessment Diagnóstico OT
            <ArrowRight className="h-6 w-6" />
          </motion.button>

          <p className="font-poppins text-steel-gray text-sm mt-6">
            Evaluación profesional completa. Sin costo. Sin compromiso.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default OTProblemsSection;
