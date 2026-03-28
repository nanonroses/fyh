'use client';

import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';

const services = [
  { label: 'Protección OT Avanzada', id: 'servicios' },
  { label: 'Compliance Regulatorio', id: 'compliance' },
  { label: 'Automatización Inteligente', id: 'servicios' },
  { label: 'Transformación Digital OT', id: 'servicios' },
  { label: 'Assessment Diagnóstico', id: 'contacto' },
];

const industries = [
  { label: 'Minería', id: 'casos-exito' },
  { label: 'Banca y Finanzas', id: 'casos-exito' },
  { label: 'Energía', id: 'casos-exito' },
  { label: 'Infraestructura Crítica', id: 'problemas' },
  { label: 'Manufactura', id: 'problemas' },
];

const complianceLinks = [
  { label: 'Ley 21663', id: 'compliance' },
  { label: 'IEC 62443', id: 'compliance' },
  { label: 'NERC CIP', id: 'compliance' },
  { label: 'NIS2', id: 'compliance' },
  { label: 'ISO 27001', id: 'compliance' },
  { label: 'MITRE ATT&CK', id: 'compliance' },
];

const companyLinks = [
  { label: 'Casos de Éxito', id: 'casos-exito' },
  { label: 'Calculadora ROI', id: 'roi-calculator' },
  { label: 'Contacto', id: 'contacto' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  const goto = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-pa-footer text-[#333]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <button onClick={() => goto('inicio')} className="flex items-center gap-2 mb-4 group">
              <svg width="24" height="24" viewBox="0 0 28 28" className="text-pa-orange">
                <path d="M4 4h8v8H4V4zm12 0h8v8h-8V4zM4 16h8v8H4v-8z" fill="currentColor"/>
              </svg>
              <span className="font-extrabold text-xl text-[#111] tracking-tight group-hover:text-pa-orange transition-colors">
                fyh<span className="text-pa-orange">.</span>
              </span>
            </button>
            <p className="text-sm text-[#666] mb-4 leading-relaxed">
              Consultores especializados en ciberseguridad OT, compliance IEC 62443 y protección de infraestructura crítica.
            </p>
            <div className="space-y-2 mb-6">
              <a href="mailto:contacto@fyhingenieros.cl" className="flex items-center gap-2 text-sm text-[#666] hover:text-[#111] transition-colors">
                <Mail className="h-4 w-4" /> contacto@fyhingenieros.cl
              </a>
              <a href="tel:+56962116017" className="flex items-center gap-2 text-sm text-[#666] hover:text-[#111] transition-colors">
                <Phone className="h-4 w-4" /> +56 9 6211 6017
              </a>
              <div className="flex items-center gap-2 text-sm text-[#888]">
                <MapPin className="h-4 w-4" /> Santiago, Chile
              </div>
            </div>
            {/* Social */}
            <div className="flex items-center gap-3">
              <a
                href="https://linkedin.com/company/fyh-ingenieros"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#e5e5e5] hover:bg-pa-orange hover:text-white flex items-center justify-center text-[#666] transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Servicios */}
          <div>
            <h4 className="font-bold text-[#111] text-sm mb-4">Servicios</h4>
            <ul className="space-y-2.5">
              {services.map(s => (
                <li key={s.label}>
                  <button onClick={() => goto(s.id)} className="text-sm text-[#666] hover:text-pa-orange transition-colors text-left">
                    {s.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Industrias */}
          <div>
            <h4 className="font-bold text-[#111] text-sm mb-4">Industrias</h4>
            <ul className="space-y-2.5">
              {industries.map(i => (
                <li key={i.label}>
                  <button onClick={() => goto(i.id)} className="text-sm text-[#666] hover:text-pa-orange transition-colors text-left">
                    {i.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Compliance */}
          <div>
            <h4 className="font-bold text-[#111] text-sm mb-4">Compliance</h4>
            <ul className="space-y-2.5">
              {complianceLinks.map(c => (
                <li key={c.label}>
                  <button onClick={() => goto(c.id)} className="text-sm text-[#666] hover:text-pa-orange transition-colors text-left">
                    {c.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="font-bold text-[#111] text-sm mb-4">Empresa</h4>
            <ul className="space-y-2.5">
              {companyLinks.map(c => (
                <li key={c.label}>
                  <button onClick={() => goto(c.id)} className="text-sm text-[#666] hover:text-pa-orange transition-colors text-left">
                    {c.label}
                  </button>
                </li>
              ))}
            </ul>

            {/* WhatsApp directo */}
            <a
              href="https://wa.me/56962116017?text=Hola%2C%20me%20interesa%20una%20evaluaci%C3%B3n%20de%20ciberseguridad%20OT"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 px-4 py-2 bg-[#25D366] text-white text-sm font-semibold rounded-full hover:bg-[#1da851] transition-colors"
            >
              <Phone className="h-4 w-4" />
              WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[#ddd] mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <svg width="20" height="20" viewBox="0 0 28 28" className="text-pa-orange">
              <path d="M4 4h8v8H4V4zm12 0h8v8h-8V4zM4 16h8v8H4v-8z" fill="currentColor"/>
            </svg>
            <span className="font-bold text-sm text-[#111]">fyh<span className="text-pa-orange">.</span></span>
          </div>
          <div className="flex items-center gap-6 text-xs text-[#888]">
            <a href="mailto:contacto@fyhingenieros.cl" className="hover:text-[#111] transition-colors">
              Política de Privacidad
            </a>
            <a href="mailto:contacto@fyhingenieros.cl" className="hover:text-[#111] transition-colors">
              Términos de Servicio
            </a>
            <span>© {year} FYH Ingenieros. Todos los derechos reservados.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
