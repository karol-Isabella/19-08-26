'use client';

interface ServiceCard {
  id: number;
  icon: string;
  title: string;
  description: string;
  cta: string;
  href: string;
}

export default function Services() {
  const mainServices: ServiceCard[] = [
    {
      id: 1,
      icon: '💻',
      title: 'Cursos Virtuales SENA',
      description: 'Descubre más de 250 programas de formación virtual ofrecidos por el SENA para todos los colombianos. Aprende en línea con flexibilidad horaria.',
      cta: 'Ver Catálogo Completo',
      href: '#',
    },
    {
      id: 2,
      icon: '📅',
      title: 'Cronograma de Inscripción',
      description: 'Conoce las fechas importantes para inscribirte en los programas de formación que ofrece el SENA. Planifica tu proceso de inscripción.',
      cta: 'Ver Cronograma',
      href: '#',
    },
  ];

  const infoCards = [
    {
      id: 1,
      title: 'Boletines',
      description: 'Boletín No. 86, Julio 19 / 2018 - Tema: Borrar caché. Recibe información importante del SENA.',
      cta: 'Ver más',
      href: '#',
    },
    {
      id: 2,
      title: 'Preguntas Frecuentes',
      description: 'Resuelve tus dudas sobre información general, registro, inscripción, selección y matrícula en nuestros programas.',
      cta: 'Ver más',
      href: '#',
    },
    {
      id: 3,
      title: 'Seguridad',
      description: 'Navega seguro en la web siguiendo las mejores prácticas de seguridad. Protege tu información personal.',
      cta: 'Ver más',
      href: '#',
    },
  ];

  return (
    <section className="w-full bg-white py-24 md:py-32">
      <div className="container-fluid">
        {/* Main Services */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-24">
          {mainServices.map((service) => (
            <div
              key={service.id}
              className="group bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border border-gray-200 p-10 md:p-12 hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="text-5xl mb-6">{service.icon}</div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-700 mb-8 leading-relaxed flex-1">{service.description}</p>

              <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 rounded-lg transition-all transform hover:scale-105 active:scale-95 shadow-md">
                {service.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-1 bg-gray-200 mb-24"></div>

        {/* Info Cards Section */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Información Adicional
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {infoCards.map((card) => (
              <div
                key={card.id}
                className="bg-white border border-gray-200 rounded-xl p-8 hover:border-green-600 hover:shadow-lg transition-all group"
              >
                <h4 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">
                  {card.title}
                </h4>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {card.description}
                </p>

                <a
                  href={card.href}
                  className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-semibold transition-colors group"
                >
                  {card.cta}
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
