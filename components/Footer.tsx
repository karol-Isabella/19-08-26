export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Plataforma',
      links: [
        { label: 'Cursos', href: '#' },
        { label: 'Certificados', href: '#' },
        { label: 'Programas', href: '#' },
        { label: 'Precios', href: '#' },
      ],
    },
    {
      title: 'Empresa',
      links: [
        { label: 'Acerca de SENA', href: '#' },
        { label: 'Blog', href: '#' },
        { label: 'Empleo', href: '#' },
        { label: 'Prensa', href: '#' },
      ],
    },
    {
      title: 'Ayuda',
      links: [
        { label: 'Centro de Soporte', href: '#' },
        { label: 'Documentación', href: '#' },
        { label: 'Estado del Sistema', href: '#' },
        { label: 'Contacto', href: '#' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Política de Privacidad', href: '#' },
        { label: 'Términos de Servicio', href: '#' },
        { label: 'Cookies', href: '#' },
        { label: 'Accesibilidad', href: '#' },
      ],
    },
  ];

  return (
    <footer className="w-full bg-gray-900 text-gray-400 py-16 border-t border-gray-800">
      <div className="container-fluid">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-lg font-bold text-white mb-2">SOFIA</h3>
              <p className="text-xs text-gray-500">
                Plataforma de formación profesional del SENA
              </p>
            </div>
            <p className="text-xs leading-relaxed text-gray-500">
              Transformando vidas a través de la educación profesional en Colombia.
            </p>
          </div>

          {/* Links Sections */}
          {footerSections.map((section, idx) => (
            <div key={idx}>
              <h4 className="font-semibold text-white mb-6 text-sm">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-green-500 transition text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-10"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-sm text-gray-500">
            <p>© {currentYear} SOFIA. Todos los derechos reservados.</p>
            <p className="mt-1 text-xs">Servicio Nacional de Aprendizaje - SENA</p>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row gap-8 text-sm">
            <div>
              <p className="text-gray-600 mb-1 font-medium">Teléfono</p>
              <p className="text-white font-semibold">+57 (1) 3430111</p>
            </div>
            <div>
              <p className="text-gray-600 mb-1 font-medium">Email</p>
              <p className="text-white font-semibold">sofia@sena.edu.co</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
