'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Flame } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-slate-900/90 backdrop-blur-xl border-b-2 border-cyan-400/30' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-4"
            whileHover={{ scale: 1.1, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative">
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-600 via-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center transform rotate-12 hover:rotate-0 transition-transform">
                <Flame className="h-8 w-8 text-white" />
              </div>
            </div>
            <div>
              <div className="text-2xl font-black text-white tracking-tight">
                F<span className="text-cyan-400">&</span>Y
              </div>
              <div className="text-xs font-bold text-cyan-300 uppercase tracking-widest">
                INGENIEROS
              </div>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center bg-black/30 backdrop-blur-lg rounded-full px-3 py-2 border border-white/10">
            {[
              { label: 'INICIO', id: 'inicio' },
              { label: 'SOLUCIONES', id: 'servicios' },
              { label: 'NOSOTROS', id: 'nosotros' }
            ].map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="text-white hover:text-cyan-300 px-6 py-3 rounded-full transition-all font-black text-sm tracking-wide hover:bg-white/10"
              >
                {item.label}
              </motion.button>
            ))}
          </nav>

          {/* CTA Button */}
          <motion.button 
            onClick={() => scrollToSection('contacto')}
            whileHover={{ scale: 1.05, rotate: -2 }}
            whileTap={{ scale: 0.95 }}
            className="hidden lg:block group bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 text-white px-8 py-4 rounded-2xl font-black text-sm shadow-2xl hover:shadow-cyan-500/50 transition-all transform hover:-translate-y-1"
          >
            <span className="group-hover:text-white transition-colors">¡QUIERO ACELERAR!</span>
          </motion.button>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-3 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -50, scale: 0.95 }}
            className="lg:hidden mt-4 p-6 bg-slate-900/95 backdrop-blur-xl rounded-3xl border-2 border-cyan-400/30"
          >
            <div className="space-y-4">
              {[
                { label: 'INICIO', id: 'inicio' },
                { label: 'SOLUCIONES', id: 'servicios' },
                { label: 'NOSOTROS', id: 'nosotros' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left text-white hover:text-cyan-300 px-4 py-4 rounded-2xl transition-all font-black text-lg hover:bg-white/10 border border-transparent hover:border-cyan-400/30"
                >
                  {item.label}
                </button>
              ))}
              
              <button 
                onClick={() => scrollToSection('contacto')}
                className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-6 py-5 rounded-2xl font-black text-lg mt-6"
              >
                ¡QUIERO ACELERAR!
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  )
}