'use client';

export default function CallToAction() {
  return (
    <section className="w-full bg-gradient-to-r from-green-600 to-green-500 py-24 md:py-32">
      <div className="container-fluid">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Busca y Encuentra Tu Curso Perfecto
            </h2>
            <p className="text-lg text-green-50 leading-relaxed">
              Con más de 250 programas de formación disponibles, SOFIA Plus es tu puerta de entrada al desarrollo profesional y crecimiento personal.
            </p>
          </div>

          <div className="flex-1 w-full">
            <div className="bg-white rounded-xl shadow-2xl p-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                Búsqueda Rápida
              </h3>

              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-2">
                    Nombre del Curso
                  </label>
                  <input
                    type="text"
                    placeholder="Escribe el nombre del curso..."
                    className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-2">
                    Región
                  </label>
                  <select className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-all">
                    <option>Selecciona una región</option>
                    <option>Todas</option>
                    <option>Bogotá</option>
                    <option>Medellín</option>
                    <option>Cali</option>
                    <option>Barranquilla</option>
                  </select>
                </div>

                <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 rounded-lg transition-all transform hover:scale-105 active:scale-95 shadow-md text-lg">
                  Buscar Ahora
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
