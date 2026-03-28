'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { ArrowRight, ArrowLeft, CheckCircle, Shield, Zap, Target } from 'lucide-react';
import emailjs from '@emailjs/browser';

interface FormData { challenge: string; company: string; name: string; email: string; phone: string; message: string; }

const challenges = [
  { icon: Shield, title: 'Ciberseguridad OT', desc: 'Protección infraestructura operacional', value: 'cybersecurity-ot' },
  { icon: Target, title: 'Compliance Regulatorio', desc: 'Ley 21663, NERC, NIS2', value: 'compliance' },
  { icon: Zap, title: 'Transformación Digital', desc: 'Automatización y modernización', value: 'digital-transformation' },
  { icon: null, title: 'Otro Desafío', desc: 'Necesidad específica', value: 'other' },
];

const inputCls = "w-full px-4 py-3.5 bg-pa-card border border-pa-border rounded-xl text-white placeholder-[#555] focus:border-pa-orange focus:ring-1 focus:ring-pa-orange transition-colors";

export default function ProgressiveContactForm() {
  const [step, setStep] = useState(1);
  const [done, setDone] = useState(false);
  const [sending, setSending] = useState(false);
  const { register, handleSubmit, setValue, formState: { errors } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setSending(true);
    try {
      await emailjs.send('service_fyhingenieros', 'template_contact', {
        from_name: data.name, from_email: data.email, company: data.company,
        phone: data.phone || 'N/A', challenge: data.challenge, message: data.message,
        to_email: 'contacto@fyhingenieros.cl',
      }, 'your_public_key');
      setDone(true);
    } catch {
      const ch = challenges.find(c => c.value === data.challenge)?.title || data.challenge;
      window.location.href = `mailto:contacto@fyhingenieros.cl?subject=Consultoría - ${ch}&body=Nombre: ${data.name}%0AEmpresa: ${data.company}%0ATeléfono: ${data.phone}%0AEmail: ${data.email}%0A%0A${data.message}`;
    }
    setSending(false);
  };

  if (done) {
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pa-card text-center !py-16">
        <div className="w-16 h-16 bg-pa-green/10 rounded-full flex items-center justify-center mx-auto mb-5">
          <CheckCircle className="h-8 w-8 text-pa-green" />
        </div>
        <h3 className="text-2xl font-extrabold text-white mb-3">¡Enviado!</h3>
        <p className="text-[#888]">Te contactaremos en menos de 24 horas.</p>
      </motion.div>
    );
  }

  return (
    <div className="pa-card">
      {/* Progress */}
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm text-[#888]">Paso {step} de 3</span>
        <span className="text-xs text-[#666] font-mono">{Math.round((step / 3) * 100)}%</span>
      </div>
      <div className="w-full bg-pa-border rounded-full h-1 mb-8">
        <motion.div className="bg-pa-orange h-1 rounded-full" animate={{ width: `${(step / 3) * 100}%` }} transition={{ duration: 0.3 }} />
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div key="1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-3">
              <h3 className="text-white font-bold text-lg mb-1">¿Tu mayor desafío?</h3>
              <p className="text-[#888] text-sm mb-4">Selecciona un área</p>
              {challenges.map(c => (
                <button key={c.value} type="button" onClick={() => { setValue('challenge', c.value); setStep(2); }}
                  className="w-full text-left p-4 border border-pa-border rounded-xl hover:border-pa-orange transition-all flex items-center gap-4 group">
                  {c.icon && <div className="p-2 bg-pa-orange/10 rounded-lg"><c.icon className="h-5 w-5 text-pa-orange" /></div>}
                  <div className="flex-1">
                    <div className="text-white font-semibold text-sm">{c.title}</div>
                    <div className="text-[#666] text-xs">{c.desc}</div>
                  </div>
                  <ArrowRight className="h-4 w-4 text-[#444] group-hover:text-pa-orange transition-colors" />
                </button>
              ))}
            </motion.div>
          )}
          {step === 2 && (
            <motion.div key="2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-4">
              <h3 className="text-white font-bold text-lg mb-4">Tu información</h3>
              <div><label className="text-sm text-[#ccc] mb-1 block">Empresa *</label><input {...register('company', { required: 'Requerido' })} className={inputCls} placeholder="Razón social" />{errors.company && <p className="text-pa-orange text-xs mt-1">{errors.company.message}</p>}</div>
              <div><label className="text-sm text-[#ccc] mb-1 block">Nombre *</label><input {...register('name', { required: 'Requerido' })} className={inputCls} placeholder="Nombre completo" />{errors.name && <p className="text-pa-orange text-xs mt-1">{errors.name.message}</p>}</div>
              <div><label className="text-sm text-[#ccc] mb-1 block">Email *</label><input {...register('email', { required: 'Requerido', pattern: { value: /^\S+@\S+$/i, message: 'Inválido' } })} type="email" className={inputCls} placeholder="correo@empresa.com" />{errors.email && <p className="text-pa-orange text-xs mt-1">{errors.email.message}</p>}</div>
              <div><label className="text-sm text-[#ccc] mb-1 block">Teléfono</label><input {...register('phone')} className={inputCls} placeholder="+56 9 1234 5678" /></div>
              <div className="flex gap-3 pt-2">
                <button type="button" onClick={() => setStep(1)} className="flex items-center gap-2 px-5 py-3 border border-pa-border rounded-full text-[#888] hover:text-white transition-colors"><ArrowLeft className="h-4 w-4" /> Atrás</button>
                <button type="button" onClick={() => setStep(3)} className="flex-1 pa-btn-orange justify-center">Continuar</button>
              </div>
            </motion.div>
          )}
          {step === 3 && (
            <motion.div key="3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-4">
              <h3 className="text-white font-bold text-lg mb-4">Detalles</h3>
              <div><label className="text-sm text-[#ccc] mb-1 block">Descripción *</label><textarea {...register('message', { required: 'Requerido' })} rows={5} className={`${inputCls} resize-none`} placeholder="Describe tu situación..." />{errors.message && <p className="text-pa-orange text-xs mt-1">{errors.message.message}</p>}</div>
              <div className="flex gap-3 pt-2">
                <button type="button" onClick={() => setStep(2)} className="flex items-center gap-2 px-5 py-3 border border-pa-border rounded-full text-[#888] hover:text-white transition-colors"><ArrowLeft className="h-4 w-4" /> Atrás</button>
                <button type="submit" disabled={sending} className="flex-1 pa-btn-orange justify-center disabled:opacity-50">{sending ? 'Enviando...' : 'Enviar Solicitud'}</button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </form>
    </div>
  );
}
