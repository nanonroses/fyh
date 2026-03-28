'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Search } from 'lucide-react';

const nav = [
  { label: 'Servicios', id: 'servicios' },
  { label: 'Soluciones', id: 'problemas' },
  { label: 'Compliance', id: 'compliance' },
  { label: 'Casos de Éxito', id: 'casos-exito' },
  { label: 'ROI', id: 'roi-calculator' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const goto = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <>
      {/* Top announcement bar */}
      <div className="bg-pa-dark border-b border-pa-border text-center py-2.5 px-4">
        <button onClick={() => goto('servicios')} className="text-sm text-[#ccc] hover:text-white transition-colors">
          <span className="text-pa-green font-semibold">Nuevo</span> — Consultoría especializada en IEC 62443 y Ley 21663 con certificación Dragos y Nozomi
          <span className="text-pa-orange ml-2">→</span>
        </button>
      </div>

      <header className={`sticky top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/95 backdrop-blur-md' : 'bg-black'
      } border-b border-pa-border`}>
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <button onClick={() => goto('inicio')} className="flex items-center gap-2 group">
            <svg width="28" height="28" viewBox="0 0 28 28" className="text-pa-orange">
              <path d="M4 4h8v8H4V4zm12 0h8v8h-8V4zM4 16h8v8H4v-8z" fill="currentColor"/>
            </svg>
            <span className="font-display font-extrabold text-white text-xl tracking-tight">
              fyh<span className="text-pa-orange">.</span>
            </span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {nav.map((item) => (
              <button
                key={item.id}
                onClick={() => goto(item.id)}
                className="px-4 py-2 text-[0.8125rem] text-[#999] hover:text-white transition-colors font-semibold tracking-wide"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-4">
            <button className="text-[#999] hover:text-white transition-colors text-sm font-semibold">
              Contacto
            </button>
            <button
              onClick={() => goto('contacto')}
              className="pa-btn-orange !py-2.5 !px-6 !text-sm"
            >
              Evaluación Gratuita
            </button>
          </div>

          {/* Mobile */}
          <button className="lg:hidden text-white" onClick={() => setOpen(!open)} aria-label="Menú">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden bg-pa-dark border-t border-pa-border px-6 py-6 space-y-2">
            {nav.map((item) => (
              <button key={item.id} onClick={() => goto(item.id)}
                className="block w-full text-left px-4 py-3 text-[#ccc] hover:text-white rounded-lg hover:bg-pa-card transition-colors font-semibold">
                {item.label}
              </button>
            ))}
            <button onClick={() => goto('contacto')} className="w-full pa-btn-orange mt-4 justify-center">
              Evaluación Gratuita
            </button>
          </div>
        )}
      </header>
    </>
  );
}
