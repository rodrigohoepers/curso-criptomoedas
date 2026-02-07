import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Bitcoin } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { path: '/', label: 'Início' },
    { path: '/modulo1', label: 'Módulo 1' },
    { path: '/modulo2', label: 'Módulo 2' },
    { path: '/modulo3', label: 'Módulo 3' },
    { path: '/modulo4', label: 'Módulo 4' },
    { path: '/modulo5', label: 'Módulo 5' },
    { path: '/modulo6', label: 'Módulo 6' },
    { path: '/defi-2025', label: 'DeFi 2025' },
  ];

  return (
    <nav className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-white shadow-2xl sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex-shrink-0 flex items-center gap-2 hover:opacity-80 transition">
            <Bitcoin className="h-8 w-8 text-yellow-400" />
            <span className="font-bold text-xl hidden sm:inline">Curso de Criptomoedas</span>
            <span className="font-bold text-lg sm:hidden">Cripto</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-purple-700 hover:text-white transition duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-purple-700 focus:outline-none transition"
              aria-expanded="false"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-800 border-t border-purple-700">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-purple-700 hover:text-white transition"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
