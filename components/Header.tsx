import Image from "next/image";

export default function Header() {
  const navItems = [
    { label: "Inicio", href: "#" },
    { label: "Cursos", href: "#" },
    { label: "Certificados", href: "#" },
    { label: "Ayuda", href: "#" },
  ];

  return (
    <header className="w-full sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="container-fluid">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <h1 className="text-2xl font-bold text-gray-900">SOFIA</h1>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-14">
            {navItems.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className="text-gray-700 hover:text-green-600 transition font-medium text-base"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <button className="btn btn-primary text-base hidden md:inline-flex px-8">
            Registrarse
          </button>
        </div>
      </div>
    </header>
  );
}
