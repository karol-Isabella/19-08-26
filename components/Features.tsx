export default function Features() {
  const features = [
    {
      title: 'Acceso Inmediato',
      description: 'Comienza tus cursos sin trámites complicados',
    },
    {
      title: 'Completamente Gratis',
      description: 'Sin costos de inscripción ni mensualidades',
    },
    {
      title: 'Flexibilidad Horaria',
      description: 'Estudia a tu propio ritmo, 24/7',
    },
    {
      title: 'Mentores Expertos',
      description: 'Aprende de profesionales certificados',
    },
    {
      title: 'Certificados Válidos',
      description: 'Reconocidos en el mercado laboral',
    },
    {
      title: 'Comunidad Activa',
      description: 'Networking con otros profesionales',
    },
  ];

  return (
    <section className="w-full py-20 md:py-28 bg-white">
      <div className="container-fluid">
        <div className="text-center mb-16">
          <h2 className="mb-6">Por qué elegir SOFIA</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Beneficios diseñados para tu éxito profesional
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="card text-center hover:border-green-300"
            >
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                <span className="text-lg text-green-600">✓</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
