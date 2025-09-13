'use client'

import { motion } from 'framer-motion'
import { 
  Rocket, 
  Brain, 
  MessageSquare, 
  Database, 
  Eye, 
  Sparkles,
  Lock,
  Star,
  Zap
} from 'lucide-react'

const powerServices = [
  {
    icon: Rocket,
    title: "AUTOMATIZACIÓN DE PROCESOS",
    description: "RPA que elimina tareas repetitivas y maximiza la productividad empresarial",
    price: "Desde $12K USD",
    features: ["Process Mining", "Bot Development", "SAP Integration", "Excel Automation"],
    color: "from-cyan-600 via-blue-600 to-indigo-600",
    bgColor: "from-cyan-50 to-blue-50"
  },
  {
    icon: Sparkles,
    title: "SOPORTE Y MANTENIMIENTO RPA",
    description: "Mantenimiento 24/7 de tus robots para operación continua",
    price: "Desde $3K USD",
    features: ["24/7 Monitoring", "Bot Health Check", "Performance Tuning", "Error Resolution"],
    color: "from-blue-600 via-indigo-600 to-cyan-600",
    bgColor: "from-blue-50 to-indigo-50"
  },
  {
    icon: Brain,
    title: "RPA + INTELIGENCIA ARTIFICIAL",
    description: "Automatización inteligente con capacidades de aprendizaje y decisión",
    price: "Desde $25K USD",
    features: ["Document AI", "Predictive Analytics", "Machine Learning", "Smart Classification"],
    color: "from-indigo-600 via-cyan-600 to-blue-600",
    bgColor: "from-indigo-50 to-cyan-50"
  },
  {
    icon: Lock,
    title: "CIBERSEGURIDAD OT E INDUSTRIA CRÍTICA",
    description: "Protección especializada para infraestructura crítica y sistemas OT",
    price: "Desde $30K USD",
    features: ["OT Security", "SCADA Protection", "Industrial Firewalls", "Critical Infrastructure"],
    color: "from-cyan-600 via-indigo-600 to-blue-600",
    bgColor: "from-cyan-50 to-indigo-50"
  },
  {
    icon: MessageSquare,
    title: "BOTS CONVERSACIONALES E IA APLICADA",
    description: "Asistentes inteligentes que transforman la experiencia del cliente",
    price: "Desde $8K USD",
    features: ["Voice AI", "Multi-Channel", "NLP Processing", "Smart Routing"],
    color: "from-blue-600 via-cyan-600 to-indigo-600",
    bgColor: "from-blue-50 to-cyan-50"
  },
  {
    icon: Eye,
    title: "MONITOREO DIGITAL Y APIS",
    description: "Observabilidad completa de aplicaciones y servicios digitales",
    price: "Desde $10K USD",
    features: ["API Monitoring", "Real-time Alerts", "Performance Analytics", "SLA Tracking"],
    color: "from-indigo-600 via-blue-600 to-cyan-600",
    bgColor: "from-indigo-50 to-blue-50"
  },
  {
    icon: Zap,
    title: "HACKING ÉTICO",
    description: "Pentesting profesional black box y white box para máxima seguridad",
    price: "Desde $15K USD",
    features: ["Black Box Testing", "White Box Testing", "Vulnerability Assessment", "Security Reports"],
    color: "from-cyan-600 via-blue-600 to-indigo-600",
    bgColor: "from-cyan-50 to-blue-50"
  },
  {
    icon: Database,
    title: "SOPORTE TI Y AUTOMATIZACIÓN TÉCNICA",
    description: "Infraestructura TI robusta con automatización de operaciones",
    price: "Desde $5K USD",
    features: ["Infrastructure Automation", "Server Management", "Network Optimization", "IT Support"],
    color: "from-blue-600 via-indigo-600 to-cyan-600",
    bgColor: "from-blue-50 to-indigo-50"
  },
  {
    icon: Sparkles,
    title: "OUTSOURCING DE ESPECIALISTAS",
    description: "Equipos expertos en redes, cloud, ciberseguridad y TI",
    price: "Desde $8K USD",
    features: ["Network Engineers", "Cloud Architects", "Security Specialists", "IT Consultants"],
    color: "from-indigo-600 via-cyan-600 to-blue-600",
    bgColor: "from-indigo-50 to-cyan-50"
  },
  {
    icon: Rocket,
    title: "INSTALACIONES DE HOUSING EN DC",
    description: "Infraestructura física especializada en datacenter y energía",
    price: "Desde $20K USD",
    features: ["Datacenter Setup", "Power Systems", "Rack Installation", "Cooling Solutions"],
    color: "from-cyan-600 via-indigo-600 to-blue-600",
    bgColor: "from-cyan-50 to-indigo-50"
  },
  {
    icon: Database,
    title: "VENTA DE LICENCIAS Y SOPORTE RMA",
    description: "Gestión integral de licencias de software y servicios RMA",
    price: "Consultar",
    features: ["License Management", "RMA Services", "Vendor Relations", "Cost Optimization"],
    color: "from-blue-600 via-cyan-600 to-indigo-600",
    bgColor: "from-blue-50 to-cyan-50"
  },
  {
    icon: Eye,
    title: "OBRAS CIVILES TELECOMUNICACIONES",
    description: "Infraestructura de telecomunicaciones y redes LTE/mineras",
    price: "Desde $50K USD",
    features: ["LTE Networks", "Mining Infrastructure", "Fiber Optic", "Tower Construction"],
    color: "from-indigo-600 via-blue-600 to-cyan-600",
    bgColor: "from-indigo-50 to-blue-50"
  },
  {
    icon: Lock,
    title: "REDES INDUSTRIALES OT",
    description: "Ciberseguridad OT y convergencia TI-OT para industrias críticas",
    price: "Desde $40K USD",
    features: ["OT Networks", "TI-OT Integration", "Industrial Protocols", "SCADA Security"],
    color: "from-cyan-600 via-blue-600 to-indigo-600",
    bgColor: "from-cyan-50 to-blue-50"
  }
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

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {powerServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02, rotate: 1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-blue-400/20 to-indigo-400/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all"></div>
              
              <div className="relative bg-slate-900/80 backdrop-blur-xl border-2 border-cyan-400/30 rounded-3xl p-8 hover:border-blue-400/50 transition-all">
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-400 mb-1">INVERSIÓN</div>
                    <div className="text-xl font-black text-cyan-400">{service.price}</div>
                  </div>
                </div>

                <h3 className="text-2xl font-black text-white mb-4 group-hover:text-cyan-300 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"></div>
                      <span className="text-gray-300 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-cyan-400 fill-current" />
                    ))}
                    <span className="text-sm text-gray-400 ml-2">ROI Garantizado</span>
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.05, rotate: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-6 py-3 rounded-xl font-black text-sm hover:shadow-lg hover:shadow-cyan-500/25 transition-all"
                  >
                    ¡QUIERO ESTO!
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-cyan-400/10 via-blue-400/10 to-indigo-400/10 backdrop-blur-xl border border-cyan-400/30 rounded-3xl p-12">
            <h3 className="text-4xl font-black text-white mb-4">
              ¿NO VES LO QUE NECESITAS?
            </h3>
            <p className="text-xl text-gray-300 mb-8">
              Creamos soluciones 100% personalizadas que superan tus expectativas más ambiciosas
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05, rotate: 1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 text-white px-16 py-6 rounded-2xl font-black text-xl shadow-2xl hover:shadow-cyan-500/50 transition-all"
            >
              CREAR MI SOLUCIÓN ÚNICA
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}