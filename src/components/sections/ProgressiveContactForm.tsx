'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { ArrowRight, ArrowLeft, CheckCircle, Calendar, Shield, Zap, Target } from 'lucide-react';
import emailjs from '@emailjs/browser';

interface FormData {
  challenge: string;
  company: string;
  name: string;
  email: string;
  phone: string;
  message: string;
}

const ProgressiveContactForm: React.FC = () => {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, setValue, formState: { errors } } = useForm<FormData>();

  const challenges = [
    {
      icon: Shield,
      title: "Ciberseguridad OT Crítica",
      description: "Protección de infraestructura operacional",
      value: "cybersecurity-ot"
    },
    {
      icon: Target,
      title: "Compliance Regulatorio",
      description: "Cumplimiento Ley 21663, NERC, NIS2",
      value: "compliance"
    },
    {
      icon: Zap,
      title: "Transformación Digital",
      description: "Automatización y modernización",
      value: "digital-transformation"
    },
    {
      title: "Otro Desafío",
      description: "Tengo una necesidad específica",
      value: "other"
    }
  ];

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    try {
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        company: data.company,
        phone: data.phone || 'No proporcionado',
        challenge: data.challenge,
        message: data.message,
        to_email: 'contacto@fyhingenieros.cl'
      };

      await emailjs.send(
        'service_fyhingenieros',
        'template_contact',
        templateParams,
        'your_public_key'
      );

      setIsSubmitted(true);
    } catch (error) {
      console.error('Error enviando email:', error);

      // Fallback a mailto
      const challenge = challenges.find(c => c.value === data.challenge)?.title || data.challenge;
      const mailtoLink = `mailto:contacto@fyhingenieros.cl?subject=Consultoría Enterprise - ${challenge}&body=Nombre: ${data.name}%0AEmpresa: ${data.company}%0ATeléfono: ${data.phone}%0AEmail: ${data.email}%0ADesafío principal: ${challenge}%0A%0ADetalles:%0A${data.message}`;
      window.location.href = mailtoLink;
    }

    setIsSubmitting(false);
  };

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const selectChallenge = (value: string) => {
    setValue('challenge', value);
    nextStep();
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-3xl p-12 shadow-2xl text-center"
      >
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="h-10 w-10 text-green-600" />
        </div>
        <h3 className="text-3xl font-bold text-slate-900 mb-4">¡Consulta Enviada!</h3>
        <p className="text-lg text-slate-600">
          Nuestro equipo se pondrá en contacto contigo dentro de las próximas 24 horas
          para agendar tu consultoría estratégica.
        </p>
      </motion.div>
    );
  }

  return (
    <div className="bg-white rounded-3xl p-8 shadow-2xl">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-medium text-slate-600">Paso {step} de 3</span>
          <span className="text-sm text-slate-500">{Math.round((step / 3) * 100)}% completado</span>
        </div>
        <div className="w-full bg-slate-200 rounded-full h-2">
          <motion.div
            className="bg-gradient-to-r from-cyan-500 to-blue-600 h-2 rounded-full"
            initial={{ width: "33%" }}
            animate={{ width: `${(step / 3) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <AnimatePresence mode="wait">
          {/* Step 1: Challenge Selection */}
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="space-y-6"
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  ¿Cuál es tu mayor desafío?
                </h3>
                <p className="text-slate-600">
                  Selecciona el área donde necesitas mayor apoyo
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {challenges.map((challenge, index) => (
                  <motion.button
                    key={challenge.value}
                    type="button"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => selectChallenge(challenge.value)}
                    className="group text-left p-6 border border-slate-200 rounded-2xl hover:border-cyan-500 hover:bg-cyan-50 transition-all focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  >
                    <div className="flex items-start space-x-4">
                      {challenge.icon && (
                        <div className="bg-cyan-100 p-3 rounded-xl group-hover:bg-cyan-200 transition-colors">
                          <challenge.icon className="h-6 w-6 text-cyan-600" />
                        </div>
                      )}
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-1">{challenge.title}</h4>
                        <p className="text-sm text-slate-600">{challenge.description}</p>
                      </div>
                      <ArrowRight className="h-5 w-5 text-slate-400 group-hover:text-cyan-600 transition-colors ml-auto" />
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}

          {/* Step 2: Company Info */}
          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="space-y-6"
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  Información de tu empresa
                </h3>
                <p className="text-slate-600">
                  Necesitamos algunos datos para personalizar tu consultoría
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Empresa *
                  </label>
                  <input
                    {...register('company', { required: 'La empresa es requerida' })}
                    className="w-full px-4 py-4 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                    placeholder="Razón social de tu empresa"
                  />
                  {errors.company && <p className="text-red-500 text-sm mt-1">{errors.company.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Tu nombre *
                  </label>
                  <input
                    {...register('name', { required: 'El nombre es requerido' })}
                    className="w-full px-4 py-4 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                    placeholder="Nombre y apellido"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Email corporativo *
                  </label>
                  <input
                    {...register('email', {
                      required: 'El email es requerido',
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: 'Email inválido'
                      }
                    })}
                    type="email"
                    className="w-full px-4 py-4 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                    placeholder="ejecutivo@empresa.com"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Teléfono directo
                  </label>
                  <input
                    {...register('phone')}
                    className="w-full px-4 py-4 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                    placeholder="+56 9 1234 5678"
                  />
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={prevStep}
                  className="flex items-center gap-2 px-6 py-3 border border-slate-300 rounded-xl text-slate-600 hover:bg-slate-50 transition-all"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Anterior
                </button>
                <button
                  type="button"
                  onClick={nextStep}
                  className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-cyan-400 hover:to-blue-500 transition-all"
                >
                  Continuar
                </button>
              </div>
            </motion.div>
          )}

          {/* Step 3: Details */}
          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="space-y-6"
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  Cuéntanos más detalles
                </h3>
                <p className="text-slate-600">
                  Describe tu situación actual y objetivos
                </p>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Descripción del desafío *
                </label>
                <textarea
                  {...register('message', { required: 'Describe tu situación' })}
                  rows={6}
                  className="w-full px-4 py-4 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all resize-none"
                  placeholder="Describe tu situación actual, objetivos principales, y cualquier requerimiento específico que tengas..."
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
              </div>

              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={prevStep}
                  className="flex items-center gap-2 px-6 py-3 border border-slate-300 rounded-xl text-slate-600 hover:bg-slate-50 transition-all"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Anterior
                </button>
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 group bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 disabled:opacity-50 disabled:cursor-not-allowed text-white py-4 px-6 rounded-2xl font-semibold flex items-center justify-center space-x-3 transition-all shadow-lg hover:shadow-cyan-500/25"
                >
                  <Calendar size={20} />
                  <span>{isSubmitting ? 'Enviando...' : 'Agendar Consultoría'}</span>
                  {!isSubmitting && <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </form>
    </div>
  );
};

export default ProgressiveContactForm;