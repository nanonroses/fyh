'use client'

import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { Mail, Phone, MapPin, CheckCircle, Calendar, ArrowRight } from 'lucide-react'
import { useState } from 'react'

interface FormData {
  name: string
  email: string
  company: string
  phone: string
  service: string
  message: string
}

export default function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    console.log('Form data:', data)
    
    const mailtoLink = `mailto:contacto@fyhingenieros.cl?subject=Consultoría Enterprise - ${data.service}&body=Nombre: ${data.name}%0AEmpresa: ${data.company}%0ATeléfono: ${data.phone}%0AEmail: ${data.email}%0AÁrea de interés: ${data.service}%0A%0ARequerimientos:%0A${data.message}`
    
    window.location.href = mailtoLink
    
    setIsSubmitted(true)
    reset()
    
    setTimeout(() => {
      setIsSubmitted(false)
    }, 5000)
  }

  const services = [
    "Automatización RPA",
    "Inteligencia Artificial", 
    "Ciberseguridad Enterprise",
    "Infraestructura Crítica",
    "Transformación Digital",
    "Monitoreo y Observabilidad",
    "Consultoría Estratégica",
    "Outsourcing Especializado"
  ]

  if (isSubmitted) {
    return (
      <section id="contacto" className="py-32 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-3xl p-12 shadow-2xl"
          >
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
            <h3 className="text-3xl font-bold text-slate-900 mb-4">¡Consulta Enviada!</h3>
            <p className="text-lg text-slate-600">
              Nuestro equipo se pondrá en contacto contigo dentro de las próximas 24 horas 
              para agendar tu consultoría estratégica.
            </p>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section id="contacto" className="py-32 bg-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-cyan-600/10 via-transparent to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tr from-blue-600/10 via-transparent to-transparent rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8">
            <Calendar className="w-5 h-5 text-cyan-400 mr-2" />
            <span className="text-cyan-400 font-medium">Consultoría Estratégica</span>
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Hablemos de tu <br />
            <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Transformación
            </span>
          </h2>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Agenda una consultoría estratégica sin costo y descubre el potencial 
            de automatización en tu empresa.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Contact Info Cards */}
            <div className="space-y-4">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all">
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-3 rounded-xl">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Email Enterprise</div>
                    <div className="text-slate-300 text-sm">contacto@fyhingenieros.cl</div>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all">
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-3 rounded-xl">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">WhatsApp Directo</div>
                    <div className="text-slate-300 text-sm">+56 9 6211 6017</div>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all">
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-r from-indigo-500 to-cyan-600 p-3 rounded-xl">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Cobertura</div>
                    <div className="text-slate-300 text-sm">Chile • Latam • Remoto</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Value Proposition */}
            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
              <h4 className="text-2xl font-bold text-white mb-6">¿Qué incluye tu consultoría?</h4>
              <div className="space-y-4">
                {[
                  "Diagnóstico completo de procesos",
                  "Roadmap de automatización",
                  "Estimación de ROI y timeline",
                  "Propuesta técnica detallada"
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span className="text-slate-300">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 bg-white rounded-3xl p-8 shadow-2xl"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Agenda tu Consultoría</h3>
              <p className="text-slate-600">Completa el formulario y nos contactaremos en 24 horas</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Nombre Ejecutivo *
                  </label>
                  <input
                    {...register('name', { required: 'El nombre es requerido' })}
                    className="w-full px-4 py-4 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                    placeholder="Nombre y apellido"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Email Corporativo *
                  </label>
                  <input
                    {...register('email', { 
                      required: 'El email es requerido',
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: 'Email inválido'
                      }
                    })}
                    type="email"
                    className="w-full px-4 py-4 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                    placeholder="ejecutivo@empresa.com"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Empresa *
                  </label>
                  <input
                    {...register('company', { required: 'La empresa es requerida' })}
                    className="w-full px-4 py-4 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                    placeholder="Razón social"
                  />
                  {errors.company && <p className="text-red-500 text-sm mt-1">{errors.company.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Teléfono Directo
                  </label>
                  <input
                    {...register('phone')}
                    className="w-full px-4 py-4 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                    placeholder="+56 9 1234 5678"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Área de Interés *
                </label>
                <select
                  {...register('service', { required: 'Selecciona un área' })}
                  className="w-full px-4 py-4 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                >
                  <option value="">¿En qué podemos ayudarte?</option>
                  {services.map((service) => (
                    <option key={service} value={service}>{service}</option>
                  ))}
                </select>
                {errors.service && <p className="text-red-500 text-sm mt-1">{errors.service.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Requerimientos *
                </label>
                <textarea
                  {...register('message', { required: 'Describe tus requerimientos' })}
                  rows={4}
                  className="w-full px-4 py-4 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all resize-none"
                  placeholder="Describe tus principales desafíos operativos, procesos a automatizar o objetivos de transformación digital..."
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white py-4 px-6 rounded-2xl font-semibold flex items-center justify-center space-x-3 transition-all shadow-lg hover:shadow-cyan-500/25"
              >
                <Calendar size={20} />
                <span>Agendar Consultoría</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}