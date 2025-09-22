'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Shield,
  Zap,
  Target,
  Sparkles,
  Rocket,
  Award,
  TrendingUp,
  CheckCircle,
  Play
} from 'lucide-react';

const modernServices = [
  {
    icon: Shield,
    title: "Ciberseguridad OT",
    description: "Protección avanzada para infraestructura crítica",
    color: "neon-purple"
  },
  {
    icon: Target,
    title: "Compliance 360°",
    description: "Ley 21663, NERC CIP, NIS2 e ISO 27001",
    color: "electric-magenta"
  },
  {
    icon: Zap,
    title: "IA & Automatización",
    description: "Procesos inteligentes y automatización avanzada",
    color: "cyber-lime"
  }
];

const successMetrics = [
  { number: "340%", label: "ROI Promedio", icon: TrendingUp },
  { number: "$2.8M", label: "Ahorros Generados", icon: Award },
  { number: "99.9%", label: "Uptime Garantizado", icon: CheckCircle },
  { number: "48hrs", label: "Tiempo Respuesta", icon: Rocket }
];

const clientTestimonials = [
  {
    company: "Banco Central de Chile",
    result: "85% reducción incidentes OT",
    impact: "$2.8M ahorrados",
    executive: "CISO"
  },
  {
    company: "Minera Los Andes",
    result: "ROI 340% en 6 meses",
    impact: "$2.3M anuales",
    executive: "CTO"
  },
  {
    company: "Enel Distribución",
    result: "100% compliance Ley 21663",
    impact: "0 multas regulatorias",
    executive: "Director TI"
  }
];

