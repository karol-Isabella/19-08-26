import Image from "next/image";

export default function Header() {
  const navItems = [
    { label: "Inicio", href: "#" },
    { label: "Buscar Oferta", href: "#" },
    { label: "Pruebas de Selección", href: "#" },
    { label: "Certificados", href: "#" },
    { label: "Ayuda y Soporte", href: "#" },
  ];

  return (
    <header className="w-full bg-white border-b-4 border-green-600 sticky top-0 z-50 shadow-md">
      {/* Top Section */}
      <div className="container-fluid py-6 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Logo SENA"
              width={50}
              height={50}
              className="h-auto"
            />
            <div>
              <h1 className="text-2xl font-bold text-green-600">SOFIA</h1>
              <p className="text-xs text-gray-600 font-medium">Plus</p>
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-6">
          <Image
            src="/ministerio.png"
            alt="Ministerio del Trabajo"
            width={100}
            height={40}
            className="h-auto"
          />
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-gradient-to-r from-green-600 to-green-500 shadow-lg">
        <div className="container-fluid">
          <ul className="flex items-center justify-start gap-0 py-0">
            {navItems.map((item, index) => (
              <li key={index} className="flex-1">
                <a
                  href={item.href}
                  className="block px-4 py-4 text-white font-semibold text-sm hover:bg-green-700 transition-colors text-center border-b-4 border-transparent hover:border-b-white"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
