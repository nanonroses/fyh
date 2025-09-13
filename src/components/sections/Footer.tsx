'use client'

import { motion } from 'framer-motion'
import { Shield, Bot, Zap, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const services = [
    "Automatización RPA",
    "Ciberseguridad Integral", 
    "Monitoreo Digital",
    "Proyectos SAP",
    "Infraestructura TI"
  ]

  const industries = [
    "Minería",
    "Banca y Finanzas",
    "Retail",
    "Salud",
    "Telecomunicaciones"
  ]

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="flex items-center space-x-2 mb-6">
              <div className="flex items-center space-x-1">
                <Shield className="h-8 w-8 text-cyan-400" />
                <Bot className="h-6 w-6 text-blue-400" />
                <Zap className="h-6 w-6 text-indigo-400" />
              </div>
              <span className="text-2xl font-bold">F&Y Ingenieros</span>
            </div>
            
            <p className="text-slate-300 mb-6 leading-relaxed max-w-md">
              Transformamos empresas con automatización inteligente, ciberseguridad de clase mundial 
              e infraestructura tecnológica robusta. Tu partner para la excelencia operacional.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-cyan-400" />
                <span className="text-slate-300">contacto@fyhingenieros.cl</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <span className="text-slate-300">+56 9 6211 6017</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-indigo-400" />
                <span className="text-slate-300">Chile - Servicios en todo el país</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-6">Servicios Principales</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <button className="text-slate-300 hover:text-white transition-colors text-left">
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-6">Industrias</h3>
            <ul className="space-y-3">
              {industries.map((industry, index) => (
                <li key={index}>
                  <span className="text-slate-300">{industry}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <h4 className="text-sm font-semibold mb-3 text-slate-400">CERTIFICACIONES</h4>
              <div className="space-y-1 text-sm text-slate-300">
                <div>ISO 27001</div>
                <div>PCI-DSS</div>
                <div>SOC Compliance</div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="border-t border-slate-700 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-slate-400 text-sm mb-4 md:mb-0">
              © {currentYear} F&Y Ingenieros. Todos los derechos reservados.
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-slate-400">
              <button className="hover:text-white transition-colors">
                Política de Privacidad
              </button>
              <button className="hover:text-white transition-colors">
                Términos de Servicio
              </button>
              <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-3 py-1 rounded-full text-xs">
                Disponible 24/7
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}