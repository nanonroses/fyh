'use client'

import { motion } from 'framer-motion'
import { 
  Search,
  Map,
  Settings,
  Shield,
  BarChart3,
  HeadphonesIcon,
  CheckCircle,
  TrendingUp,
  Users,
  Building2,
  Sparkles
} from 'lucide-react'

const transformationServices = [
  {
    icon: Search,
    title: "DIAGNÓSTICO TECNOLÓGICO INICIAL",
    description: "Radiografía completa de tu infraestructura que revela el verdadero potencial de transformación",
    story: "Descubrimos las brechas ocultas que limitan tu crecimiento",
    price: "Desde $8K USD",
    features: ["Evaluación infraestructura actual", "Análisis procesos digitales", "Identificación brechas", "Mapeo oportunidades"],
    color: "from-cyan-600 via-blue-600 to-indigo-600",
    sector: "Universal",
    roi: "300% ROI típico"
  },
  {
    icon: Map,
    title: "DISEÑO DE ESTRATEGIA DIGITAL",
    description: "Roadmap ejecutivo que transforma la visión en resultados medibles y sostenibles",
    story: "El plan maestro que convierte tu empresa en líder digital",
    price: "Desde $15K USD",
    features: ["Roadmap transformación digital", "Selección tecnologías clave", "Plan adopción", "Gestión del cambio"],
    color: "from-blue-600 via-indigo-600 to-cyan-600",
    sector: "C-Level",
    roi: "500% ROI proyectado"
  },
  {
    icon: Settings,
    title: "IMPLEMENTACIÓN DE SOLUCIONES",
    description: "Ejecución de clase mundial que materializa la estrategia en ventaja competitiva real",
    story: "Donde la estrategia se convierte en superioridad operacional",
    price: "Desde $25K USD",
    features: ["Migración cloud (Azure/AWS/GCP)", "Automatización RPA", "Integración sistemas", "PMO especializado"],
    color: "from-indigo-600 via-cyan-600 to-blue-600",
    sector: "Minería, Finanzas",
    roi: "450% ROI garantizado"
  },
  {
    icon: Shield,
    title: "CIBERSEGURIDAD & COMPLIANCE",
    description: "Blindaje empresarial de nivel militar que protege activos críticos y cumple normativas globales",
    story: "La fortaleza digital que convierte amenazas en oportunidades",
    price: "Desde $30K USD",
    features: ["Auditoría E2E/Network/TI/OT", "Políticas protección datos", "ISO 27001/GDPR/SOX", "Compliance OT"],
    color: "from-cyan-600 via-indigo-600 to-blue-600",
    sector: "Críticas, Minería",
    roi: "ROI infinito vs breach"
  },
  {
    icon: BarChart3,
    title: "ANÁLISIS DE DATOS & BUSINESS INTELLIGENCE",
    description: "Inteligencia empresarial que transforma datos en decisiones de impacto exponencial",
    story: "El cerebro analítico que predice el futuro de tu negocio",
    price: "Desde $20K USD",
    features: ["Dashboards interactivos", "Modelos predictivos IA/ML", "Capacitación análisis", "KPIs ejecutivos"],
    color: "from-blue-600 via-cyan-600 to-indigo-600",
    sector: "Retail, Salud",
    roi: "380% ROI típico"
  },
  {
    icon: HeadphonesIcon,
    title: "SOPORTE & MEJORA CONTINUA",
    description: "Evolución tecnológica permanente que mantiene tu ventaja competitiva siempre vigente",
    story: "El motor de innovación que nunca se detiene",
    price: "Desde $5K USD",
    features: ["Monitoreo 24/7", "Actualización tecnológica", "Capacitación continua", "Acompañamiento post-implementación"],
    color: "from-indigo-600 via-blue-600 to-cyan-600",
    sector: "Todos",
    roi: "Crecimiento sostenido"
  }
]

const serviceModalities = [
  {
    icon: CheckCircle,
    title: "CONSULTORÍA POR PROYECTO",
    description: "Entregables definidos, cronograma fijo, resultados garantizados",
    features: ["Scope cerrado", "Timeline definido", "Entregables específicos", "Garantía resultados"]
  },
  {
    icon: Users,
    title: "OUTSOURCING DE EXPERTOS",
    description: "Talento especializado por horas o mensual para tu equipo",
    features: ["Por horas", "Mensual", "Expertos certificados", "Escalabilidad"]
  },
  {
    icon: HeadphonesIcon,
    title: "OUTSOURCING DE MESAS",
    description: "Soporte técnico N1 y N2 para operación continua",
    features: ["Mesa N1", "Mesa N2", "24/7 disponible", "SLA garantizado"]
  },
  {
    icon: TrendingUp,
    title: "ASESORÍA CONTINUA",
    description: "Modelo de suscripción para evolución tecnológica permanente",
    features: ["Suscripción mensual", "Asesoría continua", "Evolución constante", "Acceso prioritario"]
  }
]