const HeroSection: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen overflow-hidden bg-gradient-to-br from-light-ghost via-white to-silver-mist">

      {/* Modern Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(124 58 237 / 0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Floating Gradient Orbs */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "easeInOut"
        }}
        className="absolute top-20 right-20 w-96 h-96 rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, rgb(124 58 237 / 0.4) 0%, rgb(236 72 153 / 0.2) 50%, transparent 100%)'
        }}
      />

      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, 30, 0],
          scale: [1, 0.8, 1]
        }}
        transition={{
          repeat: Infinity,
          duration: 25,
          ease: "easeInOut"
        }}
        className="absolute bottom-32 left-20 w-80 h-80 rounded-full opacity-15"
        style={{
          background: 'radial-gradient(circle, rgb(16 185 129 / 0.4) 0%, rgb(6 182 212 / 0.2) 50%, transparent 100%)'
        }}
      />

      <div className="relative z-10 container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-screen">

          {/* Left Content - Revolutionary Messaging */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Urgency Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center gap-3 px-6 py-3 glass-effect electric-border rounded-full"
            >
              <Sparkles className="h-5 w-5 text-electric-magenta glow-pulse" />
              <span className="font-poppins font-semibold text-electric-magenta text-sm">
                Últimas 3 consultorías disponibles Q4 2024
              </span>
            </motion.div>

            {/* Company Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="inline-flex items-center gap-3 px-8 py-4 modern-hover glass-effect quantum-border rounded-full"
            >
              <div className="w-3 h-3 bg-cyber-lime rounded-full float-animation" />
              <span className="font-space-grotesk font-bold text-quantum-blue text-lg tracking-wider">
                FYH INGENIEROS 2.0
              </span>
            </motion.div>

            {/* Revolutionary Headline */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="space-y-6"
            >
              <h1 className="display-text text-6xl md:text-8xl lg:text-9xl text-dark-void leading-none">
                FUTURO
                <span className="block text-gradient glow-pulse">
                  CYBER
                </span>
                <span className="block text-plasma-orange neon-glow">
                  HOY
                </span>
              </h1>

              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="font-space-grotesk text-3xl md:text-4xl font-bold text-steel-gray"
              >
                Líderes en Ciberseguridad OT • ROI 340% Garantizado
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="font-poppins text-xl text-steel-gray max-w-2xl leading-relaxed"
              >
                Transformamos tu infraestructura crítica con tecnología de vanguardia.
                Partners oficiales <span className="font-bold text-electric-magenta">Dragos Security</span>,
                <span className="font-bold text-neon-purple"> Nozomi Networks</span> y
                <span className="font-bold text-cyber-lime"> DHD Care</span>.
              </motion.p>
            </motion.div>

            {/* Revolutionary CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex flex-col sm:flex-row gap-6"
            >
              <button
                onClick={() => scrollToSection('contacto')}
                className="group relative overflow-hidden px-10 py-6 rounded-2xl font-space-grotesk font-bold text-lg modern-hover hologram-effect"
                style={{
                  background: 'linear-gradient(135deg, rgb(124 58 237) 0%, rgb(236 72 153) 100%)',
                  color: 'white'
                }}
              >
                <div className="relative z-10 flex flex-col items-center gap-2">
                  <span>Auditoría OT Gratuita $8,500 USD</span>
                  <span className="text-sm opacity-90 font-poppins font-medium">
                    Sin compromiso • Entrega 48hrs • Resultados garantizados
                  </span>
                </div>
                <ArrowRight className="inline-block ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
              </button>

              <button
                onClick={() => scrollToSection('servicios')}
                className="group px-10 py-6 glass-effect electric-border rounded-2xl font-space-grotesk font-bold text-electric-magenta text-lg magnetic-hover flex items-center gap-3"
              >
                <Play className="h-6 w-6" />
                Ver Demo Tecnológica
              </button>
            </motion.div>

            {/* Modern Service Cards */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.4 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {modernServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.5 + index * 0.1 }}
                  className="glass-hover p-6 rounded-2xl glass-effect quantum-border group"
                >
                  <service.icon className={`h-10 w-10 text-${service.color} mb-4 glow-pulse`} />
                  <h3 className="font-space-grotesk font-bold text-dark-void mb-2 text-lg">
                    {service.title}
                  </h3>
                  <p className="font-poppins text-steel-gray text-sm">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Success Proof */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="space-y-8"
          >
            {/* Success Metrics Dashboard */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="glass-effect p-8 rounded-3xl electric-border modern-hover"
            >
              <div className="text-center mb-8">
                <h3 className="font-space-grotesk font-bold text-2xl text-dark-void mb-2">
                  RESULTADOS COMPROBADOS
                </h3>
                <p className="font-poppins text-steel-gray">Métricas reales de nuestros clientes</p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {successMetrics.map((metric, index) => (
                  <motion.div
                    key={metric.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                    className="text-center group glass-hover p-4 rounded-xl"
                  >
                    <metric.icon className="h-8 w-8 text-electric-magenta mx-auto mb-3 glow-pulse" />
                    <div className="font-space-grotesk font-bold text-3xl text-dark-void mb-1">
                      {metric.number}
                    </div>
                    <div className="font-poppins text-steel-gray text-sm">
                      {metric.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Client Success Stories */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="space-y-4"
            >
              <h4 className="font-space-grotesk font-bold text-dark-void text-lg mb-4">
                Casos de Éxito Verificados
              </h4>

              {clientTestimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.company}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.6 + index * 0.2 }}
                  className="glass-effect p-6 rounded-2xl glass-hover quantum-border"
                >
                  <div className="flex items-start gap-4">
                    <Award className="h-6 w-6 text-plasma-orange flex-shrink-0 mt-1 glow-pulse" />
                    <div>
                      <div className="font-space-grotesk font-bold text-dark-void text-lg mb-1">
                        {testimonial.company}
                      </div>
                      <div className="font-poppins text-electric-magenta font-semibold mb-1">
                        {testimonial.impact}
                      </div>
                      <div className="font-poppins text-steel-gray text-sm mb-2">
                        {testimonial.result}
                      </div>
                      <div className="font-poppins text-steel-gray text-xs italic">
                        — {testimonial.executive}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Live Status Indicator */}
            <motion.div
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="flex items-center justify-center gap-4 py-6"
            >
              <div className="w-4 h-4 bg-cyber-lime rounded-full float-animation" />
              <span className="font-space-grotesk font-bold text-cyber-lime text-lg glow-pulse">
                SISTEMAS OPERATIVOS SEGUROS
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Floating Security Elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
        className="absolute top-32 right-32 w-20 h-20 glass-effect rounded-full flex items-center justify-center electric-border"
      >
        <Shield className="h-10 w-10 text-neon-purple glow-pulse" />
      </motion.div>

      <motion.div
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
        className="absolute bottom-32 left-32 w-20 h-20 glass-effect rounded-full flex items-center justify-center quantum-border"
      >
        <Target className="h-10 w-10 text-cyber-lime glow-pulse" />
      </motion.div>
    </section>
  );
};

export default HeroSection;