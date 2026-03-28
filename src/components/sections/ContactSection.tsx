'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, Users, Shield, Target, Zap, CheckCircle } from 'lucide-react';
import ProgressiveContactForm from './ProgressiveContactForm';

const methods = [
  { icon: Mail, type: 'Email', contact: 'contacto@fyhingenieros.cl', response: '<2h' },
  { icon: Phone, type: 'WhatsApp', contact: '+56 9 6211 6017', response: '24/7' },
  { icon: Users, type: 'Videollamada', contact: 'Agenda vía calendario', response: 'Mismo día' },
];

export default function ContactSection() {
  return (
    <section id="contacto" className="bg-pa-dark border-t border-pa-border py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <div className="pa-label text-pa-orange mb-4">Contacto</div>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-5">Solicita tu Evaluación</h2>
          <p className="text-[#999] text-lg max-w-2xl mx-auto mb-8">
            Nuestros consultores realizan una evaluación profesional de tu ciberseguridad OT sin costo ni compromiso.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {['Entrega en 48h', 'Sin compromiso', '100% confidencial'].map(t => (
              <div key={t} className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-pa-green" />
                <span className="text-sm text-[#999]">{t}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-2 space-y-6">
            <div className="pa-card">
              <h3 className="text-white font-bold mb-5">Qué incluye</h3>
              {[
                { icon: Shield, text: 'Diagnóstico vulnerabilidades OT/ICS' },
                { icon: Target, text: 'Roadmap priorizado' },
                { icon: Zap, text: 'Análisis ROI y business case' },
              ].map(item => (
                <div key={item.text} className="flex items-start gap-3 mb-4">
                  <item.icon className="h-5 w-5 text-pa-orange mt-0.5 flex-shrink-0" />
                  <span className="text-[#ccc] text-sm">{item.text}</span>
                </div>
              ))}
              <div className="mt-6 pt-5 border-t border-pa-border text-center">
                <div className="text-sm text-[#888]">Inversión:</div>
                <div className="text-3xl font-extrabold text-pa-green">Sin Costo</div>
              </div>
            </div>

            {methods.map(m => (
              <div key={m.type} className="pa-card !p-4 flex items-center gap-4">
                <div className="p-2.5 bg-pa-orange/10 rounded-xl">
                  <m.icon className="h-5 w-5 text-pa-orange" />
                </div>
                <div className="flex-1">
                  <div className="text-white font-semibold text-sm">{m.type}</div>
                  <div className="text-[#888] text-sm">{m.contact}</div>
                </div>
                <span className="text-pa-green text-xs font-mono font-bold">{m.response}</span>
              </div>
            ))}
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-3">
            <ProgressiveContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
