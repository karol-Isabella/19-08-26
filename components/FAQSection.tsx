'use client';

import { useState } from 'react';

interface FAQ {
  id: number;
  question: string;
  answer: string;
}

export default function FAQSection() {
  const [openId, setOpenId] = useState<number | null>(null);

  const faqs: FAQ[] = [
    {
      id: 1,
      question: '¿Cómo me registro en SOFIA Plus?',
      answer: 'El proceso es simple: accede a la plataforma, completa el formulario con tus datos personales, verifica tu correo electrónico y ¡listo! Podrás explorar todos los cursos disponibles de inmediato.',
    },
    {
      id: 2,
      question: '¿Los certificados son reconocidos internacionalmente?',
      answer: 'Sí, todos nuestros certificados son emitidos por el SENA y tienen validez nacional e internacional, reconocidos por el sector empresarial y organismos internacionales.',
    },
    {
      id: 3,
      question: '¿Cuál es el costo de los programas?',
      answer: 'La formación del SENA es completamente gratuita para todos los ciudadanos colombianos. No hay costos de inscripción ni mensualidades de ningún tipo.',
    },
    {
      id: 4,
      question: '¿Puedo estudiar a mi propio ritmo?',
      answer: 'Absolutamente. Nuestros cursos virtuales te permiten aprender 24/7 sin restricciones de horario. Avanza al ritmo que mejor se adapte a tu agenda personal y profesional.',
    },
    {
      id: 5,
      question: '¿Qué soporte tengo durante el curso?',
      answer: 'Contarás con tutores certificados disponibles, foros de discusión, materiales de apoyo, y seguimiento personalizado para asegurar tu éxito académico.',
    },
  ];

  return (
    <section className="w-full py-20 md:py-28 bg-gray-50">
      <div className="container-fluid">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="mb-6">Preguntas Frecuentes</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Resolvemos tus dudas sobre SOFIA y nuestros programas
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto space-y-4 mb-16">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="card cursor-pointer border-gray-200"
              onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-gray-900">{faq.question}</h3>
                <span
                  className={`text-2xl text-green-600 transition-transform duration-300 flex-shrink-0 ${
                    openId === faq.id ? 'rotate-180' : ''
                  }`}
                >
                  ▼
                </span>
              </div>

              {openId === faq.id && (
                <div className="mt-5 pt-5 border-t border-gray-200">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="card bg-green-50 border-green-200 text-center py-10">
          <h3 className="text-xl font-bold text-gray-900 mb-2">¿No encuentras tu respuesta?</h3>
          <p className="text-gray-600 mb-6 text-sm">
            Nuestro equipo de soporte está disponible para ayudarte
          </p>
          <a href="#" className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-semibold text-sm">
            Contactar soporte
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
