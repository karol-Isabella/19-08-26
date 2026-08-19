'use client';

import { useState } from 'react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export default function FAQSection() {
  const [openId, setOpenId] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      id: 1,
      question: '¿Cómo me inscribo en un curso del SENA?',
      answer:
        'Para inscribirte en un curso del SENA, accede al portal SOFIA Plus, busca el curso de tu interés, y sigue el proceso de inscripción. Asegúrate de tener todos los documentos requeridos y cumplir con los requisitos previos.',
    },
    {
      id: 2,
      question: '¿Qué documentos necesito para registrarme?',
      answer:
        'Necesitarás una identificación válida (Cédula de Ciudadanía para colombianos o pasaporte para extranjeros), comprobante de residencia e información personal completa. Algunos cursos pueden requerir documentos adicionales.',
    },
    {
      id: 3,
      question: '¿Los certificados del SENA son reconocidos?',
      answer:
        'Sí, los certificados del SENA son reconocidos en toda Colombia e internacionalmente. Certifican tus competencias profesionales adquiridas a través de nuestros programas de formación.',
    },
    {
      id: 4,
      question: '¿Cuál es el costo de la formación del SENA?',
      answer:
        'La formación del SENA es gratuita para los ciudadanos colombianos. SENA es una institución pública financiada por aportes de empleadores y el gobierno colombiano.',
    },
    {
      id: 5,
      question: '¿Puedo acceder a los cursos desde cualquier lugar?',
      answer:
        'Sí, los cursos virtuales se pueden acceder desde cualquier lugar con conexión a internet. Los cursos presenciales deben asistirse en el centro SENA programado.',
    },
  ];

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="w-full bg-gray-50 py-24 md:py-32 border-t-4 border-gray-200">
      <div className="container-fluid">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Preguntas Frecuentes
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Encuentra respuestas a las preguntas más comunes sobre los cursos y el proceso de inscripción en el SENA.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto space-y-5 mb-20">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-green-600 hover:shadow-lg transition-all"
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full flex items-center justify-between p-7 hover:bg-gray-50 transition-colors text-left"
              >
                <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                <span
                  className={`text-green-600 text-2xl transition-transform duration-300 flex-shrink-0 ml-4 ${
                    openId === faq.id ? 'rotate-180' : ''
                  }`}
                >
                  ▼
                </span>
              </button>

              {openId === faq.id && (
                <div className="px-7 pb-7 bg-gray-50 border-t border-gray-200">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 border-4 border-blue-200 rounded-xl p-10 md:p-14">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">¿Necesitas Más Ayuda?</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Contacta a nuestro equipo de soporte para asistencia con inscripción, cursos y certificados.
              </p>
            </div>
            <div className="flex-1 bg-white rounded-lg p-6 space-y-3">
              <p className="text-lg font-semibold text-gray-900">
                📞 Teléfono: +57 (1) 3430111
              </p>
              <p className="text-lg font-semibold text-gray-900">
                🕐 Horario: Lunes a Viernes 7:00 AM - 7:00 PM | Sábado 8:00 AM - 1:00 PM
              </p>
              <p className="text-sm text-gray-600">
                © 2025 Todos los derechos reservados - SENA
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
