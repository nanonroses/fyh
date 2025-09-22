'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Shield,
  Target,
  TrendingUp,
  Zap,
  Network,
  Briefcase,
  ArrowRight,
  CheckCircle,
  Sparkles,
  Rocket,
  Crown,
  Star
} from 'lucide-react';

const modernServices = [
  {
    id: 1,
    title: "Protección OT Avanzada",
    subtitle: "Blindaje Total Infraestructura Crítica",
    description: "Tecnología de vanguardia para protección completa de sistemas operacionales",
    businessOutcome: "Reduce incidentes críticos en 85% • Garantiza continuidad 24/7",
    roi: "ROI 340% en 12 meses",
    value: "$2.8M USD ahorrados promedio",
    deliverables: [
      "Implementación Dragos Platform completa",
      "Monitoreo Nozomi Networks 24/7/365",
      "Respuesta a incidentes <30min garantizada",
      "Compliance 100% certificado"
    ],
    icon: Shield,
    gradient: "from-neon-purple to-electric-magenta",
    priority: "CRÍTICO",
    priorityColor: "electric-magenta",
    implementationTime: "4-6 semanas",
    bgColor: "neon-purple"
  },
  {
    id: 2,
    title: "Compliance Regulatorio Total",
    subtitle: "Cumplimiento Normativo Garantizado",
    description: "Marco integral para cumplimiento con regulaciones nacionales e internacionales",
    businessOutcome: "0 multas regulatorias • Certificación en primeros 90 días",
    roi: "Evita multas de $500K-$2M USD",
    value: "100% compliance garantizado",
    deliverables: [
      "Certificación Ley 21663 Chile completa",
      "NERC CIP compliance integral",
      "ISO 27001 en 6 meses máximo",
      "Auditorías trimestrales incluidas"
    ],
    icon: Target,
    gradient: "from-cyber-lime to-quantum-blue",
    priority: "URGENTE",
    priorityColor: "plasma-orange",
    implementationTime: "2-3 semanas",
    bgColor: "cyber-lime"
  },
  {
    id: 3,
    title: "Automatización Inteligente",
    subtitle: "RPA + IA para Máxima Eficiencia",
    description: "Eliminación completa de tareas manuales mediante automatización avanzada",
    businessOutcome: "Reduce costos operativos 60% • Elimina errores humanos 100%",
    roi: "$2.3M USD ahorrados anuales",
    value: "Eficiencia operacional máxima",
    deliverables: [
      "Automatización de pagos 100% completa",
      "Conciliaciones en tiempo real",
      "RPA con IA predictiva avanzada",
      "Dashboard ejecutivo en vivo"
    ],
    icon: Zap,
    gradient: "from-plasma-orange to-neon-purple",
    priority: "ALTO ROI",
    priorityColor: "cyber-lime",
    implementationTime: "6-8 semanas",
    bgColor: "plasma-orange"
  },
  {
    id: 4,
    title: "Transformación Digital OT",
    subtitle: "Modernización Infraestructura Completa",
    description: "Evolución total hacia arquitectura operacional de nueva generación",
    businessOutcome: "Aumenta eficiencia 45% • Reduce downtime no planificado",
    roi: "$1.8M USD valor agregado",
    value: "Infraestructura futuro-ready",
    deliverables: [
      "Arquitectura cloud-native híbrida",
      "Integración IT-OT segura avanzada",
      "Analytics predictivo con ML",
      "Soporte 24/7 especializado premium"
    ],
    icon: Network,
    gradient: "from-quantum-blue to-electric-magenta",
    priority: "ESTRATÉGICO",
    priorityColor: "quantum-blue",
    implementationTime: "8-12 semanas",
    bgColor: "quantum-blue"
  }
];

