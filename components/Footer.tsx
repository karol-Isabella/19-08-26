import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    'About SENA': [
      { label: 'Mission and Vision', href: '#' },
      { label: 'History', href: '#' },
      { label: 'Leadership', href: '#' },
      { label: 'Careers', href: '#' },
    ],
    'Services': [
      { label: 'Virtual Courses', href: '#' },
      { label: 'Enrollment', href: '#' },
      { label: 'Certificates', href: '#' },
      { label: 'Selection Tests', href: '#' },
    ],
    'Support': [
      { label: 'FAQ', href: '#' },
      { label: 'Contact Us', href: '#' },
      { label: 'Technical Support', href: '#' },
      { label: 'Feedback', href: '#' },
    ],
    'Legal': [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Use', href: '#' },
      { label: 'Accessibility', href: '#' },
      { label: 'Disclaimer', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: '📘', href: '#', label: 'Facebook' },
    { icon: '𝕏', href: '#', label: 'Twitter' },
    { icon: '💼', href: '#', label: 'LinkedIn' },
    { icon: '📷', href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="w-full bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="container-fluid py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div className="col-span-1 lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-white mb-2">SOFIA Plus</h3>
              <p className="text-sm text-gray-400">
                Sistema de Oferta de Formación Institucional
              </p>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              SENA's platform for training, growth, and professional development in Colombia.
            </p>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-bold text-white mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-green-500 transition-colors text-sm"
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
        <div className="border-t border-gray-700 pt-8 mb-8">
          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h4 className="font-semibold text-white mb-3">Contact Us</h4>
              <p className="text-sm text-gray-400 mb-2">
                📍 Bogotá, Colombia - SENA Headquarters
              </p>
              <p className="text-sm text-gray-400 mb-2">
                📞 Phone: +57 (1) 3430111
              </p>
              <p className="text-sm text-gray-400">
                📧 Email: sofia@sena.edu.co
              </p>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold text-white mb-3">Follow Us</h4>
              <div className="flex gap-4">
                {socialLinks.map(({ icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    className="w-10 h-10 rounded-full bg-gray-800 hover:bg-green-600 flex items-center justify-center transition-colors group text-lg"
                    aria-label={label}
                  >
                    <span className="group-hover:text-white">{icon}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500">
              © {currentYear} SENA - All rights reserved. {' '}
              <span className="text-gray-400">Servicio Nacional de Aprendizaje</span>
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                Privacy
              </a>
              <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                Terms
              </a>
              <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
