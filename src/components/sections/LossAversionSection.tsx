'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, TrendingDown, DollarSign, Clock } from 'lucide-react';

const threatStats = [
  {
    icon: AlertTriangle,
    stat: "73%",
    description: "de empresas chilenas sufrirán un ciberataque OT en 2024",
    source: "Estudio Cybersecurity Ventures 2024"
  },
  {
    icon: DollarSign,
    stat: "$2.8M - $15M",
    description: "costo promedio de un incidente de ciberseguridad OT",
    source: "IBM Security Cost of Data Breach 2024"
  },
  {
    icon: TrendingDown,
    stat: "156 días",
    description: "tiempo promedio para detectar un ataque en sistemas OT",
    source: "Dragos Industrial Threat Report 2024"
  },
  {
    icon: Clock,
    stat: "21 días",
    description: "tiempo promedio de paralización operacional",
    source: "Ponemon Institute Research 2024"
  }
];

const LossAversionSection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 border-y border-red-200">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-3 bg-red-100 border border-red-300 rounded-full px-6 py-3 mb-6">
            <AlertTriangle className="h-5 w-5 text-red-600" />
            <span className="text-red-600 font-semibold text-sm uppercase tracking-wider">
              Alerta Crítica de Seguridad
            </span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-anton text-red-700 mb-4 leading-tight">
            ⚠️ El 73% de empresas chilenas
            <span className="block text-red-800">
              sufrirán un ciberataque OT en 2024
            </span>
          </h2>

          <p className="text-xl text-red-600 max-w-4xl mx-auto leading-relaxed">
            Sin protección adecuada, un incidente puede costar entre <strong>$2.8M - $15M USD</strong> y
            paralizar operaciones por <strong>21 días promedio</strong>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {threatStats.map((threat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 border border-red-200 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-red-100 p-3 rounded-xl">
                  <threat.icon className="h-6 w-6 text-red-600" />
                </div>
              </div>

              <div className="text-3xl font-anton text-red-700 mb-2">
                {threat.stat}
              </div>

              <p className="text-gray-700 text-sm mb-3 leading-relaxed">
                {threat.description}
              </p>

              <p className="text-xs text-gray-500 italic">
                Fuente: {threat.source}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-red-600 to-orange-600 rounded-3xl p-8 text-center text-white"
        >
          <h3 className="text-2xl font-anton mb-4">
            🚨 ¿Tu empresa está preparada para el próximo ataque?
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Cada día que esperes, aumenta el riesgo de ser la próxima víctima.
            La pregunta no es &quot;si&quot; sucederá, sino &quot;cuándo&quot;.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl px-6 py-3">
              <span className="text-sm">⏰ Tiempo promedio hasta el próximo ataque:</span>
              <div className="text-2xl font-bold">47 días</div>
            </div>

            <button
              onClick={() => {
                const element = document.getElementById('contacto');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white text-red-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl"
            >
              Proteger Mi Empresa AHORA
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LossAversionSection;