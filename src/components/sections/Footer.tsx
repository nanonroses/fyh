'use client';

import { Mail, Phone, MapPin } from 'lucide-react';

const products = ['Protección OT Avanzada', 'Compliance Regulatorio', 'Automatización Inteligente', 'Transformación Digital OT', 'Assessment Diagnóstico'];
const solutions = ['Minería', 'Banca y Finanzas', 'Energía', 'Infraestructura Crítica', 'Manufactura'];
const company = ['Casos de Éxito', 'Partners', 'Contacto'];
const compliance = ['Ley 21663', 'NERC CIP', 'NIS2', 'ISO 27001', 'MITRE ATT&CK'];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-pa-footer text-[#333]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <svg width="24" height="24" viewBox="0 0 28 28" className="text-pa-orange">
                <path d="M4 4h8v8H4V4zm12 0h8v8h-8V4zM4 16h8v8H4v-8z" fill="currentColor"/>
              </svg>
              <span className="font-extrabold text-xl text-[#111] tracking-tight">
                fyh<span className="text-pa-orange">.</span>
              </span>
            </div>
            <p className="text-sm text-[#666] mb-4 leading-relaxed">
              Consultores especializados en ciberseguridad OT, compliance IEC 62443 y protección de infraestructura crítica.
            </p>
            <div className="space-y-2">
              <a href="mailto:contacto@fyhingenieros.cl" className="flex items-center gap-2 text-sm text-[#666] hover:text-[#111] transition-colors">
                <Mail className="h-4 w-4" /> contacto@fyhingenieros.cl
              </a>
              <a href="tel:+56962116017" className="flex items-center gap-2 text-sm text-[#666] hover:text-[#111] transition-colors">
                <Phone className="h-4 w-4" /> +56 9 6211 6017
              </a>
              <div className="flex items-center gap-2 text-sm text-[#888]">
                <MapPin className="h-4 w-4" /> Chile
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-[#111] text-sm mb-4">Servicios</h4>
            <ul className="space-y-2.5">{products.map(p => <li key={p}><span className="text-sm text-[#666] hover:text-[#111] cursor-pointer transition-colors">{p}</span></li>)}</ul>
          </div>
          <div>
            <h4 className="font-bold text-[#111] text-sm mb-4">Industrias</h4>
            <ul className="space-y-2.5">{solutions.map(s => <li key={s}><span className="text-sm text-[#666]">{s}</span></li>)}</ul>
          </div>
          <div>
            <h4 className="font-bold text-[#111] text-sm mb-4">Compliance</h4>
            <ul className="space-y-2.5">{compliance.map(c => <li key={c}><span className="text-sm text-[#666]">{c}</span></li>)}</ul>
          </div>
          <div>
            <h4 className="font-bold text-[#111] text-sm mb-4">Empresa</h4>
            <ul className="space-y-2.5">{company.map(c => <li key={c}><span className="text-sm text-[#666] hover:text-[#111] cursor-pointer transition-colors">{c}</span></li>)}</ul>
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
            <span className="hover:text-[#111] cursor-pointer">Privacidad</span>
            <span className="hover:text-[#111] cursor-pointer">Términos</span>
            <span>© {year} FYH Ingenieros</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
