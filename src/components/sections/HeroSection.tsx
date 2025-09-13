'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Trophy, Target, Zap } from 'lucide-react'

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="inicio" className="min-h-screen bg-gradient-to-tr from-slate-950 via-slate-900 to-slate-800 relative overflow-hidden">
      {/* Geometric Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-cyan-400/10 rounded-full blur-xl"></div>
        <div className="absolute top-60 right-20 w-48 h-48 bg-blue-400/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-indigo-400/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-1/3 w-56 h-56 bg-cyan-400/10 rounded-full blur-2xl"></div>
        
        {/* Geometric shapes */}
        <div className="absolute top-1/4 right-1/4 w-6 h-6 bg-cyan-400/30 rotate-45 transform"></div>
        <div className="absolute top-1/3 left-1/5 w-4 h-4 bg-blue-400/30 rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/5 w-8 h-8 bg-indigo-400/20 rotate-12 transform"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-12 gap-12 items-center w-full">
          {/* Left Content */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center bg-gradient-to-r from-cyan-50 to-blue-50 backdrop-blur-sm border border-cyan-100 rounded-full px-6 py-3">
                <Sparkles className="w-5 h-5 text-cyan-600 mr-2" />
                <span className="text-cyan-700 font-semibold tracking-wide">INNOVACIÓN EMPRESARIAL</span>
              </div>
              
              <h1 className="text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-blue-200 leading-none tracking-tight">
                ACELERA
                <br />
                <span className="text-6xl lg:text-7xl bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text">
                  TU EMPRESA
                </span>
              </h1>
              
              <p className="text-2xl text-slate-100 max-w-2xl leading-relaxed font-light">
                Automatización RPA, IA y Ciberseguridad para empresas que no se conforman con lo ordinario. 
                <span className="text-cyan-300 font-semibold">Resultados extraordinarios garantizados.</span>
              </p>

              <div className="flex flex-col sm:flex-row gap-6">
                <motion.button 
                  onClick={() => scrollToSection('contacto')}
                  whileHover={{ scale: 1.05, rotate: 1 }}
                  whileTap={{ scale: 0.95 }}
                  className="group bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 text-white px-12 py-5 rounded-2xl font-black text-xl shadow-2xl hover:shadow-cyan-500/50 transition-all"
                >
                  <div className="flex items-center space-x-3">
                    <span>TRANSFORMAR AHORA</span>
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                  </div>
                </motion.button>
                
                <motion.button 
                  onClick={() => scrollToSection('servicios')}
                  whileHover={{ scale: 1.05 }}
                  className="border-3 border-cyan-400 text-cyan-100 hover:bg-cyan-400 hover:text-slate-900 px-12 py-5 rounded-2xl font-bold text-xl transition-all"
                >
                  Ver Soluciones
                </motion.button>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Floating Cards */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="space-y-6"
            >
              {/* Card 1 */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, delay: 0 }}
                className="bg-gradient-to-br from-cyan-400/20 to-blue-400/20 backdrop-blur-lg border border-cyan-400/30 rounded-3xl p-8 transform rotate-2 hover:rotate-0 transition-transform"
              >
                <Trophy className="w-12 h-12 text-cyan-400 mb-4" />
                <div className="text-4xl font-black text-white mb-2">+500%</div>
                <div className="text-cyan-100 font-semibold">ROI Promedio</div>
                <div className="text-slate-200 text-sm mt-2">En automatización</div>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 5, delay: 1 }}
                className="bg-gradient-to-br from-blue-400/20 to-indigo-400/20 backdrop-blur-lg border border-blue-400/30 rounded-3xl p-8 transform -rotate-3 hover:rotate-0 transition-transform ml-8"
              >
                <Target className="w-12 h-12 text-blue-400 mb-4" />
                <div className="text-4xl font-black text-white mb-2">48hrs</div>
                <div className="text-blue-100 font-semibold">Respuesta</div>
                <div className="text-slate-200 text-sm mt-2">Consultoría express</div>
              </motion.div>

              {/* Card 3 */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 3.5, delay: 2 }}
                className="bg-gradient-to-br from-indigo-400/20 to-cyan-400/20 backdrop-blur-lg border border-indigo-400/30 rounded-3xl p-8 transform rotate-1 hover:rotate-0 transition-transform mr-8"
              >
                <Zap className="w-12 h-12 text-indigo-400 mb-4" />
                <div className="text-4xl font-black text-white mb-2">100%</div>
                <div className="text-indigo-100 font-semibold">Éxito</div>
                <div className="text-slate-200 text-sm mt-2">Proyectos entregados</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}