'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Zap, Sparkles, Shield } from 'lucide-react'

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

  const navigationItems = [
    { label: 'INICIO', id: 'inicio', color: 'neon-purple' },
    { label: 'SERVICIOS', id: 'servicios', color: 'electric-magenta' },
    { label: 'CASOS ÉXITO', id: 'casos-exito', color: 'cyber-lime' },
    { label: 'ROI CALCULATOR', id: 'roi-calculator', color: 'plasma-orange' }
  ]

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'glass-effect electric-border backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">

          {/* Revolutionary Logo */}
          <motion.div
            className="flex items-center space-x-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="relative group">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-r from-neon-purple via-electric-magenta to-cyber-lime rounded-2xl blur-sm opacity-75"
              />
              <div className="relative w-12 h-12 glass-effect rounded-2xl flex items-center justify-center border-2 border-transparent bg-gradient-to-br from-neon-purple to-electric-magenta">
                <Shield className="h-7 w-7 text-light-ghost glow-pulse" />
              </div>
            </div>

            <div>
              <div className="font-space-grotesk font-black text-2xl text-light-ghost tracking-tight">
                FYH
                <span className="text-electric-magenta glow-pulse">2.0</span>
              </div>
              <div className="font-poppins text-xs font-bold text-steel-gray uppercase tracking-widest">
                CYBER EVOLUTION
              </div>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center glass-effect rounded-full px-2 py-2 quantum-border">
            {navigationItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`text-light-ghost hover:text-${item.color} px-6 py-3 rounded-full transition-all font-space-grotesk font-bold text-sm tracking-wide glass-hover relative group`}
              >
                <span className="relative z-10">{item.label}</span>
                <motion.div
                  className={`absolute inset-0 bg-${item.color} rounded-full opacity-0 group-hover:opacity-10 transition-opacity`}
                  whileHover={{ scale: 1.1 }}
                />
              </motion.button>
            ))}
          </nav>

          {/* Revolutionary CTA Button */}
          <motion.button
            onClick={() => scrollToSection('contacto')}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="hidden lg:block group relative overflow-hidden px-8 py-4 rounded-2xl font-space-grotesk font-bold text-sm modern-hover hologram-effect"
            style={{
              background: 'linear-gradient(135deg, rgb(16 185 129) 0%, rgb(6 182 212) 100%)',
              color: 'white'
            }}
          >
            {/* Urgency Badge */}
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="absolute -top-2 -right-2 bg-electric-magenta text-light-ghost text-xs px-3 py-1 rounded-full font-bold electric-border"
            >
              GRATIS
            </motion.div>

            <div className="relative z-10 flex items-center gap-2">
              <Sparkles className="h-4 w-4" />
              <span>AUDITORÍA OT</span>
            </div>
          </motion.button>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="lg:hidden p-3 glass-effect electric-border rounded-2xl text-light-ghost"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <motion.div
              animate={{ rotate: isMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.div>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -30, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="lg:hidden mt-4 mb-6 p-8 glass-effect electric-border rounded-3xl"
          >
            <div className="space-y-2">
              {navigationItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left text-light-ghost hover:text-${item.color} px-6 py-4 rounded-2xl transition-all font-space-grotesk font-bold text-lg glass-hover quantum-border`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-2 h-2 bg-${item.color} rounded-full glow-pulse`} />
                    {item.label}
                  </div>
                </motion.button>
              ))}

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                onClick={() => scrollToSection('contacto')}
                className="w-full relative overflow-hidden px-8 py-6 rounded-2xl font-space-grotesk font-bold text-lg mt-6 modern-hover hologram-effect"
                style={{
                  background: 'linear-gradient(135deg, rgb(16 185 129) 0%, rgb(6 182 212) 100%)',
                  color: 'white'
                }}
              >
                {/* Mobile Urgency Badge */}
                <div className="absolute -top-2 -right-2 bg-electric-magenta text-light-ghost text-xs px-3 py-1 rounded-full font-bold">
                  GRATIS
                </div>

                <div className="relative z-10 flex items-center justify-center gap-3">
                  <Zap className="h-5 w-5" />
                  AUDITORÍA GRATUITA
                </div>
              </motion.button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  )
}