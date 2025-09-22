'use client'

import { motion } from 'framer-motion'
import {
  Mail,
  Phone,
  Clock,
  CheckCircle,
  Shield,
  Zap,
  Target,
  Award,
  Users,
  Sparkles,
  Rocket,
  Star,
  AlertTriangle
} from 'lucide-react'
import ProgressiveContactForm from './ProgressiveContactForm'

const urgencyIndicators = [
  {
    text: "Solo 3 auditorías gratuitas disponibles Q4 2024",
    icon: Clock,
    color: "electric-magenta"
  },
  {
    text: "Próximo ciberataque proyectado en 47 días promedio",
    icon: AlertTriangle,
    color: "plasma-orange"
  },
  {
    text: "Ley 21663: Multas desde $50M CLP por incumplimiento",
    icon: Shield,
    color: "neon-purple"
  }
];

const consultationValue = [
  {
    item: "Diagnóstico completo de vulnerabilidades OT",
    value: "$3,500 USD",
    icon: Shield,
    color: "neon-purple"
  },
  {
    item: "Roadmap de implementación personalizado",
    value: "$2,800 USD",
    icon: Target,
    color: "electric-magenta"
  },
  {
    item: "Análisis de ROI y business case ejecutivo",
    value: "$1,500 USD",
    icon: Zap,
    color: "cyber-lime"
  },
  {
    item: "Propuesta técnica y presupuesto detallado",
    value: "$700 USD",
    icon: Award,
    color: "plasma-orange"
  }
];

const contactMethods = [
  {
    type: "Email Ejecutivo",
    contact: "contacto@fyhingenieros.cl",
    response: "Respuesta en <2h",
    icon: Mail,
    gradient: "from-neon-purple to-electric-magenta",
    responseColor: "electric-magenta"
  },
  {
    type: "WhatsApp Directo",
    contact: "+56 9 6211 6017",
    response: "Disponible 24/7",
    icon: Phone,
    gradient: "from-cyber-lime to-quantum-blue",
    responseColor: "cyber-lime"
  },
  {
    type: "Videollamada Estratégica",
    contact: "Agenda en calendly",
    response: "30 min • Mismo día",
    icon: Users,
    gradient: "from-plasma-orange to-neon-purple",
    responseColor: "plasma-orange"
  }
];

