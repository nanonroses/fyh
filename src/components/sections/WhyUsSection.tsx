'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Shield, Clock, Award, Building2, CheckCircle, Star } from 'lucide-react'

const metrics = [
  {
    icon: TrendingUp,
    value: "300%",
    label: "ROI Promedio",
    description: "Retorno medible en automatización RPA"
  },
  {
    icon: Shield,
    value: "100%",
    label: "Compliance",
    description: "Cumplimiento normativas críticas"
  },
  {
    icon: Clock,
    value: "60 días",
    label: "Time to Value",
    description: "Resultados visibles garantizados"
  },
  {
    icon: Award,
    value: "24/7",
    label: "Soporte Expert",
    description: "Monitoreo y respuesta continua"
  }
]

const clientLogos = [
  { name: "Minería Lider", sector: "Mining" },
  { name: "Bank Corp", sector: "Financial" },
  { name: "TechFlow", sector: "Technology" },
  { name: "EnergyPro", sector: "Energy" },
  { name: "HealthPlus", sector: "Healthcare" },
  { name: "RetailMax", sector: "Retail" }
]

export default function WhyUsSection() {
  return (
    <section id="nosotros" className="py-32 bg-white relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/30"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-cyan-100/40 via-transparent to-transparent rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center bg-gradient-to-r from-cyan-50 to-blue-50 rounded-full px-6 py-3 mb-8 border border-cyan-100">
            <Building2 className="w-5 h-5 text-cyan-600 mr-2" />
            <span className="text-cyan-700 font-medium">Enterprise Partner</span>
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Líderes en <br />
            <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Transformación Digital
            </span>
          </h2>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Partner estratégico de confianza para empresas Fortune 500 y líderes regionales en 
            automatización, ciberseguridad e infraestructura crítica.
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-3xl p-8 shadow-lg border border-slate-100 hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <div className="bg-gradient-to-br from-cyan-500 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <metric.icon className="w-8 h-8 text-white" />
              </div>
              
              <div className="text-4xl font-bold text-slate-900 mb-2">{metric.value}</div>
              <div className="text-lg font-semibold text-slate-700 mb-2">{metric.label}</div>
              <p className="text-slate-600 text-sm leading-relaxed">{metric.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-slate-50 to-blue-50/50 rounded-3xl p-12 border border-slate-100">
              <div className="flex items-center mb-8">
                <Star className="w-6 h-6 text-yellow-500 mr-2" />
                <span className="text-slate-600 font-medium">Clientes Enterprise</span>
              </div>
              
              <h3 className="text-3xl font-bold text-slate-900 mb-6 leading-tight">
                Confianza de líderes <br />
                de industria
              </h3>
              
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Más de 60 proyectos exitosos en sectores críticos como minería, 
                banca, energía y salud. Certificaciones internacionales y 
                cumplimiento normativo garantizado.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-slate-900 mb-1">95%</div>
                  <div className="text-slate-600 text-sm">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-slate-900 mb-1">100%</div>
                  <div className="text-slate-600 text-sm">On-Time Delivery</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Client Logos */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h4 className="text-xl font-semibold text-slate-900 mb-2">
                  Sectores de Alto Impacto
                </h4>
                <p className="text-slate-600">
                  Transformando operaciones críticas
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {clientLogos.map((client, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 hover:shadow-xl transition-all group"
                  >
                    <div className="text-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                        <Building2 className="w-6 h-6 text-slate-600" />
                      </div>
                      <div className="font-semibold text-slate-900 mb-1">{client.name}</div>
                      <div className="text-xs text-slate-500 uppercase tracking-wide">{client.sector}</div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Certifications */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-100"
              >
                <div className="flex items-center justify-center space-x-2 mb-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="font-semibold text-green-800">Certificaciones</span>
                </div>
                <div className="text-center text-sm text-green-700">
                  ISO 27001 • PCI-DSS • SOC 2 • COBIT
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}