const ServicesSection: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="servicios" className="py-24 bg-gradient-to-br from-light-ghost via-silver-mist/30 to-light-ghost relative overflow-hidden">

      {/* Revolutionary Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ec4899' fill-opacity='0.2'%3E%3Cpath d='M30 0L60 30L30 60L0 30z'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          rotate: [0, 180, 360]
        }}
        transition={{ repeat: Infinity, duration: 30, ease: "easeInOut" }}
        className="absolute top-32 right-32 w-32 h-32 rounded-full opacity-10 blur-2xl"
        style={{
          background: 'radial-gradient(circle, rgb(124 58 237 / 0.6) 0%, transparent 70%)'
        }}
      />

      <div className="container mx-auto px-6 relative z-10">

        {/* Revolutionary Header */}
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
            className="inline-flex items-center gap-3 glass-effect quantum-border rounded-full px-8 py-4 mb-8 modern-hover"
          >
            <Crown className="h-6 w-6 text-plasma-orange glow-pulse" />
            <span className="font-space-grotesk font-bold text-plasma-orange text-lg tracking-wider">
              SOLUCIONES PREMIUM
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            <h2 className="display-text text-5xl lg:text-7xl text-dark-void leading-none">
              SERVICIOS
              <span className="block text-gradient glow-pulse">
                REVOLUCIONARIOS
              </span>
            </h2>

            <p className="font-poppins text-xl text-steel-gray max-w-4xl mx-auto leading-relaxed">
              Tecnologías de vanguardia que transforman completamente tu infraestructura.
              Resultados{' '}
              <span className="font-bold text-electric-magenta">medibles desde el primer día</span>{' '}
              con{' '}
              <span className="font-bold text-cyber-lime">ROI garantizado</span>.
            </p>
          </motion.div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {modernServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="group glass-effect electric-border rounded-3xl p-8 modern-hover relative overflow-hidden"
            >

              {/* Priority Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className={`absolute top-6 right-6 px-4 py-2 rounded-full text-xs font-space-grotesk font-bold glass-effect quantum-border text-${service.priorityColor} glow-pulse`}
              >
                {service.priority}
              </motion.div>

              {/* Service Header */}
              <div className="mb-8">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${service.gradient} mb-6 modern-hover`}
                >
                  <service.icon className="h-10 w-10 text-light-ghost glow-pulse" />
                </motion.div>

                <h3 className="font-space-grotesk font-bold text-3xl text-dark-void mb-2">
                  {service.title}
                </h3>

                <h4 className={`font-poppins font-semibold text-lg text-${service.priorityColor} mb-4`}>
                  {service.subtitle}
                </h4>

                <p className="font-poppins text-steel-gray mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Business Impact */}
                <div className="glass-effect rounded-2xl p-6 mb-6 quantum-border">
                  <div className="flex items-start gap-4">
                    <TrendingUp className={`h-6 w-6 text-${service.bgColor} mt-1 flex-shrink-0 glow-pulse`} />
                    <div>
                      <p className={`text-${service.bgColor} font-space-grotesk font-bold mb-2`}>
                        Impacto Empresarial Directo:
                      </p>
                      <p className="font-poppins text-dark-void text-sm">
                        {service.businessOutcome}
                      </p>
                    </div>
                  </div>
                </div>

                {/* ROI Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="glass-effect rounded-xl p-4 text-center quantum-border">
                    <p className="font-poppins text-steel-gray text-xs mb-1">ROI Proyectado:</p>
                    <p className={`font-space-grotesk font-bold text-${service.bgColor} text-lg glow-pulse`}>
                      {service.roi}
                    </p>
                  </div>
                  <div className="glass-effect rounded-xl p-4 text-center quantum-border">
                    <p className="font-poppins text-steel-gray text-xs mb-1">Implementación:</p>
                    <p className="font-space-grotesk font-bold text-dark-void text-lg">
                      {service.implementationTime}
                    </p>
                  </div>
                </div>
              </div>

              {/* Deliverables */}
              <div className="space-y-4 mb-8">
                <h4 className="font-space-grotesk font-bold text-dark-void uppercase tracking-wide flex items-center gap-2">
                  <Star className={`h-4 w-4 text-${service.bgColor}`} />
                  Incluye Premium:
                </h4>
                {service.deliverables.map((deliverable, deliverableIndex) => (
                  <motion.div
                    key={deliverableIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + deliverableIndex * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className={`h-5 w-5 text-${service.bgColor} mt-0.5 flex-shrink-0 glow-pulse`} />
                    <span className="font-poppins text-steel-gray text-sm">
                      {deliverable}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Revolutionary CTA */}
              <motion.button
                onClick={scrollToContact}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full group relative overflow-hidden bg-gradient-to-r ${service.gradient} text-light-ghost py-5 px-8 rounded-2xl font-space-grotesk font-bold text-lg modern-hover hologram-effect`}
              >
                <div className="relative z-10 flex items-center justify-center gap-3">
                  <Rocket className="h-5 w-5" />
                  <span>Solicitar Consultoría Premium</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
                </div>
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Revolutionary Value Proposition */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <div className="glass-effect electric-border rounded-3xl p-12 lg:p-16 max-w-6xl mx-auto modern-hover relative overflow-hidden">

            {/* Background Glow */}
            <div className="absolute inset-0 opacity-20 blur-3xl">
              <div className="w-full h-full bg-gradient-to-br from-neon-purple via-electric-magenta to-cyber-lime" />
            </div>

            <div className="relative z-10">
              <motion.div
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.2 }}
                className="mb-8"
              >
                <h3 className="font-space-grotesk font-bold text-4xl lg:text-5xl text-dark-void mb-6">
                  Resultados{' '}
                  <span className="text-gradient glow-pulse">Revolucionarios</span>{' '}
                  Garantizados
                </h3>
                <p className="font-poppins text-xl text-steel-gray leading-relaxed max-w-4xl mx-auto">
                  Somos los únicos en Chile que garantizamos{' '}
                  <span className="font-bold text-electric-magenta">resultados medibles</span>{' '}
                  y{' '}
                  <span className="font-bold text-cyber-lime">ROI positivo</span>{' '}
                  en los primeros 90 días de implementación.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                {[
                  { metric: "90 días", label: "ROI positivo garantizado", color: "cyber-lime", icon: Target },
                  { metric: "24/7", label: "Soporte especializado premium", color: "electric-magenta", icon: Shield },
                  { metric: "100%", label: "Compliance certificado", color: "plasma-orange", icon: Crown }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="text-center glass-effect rounded-2xl p-6 quantum-border glass-hover"
                  >
                    <item.icon className={`h-8 w-8 text-${item.color} mx-auto mb-3 glow-pulse`} />
                    <div className={`text-4xl font-bold text-${item.color} mb-2 glow-pulse`}>
                      {item.metric}
                    </div>
                    <div className="font-poppins text-steel-gray text-sm">
                      {item.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.button
                onClick={scrollToContact}
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="relative overflow-hidden px-12 py-6 rounded-2xl font-space-grotesk font-bold text-xl modern-hover hologram-effect"
                style={{
                  background: 'linear-gradient(135deg, rgb(124 58 237) 0%, rgb(236 72 153) 100%)',
                  color: 'white'
                }}
              >
                <div className="relative z-10 flex items-center gap-3">
                  <Sparkles className="h-6 w-6" />
                  Comenzar Transformación Ahora
                  <ArrowRight className="h-6 w-6" />
                </div>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;