export default function ContactSection() {
  const scrollToForm = () => {
    const form = document.querySelector('form');
    if (form) form.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="contacto" className="py-24 bg-gradient-to-br from-dark-void via-carbon-black to-dark-void relative overflow-hidden">

      {/* Modern Geometric Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ec4899' fill-opacity='0.1'%3E%3Cpath d='M40 40c0-22.091 17.909-40 40-40v80c-22.091 0-40-17.909-40-40z'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '80px 80px'
        }} />
      </div>

      {/* Floating Gradient Orbs */}
      <motion.div
        animate={{
          x: [0, 120, 0],
          y: [0, -60, 0],
          scale: [1, 1.3, 1]
        }}
        transition={{ repeat: Infinity, duration: 25, ease: "easeInOut" }}
        className="absolute top-20 left-20 w-96 h-96 rounded-full opacity-20 blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgb(124 58 237 / 0.6) 0%, rgb(236 72 153 / 0.3) 50%, transparent 100%)'
        }}
      />

      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, 40, 0],
          scale: [1, 0.8, 1]
        }}
        transition={{ repeat: Infinity, duration: 30, ease: "easeInOut" }}
        className="absolute bottom-20 right-20 w-80 h-80 rounded-full opacity-15 blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgb(16 185 129 / 0.6) 0%, rgb(245 158 11 / 0.3) 50%, transparent 100%)'
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Revolutionary Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >

          {/* Urgency Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {urgencyIndicators.map((indicator, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="glass-effect electric-border rounded-2xl px-6 py-4 modern-hover"
              >
                <div className="flex items-center gap-3">
                  <indicator.icon className={`h-6 w-6 text-${indicator.color} glow-pulse`} />
                  <span className={`text-${indicator.color} font-poppins font-semibold text-sm`}>
                    {indicator.text}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Value Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="inline-flex items-center glass-effect quantum-border rounded-full px-8 py-4 mb-8 modern-hover"
          >
            <Star className="w-6 h-6 text-plasma-orange mr-3 glow-pulse" />
            <span className="font-space-grotesk font-bold text-light-ghost text-lg">
              Auditoría Estratégica $8,500 USD -
              <span className="text-cyber-lime"> HOY GRATIS</span>
            </span>
          </motion.div>

          {/* Revolutionary Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="space-y-6"
          >
            <h2 className="display-text text-5xl lg:text-7xl text-light-ghost leading-none mb-6">
              PROTEGE TU
              <span className="block text-gradient glow-pulse">
                EMPRESA
              </span>
              <span className="block text-plasma-orange neon-glow">
                AHORA
              </span>
            </h2>

            <p className="font-poppins text-xl text-steel-gray max-w-4xl mx-auto leading-relaxed">
              Obtén una auditoría completa de ciberseguridad OT valorada en{' '}
              <span className="font-bold text-cyber-lime">$8,500 USD</span>{' '}
              completamente gratis. Descubre tus vulnerabilidades críticas y el plan de protección
              personalizado para tu infraestructura.
            </p>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap justify-center gap-8 mt-8"
          >
            {[
              "Entrega garantizada en 48h",
              "Sin compromiso de compra",
              "100% confidencial",
              "Realizada por expertos certificados"
            ].map((trust, index) => (
              <div key={index} className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-cyber-lime glow-pulse" />
                <span className="font-poppins text-steel-gray">{trust}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-5 gap-16 items-start">

          {/* Left Content - Value Proposition */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 space-y-8"
          >

            {/* Value Breakdown */}
            <div className="glass-effect electric-border rounded-3xl p-8 modern-hover">
              <div className="text-center mb-8">
                <h3 className="font-space-grotesk font-bold text-2xl text-light-ghost mb-4">
                  Valor de tu Auditoría Gratuita
                </h3>
                <div className="text-5xl font-bold text-cyber-lime mb-2 glow-pulse">
                  $8,500 USD
                </div>
                <div className="font-poppins text-steel-gray">
                  Incluye todo lo siguiente:
                </div>
              </div>

              <div className="space-y-4">
                {consultationValue.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="glass-effect rounded-xl p-4 glass-hover"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <item.icon className={`h-6 w-6 text-${item.color} glow-pulse`} />
                        <span className="font-poppins text-light-ghost text-sm">
                          {item.item}
                        </span>
                      </div>
                      <span className={`text-${item.color} font-space-grotesk font-bold`}>
                        {item.value}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-steel-gray/20 text-center">
                <div className="font-poppins text-steel-gray mb-2">Tu inversión hoy:</div>
                <div className="text-4xl font-bold text-cyber-lime glow-pulse">$0 USD</div>
                <div className="font-poppins text-steel-gray text-sm">Solo por tiempo limitado</div>
              </div>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-effect quantum-border rounded-2xl p-6 glass-hover"
                >
                  <div className="flex items-center space-x-4">
                    <div className={`bg-gradient-to-r ${method.gradient} p-4 rounded-xl modern-hover`}>
                      <method.icon className="h-6 w-6 text-light-ghost" />
                    </div>
                    <div>
                      <div className="font-space-grotesk font-bold text-light-ghost text-lg">
                        {method.type}
                      </div>
                      <div className="font-poppins text-steel-gray">
                        {method.contact}
                      </div>
                      <div className={`font-poppins text-${method.responseColor} text-sm glow-pulse`}>
                        {method.response}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Enhanced Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-3"
          >

            {/* Urgency Banner */}
            <div className="glass-effect electric-border rounded-2xl p-6 mb-8 modern-hover">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-r from-electric-magenta to-plasma-orange rounded-xl">
                    <Rocket className="h-6 w-6 text-light-ghost" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Sparkles className="h-5 w-5 text-electric-magenta glow-pulse" />
                      <span className="text-electric-magenta font-space-grotesk font-bold">
                        ACCIÓN INMEDIATA
                      </span>
                    </div>
                    <div className="font-poppins text-light-ghost text-sm">
                      Solo quedan <strong className="text-cyber-lime">3 auditorías gratuitas</strong> este trimestre
                    </div>
                    <div className="font-poppins text-steel-gray text-xs">
                      Próximo ataque estimado en 47 días según nuestros análisis
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-cyber-lime glow-pulse">GRATIS</div>
                  <div className="text-xs text-steel-gray line-through">$8,500 USD</div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <ProgressiveContactForm />

            {/* Security & Trust */}
            <div className="mt-8 glass-effect quantum-border rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="h-8 w-8 text-cyber-lime glow-pulse" />
                <h4 className="font-space-grotesk font-bold text-light-ghost text-xl">
                  Tu información está 100% protegida
                </h4>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  "Encriptación SSL 256-bit",
                  "Política de privacidad estricta",
                  "Sin spam ni llamadas no deseadas",
                  "Cumplimiento GDPR completo"
                ].map((security, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-cyber-lime flex-shrink-0" />
                    <span className="font-poppins text-steel-gray text-sm">{security}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Final Revolutionary CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-20"
        >
          <div className="glass-effect electric-border rounded-3xl p-12 max-w-5xl mx-auto modern-hover">
            <div className="mb-8">
              <h3 className="font-space-grotesk font-bold text-4xl text-light-ghost mb-4">
                <span className="text-plasma-orange glow-pulse">⚡</span> Acción Inmediata = Protección Inmediata
              </h3>
              <p className="font-poppins text-xl text-steel-gray leading-relaxed max-w-3xl mx-auto">
                Cada día que esperes aumenta el riesgo exponencialmente. Las empresas que actúan
                <span className="font-bold text-cyber-lime"> ahora mismo</span> están{' '}
                <span className="font-bold text-electric-magenta">85% mejor protegidas</span>{' '}
                que las que postponen sus decisiones de seguridad.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button
                onClick={scrollToForm}
                className="group relative overflow-hidden px-12 py-6 rounded-2xl font-space-grotesk font-bold text-xl modern-hover hologram-effect"
                style={{
                  background: 'linear-gradient(135deg, rgb(16 185 129) 0%, rgb(6 182 212) 100%)',
                  color: 'white'
                }}
              >
                <span className="relative z-10 flex items-center gap-3">
                  <Rocket className="h-6 w-6" />
                  Solicitar Auditoría AHORA
                </span>
              </button>

              <div className="flex items-center gap-2 text-plasma-orange">
                <Clock className="h-5 w-5 glow-pulse" />
                <span className="font-poppins font-semibold">
                  Respuesta garantizada en menos de 2 horas
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}