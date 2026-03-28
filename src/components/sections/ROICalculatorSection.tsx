'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const industries = [
  { name: 'Energía', cost: 4200000, risk: 0.65, icon: '⚡' },
  { name: 'Financiero', cost: 5800000, risk: 0.62, icon: '🏦' },
  { name: 'Manufactura', cost: 2800000, risk: 0.68, icon: '🏭' },
  { name: 'Minería', cost: 7500000, risk: 0.72, icon: '⛏️' },
];
const sizes = [
  { id: 'small' as const, label: 'Pequeña', desc: '< 100 emp.', mult: 0.3 },
  { id: 'medium' as const, label: 'Mediana', desc: '100-1000', mult: 0.7 },
  { id: 'large' as const, label: 'Grande', desc: '> 1000', mult: 1.2 },
];
const fmt = (n: number) => new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(n);

export default function ROICalculatorSection() {
  const [industry, setIndustry] = useState(industries[0]);
  const [size, setSize] = useState<'small' | 'medium' | 'large'>('medium');
  const mult = sizes.find(s => s.id === size)!.mult;
  const incidentCost = industry.cost * mult;
  const currentRisk = incidentCost * industry.risk;
  const investment = size === 'small' ? 35000 : size === 'medium' ? 68000 : 120000;
  const annualSavings = currentRisk * 0.75;
  const roi = ((annualSavings - investment) / investment) * 100;
  const payback = investment / (annualSavings / 12);

  return (
    <section id="roi-calculator" className="bg-pa-black py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
          <div className="pa-label text-pa-yellow mb-4">Calculadora ROI</div>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-white leading-tight max-w-3xl">
            Calcula el retorno de inversión de nuestra consultoría OT
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Inputs */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
            <div className="pa-card">
              <h3 className="text-white font-bold mb-4">Industria</h3>
              <div className="grid grid-cols-2 gap-3">
                {industries.map(ind => (
                  <button key={ind.name} onClick={() => setIndustry(ind)}
                    className={`p-4 rounded-xl border text-left transition-all ${
                      industry.name === ind.name ? 'border-pa-orange bg-pa-orange/5' : 'border-pa-border hover:border-[#666]'
                    }`}>
                    <span className="text-xl">{ind.icon}</span>
                    <div className="text-white font-semibold text-sm mt-2">{ind.name}</div>
                  </button>
                ))}
              </div>
            </div>
            <div className="pa-card">
              <h3 className="text-white font-bold mb-4">Tamaño</h3>
              <div className="grid grid-cols-3 gap-3">
                {sizes.map(s => (
                  <button key={s.id} onClick={() => setSize(s.id)}
                    className={`p-3 rounded-xl border text-center transition-all ${
                      size === s.id ? 'border-pa-orange bg-pa-orange/5' : 'border-pa-border hover:border-[#666]'
                    }`}>
                    <div className="text-white font-semibold text-sm">{s.label}</div>
                    <div className="text-[#666] text-xs mt-1">{s.desc}</div>
                  </button>
                ))}
              </div>
            </div>
            <div className="pa-card border-pa-orange/30">
              <div className="pa-label text-pa-orange mb-3">Riesgo actual</div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-[#888]">Probabilidad incidente:</span>
                <span className="text-pa-orange font-bold">{(industry.risk * 100).toFixed(0)}%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-[#888]">Costo por incidente:</span>
                <span className="text-pa-orange font-bold">{fmt(incidentCost)}</span>
              </div>
            </div>
          </motion.div>

          {/* Results */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
            <div className="pa-card bg-gradient-to-br from-[#0a2e1a] to-pa-card border-pa-green/30 text-center">
              <div className="pa-label text-pa-green mb-2">ROI Proyectado</div>
              <div className="text-6xl font-extrabold text-pa-green mb-2">{roi.toFixed(0)}%</div>
              <p className="text-[#888] text-sm mb-6">Retorno anual de inversión</p>
              <div className="grid grid-cols-2 gap-6 pt-6 border-t border-pa-border">
                <div><div className="text-2xl font-extrabold text-white">{payback.toFixed(1)}</div><div className="text-xs text-[#888]">Meses recuperación</div></div>
                <div><div className="text-2xl font-extrabold text-white">75%</div><div className="text-xs text-[#888]">Reducción riesgo</div></div>
              </div>
            </div>
            <div className="pa-card">
              <h4 className="text-white font-bold mb-4">Desglose</h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between"><span className="text-[#888]">Exposición riesgo anual:</span><span className="text-pa-orange font-bold">{fmt(currentRisk)}</span></div>
                <div className="flex justify-between"><span className="text-[#888]">Inversión protección:</span><span className="text-white font-bold">{fmt(investment)}</span></div>
                <div className="h-px bg-pa-border my-2" />
                <div className="flex justify-between"><span className="text-[#888]">Ahorros anuales:</span><span className="text-pa-green font-bold">{fmt(annualSavings)}</span></div>
                <div className="pa-card bg-pa-green/5 border-pa-green/20 mt-4">
                  <div className="text-pa-green font-semibold text-sm mb-1">Beneficio neto año 1:</div>
                  <div className="text-2xl font-extrabold text-white">{fmt(annualSavings - investment)}</div>
                </div>
              </div>
            </div>
            <button onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
              className="pa-btn-orange w-full justify-center">
              Solicitar Evaluación Personalizada <ArrowRight className="h-4 w-4" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
