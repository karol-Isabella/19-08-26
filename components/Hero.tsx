'use client';

import { useState } from 'react';

export default function Hero() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <section className="w-full pt-32 pb-24 md:pt-40 md:pb-32 bg-white">
      <div className="container-fluid">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-block mb-6 px-3 py-1.5 bg-green-100 rounded-full">
            <p className="text-xs text-green-700 font-semibold">Formación profesional de calidad</p>
          </div>

          {/* Main Title */}
          <h1 className="mb-6">
            Desarrolla tu futuro profesional
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            Accede a programas de formación especializados y desarrolla las competencias que necesitas para crecer profesionalmente.
          </p>

          {/* Search Bar */}
          <div className="card bg-white border-gray-200 max-w-2xl mx-auto mb-14 p-2 flex gap-2">
            <input
              type="text"
              placeholder="¿Qué deseas aprender?"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 bg-transparent border-0 focus:outline-none text-gray-900 placeholder-gray-500 px-4"
            />
            <button className="btn btn-primary px-8 text-sm">
              Buscar
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-10 max-w-2xl mx-auto pt-8 border-t border-gray-200">
            {[
              { num: '250+', label: 'Cursos' },
              { num: '50k+', label: 'Estudiantes' },
              { num: '95%', label: 'Satisfacción' },
            ].map((stat, idx) => (
              <div key={idx}>
                <p className="text-2xl font-bold text-green-600 mb-1">{stat.num}</p>
                <p className="text-xs text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
