'use client';

import { useState } from 'react';

export default function Hero() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <section className="w-full bg-gradient-to-b from-gray-50 via-white to-white py-20 md:py-32">
      <div className="container-fluid">
        {/* Title Section */}
        <div className="mb-16 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Administración de Calendario
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Permite la programación de eventos con sus respectivas fechas, horarios, descripciones y más. A través de este módulo, los usuarios de la dirección general del SENA pueden definir eventos a nivel nacional y establecer rangos de fechas para todos los centros.
          </p>
        </div>

        {/* Search Box */}
        <div className="bg-white rounded-xl border border-gray-200 p-8 md:p-12 shadow-lg mb-16">
          <div className="flex flex-col md:flex-row gap-6 items-end">
            <div className="flex-1">
              <label htmlFor="search" className="block text-sm font-semibold text-gray-800 mb-3">
                Buscar en el Portal
              </label>
              <input
                type="text"
                id="search"
                placeholder="Escribe lo que deseas buscar..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-5 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all text-base"
              />
            </div>
            <button className="w-full md:w-auto bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-10 rounded-lg transition-all transform hover:scale-105 active:scale-95 shadow-md">
              Buscar
            </button>
          </div>
        </div>

        {/* Breadcrumb */}
        <div className="mb-16 text-sm text-gray-500">
          <span>Inicio</span>
        </div>

        {/* Details Section */}
        <div className="bg-white rounded-xl border border-gray-200 p-10 md:p-14 shadow-md">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-1 h-12 bg-green-600 rounded-full"></div>
            <h2 className="text-3xl font-bold text-gray-900">Detalles</h2>
          </div>
          
          <p className="text-gray-700 leading-relaxed text-lg mb-8">
            Este módulo permite la programación de eventos con fechas, horarios, descripciones y más información. Los usuarios de la dirección general del SENA podrán definir eventos a nivel nacional y establecer rangos de fechas para todos los centros.
          </p>

          <a href="#" className="inline-flex items-center gap-3 text-green-600 hover:text-green-700 font-semibold text-lg transition-colors group">
            <span>Crear evento de inscripción</span>
            <span className="group-hover:translate-x-2 transition-transform">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
