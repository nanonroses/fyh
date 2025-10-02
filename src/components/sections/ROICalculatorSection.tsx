'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Calculator, TrendingUp, AlertTriangle, Shield, CheckCircle } from 'lucide-react';

interface ROICalculation {
  currentRisk: number;
  incidentCost: number;
  preventionInvestment: number;
  riskReduction: number;
  monthlySavings: number;
  annualSavings: number;
  roiPercentage: number;
  paybackMonths: number;
}

const industryPresets = [
  {
    name: "Energía y Utilities",
    avgIncidentCost: 4200000,
    riskLevel: 0.65,
    icon: "⚡",
    description: "Infraestructura crítica de alta exposición"
  },
  {
    name: "Financiero",
    avgIncidentCost: 5800000,
    riskLevel: 0.62,
    icon: "🏦",
    description: "Sector altamente regulado y objetivo prioritario"
  },
  {
    name: "Manufactura",
    avgIncidentCost: 2800000,
    riskLevel: 0.68,
    icon: "🏭",
    description: "Procesos productivos dependientes de OT"
  },
  {
    name: "Minería",
    avgIncidentCost: 7500000,
    riskLevel: 0.72,
    icon: "⛏️",
    description: "Operaciones 24/7 con alto impacto por paradas"
  }
];

const ROICalculatorSection: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState(industryPresets[0]);
  const [companySize, setCompanySize] = useState<'small' | 'medium' | 'large'>('medium');
  const [calculation, setCalculation] = useState<ROICalculation | null>(null);

  const calculateROI = useCallback(() => {
    const baseIncidentCost = selectedIndustry.avgIncidentCost;

    // Adjust for company size
    const sizeMultiplier = companySize === 'small' ? 0.3 : companySize === 'medium' ? 0.7 : 1.2;
    const adjustedIncidentCost = baseIncidentCost * sizeMultiplier;

    // Calculate current annual risk exposure
    const currentRisk = adjustedIncidentCost * selectedIndustry.riskLevel;

    // Our solution reduces risk by 75% on average
    const riskReduction = 0.75;
    const preventionInvestment = companySize === 'small' ? 35000 : companySize === 'medium' ? 68000 : 120000;

    // Calculate savings
    const annualSavings = currentRisk * riskReduction;
    const monthlySavings = annualSavings / 12;

    // Calculate ROI
    const roiPercentage = ((annualSavings - preventionInvestment) / preventionInvestment) * 100;
    const paybackMonths = (preventionInvestment / monthlySavings);

    const result: ROICalculation = {
      currentRisk,
      incidentCost: adjustedIncidentCost,
      preventionInvestment,
      riskReduction,
      monthlySavings,
      annualSavings,
      roiPercentage,
      paybackMonths
    };

    setCalculation(result);
  }, [selectedIndustry, companySize]);

  useEffect(() => {
    calculateROI();
  }, [selectedIndustry, companySize, calculateROI]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('es-CL', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233b82f6' fill-opacity='0.2'%3E%3Cpath d='M30 30c16.569 0 30-13.431 30-30H0c0 16.569 13.431 30 30 30z'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 bg-blue-100 border border-blue-200 rounded-full px-6 py-3 mb-6">
            <Calculator className="h-5 w-5 text-blue-600" />
            <span className="text-blue-600 font-semibold">Calculadora de ROI</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            ¿Cuánto puedes ahorrar con nuestra
            <span className="block text-blue-600">protección OT?</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Calcula el retorno de inversión real de implementar ciberseguridad OT profesional en tu empresa
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Calculator Input */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Industry Selection */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Selecciona tu industria
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {industryPresets.map((industry) => (
                  <button
                    key={industry.name}
                    onClick={() => setSelectedIndustry(industry)}
                    className={`p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                      selectedIndustry.name === industry.name
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-blue-300'
                    }`}
                  >
                    <div className="text-2xl mb-2">{industry.icon}</div>
                    <div className="font-semibold text-gray-900 mb-1">
                      {industry.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {industry.description}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Company Size */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Tamaño de empresa
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { id: 'small', label: 'Pequeña', description: '< 100 empleados' },
                  { id: 'medium', label: 'Mediana', description: '100-1000 empleados' },
                  { id: 'large', label: 'Grande', description: '> 1000 empleados' }
                ].map((size) => (
                  <button
                    key={size.id}
                    onClick={() => setCompanySize(size.id as 'small' | 'medium' | 'large')}
                    className={`p-4 rounded-xl border-2 transition-all duration-300 text-center ${
                      companySize === size.id
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-blue-300'
                    }`}
                  >
                    <div className="font-semibold text-gray-900 mb-1">
                      {size.label}
                    </div>
                    <div className="text-sm text-gray-600">
                      {size.description}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Risk Indicators */}
            <div className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="h-6 w-6 text-red-600" />
                <h3 className="text-lg font-bold text-red-800">Riesgo Actual</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-red-700">Probabilidad de incidente:</span>
                  <span className="font-bold text-red-800">{(selectedIndustry.riskLevel * 100).toFixed(0)}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-red-700">Costo promedio por incidente:</span>
                  <span className="font-bold text-red-800">
                    {formatCurrency(selectedIndustry.avgIncidentCost * (companySize === 'small' ? 0.3 : companySize === 'medium' ? 0.7 : 1.2))}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {calculation && (
              <>
                {/* ROI Summary */}
                <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-8 text-white shadow-2xl">
                  <div className="text-center mb-6">
                    <TrendingUp className="h-12 w-12 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-2">ROI Proyectado</h3>
                    <div className="text-5xl font-bold">
                      {calculation.roiPercentage.toFixed(0)}%
                    </div>
                    <p className="text-green-100 mt-2">Retorno anual de inversión</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold">
                        {calculation.paybackMonths.toFixed(1)}
                      </div>
                      <div className="text-green-100 text-sm">Meses para recuperar inversión</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold">75%</div>
                      <div className="text-green-100 text-sm">Reducción de riesgo</div>
                    </div>
                  </div>
                </div>

                {/* Detailed Breakdown */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                  <h4 className="text-xl font-bold text-gray-900 mb-6">Desglose Financiero</h4>

                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Exposición al riesgo actual (anual):</span>
                      <span className="font-bold text-red-600">{formatCurrency(calculation.currentRisk)}</span>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Inversión en protección:</span>
                      <span className="font-bold text-blue-600">{formatCurrency(calculation.preventionInvestment)}</span>
                    </div>

                    <div className="border-t border-gray-200 pt-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Ahorros anuales proyectados:</span>
                        <span className="font-bold text-green-600">{formatCurrency(calculation.annualSavings)}</span>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Ahorros mensuales:</span>
                        <span className="font-bold text-green-600">{formatCurrency(calculation.monthlySavings)}</span>
                      </div>
                    </div>

                    <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                        <span className="font-semibold text-green-800">Beneficio neto año 1:</span>
                      </div>
                      <div className="text-2xl font-bold text-green-600">
                        {formatCurrency(calculation.annualSavings - calculation.preventionInvestment)}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Call to Action */}
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-6 text-white text-center">
                  <Shield className="h-8 w-8 mx-auto mb-4" />
                  <h4 className="text-xl font-bold mb-2">
                    ¿Listo para proteger tu inversión?
                  </h4>
                  <p className="text-blue-100 mb-6">
                    Obtén una auditoría gratuita y descubre tu plan de protección personalizado
                  </p>
                  <button
                    onClick={() => {
                      const element = document.getElementById('contacto');
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg"
                  >
                    Solicitar Auditoría Gratuita
                  </button>
                </div>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculatorSection;