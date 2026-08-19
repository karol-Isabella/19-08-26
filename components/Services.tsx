'use client';

interface Service {
  id: number;
  title: string;
  description: string;
  features: string[];
  icon: string;
}

export default function Services() {
  const services: Service[] = [
    {
      id: 1,
      icon: '01',
      title: 'Cursos Virtuales',
      description: 'Accede a una amplia variedad de programas de formación en línea con flexibilidad de horarios.',
      features: ['Más de 250 cursos', 'Tutores certificados', 'Acceso 24/7'],
    },
    {
      id: 2,
      icon: '02',
      title: 'Certificados Profesionales',
      description: 'Obtén credenciales reconocidas que validen tus competencias profesionales.',
      features: ['Reconocimiento nacional', 'Validez internacional', 'Amplio valor en mercado'],
    },
    {
      id: 3,
      icon: '03',
      title: 'Seguimiento Personalizado',
      description: 'Recibe orientación continua y monitoreo de tu progreso académico.',
      features: ['Tutor asignado', 'Reportes detallados', 'Mentoría constante'],
    },
    {
      id: 4,
      icon: '04',
      title: 'Red de Profesionales',
      description: 'Conecta con una comunidad de estudiantes y profesionales del sector.',
      features: ['Networking activo', 'Oportunidades laborales', 'Colaboraciones'],
    },
  ];

  return (
    <section className="w-full py-20 md:py-28 bg-gray-50">
      <div className="container-fluid">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="mb-6">Lo que ofrecemos</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Servicios diseñados para impulsar tu carrera profesional
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          {services.map((service) => (
            <div key={service.id} className="card">
              {/* Icon */}
              <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center mb-6">
                <span className="text-xl font-bold text-green-600">{service.icon}</span>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed text-sm">{service.description}</p>

              {/* Features */}
              <ul className="space-y-3 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-green-600 font-bold text-lg leading-none mt-0.5">•</span>
                    <span className="text-gray-700 font-medium text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Link */}
              <a href="#" className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-semibold text-sm">
                Conocer más
                <span>→</span>
              </a>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-green-600 to-green-500 rounded-lg p-12 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Comienza tu transformación hoy</h3>
          <p className="text-green-100 mb-8 text-base max-w-2xl mx-auto">
            Miles de profesionales ya han avanzado su carrera con SOFIA
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn btn-primary bg-white text-green-600 hover:bg-gray-50 px-8">
              Registrarse Gratis
            </button>
            <button className="btn btn-outline border-white text-white hover:bg-white hover:text-green-600 px-8">
              Ver Programas
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