const prioritySectors = [
  { name: "Minería", icon: Building2, focus: "OT Security & Automation" },
  { name: "Telecomunicaciones", icon: Building2, focus: "Network & Infrastructure" },
  { name: "Retail & eCommerce", icon: Building2, focus: "Digital Experience" },
  { name: "Finanzas & Seguros", icon: Building2, focus: "Compliance & Security" },
  { name: "Salud", icon: Building2, focus: "Data Analytics & Compliance" },
  { name: "Logística & Transporte", icon: Building2, focus: "IoT & Automation" }
]

export default function ServicesSection() {
  return (
    <section id="servicios" className="py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-400/3 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center bg-gradient-to-r from-cyan-50 to-blue-50 backdrop-blur-sm border border-cyan-100 rounded-full px-8 py-4 mb-8">
            <Sparkles className="w-6 h-6 text-cyan-600 mr-3" />
            <span className="text-cyan-700 font-black text-lg tracking-wide">SOLUCIONES DE IMPACTO</span>
          </div>
          
          <h2 className="text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-blue-200 leading-tight mb-8">
            SERVICIOS QUE
            <br />
            <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text">
              ROMPEN RÉCORDS
            </span>
          </h2>
          
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            No vendemos servicios ordinarios. Creamos 
            <span className="text-cyan-400 font-bold"> explosiones de productividad </span> 
            que transforman empresas para siempre.
          </p>
        </motion.div>

        {/* Core Transformation Services */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {transformationServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-blue-400/20 to-indigo-400/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all"></div>
              
              <div className="relative bg-slate-900/80 backdrop-blur-xl border-2 border-cyan-400/30 rounded-3xl p-8 hover:border-blue-400/50 transition-all h-full">
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-400 mb-1">INVERSIÓN</div>
                    <div className="text-xl font-black text-cyan-400">{service.price}</div>
                  </div>
                </div>

                <h3 className="text-2xl font-black text-white mb-3 group-hover:text-cyan-300 transition-colors">
                  {service.title}
                </h3>
                
                <div className="bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-xl p-4 mb-4">
                  <p className="text-cyan-300 font-semibold text-sm italic">&quot;{service.story}&quot;</p>
                </div>
                
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"></div>
                      <span className="text-gray-300 font-medium text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="text-xs text-gray-400">SECTOR</div>
                    <div className="text-sm font-semibold text-cyan-400">{service.sector}</div>
                    <div className="text-xs font-bold text-green-400">{service.roi}</div>
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-6 py-3 rounded-xl font-black text-sm hover:shadow-lg hover:shadow-cyan-500/25 transition-all"
                  >
                    SOLICITAR
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Service Modalities */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-4xl font-black text-white mb-4">
              <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                MODALIDADES DE SERVICIO
              </span>
            </h3>
            <p className="text-xl text-gray-300">Flexibilidad total para adaptarnos a tu realidad empresarial</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceModalities.map((modality, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all"
              >
                <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-3 rounded-xl w-fit mb-4">
                  <modality.icon className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{modality.title}</h4>
                <p className="text-gray-300 text-sm mb-4">{modality.description}</p>
                <div className="space-y-2">
                  {modality.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                      <span className="text-gray-400 text-xs">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Priority Sectors */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-4xl font-black text-white mb-4">
              <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                SECTORES PRIORITARIOS
              </span>
            </h3>
            <p className="text-xl text-gray-300">Especialización profunda donde generamos el mayor impacto</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {prioritySectors.map((sector, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/15 transition-all group"
              >
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-r from-indigo-500 to-cyan-600 p-3 rounded-xl group-hover:scale-110 transition-transform">
                    <sector.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-white text-lg">{sector.name}</div>
                    <div className="text-cyan-400 text-sm font-medium">{sector.focus}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Success Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-4xl font-black text-white mb-4">
              <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                INDICADORES DE ÉXITO
              </span>
            </h3>
            <p className="text-xl text-gray-300">Resultados medibles que transforman tu negocio</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { metric: "40%", label: "Reducción costos operativos", icon: TrendingUp },
              { metric: "85%", label: "Mejora experiencia cliente", icon: Users },
              { metric: "300%", label: "Incremento eficiencia procesos", icon: Settings },
              { metric: "99.9%", label: "Resiliencia ante ciberataques", icon: Shield }
            ].map((indicator, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/15 transition-all"
              >
                <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-4 rounded-2xl w-fit mx-auto mb-4">
                  <indicator.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl font-black text-green-400 mb-2">{indicator.metric}</div>
                <div className="text-gray-300 font-medium text-sm">{indicator.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-cyan-400/10 via-blue-400/10 to-indigo-400/10 backdrop-blur-xl border border-cyan-400/30 rounded-3xl p-12">
            <h3 className="text-4xl font-black text-white mb-4">
              ¿LISTO PARA LA TRANSFORMACIÓN?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Únete a las empresas líderes que ya transformaron su futuro con nuestras soluciones de clase mundial
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 text-white px-12 py-4 rounded-2xl font-black text-lg shadow-2xl hover:shadow-cyan-500/50 transition-all"
              >
                AGENDAR DIAGNÓSTICO GRATUITO
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-12 py-4 rounded-2xl font-bold text-lg transition-all"
              >
                VER CASOS DE ÉXITO
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}